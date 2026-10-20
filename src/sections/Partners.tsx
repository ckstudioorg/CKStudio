import React, { useRef } from 'react';
import { gsap, ScrollTrigger } from '../lib/smoothScroll';
import { fillWords, revealLines, riseIn, useGsap } from '../lib/motion';
import { partners } from '../content/work';
import SectionLabel from '../components/ui/SectionLabel';

/** One endless row of partner names. Content is doubled so the loop is seamless. */
const MarqueeRow: React.FC<{ names: string[]; reverse?: boolean }> = ({ names, reverse }) => (
    <div className="overflow-hidden py-3 md:py-5" data-marquee={reverse ? 'reverse' : 'forward'}>
        <div data-track className="flex w-max motion-reduce:w-auto motion-reduce:flex-wrap motion-reduce:gap-y-3">
            {[0, 1].map((copy) => (
                <ul key={copy} aria-hidden={copy === 1} className={`flex shrink-0 items-center motion-reduce:flex-wrap ${copy === 1 ? 'motion-reduce:hidden' : ''}`}>
                    {names.map((name) => (
                        <li key={name} className="flex items-center">
                            <span className="whitespace-nowrap px-5 md:px-8 font-heading font-semibold text-[clamp(1.75rem,1rem+3vw,4.5rem)] leading-none tracking-[-0.03em] text-ink transition-colors duration-300 hover:text-ck-red">
                                {name}
                            </span>
                            <span aria-hidden="true" className="h-2 w-2 md:h-2.5 md:w-2.5 rounded-full bg-ck-red" />
                        </li>
                    ))}
                </ul>
            ))}
        </div>
    </div>
);

const Partners: React.FC = () => {
    const root = useRef<HTMLElement>(null);
    const half = Math.ceil(partners.names.length / 2);

    useGsap(() => {
        const q = gsap.utils.selector(root);
        revealLines(q('[data-title]')[0]);
        riseIn(q('[data-intro]'), q('[data-intro]')[0]);

        // Rows drift on their own, speed up with fast scrolling, and flip direction when scrolling up
        const loops = (q('[data-marquee]') as HTMLElement[]).map((row) => {
            const reverse = row.dataset.marquee === 'reverse';
            const track = row.querySelector('[data-track]');
            const loop = gsap.fromTo(track, { xPercent: reverse ? -50 : 0 }, { xPercent: reverse ? 0 : -50, duration: 45, ease: 'none', repeat: -1 });
            // Start deep into the loop so it can also play backwards when scrolling up
            loop.totalTime(loop.duration() * 100);
            return loop;
        });
        let direction = 1;
        ScrollTrigger.create({
            trigger: root.current,
            start: 'top bottom',
            end: 'bottom top',
            onUpdate: (self) => {
                direction = self.direction;
                const boost = 1 + Math.min(Math.abs(self.getVelocity()) / 250, 8);
                loops.forEach((loop) => {
                    gsap.to(loop, { timeScale: direction * boost, duration: 0.2, overwrite: true });
                    gsap.to(loop, { timeScale: direction, duration: 1.2, delay: 0.2, ease: 'power2.out' });
                });
            },
        });

        riseIn(q('[data-more]'), q('[data-more]')[0]);
        fillWords(q('[data-quote]')[0], { start: 'top 80%', end: 'bottom 55%' });
    }, root);

    return (
        <section id="clients" ref={root} aria-labelledby="partners-title" className="relative overflow-hidden bg-paper text-ink py-28 md:py-40">
            <div className="mx-auto max-w-[1600px] px-5 md:px-10">
                <div className="grid gap-8 md:grid-cols-12 md:items-end">
                    <div className="md:col-span-7">
                        <SectionLabel index="06">{partners.label}</SectionLabel>
                        <h2 id="partners-title" data-title className="mt-8 font-heading font-semibold text-giant">
                            {partners.title.lead} <span className="text-ck-red">{partners.title.highlight}</span>
                        </h2>
                    </div>
                    <p data-intro className="md:col-span-4 md:col-start-9 text-base md:text-lg leading-relaxed text-ink-soft">{partners.intro}</p>
                </div>
            </div>

            <div className="mt-16 md:mt-24 border-y border-ink-faint py-4 md:py-6">
                <MarqueeRow names={partners.names.slice(0, half)} />
                <MarqueeRow names={partners.names.slice(half)} reverse />
            </div>
            {/* Full list for screen readers (marquee rows are decorative duplicates) */}
            <ul className="sr-only">
                {partners.names.map((name) => <li key={name}>{name}</li>)}
            </ul>

            <div className="mx-auto max-w-[1600px] px-5 md:px-10">
                <p data-more className="mt-8 text-right text-xs md:text-sm font-medium uppercase tracking-[0.3em] text-ink-soft">{partners.more}</p>
                <blockquote className="mx-auto mt-24 md:mt-32 max-w-5xl text-center">
                    <p data-quote className="font-heading font-medium text-[clamp(1.6rem,1rem+2.4vw,3.6rem)] leading-[1.12] tracking-[-0.02em]">
                        <span className="text-ck-red">“</span>{partners.quote.lead} <span className="text-ck-red">{partners.quote.highlight}</span><span className="text-ck-red">”</span>
                    </p>
                </blockquote>
            </div>
        </section>
    );
};

export default Partners;
