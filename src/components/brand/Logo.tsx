import React from 'react';
import logoUrl from '../../assets/logo.png';

/**
 * CK Studio logo, cropped from the 16:9 artwork and recoloured with CSS. The source PNG is used as a stencil,
 * so the shapes stay exact on any background.
 * - tone "current": one colour, the text colour (e.g. brand red #8B0000 or a quiet tint).
 * - tone "lux": the luxury look — the CK mark in brand-red lacquer and the CK STUDIO lettering in gold.
 * Crop box measured from src/assets/logo.png (1024x576): x 363-660, y 179-380 (mark) / 179-402 (with tagline).
 */
interface LogoProps {
    className?: string;
    /** Include the small "PRE | PRODUCTION | POST" line under the mark. */
    withTagline?: boolean;
    tone?: 'current' | 'lux';
}

/** Where the CK mark ends and the CK STUDIO lettering starts in the artwork (y = 342 px) */
const LETTERING_TOP = 342;

const Logo: React.FC<LogoProps> = ({ className = '', withTagline = false, tone = 'current' }) => {
    const cropHeight = withTagline ? 224 : 202;
    const mask = `url(${logoUrl})`;
    const position = `50% ${(179 / (576 - cropHeight)) * 100}%`;
    const split = (((LETTERING_TOP - 179) / cropHeight) * 100).toFixed(1);
    const lux = tone === 'lux'
        ? {
            backgroundImage: `linear-gradient(180deg, #c8141f 0%, #8b0000 45%, #640000 ${split}%, #f2dc9b ${split}%, #d4af37 ${(Number(split) + 100) / 2}%, #a8822a 100%)`,
        }
        : undefined;

    return (
        <span
            role="img"
            aria-label="CK Studio"
            className={`inline-block ${tone === 'lux' ? '' : 'bg-current'} ${className}`}
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
                ...lux,
            }}
        />
    );
};

export default Logo;
