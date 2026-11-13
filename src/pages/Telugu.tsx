import React, { useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import { gsap } from '../lib/smoothScroll';
import { riseIn, useGsap } from '../lib/motion';
import { findTeService, teHome, teServices, teUi } from '../content/telugu';
import { contact, whatsappUrl } from '../content/contact';
import { paths } from '../lib/paths';
import SectionLabel from '../components/ui/SectionLabel';
import NotFound from './NotFound';

/** Telugu has no letters in the site's own fonts: use the device's Telugu font, with room for marks above and below. */
const teFont: React.CSSProperties = { fontFamily: "'Noto Sans Telugu', 'Nirmala UI', 'Gautami', 'Telugu Sangam MN', var(--font-body), sans-serif" };
const h1Class = 'mt-8 max-w-[18ch] text-[clamp(2.1rem,1rem+3.6vw,4.5rem)] font-medium leading-[1.35] text-ivory';
const h2Class = 'text-[clamp(1.6rem,1rem+1.6vw,2.6rem)] font-medium leading-[1.4] text-ivory';
const bodyClass = 'text-[1.0625rem] md:text-lg leading-[1.95] text-ivory/85';
const sectionClass = 'mt-20 md:mt-28 border-t border-gold/15 pt-12 md:pt-16';

const Diamond: React.FC = () => <span aria-hidden="true" className="mt-[0.85em] h-[6px] w-[6px] shrink-0 rotate-45 bg-gold/80" />;

const ContactPanel: React.FC = () => (
    <aside className="lux-panel relative mt-20 md:mt-28 overflow-hidden p-8 md:p-12">
        <span aria-hidden="true" className="pointer-events-none absolute inset-0" style={{ background: 'radial-gradient(ellipse 60% 70% at 100% 0%, rgba(139,0,0,0.28), rgba(139,0,0,0) 70%)' }} />
        <span aria-hidden="true" className="pointer-events-none absolute inset-2.5 md:inset-3 border border-gold/10" />
        <div className="relative grid gap-10 md:grid-cols-2">
            <div>
                <h2 className={h2Class}>{teUi.contactTitle}</h2>
                <p className="mt-4 leading-[1.9] text-ivory-soft">{teUi.contactText}</p>
                <div className="mt-8 flex flex-wrap gap-3">
                    <a href={whatsappUrl(teUi.whatsappMessage)} target="_blank" rel="noopener noreferrer" className="lux-btn px-6 py-3.5">{teUi.whatsapp}</a>
                    <a href={`tel:${contact.phone.tel}`} className="lux-btn-ghost px-6 py-3.5">{teUi.call}</a>
                    <a href={`mailto:${contact.email}`} className="lux-btn-ghost px-6 py-3.5">{teUi.email}</a>
                </div>
            </div>
            <div className="leading-[1.9] text-ivory-soft">
                <p className="lux-label">{teUi.address}</p>
                <p className="mt-3">{teUi.addressLines.map((line) => <span key={line} className="block">{line}</span>)}</p>
                <p className="mt-4"><a href={`tel:${contact.phone.tel}`} className="text-gold-light lining-nums" lang="en">{contact.phone.international}</a></p>
                <p className="mt-4">{teUi.hours}</p>
            </div>
        </div>
    </aside>
);

/** Telugu pages: the home page (/te/) and one page per service (/te/services/<slug>/). Words live in content/telugu.ts. */
const Telugu: React.FC = () => {
    const { slug } = useParams();
    const root = useRef<HTMLDivElement>(null);
    const service = findTeService(slug);

    useGsap(() => {
        const q = gsap.utils.selector(root);
        if (q('[data-intro]')[0]) riseIn(q('[data-intro]'), q('[data-intro]')[0], { start: 'top 95%' });
    }, root, [slug]);

    if (slug && !service) return <NotFound />;

    return (
        <div ref={root} lang={teUi.lang} style={teFont} className="relative bg-noir text-ivory">
            <div aria-hidden="true" className="lux-glow-top pointer-events-none absolute inset-x-0 top-0 h-[50rem]" style={{ background: 'radial-gradient(ellipse 42% 42% at 14% 14%, rgba(139,0,0,0.22), rgba(10,8,7,0) 72%)' }} />

            <div className="relative mx-auto max-w-[1600px] px-5 md:px-10 pt-16 md:pt-24 pb-28 md:pb-40">
                <div className="flex flex-wrap items-center justify-between gap-4">
                    <SectionLabel>{service ? teUi.services : teHome.label}</SectionLabel>
                    <Link to={service ? paths.service(service.slug) : paths.home} lang="en" className="border border-gold/25 px-4 py-2 text-[0.66rem] font-medium uppercase tracking-[0.22em] text-ivory/85 transition-colors duration-500 hover:border-gold/60 hover:text-gold-light">
                        {teUi.english}
                    </Link>
                </div>

                {service ? (
                    <>
                        <h1 className={h1Class}>{service.headline.lead} <em className="lux-foil not-italic">{service.headline.highlight}</em></h1>
                        <p data-intro className={`mt-8 max-w-[46rem] ${bodyClass}`}>{service.intro}</p>

                        <section aria-labelledby="te-included" className={sectionClass}>
                            <h2 id="te-included" className={h2Class}>{teUi.included}</h2>
                            <ul className="mt-10 grid gap-x-10 gap-y-8 md:grid-cols-2">
                                {service.offerings.map((o) => (
                                    <li key={o.title} className="border-t border-gold/15 pt-5">
                                        <h3 className="text-xl font-medium leading-[1.5] text-gold-light">{o.title}</h3>
                                        <p className="mt-2 leading-[1.9] text-ivory-soft">{o.text}</p>
                                    </li>
                                ))}
                            </ul>
                        </section>

                        <section aria-labelledby="te-goodfor" className={sectionClass}>
                            <h2 id="te-goodfor" className={h2Class}>{teUi.goodFor}</h2>
                            <ul className={`mt-8 space-y-3 ${bodyClass}`}>
                                {service.goodFor.map((g) => <li key={g} className="flex gap-3.5"><Diamond />{g}</li>)}
                            </ul>
                        </section>

                        <nav aria-labelledby="te-others" className={sectionClass}>
                            <h2 id="te-others" className={h2Class}>{teUi.otherServices}</h2>
                            <ul className="mt-8 flex flex-wrap gap-2">
                                {teServices.filter((s) => s.slug !== service.slug).map((s) => (
                                    <li key={s.slug}>
                                        <Link to={paths.teService(s.slug)} className="block border border-gold/25 px-4 py-2.5 text-ivory/85 transition-colors duration-500 hover:border-gold/60 hover:text-gold-light">{s.name}</Link>
                                    </li>
                                ))}
                                <li><Link to={paths.te} className="block border border-gold/25 px-4 py-2.5 text-ivory/85 transition-colors duration-500 hover:border-gold/60 hover:text-gold-light">{teUi.allServices}</Link></li>
                            </ul>
                            <p className="mt-8 text-ivory-soft">
                                <Link to={paths.service(service.slug)} className="text-gold-light underline decoration-gold/35 underline-offset-4 hover:decoration-gold">{teUi.guides}</Link>
                            </p>
                        </nav>
                    </>
                ) : (
                    <>
                        <h1 className={h1Class}>{teHome.title.lead} <em className="lux-foil not-italic">{teHome.title.highlight}</em></h1>
                        <p data-intro className={`mt-8 max-w-[46rem] ${bodyClass}`}>{teHome.intro}</p>
                        <div className={`mt-10 max-w-[46rem] space-y-6 ${bodyClass}`}>
                            {teHome.about.map((p) => <p key={p}>{p}</p>)}
                        </div>

                        <section aria-labelledby="te-services" className={sectionClass}>
                            <h2 id="te-services" className={h2Class}>{teUi.services}</h2>
                            <p className="mt-4 text-ivory-soft">{teUi.servicesIntro}</p>
                            <ul className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                                {teServices.map((s) => (
                                    <li key={s.slug}>
                                        <Link to={paths.teService(s.slug)} className="lux-panel group relative block h-full p-7 md:p-8">
                                            <span aria-hidden="true" className="pointer-events-none absolute inset-2.5 border border-gold/10 transition-colors duration-500 group-hover:border-gold/30" />
                                            <span className="relative block">
                                                <span className="block text-2xl font-medium leading-[1.5] text-ivory transition-colors duration-500 group-hover:text-gold-light">{s.name}</span>
                                                <span className="mt-3 block leading-[1.9] text-ivory-soft">{s.summary}</span>
                                                <span className="mt-6 block text-sm text-gold-light">{teUi.more} →</span>
                                            </span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </section>

                        <section aria-labelledby="te-why" className={sectionClass}>
                            <h2 id="te-why" className={h2Class}>{teUi.whyTitle}</h2>
                            <dl className="mt-10 grid gap-8 sm:grid-cols-3">
                                {teHome.why.map((w) => (
                                    <div key={w.label} className="border-t border-gold/20 pt-5">
                                        <dd className="font-display text-5xl md:text-6xl italic text-gold-light lining-nums" lang="en">{w.number}</dd>
                                        <dt className="mt-3 leading-[1.8] text-ivory-soft">{w.label}</dt>
                                    </div>
                                ))}
                            </dl>
                            <ul className={`mt-12 max-w-[46rem] space-y-4 ${bodyClass}`}>
                                {teHome.whyPoints.map((p) => <li key={p} className="flex gap-3.5"><Diamond />{p}</li>)}
                            </ul>
                        </section>

                        <section aria-labelledby="te-process" className={sectionClass}>
                            <h2 id="te-process" className={h2Class}>{teUi.processTitle}</h2>
                            <ol className="mt-10 grid gap-x-10 gap-y-8 md:grid-cols-2">
                                {teHome.process.map((step, i) => (
                                    <li key={step.title} className="flex gap-5 border-t border-gold/15 pt-5">
                                        <span aria-hidden="true" className="font-display text-3xl italic text-gold/70 lining-nums">{String(i + 1).padStart(2, '0')}</span>
                                        <div>
                                            <h3 className="text-xl font-medium leading-[1.5] text-gold-light">{step.title}</h3>
                                            <p className="mt-2 leading-[1.9] text-ivory-soft">{step.text}</p>
                                        </div>
                                    </li>
                                ))}
                            </ol>
                        </section>

                        <section aria-labelledby="te-faq" className={sectionClass}>
                            <h2 id="te-faq" className={h2Class}>{teUi.faqTitle}</h2>
                            <dl className="mt-8 max-w-[52rem]">
                                {teHome.faqs.map((f) => (
                                    <div key={f.q} className="border-t border-gold/15 py-6">
                                        <dt className="text-xl font-medium leading-[1.6] text-ivory">{f.q}</dt>
                                        <dd className="mt-3 leading-[1.9] text-ivory-soft">{f.a}</dd>
                                    </div>
                                ))}
                            </dl>
                        </section>
                    </>
                )}

                <ContactPanel />
            </div>
        </div>
    );
};

export default Telugu;
