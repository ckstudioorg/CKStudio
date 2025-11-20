import React from 'react';
import Section from './Section';
import { motion } from 'framer-motion';

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
    <div className="overflow-hidden py-8">
      <div
        className="flex gap-6 animate-scroll"
        style={{
          animation: direction === 'left' ? 'scroll-left 30s linear infinite' : 'scroll-right 30s linear infinite'
        }}
        onMouseEnter={(e) => e.currentTarget.style.animationPlayState = 'paused'}
        onMouseLeave={(e) => e.currentTarget.style.animationPlayState = 'running'}
      >
        {/* Duplicate images for seamless loop */}
        {[...images, ...images, ...images].map((img, index) => (
          <motion.div
            key={index}
            className="flex-shrink-0 relative group"
            whileHover={{ scale: 1.05, zIndex: 10 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={img}
              alt={`Work ${index + 1}`}
              className="h-48 w-72 md:h-64 md:w-96 object-cover rounded-xl shadow-lg group-hover:shadow-2xl transition-all duration-300"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 rounded-xl" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const Portfolio: React.FC = () => {
  return (
    <Section className="bg-white overflow-hidden">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-black tracking-tight text-black sm:text-6xl mb-4"
        >
          Our <span className="text-red-600">Work</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-xl text-gray-600"
        >
          A glimpse into the worlds we've created.
        </motion.p>
      </div>

      {/* Movie Works Section */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-16"
      >
        <h3 className="text-3xl font-bold text-black mb-8 px-6 border-l-4 border-red-600 ml-4 md:ml-12">Movie Works</h3>
        <ScrollingReel images={movieImages} direction="left" />
      </motion.div>

      {/* Commercials Section */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-3xl font-bold text-black mb-8 px-6 border-r-4 border-red-600 mr-4 md:mr-12 text-right">Commercials</h3>
        <ScrollingReel images={commercialImages} direction="right" />
      </motion.div>

      <style jsx>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        @keyframes scroll-right {
          0% { transform: translateX(-33.33%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </Section>
  );
};

export default Portfolio;
