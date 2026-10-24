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

        // Closing headline: words rise and settle in step with the scroll. Line masks (not word masks) leave
        // room for the italic letters, and each gold word gets its own foil so it stays visible while moving.
        SplitText.create(q('[data-cta-title]')[0], {
            type: 'words,lines',
            mask: 'lines',
            autoSplit: true,
            onSplit: (self) => {
                self.words.forEach((word) => { if (word.closest('em')) word.classList.add('lux-foil'); });
                return gsap.from(self.words, {
                    yPercent: 120,
                    rotate: 4,
                    ease: 'none',
                    stagger: 0.12,
                    scrollTrigger: { trigger: self.elements[0], start: 'top 95%', end: 'bottom 60%', scrub: 0.8 },
                });
            },
        });
        riseIn(q('[data-cta-in]'), q('[data-cta-actions]')[0], { stagger: 0.1 });
    }, root);

    return (
        <section ref={root} aria-labelledby="contact-title" className="relative bg-noir text-ivory pt-28 md:pt-44">
            {/* Deep red light high on the right */}
            <div aria-hidden="true" className="lux-glow-top pointer-events-none absolute inset-x-0 top-0 h-[60rem]" style={{ background: 'radial-gradient(ellipse 45% 40% at 85% 10%, rgba(139,0,0,0.2), rgba(10,8,7,0) 72%)' }} />

            <div className="relative mx-auto max-w-[1600px] px-5 md:px-10">
                <SectionLabel tone="lux" index="10">{getInTouch.label}</SectionLabel>
                <div className="mt-8 grid gap-8 md:grid-cols-12 md:items-end">
                    <h2 id="contact-title" data-title className="md:col-span-8 font-display font-normal text-[clamp(3.5rem,1rem+10vw,12rem)] leading-[0.92] tracking-[-0.025em]">
                        {getInTouch.title.lead} <em className="lux-foil">{getInTouch.title.highlight}</em>
                    </h2>
                    <p data-intro className="md:col-span-4 text-base md:text-lg leading-[1.8] text-ivory-soft md:text-right">{getInTouch.intro}</p>
                </div>

                {/* Contact rows */}
                <ul className="mt-16 md:mt-24">
                    {rows.map((row) => (
                        <li key={row.label} data-row className="relative">
                            <span data-rule aria-hidden="true" className="absolute inset-x-0 top-0 h-px origin-left bg-gold/20" />
                            <a
                                href={row.href}
                                {...(row.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                                className="group relative flex items-center gap-5 md:gap-10 overflow-hidden py-6 md:py-9 px-1 md:px-4"
                            >
                                {/* Deep red wash slides up on hover */}
                                <span aria-hidden="true" className="absolute inset-0 translate-y-full bg-gradient-to-r from-wine via-[#6e0202] to-wine-deep transition-transform duration-700 ease-cinema group-hover:translate-y-0" />
                                <span className="relative w-20 md:w-40 shrink-0 overflow-hidden">
                                    <span data-in className="block text-[0.66rem] md:text-xs font-medium uppercase tracking-[0.26em] text-gold/80 transition-colors duration-500 group-hover:text-gold-light">{row.label}</span>
                                </span>
                                <span className="relative min-w-0 flex-1 overflow-hidden pb-[0.08em]">
                                    <span data-in className="block">
                                        <span className={`block font-display font-normal lining-nums text-ivory transition-[translate] duration-700 ease-cinema group-hover:translate-x-2 ${row.label === 'Address' ? 'text-[clamp(1.2rem,0.8rem+1.7vw,2.6rem)] leading-[1.2]' : 'text-[clamp(1.4rem,0.6rem+3.6vw,5rem)] leading-[1.06] tracking-[-0.01em] break-words'}`}>
                                            {row.lines ? row.lines.map((l) => <span key={l} className="block">{l}</span>) : row.value}
                                        </span>
                                    </span>
                                </span>
                                <ArrowUpRight className="relative hidden md:block h-8 w-8 shrink-0 text-gold transition-all duration-700 ease-cinema group-hover:rotate-45 group-hover:text-gold-light" />
                            </a>
                        </li>
                    ))}
                    <li aria-hidden="true" className="h-px bg-gold/20" />
                </ul>

                {/* Project enquiry form */}
                <div id="enquiry" data-enquiry className="mt-24 md:mt-36 grid gap-12 md:grid-cols-12 md:gap-10 scroll-mt-28">
                    <div className="md:col-span-4">
                        <p data-enquiry-in className="lux-label">{enquiry.label}</p>
                        <h3 data-enquiry-title className="mt-5 font-display font-normal text-headline">
                            {enquiry.title.lead} <em className="lux-foil">{enquiry.title.highlight}</em>
                        </h3>
                        <p data-enquiry-in className="mt-5 max-w-sm text-base md:text-lg leading-[1.8] text-ivory-soft">{enquiry.intro}</p>
                    </div>
                    <div data-enquiry-in className="md:col-span-8">
                        {/* The form sits on a lacquered panel with a fine inner gold frame */}
                        <div className="lux-panel relative p-6 sm:p-8 md:p-12">
                            <span aria-hidden="true" className="pointer-events-none absolute inset-2.5 md:inset-3 border border-gold/10" />
                            <div className="relative">
                                <EnquiryForm />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Connect */}
                <div data-connect className="mt-16 md:mt-24 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                    <div>
                        <h3 className="font-display text-3xl md:text-4xl font-normal text-ivory">{getInTouch.connect.title}</h3>
                        <p className="mt-1.5 text-ivory-soft">{getInTouch.connect.text}</p>
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
                                        className="inline-flex items-center gap-2.5 border border-gold/30 px-5 py-3 text-sm font-medium text-ivory transition-colors duration-500 hover:border-gold hover:bg-gold hover:text-noir"
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

            {/* Closing call to action: the final curtain call, on a red velvet stage */}
            <div className="relative mt-28 md:mt-44 overflow-hidden border-t border-gold/20">
                <div aria-hidden="true" className="pointer-events-none absolute inset-0" style={{ background: 'radial-gradient(ellipse 65% 60% at 50% 108%, rgba(139,0,0,0.5), rgba(10,8,7,0) 70%), radial-gradient(ellipse 40% 35% at 50% 0%, rgba(212,175,55,0.08), rgba(10,8,7,0) 72%)' }} />
                {/* Fine gold corners, like the hero */}
                <span aria-hidden="true" className="pointer-events-none absolute left-4 top-4 hidden h-6 w-6 border-l border-t border-gold/30 md:block" />
                <span aria-hidden="true" className="pointer-events-none absolute right-4 top-4 hidden h-6 w-6 border-r border-t border-gold/30 md:block" />
                <span aria-hidden="true" className="pointer-events-none absolute bottom-4 left-4 hidden h-6 w-6 border-b border-l border-gold/30 md:block" />
                <span aria-hidden="true" className="pointer-events-none absolute bottom-4 right-4 hidden h-6 w-6 border-b border-r border-gold/30 md:block" />

                <div className="relative mx-auto max-w-[1600px] px-5 md:px-10 py-24 md:py-40 text-center">
                    <p data-cta-in className="lux-label inline-flex items-center gap-3">
                        <span aria-hidden="true" className="text-gold-light">✦</span> {cta.badge}
                    </p>
                    <h2 data-cta-title className="mx-auto mt-8 max-w-[16ch] font-display font-normal text-display">
                        {cta.title.lead} <em className="text-gold-light">{cta.title.highlight}</em>
                    </h2>
                    <p data-cta-in className="mx-auto mt-8 max-w-2xl text-base md:text-lg leading-[1.8] text-ivory-soft">{cta.text}</p>

                    <div data-cta-actions className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
                        <a
                            data-cta-in
                            href="#enquiry"
                            onClick={(e) => { e.preventDefault(); scrollToSection('enquiry'); }}
                            className="lux-btn group px-9 py-5 shadow-[0_0_0_1px_rgba(212,175,55,0.45),0_18px_50px_-12px_rgba(212,175,55,0.45)] hover:shadow-[0_0_0_1px_rgba(242,220,155,0.9),0_24px_70px_-10px_rgba(212,175,55,0.65)]"
                        >
                            <span>{cta.primary}</span>
                            <ArrowUpRight className="h-4 w-4 transition-transform duration-500 ease-cinema group-hover:rotate-45" />
                        </a>
                        <a
                            data-cta-in
                            href={whatsappUrl()}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="lux-btn-ghost px-9 py-5"
                        >
                            {cta.secondary}
                        </a>
                    </div>

                    <ul data-cta-in className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-3 text-xs md:text-sm text-ivory-soft">
                        {cta.trust.map((item) => (
                            <li key={item} className="inline-flex items-center gap-2">
                                <svg aria-hidden="true" viewBox="0 0 16 16" className="h-4 w-4 text-gold" fill="none">
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
