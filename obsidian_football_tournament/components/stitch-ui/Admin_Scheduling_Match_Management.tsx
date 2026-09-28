import React from 'react';

export default function Admin_Scheduling_Match_Management() {
  return (
    <div className="stitch-app">
      <aside className="fixed left-0 top-0 h-full w-64 bg-surface-container-low z-50 flex flex-col pt-space-lg pb-space-xl"><div className="px-gutter mb-space-lg flex items-center gap-space-sm"><img alt="Obsidian Elite Logo" className="h-6 w-auto object-contain" src="/assets/stitch/Admin_Scheduling_Match_Management_asset_1.png"/><span className="font-headline-sm text-primary uppercase tracking-tight">Admin Backend</span></div><nav className="flex-1 px-space-sm flex flex-col gap-space-xs" data-active-classes="bg-primary-container text-on-primary-container font-bold"><a className="flex items-center px-space-md py-3 text-body-md text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all" data-path="admin-dashboard" href="#"><span className="material-symbols-outlined mr-space-md">dashboard</span>Dashboard</a><a className="flex items-center px-space-md py-3 text-body-md text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all" data-path="admin-tournament-creation" href="#"><span className="material-symbols-outlined mr-space-md">emoji_events</span>Tournaments</a><a className="flex items-center px-space-md py-3 text-body-md text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all" data-path="admin-registration" href="#"><span className="material-symbols-outlined mr-space-md">group_add</span>Registration</a><a aria-current="page" className="flex items-center px-space-md py-3 transition-all bg-primary-container text-on-primary-container font-bold" data-path="admin-scheduling" href="#"><span className="material-symbols-outlined mr-space-md">calendar_month</span>Scheduling</a><a className="flex items-center px-space-md py-3 text-body-md text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all" data-path="admin-rules" href="#"><span className="material-symbols-outlined mr-space-md">gavel</span>Rules</a></nav></aside><div className="pl-64"><header className="fixed top-0 left-64 right-0 h-20 bg-surface/80 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-40 flex items-center justify-end px-gutter gap-space-md"><div className="flex items-center gap-space-sm text-on-surface-variant"><span className="material-symbols-outlined">notifications</span><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center"><span className="material-symbols-outlined text-on-primary text-[18px]">person</span></div></div></header><main className="relative pt-20 bg-surface"><div className="flex flex-col w-full pb-24 bg-surface text-on-surface">

<div className="px-margin pt-margin pb-space-lg flex flex-col md:flex-row md:items-center justify-between gap-space-md border-b border-outline-variant/30">
<div>
<div className="flex items-center gap-space-xs text-primary font-headline-sm uppercase tracking-wider mb-1">
<span className="material-symbols-outlined text-[20px]">calendar_month</span>
<span>Match Operations & Scheduling</span>
</div>
<h1 className="font-headline-xxl text-on-surface uppercase tracking-tight">Fixtures & Live Control</h1>
</div>
<div className="flex items-center gap-space-sm flex-wrap">
<button className="bg-primary text-on-primary px-space-md py-3 font-headline-sm uppercase tracking-wider hover:bg-primary-container transition-all flex items-center gap-space-xs shadow-sm" onClick={() => {}}>
<span className="material-symbols-outlined">add</span>
        Schedule Fixture
      </button>
<button className="bg-surface-container-high text-on-surface px-space-md py-3 font-headline-sm uppercase tracking-wider hover:bg-surface-container-highest transition-all flex items-center gap-space-xs" onClick={() => {}}>
<span className="material-symbols-outlined">badge</span>
        Assign Referees
      </button>
</div>
</div>

<div className="px-margin py-space-md grid grid-cols-2 md:grid-cols-4 gap-space-md">
<div className="bg-surface-container-low p-space-md flex flex-col justify-between shadow-sm border-l-4 border-primary">
<span className="text-label-md text-on-surface-variant uppercase">Total Scheduled</span>
<div className="flex items-baseline justify-between mt-2">
<span className="font-headline-lg text-on-surface">48</span>
<span className="text-xs text-primary font-bold">+4 this week</span>
</div>
</div>
<div className="bg-surface-container-low p-space-md flex flex-col justify-between shadow-sm border-l-4 border-tertiary">
<span className="text-label-md text-on-surface-variant uppercase">Live Now</span>
<div className="flex items-baseline justify-between mt-2">
<span className="font-headline-lg text-tertiary flex items-center gap-2">
<span className="w-3 h-3 bg-tertiary-container animate-pulse"></span> 3
        </span>
<span className="text-xs text-tertiary font-bold">Active Stream</span>
</div>
</div>
<div className="bg-surface-container-low p-space-md flex flex-col justify-between shadow-sm border-l-4 border-secondary">
<span className="text-label-md text-on-surface-variant uppercase">Completed Matches</span>
<div className="flex items-baseline justify-between mt-2">
<span className="font-headline-lg text-on-surface">24</span>
<span className="text-xs text-secondary font-bold">Results Verified</span>
</div>
</div>
<div className="bg-surface-container-low p-space-md flex flex-col justify-between shadow-sm border-l-4 border-outline">
<span className="text-label-md text-on-surface-variant uppercase">Venues Booked</span>
<div className="flex items-baseline justify-between mt-2">
<span className="font-headline-lg text-on-surface">6/6</span>
<span className="text-xs text-on-surface-variant">Enugu Stadiums</span>
</div>
</div>
</div>

<div className="px-margin mt-space-md grid grid-cols-1 lg:grid-cols-12 gap-space-lg">

<div className="lg:col-span-8 flex flex-col gap-space-md">

<div className="bg-surface-container-low p-space-md flex flex-wrap items-center justify-between gap-space-sm shadow-sm">
<div className="flex items-center gap-space-sm flex-wrap">
<button className="px-space-md py-2 bg-primary text-on-primary font-label-md uppercase tracking-wider">All Matches</button>
<button className="px-space-md py-2 bg-surface text-on-surface hover:bg-surface-container-high font-label-md uppercase tracking-wider transition-all">Live (3)</button>
<button className="px-space-md py-2 bg-surface text-on-surface hover:bg-surface-container-high font-label-md uppercase tracking-wider transition-all">Upcoming</button>
<button className="px-space-md py-2 bg-surface text-on-surface hover:bg-surface-container-high font-label-md uppercase tracking-wider transition-all">Completed</button>
</div>
<div className="relative">
<input className="bg-surface px-space-md py-2 text-body-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary w-60" placeholder="Search team or venue..." type="text"/>
</div>
</div>

<div className="flex flex-col gap-space-sm">

<div className="bg-surface-container-low p-space-lg shadow-sm hover:shadow-md transition-all border-l-8 border-tertiary">
<div className="flex flex-wrap items-center justify-between gap-space-sm pb-space-sm border-b border-outline-variant/20">
<div className="flex items-center gap-space-sm">
<span className="bg-tertiary text-on-tertiary px-space-xs py-1 font-label-md uppercase flex items-center gap-1">
<span className="w-2 h-2 bg-white rounded-full animate-ping"></span> LIVE 78'
              </span>
<span className="text-body-sm text-on-surface-variant">Group A • Nnamdi Azikiwe Stadium</span>
</div>
<span className="text-body-sm text-on-surface-variant font-medium">Ref: Dr. Emeka Okafor</span>
</div>
<div className="py-space-md grid grid-cols-1 md:grid-cols-3 items-center gap-space-md text-center">
<div className="flex items-center justify-center md:justify-start gap-space-md">
<div className="w-12 h-12 bg-primary-fixed flex items-center justify-center font-headline-sm text-primary">RNG</div>
<div className="text-left">
<h4 className="font-headline-md text-on-surface">Rangers Int'l</h4>
<span className="text-xs text-on-surface-variant">Enugu State</span>
</div>
</div>
<div className="flex flex-col items-center">
<div className="font-headline-xl text-on-surface tracking-widest">2 - 1</div>
<span className="text-xs text-tertiary font-bold uppercase">Possession: 58% - 42%</span>
</div>
<div className="flex items-center justify-center md:justify-end gap-space-md flex-row-reverse md:flex-row">
<div className="text-right">
<h4 className="font-headline-md text-on-surface">Enyimba FC</h4>
<span className="text-xs text-on-surface-variant">Abia State</span>
</div>
<div className="w-12 h-12 bg-secondary-fixed flex items-center justify-center font-headline-sm text-secondary">ENY</div>
</div>
</div>
<div className="pt-space-sm border-t border-outline-variant/20 flex flex-wrap items-center justify-between gap-space-sm">
<div className="flex items-center gap-space-xs text-xs text-on-surface-variant">
<span>Goals: Rangers (14', 62') • Enyimba (30')</span>
</div>
<div className="flex items-center gap-space-sm">
<button className="bg-surface px-space-md py-2 text-body-sm font-label-md uppercase hover:bg-surface-container-high transition-all" onClick={() => {}}>Record Stats</button>
<button className="bg-primary text-on-primary px-space-md py-2 text-body-sm font-label-md uppercase hover:bg-primary-container transition-all" onClick={() => {}}>Live Console</button>
</div>
</div>
</div>

<div className="bg-surface-container-low p-space-lg shadow-sm hover:shadow-md transition-all">
<div className="flex flex-wrap items-center justify-between gap-space-sm pb-space-sm border-b border-outline-variant/20">
<div className="flex items-center gap-space-sm">
<span className="bg-surface-container-highest text-on-surface px-space-xs py-1 font-label-md uppercase">UPCOMING</span>
<span className="text-body-sm text-on-surface-variant">Tomorrow, 16:00 WAT • Cathedral Arena</span>
</div>
<span className="text-body-sm text-on-surface-variant font-medium">Ref: TBD</span>
</div>
<div className="py-space-md grid grid-cols-1 md:grid-cols-3 items-center gap-space-md text-center">
<div className="flex items-center justify-center md:justify-start gap-space-md">
<div className="w-12 h-12 bg-surface-container-highest flex items-center justify-center font-headline-sm text-on-surface">SHO</div>
<div className="text-left">
<h4 className="font-headline-md text-on-surface">Shooting Stars</h4>
<span className="text-xs text-on-surface-variant">Oyo State</span>
</div>
</div>
<div className="flex flex-col items-center">
<div className="font-headline-lg text-on-surface-variant">VS</div>
<span className="text-xs text-on-surface-variant font-medium">Match #14</span>
</div>
<div className="flex items-center justify-center md:justify-end gap-space-md flex-row-reverse md:flex-row">
<div className="text-right">
<h4 className="font-headline-md text-on-surface">Kano Pillars</h4>
<span className="text-xs text-on-surface-variant">Kano State</span>
</div>
<div className="w-12 h-12 bg-surface-container-highest flex items-center justify-center font-headline-sm text-on-surface">KAN</div>
</div>
</div>
<div className="pt-space-sm border-t border-outline-variant/20 flex flex-wrap items-center justify-between gap-space-sm">
<div className="flex items-center gap-space-xs text-xs text-on-surface-variant">
<span>Venue: Cathedral Arena, Enugu</span>
</div>
<div className="flex items-center gap-space-sm">
<button className="bg-surface px-space-md py-2 text-body-sm font-label-md uppercase hover:bg-surface-container-high transition-all" onClick={() => {}}>Edit Details</button>
<button className="bg-surface-container-high text-on-surface px-space-md py-2 text-body-sm font-label-md uppercase hover:bg-surface-container-highest transition-all" onClick={() => {}}>Assign Ref</button>
</div>
</div>
</div>

<div className="bg-surface-container-low p-space-lg shadow-sm hover:shadow-md transition-all opacity-90">
<div className="flex flex-wrap items-center justify-between gap-space-sm pb-space-sm border-b border-outline-variant/20">
<div className="flex items-center gap-space-sm">
<span className="bg-surface-container text-on-surface-variant px-space-xs py-1 font-label-md uppercase">FULL TIME</span>
<span className="text-body-sm text-on-surface-variant">Group B • UNEC Stadium</span>
</div>
<span className="text-body-sm text-on-surface-variant font-medium">Ref: Grace Akpan</span>
</div>
<div className="py-space-md grid grid-cols-1 md:grid-cols-3 items-center gap-space-md text-center">
<div className="flex items-center justify-center md:justify-start gap-space-md">
<div className="w-12 h-12 bg-surface-container-highest flex items-center justify-center font-headline-sm text-on-surface">RIV</div>
<div className="text-left">
<h4 className="font-headline-md text-on-surface">Rivers United</h4>
<span className="text-xs text-on-surface-variant">Rivers State</span>
</div>
</div>
<div className="flex flex-col items-center">
<div className="font-headline-xl text-on-surface tracking-widest">3 - 0</div>
<span className="text-xs text-secondary font-bold uppercase">Verified Final Score</span>
</div>
<div className="flex items-center justify-center md:justify-end gap-space-md flex-row-reverse md:flex-row">
<div className="text-right">
<h4 className="font-headline-md text-on-surface">Bendel Insurance</h4>
<span className="text-xs text-on-surface-variant">Edo State</span>
</div>
<div className="w-12 h-12 bg-surface-container-highest flex items-center justify-center font-headline-sm text-on-surface">BEN</div>
</div>
</div>
<div className="pt-space-sm border-t border-outline-variant/20 flex flex-wrap items-center justify-between gap-space-sm">
<div className="flex items-center gap-space-xs text-xs text-on-surface-variant">
<span>Goalscorers: Nwosu (12'), Adebayo (45'), Okoro (89')</span>
</div>
<div className="flex items-center gap-space-sm">
<button className="bg-surface px-space-md py-2 text-body-sm font-label-md uppercase hover:bg-surface-container-high transition-all" onClick={() => {}}>View Match Report</button>
</div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-4 flex flex-col gap-space-lg">

<div className="bg-surface-container-low p-space-lg shadow-sm">
<h3 className="font-headline-lg text-on-surface uppercase mb-space-md flex items-center gap-2">
<span className="material-symbols-outlined text-primary">stadium</span> Venue Allocation
        </h3>
<div className="flex flex-col gap-space-md">
<div className="flex items-center justify-between pb-space-xs border-b border-outline-variant/20">
<div>
<h5 className="font-headline-sm text-on-surface">Nnamdi Azikiwe Stadium</h5>
<span className="text-xs text-on-surface-variant">Capacity: 25,000 • Main Pitch</span>
</div>
<span className="bg-tertiary-container text-on-tertiary-container px-2 py-1 font-label-md uppercase">Booked</span>
</div>
<div className="flex items-center justify-between pb-space-xs border-b border-outline-variant/20">
<div>
<h5 className="font-headline-sm text-on-surface">Cathedral Arena</h5>
<span className="text-xs text-on-surface-variant">Capacity: 10,000 • Turf 2</span>
</div>
<span className="bg-secondary-container text-on-secondary-container px-2 py-1 font-label-md uppercase">Available</span>
</div>
<div className="flex items-center justify-between pb-space-xs border-b border-outline-variant/20">
<div>
<h5 className="font-headline-sm text-on-surface">UNEC Sports Complex</h5>
<span className="text-xs text-on-surface-variant">Capacity: 8,000 • Practice Ground</span>
</div>
<span className="bg-tertiary-container text-on-tertiary-container px-2 py-1 font-label-md uppercase">Booked</span>
</div>
</div>
<button className="w-full mt-space-md bg-surface text-on-surface py-3 font-headline-sm uppercase hover:bg-surface-container-high transition-all">Manage Venues</button>
</div>

<div className="bg-surface-container-low p-space-lg shadow-sm">
<h3 className="font-headline-lg text-on-surface uppercase mb-space-md flex items-center gap-2">
<span className="material-symbols-outlined text-primary">badge</span> On-Duty Referees
        </h3>
<div className="flex flex-col gap-space-sm">
<div className="flex items-center justify-between p-2 bg-surface">
<div className="flex items-center gap-space-sm">
<div className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold text-xs">EO</div>
<div>
<div className="text-body-sm font-medium text-on-surface">Dr. Emeka Okafor</div>
<div className="text-xs text-on-surface-variant">FIFA Certified Center Ref</div>
</div>
</div>
<span className="text-xs text-tertiary font-bold">Assigned</span>
</div>
<div className="flex items-center justify-between p-2 bg-surface">
<div className="flex items-center gap-space-sm">
<div className="w-8 h-8 rounded-full bg-secondary text-on-secondary flex items-center justify-center font-bold text-xs">GA</div>
<div>
<div className="text-body-sm font-medium text-on-surface">Grace Akpan</div>
<div className="text-xs text-on-surface-variant">Assistant Referee 1</div>
</div>
</div>
<span className="text-xs text-secondary font-bold">Standby</span>
</div>
<div className="flex items-center justify-between p-2 bg-surface">
<div className="flex items-center gap-space-sm">
<div className="w-8 h-8 rounded-full bg-tertiary text-on-tertiary flex items-center justify-center font-bold text-xs">JI</div>
<div>
<div className="text-body-sm font-medium text-on-surface">Jibril Ibrahim</div>
<div className="text-xs text-on-surface-variant">Fourth Official</div>
</div>
</div>
<span className="text-xs text-tertiary font-bold">Assigned</span>
</div>
</div>
<button className="w-full mt-space-md bg-surface text-on-surface py-3 font-headline-sm uppercase hover:bg-surface-container-high transition-all" onClick={() => {}}>Assign New Officials</button>
</div>
</div>
</div>


<div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 hidden flex items-center justify-center p-gutter" id="scheduleModal">
<div className="bg-surface p-space-xl max-w-lg w-full shadow-2xl relative border-t-8 border-primary">
<button className="absolute top-4 right-4 text-on-surface hover:text-primary" onClick={() => {}}><span className="material-symbols-outlined">close</span></button>
<h3 className="font-headline-lg text-on-surface uppercase mb-space-md">Schedule New Fixture</h3>
<div className="flex flex-col gap-space-md">
<div>
<label className="block text-label-md text-on-surface-variant uppercase mb-1">Match Category / Group</label>
<select className="w-full bg-surface-container-low p-3 text-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-primary">
<option>Group A - Premier Stage</option>
<option>Group B - Knockout Round</option>
<option>Quarter-Finals</option>
</select>
</div>
<div className="grid grid-cols-2 gap-space-md">
<div>
<label className="block text-label-md text-on-surface-variant uppercase mb-1">Home Team</label>
<select className="w-full bg-surface-container-low p-3 text-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-primary">
<option>Rangers International</option>
<option>Enyimba FC</option>
<option>Shooting Stars</option>
</select>
</div>
<div>
<label className="block text-label-md text-on-surface-variant uppercase mb-1">Away Team</label>
<select className="w-full bg-surface-container-low p-3 text-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-primary">
<option>Kano Pillars</option>
<option>Rivers United</option>
<option>Bendel Insurance</option>
</select>
</div>
</div>
<div className="grid grid-cols-2 gap-space-md">
<div>
<label className="block text-label-md text-on-surface-variant uppercase mb-1">Date & Time</label>
<input className="w-full bg-surface-container-low p-3 text-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-primary" type="datetime-local"/>
</div>
<div>
<label className="block text-label-md text-on-surface-variant uppercase mb-1">Venue</label>
<select className="w-full bg-surface-container-low p-3 text-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-primary">
<option>Nnamdi Azikiwe Stadium</option>
<option>Cathedral Arena</option>
<option>UNEC Sports Complex</option>
</select>
</div>
</div>
<div className="flex justify-end gap-space-sm mt-space-md">
<button className="bg-surface-container-high px-space-md py-3 text-body-md font-headline-sm uppercase" onClick={() => {}}>Cancel</button>
<button className="bg-primary text-on-primary px-space-lg py-3 font-headline-sm uppercase hover:bg-primary-container" onClick={() => {}}>Publish Fixture</button>
</div>
</div>
</div>
</div>

<div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 hidden flex items-center justify-center p-gutter" id="liveControlModal">
<div className="bg-surface p-space-xl max-w-xl w-full shadow-2xl relative border-t-8 border-tertiary">
<button className="absolute top-4 right-4 text-on-surface hover:text-primary" onClick={() => {}}><span className="material-symbols-outlined">close</span></button>
<div className="flex items-center gap-2 mb-2">
<span className="w-3 h-3 bg-tertiary rounded-full animate-ping"></span>
<span className="font-headline-sm text-tertiary uppercase">Live Score Console</span>
</div>
<h3 className="font-headline-lg text-on-surface uppercase mb-space-md">Rangers Int'l vs Enyimba FC</h3>
<div className="bg-surface-container-low p-space-md mb-space-md flex items-center justify-between text-center">
<div>
<span className="text-xs text-on-surface-variant">Rangers</span>
<div className="font-headline-xxl text-primary">2</div>
</div>
<div className="font-headline-md text-on-surface-variant">VS</div>
<div>
<span className="text-xs text-on-surface-variant">Enyimba</span>
<div className="font-headline-xxl text-secondary">1</div>
</div>
</div>
<div className="flex flex-col gap-space-md">
<div className="grid grid-cols-2 gap-space-md">
<button className="bg-surface-container-high hover:bg-surface-container-highest p-3 font-headline-sm uppercase text-on-surface flex items-center justify-center gap-2">
<span className="material-symbols-outlined text-primary">sports_soccer</span> + Goal Rangers
          </button>
<button className="bg-surface-container-high hover:bg-surface-container-highest p-3 font-headline-sm uppercase text-on-surface flex items-center justify-center gap-2">
<span className="material-symbols-outlined text-secondary">sports_soccer</span> + Goal Enyimba
          </button>
</div>
<div className="grid grid-cols-2 gap-space-md">
<button className="bg-surface-container-high hover:bg-surface-container-highest p-3 font-headline-sm uppercase text-on-surface flex items-center justify-center gap-2">
<span className="material-symbols-outlined text-error">style</span> Yellow / Red Card
          </button>
<button className="bg-surface-container-high hover:bg-surface-container-highest p-3 font-headline-sm uppercase text-on-surface flex items-center justify-center gap-2">
<span className="material-symbols-outlined">swap_horiz</span> Substitution
          </button>
</div>
<div>
<label className="block text-label-md text-on-surface-variant uppercase mb-1">Match Minute Update</label>
<input className="w-full bg-surface-container-low p-3 text-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-tertiary" type="text" value="78'"/>
</div>
<div className="flex justify-end gap-space-sm mt-space-md">
<button className="bg-surface-container-high px-space-md py-3 text-body-md font-headline-sm uppercase" onClick={() => {}}>Close</button>
<button className="bg-tertiary text-on-tertiary px-space-lg py-3 font-headline-sm uppercase hover:bg-tertiary-container" onClick={() => {}}>Broadcast Update</button>
</div>
</div>
</div>
</div>

<div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 hidden flex items-center justify-center p-gutter" id="statsModal">
<div className="bg-surface p-space-xl max-w-lg w-full shadow-2xl relative border-t-8 border-secondary">
<button className="absolute top-4 right-4 text-on-surface hover:text-primary" onClick={() => {}}><span className="material-symbols-outlined">close</span></button>
<h3 className="font-headline-lg text-on-surface uppercase mb-space-md">Record Match Player Stats</h3>
<div className="flex flex-col gap-space-md">
<div>
<label className="block text-label-md text-on-surface-variant uppercase mb-1">Select Player</label>
<select className="w-full bg-surface-container-low p-3 text-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-primary">
<option>Chinedu Eze (Rangers #10)</option>
<option>Ibrahim Musa (Rangers #7)</option>
<option>Sunday Mba (Enyimba #8)</option>
</select>
</div>
<div className="grid grid-cols-2 gap-space-md">
<div>
<label className="block text-label-md text-on-surface-variant uppercase mb-1">Action Type</label>
<select className="w-full bg-surface-container-low p-3 text-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-primary">
<option>Goal Scored</option>
<option>Yellow Card</option>
<option>Red Card</option>
<option>Assist</option>
<option>Substitution In/Out</option>
</select>
</div>
<div>
<label className="block text-label-md text-on-surface-variant uppercase mb-1">Minute</label>
<input className="w-full bg-surface-container-low p-3 text-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-primary" placeholder="14" type="number"/>
</div>
</div>
<div className="flex justify-end gap-space-sm mt-space-md">
<button className="bg-surface-container-high px-space-md py-3 text-body-md font-headline-sm uppercase" onClick={() => {}}>Cancel</button>
<button className="bg-primary text-on-primary px-space-lg py-3 font-headline-sm uppercase hover:bg-primary-container" onClick={() => {}}>Save Stat Entry</button>
</div>
</div>
</div>
</div>

<div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 hidden flex items-center justify-center p-gutter" id="refereeModal">
<div className="bg-surface p-space-xl max-w-lg w-full shadow-2xl relative border-t-8 border-primary">
<button className="absolute top-4 right-4 text-on-surface hover:text-primary" onClick={() => {}}><span className="material-symbols-outlined">close</span></button>
<h3 className="font-headline-lg text-on-surface uppercase mb-space-md">Assign Match Officials</h3>
<div className="flex flex-col gap-space-md">
<div>
<label className="block text-label-md text-on-surface-variant uppercase mb-1">Select Fixture</label>
<select className="w-full bg-surface-container-low p-3 text-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-primary">
<option>Shooting Stars vs Kano Pillars (Tomorrow)</option>
<option>Rangers Int'l vs Enyimba FC (Today)</option>
</select>
</div>
<div>
<label className="block text-label-md text-on-surface-variant uppercase mb-1">Center Referee</label>
<select className="w-full bg-surface-container-low p-3 text-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-primary">
<option>Dr. Emeka Okafor (FIFA)</option>
<option>Grace Akpan (Grade A)</option>
<option>Jibril Ibrahim (National)</option>
</select>
</div>
<div>
<label className="block text-label-md text-on-surface-variant uppercase mb-1">Assistant Referees</label>
<select className="w-full bg-surface-container-low p-3 text-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-primary">
<option>Grace Akpan & Jibril Ibrahim</option>
<option>Kunle Afolayan & Aisha Bello</option>
</select>
</div>
<div className="flex justify-end gap-space-sm mt-space-md">
<button className="bg-surface-container-high px-space-md py-3 text-body-md font-headline-sm uppercase" onClick={() => {}}>Cancel</button>
<button className="bg-primary text-on-primary px-space-lg py-3 font-headline-sm uppercase hover:bg-primary-container" onClick={() => {}}>Confirm Assignment</button>
</div>
</div>
</div>
</div>


</div></main></div>
    </div>
  );
}
