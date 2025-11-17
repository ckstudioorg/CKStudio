
import React from 'react';
import Section from './Section';

const WhyUs: React.FC = () => {
    const strengths = [
        "End-to-end Expertise", "Attention to detail",
        "Cutting edge technology", "Proven track record",
        "Skilled & creative team", "Collaborative approach",
        "Customized solutions", "Competitive pricing",
        "Fast turnaround times", "Global delivery"
    ];

    return (
        <Section>
             <style>{`
                .progress-ring__circle {
                    stroke-dasharray: 282.74; /* 2 * pi * 45 */
                    stroke-dashoffset: 282.74;
                    transform: rotate(-90deg);
                    transform-origin: 50% 50%;
                    animation: progress-animation 2s ease-out forwards;
                }

                @keyframes progress-animation {
                    from { stroke-dashoffset: 282.74; }
                    to { stroke-dashoffset: 56.54; } /* 282.74 * (1 - 0.8) */
                }

                @media (prefers-reduced-motion: reduce) {
                  .progress-ring__circle {
                    animation: none;
                    stroke-dashoffset: 56.54;
                  }
                }
            `}</style>
             <div className="text-center mb-16">
                <h2 className="text-4xl font-bold tracking-tight text-black sm:text-5xl">Why <span className="text-red-600">CK Studio?</span></h2>
                 <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">Your vision deserves more than just technical execution—it deserves artistry, passion, and precision. We craft cinematic masterpieces that leave a lasting impact.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
                 <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                     {strengths.map((strength, index) => (
                         <div key={index} className="flex items-center">
                             <svg className="w-6 h-6 mr-3 text-red-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                             <span className="text-lg text-gray-700">{strength}</span>
                         </div>
                     ))}
                 </div>
                 <div className="flex flex-col items-center justify-center space-y-8">
                    <div className="relative w-64 h-64">
                         <svg className="w-full h-full" viewBox="0 0 100 100">
                             <circle className="text-neutral-800" strokeWidth="10" stroke="currentColor" fill="transparent" r="45" cx="50" cy="50" />
                             <circle 
                                 className="text-red-600 progress-ring__circle"
                                 strokeWidth="10"
                                 strokeLinecap="round"
                                 stroke="currentColor" 
                                 fill="transparent" 
                                 r="45" 
                                 cx="50" 
                                 cy="50"
                             />
                         </svg>
                         <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                            <div className="text-4xl font-bold">100%</div>
                            <div className="text-sm text-gray-700">Commitment</div>
                         </div>
                    </div>
                     <div className="text-center">
                         <p className="text-xl font-semibold"><span className="text-red-600">80%</span> Dedicated Creative & Hardworking Team</p>
                         <p className="text-xl font-semibold"><span className="text-red-600">20%</span> CK's Magic at Work</p>
                     </div>
                 </div>
            </div>
        </Section>
    );
};

export default WhyUs;
