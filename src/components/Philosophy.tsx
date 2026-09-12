import React from 'react';
import Section from './Section';

const Philosophy: React.FC = () => (
    <Section id="philosophy" className="section-dark noise-overlay">
                <div className="text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-semibold text-gray-400 uppercase tracking-[0.2em] mb-6">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary-red" />
                        Our Philosophy
                    </div>
                    <h2 className="text-4xl font-display font-black tracking-tight sm:text-6xl mb-4">
                        <span className="heading-gradient">Guiding</span>{' '}
                        <span className="heading-red">Principles</span>
                    </h2>
                    <p className="mt-4 text-gray-500 text-lg max-w-2xl mx-auto italic">
                        "Movies are made to be seen; AI ensures they're remembered"
                    </p>
                </div>

    </Section>
);

export default Philosophy;
