import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const NotFound: React.FC = () => {
    return (
        <div className="min-h-screen bg-dark-950 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary-red/5 rounded-full blur-[200px] pointer-events-none" />
            </div>

            <div className="text-center relative z-10 px-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-8xl md:text-9xl font-display font-black text-primary-red text-glow-strong mb-4">404</h1>
                    <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">Scene Not Found</h2>
                    <p className="text-gray-500 text-lg mb-8 max-w-md mx-auto">
                        This scene didn't make the final cut. Let's get you back to the main production.
                    </p>
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-red to-crimson-800 text-white rounded-full font-bold text-base tracking-wide hover:shadow-lg hover:shadow-primary-red/30 transition-all duration-300"
                    >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" /></svg>
                        Back to Home
                    </Link>
                </motion.div>
            </div>
        </div>
    );
};

export default NotFound;
