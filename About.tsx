
import React from 'react';
import Section from './Section';

const About: React.FC = () => {
    return (
      <Section className="bg-white">            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h2 className="text-4xl font-bold tracking-tight text-black sm:text-5xl">
                        Crafting Cinematic <span className="text-red-600">Experiences</span>.
                    </h2>
                    <p className="text-lg text-gray-700">
                        CHENNA KESHAV STUDIO is a master project by like-minded creative film brains and business ideologists, led by Young, dynamic, and creative minds.
                    </p>
                    <p className="text-lg text-gray-700">
                        At CK Studio, we believe that the magic of cinema lies not just in shooting but in perfecting every frame. Our post-production team is dedicated to bringing your vision to life, with state-of-the-art technology, an experienced team, and a passion for storytelling.
                    </p>
                </div>
                <div className="flex justify-center">
                    <img src="https://picsum.photos/seed/filmset/500/600" alt="CK Studio Film Set" className="rounded-lg shadow-2xl shadow-red-900/30 object-cover w-full max-w-sm" />
                </div>
            </div>
            <div className="mt-20 text-center">
                <blockquote className="text-2xl italic font-medium text-gray-600 border-l-4 border-red-600 pl-6 max-w-4xl mx-auto">
                    "Great films aren't just made on set; they're crafted in post-production. It's where creativity meets precision, turning ideas into cinematic experiences that captivate and inspire."
                </blockquote>
                <p className="mt-6 text-xl text-gold-400 font-serif">your achievement, our success</p>
            </div>
        </Section>
    );
};

export default About;
