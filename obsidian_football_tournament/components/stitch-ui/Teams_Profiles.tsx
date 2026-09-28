"use client";

import React from 'react';

export default function Teams_Profiles() {
  return (
    <div className="stitch-app">
      <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]"><div className="h-20 max-w-7xl mx-auto px-gutter flex items-center justify-between"><div className="flex items-center gap-space-md"><img alt="Obsidian Elite Logo" className="h-8 w-auto object-contain" src="/assets/stitch/Teams_Profiles_asset_1.png"/><span className="font-headline-lg text-primary uppercase tracking-tight">Obsidian Elite</span></div><nav className="hidden md:flex items-center gap-space-lg" data-active-classes="bg-primary-container text-on-primary-container font-bold px-3 py-1 rounded"><a className="text-body-md text-on-surface-variant hover:text-on-surface transition-colors" data-path="home" href="#">Home</a><a className="text-body-md text-on-surface-variant hover:text-on-surface transition-colors" data-path="competitions" href="#">Competitions</a><a aria-current="page" className="transition-colors bg-primary-container text-on-primary-container font-bold px-3 py-1 rounded" data-path="teams" href="#">Teams</a><a className="text-body-md text-on-surface-variant hover:text-on-surface transition-colors" data-path="news" href="#">News</a><div className="relative group"><button className="flex items-center gap-space-xs text-body-md text-on-surface-variant hover:text-on-surface transition-colors py-2"><span>Admin Backend</span><span className="material-symbols-outlined text-[18px]">expand_more</span></button><div className="absolute right-0 top-full hidden group-hover:block w-56 bg-surface-container-lowest shadow-[0_4px_20px_rgba(0,0,0,0.08)] py-space-sm"><a className="block px-space-md py-2 text-body-sm text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface" data-path="admin-tournament-creation" href="#">Tournament Creation</a><a className="block px-space-md py-2 text-body-sm text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface" data-path="admin-registration" href="#">Registration</a><a className="block px-space-md py-2 text-body-sm text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface" data-path="admin-scheduling" href="#">Scheduling</a><a className="block px-space-md py-2 text-body-sm text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface" data-path="admin-rules" href="#">Rules</a></div></div></nav><div className="flex items-center gap-space-md"><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center"><span className="material-symbols-outlined text-on-primary text-[18px]">person</span></div></div></div></header><main className="w-full pt-20 bg-surface"><div className="flex flex-col w-full bg-surface">

<section className="relative bg-surface-container-low py-12 px-gutter overflow-hidden">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-space-lg relative z-10">
<div>
<div className="flex items-center gap-2 mb-2">
<span className="inline-block w-3 h-3 bg-primary"></span>
<span className="font-label-md text-primary uppercase">Obsidian Elite 2026 Directory</span>
</div>
<h1 className="font-headline-xxl text-on-surface uppercase tracking-tight">Participating Teams</h1>
<p className="font-body-lg text-on-surface-variant max-w-xl mt-2">
          Explore elite squads, comprehensive tournament statistics, full rosters, and technical crews competing for the Enugu 2026 championship trophy.
        </p>
</div>
<div className="flex items-center gap-space-sm bg-surface p-2 shadow-sm">
<div className="text-right">
<span className="block font-headline-lg text-primary">32</span>
<span className="block font-label-md text-on-surface-variant uppercase">Active Squads</span>
</div>
<div className="w-px h-10 bg-surface-container-highest mx-2"></div>
<div className="text-right">
<span className="block font-headline-lg text-tertiary">768</span>
<span className="block font-label-md text-on-surface-variant uppercase">Registered Athletes</span>
</div>
</div>
</div>

<div className="absolute right-0 bottom-0 translate-x-1/4 translate-y-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none"></div>
</section>

<section className="max-w-7xl mx-auto px-gutter w-full my-space-lg">
<div className="bg-surface-container-low p-6 shadow-sm flex flex-col md:flex-row gap-space-md items-center justify-between">

<div className="relative w-full md:w-96">
<span className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-on-surface-variant">
<span className="material-symbols-outlined">search</span>
</span>
<input className="w-full bg-surface text-on-surface pl-12 pr-4 py-3 font-body-md focus:outline-none focus:ring-2 focus:ring-primary transition-all placeholder:text-on-surface-variant/60" id="team-search" placeholder="Search teams by name, city, or code..." type="text"/>
</div>

<div className="flex flex-wrap items-center gap-space-sm w-full md:w-auto">
<span className="font-label-md text-on-surface-variant uppercase mr-2 hidden lg:inline">Filter Category:</span>
<button className="team-filter-btn px-4 py-2 bg-primary text-on-primary font-headline-sm text-sm uppercase transition-all shadow-sm" data-filter="all">All Teams</button>
<button className="team-filter-btn px-4 py-2 bg-surface text-on-surface hover:bg-surface-container-highest font-headline-sm text-sm uppercase transition-all shadow-sm" data-filter="football">Pro Football</button>
<button className="team-filter-btn px-4 py-2 bg-surface text-on-surface hover:bg-surface-container-highest font-headline-sm text-sm uppercase transition-all shadow-sm" data-filter="youth">Under-21 Elite</button>
<button className="team-filter-btn px-4 py-2 bg-surface text-on-surface hover:bg-surface-container-highest font-headline-sm text-sm uppercase transition-all shadow-sm" data-filter="international">International</button>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-gutter w-full mb-space-xl">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg" id="teams-grid">

<div className="team-card bg-surface-container-low shadow-sm hover:shadow-md transition-all flex flex-col justify-between cursor-pointer group" data-category="football" data-name="Coal City Rangers">
<div className="p-6">
<div className="flex items-center justify-between mb-4">
<span className="bg-primary-fixed text-on-primary-fixed font-label-md px-3 py-1 uppercase">Pro Football</span>
<span className="font-headline-sm text-on-surface-variant">#01</span>
</div>
<div className="flex items-center gap-space-md mb-4">
<div className="w-16 h-16 bg-primary flex items-center justify-center text-on-primary font-headline-lg text-2xl shadow-inner">
              CCR
            </div>
<div>
<h3 className="font-headline-lg text-on-surface group-hover:text-primary transition-colors">Coal City Rangers</h3>
<p className="font-body-sm text-on-surface-variant">Enugu State, Nigeria</p>
</div>
</div>
<p className="font-body-md text-on-surface-variant line-clamp-2 mb-4">
            Defending champions known for relentless high-pressing attack and impenetrable defensive blocks at the Nnamdi Azikiwe Stadium.
          </p>
<div className="grid grid-cols-3 gap-2 bg-surface p-3 text-center">
<div>
<span className="block font-headline-sm text-on-surface">12</span>
<span className="block font-label-md text-on-surface-variant text-[10px] uppercase">Played</span>
</div>
<div>
<span className="block font-headline-sm text-tertiary">9</span>
<span className="block font-label-md text-on-surface-variant text-[10px] uppercase">Wins</span>
</div>
<div>
<span className="block font-headline-sm text-primary">28</span>
<span className="block font-label-md text-on-surface-variant text-[10px] uppercase">Goals</span>
</div>
</div>
</div>
<div className="bg-surface-container px-6 py-3 flex items-center justify-between text-body-sm font-bold text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
<span>View Detailed Profile</span>
<span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</div>
</div>

<div className="team-card bg-surface-container-low shadow-sm hover:shadow-md transition-all flex flex-col justify-between cursor-pointer group" data-category="international" data-name="Savanna Lions FC">
<div className="p-6">
<div className="flex items-center justify-between mb-4">
<span className="bg-secondary-fixed text-on-secondary-fixed font-label-md px-3 py-1 uppercase">International</span>
<span className="font-headline-sm text-on-surface-variant">#02</span>
</div>
<div className="flex items-center gap-space-md mb-4">
<div className="w-16 h-16 bg-secondary flex items-center justify-center text-on-secondary font-headline-lg text-2xl shadow-inner">
              SLF
            </div>
<div>
<h3 className="font-headline-lg text-on-surface group-hover:text-primary transition-colors">Savanna Lions FC</h3>
<p className="font-body-sm text-on-surface-variant">Kano, Nigeria</p>
</div>
</div>
<p className="font-body-md text-on-surface-variant line-clamp-2 mb-4">
            Tactical masterminds featuring blistering counter-attacks and disciplined defensive formations across continental fixtures.
          </p>
<div className="grid grid-cols-3 gap-2 bg-surface p-3 text-center">
<div>
<span className="block font-headline-sm text-on-surface">12</span>
<span className="block font-label-md text-on-surface-variant text-[10px] uppercase">Played</span>
</div>
<div>
<span className="block font-headline-sm text-tertiary">8</span>
<span className="block font-label-md text-on-surface-variant text-[10px] uppercase">Wins</span>
</div>
<div>
<span className="block font-headline-sm text-primary">24</span>
<span className="block font-label-md text-on-surface-variant text-[10px] uppercase">Goals</span>
</div>
</div>
</div>
<div className="bg-surface-container px-6 py-3 flex items-center justify-between text-body-sm font-bold text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
<span>View Detailed Profile</span>
<span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</div>
</div>

<div className="team-card bg-surface-container-low shadow-sm hover:shadow-md transition-all flex flex-col justify-between cursor-pointer group" data-category="youth" data-name="Atlantic Warriors U21">
<div className="p-6">
<div className="flex items-center justify-between mb-4">
<span className="bg-tertiary-fixed text-on-tertiary-fixed font-label-md px-3 py-1 uppercase">Under-21 Elite</span>
<span className="font-headline-sm text-on-surface-variant">#03</span>
</div>
<div className="flex items-center gap-space-md mb-4">
<div className="w-16 h-16 bg-tertiary-container flex items-center justify-center text-on-tertiary font-headline-lg text-2xl shadow-inner">
              AWU
            </div>
<div>
<h3 className="font-headline-lg text-on-surface group-hover:text-primary transition-colors">Atlantic Warriors U21</h3>
<p className="font-body-sm text-on-surface-variant">Port Harcourt, Nigeria</p>
</div>
</div>
<p className="font-body-md text-on-surface-variant line-clamp-2 mb-4">
            An explosive academy pipeline showcasing the finest emerging talent in Nigerian youth football with exceptional flair.
          </p>
<div className="grid grid-cols-3 gap-2 bg-surface p-3 text-center">
<div>
<span className="block font-headline-sm text-on-surface">11</span>
<span className="block font-label-md text-on-surface-variant text-[10px] uppercase">Played</span>
</div>
<div>
<span className="block font-headline-sm text-tertiary">7</span>
<span className="block font-label-md text-on-surface-variant text-[10px] uppercase">Wins</span>
</div>
<div>
<span className="block font-headline-sm text-primary">21</span>
<span className="block font-label-md text-on-surface-variant text-[10px] uppercase">Goals</span>
</div>
</div>
</div>
<div className="bg-surface-container px-6 py-3 flex items-center justify-between text-body-sm font-bold text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
<span>View Detailed Profile</span>
<span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</div>
</div>

<div className="team-card bg-surface-container-low shadow-sm hover:shadow-md transition-all flex flex-col justify-between cursor-pointer group" data-category="football" data-name="Eko Titanium FC">
<div className="p-6">
<div className="flex items-center justify-between mb-4">
<span className="bg-primary-fixed text-on-primary-fixed font-label-md px-3 py-1 uppercase">Pro Football</span>
<span className="font-headline-sm text-on-surface-variant">#04</span>
</div>
<div className="flex items-center gap-space-md mb-4">
<div className="w-16 h-16 bg-primary-container flex items-center justify-center text-on-primary-container font-headline-lg text-2xl shadow-inner">
              ETF
            </div>
<div>
<h3 className="font-headline-lg text-on-surface group-hover:text-primary transition-colors">Eko Titanium FC</h3>
<p className="font-body-sm text-on-surface-variant">Lagos, Nigeria</p>
</div>
</div>
<p className="font-body-md text-on-surface-variant line-clamp-2 mb-4">
            Metropolitan powerhouse known for possession-heavy dominance and world-class midfield control.
          </p>
<div className="grid grid-cols-3 gap-2 bg-surface p-3 text-center">
<div>
<span className="block font-headline-sm text-on-surface">12</span>
<span className="block font-label-md text-on-surface-variant text-[10px] uppercase">Played</span>
</div>
<div>
<span className="block font-headline-sm text-tertiary">6</span>
<span className="block font-label-md text-on-surface-variant text-[10px] uppercase">Wins</span>
</div>
<div>
<span className="block font-headline-sm text-primary">19</span>
<span className="block font-label-md text-on-surface-variant text-[10px] uppercase">Goals</span>
</div>
</div>
</div>
<div className="bg-surface-container px-6 py-3 flex items-center justify-between text-body-sm font-bold text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
<span>View Detailed Profile</span>
<span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</div>
</div>

<div className="team-card bg-surface-container-low shadow-sm hover:shadow-md transition-all flex flex-col justify-between cursor-pointer group" data-category="international" data-name="Zaria Citadel SC">
<div className="p-6">
<div className="flex items-center justify-between mb-4">
<span className="bg-secondary-fixed text-on-secondary-fixed font-label-md px-3 py-1 uppercase">International</span>
<span className="font-headline-sm text-on-surface-variant">#05</span>
</div>
<div className="flex items-center gap-space-md mb-4">
<div className="w-16 h-16 bg-secondary flex items-center justify-center text-on-secondary font-headline-lg text-2xl shadow-inner">
              ZCS
            </div>
<div>
<h3 className="font-headline-lg text-on-surface group-hover:text-primary transition-colors">Zaria Citadel SC</h3>
<p className="font-body-sm text-on-surface-variant">Kaduna, Nigeria</p>
</div>
</div>
<p className="font-body-md text-on-surface-variant line-clamp-2 mb-4">
            Steeped in historical tradition with unmatched defensive solidarity and fierce competitive spirit.
          </p>
<div className="grid grid-cols-3 gap-2 bg-surface p-3 text-center">
<div>
<span className="block font-headline-sm text-on-surface">11</span>
<span className="block font-label-md text-on-surface-variant text-[10px] uppercase">Played</span>
</div>
<div>
<span className="block font-headline-sm text-tertiary">6</span>
<span className="block font-label-md text-on-surface-variant text-[10px] uppercase">Wins</span>
</div>
<div>
<span className="block font-headline-sm text-primary">17</span>
<span className="block font-label-md text-on-surface-variant text-[10px] uppercase">Goals</span>
</div>
</div>
</div>
<div className="bg-surface-container px-6 py-3 flex items-center justify-between text-body-sm font-bold text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
<span>View Detailed Profile</span>
<span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</div>
</div>

<div className="team-card bg-surface-container-low shadow-sm hover:shadow-md transition-all flex flex-col justify-between cursor-pointer group" data-category="youth" data-name="Benue Titans U21">
<div className="p-6">
<div className="flex items-center justify-between mb-4">
<span className="bg-tertiary-fixed text-on-tertiary-fixed font-label-md px-3 py-1 uppercase">Under-21 Elite</span>
<span className="font-headline-sm text-on-surface-variant">#06</span>
</div>
<div className="flex items-center gap-space-md mb-4">
<div className="w-16 h-16 bg-tertiary flex items-center justify-center text-on-tertiary font-headline-lg text-2xl shadow-inner">
              BTU
            </div>
<div>
<h3 className="font-headline-lg text-on-surface group-hover:text-primary transition-colors">Benue Titans U21</h3>
<p className="font-body-sm text-on-surface-variant">Makurdi, Nigeria</p>
</div>
</div>
<p className="font-body-md text-on-surface-variant line-clamp-2 mb-4">
            Physical, energetic, and highly ambitious young squad pushing boundaries in tournament matches.
          </p>
<div className="grid grid-cols-3 gap-2 bg-surface p-3 text-center">
<div>
<span className="block font-headline-sm text-on-surface">12</span>
<span className="block font-label-md text-on-surface-variant text-[10px] uppercase">Played</span>
</div>
<div>
<span className="block font-headline-sm text-tertiary">5</span>
<span className="block font-label-md text-on-surface-variant text-[10px] uppercase">Wins</span>
</div>
<div>
<span className="block font-headline-sm text-primary">16</span>
<span className="block font-label-md text-on-surface-variant text-[10px] uppercase">Goals</span>
</div>
</div>
</div>
<div className="bg-surface-container px-6 py-3 flex items-center justify-between text-body-sm font-bold text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
<span>View Detailed Profile</span>
<span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</div>
</div>
</div>
</section>

<div className="fixed inset-0 z-50 bg-inverse-surface/60 backdrop-blur-sm hidden items-center justify-center p-4 overflow-y-auto" id="team-profile-modal">
<div className="bg-surface max-w-4xl w-full max-h-[921px] overflow-y-auto shadow-2xl relative flex flex-col my-auto">

<div className="relative bg-surface-container-low p-8 border-b border-surface-container-highest">
<button className="absolute top-6 right-6 w-10 h-10 bg-surface flex items-center justify-center text-on-surface hover:bg-primary hover:text-on-primary transition-colors shadow-sm">
<span className="material-symbols-outlined">close</span>
</button>
<div className="flex flex-col md:flex-row items-start md:items-center gap-space-lg">
<div className="w-24 h-24 bg-primary text-on-primary flex items-center justify-center font-headline-xxl text-4xl shadow-md" id="modal-team-logo">
            CCR
          </div>
<div>
<div className="flex items-center gap-3 mb-1">
<span className="bg-primary-fixed text-on-primary-fixed font-label-md px-3 py-1 uppercase" id="modal-team-category">Pro Football</span>
<span className="font-body-sm text-on-surface-variant" id="modal-team-location">Enugu State, Nigeria</span>
</div>
<h2 className="font-headline-xxl text-on-surface uppercase" id="modal-team-name">Coal City Rangers</h2>
<p className="font-body-md text-on-surface-variant mt-1">Official Team Dossier & Tournament Performance Analytics</p>
</div>
</div>
</div>

<div className="bg-surface-container px-8 flex border-b border-surface-container-highest">
<button className="py-4 px-6 font-headline-sm text-sm uppercase text-primary border-b-2 border-primary transition-all" id="tab-btn-stats">Tournament Stats</button>
<button className="py-4 px-6 font-headline-sm text-sm uppercase text-on-surface-variant hover:text-on-surface transition-all" id="tab-btn-roster">Squad Roster</button>
<button className="py-4 px-6 font-headline-sm text-sm uppercase text-on-surface-variant hover:text-on-surface transition-all" id="tab-btn-staff">Coaching Staff</button>
</div>

<div className="p-8">

<div className="space-y-space-lg" id="tab-content-stats">
<div className="grid grid-cols-2 md:grid-cols-4 gap-space-md">
<div className="bg-surface-container-low p-6 text-center shadow-sm">
<span className="block font-headline-xxl text-on-surface" id="stat-played">12</span>
<span className="block font-label-md text-on-surface-variant uppercase mt-1">Matches Played</span>
</div>
<div className="bg-surface-container-low p-6 text-center shadow-sm">
<span className="block font-headline-xxl text-tertiary" id="stat-wins">9</span>
<span className="block font-label-md text-on-surface-variant uppercase mt-1">Victories</span>
</div>
<div className="bg-surface-container-low p-6 text-center shadow-sm">
<span className="block font-headline-xxl text-primary" id="stat-goals">28</span>
<span className="block font-label-md text-on-surface-variant uppercase mt-1">Goals Scored</span>
</div>
<div className="bg-surface-container-low p-6 text-center shadow-sm">
<span className="block font-headline-xxl text-secondary" id="stat-points">27</span>
<span className="block font-label-md text-on-surface-variant uppercase mt-1">League Points</span>
</div>
</div>
<div className="bg-surface-container-low p-6 shadow-sm">
<h4 className="font-headline-md text-on-surface uppercase mb-4">Recent Form & Trajectory</h4>
<div className="flex items-center gap-3 mb-4">
<span className="w-8 h-8 bg-tertiary text-on-tertiary flex items-center justify-center font-bold text-sm">W</span>
<span className="w-8 h-8 bg-tertiary text-on-tertiary flex items-center justify-center font-bold text-sm">W</span>
<span className="w-8 h-8 bg-surface-container-highest text-on-surface flex items-center justify-center font-bold text-sm">D</span>
<span className="w-8 h-8 bg-tertiary text-on-tertiary flex items-center justify-center font-bold text-sm">W</span>
<span className="w-8 h-8 bg-primary text-on-primary flex items-center justify-center font-bold text-sm">L</span>
<span className="text-body-sm text-on-surface-variant ml-2">(Last 5 matches)</span>
</div>
<div className="w-full bg-surface-container-highest h-3 overflow-hidden">
<div className="bg-primary h-full" style={{"width":"75%"}}></div>
</div>
<div className="flex justify-between text-body-sm text-on-surface-variant mt-2">
<span>Tournament Win Rate: 75%</span>
<span>Clean Sheets: 6 Matches</span>
</div>
</div>
</div>

<div className="hidden space-y-4" id="tab-content-roster">
<div className="flex justify-between items-center mb-2">
<h4 className="font-headline-md text-on-surface uppercase">Active Squad Roster (2026 Season)</h4>
<span className="font-body-sm text-on-surface-variant">Total: 24 Players Registered</span>
</div>
<div className="divide-y divide-surface-container-highest bg-surface-container-low shadow-sm">
<div className="p-4 flex items-center justify-between hover:bg-surface transition-colors">
<div className="flex items-center gap-4">
<span className="font-headline-sm text-primary w-8">#10</span>
<div>
<span className="block font-body-lg font-bold text-on-surface">Chinedu Okafor</span>
<span className="block font-body-sm text-on-surface-variant">Forward / Captain</span>
</div>
</div>
<div className="text-right">
<span className="block font-headline-sm text-on-surface">11 Goals</span>
<span className="block font-label-md text-on-surface-variant uppercase">4 Assists</span>
</div>
</div>
<div className="p-4 flex items-center justify-between hover:bg-surface transition-colors">
<div className="flex items-center gap-4">
<span className="font-headline-sm text-primary w-8">#1</span>
<div>
<span className="block font-body-lg font-bold text-on-surface">Ikechukwu Ezenwa</span>
<span className="block font-body-sm text-on-surface-variant">Goalkeeper</span>
</div>
</div>
<div className="text-right">
<span className="block font-headline-sm text-on-surface">6 Clean Sheets</span>
<span className="block font-label-md text-on-surface-variant uppercase">12 Apps</span>
</div>
</div>
<div className="p-4 flex items-center justify-between hover:bg-surface transition-colors">
<div className="flex items-center gap-4">
<span className="font-headline-sm text-primary w-8">#8</span>
<div>
<span className="block font-body-lg font-bold text-on-surface">Musa Mohammed</span>
<span className="block font-body-sm text-on-surface-variant">Midfielder</span>
</div>
</div>
<div className="text-right">
<span className="block font-headline-sm text-on-surface">3 Goals</span>
<span className="block font-label-md text-on-surface-variant uppercase">7 Assists</span>
</div>
</div>
<div className="p-4 flex items-center justify-between hover:bg-surface transition-colors">
<div className="flex items-center gap-4">
<span className="font-headline-sm text-primary w-8">#5</span>
<div>
<span className="block font-body-lg font-bold text-on-surface">Uche Agbo</span>
<span className="block font-body-sm text-on-surface-variant">Defender</span>
</div>
</div>
<div className="text-right">
<span className="block font-headline-sm text-on-surface">1 Goal</span>
<span className="block font-label-md text-on-surface-variant uppercase">11 Apps</span>
</div>
</div>
</div>
</div>

<div className="hidden space-y-4" id="tab-content-staff">
<h4 className="font-headline-md text-on-surface uppercase mb-2">Technical & Coaching Crew</h4>
<div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
<div className="bg-surface-container-low p-6 shadow-sm flex items-center gap-4">
<div className="w-12 h-12 bg-primary text-on-primary flex items-center justify-center font-headline-md">HC</div>
<div>
<h5 className="font-headline-md text-on-surface" id="modal-coach-name">Coach Emeka Okoro</h5>
<p className="font-body-sm text-on-surface-variant">Head Manager / Tactician</p>
</div>
</div>
<div className="bg-surface-container-low p-6 shadow-sm flex items-center gap-4">
<div className="w-12 h-12 bg-secondary text-on-secondary flex items-center justify-center font-headline-md">AC</div>
<div>
<h5 className="font-headline-md text-on-surface">Sunday Oliseh</h5>
<p className="font-body-sm text-on-surface-variant">Assistant Coach</p>
</div>
</div>
<div className="bg-surface-container-low p-6 shadow-sm flex items-center gap-4">
<div className="w-12 h-12 bg-tertiary text-on-tertiary flex items-center justify-center font-headline-md">PC</div>
<div>
<h5 className="font-headline-md text-on-surface">Dr. Babatunde Fashola</h5>
<p className="font-body-sm text-on-surface-variant">Head Team Physician</p>
</div>
</div>
<div className="bg-surface-container-low p-6 shadow-sm flex items-center gap-4">
<div className="w-12 h-12 bg-surface-container-highest text-on-surface flex items-center justify-center font-headline-md">GK</div>
<div>
<h5 className="font-headline-md text-on-surface">Peter Rufai</h5>
<p className="font-body-sm text-on-surface-variant">Goalkeeping Trainer</p>
</div>
</div>
</div>
</div>
</div>

<div className="bg-surface-container-low p-6 border-t border-surface-container-highest flex justify-end gap-space-sm">
<button className="px-6 py-3 bg-surface text-on-surface font-headline-sm uppercase hover:bg-surface-container-highest transition-colors">Close Dossier</button>
</div>
</div>
</div>


</div></main><footer className="w-full bg-surface-container-low py-space-xl"><div className="max-w-7xl mx-auto px-gutter text-center text-on-surface-variant text-body-sm">© 2026 Obsidian Elite Football Portal. Coal City Games. All rights reserved.</div></footer>
    </div>
  );
}
