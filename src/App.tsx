import React, { useEffect } from 'react';
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
                <AnimatedRoutes />
            </Router>
        </>
    );
};

export default App;
