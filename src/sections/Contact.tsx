import React, { useRef } from 'react';
import { SplitText } from 'gsap/SplitText';
import { gsap, scrollToSection } from '../lib/smoothScroll';
import { revealLines, riseIn, useGsap } from '../lib/motion';
import { contact, cta, enquiry, getInTouch, whatsappUrl } from '../content/contact';
import SectionLabel from '../components/ui/SectionLabel';
import EnquiryForm from '../components/contact/EnquiryForm';
import { FacebookIcon, InstagramIcon, TwitterIcon, YoutubeIcon } from '../components/SocialIcons';

const socialIcons: Record<string, React.FC<React.SVGProps<SVGSVGElement>>> = {
    Facebook: FacebookIcon,
    X: TwitterIcon,
    YouTube: YoutubeIcon,
    Instagram: InstagramIcon,
};

const ArrowUpRight: React.FC<{ className?: string }> = ({ className = '' }) => (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className={className}>
        <path d="M6 18 18 6m0 0H8m10 0v10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const rows = [
    { label: 'Phone', value: contact.phone.display, href: `tel:${contact.phone.tel}`, external: false },
    { label: 'Email', value: contact.email, href: `mailto:${contact.email}`, external: false },
    { label: 'Address', value: contact.address.lines.join(' '), lines: contact.address.lines, href: contact.mapsUrl, external: true },
];

/** Get In Touch details followed by the closing call to action. */
const Contact: React.FC = () => {
    const root = useRef<HTMLElement>(null);

    useGsap(() => {
        const q = gsap.utils.selector(root);
        revealLines(q('[data-title]')[0]);
        riseIn(q('[data-intro]'), q('[data-intro]')[0]);
        q('[data-row]').forEach((row: Element) => {
            gsap.timeline({ scrollTrigger: { trigger: row, start: 'top 92%', once: true } })
                .fromTo(row.querySelector('[data-rule]'), { scaleX: 0 }, { scaleX: 1, duration: 1.2, ease: 'expo.inOut' })
                .from(row.querySelectorAll('[data-in]'), { yPercent: 110, duration: 1, ease: 'expo.out', stagger: 0.06 }, 0.25);
        });
        revealLines(q('[data-enquiry-title]')[0]);
        riseIn(q('[data-enquiry-in]'), q('[data-enquiry]')[0]);
        riseIn(q('[data-social]'), q('[data-connect]')[0], { stagger: 0.06 });

        // Closing headline: words rise and settle in step with the scroll
        SplitText.create(q('[data-cta-title]')[0], {
            type: 'words',
            mask: 'words',
            autoSplit: true,
            onSplit: (self) => gsap.from(self.words, {
                yPercent: 120,
                rotate: 4,
                ease: 'none',
                stagger: 0.12,
                scrollTrigger: { trigger: self.elements[0], start: 'top 95%', end: 'bottom 60%', scrub: 0.8 },
            }),
        });
        riseIn(q('[data-cta-in]'), q('[data-cta-actions]')[0], { stagger: 0.1 });
    }, root);

    return (
        <section ref={root} aria-labelledby="contact-title" className="relative bg-paper text-ink pt-28 md:pt-40">
            <div className="mx-auto max-w-[1600px] px-5 md:px-10">
                <SectionLabel index="10">{getInTouch.label}</SectionLabel>
                <div className="mt-8 grid gap-8 md:grid-cols-12 md:items-end">
                    <h2 id="contact-title" data-title className="md:col-span-8 font-heading font-semibold text-mega">
                        {getInTouch.title.lead} <span className="text-ck-red">{getInTouch.title.highlight}</span>
                    </h2>
                    <p data-intro className="md:col-span-4 text-base md:text-lg leading-relaxed text-ink-soft md:text-right">{getInTouch.intro}</p>
                </div>

                {/* Contact rows */}
                <ul className="mt-16 md:mt-24">
                    {rows.map((row) => (
                        <li key={row.label} data-row className="relative">
                            <span data-rule aria-hidden="true" className="absolute inset-x-0 top-0 h-px origin-left bg-ink" />
                            <a
                                href={row.href}
                                {...(row.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                                className="group relative flex items-center gap-5 md:gap-10 overflow-hidden py-6 md:py-9 px-1 md:px-4"
                            >
                                <span aria-hidden="true" className="absolute inset-0 translate-y-full bg-ck-red transition-transform duration-700 ease-cinema group-hover:translate-y-0" />
                                <span className="relative w-20 md:w-40 shrink-0 overflow-hidden">
                                    <span data-in className="block text-xs md:text-sm font-medium uppercase tracking-[0.22em] text-ink-soft transition-colors duration-500 group-hover:text-paper/75">{row.label}</span>
                                </span>
                                <span className="relative min-w-0 flex-1 overflow-hidden pb-[0.06em]">
                                    <span data-in className="block">
                                        <span className={`block font-heading font-semibold tracking-[-0.03em] transition-[color,translate] duration-700 ease-cinema group-hover:translate-x-2 group-hover:text-paper ${row.label === 'Address' ? 'text-[clamp(1.15rem,0.8rem+1.6vw,2.4rem)] leading-[1.15]' : 'text-[clamp(1.3rem,0.6rem+3.4vw,4.75rem)] leading-[1.02] break-words'}`}>
                                            {row.lines ? row.lines.map((l) => <span key={l} className="block">{l}</span>) : row.value}
                                        </span>
                                    </span>
                                </span>
                                <ArrowUpRight className="relative hidden md:block h-8 w-8 shrink-0 text-ck-red transition-all duration-700 ease-cinema group-hover:rotate-45 group-hover:text-paper" />
                            </a>
                        </li>
                    ))}
                    <li aria-hidden="true" className="h-px bg-ink" />
                </ul>

                {/* Project enquiry form */}
                <div id="enquiry" data-enquiry className="mt-24 md:mt-36 grid gap-12 md:grid-cols-12 md:gap-10 scroll-mt-28">
                    <div className="md:col-span-4">
                        <p data-enquiry-in className="text-xs md:text-sm font-medium uppercase tracking-[0.22em] text-ck-red">{enquiry.label}</p>
                        <h3 data-enquiry-title className="mt-5 font-heading font-semibold text-title">
                            {enquiry.title.lead} <span className="text-ck-red">{enquiry.title.highlight}</span>
                        </h3>
                        <p data-enquiry-in className="mt-5 max-w-sm text-base md:text-lg leading-relaxed text-ink-soft">{enquiry.intro}</p>
                    </div>
                    <div data-enquiry-in className="md:col-span-8">
                        <EnquiryForm />
                    </div>
                </div>

                {/* Connect */}
                <div data-connect className="mt-14 md:mt-20 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                    <div>
                        <h3 className="font-heading text-2xl md:text-3xl font-semibold tracking-[-0.02em]">{getInTouch.connect.title}</h3>
                        <p className="mt-1 text-ink-soft">{getInTouch.connect.text}</p>
                    </div>
                    <ul className="flex flex-wrap gap-2.5">
                        {contact.socials.map(({ name, url }) => {
                            const Icon = socialIcons[name];
                            return (
                                <li key={name} data-social>
                                    <a
                                        href={url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2.5 rounded-full border border-ink-faint px-5 py-3 text-sm font-medium text-ink transition-colors duration-300 hover:border-ck-red hover:bg-ck-red hover:text-paper"
                                    >
                                        {Icon && <Icon className="h-4 w-4" aria-hidden="true" />}
                                        {name}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>

            {/* Closing call to action */}
            <div className="mt-28 md:mt-44 border-t border-ink-faint">
                <div className="mx-auto max-w-[1600px] px-5 md:px-10 py-24 md:py-36 text-center">
                    <p data-cta-in className="inline-flex items-center gap-2.5 text-xs md:text-sm font-medium uppercase tracking-[0.28em] text-ck-red">
                        <span aria-hidden="true">✦</span> {cta.badge}
                    </p>
                    <h2 data-cta-title className="mx-auto mt-8 max-w-[16ch] font-heading font-semibold text-giant">
                        {cta.title.lead} <span className="text-ck-red">{cta.title.highlight}</span>
                    </h2>
                    <p data-cta-in className="mx-auto mt-8 max-w-2xl text-base md:text-lg leading-relaxed text-ink-soft">{cta.text}</p>

                    <div data-cta-actions className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
                        <a
                            data-cta-in
                            href="#enquiry"
                            onClick={(e) => { e.preventDefault(); scrollToSection('enquiry'); }}
                            className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-ck-red px-9 py-5 text-sm font-medium uppercase tracking-[0.14em] text-paper shadow-[0_0_0_1px_rgba(212,175,55,0.5),0_18px_50px_-12px_rgba(212,175,55,0.55)] transition-shadow duration-500 hover:shadow-[0_0_0_2px_rgba(212,175,55,0.9),0_24px_70px_-10px_rgba(212,175,55,0.7)]"
                        >
                            <span aria-hidden="true" className="absolute inset-0 translate-y-full rounded-full bg-ink transition-transform duration-500 ease-cinema group-hover:translate-y-0" />
                            <span className="relative">{cta.primary}</span>
                            <ArrowUpRight className="relative h-4 w-4 transition-transform duration-500 ease-cinema group-hover:rotate-45" />
                        </a>
                        <a
                            data-cta-in
                            href={whatsappUrl()}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 rounded-full border border-ink px-9 py-5 text-sm font-medium uppercase tracking-[0.14em] text-ink transition-colors duration-500 hover:bg-ink hover:text-paper"
                        >
                            {cta.secondary}
                        </a>
                    </div>

                    <ul data-cta-in className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-3 text-xs md:text-sm text-ink-soft">
                        {cta.trust.map((item) => (
                            <li key={item} className="inline-flex items-center gap-2">
                                <svg aria-hidden="true" viewBox="0 0 16 16" className="h-4 w-4 text-ck-red" fill="none">
                                    <path d="M3 8.5 6.5 12 13 4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Contact;
