import React from 'react';
import Section from './Section';
import { motion } from 'framer-motion';

const adFilmImages = [
    'https://images.unsplash.com/photo-1536240478700-b869070f9279?w=500&h=350&fit=crop',
    'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=500&h=350&fit=crop',
    'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=500&h=350&fit=crop',
    'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=500&h=350&fit=crop',
    'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=500&h=350&fit=crop',
    'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=500&h=350&fit=crop',
    'https://images.unsplash.com/photo-1505533321630-975218a5f66f?w=500&h=350&fit=crop',
    'https://images.unsplash.com/photo-1524712245354-2c4e5e7121c0?w=500&h=350&fit=crop',
    'https://images.unsplash.com/photo-1616530940355-351fabd9524b?w=500&h=350&fit=crop',
    'https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=500&h=350&fit=crop',
    'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=500&h=350&fit=crop',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=350&fit=crop',
];

const commercialImages = [
    'https://images.unsplash.com/photo-1551817958-d9d86fb29431?w=500&h=350&fit=crop',
    'https://images.unsplash.com/photo-1542204165-65bf26472b9b?w=500&h=350&fit=crop',
    'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&h=350&fit=crop',
    'https://images.unsplash.com/photo-1579566346927-c68383817a25?w=500&h=350&fit=crop',
    'https://images.unsplash.com/photo-1518929458119-e5bf444c30f4?w=500&h=350&fit=crop',
    'https://images.unsplash.com/photo-1533750516457-a7f992034fec?w=500&h=350&fit=crop',
    'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500&h=350&fit=crop',
    'https://images.unsplash.com/photo-1523726491678-bf852e717f6a?w=500&h=350&fit=crop',
    'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=500&h=350&fit=crop',
    'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&h=350&fit=crop',
    'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=500&h=350&fit=crop',
    'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=500&h=350&fit=crop',
];

const ScrollingReel: React.FC<{ images: string[]; direction?: 'left' | 'right'; label: string }> = ({ images, direction = 'left', label }) => {
    const animClass = direction === 'left' ? 'animate-scroll-left' : 'animate-scroll-right';

    return (
        <div className="overflow-hidden py-6 group relative">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-dark-950 to-transparent pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-dark-950 to-transparent pointer-events-none" />

            <div
                className={`flex gap-5 ${animClass} hover-pause`}
            >
                {[...images, ...images, ...images].map((img, index) => (
                    <motion.div
                        key={index}
                        className="flex-shrink-0 relative group/card rounded-xl overflow-hidden"
                        whileHover={{ scale: 1.03, zIndex: 10 }}
                        transition={{ duration: 0.3 }}
                    >
                        <img
                            src={img}
                            alt={`${label} ${(index % images.length) + 1}`}
                            className="h-48 w-72 md:h-56 md:w-80 object-cover rounded-xl transition-all duration-300"
                            loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 rounded-xl" />
                        <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-red/90 text-white text-xs font-bold">
                                <Sparkle /> AI-Powered
                            </span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

const Sparkle = () => (
    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0L14.59 8.41L23 12L14.59 15.59L12 24L9.41 15.59L1 12L9.41 8.41Z" />
    </svg>
);

const Portfolio: React.FC = () => {
    return (
        <Section className="section-darker overflow-hidden">
            <div className="text-center mb-16 relative">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-semibold text-gray-400 uppercase tracking-[0.2em] mb-6"
                >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-red" />
                    Our Portfolio
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl font-display font-black tracking-tight sm:text-6xl mb-4"
                >
                    <span className="heading-gradient">Our</span>{' '}
                    <span className="heading-red">Work</span>
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="mt-4 text-lg text-gray-500"
                >
                    A glimpse into the AI-enhanced worlds we've created.
                </motion.p>
            </div>

            {/* AI Ad Films Section */}
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mb-12"
            >
                <h3 className="text-2xl font-display font-bold text-white mb-6 px-6 border-l-2 border-primary-red ml-4 md:ml-12 flex items-center gap-3">
                    AI Ad Films
                    <span className="text-xs px-3 py-1 rounded-full bg-primary-red/10 text-primary-red border border-primary-red/20 font-semibold">Featured</span>
                </h3>
                <ScrollingReel images={adFilmImages} direction="left" label="AI Ad Film" />
            </motion.div>

            {/* AI Commercials Section */}
            <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <h3 className="text-2xl font-display font-bold text-white mb-6 px-6 border-r-2 border-primary-red mr-4 md:mr-12 text-right flex items-center justify-end gap-3">
                    <span className="text-xs px-3 py-1 rounded-full bg-primary-red/10 text-primary-red border border-primary-red/20 font-semibold">Commercials</span>
                    AI-Enhanced Commercials
                </h3>
                <ScrollingReel images={commercialImages} direction="right" label="AI Commercial" />
            </motion.div>
        </Section>
    );
};

export default Portfolio;
