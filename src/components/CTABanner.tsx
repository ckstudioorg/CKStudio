import React from 'react';
import { motion } from 'framer-motion';
import Magnetic from './Magnetic';

const CTABanner: React.FC = () => {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="relative py-28 overflow-hidden">
            {/* Animated gradient background */}
            <div
                className="absolute inset-0 animate-gradient-shift"
                style={{
                    background: 'linear-gradient(135deg, #0a0a0a 0%, #1a0508 25%, #0a0a0a 50%, #150308 75%, #0a0a0a 100%)',
                    backgroundSize: '400% 400%',
                }}
            />

            {/* Grid pattern */}
            <div className="absolute inset-0 opacity-20 pointer-events-none"
                style={{
                    backgroundImage: 'linear-gradient(rgba(139,0,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(139,0,0,0.05) 1px, transparent 1px)',
                    backgroundSize: '60px 60px',
                }}
            />

            {/* Glow orbs */}
            <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
                transition={{ duration: 6, repeat: Infinity }}
                className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[500px] h-[500px] bg-primary-red rounded-full blur-[200px] pointer-events-none"
            />
            <motion.div
                animate={{ scale: [1.1, 1, 1.1], opacity: [0.1, 0.2, 0.1] }}
                transition={{ duration: 8, repeat: Infinity, delay: 1 }}
                className="absolute top-1/2 right-1/3 -translate-y-1/2 w-[400px] h-[400px] bg-crimson-800 rounded-full blur-[180px] pointer-events-none"
            />

            {/* Top/Bottom borders */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-red/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-red/30 to-transparent" />

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Badge */}
                    <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary-red/10 border border-primary-red/20 text-sm font-bold text-primary-red mb-8">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0L14.59 8.41L23 12L14.59 15.59L12 24L9.41 15.59L1 12L9.41 8.41Z" />
                        </svg>
                        AI-Powered Production
                    </span>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black tracking-tight mb-6 max-w-4xl mx-auto leading-[1.1]">
                        <span className="heading-gradient">Ready to Create Your</span>{' '}
                        <br className="hidden md:block" />
                        <span className="heading-red text-glow-strong">AI-Powered Ad Film?</span>
                    </h2>

                    <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                        Transform your brand's story with the power of artificial intelligence and cinematic excellence. Let's build something extraordinary together.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Magnetic>
                            <button
                                onClick={() => scrollToSection('contact')}
                                className="group px-10 py-4 bg-gradient-to-r from-primary-red to-crimson-800 text-white rounded-full font-bold text-base tracking-wide shadow-lg shadow-primary-red/20 hover:shadow-xl hover:shadow-primary-red/30 transition-all duration-300 relative overflow-hidden"
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    Start Your Project
                                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-crimson-700 to-primary-red opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </button>
                        </Magnetic>
                        <Magnetic>
                            <a
                                href="https://wa.me/919700970762?text=Hi!%20I'm%20interested%20in%20AI-powered%20ad%20film%20production."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-10 py-4 border border-white/20 text-white rounded-full font-bold text-base tracking-wide hover:border-primary-red hover:text-primary-red transition-all duration-300 backdrop-blur-sm bg-white/[0.03]"
                            >
                                WhatsApp Us
                            </a>
                        </Magnetic>
                    </div>

                    {/* Trust indicators */}
                    <div className="mt-12 flex flex-wrap justify-center gap-8 text-xs text-gray-600">
                        <span className="flex items-center gap-2">
                            <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                            Free Consultation
                        </span>
                        <span className="flex items-center gap-2">
                            <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                            No Hidden Charges
                        </span>
                        <span className="flex items-center gap-2">
                            <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                            Fast Turnaround
                        </span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CTABanner;
