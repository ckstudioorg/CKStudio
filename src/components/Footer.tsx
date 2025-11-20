
import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
    return (
        <footer className="bg-black text-white py-12 border-t border-gray-900">
            <div className="container mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl font-black tracking-tighter mb-6">
                        CK <span className="text-red-600">STUDIO</span>
                    </h2>
                    <p className="mb-6 text-gray-400 text-lg">
                        <a href="http://www.ckstudio.org" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors">
                            www.ckstudio.org
                        </a>
                    </p>
                    <div className="w-12 h-1 bg-red-600 mx-auto mb-6 rounded-full" />
                    <p className="text-gray-500">&copy; {new Date().getFullYear()} CK Studio. All Rights Reserved.</p>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;
