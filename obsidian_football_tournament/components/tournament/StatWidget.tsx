import React from 'react';
import { StatItem } from '@/lib/mock-data';

interface StatWidgetProps {
  stat: StatItem;
}

export default function StatWidget({ stat }: StatWidgetProps) {
  return (
    <div className="bg-surface-container-lowest border border-surface-container-highest p-space-md flex items-center justify-between">
      <div>
        <span className="text-body-sm text-on-surface-variant uppercase font-label-md block mb-1">
          {stat.label}
        </span>
        <span className="font-headline-xxl text-primary block leading-none mb-1">
          {stat.value}
        </span>
        {stat.subtext && (
          <span className="text-xs text-on-surface-variant">{stat.subtext}</span>
        )}
      </div>
      {stat.icon && (
        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
          <span className="material-symbols-outlined text-2xl">{stat.icon}</span>
        </div>
      )}
    </div>
  );
}
