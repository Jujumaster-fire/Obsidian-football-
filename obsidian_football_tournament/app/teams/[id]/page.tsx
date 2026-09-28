"use client";

import React from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';
import { MOCK_TEAMS } from '@/lib/mock-data';

export default function TeamDetailPage() {
  const params = useParams();
  const teamId = params?.id as string;

  const team = MOCK_TEAMS.find((t) => t.id === teamId) || MOCK_TEAMS[0];

  return (
    <div className="stitch-app flex flex-col min-h-screen">
      <Navbar currentPath="teams" />

      <main className="w-full pt-20 bg-surface flex-grow">
        <div className="flex flex-col w-full">
          {/* Header Profile Section */}
          <section className="w-full bg-surface-container-low py-space-xl px-gutter border-b border-surface-container-high">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-space-lg">
              <div className="flex items-center gap-space-md">
                <div className="w-20 h-20 bg-primary/20 border-2 border-primary text-primary font-bold text-3xl flex items-center justify-center">
                  {team.logoText}
                </div>
                <div>
                  <div className="flex items-center gap-space-xs text-xs font-bold text-primary uppercase mb-1">
                    <span>{team.sport}</span> • <span>{team.category}</span>
                  </div>
                  <h1 className="text-headline-xxl uppercase text-on-surface">{team.name}</h1>
                  <p className="text-body-sm text-on-surface-variant max-w-xl">{team.description}</p>
                </div>
              </div>

              <div className="flex items-center gap-space-md bg-surface p-space-md border border-surface-container-highest">
                <div className="text-center px-3">
                  <span className="block text-xs text-on-surface-variant uppercase">Rank</span>
                  <span className="text-headline-lg text-primary font-bold">#{team.rank}</span>
                </div>
                <div className="text-center px-3 border-l border-surface-container">
                  <span className="block text-xs text-on-surface-variant uppercase">Points</span>
                  <span className="text-headline-lg text-on-surface font-bold">{team.points}</span>
                </div>
                <div className="text-center px-3 border-l border-surface-container">
                  <span className="block text-xs text-on-surface-variant uppercase">Record</span>
                  <span className="text-body-md text-tertiary font-bold">{team.wins}W - {team.draws}D - {team.losses}L</span>
                </div>
              </div>
            </div>
          </section>

          {/* Team Staff & Roster */}
          <section className="max-w-7xl mx-auto px-gutter py-space-xl w-full grid grid-cols-1 lg:grid-cols-12 gap-space-lg">
            {/* Sidebar Details */}
            <div className="lg:col-span-4 flex flex-col gap-space-md">
              <div className="bg-surface-container-lowest border border-surface-container-highest p-space-md">
                <h3 className="font-headline-sm uppercase text-on-surface mb-space-md pb-2 border-b border-surface-container">
                  Staff Leadership
                </h3>
                <div className="space-y-3">
                  <div>
                    <span className="text-xs text-on-surface-variant uppercase block">Head Coach</span>
                    <span className="font-bold text-on-surface">{team.coach}</span>
                  </div>
                  <div>
                    <span className="text-xs text-on-surface-variant uppercase block">Team Captain</span>
                    <span className="font-bold text-on-surface">{team.captain}</span>
                  </div>
                </div>
              </div>

              <Link
                href="/teams"
                className="text-center bg-surface-container-high hover:bg-surface-container-highest text-on-surface py-3 font-headline-sm uppercase text-xs transition-colors block"
              >
                ← Back to All Teams
              </Link>
            </div>

            {/* Roster Table */}
            <div className="lg:col-span-8">
              <div className="bg-surface-container-lowest border border-surface-container-highest overflow-x-auto">
                <div className="p-space-md border-b border-surface-container flex justify-between items-center">
                  <h3 className="font-headline-sm uppercase text-on-surface">Squad Roster ({team.roster.length})</h3>
                </div>
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-surface-container-low border-b border-surface-container-high text-label-md text-on-surface-variant uppercase">
                      <th className="py-3 px-4 text-center">#</th>
                      <th className="py-3 px-4">Player Name</th>
                      <th className="py-3 px-4">Position</th>
                      <th className="py-3 px-4 text-center">Goals</th>
                      <th className="py-3 px-4 text-center">Yellow Cards</th>
                    </tr>
                  </thead>
                  <tbody>
                    {team.roster.map((player) => (
                      <tr key={player.id} className="border-b border-surface-container-high/50 hover:bg-surface-container-low/50 text-body-sm">
                        <td className="py-3 px-4 font-bold text-center text-primary">{player.number}</td>
                        <td className="py-3 px-4 font-bold text-on-surface">{player.name}</td>
                        <td className="py-3 px-4 text-on-surface-variant">{player.position}</td>
                        <td className="py-3 px-4 text-center font-bold text-tertiary">{player.goals}</td>
                        <td className="py-3 px-4 text-center font-bold text-error">{player.yellowCards}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
