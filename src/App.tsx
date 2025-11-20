
import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import VisionMission from './components/VisionMission';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import Portfolio from './components/Portfolio';
import Clients from './components/Clients';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import { HelmetProvider } from 'react-helmet-async';
import SEO from './components/SEO';

const App: React.FC = () => {
    const [activeSection, setActiveSection] = useState<string>('home');
    const sectionRefs = {
        home: useRef<HTMLDivElement>(null),
        about: useRef<HTMLDivElement>(null),
        services: useRef<HTMLDivElement>(null),
        portfolio: useRef<HTMLDivElement>(null),
        contact: useRef<HTMLDivElement>(null),
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { rootMargin: '-30% 0px -70% 0px' }
        );

        Object.values(sectionRefs).forEach((ref) => {
            if (ref.current) {
                observer.observe(ref.current);
            }
        });

        return () => {
            Object.values(sectionRefs).forEach((ref) => {
                if (ref.current) {
                    observer.unobserve(ref.current);
                }
            });
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // Show body when React mounts (fixes FOUC)
    useEffect(() => {
        document.body.classList.add('loaded');
    }, []);


    return (
        <HelmetProvider>
            <Router>
                <Routes>
                    <Route path="/" element={
                        <>
                            <SEO
                                title="Home"
                                description="Premium video production services in Hyderabad. Feature films, commercials, and post-production excellence."
                                structuredData={{
                                    "@context": "https://schema.org",
                                    "@type": "ProfessionalService",
                                    "@id": "https://ckstudio.org",
                                    "name": "CK Studio",
                                    "alternateName": "CK Studio Productions",
                                    "description": "Professional video production, film making, and cinematography services in Hyderabad.",
                                    "url": "https://ckstudio.org",
                                    "logo": "https://ckstudio.org/images/branding/logo.png",
                                    "image": "https://ckstudio.org/images/branding/og-image.jpg",
                                    "telephone": "+91-9700970762",
                                    "email": "contact@ckstudio.org",
                                    "address": {
                                        "@type": "PostalAddress",
                                        "streetAddress": "11-008 N/R, Gajularamaram, IDA Jeedimetla",
                                        "addressLocality": "Hyderabad",
                                        "addressRegion": "Telangana",
                                        "postalCode": "500055",
                                        "addressCountry": "IN"
                                    },
                                    "geo": {
                                        "@type": "GeoCoordinates",
                                        "latitude": "17.385044",
                                        "longitude": "78.486671"
                                    },
                                    "openingHoursSpecification": {
                                        "@type": "OpeningHoursSpecification",
                                        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                                        "opens": "09:00",
                                        "closes": "18:00"
                                    },
                                    "sameAs": [
                                        "https://www.facebook.com/CKStudio.org/",
                                        "https://www.instagram.com/ckstudio_music/",
                                        "https://www.youtube.com/@CKStudio-Music",
                                        "https://x.com/CKStudio_Music"
                                    ]
                                }}
                            />
                            <div className="bg-white text-black selection:bg-red-700 selection:text-white">
                                <Header activeSection={activeSection} />
                                <main>
                                    <div id="home" ref={sectionRefs.home}><Hero /></div>
                                    <div id="about" ref={sectionRefs.about}><About /></div>
                                    <VisionMission />
                                    <div id="services" ref={sectionRefs.services}><Services /></div>
                                    <WhyUs />
                                    <div id="portfolio" ref={sectionRefs.portfolio}><Portfolio /></div>
                                    <Clients />
                                    <div id="contact" ref={sectionRefs.contact}><Contact /></div>
                                </main>
                                <Footer />
                            </div>
                        </>
                    } />
                    <Route path="/blog" element={
                        <>
                            <SEO title="Blog" description="Insights into filmmaking and video production." />
                            <Blog />
                        </>
                    } />                    <Route path="/blog/:slug" element={<BlogPost />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Router>
        </HelmetProvider>
    );
};

export default App;

