"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export function ContactForm() {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [pending, setPending] = useState(false);

  function validate() {
    const errs: Record<string, string> = {};
    if (!name.trim()) errs.name = "Имя обязательно";
    if (!contact.trim()) errs.contact = "Контакт обязателен";
    if (!message.trim()) errs.message = "Сообщение обязательно";
    return errs;
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setPending(true);
    const id = toast.loading("Отправляем...");
    await new Promise((r) => setTimeout(r, 1000));
    toast.success("Заявка отправлена! Я свяжусь с вами в ближайшее время.", { id });
    setName("");
    setContact("");
    setMessage("");
    setPending(false);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="space-y-2">
        <label htmlFor="contact-name" className="text-sm font-medium">Имя</label>
        <Input id="contact-name" placeholder="Как к вам обращаться?" value={name} onChange={(e) => setName(e.target.value)} />
        {errors.name && <p className="text-sm text-destructive">{errors.name}</p>}
      </div>
      <div className="space-y-2">
        <label htmlFor="contact-contact" className="text-sm font-medium">Контакт</label>
        <Input id="contact-contact" placeholder="Телефон или email" value={contact} onChange={(e) => setContact(e.target.value)} />
        {errors.contact && <p className="text-sm text-destructive">{errors.contact}</p>}
      </div>
      <div className="space-y-2">
        <label htmlFor="contact-message" className="text-sm font-medium">Сообщение</label>
        <Textarea id="contact-message" placeholder="Опишите, что вас интересует" value={message} onChange={(e) => setMessage(e.target.value)} />
        {errors.message && <p className="text-sm text-destructive">{errors.message}</p>}
      </div>
      <Button type="submit" disabled={pending}>
        <Send className="mr-2 h-4 w-4" />
        {pending ? "Отправка..." : "Отправить заявку"}
      </Button>
    </form>
  );
}
