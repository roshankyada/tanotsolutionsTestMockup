"use client";

import { type FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";

const fields = [
  { id: "firstName", label: "First name", type: "text", autoComplete: "given-name" },
  { id: "lastName", label: "Last name", type: "text", autoComplete: "family-name" },
  { id: "email", label: "Email", type: "email", autoComplete: "email" },
  { id: "website", label: "Website / URL", type: "url", autoComplete: "url" },
  { id: "help", label: "How can we help?", type: "text", autoComplete: "off" },
] as const;

export function StrategyForm() {
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div
        className="rounded-lg border border-brand/30 bg-wash p-6"
        role="status"
      >
        <p className="text-lg font-bold text-ink">Request received</p>
        <p className="mt-2 text-sm leading-6 text-muted">
          Thanks. This mockup does not send data to a server. On the live site,
          this form opens a strategy conversation with the Tanot team.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-3.5" noValidate={false}>
      {fields.map((field) => (
        <div key={field.id}>
          <label
            htmlFor={field.id}
            className="mb-1.5 block text-[13px] font-semibold text-ink"
          >
            {field.label}
            <span className="text-danger" aria-hidden="true">
              {" "}
              *
            </span>
          </label>
          <input
            id={field.id}
            name={field.id}
            type={field.type}
            autoComplete={field.autoComplete}
            required
            className="min-h-11 w-full rounded-md border border-line bg-white px-3 text-sm text-ink"
          />
        </div>
      ))}
      <Button type="submit" className="w-full">
        Submit
      </Button>
    </form>
  );
}
