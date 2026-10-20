import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { useLocation, useNavigate } from 'react-router-dom';
import Logo from '../brand/Logo';
import { contact } from '../../content/contact';
import { ScrollTrigger, scrollToSection, setScrollLocked } from '../../lib/smoothScroll';

interface HeaderProps {
    activeSection: string;
}

const navLinks = [
    { id: 'home', name: 'Home' },
    { id: 'about', name: 'About' },
    { id: 'services', name: 'Services' },
    { id: 'portfolio', name: 'Portfolio' },
    { id: 'blog', name: 'Blog' },
    { id: 'faq', name: 'FAQ' },
    { id: 'contact', name: 'Contact' },
];

const pageRoutes = new Set(['blog', 'faq']);
const trackedSections = ['home', 'about', 'services', 'portfolio', 'contact'];
const ease = [0.16, 1, 0.3, 1] as const;

/** Text that rolls up to a copy of itself on hover. */
const RollText: React.FC<{ children: string }> = ({ children }) => (
    <span className="relative inline-flex overflow-hidden align-top">
        <span className="block transition-transform duration-500 ease-cinema group-hover:-translate-y-full">{children}</span>
        <span aria-hidden="true" className="absolute inset-0 block translate-y-full transition-transform duration-500 ease-cinema group-hover:translate-y-0">
            {children}
        </span>
    </span>
);

const Arrow: React.FC<{ className?: string }> = ({ className = '' }) => (
    <svg aria-hidden="true" viewBox="0 0 16 16" fill="none" className={`h-3.5 w-3.5 ${className}`}>
        <path d="M3 13L13 3M13 3H5M13 3V11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const Header: React.FC<HeaderProps> = ({ activeSection }) => {
    const [scrolled, setScrolled] = useState(false);
    const [hidden, setHidden] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const progressRef = useRef<HTMLDivElement>(null);
    const location = useLocation();
    const navigate = useNavigate();
    const isHomePage = location.pathname === '/';
    const [tracked, setTracked] = useState(activeSection);

    // On the home page, highlight the menu item for the section currently in the middle of the screen
    useEffect(() => {
        setTracked(activeSection);
        if (!isHomePage) return;
        const triggers = trackedSections.flatMap((id) => {
            const el = document.getElementById(id);
            if (!el) return [];
            return [ScrollTrigger.create({
                trigger: el,
                start: 'top 45%',
                end: 'bottom 45%',
                onToggle: (self) => setTracked((current) => (self.isActive ? id : current === id ? '' : current)),
            })];
        });
        return () => triggers.forEach((t) => t.kill());
    }, [isHomePage, activeSection]);

    // Solid background after scrolling, hide on scroll down / show on scroll up, reading progress line
    useEffect(() => {
        let lastY = window.scrollY;
        let frame = 0;
        const update = () => {
            frame = 0;
            const y = window.scrollY;
            const max = document.documentElement.scrollHeight - window.innerHeight;
            setScrolled(y > 40);
            if (Math.abs(y - lastY) > 6) {
                setHidden(y > lastY && y > window.innerHeight * 0.6);
                lastY = y;
            }
            if (progressRef.current) progressRef.current.style.transform = `scaleX(${max > 0 ? Math.min(1, y / max) : 0})`;
        };
        const onScroll = () => { if (!frame) frame = requestAnimationFrame(update); };
        update();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', onScroll);
            if (frame) cancelAnimationFrame(frame);
        };
    }, []);

    useEffect(() => {
        setScrollLocked(isMenuOpen);
        return () => setScrollLocked(false);
    }, [isMenuOpen]);

    const handleNavClick = (id: string) => {
        setIsMenuOpen(false);
        if (pageRoutes.has(id)) {
            if (location.pathname !== `/${id}`) navigate(`/${id}`);
            return;
        }
        if (isHomePage) {
            if (!document.getElementById(id)) return;
            // If the menu is closing, wait a frame so scrolling is unlocked first
            if (isMenuOpen) requestAnimationFrame(() => scrollToSection(id));
            else scrollToSection(id);
        } else {
            navigate(`/#${id}`);
        }
    };

    const solid = scrolled || isMenuOpen || !isHomePage;

    const skipToContent = (e: React.MouseEvent) => {
        e.preventDefault();
        const main = document.getElementById('main');
        if (!main) return;
        main.focus({ preventScroll: true });
        scrollToSection('main');
    };

    return (
        <>
            {/* Keyboard shortcut past the menu; only visible when focused with Tab */}
            <a
                href="#main"
                onClick={skipToContent}
                className="fixed left-4 top-4 z-[60] -translate-y-24 rounded-full bg-ck-red px-5 py-3 text-sm font-medium text-paper transition-transform focus:translate-y-0"
            >
                Skip to content
            </a>
            <motion.header
                className="fixed inset-x-0 top-0 z-50"
                initial={{ y: -100 }}
                animate={{ y: hidden && !isMenuOpen ? -100 : 0 }}
                transition={{ duration: 0.7, ease }}
            >
                <div
                    className={`transition-[background-color,backdrop-filter,border-color] duration-500 border-b ${
                        solid ? 'bg-paper/80 backdrop-blur-xl border-ink-faint/60' : 'bg-transparent border-transparent'
                    }`}
                >
                    <div className="mx-auto flex h-16 md:h-20 max-w-[1600px] items-center justify-between px-5 md:px-10">
                        <a href="/" aria-label="CK Studio home" className="text-ck-red transition-opacity hover:opacity-80">
                            <Logo className="h-8 md:h-9" />
                        </a>

                        {/* Desktop navigation */}
                        <nav aria-label="Main" className="hidden lg:flex items-center gap-1">
                            {navLinks.map((link) => {
                                const active = tracked === link.id;
                                return (
                                    <button
                                        key={link.id}
                                        onClick={() => handleNavClick(link.id)}
                                        aria-current={active ? 'true' : undefined}
                                        className={`group relative px-3.5 py-2 text-[0.8rem] font-medium uppercase tracking-[0.14em] transition-colors duration-300 ${
                                            active ? 'text-ck-red' : 'text-ink hover:text-ck-red'
                                        }`}
                                    >
                                        <RollText>{link.name}</RollText>
                                        {active && (
                                            <motion.span
                                                layoutId="nav-dot"
                                                className="absolute bottom-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-ck-red"
                                                transition={{ duration: 0.6, ease }}
                                            />
                                        )}
                                    </button>
                                );
                            })}
                        </nav>

                        <div className="flex items-center gap-2">
                            <button
                                onClick={() => handleNavClick('contact')}
                                className="group relative hidden md:inline-flex items-center gap-2 overflow-hidden rounded-full bg-ck-red px-5 py-2.5 text-[0.8rem] font-medium uppercase tracking-[0.12em] text-paper"
                            >
                                <span aria-hidden="true" className="absolute inset-0 translate-y-full rounded-full bg-ink transition-transform duration-500 ease-cinema group-hover:translate-y-0" />
                                <span className="relative"><RollText>Get Started</RollText></span>
                                <Arrow className="relative transition-transform duration-500 ease-cinema group-hover:rotate-45" />
                            </button>

                            {/* Mobile / tablet menu toggle */}
                            <button
                                onClick={() => setIsMenuOpen((open) => !open)}
                                aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                                aria-expanded={isMenuOpen}
                                className="lg:hidden inline-flex h-11 items-center gap-3 rounded-full border border-ink-faint bg-paper/70 pl-4 pr-3 text-[0.8rem] font-medium uppercase tracking-[0.14em] text-ink"
                            >
                                {isMenuOpen ? 'Close' : 'Menu'}
                                <span className="relative block h-3 w-5">
                                    <span className={`absolute left-0 h-[1.5px] w-full bg-current transition-all duration-500 ease-cinema ${isMenuOpen ? 'top-1/2 rotate-45' : 'top-0.5'}`} />
                                    <span className={`absolute left-0 h-[1.5px] w-full bg-current transition-all duration-500 ease-cinema ${isMenuOpen ? 'top-1/2 -rotate-45' : 'bottom-0.5'}`} />
                                </span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Reading progress */}
                <div ref={progressRef} aria-hidden="true" className="h-[2px] origin-left scale-x-0 bg-ck-red" />
            </motion.header>

            {/* Mobile / tablet full-screen menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        key="menu"
                        initial={{ clipPath: 'inset(0 0 100% 0)' }}
                        animate={{ clipPath: 'inset(0 0 0% 0)' }}
                        exit={{ clipPath: 'inset(0 0 100% 0)' }}
                        transition={{ duration: 0.8, ease }}
                        className="fixed inset-0 z-40 flex flex-col bg-paper px-5 pb-8 pt-24 md:px-10 lg:hidden"
                    >
                        <nav aria-label="Mobile" className="flex flex-1 flex-col justify-center">
                            {navLinks.map((link, index) => (
                                <div key={link.id} className="overflow-hidden border-b border-ink-faint/70">
                                    <motion.button
                                        onClick={() => handleNavClick(link.id)}
                                        initial={{ y: '110%' }}
                                        animate={{ y: 0 }}
                                        exit={{ y: '110%' }}
                                        transition={{ duration: 0.8, ease, delay: 0.15 + index * 0.05 }}
                                        className={`flex w-full items-baseline gap-4 py-2 text-left font-heading text-[clamp(2.4rem,9vw,4.5rem)] font-semibold leading-[1.05] tracking-[-0.03em] ${
                                            tracked === link.id ? 'text-ck-red' : 'text-ink'
                                        }`}
                                    >
                                        <span className="font-body text-xs font-medium tracking-[0.2em] text-ink-soft">0{index + 1}</span>
                                        {link.name}
                                    </motion.button>
                                </div>
                            ))}
                        </nav>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.6, ease, delay: 0.55 }}
                            className="flex flex-wrap items-center justify-between gap-4 pt-6"
                        >
                            <a href={`tel:${contact.phone.tel}`} className="text-sm text-ink-soft">{contact.phone.international}</a>
                            <button
                                onClick={() => handleNavClick('contact')}
                                className="inline-flex items-center gap-2 rounded-full bg-ck-red px-6 py-3.5 text-sm font-medium uppercase tracking-[0.12em] text-paper"
                            >
                                Start Your Project <Arrow />
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Header;
