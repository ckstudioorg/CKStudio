import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { SplitText } from 'gsap/SplitText';
import { gsap } from '../lib/smoothScroll';
import { useGsap } from '../lib/motion';
import { notFound } from '../content/faq';
import Logo from '../components/brand/Logo';

const NotFound: React.FC = () => {
    const root = useRef<HTMLDivElement>(null);

    useGsap(() => {
        const q = gsap.utils.selector(root);
        const split = SplitText.create(q('[data-code]')[0], { type: 'chars', mask: 'chars' });
        gsap.timeline({ delay: 0.15 })
            .from(split.chars, { yPercent: 110, duration: 1.3, ease: 'expo.out', stagger: 0.08 })
            .from(q('[data-in]'), { y: 24, autoAlpha: 0, duration: 1, ease: 'expo.out', stagger: 0.08 }, 0.4);
    }, root);

    return (
        <div ref={root} className="flex min-h-svh flex-col bg-paper text-ink">
            <title>Page Not Found | CK Studio</title>
            <meta name="robots" content="noindex" />
            <div className="px-5 md:px-10 py-6">
                <Link to="/" aria-label="CK Studio home" className="text-ck-red"><Logo className="h-8 md:h-9" /></Link>
            </div>
            <main className="flex flex-1 flex-col items-center justify-center px-5 pb-24 text-center">
                <p data-in className="text-xs font-medium uppercase tracking-[0.3em] text-ink-soft">Error</p>
                <h1 className="mt-4">
                    <span data-code className="block font-heading font-semibold leading-[0.85] tracking-[-0.06em] text-ck-red text-[clamp(8rem,4rem+22vw,22rem)]">{notFound.code}</span>
                    <span data-in className="mt-6 block font-heading text-[clamp(1.75rem,1rem+2.4vw,3rem)] font-semibold tracking-[-0.03em]">{notFound.title}</span>
                </h1>
                <p data-in className="mt-5 max-w-md text-base md:text-lg text-ink-soft">{notFound.text}</p>
                <Link
                    data-in
                    to="/"
                    className="group relative mt-10 inline-flex items-center gap-3 overflow-hidden rounded-full bg-ck-red px-8 py-4 text-sm font-medium uppercase tracking-[0.14em] text-paper"
                >
                    <span aria-hidden="true" className="absolute inset-0 translate-y-full rounded-full bg-ink transition-transform duration-500 ease-cinema group-hover:translate-y-0" />
                    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="relative h-4 w-4"><path d="M19 12H5m0 0 6 6m-6-6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    <span className="relative">{notFound.action}</span>
                </Link>
            </main>
        </div>
    );
};

export default NotFound;
