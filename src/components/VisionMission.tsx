
import React from 'react';
import Section from './Section';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const VisionMission: React.FC = () => {
    const missionItems = [
        "Empower Storytellers",
        "Visual Excellence",
        "Creative Marketing",
        "Deliver Excellence",
        "Innovate Continuously",
        "Foster Collaboration",
        "Inspire Creativity"
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
                staggerChildren: 0.2,
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
        <Section className="bg-gray-50">
            <motion.div
                ref={ref}
                variants={containerVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
            >
                <motion.div variants={itemVariants} className="text-center mb-16">
                    <h2 className="text-4xl font-bold tracking-tight text-black sm:text-5xl">Our Guiding <span className="text-red-600">Principles</span></h2>
                    <p className="mt-4 text-lg text-gray-500">"Movies are made to be seen; advertising ensures they're remembered"</p>
                </motion.div>
                <div className="grid md:grid-cols-2 gap-16 items-start">
                    <motion.div variants={itemVariants} className="bg-white p-8 rounded-2xl border border-red-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                        <h3 className="text-3xl font-bold text-black font-serif mb-4 flex items-center gap-3">
                            <span className="w-2 h-8 bg-red-600 rounded-full"></span>
                            Vision
                        </h3>
                        <p className="text-lg text-gray-700 italic leading-relaxed">
                            "To be a global leader in post-production, setting the benchmark for creativity, quality, and innovation in transforming stories into unforgettable cinematic experiences."
                        </p>
                    </motion.div>
                    <motion.div variants={itemVariants} className="bg-white p-8 rounded-2xl border border-red-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                        <h3 className="text-3xl font-bold text-black font-serif mb-6 flex items-center gap-3">
                            <span className="w-2 h-8 bg-red-600 rounded-full"></span>
                            Mission
                        </h3>
                        <ul className="space-y-3">
                            {missionItems.map((item, index) => (
                                <motion.li
                                    key={index}
                                    className="flex items-center text-lg text-gray-700 hover:text-red-600 transition-colors duration-200"
                                    whileHover={{ x: 5 }}
                                >
                                    <svg className="w-5 h-5 mr-3 text-red-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                                    {item}
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
