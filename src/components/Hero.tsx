import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import logo from '../assets/logo.png';
import Magnetic from './Magnetic';

const TYPEWRITER_TEXTS = [
    'Cinematic Advertising',
    'AI-Powered Storytelling',
    'Neural Visual Effects',
    'Intelligent Post-Production',
];

const Hero: React.FC = () => {
    const ref = useRef(null);
    const [isMuted, setIsMuted] = React.useState(true);
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    // Typewriter effect
    useEffect(() => {
        const currentFullText = TYPEWRITER_TEXTS[currentTextIndex];
        let timeout: ReturnType<typeof setTimeout>;

        if (!isDeleting) {
            if (displayedText.length < currentFullText.length) {
                timeout = setTimeout(() => {
                    setDisplayedText(currentFullText.slice(0, displayedText.length + 1));
                }, 80);
            } else {
                timeout = setTimeout(() => setIsDeleting(true), 2000);
            }
        } else {
            if (displayedText.length > 0) {
                timeout = setTimeout(() => {
                    setDisplayedText(displayedText.slice(0, -1));
                }, 40);
            } else {
                setIsDeleting(false);
                setCurrentTextIndex((prev) => (prev + 1) % TYPEWRITER_TEXTS.length);
            }
        }

        return () => clearTimeout(timeout);
    }, [displayedText, isDeleting, currentTextIndex]);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section ref={ref} className="h-screen relative flex items-center justify-center overflow-hidden bg-dark-950">
            {/* Cinematic Video Background */}
            <motion.div
                style={{ y: backgroundY }}
                className="absolute inset-0 z-0"
            >
                <div className="absolute inset-0 bg-gradient-to-b from-dark-950/80 via-dark-950/60 to-dark-950/90 z-10" />
                <video
                    autoPlay
                    loop
                    muted={isMuted}
                    playsInline
                    className="w-full h-full object-cover opacity-40"
                >
                    <source src="https://cdn.coverr.co/videos/coverr-film-set-clapperboard-4529/1080p.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                {/* Subtle Grid Overlay */}
                <div className="absolute inset-0 z-20 pointer-events-none opacity-20"
                    style={{
                        backgroundImage: 'linear-gradient(rgba(139,0,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(139,0,0,0.04) 1px, transparent 1px)',
                        backgroundSize: '80px 80px'
                    }}
                />

                {/* Animated Red Glow Orbs */}
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.15, 0.3, 0.15],
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-primary-red rounded-full blur-[180px] opacity-15 z-10"
                />
                <motion.div
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.1, 0.2, 0.1],
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-crimson-600 rounded-full blur-[150px] opacity-10 z-10"
                />
            </motion.div>

            {/* Mute Toggle */}
            <button
                onClick={() => setIsMuted(!isMuted)}
                className="absolute bottom-8 right-8 z-50 text-white/40 hover:text-white transition-colors p-3 rounded-full border border-white/10 hover:border-white/30 backdrop-blur-md bg-white/5"
                aria-label="Toggle audio"
            >
                {isMuted ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 5L6 9H2v6h4l5 4V5z" /><line x1="23" y1="9" x2="17" y2="15" /><line x1="17" y1="9" x2="23" y2="15" /></svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 5L6 9H2v6h4l5 4V5z" /><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" /></svg>
                )}
            </button>

            <motion.div
                style={{ y: textY, opacity }}
                className="relative z-10 text-center px-4 w-full max-w-6xl mx-auto"
            >
                {/* AI Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mb-8"
                >
                    <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/[0.05] border border-white/10 text-sm font-medium text-gray-300 backdrop-blur-sm">
                        <span className="w-2 h-2 rounded-full bg-primary-red animate-pulse" />
                        AI-Powered Film Production Studio
                    </span>
                </motion.div>

                {/* Logo */}
                <motion.div
                    initial={{ scale: 0.9, opacity: 0, y: 30 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <img src={logo} alt="CK Studio" className="w-[100vw] max-w-none relative left-1/2 -translate-x-1/2 mb-4 drop-shadow-2xl object-contain" style={{ filter: 'drop-shadow(0 0 40px rgba(139,0,0,0.15))' }} />
                </motion.div>

                {/* Typewriter Heading */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="mt-2 mb-8"
                >
                    <h1 className="text-xl md:text-2xl lg:text-3xl font-display font-light tracking-wide text-gray-300">
                        Where AI Meets{' '}
                        <span className="text-primary-red font-semibold">
                            {displayedText}
                            <span className="animate-pulse text-primary-red">|</span>
                        </span>
                    </h1>
                </motion.div>

                {/* Animated Divider */}
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "10rem" }}
                    transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
                    className="h-0.5 bg-gradient-to-r from-transparent via-primary-red to-transparent mx-auto mb-10"
                />

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
                >
                    <Magnetic>
                        <button
                            onClick={() => scrollToSection('portfolio')}
                            className="group px-8 py-4 bg-gradient-to-r from-primary-red to-crimson-800 text-white rounded-full font-bold text-base tracking-wide hover:shadow-lg hover:shadow-primary-red/30 transition-all duration-300 relative overflow-hidden"
                        >
                            <span className="relative z-10">Explore Our Work</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-crimson-700 to-primary-red opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </button>
                    </Magnetic>
                    <Magnetic>
                        <button
                            onClick={() => scrollToSection('contact')}
                            className="px-8 py-4 border border-white/20 text-white rounded-full font-bold text-base tracking-wide hover:border-primary-red hover:text-primary-red transition-all duration-300 backdrop-blur-sm bg-white/[0.03]"
                        >
                            Start Your Project
                        </button>
                    </Magnetic>
                </motion.div>

                {/* Stats Bar */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.6, duration: 0.8 }}
                    className="flex flex-wrap justify-center gap-8 md:gap-16"
                >
                    {[
                        { number: '150+', label: 'Projects Delivered' },
                        { number: 'AI-First', label: 'Production Workflow' },
                        { number: '50+', label: 'Brands Served' },
                    ].map((stat, i) => (
                        <div key={i} className="text-center">
                            <div className="text-lg md:text-xl font-display font-bold text-white">{stat.number}</div>
                            <div className="text-xs md:text-sm text-gray-500 font-medium tracking-wider uppercase">{stat.label}</div>
                        </div>
                    ))}
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    className="absolute bottom-[-12vh] left-1/2 -translate-x-1/2"
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <div className="w-5 h-8 border border-white/20 rounded-full flex justify-center p-1">
                        <motion.div
                            animate={{ height: ["20%", "50%", "20%"] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className="w-0.5 bg-primary-red rounded-full"
                        />
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
