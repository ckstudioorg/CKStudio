import React, { useRef } from 'react';
import { gsap } from '../lib/smoothScroll';
import { countUp, drawLine, fillWords, revealLines, riseIn, useGsap } from '../lib/motion';
import { about } from '../content/about';
import SectionLabel from '../components/ui/SectionLabel';
import ImageSlot from '../components/ui/ImageSlot';
import FilmStripArt from '../components/brand/FilmStripArt';

const About: React.FC = () => {
    const root = useRef<HTMLElement>(null);

    useGsap(() => {
        const q = gsap.utils.selector(root);
        revealLines(q('[data-title]')[0]);
        fillWords(q('[data-intro]')[0]);
        riseIn(q('[data-rise]'), q('[data-body]')[0]);
        countUp(q('[data-count]'), q('[data-stats]')[0]);

        // Image: wipes open from the bottom, then drifts slowly inside its frame while scrolling
        const frame = q('[data-frame]')[0];
        gsap.fromTo(frame, { clipPath: 'inset(100% 0% 0% 0%)' }, {
            clipPath: 'inset(0% 0% 0% 0%)', duration: 1.6, ease: 'expo.inOut',
            scrollTrigger: { trigger: frame, start: 'top 80%', once: true },
        });
        gsap.fromTo(q('[data-parallax]'), { yPercent: -8, scale: 1.18 }, {
            yPercent: 8, scale: 1.08, ease: 'none',
            scrollTrigger: { trigger: frame, start: 'top bottom', end: 'bottom top', scrub: true },
        });
        // Film-strip artwork: the film advances slowly through the frame as you scroll
        gsap.fromTo(q('[data-strip]'), { y: 40 }, {
            y: -40, ease: 'none',
            scrollTrigger: { trigger: frame, start: 'top bottom', end: 'bottom top', scrub: true },
        });

        drawLine(q('[data-line]')[0]);
        fillWords(q('[data-quote]')[0], { start: 'top 75%', end: 'bottom 50%' });
        riseIn(q('[data-signoff]'), q('[data-signoff]')[0]);
    }, root);

    return (
        <section ref={root} aria-labelledby="about-title" className="relative overflow-hidden bg-noir text-ivory py-28 md:py-44">
            {/* Deep red light behind the title */}
            <div aria-hidden="true" className="lux-glow-top pointer-events-none absolute inset-0" style={{ background: 'radial-gradient(ellipse 45% 38% at 88% 6%, rgba(139,0,0,0.24), rgba(10,8,7,0) 72%)' }} />

            <div className="relative mx-auto max-w-[1600px] px-5 md:px-10">
                <SectionLabel index="01">{about.label}</SectionLabel>
                <h2 id="about-title" data-title className="mt-8 max-w-[14ch] font-display font-normal text-display">
                    {about.title.lead} <em className="lux-foil">{about.title.highlight}</em>
                </h2>

                <div className="mt-16 md:mt-28 grid gap-16 md:grid-cols-12 md:gap-10">
                    {/* Image, hung like a gallery piece in a fine gold frame */}
                    <figure className="md:col-span-5">
                        <div className="relative">
                            <span aria-hidden="true" className="pointer-events-none absolute -inset-3 md:-inset-4 border border-gold/25" />
                            <div data-frame className="relative aspect-[4/5] overflow-hidden bg-noir-3">
                                <div data-parallax className="absolute inset-0 will-change-transform">
                                    {/* A real photo replaces the film-strip artwork once about.image.src is set */}
                                    {about.image.src
                                        ? <ImageSlot {...about.image} />
                                        : <FilmStripArt tone="noir" className="block h-full w-full" />}
                                </div>
                                <figcaption className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-auto border border-gold/30 bg-noir/85 px-5 py-4 backdrop-blur-md">
                                    <span className="lux-label block">{about.imageCaption.title}</span>
                                    <span className="mt-1.5 block text-sm text-ivory">{about.imageCaption.text}</span>
                                </figcaption>
                            </div>
                        </div>
                    </figure>

                    {/* Story */}
                    <div className="md:col-span-6 md:col-start-7 flex flex-col">
                        <p data-intro className="font-display font-normal text-[clamp(1.55rem,1rem+1.6vw,2.6rem)] leading-[1.28] tracking-[-0.01em] text-ivory">
                            {about.intro}
                        </p>
                        <div data-body className="mt-10 space-y-5 max-w-xl text-base md:text-lg leading-[1.8] text-ivory-soft">
                            {about.paragraphs.map((p) => <p key={p.slice(0, 20)} data-rise>{p}</p>)}
                        </div>

                        <dl data-stats className="mt-auto pt-14 grid grid-cols-3 border-t border-gold/20">
                            {about.stats.map((s, i) => (
                                <div key={s.label} className={`flex flex-col-reverse pt-7 ${i > 0 ? 'border-l border-gold/15 pl-4 md:pl-8' : ''}`}>
                                    <dt className="mt-3 text-[0.6rem] md:text-[0.66rem] uppercase tracking-[0.28em] text-ivory-dim">{s.label}</dt>
                                    <dd className="font-display font-normal text-[clamp(2.4rem,1.5rem+2.6vw,4.75rem)] leading-none tracking-[-0.02em] lining-nums">
                                        <span className="lux-foil"><span data-count={s.value}>{s.value}</span>{s.suffix}</span>
                                    </dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>

                {/* Closing quote */}
                <div className="mt-28 md:mt-44">
                    <div data-line className="h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
                    <blockquote className="mx-auto mt-16 md:mt-24 max-w-5xl text-center">
                        <span aria-hidden="true" className="lux-foil mx-auto block h-[0.42em] w-fit overflow-visible font-display text-[9rem] md:text-[12rem] leading-[0.8]">“</span>
                        <p data-quote className="mt-6 md:mt-8 font-display font-normal italic text-[clamp(1.6rem,1rem+2.2vw,3.3rem)] leading-[1.25] tracking-[-0.01em] text-ivory">
                            {about.quote}
                        </p>
                    </blockquote>
                    <p data-signoff className="lux-label mt-12 flex items-center justify-center gap-4 text-center">
                        <span aria-hidden="true" className="hidden sm:block h-px w-8 md:w-14 bg-gradient-to-l from-gold/70 to-transparent" />
                        {about.signoff}
                        <span aria-hidden="true" className="hidden sm:block h-px w-8 md:w-14 bg-gradient-to-r from-gold/70 to-transparent" />
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
