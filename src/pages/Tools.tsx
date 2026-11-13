import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from '../lib/smoothScroll';
import { revealLines, riseIn, useGsap } from '../lib/motion';
import { briefBuilder, briefFields, briefPlacements, placements, sizeChecker, toolList, toolsPage, type ToolSlug } from '../content/tools';
import { contact, whatsappUrl } from '../content/contact';
import { paths } from '../lib/paths';
import SectionLabel from '../components/ui/SectionLabel';

const fieldClass =
    'mt-2 w-full rounded-none border border-gold/25 bg-noir-2 px-4 py-3 text-base text-ivory placeholder:text-ivory-dim transition-colors duration-300 hover:border-gold/45 focus:border-gold focus:outline-none focus:ring-0';
const labelClass = 'block text-[0.66rem] font-medium uppercase tracking-[0.22em] text-gold-light/90';
const guideLink = 'text-gold-light underline decoration-gold/35 underline-offset-4 transition-colors hover:decoration-gold';

const gcd = (a: number, b: number): number => (b ? gcd(b, a % b) : a);

/** "1920 × 1080" → "16:9"; odd sizes fall back to a decimal such as "1.85:1". */
function ratioName(w: number, h: number): string {
    const d = gcd(w, h);
    const [a, b] = [w / d, h / d];
    return a <= 21 && b <= 21 ? `${a}:${b}` : `${(w / h).toFixed(2)}:1`;
}

const SizeChecker: React.FC = () => {
    const [place, setPlace] = useState(0);
    const [width, setWidth] = useState('');
    const [height, setHeight] = useState('');
    const chosen = placements[place];
    const w = Number(width);
    const h = Number(height);
    const valid = Number.isFinite(w) && Number.isFinite(h) && w > 0 && h > 0;
    // Same shape within 1.5%: e.g. 1080×1920 and 720×1280 are both 9:16
    const matches = valid ? placements.filter((p) => Math.abs(w / h - p.ratio[0] / p.ratio[1]) / (p.ratio[0] / p.ratio[1]) < 0.015) : [];

    return (
        <div className="lux-form grid gap-8 lg:grid-cols-2">
            <section aria-labelledby="size-where" className="lux-panel relative p-7 md:p-9">
                <span aria-hidden="true" className="pointer-events-none absolute inset-2.5 border border-gold/10" />
                <div className="relative">
                    <h2 id="size-where" className="font-display text-2xl md:text-3xl font-normal text-ivory">{sizeChecker.whereTitle}</h2>
                    <label className={`${labelClass} mt-6`} htmlFor="size-place">{sizeChecker.whereLabel}</label>
                    <select id="size-place" value={place} onChange={(e) => setPlace(Number(e.target.value))} className={fieldClass}>
                        {placements.map((p, i) => <option key={p.name} value={i}>{p.name}</option>)}
                    </select>
                    <dl aria-live="polite" className="mt-8 space-y-6">
                        <div><dt className={labelClass}>{sizeChecker.shape}</dt><dd className="mt-1 font-display text-3xl italic text-gold-light lining-nums">{chosen.label}</dd></div>
                        <div><dt className={labelClass}>{sizeChecker.size}</dt><dd className="mt-1 font-display text-3xl italic text-gold-light lining-nums">{chosen.size}</dd></div>
                        <div><dt className={labelClass}>{sizeChecker.tip}</dt><dd className="mt-1 text-ivory-soft">{chosen.note}</dd></div>
                    </dl>
                </div>
            </section>

            <section aria-labelledby="size-mine" className="lux-panel relative p-7 md:p-9">
                <span aria-hidden="true" className="pointer-events-none absolute inset-2.5 border border-gold/10" />
                <div className="relative">
                    <h2 id="size-mine" className="font-display text-2xl md:text-3xl font-normal text-ivory">{sizeChecker.mineTitle}</h2>
                    <p className="mt-3 text-sm text-ivory-soft">{sizeChecker.mineIntro}</p>
                    <div className="mt-6 grid grid-cols-2 gap-4">
                        <label className={labelClass}>{sizeChecker.width}
                            <input type="number" inputMode="numeric" min={1} value={width} onChange={(e) => setWidth(e.target.value)} placeholder="1080" className={fieldClass} />
                        </label>
                        <label className={labelClass}>{sizeChecker.height}
                            <input type="number" inputMode="numeric" min={1} value={height} onChange={(e) => setHeight(e.target.value)} placeholder="1920" className={fieldClass} />
                        </label>
                    </div>
                    <div aria-live="polite" className="mt-8">
                        {!valid && <p className="text-ivory-soft">{sizeChecker.enter}</p>}
                        {valid && (
                            <>
                                <p className={labelClass}>{sizeChecker.ratioIs}</p>
                                <p className="mt-1 font-display text-3xl italic text-gold-light lining-nums">{ratioName(w, h)}</p>
                                {matches.length > 0 ? (
                                    <>
                                        <p className={`${labelClass} mt-6`}>{sizeChecker.fits}</p>
                                        <ul className="mt-3 space-y-2 text-ivory/85">
                                            {matches.map((p) => (
                                                <li key={p.name} className="flex gap-3.5"><span aria-hidden="true" className="mt-[0.6em] h-[6px] w-[6px] shrink-0 rotate-45 bg-gold/80" />{p.name}</li>
                                            ))}
                                        </ul>
                                    </>
                                ) : (
                                    <p className="mt-6 text-ivory-soft">{sizeChecker.fitsNone}</p>
                                )}
                            </>
                        )}
                    </div>
                </div>
            </section>

            <p className="text-sm text-ivory-dim lg:col-span-2">
                {sizeChecker.disclaimer} <Link to={sizeChecker.guide.page} className={guideLink}>{sizeChecker.guide.label}</Link>
            </p>
        </div>
    );
};

const BriefBuilder: React.FC = () => {
    const [answers, setAnswers] = useState<Record<string, string>>({});
    const [where, setWhere] = useState<string[]>([]);
    const [copied, setCopied] = useState(false);

    const lines = [
        ...briefFields.slice(0, 4).map((f) => [f.label, answers[f.id]?.trim()] as const),
        [briefBuilder.placementsLabel, where.join(', ')] as const,
        ...briefFields.slice(4).map((f) => [f.label, answers[f.id]?.trim()] as const),
    ].filter(([, value]) => !!value);
    const brief = lines.length ? [briefBuilder.heading, '', ...lines.map(([label, value]) => `${label}:\n${value}\n`)].join('\n').trim() : '';

    const copy = async () => {
        try {
            await navigator.clipboard.writeText(brief);
            setCopied(true);
            setTimeout(() => setCopied(false), 2500);
        } catch {
            /* Clipboard blocked: the text can still be selected and copied by hand */
        }
    };
    const download = () => {
        const url = URL.createObjectURL(new Blob([brief], { type: 'text/plain;charset=utf-8' }));
        const link = document.createElement('a');
        link.href = url;
        link.download = 'video-brief.txt';
        link.click();
        URL.revokeObjectURL(url);
    };

    return (
        <div className="lux-form grid gap-8 lg:grid-cols-2">
            <form aria-labelledby="brief-form" className="lux-panel relative p-7 md:p-9" onSubmit={(e) => e.preventDefault()}>
                <span aria-hidden="true" className="pointer-events-none absolute inset-2.5 border border-gold/10" />
                <div className="relative">
                    <h2 id="brief-form" className="font-display text-2xl md:text-3xl font-normal text-ivory">{briefBuilder.formTitle}</h2>
                    <p className="mt-3 text-sm text-ivory-soft">{briefBuilder.formIntro}</p>
                    <div className="mt-6 space-y-5">
                        {briefFields.map((f, i) => (
                            <React.Fragment key={f.id}>
                                {i === 4 && (
                                    <fieldset>
                                        <legend className={labelClass}>{briefBuilder.placementsLabel}</legend>
                                        <div className="mt-3 flex flex-wrap gap-2">
                                            {briefPlacements.map((p) => {
                                                const on = where.includes(p);
                                                return (
                                                    <label key={p} className={`cursor-pointer border px-3.5 py-2 text-sm transition-colors duration-300 has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-gold ${on ? 'border-gold bg-gold text-noir' : 'border-gold/25 text-ivory/85 hover:border-gold/60'}`}>
                                                        <input type="checkbox" checked={on} onChange={() => setWhere(on ? where.filter((x) => x !== p) : [...where, p])} className="sr-only" />
                                                        {p}
                                                    </label>
                                                );
                                            })}
                                        </div>
                                    </fieldset>
                                )}
                                <label className={labelClass}>{f.label}
                                    {f.rows > 1 ? (
                                        <textarea rows={f.rows} value={answers[f.id] ?? ''} onChange={(e) => setAnswers({ ...answers, [f.id]: e.target.value })} placeholder={f.placeholder} className={`${fieldClass} normal-case tracking-normal`} />
                                    ) : (
                                        <input type="text" value={answers[f.id] ?? ''} onChange={(e) => setAnswers({ ...answers, [f.id]: e.target.value })} placeholder={f.placeholder} className={`${fieldClass} normal-case tracking-normal`} />
                                    )}
                                </label>
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </form>

            <section aria-labelledby="brief-result" className="lg:sticky lg:top-28 lg:self-start">
                <div className="lux-panel relative p-7 md:p-9">
                    <span aria-hidden="true" className="pointer-events-none absolute inset-2.5 border border-gold/10" />
                    <div className="relative">
                        <h2 id="brief-result" className="font-display text-2xl md:text-3xl font-normal text-ivory">{briefBuilder.resultTitle}</h2>
                        {brief ? (
                            <pre aria-live="polite" className="mt-6 max-h-[28rem] overflow-auto whitespace-pre-wrap break-words border border-gold/15 bg-noir p-5 font-body text-sm leading-[1.7] text-ivory/90">{brief}</pre>
                        ) : (
                            <p className="mt-6 text-ivory-soft">{briefBuilder.empty}</p>
                        )}
                        {brief && (
                            <div className="mt-6 flex flex-wrap gap-3">
                                <button type="button" onClick={copy} className="lux-btn px-5 py-3">{copied ? briefBuilder.copied : briefBuilder.copy}</button>
                                <button type="button" onClick={download} className="lux-btn-ghost px-5 py-3">{briefBuilder.download}</button>
                                <a href={whatsappUrl(brief)} target="_blank" rel="noopener noreferrer" className="lux-btn-ghost px-5 py-3">{briefBuilder.whatsapp}</a>
                                <a href={`mailto:${contact.email}?subject=${encodeURIComponent('Video brief')}&body=${encodeURIComponent(brief)}`} className="lux-btn-ghost px-5 py-3">{briefBuilder.email}</a>
                            </div>
                        )}
                        <p className="mt-6 text-sm text-ivory-dim">{briefBuilder.privacy}</p>
                    </div>
                </div>
                <p className="mt-6 text-sm text-ivory-dim">
                    <Link to={briefBuilder.guide.page} className={guideLink}>{briefBuilder.guide.label}</Link>
                </p>
            </section>
        </div>
    );
};

const toolViews: Record<ToolSlug, React.FC> = { 'video-size-checker': SizeChecker, 'ad-brief-builder': BriefBuilder };

/** Free tools: the list (/tools/) when no `slug` is given, otherwise one tool (/tools/<slug>/). Words live in content/tools.ts. */
const Tools: React.FC<{ slug?: ToolSlug }> = ({ slug }) => {
    const root = useRef<HTMLDivElement>(null);
    const tool = toolList.find((t) => t.slug === slug);
    const View = tool ? toolViews[tool.slug] : null;

    useGsap(() => {
        const q = gsap.utils.selector(root);
        revealLines(q('[data-title]')[0], { start: 'top 95%' });
        riseIn(q('[data-intro]'), q('[data-intro]')[0], { start: 'top 95%' });
    }, root, [slug]);

    return (
        <div ref={root} className="relative bg-noir text-ivory">
            <div aria-hidden="true" className="lux-glow-top pointer-events-none absolute inset-x-0 top-0 h-[44rem]" style={{ background: 'radial-gradient(ellipse 42% 42% at 14% 14%, rgba(139,0,0,0.2), rgba(10,8,7,0) 72%)' }} />

            <div className="relative mx-auto max-w-[1600px] px-5 md:px-10 pt-16 md:pt-24 pb-28 md:pb-40">
                {tool ? (
                    <Link to={paths.tools} data-intro className="inline-flex items-center gap-2 text-[0.66rem] font-medium uppercase tracking-[0.24em] text-ivory-dim transition-colors hover:text-gold-light">
                        <span aria-hidden="true">←</span> {toolsPage.back}
                    </Link>
                ) : (
                    <SectionLabel>{toolsPage.label}</SectionLabel>
                )}
                <h1 data-title className={`font-display font-normal text-section ${tool ? 'mt-8' : 'mt-8'}`}>
                    {tool ? tool.name : <>{toolsPage.title.lead} <em className="lux-foil">{toolsPage.title.highlight}</em></>}
                </h1>
                <p data-intro className="mt-8 max-w-2xl text-base md:text-lg leading-[1.8] text-ivory-soft">{tool ? tool.summary : toolsPage.intro}</p>

                <div className="mt-14">
                    {View ? (
                        <View />
                    ) : (
                        <ul className="grid gap-6 md:grid-cols-2">
                            {toolList.map((t) => (
                                <li key={t.slug}>
                                    <Link to={paths.tool(t.slug)} className="lux-panel group relative block h-full p-8 md:p-10">
                                        <span aria-hidden="true" className="pointer-events-none absolute inset-2.5 border border-gold/10 transition-colors duration-500 group-hover:border-gold/30" />
                                        <span className="relative block">
                                            <span className="block font-display text-3xl md:text-4xl font-normal text-ivory transition-colors duration-500 group-hover:text-gold-light">{t.name}</span>
                                            <span className="mt-4 block text-ivory-soft">{t.summary}</span>
                                            <span className="lux-label mt-8 block">{toolsPage.open} →</span>
                                        </span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Tools;
