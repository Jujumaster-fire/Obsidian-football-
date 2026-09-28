"use client";

import React, { useState } from 'react';
import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';
import { MOCK_REGISTRATIONS } from '@/lib/mock-data';

export default function AdminRegistrationPage() {
  const [registrations, setRegistrations] = useState(MOCK_REGISTRATIONS);
  const [filterStatus, setFilterStatus] = useState('All');

  const handleStatusChange = (id: string, newStatus: 'Approved' | 'Pending Review' | 'Payment Due' | 'Rejected') => {
    setRegistrations((prev) =>
      prev.map((reg) => (reg.id === id ? { ...reg, status: newStatus } : reg))
    );
  };

  const filteredRegistrations = registrations.filter((reg) => {
    if (filterStatus !== 'All' && reg.status !== filterStatus) return false;
    return true;
  });

  return (
    <div className="stitch-app flex flex-col min-h-screen">
      <Navbar currentPath="admin-registration" />

      <main className="w-full pt-20 bg-surface flex-grow">
        <div className="flex flex-col w-full">
          {/* Header Banner */}
          <section className="w-full bg-surface-container-low py-space-xl px-gutter border-b border-surface-container-high">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-space-lg">
              <div>
                <span className="text-primary font-label-md uppercase tracking-wider block mb-1">
                  Team Onboarding & Compliance
                </span>
                <h1 className="text-headline-xxl uppercase text-on-surface">Team Registrations</h1>
                <p className="text-body-lg text-on-surface-variant max-w-xl">
                  Review submitted team applications, verify roster limits, and approve squad entry for Coal City Games 2026.
                </p>
              </div>

              <div className="flex items-center gap-space-xs bg-surface p-space-xs border border-surface-container-highest">
                {['All', 'Approved', 'Pending Review', 'Payment Due'].map((status) => (
                  <button
                    key={status}
                    onClick={() => setFilterStatus(status)}
                    className={`px-3 py-1 text-xs font-bold uppercase transition-colors ${
                      filterStatus === status ? 'bg-primary text-on-primary' : 'text-on-surface-variant hover:text-on-surface'
                    }`}
                  >
                    {status}
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* Registrations List Table */}
          <section className="max-w-7xl mx-auto px-gutter py-space-xl w-full">
            <div className="bg-surface-container-lowest border border-surface-container-highest overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-surface-container-low border-b border-surface-container-high text-label-md text-on-surface-variant uppercase">
                    <th className="py-3 px-4">Application ID</th>
                    <th className="py-3 px-4">Team Name</th>
                    <th className="py-3 px-4">Division</th>
                    <th className="py-3 px-4">Coach</th>
                    <th className="py-3 px-4 text-center">Roster Size</th>
                    <th className="py-3 px-4 text-center">Submitted Date</th>
                    <th className="py-3 px-4 text-center">Status</th>
                    <th className="py-3 px-4 text-center">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredRegistrations.map((reg) => (
                    <tr key={reg.id} className="border-b border-surface-container-high/50 hover:bg-surface-container-low/50 text-body-sm">
                      <td className="py-3 px-4 font-mono text-xs text-on-surface-variant">{reg.id}</td>
                      <td className="py-3 px-4 font-bold text-on-surface">{reg.teamName}</td>
                      <td className="py-3 px-4 text-on-surface-variant">{reg.division}</td>
                      <td className="py-3 px-4 text-on-surface-variant">{reg.coach}</td>
                      <td className="py-3 px-4 text-center font-bold">{reg.rosterCount} Players</td>
                      <td className="py-3 px-4 text-center text-xs text-on-surface-variant">{reg.submittedDate}</td>
                      <td className="py-3 px-4 text-center">
                        <span
                          className={`text-xs font-bold px-2.5 py-1 ${
                            reg.status === 'Approved'
                              ? 'bg-tertiary/10 text-tertiary border border-tertiary/20'
                              : reg.status === 'Pending Review'
                              ? 'bg-primary/10 text-primary border border-primary/20'
                              : 'bg-error/10 text-error border border-error/20'
                          }`}
                        >
                          {reg.status}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-center">
                        <select
                          value={reg.status}
                          onChange={(e) => handleStatusChange(reg.id, e.target.value as any)}
                          className="bg-surface-container-high text-on-surface text-xs p-1 border border-outline/30 focus:border-primary outline-none"
                        >
                          <option value="Approved">Approve</option>
                          <option value="Pending Review">Pending</option>
                          <option value="Payment Due">Payment Due</option>
                          <option value="Rejected">Reject</option>
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
