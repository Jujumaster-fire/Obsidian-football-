import React from 'react';

export default function Home() {
  return (
    <div className="stitch-app">
      <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]"><div className="h-20 max-w-7xl mx-auto px-gutter flex items-center justify-between"><div className="flex items-center gap-space-md"><img alt="Obsidian Elite Logo" className="h-8 w-auto object-contain" src="/assets/stitch/Home_asset_1.png"/><span className="font-headline-lg text-primary uppercase tracking-tight">Obsidian Elite</span></div><nav className="hidden md:flex items-center gap-space-lg" data-active-classes="bg-primary-container text-on-primary-container font-bold px-3 py-1 rounded"><a aria-current="page" className="transition-colors bg-primary-container text-on-primary-container font-bold px-3 py-1 rounded" data-path="home" href="#">Home</a><a className="text-body-md text-on-surface-variant hover:text-on-surface transition-colors" data-path="competitions" href="#">Competitions</a><a className="text-body-md text-on-surface-variant hover:text-on-surface transition-colors" data-path="teams" href="#">Teams</a><a className="text-body-md text-on-surface-variant hover:text-on-surface transition-colors" data-path="news" href="#">News</a><div className="relative group"><button className="flex items-center gap-space-xs text-body-md text-on-surface-variant hover:text-on-surface transition-colors py-2"><span>Admin Backend</span><span className="material-symbols-outlined text-[18px]">expand_more</span></button><div className="absolute right-0 top-full hidden group-hover:block w-56 bg-surface-container-lowest shadow-[0_4px_20px_rgba(0,0,0,0.08)] py-space-sm"><a className="block px-space-md py-2 text-body-sm text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface" data-path="admin-tournament-creation" href="#">Tournament Creation</a><a className="block px-space-md py-2 text-body-sm text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface" data-path="admin-registration" href="#">Registration</a><a className="block px-space-md py-2 text-body-sm text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface" data-path="admin-scheduling" href="#">Scheduling</a><a className="block px-space-md py-2 text-body-sm text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface" data-path="admin-rules" href="#">Rules</a></div></div></nav><div className="flex items-center gap-space-md"><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center"><span className="material-symbols-outlined text-on-primary text-[18px]">person</span></div></div></div></header><main className="w-full pt-20 bg-surface"><div className="flex flex-col w-full">

<section className="relative w-full bg-surface-container-low overflow-hidden">
<div className="absolute inset-0 opacity-10 pointer-events-none flex items-center justify-center">
<span className="font-headline-xxl text-[20vw] leading-none uppercase text-primary select-none">ENUGU 2026</span>
</div>
<div className="max-w-7xl mx-auto px-gutter py-space-xl relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center min-h-[500px]">
<div className="lg:col-span-7 flex flex-col items-start gap-space-md">
<div className="inline-flex items-center gap-space-sm bg-primary-container text-on-primary-container px-3 py-1 font-label-md uppercase tracking-wider">
<span className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span>
          Coal City Games 2026 • Official Portal
        </div>
<h1 className="font-headline-xxl text-on-surface uppercase tracking-tight">
          Obsidian Elite <br/><span className="text-primary">Football Portal</span>
</h1>
<p className="font-body-lg text-on-surface-variant max-w-xl">
          The ultimate battlefield for elite collegiate and independent football squads. Track live scores, advanced stats, and master the tournament brackets for Enugu 2026.
        </p>
<div className="flex flex-wrap items-center gap-space-md pt-space-sm">
<a className="bg-primary-container hover:bg-primary text-on-primary-container hover:text-on-primary font-headline-sm uppercase px-8 py-4 transition-all duration-200 shadow-sm flex items-center gap-space-sm" data-path="admin-registration" href="#">
<span>Register Your Team</span>
<span className="material-symbols-outlined">arrow_forward</span>
</a>
<a className="bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-headline-sm uppercase px-8 py-4 transition-all duration-200" data-path="competitions" href="#">
            View Brackets
          </a>
</div>
</div>
<div className="lg:col-span-5 relative">
<div className="w-full h-[400px] bg-cover bg-center shadow-lg relative" data-alt="Dynamic action shot of African athletes playing high-stakes competitive football in a modern stadium in Enugu, glowing under floodlights with high contrast and sharp athletic gear." style={{"backgroundImage":"url('https"}}>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-space-lg text-white">
<span className="text-xs uppercase font-label-md text-tertiary-fixed-dim">Matchday 04 Highlights</span>
<h3 className="font-headline-lg uppercase">Rangers International vs Coal City FC</h3>
<p className="font-body-sm text-surface-container">Full Time • Nnamdi Azikiwe Stadium</p>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-gutter py-space-xl w-full">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-space-lg gap-space-sm">
<div>
<span className="text-primary font-label-md uppercase tracking-wider">Real-Time Data Feed</span>
<h2 className="font-headline-xl uppercase text-on-surface">Latest Results & Fixtures</h2>
</div>
<div className="flex items-center gap-space-sm">
<span className="inline-block w-3 h-3 bg-tertiary-container"></span>
<span className="font-label-md uppercase text-on-surface-variant">Live Matches Active</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">

<div className="bg-surface-container-lowest border border-surface-container-highest p-space-md flex flex-col justify-between hover:border-outline transition-colors">
<div className="flex items-center justify-between mb-space-md">
<span className="bg-primary text-on-primary text-[10px] uppercase font-label-md px-2 py-0.5">Football - Male</span>
<span className="text-body-sm font-bold text-error animate-pulse">LIVE 78'</span>
</div>
<div className="flex items-center justify-between my-space-sm">
<div className="flex items-center gap-space-sm">
<div className="w-8 h-8 bg-surface-container flex items-center justify-center font-headline-sm">EN</div>
<span className="font-headline-sm">Enugu Lions</span>
</div>
<span className="font-headline-lg text-primary">2</span>
</div>
<div className="flex items-center justify-between my-space-sm">
<div className="flex items-center gap-space-sm">
<div className="w-8 h-8 bg-surface-container flex items-center justify-center font-headline-sm">AB</div>
<span className="font-headline-sm">Abuja Titans</span>
</div>
<span className="font-headline-lg text-on-surface">1</span>
</div>
<div className="border-t border-surface-container pt-space-sm mt-space-sm flex justify-between items-center text-body-sm text-on-surface-variant">
<span>Pitch 2, Nnamdi Azikiwe Complex</span>
<a className="text-primary hover:underline font-bold uppercase text-xs" data-path="competitions" href="#">Match Centre →</a>
</div>
</div>

<div className="bg-surface-container-lowest border border-surface-container-highest p-space-md flex flex-col justify-between hover:border-outline transition-colors">
<div className="flex items-center justify-between mb-space-md">
<span className="bg-secondary text-on-secondary text-[10px] uppercase font-label-md px-2 py-0.5">Futsal - Female</span>
<span className="text-body-sm text-on-surface-variant uppercase font-label-md">Full Time</span>
</div>
<div className="flex items-center justify-between my-space-sm">
<div className="flex items-center gap-space-sm">
<div className="w-8 h-8 bg-surface-container flex items-center justify-center font-headline-sm">CC</div>
<span className="font-headline-sm">Coal City Queens</span>
</div>
<span className="font-headline-lg text-on-surface">4</span>
</div>
<div className="flex items-center justify-between my-space-sm">
<div className="flex items-center gap-space-sm">
<div className="w-8 h-8 bg-surface-container flex items-center justify-center font-headline-sm">PH</div>
<span className="font-headline-sm">Port Harcourt Strikers</span>
</div>
<span className="font-headline-lg text-on-surface">2</span>
</div>
<div className="border-t border-surface-container pt-space-sm mt-space-sm flex justify-between items-center text-body-sm text-on-surface-variant">
<span>Indoor Sports Hall A</span>
<a className="text-primary hover:underline font-bold uppercase text-xs" data-path="competitions" href="#">Match Centre →</a>
</div>
</div>

<div className="bg-surface-container-lowest border border-surface-container-highest p-space-md flex flex-col justify-between hover:border-outline transition-colors">
<div className="flex items-center justify-between mb-space-md">
<span className="bg-tertiary-container text-on-tertiary text-[10px] uppercase font-label-md px-2 py-0.5">Football - Open</span>
<span className="text-body-sm text-on-surface-variant uppercase font-label-md">Today, 16:00</span>
</div>
<div className="flex items-center justify-between my-space-sm">
<div className="flex items-center gap-space-sm">
<div className="w-8 h-8 bg-surface-container flex items-center justify-center font-headline-sm">KD</div>
<span className="font-headline-sm">Kaduna United</span>
</div>
<span className="font-headline-md text-on-surface-variant">VS</span>
</div>
<div className="flex items-center justify-between my-space-sm">
<div className="flex items-center gap-space-sm">
<div className="w-8 h-8 bg-surface-container flex items-center justify-center font-headline-sm">LG</div>
<span className="font-headline-sm">Lagos Warriors</span>
</div>
<span className="font-headline-md text-on-surface-variant">--</span>
</div>
<div className="border-t border-surface-container pt-space-sm mt-space-sm flex justify-between items-center text-body-sm text-on-surface-variant">
<span>Main Bowl Pitch 1</span>
<a className="text-primary hover:underline font-bold uppercase text-xs" data-path="admin-scheduling" href="#">View Schedule →</a>
</div>
</div>
</div>
</section>

<section className="bg-surface-container-low py-space-xl">
<div className="max-w-7xl mx-auto px-gutter grid grid-cols-1 lg:grid-cols-2 gap-space-xl">

<div className="bg-surface-container-lowest border border-surface-container-highest p-space-lg flex flex-col">
<div className="flex items-center justify-between mb-space-md pb-space-sm border-b border-surface-container">
<div>
<span className="text-primary font-label-md uppercase">Top Performers</span>
<h3 className="font-headline-lg uppercase">Goal Scoring Leaderboard</h3>
</div>
<span className="material-symbols-outlined text-primary text-[28px]">sports_soccer</span>
</div>
<div className="flex flex-col divide-y divide-surface-container">
<div className="py-3 flex items-center justify-between">
<div className="flex items-center gap-space-md">
<span className="font-headline-md text-primary w-6">01</span>
<div className="w-10 h-10 bg-surface-container bg-cover bg-center" data-alt="Close up portrait of a focused Nigerian male football striker in an Obsidian Elite jersey smiling confidently." style={{"backgroundImage":"url('https"}}></div>
<div>
<h4 className="font-headline-sm">Chinedu Okafor</h4>
<p className="text-body-sm text-on-surface-variant">Enugu Lions • Football - Male</p>
</div>
</div>
<div className="text-right">
<span className="font-headline-lg text-primary">8</span>
<p className="text-[10px] uppercase font-label-md text-on-surface-variant">Goals</p>
</div>
</div>
<div className="py-3 flex items-center justify-between">
<div className="flex items-center gap-space-md">
<span className="font-headline-md text-on-surface-variant w-6">02</span>
<div className="w-10 h-10 bg-surface-container bg-cover bg-center" data-alt="Portrait of a determined female futsal player in red and white athletic gear looking straight ahead." style={{"backgroundImage":"url('https"}}></div>
<div>
<h4 className="font-headline-sm">Amina Bello</h4>
<p className="text-body-sm text-on-surface-variant">Coal City Queens • Futsal - Female</p>
</div>
</div>
<div className="text-right">
<span className="font-headline-lg text-primary">6</span>
<p className="text-[10px] uppercase font-label-md text-on-surface-variant">Goals</p>
</div>
</div>
<div className="py-3 flex items-center justify-between">
<div className="flex items-center gap-space-md">
<span className="font-headline-md text-on-surface-variant w-6">03</span>
<div className="w-10 h-10 bg-surface-container bg-cover bg-center" data-alt="Portrait of an energetic young midfielder in blue kit ready for tournament action." style={{"backgroundImage":"url('https"}}></div>
<div>
<h4 className="font-headline-sm">Ibrahim Musa</h4>
<p className="text-body-sm text-on-surface-variant">Abuja Titans • Football - Male</p>
</div>
</div>
<div className="text-right">
<span className="font-headline-lg text-primary">5</span>
<p className="text-[10px] uppercase font-label-md text-on-surface-variant">Goals</p>
</div>
</div>
</div>
<div className="mt-auto pt-space-md">
<a className="block w-full text-center bg-surface-container hover:bg-surface-container-high text-on-surface font-headline-sm uppercase py-3 transition-colors" data-path="competitions" href="#">
            Full Player Statistics →
          </a>
</div>
</div>

<div className="bg-surface-container-lowest border border-surface-container-highest p-space-lg flex flex-col">
<div className="flex items-center justify-between mb-space-md pb-space-sm border-b border-surface-container">
<div>
<span className="text-primary font-label-md uppercase">Tournament Table</span>
<h3 className="font-headline-lg uppercase">Group A Standings</h3>
</div>
<span className="material-symbols-outlined text-primary text-[28px]">leaderboard</span>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="border-b border-surface-container text-body-sm text-on-surface-variant">
<th className="py-2 font-label-md uppercase">Pos / Team</th>
<th className="py-2 font-label-md uppercase text-center">P</th>
<th className="py-2 font-label-md uppercase text-center">GD</th>
<th className="py-2 font-label-md uppercase text-right">Pts</th>
</tr>
</thead>
<tbody className="divide-y divide-surface-container">
<tr>
<td className="py-3 flex items-center gap-space-sm font-headline-sm">
<span className="text-primary w-4">1</span>
<span>Enugu Lions</span>
</td>
<td className="py-3 text-center font-body-md">4</td>
<td className="py-3 text-center font-body-md text-tertiary">+7</td>
<td className="py-3 text-right font-headline-sm">12</td>
</tr>
<tr>
<td className="py-3 flex items-center gap-space-sm font-headline-sm">
<span className="text-on-surface-variant w-4">2</span>
<span>Coal City Queens</span>
</td>
<td className="py-3 text-center font-body-md">4</td>
<td className="py-3 text-center font-body-md text-tertiary">+5</td>
<td className="py-3 text-right font-headline-sm">9</td>
</tr>
<tr>
<td className="py-3 flex items-center gap-space-sm font-headline-sm">
<span className="text-on-surface-variant w-4">3</span>
<span>Abuja Titans</span>
</td>
<td className="py-3 text-center font-body-md">4</td>
<td className="py-3 text-center font-body-md text-error">-1</td>
<td className="py-3 text-right font-headline-sm">6</td>
</tr>
<tr>
<td className="py-3 flex items-center gap-space-sm font-headline-sm">
<span className="text-on-surface-variant w-4">4</span>
<span>Lagos Warriors</span>
</td>
<td className="py-3 text-center font-body-md">4</td>
<td className="py-3 text-center font-body-md text-error">-8</td>
<td className="py-3 text-right font-headline-sm">0</td>
</tr>
</tbody>
</table>
</div>
<div className="mt-auto pt-space-md">
<a className="block w-full text-center bg-surface-container hover:bg-surface-container-high text-on-surface font-headline-sm uppercase py-3 transition-colors" data-path="teams" href="#">
            View All Teams & Brackets →
          </a>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-gutter py-space-xl">
<div className="bg-surface-container-lowest border border-surface-container-highest p-space-xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-space-lg">
<div className="absolute right-0 top-0 bottom-0 w-1/3 bg-cover bg-center opacity-10 pointer-events-none" data-alt="Abstract energetic background texture of football grass turf under dramatic stadium lighting." style={{"backgroundImage":"url('https"}}></div>
<div className="relative z-10 max-w-2xl">
<span className="text-primary font-label-md uppercase tracking-widest">Enugu 2026 Registration Open</span>
<h2 className="font-headline-xl uppercase text-on-surface mt-1">Ready to Claim Ultimate Glory?</h2>
<p className="font-body-md text-on-surface-variant mt-space-sm">
          Secure your club or collegiate squad's spot in Nigeria's premier football championship. Complete your roster submission before the deadline.
        </p>
</div>
<div className="relative z-10 flex-shrink-0">
<a className="bg-primary hover:bg-primary-container text-on-primary hover:text-on-primary-container font-headline-sm uppercase px-10 py-5 transition-all shadow-md inline-flex items-center gap-space-sm" data-path="admin-registration" href="#">
<span>Register Your Team</span>
<span className="material-symbols-outlined">bolt</span>
</a>
</div>
</div>
</section>
</div></main><footer className="w-full bg-surface-container-low py-space-xl"><div className="max-w-7xl mx-auto px-gutter text-center text-on-surface-variant text-body-sm">© 2026 Obsidian Elite Football Portal. Coal City Games. All rights reserved.</div></footer>
    </div>
  );
}
