import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Section from './Section';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
    name: string;
    company: string;
    role: string;
    text: string;
    rating: number;
}

const testimonials: Testimonial[] = [
    {
        name: "Rajesh Kumar",
        company: "Excel Movies",
        role: "Producer",
        text: "CK Studio's AI-powered approach to our film's post-production was revolutionary. The neural color grading alone saved us weeks of work while delivering cinema-grade quality that exceeded our expectations.",
        rating: 5,
    },
    {
        name: "Priya Sharma",
        company: "TechVentures India",
        role: "Marketing Director",
        text: "Their AI-driven ad film production cut our turnaround time by half. The quality of the corporate video they produced was outstanding — it felt like a mini feature film. Truly next-generation filmmaking.",
        rating: 5,
    },
    {
        name: "Vikram Reddy",
        company: "Palik Studios",
        role: "Creative Director",
        text: "Working with CK Studio was a game-changer. Their blend of traditional filmmaking expertise with cutting-edge AI technology produced results that we simply couldn't achieve elsewhere. Highly recommended.",
        rating: 5,
    },
    {
        name: "Ananya Patel",
        company: "MBMR Infra",
        role: "Brand Manager",
        text: "The AI-enhanced brand film CK Studio created for us was phenomenal. From AI storyboarding to the final cut, every step was precise, creative, and delivered ahead of schedule. A fantastic team.",
        rating: 5,
    },
    {
        name: "Suresh Nair",
        company: "CM Productions",
        role: "Executive Producer",
        text: "CK Studio's AI workflow is the future of film production. The efficiency gains are remarkable without any compromise on creative quality. They truly understand the intersection of art and technology.",
        rating: 5,
    },
];

const Testimonials: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const next = useCallback(() => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, []);

    const prev = useCallback(() => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    }, []);

    // Auto-advance
    useEffect(() => {
        const interval = setInterval(next, 6000);
        return () => clearInterval(interval);
    }, [next]);

    const currentTestimonial = testimonials[currentIndex];

    const variants = {
        enter: (dir: number) => ({
            x: dir > 0 ? 50 : -50,
            opacity: 0,
        }),
        center: {
            x: 0,
            opacity: 1,
        },
        exit: (dir: number) => ({
            x: dir > 0 ? -50 : 50,
            opacity: 0,
        }),
    };

    return (
        <Section className="section-dark noise-overlay">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary-red/5 rounded-full blur-[180px] pointer-events-none" />

            <div className="text-center mb-16 relative">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-semibold text-gray-400 uppercase tracking-[0.2em] mb-6"
                >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-red" />
                    Testimonials
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl font-display font-black tracking-tight sm:text-6xl mb-4"
                >
                    <span className="heading-gradient">Client</span>{' '}
                    <span className="heading-red">Stories</span>
                </motion.h2>
            </div>

            <div className="max-w-4xl mx-auto relative">
                {/* Quote Icon */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                    <Quote className="w-10 h-10 text-primary-red/20" />
                </div>

                {/* Testimonial Card */}
                <div className="glass-card p-10 md:p-14 text-center relative overflow-hidden min-h-[300px] flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-red/[0.02] to-transparent pointer-events-none" />

                    <AnimatePresence mode="wait" custom={direction}>
                        <motion.div
                            key={currentIndex}
                            custom={direction}
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            className="relative z-10"
                        >
                            {/* Stars */}
                            <div className="flex justify-center gap-1 mb-6">
                                {Array.from({ length: currentTestimonial.rating }).map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-primary-red text-primary-red" />
                                ))}
                            </div>

                            {/* Quote Text */}
                            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8 italic font-light max-w-3xl mx-auto">
                                "{currentTestimonial.text}"
                            </p>

                            {/* Author */}
                            <div className="divider-glow max-w-[100px] mx-auto mb-6" />
                            <div>
                                <h4 className="text-base font-display font-bold text-white">{currentTestimonial.name}</h4>
                                <p className="text-sm text-gray-500 mt-1">
                                    {currentTestimonial.role}, <span className="text-primary-red/70">{currentTestimonial.company}</span>
                                </p>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Navigation */}
                <div className="flex items-center justify-center gap-6 mt-8">
                    <button
                        onClick={prev}
                        className="w-10 h-10 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-gray-400 hover:text-white hover:border-primary-red/30 transition-all duration-300"
                        aria-label="Previous testimonial"
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </button>

                    {/* Dots */}
                    <div className="flex gap-2">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    setDirection(index > currentIndex ? 1 : -1);
                                    setCurrentIndex(index);
                                }}
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                    index === currentIndex
                                        ? 'bg-primary-red w-6'
                                        : 'bg-white/10 hover:bg-white/20'
                                }`}
                                aria-label={`Go to testimonial ${index + 1}`}
                            />
                        ))}
                    </div>

                    <button
                        onClick={next}
                        className="w-10 h-10 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-gray-400 hover:text-white hover:border-primary-red/30 transition-all duration-300"
                        aria-label="Next testimonial"
                    >
                        <ChevronRight className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </Section>
    );
};

export default Testimonials;
