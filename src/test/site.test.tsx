import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter, useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';
import WhyUs from '../components/WhyUs';
import Portfolio from '../components/Portfolio';
import Header from '../components/layout/Header';

function MetadataPage() {
  const navigate = useNavigate();
  return <><SEO title="Studio insights" description="Production insights" />
    <button onClick={() => navigate('/faq')}>Change page</button></>;
}

describe('site migration safeguards', () => {
  it('hoists metadata and updates the canonical URL after navigation', async () => {
    render(<MemoryRouter initialEntries={['/blog']}><MetadataPage /></MemoryRouter>);
    await waitFor(() => expect(document.title).toBe('Studio insights | CK Studio'));
    expect(document.head.querySelector('link[rel="canonical"]')).toHaveAttribute('href', 'https://ckstudio.org/blog');
    fireEvent.click(screen.getByRole('button', { name: 'Change page' }));
    await waitFor(() => expect(document.head.querySelector('link[rel="canonical"]')).toHaveAttribute('href', 'https://ckstudio.org/faq'));
    expect(document.head.querySelectorAll('link[rel="canonical"]')).toHaveLength(1);
    expect(document.head.querySelectorAll('meta[name="description"]')).toHaveLength(1);
  });

  it('renders complementary red and gold chart arcs and original red labels', () => {
    render(<WhyUs />);
    const chart = screen.getByRole('img', { name: /Commitment: 80%/ });
    const arcs = chart.querySelectorAll('circle');
    expect(arcs).toHaveLength(2);
    expect(arcs[0]).toHaveAttribute('stroke-dasharray', '80 20');
    expect(arcs[0]).toHaveClass('text-primary-red');
    expect(arcs[1]).toHaveAttribute('stroke-dasharray', '20 80');
    expect(arcs[1]).toHaveAttribute('stroke-dashoffset', '-80');
    expect(arcs[1]).toHaveClass('text-brand-gold');
    expect(screen.getByText('20%')).toHaveClass('text-primary-red');
  });

  it('preserves the portfolio groups and six existing project links', () => {
    render(<Portfolio />);
    for (const name of ['Movies', 'Commercials', 'Events']) expect(screen.getByRole('heading', { name, level: 3 })).toBeInTheDocument();
    const links = screen.getAllByRole('link', { name: /Watch Project/ });
    expect(links).toHaveLength(6);
    expect(links[0]).toHaveAttribute('href', 'https://www.youtube.com/watch?v=MIL0vVMcZ9k');
    expect(screen.getByRole('heading', { name: 'Jayaho NTR' })).toBeInTheDocument();
  });

  it('keeps Get Started connected to the contact section', () => {
    render(<MemoryRouter><Header activeSection="home" /><div id="contact">Contact target</div></MemoryRouter>);
    fireEvent.click(screen.getByRole('button', { name: 'Get Started' }));
    expect(Element.prototype.scrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' });
  });
});
