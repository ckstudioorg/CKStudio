import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

/**
 * Brand-red dot + ring that follows the mouse. Only on mouse/trackpad devices that allow motion
 * (never on phones or for reduced-motion visitors), and hidden until the mouse first moves.
 * Uses motion values, so following the mouse doesn't re-render the page.
 */
const CustomCursor: React.FC = () => {
    // Decided after the page is on screen, so the first render matches the ready-made HTML
    const [enabled, setEnabled] = useState(false);
    useEffect(() => {
        setEnabled(window.matchMedia('(pointer: fine) and (prefers-reduced-motion: no-preference)').matches);
    }, []);
    const [visible, setVisible] = useState(false);
    const [hovering, setHovering] = useState(false);
    const x = useMotionValue(-100);
    const y = useMotionValue(-100);
    const dotX = useSpring(x, { stiffness: 700, damping: 40, mass: 0.4 });
    const dotY = useSpring(y, { stiffness: 700, damping: 40, mass: 0.4 });
    const ringX = useSpring(x, { stiffness: 260, damping: 26, mass: 0.7 });
    const ringY = useSpring(y, { stiffness: 260, damping: 26, mass: 0.7 });

    useEffect(() => {
        if (!enabled) return;
        document.documentElement.classList.add('has-custom-cursor');
        const move = (e: MouseEvent) => {
            x.set(e.clientX);
            y.set(e.clientY);
            setVisible(true);
        };
        const over = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            setHovering(!!target.closest('a, button, [role="button"], input, label'));
        };
        const leave = () => setVisible(false);
        window.addEventListener('mousemove', move);
        window.addEventListener('mouseover', over);
        document.documentElement.addEventListener('mouseleave', leave);
        return () => {
            document.documentElement.classList.remove('has-custom-cursor');
            window.removeEventListener('mousemove', move);
            window.removeEventListener('mouseover', over);
            document.documentElement.removeEventListener('mouseleave', leave);
        };
    }, [enabled, x, y]);

    if (!enabled) return null;

    return (
        <div aria-hidden="true" className={`pointer-events-none fixed inset-0 z-[9999] transition-opacity duration-300 ${visible ? 'opacity-100' : 'opacity-0'}`}>
            <motion.div
                className="absolute left-0 top-0 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-ck-red"
                style={{ x: dotX, y: dotY }}
                animate={{ scale: hovering ? 0 : 1 }}
                transition={{ duration: 0.25 }}
            />
            <motion.div
                className="absolute left-0 top-0 h-9 w-9 -translate-x-1/2 -translate-y-1/2 rounded-full border border-ck-red"
                style={{ x: ringX, y: ringY }}
                animate={{ scale: hovering ? 1.8 : 1, backgroundColor: hovering ? 'rgba(139,0,0,0.12)' : 'rgba(139,0,0,0)' }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            />
        </div>
    );
};

export default CustomCursor;
