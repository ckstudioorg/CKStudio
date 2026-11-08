import React, { Suspense } from 'react';
import { describe, it, expect, vi } from 'vitest';
import { act, render, screen, fireEvent, waitFor, within } from '@testing-library/react';
import { MemoryRouter, Route, Routes, useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';
import BlogPost from '../pages/BlogPost';
import { articles } from '../content/blog';
import { getPageMeta } from '../lib/seo';
import WhyUs from '../sections/WhyUs';
import Portfolio from '../sections/Portfolio';
import Header from '../components/layout/Header';

function MetadataPage() {
  const navigate = useNavigate();
  return <><SEO />
    <button onClick={() => navigate('/faq')}>Change page</button></>;
}

describe('site migration safeguards', () => {
  it('hoists metadata and updates the canonical URL after navigation', async () => {
    render(<MemoryRouter initialEntries={['/blog']}><MetadataPage /></MemoryRouter>);
    await waitFor(() => expect(document.title).toMatch(/^Blog: .* \| CK Studio$/));
    expect(document.head.querySelector('link[rel="canonical"]')).toHaveAttribute('href', 'https://ckstudio.org/blog/');
    fireEvent.click(screen.getByRole('button', { name: 'Change page' }));
    await waitFor(() => expect(document.head.querySelector('link[rel="canonical"]')).toHaveAttribute('href', 'https://ckstudio.org/faq/'));
    expect(document.head.querySelectorAll('link[rel="canonical"]')).toHaveLength(1);
    expect(document.head.querySelectorAll('meta[name="description"]')).toHaveLength(1);
  });

  it('renders complementary red and gold chart arcs and the legend values', () => {
    render(<WhyUs />);
    const chart = screen.getByRole('img', { name: /Commitment: 80%/ });
    const arcs = chart.querySelectorAll('circle[data-arc]');
    expect(arcs).toHaveLength(2);
    expect(arcs[0]).toHaveAttribute('stroke-dasharray', '80 20');
    expect(arcs[0]).toHaveAttribute('stroke', 'url(#why-red)');
    expect(arcs[1]).toHaveAttribute('stroke-dasharray', '20 80');
    expect(arcs[1]).toHaveAttribute('stroke-dashoffset', '-80');
    expect(arcs[1]).toHaveAttribute('stroke', 'url(#why-gold)');
    expect(screen.getByText('80%')).toBeInTheDocument();
    expect(screen.getByText('20%')).toHaveClass('text-gold-light');
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
    const getStarted = screen.getByRole('link', { name: 'Get Started' });
    expect(getStarted).toHaveAttribute('href', '/#contact');
    fireEvent.click(getStarted);
    expect(Element.prototype.scrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' });
  });

  it('uses real links in the menu so search engines can find every page', () => {
    render(<MemoryRouter><Header activeSection="home" /></MemoryRouter>);
    const menu = screen.getByRole('navigation', { name: 'Main' });
    expect(within(menu).getByRole('link', { name: 'Blog' })).toHaveAttribute('href', '/blog/');
    expect(within(menu).getByRole('link', { name: 'FAQ' })).toHaveAttribute('href', '/faq/');
    expect(within(menu).getByRole('link', { name: 'About' })).toHaveAttribute('href', '/#about');
  });

  it("shows an article and its search details once the article's own text file has loaded", async () => {
    const post = articles.find((a) => a.slug === 'ad-film-cost-in-india')!;
    document.head.querySelectorAll('[data-seo]').forEach((el) => el.remove());
    // Awaited act: lets React finish waiting for the article's text (as it does on its own in the browser)
    await act(async () => {
      render(
        <MemoryRouter initialEntries={[`/blog/${post.slug}/`]}>
          <SEO />
          <Suspense fallback={<p>Loading page…</p>}>
            <Routes><Route path="/blog/:slug" element={<BlogPost />} /></Routes>
          </Suspense>
        </MemoryRouter>,
      );
    });
    expect(await screen.findByRole('heading', { level: 1, name: post.title })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Quick answer' })).toBeInTheDocument();
    expect(within(screen.getByRole('navigation', { name: 'In this guide' })).getAllByRole('link').length).toBeGreaterThanOrEqual(3);
    expect(screen.getByText(`${post.minutes} min read`)).toBeInTheDocument();
    await waitFor(() => expect(document.head.querySelector('script[type="application/ld+json"]')?.textContent).toContain('"@type":"FAQPage"'));
    expect(document.title).toBe((await getPageMeta(`/blog/${post.slug}/`)).title);
  });
});
