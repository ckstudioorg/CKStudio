
import React from 'react';
import Section from './Section';

const otherClients = [
    "Palik Studios", "RR Creations", "Srinidhi Real Estate",
    "MBMR Infra", "CM Productions", "Sampathnandi Teamworks",
    "Kuviyam Mediaworks"
];

const Clients: React.FC = () => {
    return (
        <Section>
            <div className="text-center">
                <h2 className="text-4xl font-bold tracking-tight text-black sm:text-5xl">Our <span className="text-red-600">Clients</span></h2>
                <p className="mt-4 text-lg text-gray-700">We are proud to have collaborated with a diverse range of creative partners.</p>
            </div>
            <div className="mt-16 flex flex-wrap justify-center items-center gap-4">
                {otherClients.map((client, index) => (
                    <div key={index} className="bg-neutral-800 border border-neutral-700 text-gray-700 text-lg font-medium px-5 py-2 rounded-lg transition-all duration-300 hover:bg-red-600 hover:text-black hover:border-red-500 hover:scale-105">
                        {client}
                    </div>
                ))}
                <div className="text-gray-700 text-lg font-medium px-5 py-2 rounded-lg">
                    and more...
                </div>
            </div>
             <div className="mt-20 text-center">
                <blockquote className="text-2xl italic font-medium text-gray-600 border-l-4 border-red-600 pl-6 max-w-4xl mx-auto">
                   "The best marketing doesn't feel like marketing"
                </blockquote>
            </div>
        </Section>
    );
};

export default Clients;
