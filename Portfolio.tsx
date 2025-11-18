import React from 'react';
import Section from './Section';

const commercialImages = [
  'https://picsum.photos/seed/ic1/400/300', 'https://picsum.photos/seed/excel1/400/300',
  'https://picsum.photos/seed/kapil/400/300', 'https://picsum.photos/seed/idfc/400/300',
  'https://picsum.photos/seed/inti/400/300', 'https://picsum.photos/seed/plas11/400/300',
  'https://picsum.photos/seed/harivillu/400/300', 'https://picsum.photos/seed/steed/400/300',
  'https://picsum.photos/seed/comm1/400/300', 'https://picsum.photos/seed/comm2/400/300',
  'https://picsum.photos/seed/comm3/400/300', 'https://picsum.photos/seed/comm4/400/300'
];

const movieImages = [
  'https://picsum.photos/seed/movie1/400/300', 'https://picsum.photos/seed/movie2/400/300',
  'https://picsum.photos/seed/movie3/400/300', 'https://picsum.photos/seed/movie4/400/300',
  'https://picsum.photos/seed/movie5/400/300', 'https://picsum.photos/seed/movie6/400/300',
  'https://picsum.photos/seed/movie7/400/300', 'https://picsum.photos/seed/movie8/400/300',
  'https://picsum.photos/seed/film1/400/300', 'https://picsum.photos/seed/film2/400/300',
  'https://picsum.photos/seed/film3/400/300', 'https://picsum.photos/seed/film4/400/300'
];

const ScrollingReel: React.FC<{ images: string[]; direction?: 'left' | 'right' }> = ({ images, direction = 'left' }) => {
  return (
    <div className="overflow-hidden py-4 md:py-8">
      <div 
        className="flex gap-3 md:gap-6 animate-scroll"
        style={{
          animation: direction === 'left' ? 'scroll-left 20s linear infinite' : 'scroll-right 20s linear infinite'
        }}
        onMouseEnter={(e) => e.currentTarget.style.animationPlayState = 'paused'}
        onMouseLeave={(e) => e.currentTarget.style.animationPlayState = 'running'}
      >
        {/* Duplicate images for seamless loop */}
        {[...images, ...images, ...images, ...images].map((img, index) => (
          <div key={index} className="flex-shrink-0">
            <img 
              src={img} 
              alt={`Work ${index + 1}`}
              className="h-40 w-60 md:h-64 md:w-96 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const Portfolio: React.FC = () => {
  return (
    <Section className="bg-white">
      <div className="text-center mb-8 md:mb-12">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black sm:text-5xl">Our <span className="text-red-600">Work</span></h2>
        <p className="mt-3 md:mt-4 text-base md:text-lg text-gray-700">A glimpse into the worlds we've created.</p>
      </div>

      {/* Movie Works Section */}
      <div className="mb-12 md:mb-16">
        <h3 className="text-2xl md:text-3xl font-bold text-black mb-4 md:mb-6">Movie Works</h3>
        <ScrollingReel images={movieImages} direction="left" />
      </div>

      {/* Commercials Section */}
      <div>
        <h3 className="text-2xl md:text-3xl font-bold text-black mb-4 md:mb-6">Commercials</h3>
        <ScrollingReel images={commercialImages} direction="right" />
      </div>

      <style jsx>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </Section>
  );
};

export default Portfolio;
