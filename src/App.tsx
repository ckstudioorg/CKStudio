import React, { useEffect } from 'react';
import { BrowserRouter, StaticRouter, useLocation } from 'react-router-dom';
import { MotionConfig } from 'motion/react';
import CustomCursor from './components/CustomCursor';
import AnimatedRoutes from './components/AnimatedRoutes';
import WhatsAppWidget from './components/WhatsAppWidget';
import SEO from './components/SEO';
import { startSmoothScroll, resetScroll, scrollToSection } from './lib/smoothScroll';

// We need a wrapper component to use useLocation inside Router context
const ScrollToTop = () => {
    const location = useLocation();
    useEffect(() => {
        resetScroll();
        // Arriving with a link like /#about: scroll there once the page has laid out
        if (!location.hash) return;
        // The page fades in first, so keep checking until the section exists, then let animations settle
        const id = decodeURIComponent(location.hash.slice(1));
        let tries = 0;
        let timer = 0;
        const attempt = () => {
            if (document.getElementById(id)) {
                timer = window.setTimeout(() => scrollToSection(id), 350);
            } else if (tries++ < 30) {
                timer = window.setTimeout(attempt, 150);
            }
        };
        attempt();
        return () => window.clearTimeout(timer);
    }, [location.pathname, location.hash]);
    return null;
};

/** `location` is only passed when building the ready-made HTML files (scripts/prerender.mjs). */
const App: React.FC<{ location?: string }> = ({ location }) => {
    // Show body when React mounts (fixes FOUC)
    useEffect(() => {
        document.body.classList.add('loaded');
    }, []);

    // Smooth, inertia-style scrolling (skipped for visitors who prefer reduced motion)
    useEffect(() => startSmoothScroll(), []);

    return (
        <MotionConfig reducedMotion="user">
            <CustomCursor />
            <WhatsAppWidget />
            {location ? (
                <StaticRouter location={location}>
                    <ScrollToTop />
                    <SEO />
                    <AnimatedRoutes />
                </StaticRouter>
            ) : (
                <BrowserRouter>
                    <ScrollToTop />
                    <SEO />
                    <AnimatedRoutes />
                </BrowserRouter>
            )}
        </MotionConfig>
    );
};

export default App;
