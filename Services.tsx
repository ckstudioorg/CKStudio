
import React from 'react';
import Section from './Section';

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

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => (
    <div className="bg-white p-8 rounded-lg border border-neutral-800 hover:border-red-600 hover:shadow-2xl hover:shadow-red-900/30 transform hover:-translate-y-2 transition-all duration-300">
        <h3 className="text-2xl font-bold text-red-600 mb-4">{service.title}</h3>
        <ul className="space-y-2">
            {service.items.map((item, index) => (
                <li key={index} className="text-gray-300">{item}</li>
            ))}
        </ul>
    </div>
);

const Services: React.FC = () => {
    return (
        <Section className="bg-white">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold tracking-tight text-black sm:text-5xl">What We <span className="text-red-600">Do?</span></h2>
                <p className="mt-4 text-lg text-gray-700">From concept to final cut, we offer a comprehensive suite of services.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {servicesData.map((service, index) => (
                    <ServiceCard key={index} service={service} />
                ))}
            </div>
        </Section>
    );
};

export default Services;
