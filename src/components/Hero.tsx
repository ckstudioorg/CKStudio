import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import logo from '../assets/logo.png';
import Magnetic from './Magnetic';

const Hero: React.FC = () => {
    const ref = useRef(null);
    const [isMuted, setIsMuted] = React.useState(true);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section ref={ref} className="h-screen relative flex items-center justify-center overflow-hidden bg-black">
            {/* Cinematic Video Background */}
            <motion.div
                style={{ y: backgroundY }}
                className="absolute inset-0 z-0"
            >
                <div className="absolute inset-0 bg-black/60 z-10" /> {/* Overlay for text readability */}
                <video
                    autoPlay
                    loop
                    muted={isMuted}
                    playsInline
                    className="w-full h-full object-cover opacity-60"
                >
                    <source src="https://cdn.coverr.co/videos/coverr-film-set-clapperboard-4529/1080p.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                {/* Film Grain Overlay */}
                <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] z-20 pointer-events-none" />

                {/* Animated Red Glow */}
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary-red rounded-full blur-[120px] opacity-20 z-10"
                />
            </motion.div>

            {/* Mute Toggle */}
            <button
                onClick={() => setIsMuted(!isMuted)}
                className="absolute bottom-8 right-8 z-50 text-white/50 hover:text-white transition-colors p-2 rounded-full border border-white/10 hover:border-white/30 backdrop-blur-sm"
            >
                {isMuted ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 5L6 9H2v6h4l5 4V5z" /><line x1="23" y1="9" x2="17" y2="15" /><line x1="17" y1="9" x2="23" y2="15" /></svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 5L6 9H2v6h4l5 4V5z" /><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" /></svg>
                )}
            </button>

            <motion.div
                style={{ y: textY, opacity }}
                className="relative z-10 text-center px-4 w-full"
            >
                <motion.div
                    initial={{ scale: 0.9, opacity: 0, y: 50 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <img src={logo} alt="CK Studio" className="w-[120vw] max-w-none relative left-1/2 -translate-x-1/2 mb-8 drop-shadow-2xl object-contain" />
                </motion.div>

                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "12rem" }}
                    transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
                    className="h-2 bg-primary-red mx-auto my-8 rounded-full"
                />

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 1 }}
                    className="mt-12"
                >
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Magnetic>
                            <button
                                onClick={() => scrollToSection('portfolio')}
                                className="px-8 py-4 bg-primary-red text-white rounded-full font-bold text-lg hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-red-900/50"
                            >
                                View Our Work
                            </button>
                        </Magnetic>
                        <Magnetic>
                            <button
                                onClick={() => scrollToSection('contact')}
                                className="px-8 py-4 border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white hover:text-black transition-all duration-300"
                            >
                                Contact Us
                            </button>
                        </Magnetic>
                    </div>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    className="absolute bottom-[-15vh] left-1/2 -translate-x-1/2"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
                        <motion.div
                            animate={{ height: ["20%", "50%", "20%"] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className="w-1 bg-primary-red rounded-full"
                        />
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
