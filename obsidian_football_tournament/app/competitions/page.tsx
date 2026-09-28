"use client";

import React, { useState } from 'react';
import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';
import CategoryFilter from '@/components/shared/CategoryFilter';
import MatchCard from '@/components/tournament/MatchCard';
import StandingRow from '@/components/tournament/StandingRow';
import { MOCK_MATCHES, MOCK_STANDINGS } from '@/lib/mock-data';

export default function CompetitionsPage() {
  const [activeTab, setActiveTab] = useState<'fixtures' | 'standings'>('fixtures');
  const [sportFilter, setSportFilter] = useState('all');
  const [categoryFilter, setCategoryFilter] = useState('all');

  const filteredMatches = MOCK_MATCHES.filter((m) => {
    if (sportFilter !== 'all' && m.sport !== sportFilter) return false;
    if (categoryFilter !== 'all' && m.category !== categoryFilter) return false;
    return true;
  });

  const filteredStandings = MOCK_STANDINGS.filter((s) => {
    if (sportFilter === 'futsal' && !s.group.toLowerCase().includes('futsal')) return false;
    if (sportFilter === 'football' && s.group.toLowerCase().includes('futsal')) return false;
    return true;
  });

  return (
    <div className="stitch-app flex flex-col min-h-screen">
      <Navbar currentPath="competitions" />

      <main className="w-full pt-20 bg-surface flex-grow">
        <div className="flex flex-col w-full bg-surface">
          {/* Header Banner */}
          <section className="w-full bg-surface-container-low py-space-xl px-gutter relative overflow-hidden">
            <div className="absolute -right-20 -top-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-space-lg relative z-10">
              <div className="flex flex-col gap-space-sm">
                <div className="flex items-center gap-space-xs text-primary font-label-md uppercase tracking-widest">
                  <span className="material-symbols-outlined text-[16px]">sports_soccer</span>
                  <span>Coal City Games 2026 // Central Hub</span>
                </div>
                <h1 className="text-headline-xxl text-on-surface uppercase tracking-tight">Competitions</h1>
                <p className="text-body-lg text-on-surface-variant max-w-2xl">
                  Real-time tracking, live fixtures, and comprehensive statistics for Football and Futsal across male and female divisions.
                </p>
              </div>

              <CategoryFilter
                selectedSport={sportFilter}
                selectedCategory={categoryFilter}
                onSportChange={setSportFilter}
                onCategoryChange={setCategoryFilter}
              />
            </div>
          </section>

          {/* Navigation Tabs */}
          <section className="w-full bg-surface border-b border-surface-container-high sticky top-20 z-40 backdrop-blur-md bg-surface/90">
            <div className="max-w-7xl mx-auto px-gutter flex items-center gap-space-lg overflow-x-auto">
              <button
                onClick={() => setActiveTab('fixtures')}
                className={`py-space-md text-headline-sm uppercase tracking-wide flex items-center gap-space-xs transition-colors border-b-2 ${
                  activeTab === 'fixtures'
                    ? 'border-primary text-primary font-bold'
                    : 'border-transparent text-on-surface-variant hover:text-on-surface'
                }`}
              >
                <span className="material-symbols-outlined text-[20px]">calendar_today</span>
                <span>Fixtures & Results</span>
              </button>
              <button
                onClick={() => setActiveTab('standings')}
                className={`py-space-md text-headline-sm uppercase tracking-wide flex items-center gap-space-xs transition-colors border-b-2 ${
                  activeTab === 'standings'
                    ? 'border-primary text-primary font-bold'
                    : 'border-transparent text-on-surface-variant hover:text-on-surface'
                }`}
              >
                <span className="material-symbols-outlined text-[20px]">leaderboard</span>
                <span>Standings</span>
              </button>
            </div>
          </section>

          {/* Main Content View */}
          <section className="max-w-7xl mx-auto px-gutter py-space-xl w-full">
            {activeTab === 'fixtures' ? (
              <div className="flex flex-col gap-space-lg">
                <div className="flex justify-between items-center">
                  <h2 className="text-headline-lg uppercase text-on-surface">Match Schedule ({filteredMatches.length})</h2>
                  <span className="text-body-sm text-on-surface-variant">Live feeds updating automatically</span>
                </div>

                {filteredMatches.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
                    {filteredMatches.map((match) => (
                      <MatchCard key={match.id} match={match} />
                    ))}
                  </div>
                ) : (
                  <div className="bg-surface-container-lowest border border-surface-container-highest p-space-xl text-center text-on-surface-variant">
                    No matches found for the selected filter criteria.
                  </div>
                )}
              </div>
            ) : (
              <div className="flex flex-col gap-space-lg">
                <div className="flex justify-between items-center">
                  <h2 className="text-headline-lg uppercase text-on-surface">Group Standings</h2>
                </div>

                <div className="bg-surface-container-lowest border border-surface-container-highest overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-surface-container-low border-b border-surface-container-high text-label-md text-on-surface-variant uppercase">
                        <th className="py-3 px-4 text-center">Rank</th>
                        <th className="py-3 px-4">Team</th>
                        <th className="py-3 px-4 text-center">MP</th>
                        <th className="py-3 px-4 text-center">W</th>
                        <th className="py-3 px-4 text-center">D</th>
                        <th className="py-3 px-4 text-center">L</th>
                        <th className="py-3 px-4 text-center">GD</th>
                        <th className="py-3 px-4 text-center">PTS</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredStandings.map((standing, index) => (
                        <StandingRow key={index} standing={standing} />
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
