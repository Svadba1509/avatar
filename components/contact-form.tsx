"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { contactFormSchema } from "@/lib/validation/contact";

export function ContactForm() {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [pending, setPending] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrors({});

    const parsed = contactFormSchema.safeParse({ name, contact, message });
    if (!parsed.success) {
      const flat = parsed.error.flatten();
      setErrors({
        name: flat.fieldErrors.name?.[0] || "",
        contact: flat.fieldErrors.contact?.[0] || "",
        message: flat.fieldErrors.message?.[0] || "",
      });
      return;
    }

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
        <Input id="contact-name" placeholder="Как к вам обращаться?" value={name} onChange={(e) => setName(e.target.value)} aria-invalid={!!errors.name} />
        {errors.name && <p className="text-sm text-destructive">{errors.name}</p>}
      </div>
      <div className="space-y-2">
        <label htmlFor="contact-contact" className="text-sm font-medium">Контакт</label>
        <Input id="contact-contact" placeholder="Телефон или email" value={contact} onChange={(e) => setContact(e.target.value)} aria-invalid={!!errors.contact} />
        {errors.contact && <p className="text-sm text-destructive">{errors.contact}</p>}
      </div>
      <div className="space-y-2">
        <label htmlFor="contact-message" className="text-sm font-medium">Сообщение</label>
        <Textarea id="contact-message" placeholder="Опишите, что вас интересует" value={message} onChange={(e) => setMessage(e.target.value)} aria-invalid={!!errors.message} />
        {errors.message && <p className="text-sm text-destructive">{errors.message}</p>}
      </div>
      <Button type="submit" disabled={pending}>
        <Send className="mr-2 h-4 w-4" />
        {pending ? "Отправка..." : "Отправить заявку"}
      </Button>
    </form>
  );
}
