"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { toast } from "sonner";

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
        <input
          id="contact-name"
          className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm"
          placeholder="Как к вам обращаться?"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
      </div>
      <div className="space-y-2">
        <label htmlFor="contact-contact" className="text-sm font-medium">Контакт</label>
        <input
          id="contact-contact"
          className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm"
          placeholder="Телефон или email"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
        />
        {errors.contact && <p className="text-sm text-red-500">{errors.contact}</p>}
      </div>
      <div className="space-y-2">
        <label htmlFor="contact-message" className="text-sm font-medium">Сообщение</label>
        <textarea
          id="contact-message"
          className="flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm"
          placeholder="Опишите, что вас интересует"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        {errors.message && <p className="text-sm text-red-500">{errors.message}</p>}
      </div>
      <button
        type="submit"
        disabled={pending}
        className="inline-flex items-center justify-center gap-2 rounded-md bg-primary text-primary-foreground h-9 px-4 py-2 text-sm font-medium shadow hover:bg-primary/90 disabled:opacity-50"
      >
        <Send className="h-4 w-4" />
        {pending ? "Отправка..." : "Отправить заявку"}
      </button>
    </form>
  );
}
