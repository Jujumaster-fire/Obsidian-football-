import React from 'react';
import Link from 'next/link';
import { Team } from '@/lib/mock-data';

interface TeamCardProps {
  team: Team;
}

export default function TeamCard({ team }: TeamCardProps) {
  return (
    <div className="bg-surface-container-lowest border border-surface-container-highest p-space-md flex flex-col justify-between hover:border-primary transition-colors group">
      <div>
        <div className="flex items-center justify-between mb-space-md">
          <div className="flex items-center gap-space-sm">
            <div className="w-12 h-12 bg-surface-container-high border border-outline flex items-center justify-center font-headline-lg text-primary font-bold">
              {team.logoText}
            </div>
            <div>
              <h3 className="font-headline-sm text-on-surface group-hover:text-primary transition-colors">
                {team.name}
              </h3>
              <span className="text-body-sm text-on-surface-variant">
                {team.sport} • {team.category}
              </span>
            </div>
          </div>
          <span className="bg-primary/10 text-primary border border-primary/20 text-xs font-bold px-2.5 py-1">
            Rank #{team.rank}
          </span>
        </div>

        <p className="text-body-sm text-on-surface-variant mb-space-md line-clamp-2">
          {team.description}
        </p>
      </div>

      <div>
        <div className="grid grid-cols-3 gap-space-xs text-center bg-surface-container-low p-2 mb-space-md border border-surface-container">
          <div>
            <span className="block text-xs text-on-surface-variant uppercase">Wins</span>
            <span className="font-bold text-tertiary">{team.wins}</span>
          </div>
          <div>
            <span className="block text-xs text-on-surface-variant uppercase">Draws</span>
            <span className="font-bold text-on-surface">{team.draws}</span>
          </div>
          <div>
            <span className="block text-xs text-on-surface-variant uppercase">Losses</span>
            <span className="font-bold text-error">{team.losses}</span>
          </div>
        </div>

        <Link
          href={`/teams/${team.id}`}
          className="block w-full text-center bg-surface-container-high hover:bg-primary hover:text-on-primary text-on-surface py-2 font-headline-sm uppercase text-xs transition-colors"
        >
          View Team Profile →
        </Link>
      </div>
    </div>
  );
}
