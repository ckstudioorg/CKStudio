import React from 'react';
import Section from './Section';
import { motion } from 'framer-motion';
import { ExternalLink, ImageIcon, PlayCircle } from 'lucide-react';

interface WorkItem {
    title: string;
    category: string;
    url?: string;
    youtubeId?: string;
    note?: string;
}

const works: WorkItem[] = [
    {
        title: 'Baali Movie Teaser',
        category: 'Movie Teaser',
        url: 'https://www.youtube.com/watch?v=MIL0vVMcZ9k',
        youtubeId: 'MIL0vVMcZ9k',
    },
    {
        title: 'Odela Movie Lyrical Song',
        category: 'Lyrical Video',
        url: 'https://www.youtube.com/watch?v=C8l8U5PxQgk',
        youtubeId: 'C8l8U5PxQgk',
    },
    {
        title: 'Gangothri Ad',
        category: 'Commercial',
        note: 'Final thumbnail and video link required',
    },
    {
        title: 'Seetimaar Lyrical Song',
        category: 'Lyrical Video',
        url: 'https://www.youtube.com/watch?v=6Anj4GBzS28',
        youtubeId: '6Anj4GBzS28',
    },
    {
        title: 'Ugly Story Lyrical Songs',
        category: 'Lyrical Video',
        url: 'https://www.youtube.com/watch?v=wFJbGtddTv0',
        youtubeId: 'wFJbGtddTv0',
    },
    {
        title: 'Babu Bullshit Guy Lyrical Songs',
        category: 'Lyrical Video',
        url: 'https://www.youtube.com/watch?v=LKDJZ_yBDlA',
        youtubeId: 'LKDJZ_yBDlA',
    },
    {
        title: 'Aajyam Lyrical Song',
        category: 'Lyrical Video',
        url: 'https://www.youtube.com/watch?v=9Gl7CNrfgSo',
        youtubeId: '9Gl7CNrfgSo',
    },
];

const getYouTubeThumbnail = (youtubeId?: string) =>
    youtubeId ? `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg` : null;

const WorkCard: React.FC<{ work: WorkItem; index: number }> = ({ work, index }) => {
    const thumbnail = getYouTubeThumbnail(work.youtubeId);

    return (
        <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.06 }}
            className="group glass-card overflow-hidden hover:border-primary-red/30 transition-all duration-300"
        >
            <div className="relative aspect-video overflow-hidden bg-dark-800">
                {thumbnail ? (
                    <>
                        <img
                            src={thumbnail}
                            alt={work.title}
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                            loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-dark-950/90 via-dark-950/20 to-transparent" />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary-red/90 text-white shadow-lg shadow-primary-red/30">
                                <PlayCircle className="h-7 w-7" />
                            </span>
                        </div>
                    </>
                ) : (
                    <div className="flex h-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-dark-800 via-dark-900 to-primary-red/20 text-center">
                        <ImageIcon className="h-10 w-10 text-brand-gold" />
                        <span className="px-6 text-xs font-semibold uppercase tracking-[0.2em] text-brand-silver">
                            Project Asset Required
                        </span>
                    </div>
                )}
                <span className="absolute left-4 top-4 rounded-full border border-brand-gold/30 bg-dark-950/70 px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-gold backdrop-blur-sm">
                    {work.category}
                </span>
            </div>

            <div className="p-6">
                <h3 className="text-lg font-display font-bold text-white transition-colors duration-300 group-hover:text-brand-gold">
                    {work.title}
                </h3>
                {work.note && (
                    <p className="mt-3 text-sm text-gray-500">
                        {work.note}
                    </p>
                )}
                {work.url && (
                    <a
                        href={work.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary-red transition-colors hover:text-brand-gold"
                    >
                        Watch Project
                        <ExternalLink className="h-4 w-4" />
                    </a>
                )}
            </div>
        </motion.article>
    );
};

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
                    className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto"
                >
                    Selected movie teasers, lyrical videos, and commercial work from CK Studio.
                </motion.p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 relative">
                {works.map((work, index) => (
                    <WorkCard key={work.title} work={work} index={index} />
                ))}
            </div>
        </Section>
    );
};

export default Portfolio;
