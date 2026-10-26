"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import { type FormEvent, type ReactNode, useState } from "react";
import { profile } from "@/lib/content";
import { LinkedInIcon } from "@/components/linkedin-icon";
import { ResumeLink } from "@/components/resume-link";
import { Section, SectionHeading } from "@/components/section";

type Errors = Partial<Record<"name" | "email" | "message", string>>;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function Contact() {
  const [errors, setErrors] = useState<Errors>({});
  const [ready, setReady] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const next: Errors = {};

    if (!name) next.name = "Enter your name.";
    if (!email || !emailPattern.test(email)) next.email = "Enter a valid email address.";
    if (!message) next.message = "Write a short message.";

    setErrors(next);
    if (Object.keys(next).length > 0) {
      setReady(false);
      const key = (Object.keys(next) as Array<keyof Errors>)[0];
      const field = form.elements.namedItem(key);
      if (field instanceof HTMLElement) field.focus();
      return;
    }

    const subject = encodeURIComponent(`Message from ${name}`);
    const body = encodeURIComponent(`${message}\n\nFrom: ${name}\nEmail: ${email}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setReady(true);
  }

  function onInput(event: FormEvent<HTMLFormElement>) {
    const target = event.target;
    if (!(target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement)) return;
    const key = target.name as keyof Errors;
    if (errors[key]) {
      setErrors((current) => {
        const copy = { ...current };
        delete copy[key];
        return copy;
      });
    }
    if (ready) setReady(false);
  }

  return (
    <Section id="contact" labelId="contact-title">
      <SectionHeading
        id="contact-title"
        index="07"
        eyebrow="Contact"
        title="Start a conversation"
        lede="For an internship conversation, or a question about the coursework. The form opens an email draft. Nothing is stored on this site."
      />
      <div className="mt-10 grid gap-5 lg:grid-cols-[minmax(260px,0.85fr)_minmax(0,1.15fr)]">
        <div className="space-y-3">
          <ContactRow href={`mailto:${profile.email}`} icon={<Mail className="size-5" aria-hidden />} label="Email">
            {profile.email}
          </ContactRow>
          <ContactRow href={profile.phoneHref} icon={<Phone className="size-5" aria-hidden />} label="Phone">
            {profile.phoneDisplay}
          </ContactRow>
          <ContactRow
            href={profile.linkedinHref}
            external
            icon={<LinkedInIcon className="size-5" />}
            label="LinkedIn"
          >
            {profile.linkedinDisplay}
          </ContactRow>
          <div className="glass flex gap-4 p-4">
            <span className="grid size-11 shrink-0 place-items-center rounded-2xl border border-white/10 bg-white/5 text-glow">
              <MapPin className="size-5" aria-hidden />
            </span>
            <span>
              <span className="block font-mono text-[10px] uppercase tracking-[0.18em] text-mute">Location</span>
              <span className="mt-1 block text-mist">{profile.location}</span>
            </span>
          </div>
          <ResumeLink variant="ghost" className="w-full sm:w-auto" />
        </div>

        <form className="glass p-6 sm:p-7" onSubmit={onSubmit} onInput={onInput} noValidate>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field
              id="contact-name"
              name="name"
              label="Name"
              autoComplete="name"
              placeholder="Your name"
              error={errors.name}
              maxLength={120}
            />
            <Field
              id="contact-email"
              name="email"
              type="email"
              label="Email"
              autoComplete="email"
              placeholder="you@email.com"
              error={errors.email}
              maxLength={200}
            />
          </div>
          <div className="mt-4">
            <label htmlFor="contact-message" className="mb-2 block text-sm text-mist">
              Message
            </label>
            <textarea
              id="contact-message"
              name="message"
              rows={6}
              maxLength={1500}
              placeholder="What would you like to discuss?"
              className="field resize-y"
              aria-invalid={errors.message ? true : undefined}
              aria-describedby={errors.message ? "contact-message-error" : undefined}
            />
            {errors.message ? (
              <p id="contact-message-error" className="mt-2 text-sm text-rose-300">
                {errors.message}
              </p>
            ) : null}
          </div>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <button type="submit" className="btn btn-primary">
              Open email draft
            </button>
            <p className="text-sm text-mute">Addressed to {profile.email}</p>
          </div>
          <div aria-live="polite" className="mt-4">
            {ready ? (
              <p className="rounded-2xl border border-cyan-200/30 bg-cyan-200/10 px-4 py-3 text-sm leading-relaxed text-mist">
                Your email app should open with this draft. If it did not, write directly to {profile.email}.
              </p>
            ) : null}
          </div>
          <noscript>
            <p className="mt-4 text-sm text-mute">
              Email {profile.email} directly. This form needs JavaScript to prepare a draft.
            </p>
          </noscript>
        </form>
      </div>
    </Section>
  );
}

function ContactRow({
  href,
  icon,
  label,
  children,
  external = false,
}: {
  href: string;
  icon: ReactNode;
  label: string;
  children: ReactNode;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      className="glass flex gap-4 p-4 transition hover:border-cyan-200/40"
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
    >
      <span className="grid size-11 shrink-0 place-items-center rounded-2xl border border-white/10 bg-white/5 text-glow">
        {icon}
      </span>
      <span className="min-w-0">
        <span className="block font-mono text-[10px] uppercase tracking-[0.18em] text-mute">{label}</span>
        <span className="mt-1 block break-all text-mist">{children}</span>
      </span>
    </a>
  );
}

function Field({
  id,
  name,
  label,
  error,
  type = "text",
  autoComplete,
  placeholder,
  maxLength,
}: {
  id: string;
  name: string;
  label: string;
  error?: string;
  type?: string;
  autoComplete: string;
  placeholder: string;
  maxLength: number;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm text-mist">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        autoComplete={autoComplete}
        placeholder={placeholder}
        maxLength={maxLength}
        className="field"
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
      />
      {error ? (
        <p id={`${id}-error`} className="mt-2 text-sm text-rose-300">
          {error}
        </p>
      ) : null}
    </div>
  );
}
