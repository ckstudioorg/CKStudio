import React from 'react';
import logoUrl from '../../assets/logo.png';

/**
 * CK Studio logo, cropped from the 16:9 artwork and recoloured with CSS (text colour = logo colour).
 * The source PNG is used as a stencil, so the brand red stays exact (#8B0000) on any background.
 * Crop box measured from src/assets/logo.png (1024x576): x 363-660, y 179-380 (mark) / 179-402 (with tagline).
 */
interface LogoProps {
    className?: string;
    /** Include the small "PRE | PRODUCTION | POST" line under the mark. */
    withTagline?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = '', withTagline = false }) => {
    const cropHeight = withTagline ? 224 : 202;
    const mask = `url(${logoUrl})`;
    const position = `50% ${(179 / (576 - cropHeight)) * 100}%`;

    return (
        <span
            role="img"
            aria-label="CK Studio"
            className={`inline-block bg-current ${className}`}
            style={{
                aspectRatio: `298 / ${cropHeight}`,
                maskImage: mask,
                WebkitMaskImage: mask,
                maskSize: '343.6% auto',
                WebkitMaskSize: '343.6% auto',
                maskPosition: position,
                WebkitMaskPosition: position,
                maskRepeat: 'no-repeat',
                WebkitMaskRepeat: 'no-repeat',
            }}
        />
    );
};

export default Logo;
