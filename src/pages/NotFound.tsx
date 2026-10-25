import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { SplitText } from 'gsap/SplitText';
import { gsap } from '../lib/smoothScroll';
import { useGsap } from '../lib/motion';
import { alreadyOnScreen } from '../lib/prerendered';
import { notFound } from '../content/faq';
import Logo from '../components/brand/Logo';

const NotFound: React.FC = () => {
    const root = useRef<HTMLDivElement>(null);

    useGsap(() => {
        const q = gsap.utils.selector(root);
        if (alreadyOnScreen(q('[data-code]')[0])) return; // arrived ready-made: keep it still, no flicker
        // A line mask (not one per letter) leaves room for the italic numbers to lean
        const split = SplitText.create(q('[data-code]')[0], { type: 'chars,lines', mask: 'lines', aria: 'none' });
        // Moving letters need their own red lacquer to stay visible
        split.chars.forEach((char) => char.classList.add('lux-lacquer-text'));
        gsap.timeline({ delay: 0.15 })
            .from(split.chars, { yPercent: 110, duration: 1.3, ease: 'expo.out', stagger: 0.08 })
            .from(q('[data-in]'), { y: 24, autoAlpha: 0, duration: 1, ease: 'expo.out', stagger: 0.08 }, 0.4);
    }, root);

    return (
        <div ref={root} className="relative flex min-h-svh flex-col overflow-hidden bg-noir text-ivory">
            {/* A dark stage: red velvet light from below, a soft gold spotlight from above */}
            <div aria-hidden="true" className="pointer-events-none absolute inset-0" style={{ background: 'radial-gradient(ellipse 65% 55% at 50% 108%, rgba(139,0,0,0.45), rgba(10,8,7,0) 70%), radial-gradient(ellipse 40% 38% at 50% 0%, rgba(212,175,55,0.08), rgba(10,8,7,0) 72%)' }} />
            <span aria-hidden="true" className="pointer-events-none absolute left-4 top-4 hidden h-6 w-6 border-l border-t border-gold/30 md:block" />
            <span aria-hidden="true" className="pointer-events-none absolute right-4 top-4 hidden h-6 w-6 border-r border-t border-gold/30 md:block" />
            <span aria-hidden="true" className="pointer-events-none absolute bottom-4 left-4 hidden h-6 w-6 border-b border-l border-gold/30 md:block" />
            <span aria-hidden="true" className="pointer-events-none absolute bottom-4 right-4 hidden h-6 w-6 border-b border-r border-gold/30 md:block" />

            <div className="relative px-5 md:px-12 py-7">
                <Link to="/" aria-label="CK Studio home" className="inline-block"><Logo tone="lux" className="h-8 md:h-9" /></Link>
            </div>
            <main className="relative flex flex-1 flex-col items-center justify-center px-5 pb-24 text-center">
                <p data-in className="lux-label">Error</p>
                <h1 className="mt-4">
                    <span data-code className="lux-lacquer-text block font-display font-normal italic leading-[0.9] tracking-[-0.02em] lining-nums text-[clamp(8rem,4rem+22vw,22rem)]">{notFound.code}</span>
                    <span data-in className="mt-6 block font-display text-[clamp(1.9rem,1rem+2.6vw,3.25rem)] font-normal leading-[1.15] text-ivory">{notFound.title}</span>
                </h1>
                <p data-in className="mt-5 max-w-md text-base md:text-lg leading-[1.8] text-ivory-soft">{notFound.text}</p>
                <Link data-in to="/" className="lux-btn mt-10 px-8 py-4">
                    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-4 w-4"><path d="M19 12H5m0 0 6 6m-6-6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    <span>{notFound.action}</span>
                </Link>
            </main>
        </div>
    );
};

export default NotFound;
