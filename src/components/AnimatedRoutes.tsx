import React, { lazy, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import Header from './layout/Header';
import Hero from '../sections/Hero';
import About from '../sections/About';
import VisionMission from '../sections/VisionMission';
import Philosophy from '../sections/Philosophy';
import Services from '../sections/Services';
import Process from '../sections/Process';
import WhyUs from '../sections/WhyUs';
import Portfolio from '../sections/Portfolio';
import Testimonials from '../sections/Testimonials';
import Partners from '../sections/Partners';
import Contact from '../sections/Contact';
import Footer from './layout/Footer';
const NotFound = lazy(() => import('../pages/NotFound'));
const Blog = lazy(() => import('../pages/Blog'));
const BlogPost = lazy(() => import('../pages/BlogPost'));
const FAQ = lazy(() => import('../pages/FAQ'));
// Local-only style preview for the redesign (never included in the live site)
const DesignPreview = import.meta.env.DEV ? lazy(() => import('../pages/DesignPreview')) : null;
import SEO from './SEO';
import PageTransition from './PageTransition';


const AnimatedRoutes: React.FC = () => {
    const location = useLocation();

    return (
        <Suspense fallback={<div role="status" className="min-h-screen bg-paper text-ink-soft p-12">Loading page…</div>}>
        <AnimatePresence mode="wait">
            <Routes location={location}>
                <Route path="/" element={
                    <PageTransition>
                        <>
                            <SEO
                                title="AI-Powered Ad Film Making"
                                description="CK Studio — India's premier AI-powered ad film production studio. Combining artificial intelligence with cinematic expertise for feature films, commercials, and AI-driven post-production."
                                structuredData={{
                                    "@context": "https://schema.org",
                                    "@type": "ProfessionalService",
                                    "@id": "https://ckstudio.org",
                                    "name": "CK Studio",
                                    "alternateName": "CK Studio - AI Ad Film Making",
                                    "description": "India's premier AI-powered ad film production studio combining artificial intelligence with cinematic expertise.",
                                    "url": "https://ckstudio.org",
                                    "logo": "https://ckstudio.org/images/branding/logo.png",
                                    "image": "https://ckstudio.org/images/branding/og-image.jpg",
                                    "telephone": "+91-9700970762",
                                    "email": "ckstudio.org@gmail.com",
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
                            <div className="bg-paper text-ink selection:bg-ck-red selection:text-paper">
                                <Header activeSection="home" />
                                <main>
                                    <div id="home"><Hero /></div>
                                    <div id="about"><About /></div>
                                    <Philosophy />
                                    <VisionMission />
                                    <div id="services"><Services /></div>
                                    <Process />
                                    <Partners />
                                    <div id="portfolio"><Portfolio /></div>
                                    <div id="why-us"><WhyUs /></div>
                                    <Testimonials />
                                    <div id="contact"><Contact /></div>
                                </main>
                                <Footer />
                            </div>
                        </>
                    </PageTransition>
                } />
                <Route path="/blog" element={
                    <PageTransition>
                        <>
                            <SEO title="Blog | AI Film Making Insights" description="Insights into AI-powered filmmaking, advertising technology, and video production innovation." />
                            <div className="bg-paper text-ink selection:bg-ck-red selection:text-paper">
                                <Header activeSection="blog" />
                                <main className="pt-16 md:pt-20">
                                    <Blog />
                                </main>
                                <Footer />
                            </div>
                        </>
                    </PageTransition>
                } />
                <Route path="/blog/:slug" element={
                    <PageTransition>
                        <div className="bg-paper text-ink selection:bg-ck-red selection:text-paper">
                            <Header activeSection="blog" />
                            <main className="pt-16 md:pt-20">
                                <BlogPost />
                            </main>
                            <Footer />
                        </div>
                    </PageTransition>
                } />
                <Route path="/faq" element={
                    <PageTransition>
                        <>
                            <div className="bg-paper text-ink selection:bg-ck-red selection:text-paper">
                                <Header activeSection="faq" />
                                <main className="pt-16 md:pt-20">
                                    <FAQ />
                                </main>
                                <Footer />
                            </div>
                        </>
                    </PageTransition>
                } />
                {DesignPreview && <Route path="/design-preview" element={<DesignPreview />} />}
                <Route path="*" element={
                    <PageTransition>
                        <NotFound />
                    </PageTransition>
                } />
            </Routes>
        </AnimatePresence>
        </Suspense>
    );
};

export default AnimatedRoutes;
