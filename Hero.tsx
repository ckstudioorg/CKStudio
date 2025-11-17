
import React from 'react';

const Hero: React.FC = () => {
    return (
              <section className="h-screen flex flex-col justify-center items-center text-center relative bg-white">
            <div className="z-10 p-6">
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-widest text-black animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                    CK <span className="text-red-600">STUDIO</span>
                </h1>
                        <p className="mt-4 text-xl md:text-2xl font-light tracking-[0.3em] text-gray-700 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                    PRE | PRODUCTION | POST
                </p>
            </div>
            <style>{`
                @keyframes fade-in-down {
                    0% { opacity: 0; transform: translateY(-20px); }
                    100% { opacity: 1; transform: translateY(0); }
                }
                @keyframes fade-in-up {
                    0% { opacity: 0; transform: translateY(20px); }
                    100% { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in-down { animation: fade-in-down 0.8s ease-out forwards; }
                .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; }
            `}</style>
        </section>
    );
};

export default Hero;
