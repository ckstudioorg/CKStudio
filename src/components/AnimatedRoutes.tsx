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
import SEO from './SEO';
import { homeSeo } from '../content/seo';
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
                            <SEO title={homeSeo.title} description={homeSeo.description} structuredData={homeSeo.structuredData} />
                            <div className="bg-paper text-ink selection:bg-ck-red selection:text-paper">
                                <Header activeSection="home" />
                                <main id="main" tabIndex={-1} className="outline-none">
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
                                <main id="main" tabIndex={-1} className="pt-16 md:pt-20 outline-none">
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
                            <main id="main" tabIndex={-1} className="pt-16 md:pt-20 outline-none">
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
                                <main id="main" tabIndex={-1} className="pt-16 md:pt-20 outline-none">
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
        </Suspense>
    );
};

export default AnimatedRoutes;
