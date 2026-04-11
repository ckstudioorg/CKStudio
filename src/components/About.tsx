import React from 'react';
import Section from './Section';
import { motion } from 'framer-motion';

const About: React.FC = () => {
    return (
        <Section className="section-dark noise-overlay">
            {/* Background accent */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-red/5 rounded-full blur-[200px] pointer-events-none" />
            
            <div className="grid md:grid-cols-2 gap-16 items-center relative">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="space-y-8"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-semibold text-gray-400 uppercase tracking-[0.2em]"
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary-red" />
                        About Us
                    </motion.div>

                    <h2 className="text-4xl font-display font-black tracking-tight sm:text-6xl leading-[1.1]">
                        <span className="heading-gradient">Crafting the Future of</span>{' '}
                        <span className="heading-red">AI Advertising</span>
                    </h2>

                    <div className="space-y-5 text-base md:text-lg text-gray-400 leading-relaxed">
                        <p>
                            <strong className="text-white font-semibold">CHENNA KESHAV STUDIO</strong> is where visionary filmmakers meet cutting-edge artificial intelligence. We are a team of creative minds and technology pioneers, redefining how advertising content is conceived, produced, and delivered.
                        </p>
                        <p>
                            We harness the power of <span className="text-gray-200">Generative AI, Neural Rendering, and Machine Learning</span> to revolutionize advertising production — delivering Hollywood-grade ad films at unprecedented speed and scale, while keeping the soul of cinematic storytelling alive.
                        </p>
                        <p>
                            From AI-assisted storyboarding to neural color grading, every frame we produce is a fusion of <span className="text-gray-200">human creativity</span> and <span className="text-gray-200">machine intelligence</span>.
                        </p>
                    </div>

                    <div className="flex gap-8 pt-4">
                        {[
                            { number: '10+', label: 'Years of Excellence' },
                            { number: '150+', label: 'Projects Completed' },
                            { number: '50+', label: 'Brands Served' },
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5 + i * 0.15 }}
                            >
                                <div className="text-2xl md:text-3xl font-display font-black text-primary-red">{stat.number}</div>
                                <div className="text-xs text-gray-500 font-medium uppercase tracking-wider mt-1">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5, duration: 1 }}
                        className="divider-red"
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex justify-center relative"
                >
                    <div className="absolute inset-4 bg-primary-red/10 rounded-2xl blur-3xl" />
                    <div className="relative glass-card p-2 overflow-hidden group">
                        <img
                            src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&h=700&fit=crop"
                            alt="CK Studio AI Film Production"
                            className="rounded-xl w-full max-w-md object-cover aspect-[4/5] transition-transform duration-700 group-hover:scale-105"
                            loading="lazy"
                        />
                        <div className="absolute bottom-4 left-4 right-4 glass-card p-4">
                            <div className="text-xs font-bold text-primary-red uppercase tracking-[0.15em] mb-1">AI-Powered</div>
                            <div className="text-sm text-gray-300">Next-gen film production technology</div>
                        </div>
                    </div>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="mt-24 text-center relative"
            >
                <blockquote className="text-xl md:text-2xl lg:text-3xl italic font-light text-gray-300 max-w-4xl mx-auto relative px-8">
                    <span className="absolute -top-6 -left-4 text-6xl text-primary-red/20 font-serif">"</span>
                    Great films aren't just made on set — they're crafted where creativity meets precision and AI meets human imagination, turning ideas into cinematic experiences that captivate and inspire.
                    <span className="absolute -bottom-6 -right-4 text-6xl text-primary-red/20 font-serif">"</span>
                </blockquote>
                <div className="divider-glow mt-10 max-w-md mx-auto" />
                <p className="mt-6 text-sm text-primary-red font-display tracking-[0.3em] uppercase font-semibold">Your Achievement, Our Success</p>
            </motion.div>
        </Section>
    );
};

export default About;
