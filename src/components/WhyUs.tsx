import React from 'react';
import Section from './Section';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckCircle2 } from 'lucide-react';

const WhyUs: React.FC = () => {
    const strengths = [
        "AI-First Production Pipeline",
        "End-to-End Expertise",
        "Cutting-Edge AI Technology",
        "Proven Track Record (150+ Projects)",
        "Skilled & Creative Team",
        "Human-AI Collaborative Approach",
        "Customized AI Solutions",
        "Competitive Pricing",
        "Fast AI-Accelerated Turnaround",
        "Global Delivery & Standards"
    ];

    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <Section className="section-gradient noise-overlay">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-red/[0.04] rounded-full blur-[200px] pointer-events-none" />

            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16 relative"
            >
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-semibold text-gray-400 uppercase tracking-[0.2em] mb-6">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-red" />
                    Why Choose Us
                </div>
                <h2 className="text-4xl font-display font-black tracking-tight sm:text-6xl mb-4">
                    <span className="heading-gradient">Why</span>{' '}
                    <span className="heading-red">CK Studio?</span>
                </h2>
                <p className="mt-4 text-lg text-gray-500 max-w-3xl mx-auto">
                    Your vision deserves more than just technical execution — it deserves artistry, AI intelligence, and precision that creates cinematic masterpieces.
                </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-16 items-center relative">
                {/* Strengths Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {strengths.map((strength, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                            transition={{ delay: index * 0.06, duration: 0.4 }}
                            className="flex items-center group glass-card px-4 py-3 hover:bg-white/[0.06] hover:border-primary-red/20 transition-all duration-300"
                        >
                            <CheckCircle2 className="w-5 h-5 mr-3 text-primary-red flex-shrink-0 group-hover:scale-110 transition-transform" />
                            <span className="text-sm text-gray-400 group-hover:text-white transition-colors">{strength}</span>
                        </motion.div>
                    ))}
                </div>

                {/* Right Side — Commitment Ring */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="flex flex-col items-center justify-center space-y-8"
                >
                    <div className="relative w-64 h-64">
                        {/* Glow behind ring */}
                        <div className="absolute inset-8 bg-primary-red/10 rounded-full blur-3xl" />
                        
                        <svg className="w-full h-full relative z-10" viewBox="0 0 100 100">
                            <circle
                                className="text-white/[0.04]"
                                strokeWidth="6"
                                stroke="currentColor"
                                fill="transparent"
                                r="45"
                                cx="50"
                                cy="50"
                            />
                            <circle
                                className="text-primary-red transition-all duration-[2s] ease-out"
                                strokeWidth="6"
                                strokeLinecap="round"
                                stroke="currentColor"
                                fill="transparent"
                                r="45"
                                cx="50"
                                cy="50"
                                style={{
                                    strokeDasharray: 282.74,
                                    strokeDashoffset: inView ? 56.54 : 282.74,
                                    transform: 'rotate(-90deg)',
                                    transformOrigin: '50% 50%',
                                    filter: 'drop-shadow(0 0 8px rgba(139, 0, 0, 0.4))',
                                }}
                            />
                        </svg>
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10">
                            <div className="text-5xl font-display font-black text-white">100%</div>
                            <div className="text-xs text-gray-500 font-semibold uppercase tracking-[0.2em] mt-2">Commitment</div>
                        </div>
                    </div>

                    <div className="text-center space-y-3">
                        <div className="glass-card px-6 py-3">
                            <span className="text-brand-silver text-xl font-display font-bold">80%</span>
                            <span className="text-sm text-gray-400 ml-2">Dedicated Creative & AI Team</span>
                        </div>
                        <div className="glass-card px-6 py-3">
                            <span className="text-brand-gold text-xl font-display font-bold">20%</span>
                            <span className="text-sm text-gray-400 ml-2">CK's Magic at Work</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </Section>
    );
};

export default WhyUs;
