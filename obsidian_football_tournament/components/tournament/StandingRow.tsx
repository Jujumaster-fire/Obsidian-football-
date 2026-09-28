import React from 'react';
import { Standing } from '@/lib/mock-data';

interface StandingRowProps {
  standing: Standing;
}

export default function StandingRow({ standing }: StandingRowProps) {
  return (
    <tr className="border-b border-surface-container-high/50 hover:bg-surface-container-low/50 transition-colors text-body-sm">
      <td className="py-3 px-4 font-bold text-center text-primary">{standing.rank}</td>
      <td className="py-3 px-4 font-bold flex items-center gap-space-xs">
        <span className="w-6 h-6 bg-surface-container flex items-center justify-center text-xs font-bold">
          {standing.code}
        </span>
        {standing.team}
      </td>
      <td className="py-3 px-4 text-center">{standing.played}</td>
      <td className="py-3 px-4 text-center text-tertiary font-bold">{standing.won}</td>
      <td className="py-3 px-4 text-center">{standing.drawn}</td>
      <td className="py-3 px-4 text-center text-error">{standing.lost}</td>
      <td className="py-3 px-4 text-center">{standing.gd}</td>
      <td className="py-3 px-4 text-center font-bold text-primary">{standing.points}</td>
    </tr>
  );
}
