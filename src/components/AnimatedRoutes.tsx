import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import VisionMission from './VisionMission';
import Services from './Services';
import WhyUs from './WhyUs';
import Portfolio from './Portfolio';
import Clients from './Clients';
import Contact from './Contact';
import Footer from './Footer';
import NotFound from '../pages/NotFound';
import Blog from '../pages/Blog';
import BlogPost from '../pages/BlogPost';
import FAQ from '../pages/FAQ';
import SEO from './SEO';
import PageTransition from './PageTransition';

interface AnimatedRoutesProps {
    activeSection: string;
    sectionRefs: any;
}

const AnimatedRoutes: React.FC<AnimatedRoutesProps> = ({ activeSection, sectionRefs }) => {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={
                    <PageTransition>
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
                    </PageTransition>
                } />
                <Route path="/blog" element={
                    <PageTransition>
                        <>
                            <SEO title="Blog" description="Insights into filmmaking and video production." />
                            <div className="bg-white text-black selection:bg-red-700 selection:text-white">
                                <Header activeSection="blog" />
                                <main className="pt-20">
                                    <Blog />
                                </main>
                                <Footer />
                            </div>
                        </>
                    </PageTransition>
                } />
                <Route path="/blog/:slug" element={
                    <PageTransition>
                        <div className="bg-white text-black selection:bg-red-700 selection:text-white">
                            <Header activeSection="blog" />
                            <main className="pt-20">
                                <BlogPost />
                            </main>
                            <Footer />
                        </div>
                    </PageTransition>
                } />
                <Route path="/faq" element={
                    <PageTransition>
                        <>
                            <SEO title="FAQ" description="Frequently asked questions about CK Studio's video production services." />
                            <div className="bg-white text-black selection:bg-red-700 selection:text-white">
                                <Header activeSection="faq" />
                                <main className="pt-20">
                                    <FAQ />
                                </main>
                                <Footer />
                            </div>
                        </>
                    </PageTransition>
                } />
                <Route path="*" element={
                    <PageTransition>
                        <NotFound />
                    </PageTransition>
                } />
            </Routes>
        </AnimatePresence>
    );
};

export default AnimatedRoutes;
