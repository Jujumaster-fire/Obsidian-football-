import React from 'react';
import { TournamentRule } from '@/lib/mock-data';

interface RuleCardProps {
  rule: TournamentRule;
}

export default function RuleCard({ rule }: RuleCardProps) {
  return (
    <div className="bg-surface-container-lowest border border-surface-container-highest p-space-lg flex flex-col justify-between">
      <div>
        <span className="text-xs text-primary font-label-md uppercase tracking-wider block mb-1">
          {rule.section}
        </span>
        <h3 className="font-headline-md text-on-surface uppercase mb-2">{rule.title}</h3>
        <p className="text-body-sm text-on-surface-variant mb-4">{rule.summary}</p>

        <ul className="space-y-2 border-t border-surface-container pt-3">
          {rule.details.map((detail, index) => (
            <li key={index} className="text-body-sm text-on-surface-variant flex items-start gap-2">
              <span className="material-symbols-outlined text-primary text-sm mt-0.5">check_circle</span>
              <span>{detail}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
