import { UseFormReturn } from "react-hook-form";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import React, { useEffect, useReducer } from "react";

interface CurrencyInputProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  form: UseFormReturn<any>;
  name: string;
  label: string;
  placeholder: string;
}

const formatCurrency = Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

const formatInputValueReducer = (_: string, nextValue: string) => {
  const currencyDigits = nextValue.replace(/\D/g, "");
  return formatCurrency.format(Number(currencyDigits) / 100);
};

export const CurrencyInput: React.FC<CurrencyInputProps> = React.forwardRef<
  HTMLInputElement,
  CurrencyInputProps
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
>(({ form, name, label, placeholder }, _ref) => {
  const initialInputValue = form.getValues()[name];
  const [value, setValue] = useReducer(
    formatInputValueReducer,
    initialInputValue
  );
  useEffect(() => {
    setValue("");
  }, []);

  const handleChange = (
    realChangeFn: (value: number) => void,
    formattedValue: string
  ) => {
    const digits = formattedValue.replace(/\D/g, "");
    const realValue = Number(digits) / 100;
    realChangeFn(realValue);
  };
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => {
        field.value = value;
        const _change = field.onChange;
        return (
          <FormItem>
            <FormLabel className="text-slate-50">{label}</FormLabel>
            <FormControl>
              <Input
                {...field}
                placeholder={placeholder}
                className="w-[220px]"
                onChange={(ev) => {
                  setValue(ev.target.value);
                  handleChange(_change, ev.target.value);
                }}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        );
      }}
    />
  );
});
