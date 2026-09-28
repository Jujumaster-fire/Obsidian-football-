"use client";

import React, { useState } from 'react';
import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';

export default function AdminTournamentCreationPage() {
  const [tournamentName, setTournamentName] = useState('Coal City Games 2026');
  const [selectedSport, setSelectedSport] = useState('football');
  const [division, setDivision] = useState('male');
  const [maxTeams, setMaxTeams] = useState(16);
  const [startDate, setStartDate] = useState('2026-10-15');
  const [submittedMessage, setSubmittedMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittedMessage(`Tournament "${tournamentName}" configured successfully for ${selectedSport.toUpperCase()} (${division})!`);
  };

  return (
    <div className="stitch-app flex flex-col min-h-screen">
      <Navbar currentPath="admin-tournament-creation" />

      <main className="w-full pt-20 bg-surface flex-grow">
        <div className="flex flex-col w-full">
          {/* Header Banner */}
          <section className="w-full bg-surface-container-low py-space-xl px-gutter border-b border-surface-container-high">
            <div className="max-w-7xl mx-auto">
              <span className="text-primary font-label-md uppercase tracking-wider block mb-1">
                Admin Control Panel
              </span>
              <h1 className="text-headline-xxl uppercase text-on-surface">Tournament Creation</h1>
              <p className="text-body-lg text-on-surface-variant max-w-2xl">
                Set up new championship brackets, configure game rules, and initialize competition divisions for Enugu 2026.
              </p>
            </div>
          </section>

          {/* Creation Form */}
          <section className="max-w-4xl mx-auto px-gutter py-space-xl w-full">
            {submittedMessage && (
              <div className="mb-space-md p-space-md bg-tertiary/10 border border-tertiary text-tertiary text-body-sm font-bold">
                {submittedMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="bg-surface-container-lowest border border-surface-container-highest p-space-xl flex flex-col gap-space-md">
              <h2 className="text-headline-lg uppercase text-on-surface pb-2 border-b border-surface-container">
                Tournament Parameters
              </h2>

              <div className="flex flex-col gap-1">
                <label className="text-label-md text-on-surface-variant uppercase">Tournament Title</label>
                <input
                  type="text"
                  value={tournamentName}
                  onChange={(e) => setTournamentName(e.target.value)}
                  className="bg-surface-container-low text-on-surface p-3 text-body-sm border border-outline/30 focus:border-primary outline-none"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                <div className="flex flex-col gap-1">
                  <label className="text-label-md text-on-surface-variant uppercase">Sport Category</label>
                  <select
                    value={selectedSport}
                    onChange={(e) => setSelectedSport(e.target.value)}
                    className="bg-surface-container-low text-on-surface p-3 text-body-sm border border-outline/30 focus:border-primary outline-none font-bold"
                  >
                    <option value="football">Football (Outdoor)</option>
                    <option value="futsal">Futsal (Indoor)</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-label-md text-on-surface-variant uppercase">Division / Gender</label>
                  <select
                    value={division}
                    onChange={(e) => setDivision(e.target.value)}
                    className="bg-surface-container-low text-on-surface p-3 text-body-sm border border-outline/30 focus:border-primary outline-none font-bold"
                  >
                    <option value="male">Male Division</option>
                    <option value="female">Female Division</option>
                    <option value="coed">Co-ed Division</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                <div className="flex flex-col gap-1">
                  <label className="text-label-md text-on-surface-variant uppercase">Max Team Capacity</label>
                  <input
                    type="number"
                    value={maxTeams}
                    onChange={(e) => setMaxTeams(Number(e.target.value))}
                    className="bg-surface-container-low text-on-surface p-3 text-body-sm border border-outline/30 focus:border-primary outline-none"
                    min={4}
                    max={64}
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-label-md text-on-surface-variant uppercase">Kickoff Start Date</label>
                  <input
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="bg-surface-container-low text-on-surface p-3 text-body-sm border border-outline/30 focus:border-primary outline-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="mt-space-md bg-primary text-on-primary py-4 font-headline-sm uppercase hover:bg-primary-container transition-colors shadow-sm"
              >
                Create Tournament Bracket
              </button>
            </form>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
