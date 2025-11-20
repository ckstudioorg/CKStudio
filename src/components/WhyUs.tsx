
import React from 'react';
import Section from './Section';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const WhyUs: React.FC = () => {
    const strengths = [
        "End-to-end Expertise", "Attention to detail",
        "Cutting edge technology", "Proven track record",
        "Skilled & creative team", "Collaborative approach",
        "Customized solutions", "Competitive pricing",
        "Fast turnaround times", "Global delivery"
    ];

    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <Section>
            <style>{`
                .progress-ring__circle {
                    stroke-dasharray: 282.74; /* 2 * pi * 45 */
                    stroke-dashoffset: 282.74;
                    transform: rotate(-90deg);
                    transform-origin: 50% 50%;
                    transition: stroke-dashoffset 2s ease-out;
                }
            `}</style>
            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
            >
                <h2 className="text-4xl font-bold tracking-tight text-black sm:text-5xl">Why <span className="text-red-600">CK Studio?</span></h2>
                <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">Your vision deserves more than just technical execution—it deserves artistry, passion, and precision. We craft cinematic masterpieces that leave a lasting impact.</p>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                    {strengths.map((strength, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                            transition={{ delay: index * 0.05, duration: 0.4 }}
                            className="flex items-center group"
                        >
                            <svg className="w-6 h-6 mr-3 text-red-600 flex-shrink-0 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            <span className="text-lg text-gray-700 group-hover:text-black transition-colors">{strength}</span>
                        </motion.div>
                    ))}
                </div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="flex flex-col items-center justify-center space-y-8"
                >
                    <div className="relative w-64 h-64">
                        <svg className="w-full h-full" viewBox="0 0 100 100">
                            <circle className="text-gray-200" strokeWidth="8" stroke="currentColor" fill="transparent" r="45" cx="50" cy="50" />
                            <circle
                                className="text-red-600 progress-ring__circle"
                                strokeWidth="8"
                                strokeLinecap="round"
                                stroke="currentColor"
                                fill="transparent"
                                r="45"
                                cx="50"
                                cy="50"
                                style={{ strokeDashoffset: inView ? 56.54 : 282.74 }}
                            />
                        </svg>
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                            <div className="text-5xl font-bold text-black">100%</div>
                            <div className="text-sm text-gray-600 font-medium uppercase tracking-wider mt-1">Commitment</div>
                        </div>
                    </div>
                    <div className="text-center space-y-2">
                        <p className="text-xl font-semibold text-gray-800"><span className="text-red-600 text-2xl font-bold">80%</span> Dedicated Creative & Hardworking Team</p>
                        <p className="text-xl font-semibold text-gray-800"><span className="text-red-600 text-2xl font-bold">20%</span> CK's Magic at Work</p>
                    </div>
                </motion.div>
            </div>
        </Section>
    );
};

export default WhyUs;
