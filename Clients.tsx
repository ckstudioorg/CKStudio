import React from 'react';
import Section from './Section';

const clientLogos = [
  { name: "Palik Studios", logo: "https://via.placeholder.com/200x100/DC143C/FFFFFF?text=Palik+Studios" },
  { name: "RR Creations", logo: "https://via.placeholder.com/180x90/DC143C/FFFFFF?text=RR+Creations" },
  { name: "Srinidhi Real Estate", logo: "https://via.placeholder.com/220x110/DC143C/FFFFFF?text=Srinidhi" },
  { name: "MBMR Infra", logo: "https://via.placeholder.com/190x95/DC143C/FFFFFF?text=MBMR+Infra" },
  { name: "CM Productions", logo: "https://via.placeholder.com/210x105/DC143C/FFFFFF?text=CM+Productions" },
  { name: "Sampathna ndi Teamworks", logo: "https://via.placeholder.com/200x100/DC143C/FFFFFF?text=Sampathnandi" },
  { name: "Kuviyam Mediaworks", logo: "https://via.placeholder.com/195x98/DC143C/FFFFFF?text=Kuviyam" },
  { name: "Client 8", logo: "https://via.placeholder.com/185x92/DC143C/FFFFFF?text=Client+8" },
  { name: "Client 9", logo: "https://via.placeholder.com/205x103/DC143C/FFFFFF?text=Client+9" },
];

const Clients: React.FC = () => {
  return (
    <Section className="bg-white">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold tracking-tight text-black sm:text-5xl">Our <span className="text-red-600">Clients</span></h2>
        <p className="mt-4 text-lg text-gray-700">We are proud to have collaborated with a diverse range of creative partners.</p>
      </div>

      {/* Brick Wall / Masonry Style Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mb-12">
        {clientLogos.map((client, index) => (
          <div 
            key={index} 
            className="bg-white border-2 border-gray-200 rounded-lg p-4 md:p-6 flex items-center justify-center hover:border-red-600 hover:shadow-xl transition-all duration-300 hover:scale-105"
            style={{
              gridColumn: index === 2 || index === 5 ? 'span 2' : 'span 1',
              aspectRatio: '16/9'
            }}
          >
            <img 
              src={client.logo} 
              alt={client.name}
              className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>
        ))}
      </div>

      <div className="text-center">
        <p className="text-lg text-gray-700 font-medium">and more...</p>
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
