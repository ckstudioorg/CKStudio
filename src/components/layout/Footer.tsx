import React, { useRef } from 'react';
import { SplitText } from 'gsap/SplitText';
import { Link, useLocation, useNavigate } from 'react-router-dom';
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

const linkClass = 'group inline-flex items-center gap-2 text-ivory/80 transition-colors duration-300 hover:text-gold-light';
const headingClass = 'lux-label';

const Footer: React.FC = () => {
    const root = useRef<HTMLElement>(null);
    const location = useLocation();
    const navigate = useNavigate();

    // Real links (so search engines can follow them); a plain click scrolls smoothly instead of jumping
    const goToSection = (id: string, e: React.MouseEvent) => {
        if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
        e.preventDefault();
        if (location.pathname === '/') scrollToSection(id);
        else navigate(`/#${id}`);
    };

    useGsap(() => {
        const q = gsap.utils.selector(root);
        // Giant wordmark letters rise up as the footer comes into view. Each letter gets its own
        // red lacquer or gold so the colour stays visible while the letters move.
        SplitText.create(q('[data-wordmark]')[0], {
            type: 'chars',
            mask: 'chars',
            aria: 'none', // the wordmark is decorative (hidden from screen readers)
            autoSplit: true,
            onSplit: (self) => {
                self.chars.forEach((char) => char.classList.add(char.closest('[data-ck]') ? 'lux-lacquer-text' : 'lux-foil-v'));
                return gsap.from(self.chars, {
                    yPercent: 100,
                    ease: 'none',
                    stagger: 0.06,
                    scrollTrigger: { trigger: root.current, start: 'top 85%', end: 'bottom bottom', scrub: 0.8 },
                });
            },
        });
        gsap.from(q('[data-col]'), {
            y: 30, autoAlpha: 0, duration: 1, ease: 'expo.out', stagger: 0.08,
            scrollTrigger: { trigger: root.current, start: 'top 85%', once: true },
        });
    }, root);

    return (
        <footer ref={root} className="relative overflow-hidden border-t border-gold/20 bg-noir text-ivory">
            {/* Faint red glow under the wordmark */}
            <div aria-hidden="true" className="pointer-events-none absolute inset-0" style={{ background: 'radial-gradient(ellipse 60% 45% at 50% 100%, rgba(139,0,0,0.22), rgba(10,8,7,0) 70%)' }} />

            <div className="relative mx-auto max-w-[1600px] px-5 md:px-10 pt-20 md:pt-28">
                <div className="grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-12">
                    {/* Brand */}
                    <div data-col className="col-span-2 md:col-span-4">
                        <p className="max-w-xs text-base leading-[1.8] text-ivory-soft">{footer.blurb}</p>
                        <p className="lux-label mt-6 inline-flex items-center gap-2 border border-gold/30 px-3.5 py-1.5">
                            <span aria-hidden="true" className="text-gold-light">✦</span> {footer.badge}
                        </p>
                    </div>

                    {footer.columns.map((col) => (
                        <nav key={col.title} data-col aria-label={col.title} className="md:col-span-2">
                            <h2 className={headingClass}>{col.title}</h2>
                            <ul className="mt-5 space-y-3 text-[0.95rem]">
                                {col.links.map((link) => (
                                    <li key={link.name}>
                                        {link.section ? (
                                            <a href={`/#${link.section}`} onClick={(e) => goToSection(link.section!, e)} className={linkClass}>{link.name}</a>
                                        ) : link.page ? (
                                            <Link to={link.page} className={linkClass}>{link.name}</Link>
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
                        <h2 className={headingClass}>Reach us</h2>
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
                                            className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/30 text-gold-light transition-colors duration-500 hover:border-gold hover:bg-gold hover:text-noir"
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

            {/* Giant wordmark: CK in red lacquer, STUDIO in gold */}
            <div aria-hidden="true" className="relative mt-16 md:mt-24 select-none px-3 md:px-6">
                <p data-wordmark className="whitespace-nowrap text-center font-display font-normal leading-[0.85] tracking-[-0.02em] text-[21.5vw]">
                    <span data-ck className="text-wine-bright">CK</span> <span className="text-gold">STUDIO</span>
                </p>
            </div>

            {/* Bottom bar */}
            <div className="relative mx-auto max-w-[1600px] px-5 md:px-10">
                <div className="flex flex-col gap-3 border-t border-gold/15 py-6 text-xs text-ivory-dim md:flex-row md:items-center md:justify-between">
                    <p suppressHydrationWarning>&copy; {new Date().getFullYear()} {footer.copyright}</p>
                    <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
                        <a href={contact.website.url} className="transition-colors hover:text-gold-light">{contact.website.label}</a>
                        {footer.legal.filter((l) => l.ready).map((l) => (
                            <Link key={l.name} to={l.page} className="transition-colors hover:text-gold-light">{l.name}</Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
