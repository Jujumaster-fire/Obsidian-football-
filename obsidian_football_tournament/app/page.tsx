"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';
import MatchCard from '@/components/tournament/MatchCard';
import StatWidget from '@/components/tournament/StatWidget';
import NewsCard from '@/components/tournament/NewsCard';
import { MOCK_MATCHES, MOCK_STATS, MOCK_NEWS, MOCK_TEAMS } from '@/lib/mock-data';

export default function HomePage() {
  const [filterSport, setFilterSport] = useState('all');

  const filteredMatches = MOCK_MATCHES.filter((match) => {
    if (filterSport !== 'all' && match.sport !== filterSport) return false;
    return true;
  });

  return (
    <div className="stitch-app flex flex-col min-h-screen">
      <Navbar currentPath="home" />

      <main className="w-full pt-20 bg-surface flex-grow">
        <div className="flex flex-col w-full">
          {/* Hero Section */}
          <section className="relative w-full bg-surface-container-low overflow-hidden">
            <div className="absolute inset-0 opacity-10 pointer-events-none flex items-center justify-center">
              <span className="font-headline-xxl text-[20vw] leading-none uppercase text-primary select-none">
                ENUGU 2026
              </span>
            </div>
            <div className="max-w-7xl mx-auto px-gutter py-space-xl relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center min-h-[500px]">
              <div className="lg:col-span-7 flex flex-col items-start gap-space-md">
                <div className="inline-flex items-center gap-space-sm bg-primary-container text-on-primary-container px-3 py-1 font-label-md uppercase tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span>
                  Coal City Games 2026 • Official Portal
                </div>
                <h1 className="font-headline-xxl text-on-surface uppercase tracking-tight">
                  Obsidian Elite <br />
                  <span className="text-primary">Football Portal</span>
                </h1>
                <p className="font-body-lg text-on-surface-variant max-w-xl">
                  The ultimate battlefield for elite collegiate and independent football squads. Track live scores, advanced stats, and master the tournament brackets for Enugu 2026.
                </p>
                <div className="flex flex-wrap items-center gap-space-md pt-space-sm">
                  <Link
                    href="/admin/registration"
                    className="bg-primary-container hover:bg-primary text-on-primary-container hover:text-on-primary font-headline-sm uppercase px-8 py-4 transition-all duration-200 shadow-sm flex items-center gap-space-sm"
                  >
                    <span>Register Your Team</span>
                    <span className="material-symbols-outlined">arrow_forward</span>
                  </Link>
                  <Link
                    href="/competitions"
                    className="bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-headline-sm uppercase px-8 py-4 transition-all duration-200"
                  >
                    View Brackets
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5 relative">
                <div
                  className="w-full h-[400px] bg-cover bg-center shadow-lg relative rounded border border-surface-container-highest flex flex-col justify-end p-space-lg text-white"
                  style={{ backgroundImage: "url('/assets/stitch/Home.png')" }}
                >
                  <div className="bg-surface-container-lowest/80 backdrop-blur-sm p-4 border border-surface-container-high">
                    <span className="text-xs uppercase font-label-md text-tertiary-fixed-dim block mb-1">
                      Matchday 04 Highlights
                    </span>
                    <h3 className="font-headline-lg uppercase text-on-surface">Enugu Lions vs Abuja Titans</h3>
                    <p className="font-body-sm text-on-surface-variant">Full Time • Nnamdi Azikiwe Stadium</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Tournament Overview Stats */}
          <section className="max-w-7xl mx-auto px-gutter py-space-lg w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md">
              {MOCK_STATS.map((stat, idx) => (
                <StatWidget key={idx} stat={stat} />
              ))}
            </div>
          </section>

          {/* Real-Time Matches & Fixtures */}
          <section className="max-w-7xl mx-auto px-gutter py-space-xl w-full">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-lg gap-space-sm">
              <div>
                <span className="text-primary font-label-md uppercase tracking-wider">Real-Time Data Feed</span>
                <h2 className="font-headline-xl uppercase text-on-surface">Latest Results & Fixtures</h2>
              </div>
              <div className="flex items-center gap-space-md">
                <div className="flex items-center gap-space-xs bg-surface-container-low p-1 border border-surface-container">
                  <button
                    onClick={() => setFilterSport('all')}
                    className={`px-3 py-1 text-xs font-bold uppercase transition-colors ${
                      filterSport === 'all' ? 'bg-primary text-on-primary' : 'text-on-surface-variant hover:text-on-surface'
                    }`}
                  >
                    All
                  </button>
                  <button
                    onClick={() => setFilterSport('football')}
                    className={`px-3 py-1 text-xs font-bold uppercase transition-colors ${
                      filterSport === 'football' ? 'bg-primary text-on-primary' : 'text-on-surface-variant hover:text-on-surface'
                    }`}
                  >
                    Football
                  </button>
                  <button
                    onClick={() => setFilterSport('futsal')}
                    className={`px-3 py-1 text-xs font-bold uppercase transition-colors ${
                      filterSport === 'futsal' ? 'bg-primary text-on-primary' : 'text-on-surface-variant hover:text-on-surface'
                    }`}
                  >
                    Futsal
                  </button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
              {filteredMatches.map((match) => (
                <MatchCard key={match.id} match={match} />
              ))}
            </div>
          </section>

          {/* Top Ranked Teams Spotlight */}
          <section className="bg-surface-container-low py-space-xl border-y border-surface-container-high w-full">
            <div className="max-w-7xl mx-auto px-gutter">
              <div className="flex justify-between items-end mb-space-lg">
                <div>
                  <span className="text-primary font-label-md uppercase tracking-wider">Championship Contenders</span>
                  <h2 className="font-headline-xl uppercase text-on-surface">Featured Teams</h2>
                </div>
                <Link href="/teams" className="text-primary hover:underline font-bold uppercase text-body-sm">
                  View All Teams →
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-space-md">
                {MOCK_TEAMS.map((team) => (
                  <div key={team.id} className="bg-surface p-space-md border border-surface-container-highest flex flex-col justify-between">
                    <div>
                      <div className="w-10 h-10 bg-primary/10 text-primary font-bold flex items-center justify-center mb-2">
                        {team.logoText}
                      </div>
                      <h3 className="font-headline-sm text-on-surface mb-1">{team.name}</h3>
                      <span className="text-xs text-on-surface-variant block mb-3">{team.sport} • {team.category}</span>
                    </div>
                    <Link href={`/teams/${team.id}`} className="text-xs text-primary font-bold uppercase hover:underline">
                      Profile details →
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Latest Announcements */}
          <section className="max-w-7xl mx-auto px-gutter py-space-xl w-full">
            <div className="flex justify-between items-end mb-space-lg">
              <div>
                <span className="text-primary font-label-md uppercase tracking-wider">Official Updates</span>
                <h2 className="font-headline-xl uppercase text-on-surface">News & Announcements</h2>
              </div>
              <Link href="/news" className="text-primary hover:underline font-bold uppercase text-body-sm">
                News Hub →
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
              {MOCK_NEWS.map((article) => (
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
