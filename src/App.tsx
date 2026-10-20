import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import CustomCursor from './components/CustomCursor';
import AnimatedRoutes from './components/AnimatedRoutes';
import WhatsAppWidget from './components/WhatsAppWidget';
import { startSmoothScroll, resetScroll } from './lib/smoothScroll';

// We need a wrapper component to use useLocation inside Router context
const ScrollToTop = () => {
    const location = useLocation();
    useEffect(() => {
        resetScroll();
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

    // Smooth, inertia-style scrolling (skipped for visitors who prefer reduced motion)
    useEffect(() => startSmoothScroll(), []);


    return (
        <>
            <CustomCursor />
            <WhatsAppWidget />
            <Router>
                <ScrollToTop />
                <AnimatedRoutes activeSection={activeSection} sectionRefs={sectionRefs} />
            </Router>
        </>
    );
};

export default App;
