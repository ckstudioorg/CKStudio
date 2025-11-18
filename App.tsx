
import React, { useState, useEffect, useRef } from 'react';
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
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFound from './NotFound';
import Blog from './Blog';
import BlogPost from './BlogPost';

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

          // Show root div when React mounts (fixes FOUC)
  useEffect(() => {
    const root = document.getElementById('root');
    if (root) root.style.visibility = 'visible';
  }, []);

        return () => {
            Object.values(sectionRefs).forEach((ref) => {
                if (ref.current) {
                    observer.unobserve(ref.current);
                }
            });
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    return (
            <Router>
                      <Routes>
                                  <Route path="/" element={
                                              <>
        <div className="bg-black text-white selection:bg-red-700 selection:text-white">
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
                                                          <Route path="/blog" element={<Blog />} />
                    <Route path="/blog/:slug" element={<BlogPost />} />
                                  <Route path="*" element={<NotFound />} />
                                </Routes>
                    </Router>
    );
};

export default App;
