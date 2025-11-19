import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero: React.FC = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    // Parallax effects
    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <section ref={ref} className="h-screen relative flex items-center justify-center overflow-hidden ">
            {/* Animated Background Gradient */}
            <motion.div 
                style={{ y: backgroundY }}
                className="absolute inset-0 z-0"
            >
                <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-white to-red-50 opacity-40" />                {/* Add a video background here for maximum impact if available */}
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 animate-pulse" />
            </motion.div>

            <motion.div 
                style={{ y: textY, opacity }}
                className="relative z-10 text-center px-6 max-w-5xl mx-auto"
            >
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                >
                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter  mb-2">
                        CK <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-900">STUDIO</span>
                    </h1>
                </motion.div>

                <div className="h-1 w-32 bg-red-600 mx-auto my-8 rounded-full" />

                <motion.div 
                    className="overflow-hidden"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                >
                    <p className="text-xl md:text-3xl font-light tracking-[0.5em]  uppercase">
                        Pre <span className="text-red-600">•</span> Production <span className="text-red-600">•</span> Post
                    </p>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div 
                    className="absolute bottom-10 left-1/2 -translate-x-1/2"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <div className="w-6 h-10 border-2 border-red-600/50 rounded-full flex justify-center p-1">
                        <div className="w-1 h-3 bg-red-600 rounded-full" />
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
