"use client";

import React, { useState } from 'react';
import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';
import NewsCard from '@/components/tournament/NewsCard';
import { MOCK_NEWS } from '@/lib/mock-data';

export default function NewsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Tournament Announcement', 'Match Report', 'Futsal News'];

  const filteredNews = MOCK_NEWS.filter((article) => {
    if (selectedCategory !== 'All' && article.category !== selectedCategory) return false;
    return true;
  });

  return (
    <div className="stitch-app flex flex-col min-h-screen">
      <Navbar currentPath="news" />

      <main className="w-full pt-20 bg-surface flex-grow">
        <div className="flex flex-col w-full">
          {/* Header Banner */}
          <section className="w-full bg-surface-container-low py-space-xl px-gutter border-b border-surface-container-high">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-space-lg">
              <div>
                <span className="text-primary font-label-md uppercase tracking-wider block mb-1">
                  Official Media Stream
                </span>
                <h1 className="text-headline-xxl uppercase text-on-surface">News & Announcements</h1>
                <p className="text-body-lg text-on-surface-variant max-w-xl">
                  Stay updated with press releases, post-match summaries, disciplinary reports, and official tournament news for Enugu 2026.
                </p>
              </div>

              {/* Category Pills */}
              <div className="flex flex-wrap gap-space-xs bg-surface p-space-xs border border-surface-container-highest">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3 py-1 text-xs font-bold uppercase transition-colors ${
                      selectedCategory === cat ? 'bg-primary text-on-primary' : 'text-on-surface-variant hover:text-on-surface'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* News Feed Grid */}
          <section className="max-w-7xl mx-auto px-gutter py-space-xl w-full">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
              {filteredNews.map((article) => (
                <NewsCard key={article.id} article={article} />
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
