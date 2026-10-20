import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Hero from '../sections/Hero';
import Services from '../sections/Services';
import Footer from '../components/layout/Footer';
import Testimonials from '../sections/Testimonials';
import { services } from '../content/services';

/** Pretend the visitor has asked their device for reduced motion. */
const preferReducedMotion = () => {
    Object.defineProperty(window, 'matchMedia', {
        configurable: true,
        value: vi.fn((query: string) => ({
            matches: query.includes('reduce'), media: query, onchange: null,
            addListener: vi.fn(), removeListener: vi.fn(),
            addEventListener: vi.fn(), removeEventListener: vi.fn(), dispatchEvent: vi.fn(),
        })),
    });
};

describe('redesign safeguards', () => {
    it('shows a calm, still hero for reduced-motion visitors', () => {
        preferReducedMotion();
        const { container } = render(<Hero />);
        expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Where AI');
        // No tall scroll stage, and the screen sits inside the headline gap
        expect(container.querySelector('section')!.className).not.toMatch(/h-\[/);
        expect(screen.getByText('Hero video placeholder')).toBeInTheDocument();
        expect(screen.getByRole('button', { name: 'Explore Our Work' })).toBeInTheDocument();
    });

    it('opens one service at a time', () => {
        render(<Services />);
        const buttons = services.list.map((s) => screen.getByRole('button', { name: new RegExp(s.title) }));
        expect(buttons[0]).toHaveAttribute('aria-expanded', 'true');
        fireEvent.click(buttons[2]);
        expect(buttons[2]).toHaveAttribute('aria-expanded', 'true');
        expect(buttons[0]).toHaveAttribute('aria-expanded', 'false');
    });

    it('shows real work, not invented quotes, until testimonials are approved', () => {
        render(<Testimonials />);
        expect(screen.queryByText(/Rajesh Kumar|Priya Sharma/)).not.toBeInTheDocument();
        expect(screen.getAllByRole('link', { name: /Watch/ }).length).toBeGreaterThan(0);
    });

    it('keeps dead legal links out of the footer', () => {
        render(<MemoryRouter><Footer /></MemoryRouter>);
        const footer = screen.getByRole('contentinfo');
        expect(within(footer).queryByText('Privacy Policy')).not.toBeInTheDocument();
        expect(within(footer).getByRole('link', { name: /9700 970 762/ })).toHaveAttribute('href', 'tel:+919700970762');
    });
});
