import React from 'react';
import Section from './Section';
import { motion } from 'framer-motion';
import { Film, Sparkles, Palette, Building2, PenTool, Camera } from 'lucide-react';

interface Service {
    title: string;
    description: string;
    items: string[];
    icon: React.ReactNode;
}

const servicesData: Service[] = [
    {
        title: 'AI Ad Films',
        description: 'AI-scripted, AI-storyboarded, and AI-enhanced television commercial production.',
        items: ['Feature Films', 'TVC / Ad Films', 'AI Storyboarding', 'Lyrical Videos', 'Movie Publicity Material'],
        icon: <Film className="w-6 h-6" />,
    },
    {
        title: 'AI Visual Effects',
        description: 'Neural rendering and AI-powered compositing for cinematic visual effects.',
        items: ['Neural Rendering', 'AI Compositing', 'Motion Graphics', 'CGI Enhancement', 'VFX Supervision'],
        icon: <Sparkles className="w-6 h-6" />,
    },
    {
        title: 'AI Post-Production',
        description: 'Machine learning powered editing, color grading, and audio mastering.',
        items: ['AI Color Grading', 'AI Audio Mixing', 'Intelligent Editing', 'DCP Outputs', 'Format Optimization'],
        icon: <Palette className="w-6 h-6" />,
    },
    {
        title: 'Corporate Films',
        description: 'AI-optimized corporate storytelling for brands and enterprises.',
        items: ['Corporate Documentaries', 'Industrial Films', 'Brand Films', 'Investor Videos', 'Training Content'],
        icon: <Building2 className="w-6 h-6" />,
    },
    {
        title: 'AI Creative Design',
        description: 'AI-generated visual concepts, branding, and creative assets.',
        items: ['Logo & Identity', 'Brochure & Flyers', 'Pitch Decks', 'Social Media', 'Design Packages'],
        icon: <PenTool className="w-6 h-6" />,
    },
    {
        title: 'Photography',
        description: 'AI-enhanced professional photography and retouching services.',
        items: ['Profile Shoots', 'Product Photography', 'Brand Shoots', 'Event Coverage', 'AI Retouching'],
        icon: <Camera className="w-6 h-6" />,
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
                    background: 'linear-gradient(135deg, rgba(220,20,60,0.1) 0%, transparent 50%, rgba(220,20,60,0.05) 100%)',
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
