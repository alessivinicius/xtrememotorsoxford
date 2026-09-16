"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { Button } from "@/components/ui/Button";

interface ContactFormProps {
  defaultMessage?: string;
  defaultSubject?: string;
}

// NOTE: This form does not yet submit anywhere. Wire the onSubmit handler
// up to an API route / email provider (e.g. Resend, Formspree) before
// launch. It currently only demonstrates the intended UX.
export function ContactForm({ defaultMessage = "", defaultSubject = "" }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="border border-ink/10 bg-paper-white p-8 text-center">
        <h3 className="font-display text-xl text-ink">Thank you</h3>
        <p className="mt-2 text-sm text-ash">
          Your message has been received. We'll get back to you as soon as we
          can.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-xs font-semibold uppercase tracking-widest2 text-ash">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full border border-ink/15 bg-paper-white px-4 py-3 text-sm text-ink focus:border-accent focus:outline-none"
          />
        </div>
        <div>
          <label htmlFor="phone" className="mb-2 block text-xs font-semibold uppercase tracking-widest2 text-ash">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            className="w-full border border-ink/15 bg-paper-white px-4 py-3 text-sm text-ink focus:border-accent focus:outline-none"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="mb-2 block text-xs font-semibold uppercase tracking-widest2 text-ash">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full border border-ink/15 bg-paper-white px-4 py-3 text-sm text-ink focus:border-accent focus:outline-none"
        />
      </div>

      {defaultSubject ? (
        <div>
          <label htmlFor="subject" className="mb-2 block text-xs font-semibold uppercase tracking-widest2 text-ash">
            Subject
          </label>
          <input
            id="subject"
            name="subject"
            type="text"
            defaultValue={defaultSubject}
            className="w-full border border-ink/15 bg-paper-white px-4 py-3 text-sm text-ink focus:border-accent focus:outline-none"
          />
        </div>
      ) : null}

      <div>
        <label htmlFor="message" className="mb-2 block text-xs font-semibold uppercase tracking-widest2 text-ash">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          defaultValue={defaultMessage}
          required
          className="w-full border border-ink/15 bg-paper-white px-4 py-3 text-sm text-ink focus:border-accent focus:outline-none"
        />
      </div>

      <Button type="submit" variant="primary" className="w-full sm:w-auto">
        Send Message
      </Button>
    </form>
  );
}
