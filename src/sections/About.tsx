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
        <section ref={root} aria-labelledby="about-title" className="relative bg-paper text-ink py-28 md:py-40">
            <div className="mx-auto max-w-[1600px] px-5 md:px-10">
                <SectionLabel index="01">{about.label}</SectionLabel>
                <h2 id="about-title" data-title className="mt-8 max-w-[15ch] font-heading font-semibold text-giant">
                    {about.title.lead} <span className="text-ck-red">{about.title.highlight}</span>
                </h2>

                <div className="mt-16 md:mt-24 grid gap-14 md:grid-cols-12 md:gap-10">
                    {/* Image */}
                    <figure className="md:col-span-5">
                        <div data-frame className="relative aspect-[4/5] overflow-hidden rounded-[28px]">
                            <div data-parallax className="absolute inset-0 will-change-transform">
                                {/* A real photo replaces the film-strip artwork once about.image.src is set */}
                                {about.image.src
                                    ? <ImageSlot {...about.image} />
                                    : <FilmStripArt className="block h-full w-full" />}
                            </div>
                            <figcaption className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-auto rounded-2xl bg-paper/90 backdrop-blur-md px-5 py-4">
                                <span className="block text-[0.7rem] font-medium uppercase tracking-[0.22em] text-ck-red">{about.imageCaption.title}</span>
                                <span className="mt-1 block text-sm text-ink">{about.imageCaption.text}</span>
                            </figcaption>
                        </div>
                    </figure>

                    {/* Story */}
                    <div className="md:col-span-6 md:col-start-7 flex flex-col">
                        <p data-intro className="font-heading font-medium text-[clamp(1.5rem,1rem+1.6vw,2.6rem)] leading-[1.15] tracking-[-0.02em]">
                            {about.intro}
                        </p>
                        <div data-body className="mt-10 space-y-5 max-w-xl text-base md:text-lg leading-relaxed text-ink-soft">
                            {about.paragraphs.map((p) => <p key={p.slice(0, 20)} data-rise>{p}</p>)}
                        </div>

                        <dl data-stats className="mt-auto pt-14 grid grid-cols-3 gap-4 border-t border-ink-faint">
                            {about.stats.map((s) => (
                                <div key={s.label} className="flex flex-col-reverse pt-6">
                                    <dt className="mt-2 text-[0.65rem] md:text-xs uppercase tracking-[0.2em] text-ink-soft">{s.label}</dt>
                                    <dd className="font-heading font-semibold text-[clamp(2.25rem,1.5rem+2.5vw,4.5rem)] leading-none tracking-[-0.03em] text-ck-red">
                                        <span data-count={s.value}>{s.value}</span>{s.suffix}
                                    </dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>

                {/* Closing quote */}
                <div className="mt-28 md:mt-40">
                    <div data-line className="h-px bg-ink" />
                    <blockquote className="mx-auto mt-14 md:mt-20 max-w-5xl text-center">
                        <p data-quote className="font-heading font-medium text-[clamp(1.6rem,1rem+2.2vw,3.4rem)] leading-[1.12] tracking-[-0.02em]">
                            <span className="text-ck-red">“</span>{about.quote}<span className="text-ck-red">”</span>
                        </p>
                    </blockquote>
                    <p data-signoff className="mt-10 text-center text-xs md:text-sm font-medium uppercase tracking-[0.35em] text-ck-red">
                        {about.signoff}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
