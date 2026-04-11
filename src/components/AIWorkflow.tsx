import React from 'react';
import Section from './Section';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Lightbulb, FileText, Video, Wand2, Send } from 'lucide-react';

const steps = [
    {
        icon: <Lightbulb className="w-6 h-6" />,
        title: 'AI Ideation',
        description: 'AI-generated concepts, mood boards, and storyboards that push creative boundaries.',
        detail: 'Generative AI brainstorms concepts at scale',
    },
    {
        icon: <FileText className="w-6 h-6" />,
        title: 'Pre-Production',
        description: 'AI script analysis, intelligent scheduling, casting optimization, and shot planning.',
        detail: 'Machine learning optimizes every detail',
    },
    {
        icon: <Video className="w-6 h-6" />,
        title: 'Production',
        description: 'AI-assisted cinematography, real-time monitoring, and intelligent shot composition.',
        detail: 'Neural networks guide every frame',
    },
    {
        icon: <Wand2 className="w-6 h-6" />,
        title: 'Post-Production',
        description: 'AI-powered editing, neural color grading, intelligent VFX, and audio mastering.',
        detail: 'AI delivers cinema-grade results 10× faster',
    },
    {
        icon: <Send className="w-6 h-6" />,
        title: 'Delivery',
        description: 'AI-optimized formats, platform-specific exports, and adaptive quality delivery.',
        detail: 'Smart delivery for every platform',
    },
];

const AIWorkflow: React.FC = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.05,
    });

    return (
        <Section className="section-darker grid-overlay">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary-red/[0.03] rounded-full blur-[250px] pointer-events-none" />

            <div className="text-center mb-20 relative">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-semibold text-gray-400 uppercase tracking-[0.2em] mb-6"
                >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-red" />
                    Our Process
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl font-display font-black tracking-tight sm:text-6xl mb-4"
                >
                    <span className="heading-gradient">AI-Powered</span>{' '}
                    <span className="heading-red">Workflow</span>
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-lg text-gray-500 max-w-2xl mx-auto"
                >
                    Our end-to-end AI production pipeline — from concept to delivery.
                </motion.p>
            </div>

            <div ref={ref} className="relative max-w-5xl mx-auto">
                {/* Connecting Line */}
                <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2">
                    <motion.div
                        initial={{ height: 0 }}
                        animate={inView ? { height: '100%' } : { height: 0 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="w-full bg-gradient-to-b from-primary-red/50 via-primary-red/20 to-transparent"
                    />
                </div>

                {/* Steps */}
                <div className="space-y-8 md:space-y-0 relative">
                    {steps.map((step, index) => {
                        const isLeft = index % 2 === 0;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: isLeft ? -40 : 40 }}
                                transition={{ delay: 0.2 + index * 0.15, duration: 0.6 }}
                                className={`md:flex items-center gap-8 mb-8 md:mb-16 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                            >
                                {/* Card */}
                                <div className={`flex-1 ${isLeft ? 'md:text-right' : 'md:text-left'}`}>
                                    <div className="glass-card-hover p-6 md:p-8 inline-block w-full">
                                        <div className={`flex items-center gap-4 mb-4 ${isLeft ? 'md:flex-row-reverse' : ''}`}>
                                            <div className="w-12 h-12 rounded-xl bg-primary-red/10 border border-primary-red/20 text-primary-red flex items-center justify-center flex-shrink-0">
                                                {step.icon}
                                            </div>
                                            <div>
                                                <span className="text-xs text-gray-500 font-mono uppercase tracking-wider">Step {String(index + 1).padStart(2, '0')}</span>
                                                <h3 className="text-xl font-display font-bold text-white">{step.title}</h3>
                                            </div>
                                        </div>
                                        <p className="text-sm text-gray-400 leading-relaxed mb-3">{step.description}</p>
                                        <span className="text-xs text-primary-red/70 font-medium italic">{step.detail}</span>
                                    </div>
                                </div>

                                {/* Center Node */}
                                <div className="hidden md:flex flex-shrink-0 w-12 justify-center relative z-10">
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={inView ? { scale: 1 } : { scale: 0 }}
                                        transition={{ delay: 0.3 + index * 0.15, type: "spring", stiffness: 200 }}
                                        className="w-5 h-5 rounded-full bg-primary-red border-4 border-dark-950 shadow-lg shadow-primary-red/30"
                                    />
                                </div>

                                {/* Spacer */}
                                <div className="flex-1 hidden md:block" />
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </Section>
    );
};

export default AIWorkflow;
