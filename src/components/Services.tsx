
import React from 'react';
import Section from './Section';
import { motion } from 'framer-motion';

interface Service {
    title: string;
    items: string[];
}

const servicesData: Service[] = [
    {
        title: 'Video Films',
        items: ['Feature Films', 'Movie Publicity material', "TVC's / Ad Films", 'Lyrical Videos', 'Corporate / Industrial Films', 'Corporate Documentaries']
    },
    {
        title: 'Photoshoot',
        items: ['Profile Shoot', 'Product Shoot', 'Branding Photoshoot', 'Landscape Shoot', 'Creative Content Shoot']
    },
    {
        title: 'Designing',
        items: ['Logo', 'Brochure & Flyer', 'Publicity Designs', 'Pitch deck', 'Design Resizing package for Films']
    },
    {
        title: 'Other Services',
        items: ['DCP outputs']
    }
];

const ServiceCard: React.FC<{ service: Service; index: number }> = ({ service, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        whileHover={{ y: -10, transition: { duration: 0.2 } }}
        className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg hover:shadow-2xl hover:shadow-red-900/20 transition-all duration-300 group"
    >
        <h3 className="text-2xl font-bold text-gray-900 group-hover:text-red-600 transition-colors mb-6 border-b-2 border-red-100 pb-2 inline-block">{service.title}</h3>
        <ul className="space-y-3">
            {service.items.map((item, idx) => (
                <li key={idx} className="text-gray-600 flex items-start">
                    <span className="text-red-600 mr-2 mt-1.5 text-xs">●</span>
                    {item}
                </li>
            ))}
        </ul>
    </motion.div>
);

const Services: React.FC = () => {
    return (
        <Section className="bg-gray-50">
            <div className="text-center mb-16">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl font-black tracking-tight text-black sm:text-6xl mb-6"
                >
                    What We <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800">Do</span>
                </motion.h2>
                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "6rem" }}
                    viewport={{ once: true }}
                    className="h-1.5 bg-red-600 mx-auto rounded-full mb-6"
                />
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto"
                >
                    From concept to final cut, we offer a comprehensive suite of creative services.
                </motion.p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {servicesData.map((service, index) => (
                    <ServiceCard key={index} service={service} index={index} />
                ))}
            </div>
        </Section>
    );
};

export default Services;
