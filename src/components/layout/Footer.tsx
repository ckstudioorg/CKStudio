import React, { useRef } from 'react';
import { SplitText } from 'gsap/SplitText';
import { useLocation, useNavigate } from 'react-router-dom';
import { gsap, scrollToSection } from '../../lib/smoothScroll';
import { useGsap } from '../../lib/motion';
import { contact, footer, whatsappUrl } from '../../content/contact';
import { FacebookIcon, InstagramIcon, TwitterIcon, YoutubeIcon } from '../SocialIcons';

const socialIcons: Record<string, React.FC<React.SVGProps<SVGSVGElement>>> = {
    Facebook: FacebookIcon,
    X: TwitterIcon,
    YouTube: YoutubeIcon,
    Instagram: InstagramIcon,
};

const linkClass = 'group inline-flex items-center gap-2 text-ink transition-colors duration-300 hover:text-ck-red';

const Footer: React.FC = () => {
    const root = useRef<HTMLElement>(null);
    const location = useLocation();
    const navigate = useNavigate();

    const goToSection = (id: string) => {
        if (location.pathname === '/') scrollToSection(id);
        else navigate(`/#${id}`);
    };

    useGsap(() => {
        const q = gsap.utils.selector(root);
        // Giant wordmark letters rise up as the footer comes into view
        SplitText.create(q('[data-wordmark]')[0], {
            type: 'chars',
            mask: 'chars',
            autoSplit: true,
            onSplit: (self) => gsap.from(self.chars, {
                yPercent: 100,
                ease: 'none',
                stagger: 0.06,
                scrollTrigger: { trigger: root.current, start: 'top 85%', end: 'bottom bottom', scrub: 0.8 },
            }),
        });
        gsap.from(q('[data-col]'), {
            y: 30, autoAlpha: 0, duration: 1, ease: 'expo.out', stagger: 0.08,
            scrollTrigger: { trigger: root.current, start: 'top 85%', once: true },
        });
    }, root);

    return (
        <footer ref={root} className="relative overflow-hidden border-t border-ink bg-paper text-ink">
            <div className="mx-auto max-w-[1600px] px-5 md:px-10 pt-20 md:pt-28">
                <div className="grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-12">
                    {/* Brand */}
                    <div data-col className="col-span-2 md:col-span-4">
                        <p className="max-w-xs text-base leading-relaxed text-ink-soft">{footer.blurb}</p>
                        <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-ck-red/30 px-3.5 py-1.5 text-[0.7rem] font-medium uppercase tracking-[0.2em] text-ck-red">
                            <span aria-hidden="true">✦</span> {footer.badge}
                        </p>
                    </div>

                    {footer.columns.map((col) => (
                        <nav key={col.title} data-col aria-label={col.title} className="md:col-span-2">
                            <h2 className="text-[0.7rem] font-medium uppercase tracking-[0.25em] text-ink-soft">{col.title}</h2>
                            <ul className="mt-5 space-y-3 text-[0.95rem]">
                                {col.links.map((link) => (
                                    <li key={link.name}>
                                        {link.section ? (
                                            <button type="button" onClick={() => goToSection(link.section!)} className={linkClass}>{link.name}</button>
                                        ) : link.page ? (
                                            <button type="button" onClick={() => navigate(link.page!)} className={linkClass}>{link.name}</button>
                                        ) : (
                                            <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className={linkClass}>{link.name}</a>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    ))}

                    {/* Contact + socials */}
                    <div data-col className="col-span-2 md:col-span-2">
                        <h2 className="text-[0.7rem] font-medium uppercase tracking-[0.25em] text-ink-soft">Reach us</h2>
                        <ul className="mt-5 space-y-3 text-[0.95rem]">
                            <li><a href={`tel:${contact.phone.tel}`} className={linkClass}>{contact.phone.international}</a></li>
                            <li><a href={`mailto:${contact.email}`} className={`${linkClass} break-all`}>{contact.email}</a></li>
                        </ul>
                        <ul className="mt-6 flex gap-2">
                            {contact.socials.map(({ name, url }) => {
                                const Icon = socialIcons[name];
                                return (
                                    <li key={name}>
                                        <a
                                            href={url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={`CK Studio on ${name}`}
                                            className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-faint text-ink transition-colors duration-300 hover:border-ck-red hover:bg-ck-red hover:text-paper"
                                        >
                                            {Icon && <Icon className="h-4 w-4" aria-hidden="true" />}
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Giant wordmark */}
            <div aria-hidden="true" className="mt-16 md:mt-24 select-none px-3 md:px-6">
                <p data-wordmark className="whitespace-nowrap text-center font-heading font-semibold leading-[0.8] tracking-[-0.055em] text-[17.8vw]">
                    <span className="text-ck-red">CK</span> STUDIO
                </p>
            </div>

            {/* Bottom bar */}
            <div className="mx-auto max-w-[1600px] px-5 md:px-10">
                <div className="flex flex-col gap-3 border-t border-ink-faint py-6 text-xs text-ink-soft md:flex-row md:items-center md:justify-between">
                    <p>&copy; {new Date().getFullYear()} {footer.copyright}</p>
                    <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
                        <a href={contact.website.url} className="transition-colors hover:text-ck-red">{contact.website.label}</a>
                        {footer.legal.filter((l) => l.ready).map((l) => (
                            <button key={l.name} type="button" onClick={() => navigate(l.page)} className="transition-colors hover:text-ck-red">{l.name}</button>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
