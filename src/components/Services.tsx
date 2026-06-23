import React from 'react';
import Section from './Section';
import { motion } from 'framer-motion';
import { Clapperboard, Film, PenTool, Share2, Sparkles } from 'lucide-react';

interface Service {
    title: string;
    description: string;
    items: string[];
    icon: React.ReactNode;
}

const servicesData: Service[] = [
    {
        title: 'Commercials',
        description: 'AI-assisted commercial production from scripting to final execution.',
        items: ['AI Ad Films', 'TVC', 'Creative Designing', 'AI Photoshoot & Product Shoot', 'Corporate Films', 'Industrial Films', 'Brand Films', 'Investor Videos', 'Training Contents', 'Corporate Documentaries'],
        icon: <Film className="w-6 h-6" />,
    },
    {
        title: 'Designing',
        description: 'Brand, publicity, pitch, and product design assets for campaigns and companies.',
        items: ['Publicity Designs', 'Commercial Pitch Deck', 'Company Start Package', 'Product Retouching', 'Product Catalogues / Brochures'],
        icon: <PenTool className="w-6 h-6" />,
    },
    {
        title: 'Movie Works',
        description: 'Complete movie publicity, pitch, edit, pre-look, and post-production support.',
        items: ['Movie Publicity Designs', 'Teaser & Trailer Works', 'Lyrical Videos', 'Professional Movie Pitch Deck', 'Movie Editing', 'AI Pre-Looks for Movies', 'AI Pre-Teaser for Movies', 'DI / Color Correction', 'DCP Outputs', 'Post-Production Supervision'],
        icon: <Clapperboard className="w-6 h-6" />,
    },
    {
        title: 'Social Media Management',
        description: 'AI-integrated web and social media systems for ongoing digital presence.',
        items: ['AI Integrated Web Designing', 'Social Media Strategy', 'Social Media Maintenance', 'Digital Ad Campaign in Meta'],
        icon: <Share2 className="w-6 h-6" />,
    },
    {
        title: 'Visual Effects & CG Works',
        description: 'Product videos, AI compositing, CGI enhancements, and animated brand assets.',
        items: ['Product Videos', 'Lyrical Videos', 'AI Compositing', 'CGI Enhancements', 'Logo Animation'],
        icon: <Sparkles className="w-6 h-6" />,
    },
];

const ServiceCard: React.FC<{ service: Service; index: number }> = ({ service, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.08 }}
        className="group relative"
    >
        <div className="glass-card-hover p-8 h-full relative overflow-hidden">
            {/* Gradient border glow on hover */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                    background: 'linear-gradient(135deg, rgba(139,0,0,0.1) 0%, transparent 50%, rgba(139,0,0,0.05) 100%)',
                }}
            />

            {/* Icon */}
            <div className="relative mb-6 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary-red/10 text-primary-red border border-primary-red/20 group-hover:bg-primary-red/20 group-hover:border-primary-red/30 transition-all duration-500">
                {service.icon}
            </div>

            <h3 className="text-xl font-display font-bold text-white group-hover:text-primary-red transition-colors duration-300 mb-3">
                {service.title}
            </h3>

            <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                {service.description}
            </p>

            <ul className="space-y-2.5">
                {service.items.map((item, idx) => (
                    <li key={idx} className="text-sm text-gray-400 flex items-center gap-3 group-hover:text-gray-300 transition-colors">
                        <span className="w-1 h-1 rounded-full bg-primary-red flex-shrink-0" />
                        {item}
                    </li>
                ))}
            </ul>

            {/* Bottom accent line */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-red/0 group-hover:via-primary-red/40 to-transparent transition-all duration-500" />
        </div>
    </motion.div>
);

const Services: React.FC = () => {
    return (
        <Section className="section-gradient dot-overlay">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-red/[0.03] rounded-full blur-[200px] pointer-events-none" />

            <div className="text-center mb-20 relative">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-semibold text-gray-400 uppercase tracking-[0.2em] mb-6"
                >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-red" />
                    What We Do
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl font-display font-black tracking-tight sm:text-6xl mb-6"
                >
                    <span className="heading-gradient">AI-Powered</span>{' '}
                    <span className="heading-red">Services</span>
                </motion.h2>

                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "5rem" }}
                    viewport={{ once: true }}
                    className="h-0.5 bg-primary-red mx-auto rounded-full mb-8"
                />

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-lg text-gray-500 max-w-2xl mx-auto"
                >
                    From AI-driven concept development to intelligent post-production, we offer a comprehensive suite of next-generation creative services.
                </motion.p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
                {servicesData.map((service, index) => (
                    <ServiceCard key={index} service={service} index={index} />
                ))}
            </div>
        </Section>
    );
};

export default Services;
