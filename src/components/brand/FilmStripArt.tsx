import React from 'react';
import { LetterC, LetterK } from './LogoLetters';

/**
 * About Us artwork (approved concept A, Claude Design canvas "CK Studio About Image Concepts"):
 * a tilted 35 mm film strip with three frames — PRE (storyboard sketches), PRODUCTION (the CK mark in a
 * viewfinder) and POST (colour-grading bars). Drawn as one SVG on a 600 × 750 (4:5) canvas so it stays sharp
 * at any size. `data-strip` lets the About section drift the film gently while scrolling.
 */
const RED = '#8B0000';
const INK = '#111111';
const PAPER = '#F6F6F6';
const GREY = '#DADADA';

const STRIP = { x: 130, y: -60, w: 340, h: 870 };
const SPROCKETS = Array.from({ length: 18 }, (_, i) => STRIP.y + (STRIP.h / 18) * (i + 0.5) - 9);
const FRAME = { x: 170, w: 260, h: 190, tops: [56, 280, 504] };
const BARS: { h: number; fill: string }[] = [
    { h: 30, fill: GREY }, { h: 52, fill: GREY }, { h: 74, fill: RED }, { h: 90, fill: RED },
    { h: 66, fill: RED }, { h: 44, fill: GREY }, { h: 58, fill: INK }, { h: 80, fill: INK },
    { h: 62, fill: INK }, { h: 36, fill: GREY }, { h: 24, fill: GREY }, { h: 46, fill: RED },
];
const label = { fontSize: 10, fontWeight: 500, letterSpacing: 3, fill: RED } as const;

const FilmStripArt: React.FC<{ className?: string; title?: string }> = ({ className = '', title = 'CK Studio film strip: pre-production, production and post-production' }) => {
    const [pre, prod, post] = FRAME.tops;
    const right = FRAME.x + FRAME.w;
    return (
        <svg viewBox="0 0 600 750" role="img" aria-label={title} className={className} preserveAspectRatio="xMidYMid slice" style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}>
            <rect width="600" height="750" fill={PAPER} />
            <g transform="rotate(-6 300 375)">
                <g data-strip>
                    <rect x={STRIP.x} y={STRIP.y} width={STRIP.w} height={STRIP.h} fill={INK} />
                    {SPROCKETS.map((y) => (
                        <g key={y}>
                            <rect x={STRIP.x + 12} y={y} width="14" height="18" rx="3" fill={PAPER} />
                            <rect x={STRIP.x + STRIP.w - 26} y={y} width="14" height="18" rx="3" fill={PAPER} />
                        </g>
                    ))}

                    {/* PRE — storyboard sketches */}
                    <rect x={FRAME.x} y={pre} width={FRAME.w} height={FRAME.h} rx="4" fill="#FFFFFF" />
                    <text x={FRAME.x + 14} y={pre + 24} {...label}>PRE</text>
                    {[0, 1, 2].map((i) => (
                        <svg key={i} x={FRAME.x + 14 + i * 80} y={pre + 36} width="72" height={FRAME.h - 50} viewBox="0 0 60 60" preserveAspectRatio="none" overflow="hidden">
                            <rect x="0.75" y="0.75" width="58.5" height="58.5" rx="2" fill="none" stroke={INK} strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
                            {i === 0 && <><path d="M0 60 L60 0" stroke={INK} strokeWidth="1" fill="none" vectorEffect="non-scaling-stroke" /><ellipse cx="20" cy="20" rx="7" ry="5" stroke={INK} strokeWidth="1.2" fill="none" vectorEffect="non-scaling-stroke" /></>}
                            {i === 1 && <><path d="M8 48 L30 18 L52 48" stroke={INK} strokeWidth="1.2" fill="none" vectorEffect="non-scaling-stroke" /><path d="M0 52 L60 52" stroke={RED} strokeWidth="1.5" vectorEffect="non-scaling-stroke" /></>}
                            {i === 2 && <><rect x="16" y="20" width="28" height="20" stroke={INK} strokeWidth="1.2" fill="none" vectorEffect="non-scaling-stroke" /><path d="M30 6 L30 54 M6 30 L54 30" stroke={INK} strokeWidth="0.8" strokeDasharray="3 3" vectorEffect="non-scaling-stroke" /></>}
                        </svg>
                    ))}

                    {/* PRODUCTION — the CK mark in a camera viewfinder */}
                    <rect x={FRAME.x} y={prod} width={FRAME.w} height={FRAME.h} rx="4" fill="#FFFFFF" />
                    <circle cx={FRAME.x + 17.5} cy={prod + 20.5} r="3.5" fill={RED} />
                    <text x={FRAME.x + 26} y={prod + 24} {...label}>REC</text>
                    <text x={right - 14} y={prod + 24} textAnchor="end" fontSize="10" letterSpacing="1.2" fill={INK} style={{ fontVariantNumeric: 'tabular-nums' }}>00:12:08:14</text>
                    <path
                        d={`M${FRAME.x + 14} ${prod + 52} V${prod + 34} H${FRAME.x + 32} M${right - 14} ${prod + 52} V${prod + 34} H${right - 32}
                            M${FRAME.x + 14} ${prod + 142} V${prod + 160} H${FRAME.x + 32} M${right - 14} ${prod + 142} V${prod + 160} H${right - 32}`}
                        stroke={INK} strokeWidth="1.5" fill="none"
                    />
                    <svg x={300 - 66} y={prod + 62} width="132" height="72" viewBox="0 0 594 322" style={{ color: RED }}>
                        <LetterC x="0" y="0" width="280" height="322" />
                        <LetterK x="262" y="7" width="332" height="308" />
                    </svg>
                    <text x="300" y={prod + FRAME.h - 12} textAnchor="middle" {...label}>PRODUCTION</text>

                    {/* POST — colour-grading bars */}
                    <rect x={FRAME.x} y={post} width={FRAME.w} height={FRAME.h} rx="4" fill="#FFFFFF" />
                    <text x={FRAME.x + 14} y={post + 24} {...label}>POST</text>
                    {BARS.map((bar, i) => {
                        const barW = (228 - 11 * 5) / 12;
                        const h = (bar.h / 100) * 132;
                        return <rect key={i} x={FRAME.x + 16 + i * (barW + 5)} y={post + 176 - h} width={barW} height={h} fill={bar.fill} />;
                    })}
                    <path d={`M${FRAME.x + 14} ${post + 176.75} H${right - 14}`} stroke={INK} strokeWidth="1.5" />
                </g>
            </g>
        </svg>
    );
};

export default FilmStripArt;
