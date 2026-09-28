"use client";

import React, { useState } from 'react';
import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';
import TeamCard from '@/components/tournament/TeamCard';
import { MOCK_TEAMS } from '@/lib/mock-data';

export default function TeamsPage() {
  const [searchTerm, setSearchType] = useState('');
  const [sportFilter, setSportFilter] = useState('all');

  const filteredTeams = MOCK_TEAMS.filter((team) => {
    if (sportFilter !== 'all' && team.sport.toLowerCase() !== sportFilter) return false;
    if (searchTerm && !team.name.toLowerCase().includes(searchTerm.toLowerCase())) return false;
    return true;
  });

  return (
    <div className="stitch-app flex flex-col min-h-screen">
      <Navbar currentPath="teams" />

      <main className="w-full pt-20 bg-surface flex-grow">
        <div className="flex flex-col w-full">
          {/* Header Banner */}
          <section className="w-full bg-surface-container-low py-space-xl px-gutter border-b border-surface-container-high">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-space-lg">
              <div>
                <span className="text-primary font-label-md uppercase tracking-wider block mb-1">
                  Participating Squads
                </span>
                <h1 className="text-headline-xxl uppercase text-on-surface">Team Directory</h1>
                <p className="text-body-lg text-on-surface-variant max-w-xl">
                  Explore full team profiles, rosters, statistics, and tournament history for Coal City Games 2026.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-space-sm bg-surface p-space-sm border border-surface-container-highest">
                <input
                  type="text"
                  placeholder="Search team name..."
                  value={searchTerm}
                  onChange={(e) => setSearchType(e.target.value)}
                  className="bg-surface-container-low text-on-surface px-3 py-2 text-body-sm border border-outline/30 focus:border-primary outline-none"
                />
                <select
                  value={sportFilter}
                  onChange={(e) => setSportFilter(e.target.value)}
                  className="bg-surface-container-low text-on-surface px-3 py-2 text-body-sm font-bold border border-outline/30 focus:border-primary outline-none"
                >
                  <option value="all">All Sports</option>
                  <option value="football">Football</option>
                  <option value="futsal">Futsal</option>
                </select>
              </div>
            </div>
          </section>

          {/* Teams Grid */}
          <section className="max-w-7xl mx-auto px-gutter py-space-xl w-full">
            <div className="flex justify-between items-center mb-space-md">
              <span className="text-body-sm text-on-surface-variant font-bold uppercase">
                Showing {filteredTeams.length} Teams
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
              {filteredTeams.map((team) => (
                <TeamCard key={team.id} team={team} />
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
