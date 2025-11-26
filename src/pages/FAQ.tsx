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
        answer: "We offer a comprehensive range of video production services including Feature Films, TV Commercials, Corporate Films, Lyrical Videos, and Post-Production services. We also specialize in professional photography and graphic design.",
        category: "General"
    },
    {
        question: "Do you work with clients outside Hyderabad?",
        answer: "Yes! While we are based in Hyderabad, we work with clients across India and globally. We handle logistics for out-of-station shoots to ensure seamless production.",
        category: "General"
    },
    {
        question: "What is the typical timeline for a corporate video?",
        answer: "A typical corporate video takes 2-4 weeks from concept to final delivery. This includes pre-production (scripting, planning), production (shooting), and post-production (editing, color grading, sound design).",
        category: "Production"
    },
    {
        question: "Can you help with scriptwriting and concept development?",
        answer: "Absolutely. We have a dedicated creative team that works on concept development, scriptwriting, and storyboarding to ensure your vision is translated perfectly onto the screen.",
        category: "Pre-Production"
    }
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
        <div className="min-h-screen bg-white py-20">
            <div className="bg-black text-white py-20 relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold mb-6"
                    >
                        Frequently Asked <span className="text-red-600">Questions</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-400 max-w-2xl mx-auto"
                    >
                        Everything you need to know about our services, process, and pricing.
                    </motion.p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Search Bar */}
                <div className="relative mb-12">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                        type="text"
                        placeholder="Search for answers..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-12 pr-4 py-4 border-2 border-gray-100 rounded-xl focus:border-red-600 focus:outline-none text-lg shadow-sm transition-all"
                    />
                </div>

                <div className="space-y-4">
                    {filteredFAQs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="border border-gray-200 rounded-xl overflow-hidden hover:border-red-200 transition-colors bg-white shadow-sm hover:shadow-md"
                        >
                            <button
                                onClick={() => toggleAccordion(index)}
                                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                            >
                                <span className="text-lg font-semibold text-gray-900 pr-8">{faq.question}</span>
                                <span className={`transform transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`}>
                                    {activeIndex === index ? (
                                        <Minus className="w-5 h-5 text-red-600" />
                                    ) : (
                                        <Plus className="w-5 h-5 text-gray-400" />
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
                                        <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-50 pt-4">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>

                {filteredFAQs.length === 0 && (
                    <div className="text-center py-12 text-gray-500">
                        No questions found matching your search.
                    </div>
                )}
            </div>
        </div>
    );
};

export default FAQ;
