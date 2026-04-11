import React from 'react';
import Section from './Section';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const clientLogos = [
    { name: "Palik Studios" },
    { name: "RR Creations" },
    { name: "Srinidhi Real Estate" },
    { name: "MBMR Infra" },
    { name: "CM Productions" },
    { name: "Sampathnandi Teamworks" },
    { name: "Kuviyam Mediaworks" },
    { name: "Excel Movies" },
    { name: "IC Productions" },
    { name: "Steed Films" },
    { name: "Harivillu Creations" },
    { name: "IDFC Films" },
];

const Clients: React.FC = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <Section className="section-dark noise-overlay">
            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16 relative"
            >
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-semibold text-gray-400 uppercase tracking-[0.2em] mb-6">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-red" />
                    Our Partners
                </div>
                <h2 className="text-4xl font-display font-black tracking-tight sm:text-6xl mb-4">
                    <span className="heading-gradient">Trusted by</span>{' '}
                    <span className="heading-red">Industry Leaders</span>
                </h2>
                <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
                    We are proud to have collaborated with a diverse range of creative partners and leading brands.
                </p>
            </motion.div>

            {/* Marquee Row 1 */}
            <div className="overflow-hidden py-4 relative">
                <div className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-dark-900 to-transparent pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-dark-900 to-transparent pointer-events-none" />
                <div className="flex gap-6 animate-marquee hover-pause">
                    {[...clientLogos, ...clientLogos].map((client, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 glass-card px-8 py-5 flex items-center justify-center hover:border-primary-red/30 hover:bg-white/[0.06] transition-all duration-300 group min-w-[200px]"
                        >
                            <span className="text-gray-500 font-display font-bold text-sm tracking-wider group-hover:text-white transition-colors whitespace-nowrap">
                                {client.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Marquee Row 2 (reverse) */}
            <div className="overflow-hidden py-4 relative">
                <div className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-dark-900 to-transparent pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-dark-900 to-transparent pointer-events-none" />
                <div className="flex gap-6 animate-marquee-reverse hover-pause">
                    {[...clientLogos.slice().reverse(), ...clientLogos.slice().reverse()].map((client, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 glass-card px-8 py-5 flex items-center justify-center hover:border-primary-red/30 hover:bg-white/[0.06] transition-all duration-300 group min-w-[200px]"
                        >
                            <span className="text-gray-500 font-display font-bold text-sm tracking-wider group-hover:text-white transition-colors whitespace-nowrap">
                                {client.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Stats + Quote */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="mt-16 text-center"
            >
                <p className="text-sm text-gray-500 font-medium tracking-wider uppercase mb-12">and many more...</p>
                <div className="divider-glow max-w-md mx-auto mb-12" />
                <blockquote className="text-xl md:text-2xl italic font-light text-gray-400 max-w-3xl mx-auto">
                    "The best marketing doesn't feel like marketing — it feels like <span className="text-primary-red">cinema</span>"
                </blockquote>
            </motion.div>
        </Section>
    );
};

export default Clients;
