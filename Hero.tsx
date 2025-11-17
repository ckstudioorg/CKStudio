
import React from 'react';

const Hero: React.FC = () => {
    return (
              <section className="h-screen flex flex-col justify-center items-center text-center relative bg-white">
            text-white    text-black <video 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="absolute z-0 w-full h-full object-cover opacity-10"
                poster="https://picsum.photos/seed/cinema/1920/1080"
            >
                <source src="https://assets.mixkit.co/videos/preview/mixkit-vintage-movie-projector-1286-large.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="z-10 p-6">
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-widest text-black animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                    CK <span className="text-red-600">STUDIO</span>
                </h1>
                        <p className="mt-4 text-xl md:text-2xl font-light tracking-[0.3em] text-gray-700 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                    PRE | PRODUCTION | POST
                </p>
            </div>
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
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
