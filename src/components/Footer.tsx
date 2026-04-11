import React from 'react';
import { motion } from 'framer-motion';
import { FacebookIcon, TwitterIcon, YoutubeIcon, InstagramIcon } from './SocialIcons';

const footerLinks = {
    company: [
        { name: 'About Us', href: '#about' },
        { name: 'Our Work', href: '#portfolio' },
        { name: 'Blog', href: '/blog' },
        { name: 'FAQ', href: '/faq' },
    ],
    services: [
        { name: 'AI Ad Films', href: '#services' },
        { name: 'AI Visual Effects', href: '#services' },
        { name: 'AI Post-Production', href: '#services' },
        { name: 'Corporate Films', href: '#services' },
    ],
    connect: [
        { name: 'Contact Us', href: '#contact' },
        { name: 'WhatsApp', href: 'https://wa.me/919700970762' },
        { name: 'Careers', href: '#contact' },
    ],
};

const socialLinks = [
    { Icon: FacebookIcon, href: "https://www.facebook.com/CKStudio.org/", name: "Facebook" },
    { Icon: TwitterIcon, href: "https://x.com/CKStudio_Music", name: "X" },
    { Icon: YoutubeIcon, href: "https://www.youtube.com/@CKStudio-Music", name: "YouTube" },
    { Icon: InstagramIcon, href: "https://www.instagram.com/ckstudio_music/", name: "Instagram" },
];

const Footer: React.FC = () => {
    return (
        <footer className="relative bg-dark-950 border-t border-white/[0.04]">
            {/* Top glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-primary-red/30 to-transparent" />

            <div className="container mx-auto px-6">
                {/* Main Footer Content */}
                <div className="py-16 grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
                    {/* Brand Column */}
                    <div className="col-span-2 md:col-span-1">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-2xl font-display font-black tracking-tight mb-4">
                                CK <span className="text-primary-red">STUDIO</span>
                            </h2>
                            <p className="text-sm text-gray-500 leading-relaxed mb-6">
                                India's premier AI-powered ad film production studio. Where artificial intelligence meets cinematic advertising.
                            </p>

                            {/* AI Badge */}
                            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-red/10 border border-primary-red/20 text-xs font-bold text-primary-red">
                                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0L14.59 8.41L23 12L14.59 15.59L12 24L9.41 15.59L1 12L9.41 8.41Z" />
                                </svg>
                                Powered by AI
                            </span>
                        </motion.div>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-5">Company</h3>
                        <ul className="space-y-3">
                            {footerLinks.company.map((link) => (
                                <li key={link.name}>
                                    <a href={link.href} className="text-sm text-gray-500 hover:text-white transition-colors duration-200">
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-5">Services</h3>
                        <ul className="space-y-3">
                            {footerLinks.services.map((link) => (
                                <li key={link.name}>
                                    <a href={link.href} className="text-sm text-gray-500 hover:text-white transition-colors duration-200">
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Connect */}
                    <div>
                        <h3 className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-5">Connect</h3>
                        <ul className="space-y-3">
                            {footerLinks.connect.map((link) => (
                                <li key={link.name}>
                                    <a href={link.href} className="text-sm text-gray-500 hover:text-white transition-colors duration-200">
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>

                        {/* Social Icons */}
                        <div className="flex gap-3 mt-6">
                            {socialLinks.map(({ Icon, href, name }) => (
                                <a
                                    key={name}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={name}
                                    className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-gray-500 hover:text-primary-red hover:border-primary-red/30 transition-all duration-300"
                                >
                                    <Icon className="w-4 h-4" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/[0.04] py-6 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-gray-600">
                        &copy; {new Date().getFullYear()} CK Studio. All Rights Reserved.
                    </p>
                    <div className="flex items-center gap-6">
                        <a href="http://www.ckstudio.org" target="_blank" rel="noopener noreferrer" className="text-xs text-gray-600 hover:text-primary-red transition-colors">
                            www.ckstudio.org
                        </a>
                        <span className="text-gray-800">|</span>
                        <a href="#" className="text-xs text-gray-600 hover:text-primary-red transition-colors">
                            Privacy Policy
                        </a>
                        <span className="text-gray-800">|</span>
                        <a href="#" className="text-xs text-gray-600 hover:text-primary-red transition-colors">
                            Terms of Service
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
