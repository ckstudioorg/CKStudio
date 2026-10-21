import React, { useId, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ScrollTrigger } from '../../lib/smoothScroll';
import { contact, enquiry, whatsappUrl } from '../../content/contact';

type Status = 'idle' | 'sending' | 'sent' | 'failed';
type Field = 'name' | 'phone' | 'email';

const inputClass =
    'mt-2 block w-full rounded-none border-0 border-b border-ink-faint bg-transparent px-0 py-3 text-base md:text-lg text-ink placeholder:text-ink-soft/50 transition-colors duration-300 focus:border-ck-red focus:outline-none focus:ring-0';
const labelClass = 'block text-[0.7rem] md:text-xs font-medium uppercase tracking-[0.22em] text-ink-soft';

/** Turns the form's answers into one readable block (used for the email fallback). */
const summarise = (data: Record<string, string>) =>
    Object.entries(data).filter(([, v]) => v).map(([k, v]) => `${k}: ${v}`).join('\n');

/**
 * Project enquiry form. Sends the answers to Web3Forms, which emails them to CK Studio.
 * No server needed, so it works on GitHub Pages. Wording and choices live in content/contact.ts (`enquiry`).
 */
const EnquiryForm: React.FC = () => {
    const id = useId();
    const [status, setStatus] = useState<Status>('idle');
    const [errors, setErrors] = useState<Partial<Record<Field, string>>>({});
    const [sentName, setSentName] = useState('');

    const clearError = (field: Field) => setErrors((e) => (e[field] ? { ...e, [field]: undefined } : e));

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.currentTarget;
        const fd = new FormData(form);
        if (fd.get('botcheck')) return; // a bot filled the hidden field

        const name = String(fd.get('name') ?? '').trim();
        const phone = String(fd.get('phone') ?? '').trim();
        const email = String(fd.get('email') ?? '').trim();
        const found: Partial<Record<Field, string>> = {};
        if (!name) found.name = enquiry.errors.name;
        if (phone.replace(/\D/g, '').length < 10) found.phone = enquiry.errors.phone;
        if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) found.email = enquiry.errors.email;
        setErrors(found);
        if (Object.keys(found).length) {
            form.querySelector<HTMLElement>(`[name="${Object.keys(found)[0]}"]`)?.focus();
            return;
        }

        const answers: Record<string, string> = {
            Name: name,
            Phone: phone,
            Email: email,
            Company: String(fd.get('company') ?? '').trim(),
            Services: fd.getAll('services').join(', '),
            Budget: String(fd.get('budget') ?? ''),
            Timeline: String(fd.get('timeline') ?? ''),
            Message: String(fd.get('message') ?? '').trim(),
        };

        // No access key yet: open the visitor's email app with everything filled in
        if (!enquiry.accessKey) {
            window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(enquiry.subject)}&body=${encodeURIComponent(summarise(answers))}`;
            return;
        }

        setStatus('sending');
        try {
            const response = await fetch(enquiry.endpoint, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
                body: JSON.stringify({
                    access_key: enquiry.accessKey,
                    subject: `${enquiry.subject}: ${name}`,
                    from_name: 'CK Studio website',
                    ...(email ? { email, replyto: email } : {}),
                    ...answers,
                }),
            });
            const result = await response.json().catch(() => ({}));
            if (!response.ok || !result.success) throw new Error(result.message || 'Send failed');
            setSentName(name.split(' ')[0]);
            setStatus('sent');
            form.reset();
        } catch {
            setStatus('failed');
        }
        requestAnimationFrame(() => ScrollTrigger.refresh());
    };

    const err = (field: Field) =>
        errors[field] ? <p id={`${id}-${field}-err`} className="mt-2 text-sm text-ck-red">{errors[field]}</p> : null;
    const described = (field: Field) => (errors[field] ? { 'aria-invalid': true, 'aria-describedby': `${id}-${field}-err` } : {});

    return (
        <div className="relative">
            <AnimatePresence mode="wait" initial={false}>
                {status === 'sent' ? (
                    <motion.div
                        key="thanks"
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -12 }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        role="status"
                        className="py-16 md:py-24 text-center"
                    >
                        <p className="text-xs md:text-sm font-medium uppercase tracking-[0.28em] text-ck-red">{enquiry.thanks.label}</p>
                        <p className="mt-6 font-heading font-semibold text-title">
                            {enquiry.thanks.title}{sentName && <>, <span className="text-ck-red">{sentName}</span></>}.
                        </p>
                        <p className="mx-auto mt-5 max-w-xl text-base md:text-lg leading-relaxed text-ink-soft">{enquiry.thanks.text}</p>
                        <button
                            type="button"
                            onClick={() => { setStatus('idle'); requestAnimationFrame(() => ScrollTrigger.refresh()); }}
                            className="mt-10 inline-flex rounded-full border border-ink px-7 py-3.5 text-sm font-medium uppercase tracking-[0.14em] text-ink transition-colors duration-500 hover:bg-ink hover:text-paper"
                        >
                            {enquiry.thanks.again}
                        </button>
                    </motion.div>
                ) : (
                    <motion.form
                        key="form"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        onSubmit={onSubmit}
                        noValidate
                        aria-label={`${enquiry.title.lead} ${enquiry.title.highlight}`}
                    >
                        {/* Hidden from people; bots that fill it in are ignored */}
                        <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />

                        <div className="grid gap-x-10 gap-y-8 md:grid-cols-2">
                            <div>
                                <label htmlFor={`${id}-name`} className={labelClass}>Your name <span className="text-ck-red">*</span></label>
                                <input id={`${id}-name`} name="name" autoComplete="name" placeholder="Ravi Kumar" className={inputClass} onInput={() => clearError('name')} {...described('name')} />
                                {err('name')}
                            </div>
                            <div>
                                <label htmlFor={`${id}-phone`} className={labelClass}>Phone / WhatsApp <span className="text-ck-red">*</span></label>
                                <input id={`${id}-phone`} name="phone" type="tel" autoComplete="tel" inputMode="tel" placeholder="+91 98765 43210" className={inputClass} onInput={() => clearError('phone')} {...described('phone')} />
                                {err('phone')}
                            </div>
                            <div>
                                <label htmlFor={`${id}-email`} className={labelClass}>Email</label>
                                <input id={`${id}-email`} name="email" type="email" autoComplete="email" placeholder="ravi@brand.com" className={inputClass} onInput={() => clearError('email')} {...described('email')} />
                                {err('email')}
                            </div>
                            <div>
                                <label htmlFor={`${id}-company`} className={labelClass}>Company / brand</label>
                                <input id={`${id}-company`} name="company" autoComplete="organization" placeholder="Optional" className={inputClass} />
                            </div>
                        </div>

                        <fieldset className="mt-10">
                            <legend className={labelClass}>What do you need?</legend>
                            <div className="mt-4 flex flex-wrap gap-2.5">
                                {enquiry.services.map((service) => (
                                    <label key={service} className="cursor-pointer">
                                        <input type="checkbox" name="services" value={service} className="peer sr-only" />
                                        <span className="inline-flex rounded-full border border-ink-faint px-5 py-2.5 text-sm font-medium text-ink transition-colors duration-300 hover:border-ck-red peer-checked:border-ck-red peer-checked:bg-ck-red peer-checked:text-paper peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-ck-red">
                                            {service}
                                        </span>
                                    </label>
                                ))}
                            </div>
                        </fieldset>

                        <div className="mt-10 grid gap-x-10 gap-y-8 md:grid-cols-2">
                            <div>
                                <label htmlFor={`${id}-budget`} className={labelClass}>Budget</label>
                                <select id={`${id}-budget`} name="budget" className={`${inputClass} cursor-pointer`}>
                                    {enquiry.budgets.map((b) => <option key={b}>{b}</option>)}
                                </select>
                            </div>
                            <div>
                                <label htmlFor={`${id}-timeline`} className={labelClass}>When do you need it?</label>
                                <select id={`${id}-timeline`} name="timeline" className={`${inputClass} cursor-pointer`}>
                                    {enquiry.timelines.map((t) => <option key={t}>{t}</option>)}
                                </select>
                            </div>
                        </div>

                        <div className="mt-10">
                            <label htmlFor={`${id}-message`} className={labelClass}>Tell us more</label>
                            <textarea id={`${id}-message`} name="message" rows={4} placeholder="A 30-second ad for our new product launch…" className={`${inputClass} resize-y`} />
                        </div>

                        {status === 'failed' && (
                            <p role="alert" className="mt-8 text-sm md:text-base text-ck-red">
                                {enquiry.errors.failed}{' '}
                                <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">WhatsApp</a>
                            </p>
                        )}

                        <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center">
                            <button
                                type="submit"
                                disabled={status === 'sending'}
                                className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full bg-ck-red px-9 py-5 text-sm font-medium uppercase tracking-[0.14em] text-paper disabled:cursor-wait disabled:opacity-70"
                            >
                                <span aria-hidden="true" className="absolute inset-0 translate-y-full rounded-full bg-ink transition-transform duration-500 ease-cinema group-hover:translate-y-0" />
                                <span className="relative">{status === 'sending' ? enquiry.sending : enquiry.send}</span>
                                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="relative h-4 w-4 transition-transform duration-500 ease-cinema group-hover:translate-x-1">
                                    <path d="M4 12h15m0 0-6-6m6 6-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                            <p className="text-sm text-ink-soft">{enquiry.note}</p>
                        </div>
                    </motion.form>
                )}
            </AnimatePresence>
        </div>
    );
};

export default EnquiryForm;
