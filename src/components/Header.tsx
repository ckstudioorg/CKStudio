import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.png';
import Magnetic from './Magnetic';
import { useLocation } from 'react-router-dom';

interface HeaderProps {
    activeSection: string;
}

const Header: React.FC<HeaderProps> = ({ activeSection }) => {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMenuOpen]);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMenuOpen(false);
        }
    };

    const handleNavClick = (id: string) => {
        if (id === 'blog' || id === 'faq') {
            if (location.pathname !== `/${id}`) {
                window.location.href = `/${id}`;
            }
            setIsMenuOpen(false);
            return;
        }

        if (isHomePage) {
            scrollToSection(id);
        } else {
            // Navigate to home page with hash
            window.location.href = `/#${id}`;
        }
        setIsMenuOpen(false);
    };

    const navLinks = [
        { id: 'home', name: 'Home' },
        { id: 'about', name: 'About' },
        { id: 'services', name: 'Services' },
        { id: 'portfolio', name: 'Portfolio' },
        { id: 'blog', name: 'Blog' },
        { id: 'faq', name: 'FAQ' },
        { id: 'contact', name: 'Contact' },
    ];

    const headerBg = (scrolled || isMenuOpen || !isHomePage)
        ? 'bg-dark-950/80 backdrop-blur-xl shadow-lg shadow-black/20 border-b border-white/[0.04]'
        : 'bg-transparent';

    return (
        <>
            <motion.header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${headerBg}`}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="container mx-auto px-6 py-3 flex justify-between items-center">
                    {/* Logo */}
                    <motion.a
                        href="/"
                        className="flex items-center gap-3 group"
                        whileHover={{ scale: 1.02 }}
                    >
                        <img src={logo} alt="CK Studio" className="h-10 w-auto object-contain brightness-110" style={{ filter: 'drop-shadow(0 0 8px rgba(220,20,60,0.2))' }} />
                    </motion.a>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <Magnetic key={link.name}>
                                <button
                                    onClick={() => handleNavClick(link.id)}
                                    className={`relative px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] transition-colors duration-300 rounded-full ${
                                        activeSection === link.id
                                            ? 'text-primary-red'
                                            : 'text-gray-400 hover:text-white'
                                    }`}
                                >
                                    {link.name}
                                    {activeSection === link.id && (
                                        <motion.span
                                            layoutId="nav-indicator"
                                            className="absolute inset-0 rounded-full bg-white/[0.05] border border-white/[0.08]"
                                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                        />
                                    )}
                                </button>
                            </Magnetic>
                        ))}
                        <div className="w-px h-6 bg-white/10 mx-3" />
                        <Magnetic>
                            <button
                                onClick={() => handleNavClick('contact')}
                                className="px-6 py-2.5 bg-gradient-to-r from-primary-red to-crimson-800 text-white rounded-full font-semibold text-xs tracking-wider uppercase hover:shadow-lg hover:shadow-primary-red/20 transition-all duration-300"
                            >
                                Get Started
                            </button>
                        </Magnetic>
                    </nav>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center z-50">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-white focus:outline-none p-2"
                            aria-label="Toggle menu"
                        >
                            <div className="w-6 h-5 relative flex flex-col justify-between">
                                <motion.span
                                    animate={isMenuOpen ? { rotate: 45, y: 9 } : { rotate: 0, y: 0 }}
                                    className="w-full h-0.5 bg-white block origin-center"
                                />
                                <motion.span
                                    animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                                    className="w-full h-0.5 bg-white block"
                                />
                                <motion.span
                                    animate={isMenuOpen ? { rotate: -45, y: -9 } : { rotate: 0, y: 0 }}
                                    className="w-full h-0.5 bg-white block origin-center"
                                />
                            </div>
                        </button>
                    </div>
                </div>
            </motion.header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: 'tween', duration: 0.3 }}
                        className="fixed inset-0 bg-dark-950/98 backdrop-blur-xl z-40 md:hidden flex items-center justify-center"
                    >
                        <nav className="flex flex-col items-center space-y-6">
                            {navLinks.map((link, index) => (
                                <motion.button
                                    key={link.id}
                                    onClick={() => handleNavClick(link.id)}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 + index * 0.08 }}
                                    className={`text-2xl font-display font-bold uppercase tracking-[0.2em] ${
                                        activeSection === link.id ? 'text-primary-red' : 'text-white'
                                    }`}
                                >
                                    {link.name}
                                </motion.button>
                            ))}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.8 }}
                                className="mt-8 pt-8 border-t border-white/10"
                            >
                                <button
                                    onClick={() => handleNavClick('contact')}
                                    className="px-10 py-4 bg-gradient-to-r from-primary-red to-crimson-800 text-white rounded-full font-bold text-sm tracking-wider uppercase"
                                >
                                    Start Your Project
                                </button>
                            </motion.div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Header;
