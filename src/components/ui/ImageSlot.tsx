import React from 'react';
import Logo from '../brand/Logo';

/**
 * Shows an image, or, until it is supplied, a tidy placeholder that tells the designer
 * the exact size and file name needed.
 */
interface ImageSlotProps {
    src: string | null;
    alt: string;
    requirement: string;
    className?: string;
    imgClassName?: string;
}

const ImageSlot: React.FC<ImageSlotProps> = ({ src, alt, requirement, className = '', imgClassName = '' }) => {
    if (src) {
        return <img src={src} alt={alt} loading="lazy" decoding="async" className={`h-full w-full object-cover ${imgClassName} ${className}`} />;
    }
    return (
        <div role="img" aria-label={`${alt} (image coming soon)`} className={`relative h-full w-full bg-noir-3 ${className}`}>
            <div aria-hidden="true" className="absolute inset-0 flex items-center justify-center">
                <Logo className="h-[14%] text-gold/25" />
            </div>
            <p aria-hidden="true" className="absolute inset-x-0 bottom-0 p-4 text-[0.65rem] uppercase tracking-[0.2em] text-ivory-dim">
                Image needed · {requirement}
            </p>
        </div>
    );
};

export default ImageSlot;
