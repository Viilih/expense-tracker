import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "./ui/dialog";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "./ui/form";
import {
  TAddTransactionForm,
  AddTransactionFormSchema,
} from "@/schemas/AddTransactionSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { CurrencyInput } from "./CurrencyInput";

export const AddTransaction = () => {
  const initialFormValue: TAddTransactionForm = {
    category: "",
    transactionValue: 0,
  };
  const addTransactionForm = useForm<TAddTransactionForm>({
    resolver: zodResolver(AddTransactionFormSchema),
    defaultValues: initialFormValue,
  });

  const handleSubmitForm = (values: TAddTransactionForm) => {
    console.log(values);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-1/6 bg-slate-50 text-slate-950 hover:bg-slate-600 hover:text-slate-50">
          Adicionar transação
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-slate-950">
        <DialogHeader className="text-slate-50 text-2xl font-semibold">
          Add Transaction
        </DialogHeader>
        <div>
          {/* <form action="" className="space-y-6">
              <div className="flex items-center justify-between">
                <InputContainer>
                  <Label className="text-slate-50">Category</Label>
                  <Select>
                    <SelectTrigger className="w-[220px]">
                      <SelectValue placeholder="Type of transaction" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="light">Transport</SelectItem>
                      <SelectItem value="dark">Clothes</SelectItem>
                      <SelectItem value="system">College</SelectItem>
                    </SelectContent>
                  </Select>
                </InputContainer>
                <InputContainer>
                  <Label className="text-slate-50">Value</Label>
                  <Input
                    type="number"
                    placeholder="R$300,00"
                    className="w-[220px]"
                  />
                </InputContainer>
              </div>
              <div className="flex justify-between items-center">
                <div className="w-1/2 justify-end">
                  <InputContainer>
                    <Label className="text-slate-50">
                      Date of the transaction
                    </Label>
                    <DatePicker
                      date={date}
                      setDate={setDate}
                      className="w-[220px]"
                    />
                  </InputContainer>
                </div>
                <div className="w-1/2 flex justify-end">
                  <InputContainer>
                    <Label className="text-slate-50">Method</Label>
                    <Select>
                      <SelectTrigger className="w-[220px]">
                        <SelectValue placeholder="Payment method" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="light">Credit card</SelectItem>
                        <SelectItem value="dark">Debit card</SelectItem>
                        <SelectItem value="system">PIX</SelectItem>
                      </SelectContent>
                    </Select>
                  </InputContainer>
                </div>
              </div>
              <div>
                <InputContainer>
                  <Label className="text-slate-50">Description</Label>
                  <Input
                    type="text"
                    placeholder="Describe the purpose of the transaction here..."
                  />
                </InputContainer>
              </div>
            </form> */}
          <Form {...addTransactionForm}>
            <form
              onSubmit={addTransactionForm.handleSubmit(handleSubmitForm)}
              className="space-y-8"
            >
              <div className="flex items-center justify-between">
                <FormField
                  control={addTransactionForm.control}
                  name="category"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-slate-50">Username</FormLabel>
                      <FormControl>
                        <Select onValueChange={field.onChange}>
                          <SelectTrigger className="w-[220px]" {...field}>
                            <SelectValue placeholder="Type of transaction" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="light">Transport</SelectItem>
                            <SelectItem value="dark">Clothes</SelectItem>
                            <SelectItem value="system">College</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <CurrencyInput
                  label="Valor"
                  form={addTransactionForm}
                  placeholder="Type the value"
                  name="transactionValue"
                />
              </div>
              <DialogFooter className="flex justify-between">
                <DialogClose asChild>
                  <Button variant="outline" className="w-[220px]">
                    Cancel
                  </Button>
                </DialogClose>
                <Button className="w-[220px]" type="submit">
                  Add
                </Button>
              </DialogFooter>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
};
