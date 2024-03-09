import React, { useState } from "react";
import { Input } from "./ui/input";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Label } from "./ui/label";
import { DatePicker } from "./Datepicker";
import { InputContainer } from "./InputFormContainer";

export const AddTransactionForm = () => {
  const [date, setDate] = useState<Date>();
  return (
    <div>
      <form action="" className="space-y-6">
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
            <Input type="number" placeholder="R$300,00" className="w-[220px]" />
          </InputContainer>
        </div>
        <div className="flex justify-between items-center">
          <div className="w-1/2 justify-end">
            <InputContainer>
              <Label className="text-slate-50">Date of the transaction</Label>
              <DatePicker date={date} setDate={setDate} className="w-[220px]" />
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
      </form>
    </div>
  );
};
