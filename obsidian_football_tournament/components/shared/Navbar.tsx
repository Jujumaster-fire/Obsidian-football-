"use client";

import React, { useState } from 'react';
import Link from 'next/link';

interface NavbarProps {
  currentPath?: string;
}

export default function Navbar({ currentPath = 'home' }: NavbarProps) {
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: 'home', href: '/' },
    { name: 'Competitions', path: 'competitions', href: '/competitions' },
    { name: 'Teams', path: 'teams', href: '/teams' },
    { name: 'News', path: 'news', href: '/news' },
  ];

  const adminItems = [
    { name: 'Tournament Creation', href: '/admin/tournament-creation' },
    { name: 'Registration', href: '/admin/registration' },
    { name: 'Scheduling', href: '/admin/scheduling' },
    { name: 'Rules', href: '/admin/rules' },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] border-b border-surface-container-high/50">
      <div className="h-20 max-w-7xl mx-auto px-gutter flex items-center justify-between">
        <Link href="/" className="flex items-center gap-space-md">
          <img
            alt="Obsidian Elite Logo"
            className="h-8 w-auto object-contain"
            src="/assets/stitch/Home_asset_1.png"
          />
          <span className="font-headline-lg text-primary uppercase tracking-tight">
            Obsidian Elite
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-space-lg">
          {navItems.map((item) => {
            const isActive = currentPath === item.path;
            return (
              <Link
                key={item.path}
                href={item.href}
                className={
                  isActive
                    ? "transition-colors bg-primary-container text-on-primary-container font-bold px-3 py-1 rounded"
                    : "text-body-md text-on-surface-variant hover:text-on-surface transition-colors"
                }
              >
                {item.name}
              </Link>
            );
          })}

          <div
            className="relative group"
            onMouseEnter={() => setIsAdminOpen(true)}
            onMouseLeave={() => setIsAdminOpen(false)}
          >
            <button className="flex items-center gap-space-xs text-body-md text-on-surface-variant hover:text-on-surface transition-colors py-2">
              <span>Admin Backend</span>
              <span className="material-symbols-outlined text-[18px]">expand_more</span>
            </button>

            {isAdminOpen && (
              <div className="absolute right-0 top-full w-56 bg-surface-container-lowest shadow-[0_4px_20px_rgba(0,0,0,0.08)] py-space-sm border border-surface-container-high rounded z-50">
                {adminItems.map((admin) => (
                  <Link
                    key={admin.href}
                    href={admin.href}
                    className="block px-space-md py-2 text-body-sm text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors"
                  >
                    {admin.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </nav>

        <div className="flex items-center gap-space-md">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
            <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
          </div>
        </div>
      </div>
    </header>
  );
}
