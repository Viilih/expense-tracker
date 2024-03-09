import { z } from "zod";

export const AddTransactionFormSchema = z.object({
  category: z.string().min(2, {
    message: "category must be at least 2 characters.",
  }),
  transactionValue: z.number(),
  //   transactionValue: z.number(),
  //   date: z.date(),
  //   paymentMethod: z.object({
  //     title: z.string(),
  //     value: z.string(),
  //   }),
  //   description: z.string(),
});

export type TAddTransactionForm = z.infer<typeof AddTransactionFormSchema>;
