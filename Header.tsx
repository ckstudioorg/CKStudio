
import React, { useState, useEffect } from 'react';

interface HeaderProps {
    activeSection: string;
}

const Header: React.FC<HeaderProps> = ({ activeSection }) => {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

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
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen]);

    const navLinks = [
        { id: 'home', title: 'Home' },
        { id: 'about', title: 'About' },
        { id: 'services', title: 'Services' },
        { id: 'portfolio', title: 'Portfolio' },
            { id: 'blog', title: 'Blog' },
        { id: 'contact', title: 'Contact' },
    ];

    const renderNavLinks = (isMobile: boolean = false) => navLinks.map((link) => (
        <a
            key={link.id}
            href={`#${link.id}`}
            onClick={() => isMobile && setIsMenuOpen(false)}
            className={isMobile
                ? `text-3xl font-bold transition-colors duration-300 ${activeSection === link.id ? 'text-red-600' : 'text-white hover:text-red-500'}`
                : `text-lg font-medium transition-colors duration-300 relative group ${activeSection === link.id ? 'text-red-600' : 'text-white hover:text-red-500'}`
            }
        >
            {link.title}
            {!isMobile && <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out ${activeSection === link.id ? 'scale-x-100' : ''}`}></span>}
        </a>
    ));

    return (
        <>
            <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || isMenuOpen ? 'bg-black/80 backdrop-blur-sm shadow-lg shadow-red-900/20' : 'bg-transparent'}`}>
                <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <a href="#home" onClick={() => isMenuOpen && setIsMenuOpen(false)} className="text-3xl font-extrabold tracking-wider z-50">
                        C<span className="text-red-600">K</span> STUDIO
                    </a>
                    <nav className="hidden md:flex space-x-8">
                        {renderNavLinks()}
                    </nav>
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="z-50 relative w-8 h-8 text-white focus:outline-none"
                            aria-label="Toggle menu"
                        >
                            <span className="sr-only">Open main menu</span>
                            <div className="absolute w-6 h-6 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                                <span
                                    aria-hidden="true"
                                    className={`absolute h-0.5 w-6 bg-white transform transition duration-300 ease-in-out ${isMenuOpen ? 'rotate-45' : '-translate-y-2'}`}
                                ></span>
                                <span
                                    aria-hidden="true"
                                    className={`absolute h-0.5 bg-white transform transition-all duration-200 ease-in-out ${isMenuOpen ? 'w-0 opacity-0' : 'w-6'}`}
                                ></span>
                                <span
                                    aria-hidden="true"
                                    className={`absolute h-0.5 w-6 bg-white transform transition duration-300 ease-in-out ${isMenuOpen ? '-rotate-45' : 'translate-y-2'}`}
                                ></span>
                            </div>
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <div
                className={`md:hidden fixed inset-0 bg-black/95 z-40 transition-transform duration-500 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
            >
                <nav className="flex flex-col items-center justify-center h-full space-y-10">
                    {renderNavLinks(true)}
                </nav>
            </div>
        </>
    );
};

export default Header;
