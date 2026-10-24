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
                            {/* Second row in italics for a gentle rhythm */}
                            <span className={`whitespace-nowrap px-6 md:px-10 font-display font-normal text-[clamp(1.75rem,1rem+3vw,4.5rem)] leading-[1.1] tracking-[-0.01em] transition-colors duration-500 hover:text-gold-light ${reverse ? 'italic text-ivory/65' : 'text-ivory'}`}>
                                {name}
                            </span>
                            <span aria-hidden="true" className="h-[7px] w-[7px] md:h-2 md:w-2 shrink-0 rotate-45 bg-gold/70" />
                        </li>
                    ))}
                </ul>
            ))}
        </div>
    </div>
);

/** Names melt into the dark at both ends of the band. */
const edgeFade = 'linear-gradient(90deg, transparent, #000 9%, #000 91%, transparent)';

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
        <section id="clients" ref={root} aria-labelledby="partners-title" className="relative overflow-hidden bg-noir text-ivory py-28 md:py-44">
            {/* Deep red light high on the right */}
            <div aria-hidden="true" className="lux-glow-top pointer-events-none absolute inset-0" style={{ background: 'radial-gradient(ellipse 45% 35% at 85% 8%, rgba(139,0,0,0.22), rgba(10,8,7,0) 72%)' }} />

            <div className="relative mx-auto max-w-[1600px] px-5 md:px-10">
                <div className="grid gap-8 md:grid-cols-12 md:items-end">
                    <div className="md:col-span-7">
                        <SectionLabel index="06">{partners.label}</SectionLabel>
                        <h2 id="partners-title" data-title className="mt-8 font-display font-normal text-display">
                            {partners.title.lead} <em className="lux-foil">{partners.title.highlight}</em>
                        </h2>
                    </div>
                    <p data-intro className="md:col-span-4 md:col-start-9 text-base md:text-lg leading-[1.8] text-ivory-soft">{partners.intro}</p>
                </div>
            </div>

            <div className="relative mt-16 md:mt-24 border-y border-gold/20 py-4 md:py-6" style={{ maskImage: edgeFade, WebkitMaskImage: edgeFade }}>
                <MarqueeRow names={partners.names.slice(0, half)} />
                <MarqueeRow names={partners.names.slice(half)} reverse />
            </div>
            {/* Full list for screen readers (marquee rows are decorative duplicates) */}
            <ul className="sr-only">
                {partners.names.map((name) => <li key={name}>{name}</li>)}
            </ul>

            <div className="relative mx-auto max-w-[1600px] px-5 md:px-10">
                <p data-more className="mt-8 flex items-center justify-end gap-4 font-display text-lg md:text-xl italic text-ivory-soft">
                    <span aria-hidden="true" className="h-px w-10 md:w-16 bg-gradient-to-r from-transparent to-gold/60" />
                    {partners.more}
                </p>
                <blockquote className="mx-auto mt-24 md:mt-36 max-w-5xl text-center">
                    <p data-quote className="font-display font-normal text-[clamp(1.7rem,1rem+2.6vw,3.9rem)] leading-[1.2] tracking-[-0.01em] text-ivory">
                        <span className="text-gold">“</span>{partners.quote.lead} <em className="text-gold-light">{partners.quote.highlight}</em><span className="text-gold">”</span>
                    </p>
                </blockquote>
            </div>
        </section>
    );
};

export default Partners;
