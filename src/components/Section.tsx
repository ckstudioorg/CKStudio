import React from 'react';

interface SectionProps {
    id?: string;
    className?: string;
    children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, className, children }) => {
    return (
        <section id={id} className={`relative py-20 md:py-28 ${className || ''}`}>
            <div className="container mx-auto px-6 relative z-10">
                {children}
            </div>
        </section>
    );
};

export default Section;
