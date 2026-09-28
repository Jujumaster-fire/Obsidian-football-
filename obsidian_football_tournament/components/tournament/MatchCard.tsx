import React from 'react';
import Link from 'next/link';
import { Match } from '@/lib/mock-data';

interface MatchCardProps {
  match: Match;
}

export default function MatchCard({ match }: MatchCardProps) {
  const isLive = match.status === 'LIVE';
  const isUpcoming = match.status === 'Upcoming';

  return (
    <div className="bg-surface-container-lowest border border-surface-container-highest p-space-md flex flex-col justify-between hover:border-outline transition-colors">
      <div className="flex items-center justify-between mb-space-md">
        <span
          className={`${
            match.sport === 'football' ? 'bg-primary text-on-primary' : 'bg-secondary text-on-secondary'
          } text-[10px] uppercase font-label-md px-2 py-0.5`}
        >
          {match.sport} - {match.category}
        </span>
        {isLive ? (
          <span className="text-body-sm font-bold text-error animate-pulse">
            LIVE {match.statusDetail || ''}
          </span>
        ) : isUpcoming ? (
          <span className="text-body-sm text-primary font-label-md">
            {match.time || 'Upcoming'}
          </span>
        ) : (
          <span className="text-body-sm text-on-surface-variant uppercase font-label-md">
            Full Time
          </span>
        )}
      </div>

      <div className="flex items-center justify-between my-space-sm">
        <div className="flex items-center gap-space-sm">
          <div className="w-8 h-8 bg-surface-container flex items-center justify-center font-headline-sm">
            {match.teamA.code}
          </div>
          <span className="font-headline-sm">{match.teamA.name}</span>
        </div>
        <span className={`font-headline-lg ${isLive ? 'text-primary' : 'text-on-surface'}`}>
          {match.teamA.score !== undefined ? match.teamA.score : '-'}
        </span>
      </div>

      <div className="flex items-center justify-between my-space-sm">
        <div className="flex items-center gap-space-sm">
          <div className="w-8 h-8 bg-surface-container flex items-center justify-center font-headline-sm">
            {match.teamB.code}
          </div>
          <span className="font-headline-sm">{match.teamB.name}</span>
        </div>
        <span className="font-headline-lg text-on-surface">
          {match.teamB.score !== undefined ? match.teamB.score : '-'}
        </span>
      </div>

      <div className="border-t border-surface-container pt-space-sm mt-space-sm flex justify-between items-center text-body-sm text-on-surface-variant">
        <span>{match.location}</span>
        <Link href="/competitions" className="text-primary hover:underline font-bold uppercase text-xs">
          Match Centre →
        </Link>
      </div>
    </div>
  );
}
