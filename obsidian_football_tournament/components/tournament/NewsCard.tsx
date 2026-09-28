import React from 'react';
import Link from 'next/link';
import { NewsArticle } from '@/lib/mock-data';

interface NewsCardProps {
  article: NewsArticle;
}

export default function NewsCard({ article }: NewsCardProps) {
  return (
    <div className="bg-surface-container-lowest border border-surface-container-highest p-space-md flex flex-col justify-between hover:border-outline transition-colors">
      <div>
        <div className="flex items-center justify-between text-xs text-on-surface-variant mb-2">
          <span className="text-primary font-bold uppercase tracking-wider">{article.category}</span>
          <span>{article.date}</span>
        </div>
        <h3 className="font-headline-sm text-on-surface mb-2 hover:text-primary transition-colors">
          <Link href="/news">{article.title}</Link>
        </h3>
        <p className="text-body-sm text-on-surface-variant mb-4">
          {article.summary}
        </p>
      </div>

      <div className="flex items-center justify-between pt-space-sm border-t border-surface-container text-xs text-on-surface-variant">
        <span>By {article.author}</span>
        <span className="text-primary font-bold">{article.readTime}</span>
      </div>
    </div>
  );
}
