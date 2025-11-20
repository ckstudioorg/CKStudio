import React from 'react';
import Section from './Section';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const clientLogos = [
  { name: "Palik Studios", logo: "https://picsum.photos/seed/DC143C/FFFFFF?text=Palik+Studios" },
  { name: "RR Creations", logo: "https://picsum.photos/seed/DC143C/FFFFFF?text=RR+Creations" },
  { name: "Srinidhi Real Estate", logo: "https://picsum.photos/seed/DC143C/FFFFFF?text=Srinidhi" },
  { name: "MBMR Infra", logo: "https://picsum.photos/seed/DC143C/FFFFFF?text=MBMR+Infra" },
  { name: "CM Productions", logo: "https://picsum.photos/seed/DC143C/FFFFFF?text=CM+Productions" },
  { name: "Sampathnandi Teamworks", logo: "https://picsum.photos/seed/DC143C/FFFFFF?text=Sampathnandi" },
  { name: "Kuviyam Mediaworks", logo: "https://picsum.photos/seed/DC143C/FFFFFF?text=Kuviyam" },
  { name: "Client 8", logo: "https://picsum.photos/seed/DC143C/FFFFFF?text=Client+8" },
  { name: "Client 9", logo: "https://picsum.photos/seed/DC143C/FFFFFF?text=Client+9" },
];

const Clients: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Section className="bg-white">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold tracking-tight text-black sm:text-5xl">Our <span className="text-red-600">Clients</span></h2>
        <p className="mt-4 text-lg text-gray-700">We are proud to have collaborated with a diverse range of creative partners.</p>
      </motion.div>

      {/* Uniform Grid - All Same Size */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mb-12">
        {clientLogos.map((client, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ delay: index * 0.05, duration: 0.4 }}
            className="bg-white border-2 border-gray-200 rounded-lg p-6 flex items-center justify-center hover:border-red-600 hover:shadow-xl transition-all duration-300 hover:scale-105 aspect-video group"
          >
            <img
              src={client.logo}
              alt={client.name}
              className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
            />
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="text-center"
      >
        <p className="text-lg text-gray-700 font-medium">and more...</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ delay: 1.0, duration: 0.6 }}
        className="mt-20 text-center"
      >
        <blockquote className="text-2xl italic font-medium text-gray-600 border-l-4 border-red-600 pl-6 max-w-4xl mx-auto">
          "The best marketing doesn't feel like marketing"
        </blockquote>
      </motion.div>
    </Section>
  );
};

export default Clients;
