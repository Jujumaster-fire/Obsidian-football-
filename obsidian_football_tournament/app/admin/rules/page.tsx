"use client";

import React, { useState } from 'react';
import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';
import RuleCard from '@/components/tournament/RuleCard';
import { MOCK_RULES } from '@/lib/mock-data';

export default function AdminRulesPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredRules = MOCK_RULES.filter((rule) => {
    if (searchTerm && !rule.title.toLowerCase().includes(searchTerm.toLowerCase()) && !rule.summary.toLowerCase().includes(searchTerm.toLowerCase())) {
      return false;
    }
    return true;
  });

  return (
    <div className="stitch-app flex flex-col min-h-screen">
      <Navbar currentPath="admin-rules" />

      <main className="w-full pt-20 bg-surface flex-grow">
        <div className="flex flex-col w-full">
          {/* Header Banner */}
          <section className="w-full bg-surface-container-low py-space-xl px-gutter border-b border-surface-container-high">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-space-lg">
              <div>
                <span className="text-primary font-label-md uppercase tracking-wider block mb-1">
                  Governance & Competition Standards
                </span>
                <h1 className="text-headline-xxl uppercase text-on-surface">Rules & Resources</h1>
                <p className="text-body-lg text-on-surface-variant max-w-2xl">
                  Official tournament rulebooks, match duration guidelines, eligibility requirements, and disciplinary procedures for Coal City Games 2026.
                </p>
              </div>

              <div className="bg-surface p-space-sm border border-surface-container-highest">
                <input
                  type="text"
                  placeholder="Search rule topics..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="bg-surface-container-low text-on-surface px-3 py-2 text-body-sm border border-outline/30 focus:border-primary outline-none"
                />
              </div>
            </div>
          </section>

          {/* Rules List */}
          <section className="max-w-7xl mx-auto px-gutter py-space-xl w-full">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
              {filteredRules.map((rule) => (
                <RuleCard key={rule.id} rule={rule} />
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
