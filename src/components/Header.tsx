import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
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
        if (id === 'blog') {
            if (location.pathname !== '/blog') {
                window.location.href = '/blog';
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
        { id: 'contact', name: 'Contact' },
    ];

    // Force dark header on non-home pages or when scrolled
    const headerBackgroundClass = (scrolled || isMenuOpen || !isHomePage)
        ? 'bg-black/90 backdrop-blur-md shadow-lg border-b border-white/10'
        : 'bg-transparent';

    return (
        <>
            <motion.header
                className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${headerBackgroundClass}`}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                    {/* Logo Removed as per request */}
                    <div />

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex space-x-8 items-center">
                        {navLinks.map((link) => (
                            <Magnetic key={link.name}>
                                <button
                                    onClick={() => handleNavClick(link.id)}
                                    className={`text-sm font-bold uppercase tracking-wider transition-colors duration-300 ${activeSection === link.id ? 'text-primary-red' : 'text-white hover:text-primary-red'
                                        }`}
                                >
                                    {link.name}
                                    {activeSection === link.id && (
                                        <motion.span
                                            layoutId="underline"
                                            className="absolute left-0 top-full block h-0.5 w-full bg-primary-red mt-1"
                                        />
                                    )}
                                </button>
                            </Magnetic>
                        ))}
                        <Magnetic>
                            <button
                                onClick={() => handleNavClick('contact')}
                                className="px-6 py-2 bg-primary-red text-white rounded-full font-medium hover:bg-red-700 transition-colors duration-300"
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
                        className="fixed inset-0 bg-black z-40 md:hidden flex items-center justify-center"
                    >
                        <nav className="flex flex-col items-center space-y-8">
                            {navLinks.map((link, index) => (
                                <motion.button
                                    key={link.id}
                                    onClick={() => handleNavClick(link.id)}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 + index * 0.1 }}
                                    className={`text-3xl font-bold uppercase tracking-widest ${activeSection === link.id ? 'text-primary-red' : 'text-white'
                                        }`}
                                >
                                    {link.name}
                                </motion.button>
                            ))}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Header;
