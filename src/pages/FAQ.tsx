import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, Search } from 'lucide-react';

interface FAQItem {
    question: string;
    answer: string;
    category: string;
}

const sampleFAQs: FAQItem[] = [
    {
        question: "What services does CK Studio offer?",
        answer: "We offer a comprehensive range of AI-powered video production services including AI Ad Films, AI Visual Effects, AI Post-Production (color grading, audio mixing, editing), Corporate Films, AI Creative Design, and Professional Photography. We specialize in combining artificial intelligence with cinematic expertise.",
        category: "General"
    },
    {
        question: "How does AI enhance your film production process?",
        answer: "AI is integrated into every stage of our workflow. From AI-generated storyboards and script analysis in pre-production, to AI-assisted cinematography during shooting, and neural color grading, AI editing, and intelligent VFX in post-production. This enables faster turnaround, higher quality, and innovative creative possibilities.",
        category: "AI Technology"
    },
    {
        question: "Do you work with clients outside Hyderabad?",
        answer: "Yes! While we are based in Hyderabad, we work with clients across India and globally. We handle logistics for out-of-station shoots to ensure seamless production. Our AI-powered workflow also enables efficient remote collaboration.",
        category: "General"
    },
    {
        question: "What is the typical timeline for an AI-powered ad film?",
        answer: "With our AI-accelerated workflow, a typical ad film takes 1-3 weeks from concept to final delivery — significantly faster than traditional production. This includes AI-assisted pre-production (scripting, storyboarding), production (shooting), and AI-powered post-production (editing, color grading, VFX, sound design).",
        category: "Production"
    },
    {
        question: "Can you help with scriptwriting and concept development?",
        answer: "Absolutely. We use a combination of our creative team's expertise and AI-powered tools for concept development, scriptwriting, and storyboarding. AI helps us generate multiple creative directions quickly, while our experienced team curates and refines the best ideas.",
        category: "Pre-Production"
    },
    {
        question: "What makes CK Studio different from other production houses?",
        answer: "CK Studio is one of India's few AI-first ad film production studios. We combine 10+ years of cinematic expertise with cutting-edge AI technology. This unique blend allows us to deliver Hollywood-grade quality at competitive pricing with faster turnaround times.",
        category: "General"
    },
    {
        question: "What AI technologies do you use in production?",
        answer: "We utilize a range of AI technologies including generative AI for concept development, neural rendering for VFX, machine learning for color grading and audio mastering, AI-powered editing tools, and intelligent format optimization for multi-platform delivery.",
        category: "AI Technology"
    },
    {
        question: "How do you ensure quality with AI-assisted production?",
        answer: "AI is a tool that enhances our creative process, not replaces it. Every AI-generated output goes through rigorous human quality review by our experienced creative team. We use AI to accelerate the process while maintaining the highest standards of cinematic quality.",
        category: "Quality"
    },
];

const FAQ: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [searchTerm, setSearchTerm] = useState('');

    const toggleAccordion = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const filteredFAQs = sampleFAQs.filter(faq =>
        faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-dark-950">
            {/* Hero Banner */}
            <div className="relative py-24 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-dark-800 to-dark-950" />
                <div className="absolute inset-0 opacity-20 pointer-events-none" style={{
                    backgroundImage: 'radial-gradient(circle, rgba(220,20,60,0.06) 1px, transparent 1px)',
                    backgroundSize: '24px 24px',
                }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-primary-red/5 rounded-full blur-[180px] pointer-events-none" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-semibold text-gray-400 uppercase tracking-[0.2em] mb-6"
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary-red" />
                        Help Center
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-display font-black mb-6"
                    >
                        <span className="heading-gradient">Frequently Asked</span>{' '}
                        <span className="heading-red">Questions</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-gray-500 max-w-2xl mx-auto"
                    >
                        Everything you need to know about our AI-powered production services, process, and pricing.
                    </motion.p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Search Bar */}
                <div className="relative mb-12">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-600 w-5 h-5" />
                    <input
                        type="text"
                        placeholder="Search for answers..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-12 pr-4 py-4 bg-white/[0.03] border border-white/[0.08] rounded-xl focus:border-primary-red/50 focus:outline-none text-base text-white placeholder:text-gray-600 backdrop-blur-sm transition-colors"
                    />
                </div>

                <div className="space-y-3">
                    {filteredFAQs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05 }}
                            className="glass-card overflow-hidden hover:border-primary-red/20 transition-colors"
                        >
                            <button
                                onClick={() => toggleAccordion(index)}
                                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none group"
                            >
                                <span className="text-base font-semibold text-gray-200 pr-8 group-hover:text-white transition-colors">{faq.question}</span>
                                <span className="flex-shrink-0">
                                    {activeIndex === index ? (
                                        <Minus className="w-5 h-5 text-primary-red" />
                                    ) : (
                                        <Plus className="w-5 h-5 text-gray-600 group-hover:text-gray-400 transition-colors" />
                                    )}
                                </span>
                            </button>
                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="px-6 pb-6 text-gray-400 leading-relaxed text-sm border-t border-white/[0.04] pt-4">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>

                {filteredFAQs.length === 0 && (
                    <div className="text-center py-12 text-gray-600">
                        No questions found matching your search.
                    </div>
                )}
            </div>
        </div>
    );
};

export default FAQ;
