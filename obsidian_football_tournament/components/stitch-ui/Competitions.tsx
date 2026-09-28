import React from 'react';

export default function Competitions() {
  return (
    <div className="stitch-app">
      <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]"><div className="h-20 max-w-7xl mx-auto px-gutter flex items-center justify-between"><div className="flex items-center gap-space-md"><img alt="Obsidian Elite Logo" className="h-8 w-auto object-contain" src="/assets/stitch/Competitions_asset_1.png"/><span className="font-headline-lg text-primary uppercase tracking-tight">Obsidian Elite</span></div><nav className="hidden md:flex items-center gap-space-lg" data-active-classes="bg-primary-container text-on-primary-container font-bold px-3 py-1 rounded"><a className="text-body-md text-on-surface-variant hover:text-on-surface transition-colors" data-path="home" href="#">Home</a><a aria-current="page" className="transition-colors bg-primary-container text-on-primary-container font-bold px-3 py-1 rounded" data-path="competitions" href="#">Competitions</a><a className="text-body-md text-on-surface-variant hover:text-on-surface transition-colors" data-path="teams" href="#">Teams</a><a className="text-body-md text-on-surface-variant hover:text-on-surface transition-colors" data-path="news" href="#">News</a><div className="relative group"><button className="flex items-center gap-space-xs text-body-md text-on-surface-variant hover:text-on-surface transition-colors py-2"><span>Admin Backend</span><span className="material-symbols-outlined text-[18px]">expand_more</span></button><div className="absolute right-0 top-full hidden group-hover:block w-56 bg-surface-container-lowest shadow-[0_4px_20px_rgba(0,0,0,0.08)] py-space-sm"><a className="block px-space-md py-2 text-body-sm text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface" data-path="admin-tournament-creation" href="#">Tournament Creation</a><a className="block px-space-md py-2 text-body-sm text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface" data-path="admin-registration" href="#">Registration</a><a className="block px-space-md py-2 text-body-sm text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface" data-path="admin-scheduling" href="#">Scheduling</a><a className="block px-space-md py-2 text-body-sm text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface" data-path="admin-rules" href="#">Rules</a></div></div></nav><div className="flex items-center gap-space-md"><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center"><span className="material-symbols-outlined text-on-primary text-[18px]">person</span></div></div></div></header><main className="w-full pt-20 bg-surface"><div className="flex flex-col w-full bg-surface">

<section className="w-full bg-surface-container-low py-space-xl px-gutter relative overflow-hidden">
<div className="absolute -right-20 -top-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
<div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-space-lg relative z-10">
<div className="flex flex-col gap-space-sm">
<div className="flex items-center gap-space-xs text-primary font-label-md uppercase tracking-widest">
<span className="material-symbols-outlined text-[16px]">sports_soccer</span>
<span>Coal City Games 2026 // Central Hub</span>
</div>
<h1 className="text-headline-xxl text-on-surface uppercase tracking-tight">Competitions</h1>
<p className="text-body-lg text-on-surface-variant max-w-2xl">
          Real-time tracking, live fixtures, and comprehensive statistics for Football and Futsal across male and female divisions.
        </p>
</div>

<div className="flex flex-wrap items-center gap-space-sm bg-surface p-space-sm shadow-sm border border-surface-container-highest">
<div className="flex flex-col">
<label className="text-label-md text-on-surface-variant uppercase mb-1">Sport</label>
<select className="bg-surface-container-low text-on-surface px-3 py-2 text-body-sm font-bold border border-outline/30 focus:border-primary outline-none" id="sport-filter">
<option value="all">All Sports</option>
<option value="football">Football</option>
<option value="futsal">Futsal</option>
</select>
</div>
<div className="flex flex-col">
<label className="text-label-md text-on-surface-variant uppercase mb-1">Category</label>
<select className="bg-surface-container-low text-on-surface px-3 py-2 text-body-sm font-bold border border-outline/30 focus:border-primary outline-none" id="category-filter">
<option value="all">All Categories</option>
<option value="male">Male</option>
<option value="female">Female</option>
</select>
</div>
<button className="self-end bg-primary text-on-primary px-4 py-2 text-headline-sm uppercase hover:bg-primary-container transition-colors mt-auto" id="apply-filters">
          Filter
        </button>
</div>
</div>
</section>

<section className="w-full bg-surface border-b border-surface-container-high sticky top-20 z-40 backdrop-blur-md bg-surface/90">
<div className="max-w-7xl mx-auto px-gutter flex items-center gap-space-lg overflow-x-auto">
<button className="tab-btn py-space-md text-headline-sm uppercase tracking-wide border-b-2 border-primary text-primary flex items-center gap-space-xs transition-colors" id="tab-fixtures" onClick={() => {}}>
<span className="material-symbols-outlined text-[20px]">calendar_month</span>
<span>Fixtures</span>
<span className="ml-2 bg-primary-fixed text-on-primary-fixed text-label-md px-2 py-0.5">12</span>
</button>
<button className="tab-btn py-space-md text-headline-sm uppercase tracking-wide border-b-2 border-transparent text-on-surface-variant hover:text-on-surface flex items-center gap-space-xs transition-colors" id="tab-results" onClick={() => {}}>
<span className="material-symbols-outlined text-[20px]">scoreboard</span>
<span>Results</span>
<span className="ml-2 bg-surface-container text-on-surface-variant text-label-md px-2 py-0.5">24</span>
</button>
<button className="tab-btn py-space-md text-headline-sm uppercase tracking-wide border-b-2 border-transparent text-on-surface-variant hover:text-on-surface flex items-center gap-space-xs transition-colors" id="tab-stats" onClick={() => {}}>
<span className="material-symbols-outlined text-[20px]">leaderboard</span>
<span>Stats & Standings</span>
</button>
</div>
</section>

<section className="max-w-7xl mx-auto px-gutter py-space-xl w-full">

<div className="tab-content flex flex-col gap-space-xl" id="content-fixtures">
<div className="flex items-center justify-between">
<h2 className="text-headline-lg uppercase text-on-surface">Upcoming Matches</h2>
<span className="text-body-sm text-on-surface-variant">Showing all scheduled events for Enugu 2026</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg">

<div className="event-card bg-surface-container-lowest p-space-lg shadow-sm hover:shadow-md transition-shadow border border-surface-container-high flex flex-col justify-between" data-category="male" data-sport="football">
<div className="flex items-center justify-between mb-space-md">
<span className="bg-primary/10 text-primary text-label-md px-2 py-1 uppercase font-bold">Football - Male</span>
<span className="text-body-sm text-on-surface-variant flex items-center gap-1"><span className="material-symbols-outlined text-[16px]">schedule</span> Today, 16:00 WAT</span>
</div>
<div className="flex items-center justify-between py-space-md my-space-sm border-y border-surface-container">
<div className="flex flex-col items-center flex-1">
<div className="w-12 h-12 bg-surface-container flex items-center justify-center font-headline-md text-on-surface mb-2">EAC</div>
<span className="text-headline-sm text-center">Enugu Aces</span>
</div>
<div className="px-space-md text-headline-md text-on-surface-variant">VS</div>
<div className="flex flex-col items-center flex-1">
<div className="w-12 h-12 bg-surface-container flex items-center justify-center font-headline-md text-on-surface mb-2">LSC</div>
<span className="text-headline-sm text-center">Lagos Spartans</span>
</div>
</div>
<div className="flex items-center justify-between pt-space-sm">
<span className="text-body-sm text-on-surface-variant">Nnamdi Azikiwe Stadium</span>
<button className="bg-primary text-on-primary px-4 py-1.5 text-headline-sm uppercase hover:bg-primary-container transition-colors">Match Preview</button>
</div>
</div>

<div className="event-card bg-surface-container-lowest p-space-lg shadow-sm hover:shadow-md transition-shadow border border-surface-container-high flex flex-col justify-between" data-category="female" data-sport="futsal">
<div className="flex items-center justify-between mb-space-md">
<span className="bg-tertiary-container/10 text-tertiary-container text-label-md px-2 py-1 uppercase font-bold">Futsal - Female</span>
<span className="text-body-sm text-on-surface-variant flex items-center gap-1"><span className="material-symbols-outlined text-[16px]">schedule</span> Tomorrow, 10:00 WAT</span>
</div>
<div className="flex items-center justify-between py-space-md my-space-sm border-y border-surface-container">
<div className="flex flex-col items-center flex-1">
<div className="w-12 h-12 bg-surface-container flex items-center justify-center font-headline-md text-on-surface mb-2">ANA</div>
<span className="text-headline-sm text-center">Abuja Angels</span>
</div>
<div className="px-space-md text-headline-md text-on-surface-variant">VS</div>
<div className="flex flex-col items-center flex-1">
<div className="w-12 h-12 bg-surface-container flex items-center justify-center font-headline-md text-on-surface mb-2">PHQ</div>
<span className="text-headline-sm text-center">Port Queens</span>
</div>
</div>
<div className="flex items-center justify-between pt-space-sm">
<span className="text-body-sm text-on-surface-variant">Indoor Sports Hall A</span>
<button className="bg-primary text-on-primary px-4 py-1.5 text-headline-sm uppercase hover:bg-primary-container transition-colors">Match Preview</button>
</div>
</div>

<div className="event-card bg-surface-container-lowest p-space-lg shadow-sm hover:shadow-md transition-shadow border border-surface-container-high flex flex-col justify-between" data-category="female" data-sport="football">
<div className="flex items-center justify-between mb-space-md">
<span className="bg-primary/10 text-primary text-label-md px-2 py-1 uppercase font-bold">Football - Female</span>
<span className="text-body-sm text-on-surface-variant flex items-center gap-1"><span className="material-symbols-outlined text-[16px]">schedule</span> Apr 14, 14:00 WAT</span>
</div>
<div className="flex items-center justify-between py-space-md my-space-sm border-y border-surface-container">
<div className="flex flex-col items-center flex-1">
<div className="w-12 h-12 bg-surface-container flex items-center justify-center font-headline-md text-on-surface mb-2">KNW</div>
<span className="text-headline-sm text-center">Kano Wonders</span>
</div>
<div className="px-space-md text-headline-md text-on-surface-variant">VS</div>
<div className="flex flex-col items-center flex-1">
<div className="w-12 h-12 bg-surface-container flex items-center justify-center font-headline-md text-on-surface mb-2">EAC</div>
<span className="text-headline-sm text-center">Enugu Aces F</span>
</div>
</div>
<div className="flex items-center justify-between pt-space-sm">
<span className="text-body-sm text-on-surface-variant">Nnamdi Azikiwe Stadium</span>
<button className="bg-primary text-on-primary px-4 py-1.5 text-headline-sm uppercase hover:bg-primary-container transition-colors">Match Preview</button>
</div>
</div>

<div className="event-card bg-surface-container-lowest p-space-lg shadow-sm hover:shadow-md transition-shadow border border-surface-container-high flex flex-col justify-between" data-category="male" data-sport="futsal">
<div className="flex items-center justify-between mb-space-md">
<span className="bg-tertiary-container/10 text-tertiary-container text-label-md px-2 py-1 uppercase font-bold">Futsal - Male</span>
<span className="text-body-sm text-on-surface-variant flex items-center gap-1"><span className="material-symbols-outlined text-[16px]">schedule</span> Apr 15, 18:30 WAT</span>
</div>
<div className="flex items-center justify-between py-space-md my-space-sm border-y border-surface-container">
<div className="flex flex-col items-center flex-1">
<div className="w-12 h-12 bg-surface-container flex items-center justify-center font-headline-md text-on-surface mb-2">IBD</div>
<span className="text-headline-sm text-center">Ibadan Strikers</span>
</div>
<div className="px-space-md text-headline-md text-on-surface-variant">VS</div>
<div className="flex flex-col items-center flex-1">
<div className="w-12 h-12 bg-surface-container flex items-center justify-center font-headline-md text-on-surface mb-2">KDZ</div>
<span className="text-headline-sm text-center">Kaduna Kings</span>
</div>
</div>
<div className="flex items-center justify-between pt-space-sm">
<span className="text-body-sm text-on-surface-variant">Indoor Sports Hall B</span>
<button className="bg-primary text-on-primary px-4 py-1.5 text-headline-sm uppercase hover:bg-primary-container transition-colors">Match Preview</button>
</div>
</div>
</div>
</div>

<div className="tab-content hidden flex flex-col gap-space-xl" id="content-results">
<div className="flex items-center justify-between">
<h2 className="text-headline-lg uppercase text-on-surface">Recent Results</h2>
<span className="text-body-sm text-on-surface-variant">Verified official match outcomes</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg">

<div className="event-card bg-surface-container-lowest p-space-lg shadow-sm border border-surface-container-high flex flex-col justify-between" data-category="male" data-sport="football">
<div className="flex items-center justify-between mb-space-md">
<span className="bg-primary/10 text-primary text-label-md px-2 py-1 uppercase font-bold">Football - Male</span>
<span className="bg-tertiary-container text-on-tertiary text-label-md px-2 py-0.5 uppercase">FT</span>
</div>
<div className="flex items-center justify-between py-space-md my-space-sm border-y border-surface-container">
<div className="flex flex-col items-center flex-1">
<span className="text-headline-sm text-center font-bold">Enugu Aces</span>
</div>
<div className="px-space-md text-headline-xl text-primary">
              3 - 1
            </div>
<div className="flex flex-col items-center flex-1">
<span className="text-headline-sm text-center">Kaduna City</span>
</div>
</div>
<div className="flex items-center justify-between pt-space-sm text-body-sm text-on-surface-variant">
<span>Completed yesterday</span>
<a className="text-primary font-bold hover:underline" href="#">Match Report →</a>
</div>
</div>

<div className="event-card bg-surface-container-lowest p-space-lg shadow-sm border border-surface-container-high flex flex-col justify-between" data-category="female" data-sport="futsal">
<div className="flex items-center justify-between mb-space-md">
<span className="bg-tertiary-container/10 text-tertiary-container text-label-md px-2 py-1 uppercase font-bold">Futsal - Female</span>
<span className="bg-tertiary-container text-on-tertiary text-label-md px-2 py-0.5 uppercase">FT</span>
</div>
<div className="flex items-center justify-between py-space-md my-space-sm border-y border-surface-container">
<div className="flex flex-col items-center flex-1">
<span className="text-headline-sm text-center font-bold">Lagos Waves</span>
</div>
<div className="px-space-md text-headline-xl text-primary">
              2 - 2
            </div>
<div className="flex flex-col items-center flex-1">
<span className="text-headline-sm text-center">Abuja Angels</span>
</div>
</div>
<div className="flex items-center justify-between pt-space-sm text-body-sm text-on-surface-variant">
<span>Completed 2 days ago</span>
<a className="text-primary font-bold hover:underline" href="#">Match Report →</a>
</div>
</div>

<div className="event-card bg-surface-container-lowest p-space-lg shadow-sm border border-surface-container-high flex flex-col justify-between" data-category="female" data-sport="football">
<div className="flex items-center justify-between mb-space-md">
<span className="bg-primary/10 text-primary text-label-md px-2 py-1 uppercase font-bold">Football - Female</span>
<span className="bg-tertiary-container text-on-tertiary text-label-md px-2 py-0.5 uppercase">FT</span>
</div>
<div className="flex items-center justify-between py-space-md my-space-sm border-y border-surface-container">
<div className="flex flex-col items-center flex-1">
<span className="text-headline-sm text-center">Port Queens</span>
</div>
<div className="px-space-md text-headline-xl text-primary">
              0 - 1
            </div>
<div className="flex flex-col items-center flex-1">
<span className="text-headline-sm text-center font-bold">Enugu Aces F</span>
</div>
</div>
<div className="flex items-center justify-between pt-space-sm text-body-sm text-on-surface-variant">
<span>Completed 3 days ago</span>
<a className="text-primary font-bold hover:underline" href="#">Match Report →</a>
</div>
</div>
</div>
</div>

<div className="tab-content hidden flex flex-col gap-space-xl" id="content-stats">
<div className="flex items-center justify-between">
<h2 className="text-headline-lg uppercase text-on-surface">Tournament Standings & Leaderboards</h2>
<span className="text-body-sm text-on-surface-variant">Live updated telemetry</span>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-space-lg">

<div className="lg:col-span-2 bg-surface-container-lowest p-space-lg shadow-sm border border-surface-container-high flex flex-col">
<div className="flex items-center justify-between mb-space-md">
<h3 className="text-headline-md uppercase">Football Male League Table</h3>
<span className="bg-primary/10 text-primary text-label-md px-2 py-1 uppercase font-bold">Football - Male</span>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-surface-container text-on-surface-variant text-label-md uppercase">
<th className="p-3">Pos</th>
<th className="p-3">Team</th>
<th className="p-3 text-center">P</th>
<th className="p-3 text-center">W</th>
<th className="p-3 text-center">D</th>
<th className="p-3 text-center">L</th>
<th className="p-3 text-center">GD</th>
<th className="p-3 text-center font-bold">Pts</th>
</tr>
</thead>
<tbody className="text-body-sm">
<tr className="border-b border-surface-container-low hover:bg-surface-container-low/50">
<td className="p-3 font-bold text-primary">1</td>
<td className="p-3 font-bold">Enugu Aces</td>
<td className="p-3 text-center">5</td>
<td className="p-3 text-center">4</td>
<td className="p-3 text-center">1</td>
<td className="p-3 text-center">0</td>
<td className="p-3 text-center">+8</td>
<td className="p-3 text-center font-bold">13</td>
</tr>
<tr className="border-b border-surface-container-low hover:bg-surface-container-low/50">
<td className="p-3 font-bold">2</td>
<td className="p-3 font-bold">Lagos Spartans</td>
<td className="p-3 text-center">5</td>
<td className="p-3 text-center">3</td>
<td className="p-3 text-center">2</td>
<td className="p-3 text-center">0</td>
<td className="p-3 text-center">+5</td>
<td className="p-3 text-center font-bold">11</td>
</tr>
<tr className="border-b border-surface-container-low hover:bg-surface-container-low/50">
<td className="p-3 font-bold">3</td>
<td className="p-3 font-bold">Kaduna City</td>
<td className="p-3 text-center">5</td>
<td className="p-3 text-center">2</td>
<td className="p-3 text-center">1</td>
<td className="p-3 text-center">2</td>
<td className="p-3 text-center">-1</td>
<td className="p-3 text-center font-bold">7</td>
</tr>
<tr className="hover:bg-surface-container-low/50">
<td className="p-3 font-bold">4</td>
<td className="p-3 font-bold">Kano Wonders</td>
<td className="p-3 text-center">5</td>
<td className="p-3 text-center">1</td>
<td className="p-3 text-center">0</td>
<td className="p-3 text-center">4</td>
<td className="p-3 text-center">-6</td>
<td className="p-3 text-center font-bold">3</td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="bg-surface-container-lowest p-space-lg shadow-sm border border-surface-container-high flex flex-col">
<div className="flex items-center justify-between mb-space-md">
<h3 className="text-headline-md uppercase">Top Goalscorers</h3>
<span className="material-symbols-outlined text-secondary">military_tech</span>
</div>
<div className="flex flex-col gap-space-md">
<div className="flex items-center justify-between p-3 bg-surface-container-low">
<div className="flex items-center gap-space-sm">
<div className="w-10 h-10 bg-primary text-on-primary flex items-center justify-center font-headline-sm">1</div>
<div>
<h4 className="text-headline-sm">Chinedu Okafor</h4>
<p className="text-body-sm text-on-surface-variant">Enugu Aces</p>
</div>
</div>
<span className="text-headline-md text-primary">6 G</span>
</div>
<div className="flex items-center justify-between p-3 bg-surface-container-low">
<div className="flex items-center gap-space-sm">
<div className="w-10 h-10 bg-surface-container-high text-on-surface flex items-center justify-center font-headline-sm">2</div>
<div>
<h4 className="text-headline-sm">Ibrahim Musa</h4>
<p className="text-body-sm text-on-surface-variant">Lagos Spartans</p>
</div>
</div>
<span className="text-headline-md text-primary">5 G</span>
</div>
<div className="flex items-center justify-between p-3 bg-surface-container-low">
<div className="flex items-center gap-space-sm">
<div className="w-10 h-10 bg-surface-container-high text-on-surface flex items-center justify-center font-headline-sm">3</div>
<div>
<h4 className="text-headline-sm">Emeka Eze</h4>
<p className="text-body-sm text-on-surface-variant">Kaduna City</p>
</div>
</div>
<span className="text-headline-md text-primary">4 G</span>
</div>
</div>
</div>
</div>
</div>
</section>


</div></main><footer className="w-full bg-surface-container-low py-space-xl"><div className="max-w-7xl mx-auto px-gutter text-center text-on-surface-variant text-body-sm">© 2026 Obsidian Elite Football Portal. Coal City Games. All rights reserved.</div></footer>
    </div>
  );
}
