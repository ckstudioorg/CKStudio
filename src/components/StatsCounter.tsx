import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface Stat {
    end: number;
    suffix: string;
    label: string;
    prefix?: string;
}

const stats: Stat[] = [
    { end: 150, suffix: '+', label: 'Projects Delivered' },
    { end: 50, suffix: '+', label: 'Brands Served' },
    { end: 10, suffix: '+', label: 'Years Experience' },
    { end: 98, suffix: '%', label: 'Client Satisfaction' },
];

const AnimatedCounter: React.FC<{ end: number; suffix: string; prefix?: string; active: boolean }> = ({ end, suffix, prefix = '', active }) => {
    const [count, setCount] = useState(0);
    const frameRef = useRef<number | null>(null);
    const startTime = useRef<number | null>(null);
    const duration = 2000; // ms

    useEffect(() => {
        if (!active) return;

        const animate = (timestamp: number) => {
            if (!startTime.current) startTime.current = timestamp;
            const elapsed = timestamp - startTime.current;
            const progress = Math.min(elapsed / duration, 1);

            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * end));

            if (progress < 1) {
                frameRef.current = requestAnimationFrame(animate);
            }
        };

        frameRef.current = requestAnimationFrame(animate);

        return () => {
            if (frameRef.current) cancelAnimationFrame(frameRef.current);
        };
    }, [active, end]);

    return (
        <span className="counter-number text-5xl md:text-6xl text-white">
            {prefix}{count}{suffix}
        </span>
    );
};

const StatsCounter: React.FC = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.3,
    });

    return (
        <section className="relative py-24 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-dark-950 via-dark-900 to-dark-950" />

            {/* Glow effects */}
            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-primary-red/5 rounded-full blur-[180px] pointer-events-none" />
            <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[300px] h-[300px] bg-primary-red/[0.03] rounded-full blur-[150px] pointer-events-none" />

            {/* Top and bottom borders */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-red/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-red/20 to-transparent" />

            <div ref={ref} className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="text-center relative group"
                        >
                            {/* Separator */}
                            {index > 0 && (
                                <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 w-px h-16 bg-white/[0.06]" />
                            )}

                            <AnimatedCounter
                                end={stat.end}
                                suffix={stat.suffix}
                                prefix={stat.prefix}
                                active={inView}
                            />
                            <div className="mt-3 text-xs md:text-sm text-gray-500 font-semibold uppercase tracking-[0.15em]">
                                {stat.label}
                            </div>

                            {/* Glow on number */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-20 bg-primary-red/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsCounter;
