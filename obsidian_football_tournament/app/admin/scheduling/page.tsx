"use client";

import React, { useState } from 'react';
import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';
import { MOCK_SCHEDULE_ITEMS } from '@/lib/mock-data';

export default function AdminSchedulingPage() {
  const [scheduleItems, setScheduleItems] = useState(MOCK_SCHEDULE_ITEMS);
  const [filterField, setFilterField] = useState('All');

  const handleStatusChange = (id: string, newStatus: 'Scheduled' | 'In Progress' | 'Completed') => {
    setScheduleItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, status: newStatus } : item))
    );
  };

  const filteredSchedule = scheduleItems.filter((item) => {
    if (filterField !== 'All' && !item.field.includes(filterField)) return false;
    return true;
  });

  return (
    <div className="stitch-app flex flex-col min-h-screen">
      <Navbar currentPath="admin-scheduling" />

      <main className="w-full pt-20 bg-surface flex-grow">
        <div className="flex flex-col w-full">
          {/* Header Banner */}
          <section className="w-full bg-surface-container-low py-space-xl px-gutter border-b border-surface-container-high">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-space-lg">
              <div>
                <span className="text-primary font-label-md uppercase tracking-wider block mb-1">
                  Pitch & Operations Control
                </span>
                <h1 className="text-headline-xxl uppercase text-on-surface">Match Scheduling</h1>
                <p className="text-body-lg text-on-surface-variant max-w-xl">
                  Assign match venues, schedule kickoff times, assign official match referees, and monitor active pitch statuses.
                </p>
              </div>

              <div className="flex items-center gap-space-sm bg-surface p-space-sm border border-surface-container-highest">
                <span className="text-label-md text-on-surface-variant uppercase">Filter Venue:</span>
                <select
                  value={filterField}
                  onChange={(e) => setFilterField(e.target.value)}
                  className="bg-surface-container-low text-on-surface text-body-sm font-bold p-2 border border-outline/30 focus:border-primary outline-none"
                >
                  <option value="All">All Venues</option>
                  <option value="Pitch 1">Pitch 1</option>
                  <option value="Pitch 2">Pitch 2</option>
                  <option value="Indoor Arena">Indoor Arenas</option>
                </select>
              </div>
            </div>
          </section>

          {/* Schedule Table */}
          <section className="max-w-7xl mx-auto px-gutter py-space-xl w-full">
            <div className="bg-surface-container-lowest border border-surface-container-highest overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-surface-container-low border-b border-surface-container-high text-label-md text-on-surface-variant uppercase">
                    <th className="py-3 px-4">Time</th>
                    <th className="py-3 px-4">Venue / Pitch</th>
                    <th className="py-3 px-4">Matchup</th>
                    <th className="py-3 px-4">Division</th>
                    <th className="py-3 px-4">Referee</th>
                    <th className="py-3 px-4 text-center">Status</th>
                    <th className="py-3 px-4 text-center">Manage Status</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredSchedule.map((item) => (
                    <tr key={item.id} className="border-b border-surface-container-high/50 hover:bg-surface-container-low/50 text-body-sm">
                      <td className="py-3 px-4 font-bold text-primary">{item.time}</td>
                      <td className="py-3 px-4 text-on-surface">{item.field}</td>
                      <td className="py-3 px-4 font-bold text-on-surface">{item.matchName}</td>
                      <td className="py-3 px-4 text-on-surface-variant text-xs">{item.division}</td>
                      <td className="py-3 px-4 text-on-surface-variant text-xs">{item.referee}</td>
                      <td className="py-3 px-4 text-center">
                        <span
                          className={`text-xs font-bold px-2.5 py-1 ${
                            item.status === 'In Progress'
                              ? 'bg-error/10 text-error border border-error/20 animate-pulse'
                              : item.status === 'Completed'
                              ? 'bg-tertiary/10 text-tertiary border border-tertiary/20'
                              : 'bg-primary/10 text-primary border border-primary/20'
                          }`}
                        >
                          {item.status}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-center">
                        <select
                          value={item.status}
                          onChange={(e) => handleStatusChange(item.id, e.target.value as any)}
                          className="bg-surface-container-high text-on-surface text-xs p-1 border border-outline/30 focus:border-primary outline-none"
                        >
                          <option value="Scheduled">Scheduled</option>
                          <option value="In Progress">In Progress</option>
                          <option value="Completed">Completed</option>
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
