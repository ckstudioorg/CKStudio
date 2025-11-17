
import React, { useState } from 'react';
import Section from './Section';

type Tab = 'commercials' | 'movies';

const commercialImages = [
    'https://picsum.photos/seed/icl/400/300', 'https://picsum.photos/seed/excell/400/300',
    'https://picsum.photos/seed/kapil/400/300', 'https://picsum.photos/seed/idfc/400/300',
    'https://picsum.photos/seed/inti/400/300', 'https://picsum.photos/seed/plasil/400/300',
    'https://picsum.photos/seed/harivillu/400/300', 'https://picsum.photos/seed/steed/400/300'
];

const movieImages = [
    'https://picsum.photos/seed/movie1/400/300', 'https://picsum.photos/seed/movie2/400/300',
    'https://picsum.photos/seed/movie3/400/300', 'https://picsum.photos/seed/movie4/400/300',
    'https://picsum.photos/seed/movie5/400/300', 'https://picsum.photos/seed/movie6/400/300',
    'https://picsum.photos/seed/movie7/400/300', 'https://picsum.photos/seed/movie8/400/300'
];

const Portfolio: React.FC = () => {
    const [activeTab, setActiveTab] = useState<Tab>('movies');

    const TabButton: React.FC<{ tab: Tab; label: string }> = ({ tab, label }) => (
        <button
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 text-lg font-semibold rounded-full transition-all duration-300 ${activeTab === tab ? 'bg-red-600 text-black' : 'bg-neutral-800 text-gray-300 hover:bg-neutral-700'}`}
        >
            {label}
        </button>
    );

    const imagesToShow = activeTab === 'commercials' ? commercialImages : movieImages;

    return (
        <Section className="bg-white">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold tracking-tight text-black sm:text-5xl">Our <span className="text-red-600">Work</span></h2>
                <p className="mt-4 text-lg text-gray-700">A glimpse into the worlds we've created.</p>
            </div>
            <div className="flex justify-center space-x-4 mb-12">
                <TabButton tab="movies" label="Movie Works" />
                <TabButton tab="commercials" label="Commercials" />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                {imagesToShow.map((src, index) => (
                    <div key={index} className="group aspect-w-4 aspect-h-3 overflow-hidden rounded-lg shadow-lg cursor-pointer">
                        <img 
                            src={src} 
                            alt={`Screenshot from ${activeTab} project ${index + 1}`} 
                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 ease-in-out"
                        />
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Portfolio;
