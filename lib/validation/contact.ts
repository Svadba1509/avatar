import { z } from "zod";

const phoneRegex = /^[\d\s\-+()]{7,20}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const contactFormSchema = z.object({
  name: z.string({ message: "Имя обязательно" }).min(1, "Имя обязательно"),
  contact: z
    .string({ message: "Контакт обязателен" })
    .min(1, "Контакт обязателен")
    .refine(
      (val) => phoneRegex.test(val) || emailRegex.test(val),
      "Введите корректный email или телефон"
    ),
  message: z
    .string({ message: "Сообщение обязательно" })
    .min(1, "Сообщение обязательно"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
