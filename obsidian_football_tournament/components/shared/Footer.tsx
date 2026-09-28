import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-surface-container-lowest border-t border-surface-container-high py-space-xl px-gutter text-on-surface-variant">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-space-lg mb-space-xl">
        <div className="flex flex-col gap-space-sm">
          <div className="flex items-center gap-space-md">
            <img alt="Obsidian Elite Logo" className="h-6 w-auto object-contain" src="/assets/stitch/Home_asset_1.png"/>
            <span className="font-headline-sm text-primary uppercase tracking-tight">Obsidian Elite</span>
          </div>
          <p className="text-body-sm text-on-surface-variant">
            Official sports management platform for Coal City Games 2026, Enugu, Nigeria.
          </p>
        </div>

        <div className="flex flex-col gap-space-xs">
          <span className="font-label-md text-on-surface uppercase mb-2">Quick Navigation</span>
          <Link href="/" className="text-body-sm hover:text-primary transition-colors">Home Portal</Link>
          <Link href="/competitions" className="text-body-sm hover:text-primary transition-colors">Competitions & Brackets</Link>
          <Link href="/teams" className="text-body-sm hover:text-primary transition-colors">Teams Directory</Link>
          <Link href="/news" className="text-body-sm hover:text-primary transition-colors">News & Announcements</Link>
        </div>

        <div className="flex flex-col gap-space-xs">
          <span className="font-label-md text-on-surface uppercase mb-2">Admin Management</span>
          <Link href="/admin/tournament-creation" className="text-body-sm hover:text-primary transition-colors">Tournament Creation</Link>
          <Link href="/admin/registration" className="text-body-sm hover:text-primary transition-colors">Team Registration</Link>
          <Link href="/admin/scheduling" className="text-body-sm hover:text-primary transition-colors">Scheduling & Matches</Link>
          <Link href="/admin/rules" className="text-body-sm hover:text-primary transition-colors">Rules & Governance</Link>
        </div>

        <div className="flex flex-col gap-space-xs">
          <span className="font-label-md text-on-surface uppercase mb-2">Host Location</span>
          <p className="text-body-sm">Nnamdi Azikiwe Sports Complex</p>
          <p className="text-body-sm">Enugu State, Nigeria</p>
          <p className="text-body-sm text-primary font-bold mt-2">Enugu 2026</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-space-md border-t border-surface-container flex flex-col md:flex-row justify-between items-center text-body-sm gap-space-sm">
        <p>© 2026 Coal City Games • Obsidian Elite Portal. All rights reserved.</p>
        <p className="text-xs">Built with Next.js App Router & Stitch UI</p>
      </div>
    </footer>
  );
}
