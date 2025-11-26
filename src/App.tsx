import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import CustomCursor from './components/CustomCursor';
import AnimatedRoutes from './components/AnimatedRoutes';
import WhatsAppWidget from './components/WhatsAppWidget';

// We need a wrapper component to use useLocation inside Router context
const ScrollToTop = () => {
    const location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);
    return null;
};

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
            <CustomCursor />
            <WhatsAppWidget />
            <Router>
                <ScrollToTop />
                <AnimatedRoutes activeSection={activeSection} sectionRefs={sectionRefs} />
            </Router>
        </HelmetProvider>
    );
};

export default App;
