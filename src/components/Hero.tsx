import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import logo from '../assets/logo.png';

const Hero: React.FC = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    return (
        <section ref={ref} className="h-screen relative flex items-center justify-center overflow-hidden bg-black">
            {/* Animated Background */}
            <motion.div
                style={{ y: backgroundY }}
                className="absolute inset-0 z-0"
            >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-900 via-black to-black" />
                <div className="absolute inset-0 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />

                {/* Animated Red Glow */}
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary-red rounded-full blur-[120px] opacity-20"
                />
            </motion.div>

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
                    <a href="#contact" className="btn btn-primary text-white px-10 py-4 text-lg tracking-widest hover:scale-105 transform transition-transform">
                        START PROJECT
                    </a>
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
