import React from 'react';
import Section from './Section';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Eye, Target, Zap, Brain, Lightbulb, Users, Rocket } from 'lucide-react';

const VisionMission: React.FC = () => {
    const missionItems = [
        { icon: <Brain className="w-4 h-4" />, text: "Pioneer AI-Driven Filmmaking" },
        { icon: <Eye className="w-4 h-4" />, text: "Visual Excellence at Scale" },
        { icon: <Zap className="w-4 h-4" />, text: "Intelligent Creative Marketing" },
        { icon: <Target className="w-4 h-4" />, text: "Deliver Beyond Expectations" },
        { icon: <Rocket className="w-4 h-4" />, text: "Innovate with AI Technology" },
        { icon: <Users className="w-4 h-4" />, text: "Foster Human-AI Collaboration" },
        { icon: <Lightbulb className="w-4 h-4" />, text: "Inspire the Future of Ads" },
    ];

    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut",
            },
        },
    };

    return (
        <Section className="section-dark noise-overlay">
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary-red/5 rounded-full blur-[180px] pointer-events-none" />

            <motion.div
                ref={ref}
                variants={containerVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="max-w-7xl mx-auto relative"
            >
                <motion.div variants={itemVariants} className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-semibold text-gray-400 uppercase tracking-[0.2em] mb-6">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary-red" />
                        Our Philosophy
                    </div>
                    <h2 className="text-4xl font-display font-black tracking-tight sm:text-6xl mb-4">
                        <span className="heading-gradient">Guiding</span>{' '}
                        <span className="heading-red">Principles</span>
                    </h2>
                    <p className="mt-4 text-gray-500 text-lg max-w-2xl mx-auto italic">
                        "Movies are made to be seen; AI ensures they're remembered"
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 items-start">
                    {/* Vision Card */}
                    <motion.div
                        variants={itemVariants}
                        className="glass-card-hover p-8 md:p-10 relative overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 w-40 h-40 bg-primary-red/5 rounded-full blur-[80px] pointer-events-none group-hover:bg-primary-red/10 transition-colors duration-500" />
                        
                        <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-6 flex items-center gap-4">
                            <span className="w-1 h-8 bg-primary-red rounded-full" />
                            Vision
                        </h3>
                        <p className="text-base md:text-lg text-gray-400 leading-relaxed italic">
                            "To be a global leader in AI-powered film production, setting the benchmark for creativity, quality, and technological innovation — transforming advertising stories into unforgettable cinematic experiences through the fusion of human artistry and artificial intelligence."
                        </p>
                        <div className="divider-glow mt-8" />
                    </motion.div>

                    {/* Mission Card */}
                    <motion.div
                        variants={itemVariants}
                        className="glass-card-hover p-8 md:p-10 relative overflow-hidden group"
                    >
                        <div className="absolute bottom-0 left-0 w-40 h-40 bg-primary-red/5 rounded-full blur-[80px] pointer-events-none group-hover:bg-primary-red/10 transition-colors duration-500" />
                        
                        <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-6 flex items-center gap-4">
                            <span className="w-1 h-8 bg-primary-red rounded-full" />
                            Mission
                        </h3>
                        <ul className="space-y-4">
                            {missionItems.map((item, index) => (
                                <motion.li
                                    key={index}
                                    className="flex items-center text-base text-gray-400 hover:text-white transition-colors duration-200 group/item"
                                    whileHover={{ x: 6 }}
                                >
                                    <span className="mr-4 text-primary-red flex-shrink-0 opacity-60 group-hover/item:opacity-100 transition-opacity">
                                        {item.icon}
                                    </span>
                                    {item.text}
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </motion.div>
        </Section>
    );
};

export default VisionMission;
