import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor: React.FC = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            });
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a') || target.closest('button')) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', updateMousePosition);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);

    return (
        <>
            {/* Main Dot */}
            <motion.div
                className="fixed top-0 left-0 w-4 h-4 bg-red-600 rounded-full pointer-events-none z-[9999]"
                style={{
                    translateX: "-50%",
                    translateY: "-50%",
                }}
                animate={{
                    x: mousePosition.x,
                    y: mousePosition.y,
                    scale: isHovering ? 1.5 : 1,
                }}
                transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 28,
                    mass: 0.5
                }}
            />
            
            {/* Spotlight / Glow Trail */}
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 border-2 border-red-600 rounded-full pointer-events-none z-[9998]"
                style={{
                    translateX: "-50%",
                    translateY: "-50%",
                }}
                animate={{
                    x: mousePosition.x,
                    y: mousePosition.y,
                    scale: isHovering ? 2.5 : 1,
                    opacity: isHovering ? 0.8 : 0.4,
                    backgroundColor: isHovering ? 'rgba(139, 0, 0, 0.1)' : 'transparent'
                }}
                transition={{
                    type: "spring",
                    stiffness: 250,
                    damping: 20,
                    mass: 0.8
                }}
            />
        </>
    );
};

export default CustomCursor;
