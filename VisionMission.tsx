
import React from 'react';
import Section from './Section';

const VisionMission: React.FC = () => {
    const missionItems = [
        "Empower Storytellers",
        "Visual Excellence",
        "Creative Marketing",
        "Deliver Excellence",
        "Innovate Continuously",
        "Foster Collaboration",
        "Inspire Creativity"
    ];

    return (
        <Section>
            <div className="text-center mb-16">
                 <h2 className="text-4xl font-bold tracking-tight text-black sm:text-5xl">Our Guiding <span className="text-red-600">Principles</span></h2>
                 <p className="mt-4 text-lg text-gray-400">"Movies are made to be seen; advertising ensures they're remembered"</p>
            </div>
            <div className="grid md:grid-cols-2 gap-16 items-start">
                <div className="bg-white p-8 rounded-lg border-2 border-red-800/50 shadow-xl">
                    <h3 className="text-3xl font-bold text-black font-serif mb-4">Vision</h3>
                    <p className="text-lg text-gray-700 italic">
                        "To be a global leader in post-production, setting the benchmark for creativity, quality, and innovation in transforming stories into unforgettable cinematic experiences."
                    </p>
                </div>
                <div className="bg-white p-8 rounded-lg border-2 border-red-800/50 shadow-xl">
                    <h3 className="text-3xl font-bold text-black font-serif mb-6">Mission</h3>
                    <ul className="space-y-3">
                        {missionItems.map((item, index) => (
                             <li key={index} className="flex items-center text-lg text-gray-700">
                                <svg className="w-5 h-5 mr-3 text-red-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </Section>
    );
};

export default VisionMission;
