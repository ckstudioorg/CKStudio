
import React from 'react';
import Section from './Section';
import { motion } from 'framer-motion';

const About: React.FC = () => {
    return (
        <Section className="bg-white">
            <div className="grid md:grid-cols-2 gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="space-y-8"
                >
                    <h2 className="text-4xl font-black tracking-tighter text-black sm:text-6xl leading-tight">
                        Crafting Cinematic <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-900">Experiences</span>.
                    </h2>
                    <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                        <p>
                            <strong className="text-black">CHENNA KESHAV STUDIO</strong> is a master project by like-minded creative film brains and business ideologists, led by Young, dynamic, and creative minds.
                        </p>
                        <p>
                            At CK Studio, we believe that the magic of cinema lies not just in shooting but in perfecting every frame. Our post-production team is dedicated to bringing your vision to life, with state-of-the-art technology, an experienced team, and a passion for storytelling.
                        </p>
                    </div>
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5, duration: 1 }}
                        className="h-1 bg-gradient-to-r from-red-600 to-transparent"
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex justify-center relative"
                >
                    <div className="absolute inset-0 bg-red-600 rounded-2xl transform rotate-3 opacity-10" />
                    <img src="https://picsum.photos/seed/filmset/500/600" alt="CK Studio Film Set" className="relative rounded-2xl shadow-2xl shadow-red-900/20 object-cover w-full max-w-md transform transition-transform hover:scale-[1.02] duration-500" />
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="mt-24 text-center"
            >
                <blockquote className="text-2xl md:text-3xl italic font-medium text-gray-800 border-l-4 border-red-600 pl-8 max-w-4xl mx-auto relative">
                    <span className="absolute -top-8 -left-4 text-6xl text-red-100 font-serif">"</span>
                    Great films aren't just made on set; they're crafted in post-production. It's where creativity meets precision, turning ideas into cinematic experiences that captivate and inspire.
                </blockquote>
                <p className="mt-8 text-xl text-red-600 font-serif tracking-widest uppercase">your achievement, our success</p>
            </motion.div>
        </Section>
    );
};

export default About;
