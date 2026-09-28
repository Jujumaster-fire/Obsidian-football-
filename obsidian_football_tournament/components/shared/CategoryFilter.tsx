"use client";

import React from 'react';

interface CategoryFilterProps {
  selectedSport: string;
  selectedCategory: string;
  onSportChange: (sport: string) => void;
  onCategoryChange: (category: string) => void;
}

export default function CategoryFilter({
  selectedSport,
  selectedCategory,
  onSportChange,
  onCategoryChange,
}: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap items-center gap-space-sm bg-surface p-space-sm shadow-sm border border-surface-container-highest">
      <div className="flex flex-col">
        <label className="text-label-md text-on-surface-variant uppercase mb-1">Sport</label>
        <select
          value={selectedSport}
          onChange={(e) => onSportChange(e.target.value)}
          className="bg-surface-container-low text-on-surface px-3 py-2 text-body-sm font-bold border border-outline/30 focus:border-primary outline-none"
        >
          <option value="all">All Sports</option>
          <option value="football">Football</option>
          <option value="futsal">Futsal</option>
        </select>
      </div>
      <div className="flex flex-col">
        <label className="text-label-md text-on-surface-variant uppercase mb-1">Category</label>
        <select
          value={selectedCategory}
          onChange={(e) => onCategoryChange(e.target.value)}
          className="bg-surface-container-low text-on-surface px-3 py-2 text-body-sm font-bold border border-outline/30 focus:border-primary outline-none"
        >
          <option value="all">All Categories</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
    </div>
  );
}
