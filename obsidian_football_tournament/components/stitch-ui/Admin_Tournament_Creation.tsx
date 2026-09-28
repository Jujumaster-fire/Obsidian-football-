import React from 'react';

export default function Admin_Tournament_Creation() {
  return (
    <div className="stitch-app">
      <aside className="fixed left-0 top-0 h-full w-64 bg-surface-container-low z-50 flex flex-col pt-space-lg pb-space-xl"><div className="px-gutter mb-space-lg flex items-center gap-space-sm"><img alt="Obsidian Elite Logo" className="h-6 w-auto object-contain" src="/assets/stitch/Admin_Tournament_Creation_asset_1.png"/><span className="font-headline-sm text-primary uppercase tracking-tight">Admin Backend</span></div><nav className="flex-1 px-space-sm flex flex-col gap-space-xs" data-active-classes="bg-primary-container text-on-primary-container font-bold"><a className="flex items-center px-space-md py-3 text-body-md text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all" data-path="admin-dashboard" href="#"><span className="material-symbols-outlined mr-space-md">dashboard</span>Dashboard</a><a aria-current="page" className="flex items-center px-space-md py-3 transition-all bg-primary-container text-on-primary-container font-bold" data-path="admin-tournament-creation" href="#"><span className="material-symbols-outlined mr-space-md">emoji_events</span>Tournaments</a><a className="flex items-center px-space-md py-3 text-body-md text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all" data-path="admin-registration" href="#"><span className="material-symbols-outlined mr-space-md">group_add</span>Registration</a><a className="flex items-center px-space-md py-3 text-body-md text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all" data-path="admin-scheduling" href="#"><span className="material-symbols-outlined mr-space-md">calendar_month</span>Scheduling</a><a className="flex items-center px-space-md py-3 text-body-md text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all" data-path="admin-rules" href="#"><span className="material-symbols-outlined mr-space-md">gavel</span>Rules</a></nav></aside><div className="pl-64"><header className="fixed top-0 left-64 right-0 h-20 bg-surface/80 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-40 flex items-center justify-end px-gutter gap-space-md"><div className="flex items-center gap-space-sm text-on-surface-variant"><span className="material-symbols-outlined">notifications</span><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center"><span className="material-symbols-outlined text-on-primary text-[18px]">person</span></div></div></header><main className="relative pt-20 bg-surface"><div className="flex flex-col w-full bg-surface text-on-surface min-h-screen">

<div className="bg-surface-container-low px-gutter py-space-lg flex flex-col md:flex-row md:items-center justify-between gap-space-md border-b border-outline-variant/20">
<div>
<span className="font-label-md text-primary tracking-widest uppercase mb-1 block">Tournaments Management</span>
<h1 className="font-headline-xl text-headline-xl text-on-surface">CREATE & CONFIGURE TOURNAMENTS</h1>
</div>
<div className="flex items-center gap-space-sm">
<button className="bg-primary hover:bg-primary-container text-on-primary font-headline-sm px-space-lg py-3 flex items-center gap-space-sm transition-all shadow-sm" onClick={() => {}}>
<span className="material-symbols-outlined">add_circle</span>
        New Tournament
      </button>
</div>
</div>

<div className="p-gutter grid grid-cols-1 lg:grid-cols-12 gap-gutter">

<div className="lg:col-span-4 flex flex-col gap-gutter">

<div className="bg-surface-container-low p-space-lg relative overflow-hidden">
<div className="absolute -right-6 -bottom-6 text-outline-variant/10 font-headline-xxl pointer-events-none">26</div>
<span className="font-label-md text-on-surface-variant block uppercase">Active Tournaments</span>
<div className="text-headline-lg font-headline-lg text-primary mt-2">04 Tournaments</div>
<p className="text-body-sm text-on-surface-variant mt-2">Coal City Games 2026 is currently in registration phase across 3 venues.</p>
<div className="mt-4 flex items-center gap-space-sm">
<span className="px-2 py-1 bg-tertiary-container text-on-tertiary font-label-md uppercase">LIVE REGISTRATION</span>
<span className="text-body-sm text-on-surface-variant font-bold">Enugu State</span>
</div>
</div>

<div className="bg-primary-container text-on-primary-container p-space-lg relative">
<div className="absolute top-0 right-0 p-space-md opacity-20">
<span className="material-symbols-outlined text-6xl">gavel</span>
</div>
<span className="font-label-md text-on-primary-container/80 uppercase block">System Advisory</span>
<h3 className="font-headline-md text-headline-md mt-1">VENUE CAPACITY WARNING</h3>
<p className="text-body-sm text-on-primary-container/90 mt-2">Nnamdi Azikiwe Stadium pitch B is currently at 85% allocation for the upcoming Futsal championship window. Review scheduling overlaps.</p>
<button className="mt-space-md bg-on-primary text-primary font-headline-sm px-space-md py-2 uppercase text-xs tracking-wider">Inspect Venues</button>
</div>

<div className="bg-surface-container-low p-space-lg">
<span className="font-label-md text-on-surface-variant block uppercase mb-3">Quick Sport Filter</span>
<div className="flex flex-col gap-2">
<label className="flex items-center justify-between p-2 bg-surface hover:bg-surface-container cursor-pointer transition-all">
<span className="font-body-md font-bold">Football (11-a-side)</span>
<input defaultChecked={true} className="w-4 h-4 accent-primary" type="checkbox"/>
</label>
<label className="flex items-center justify-between p-2 bg-surface hover:bg-surface-container cursor-pointer transition-all">
<span className="font-body-md font-bold">Futsal (Indoor)</span>
<input defaultChecked={true} className="w-4 h-4 accent-primary" type="checkbox"/>
</label>
<label className="flex items-center justify-between p-2 bg-surface hover:bg-surface-container cursor-pointer transition-all">
<span className="font-body-md font-bold">Youth Categories (U-17/U-21)</span>
<input defaultChecked={true} className="w-4 h-4 accent-primary" type="checkbox"/>
</label>
</div>
</div>
</div>

<div className="lg:col-span-8 flex flex-col gap-gutter">
<div className="bg-surface-container-low p-space-lg">
<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-md mb-space-lg">
<div>
<h2 className="font-headline-lg text-headline-lg">TOURNAMENT DIRECTORY</h2>
<p className="text-body-sm text-on-surface-variant">Active, upcoming, and archived sports events under Obsidian Elite jurisdiction.</p>
</div>
<div className="flex items-center gap-space-sm w-full sm:w-auto">
<input className="bg-surface border border-outline-variant px-space-md py-2 text-body-sm focus:border-primary outline-none w-full sm:w-64" placeholder="Search tournament..." type="text"/>
</div>
</div>

<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="border-b border-outline-variant/30 text-label-md uppercase text-on-surface-variant">
<th className="py-3 px-4">Tournament Name</th>
<th className="py-3 px-4">Sport Type</th>
<th className="py-3 px-4">Dates</th>
<th className="py-3 px-4">Venues</th>
<th className="py-3 px-4">Status</th>
<th className="py-3 px-4 text-right">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-outline-variant/20 text-body-sm">
<tr className="hover:bg-surface transition-all">
<td className="py-4 px-4 font-bold text-on-surface">
                  Coal City Games 2026
                  <span className="block text-xs font-normal text-on-surface-variant">Category: Men's Open / U-20</span>
</td>
<td className="py-4 px-4">
<span className="px-2 py-1 bg-surface-container text-on-surface font-label-md uppercase">Football & Futsal</span>
</td>
<td className="py-4 px-4 text-on-surface-variant">June 12 - July 04, 2026</td>
<td className="py-4 px-4 text-on-surface-variant">Nnamdi Azikiwe Stadium, UNEC Arena</td>
<td className="py-4 px-4">
<span className="px-2 py-1 bg-tertiary-container text-on-tertiary font-label-md uppercase">LIVE REGISTRATION</span>
</td>
<td className="py-4 px-4 text-right">
<button className="p-1 hover:bg-surface-container-high text-on-surface transition-all" title="Edit Tournament">
<span className="material-symbols-outlined text-[20px]">edit</span>
</button>
<button className="p-1 hover:bg-surface-container-high text-error transition-all" title="Archive">
<span className="material-symbols-outlined text-[20px]">archive</span>
</button>
</td>
</tr>
<tr className="hover:bg-surface transition-all">
<td className="py-4 px-4 font-bold text-on-surface">
                  Enugu Elite Futsal Cup
                  <span className="block text-xs font-normal text-on-surface-variant">Category: Women's Pro</span>
</td>
<td className="py-4 px-4">
<span className="px-2 py-1 bg-surface-container text-on-surface font-label-md uppercase">Futsal Only</span>
</td>
<td className="py-4 px-4 text-on-surface-variant">August 10 - August 25, 2026</td>
<td className="py-4 px-4 text-on-surface-variant">Indoor Sports Hall, Ogui</td>
<td className="py-4 px-4">
<span className="px-2 py-1 bg-secondary-container text-on-secondary-container font-label-md uppercase">DRAFTING</span>
</td>
<td className="py-4 px-4 text-right">
<button className="p-1 hover:bg-surface-container-high text-on-surface transition-all" title="Edit Tournament">
<span className="material-symbols-outlined text-[20px]">edit</span>
</button>
<button className="p-1 hover:bg-surface-container-high text-error transition-all" title="Archive">
<span className="material-symbols-outlined text-[20px]">archive</span>
</button>
</td>
</tr>
<tr className="hover:bg-surface transition-all">
<td className="py-4 px-4 font-bold text-on-surface">
                  Governor's Championship 2025
                  <span className="block text-xs font-normal text-on-surface-variant">Category: All Age Groups</span>
</td>
<td className="py-4 px-4">
<span className="px-2 py-1 bg-surface-container text-on-surface font-label-md uppercase">Football</span>
</td>
<td className="py-4 px-4 text-on-surface-variant">Nov 01 - Dec 15, 2025</td>
<td className="py-4 px-4 text-on-surface-variant">Multiple Grounds, Enugu</td>
<td className="py-4 px-4">
<span className="px-2 py-1 bg-surface-container-highest text-on-surface-variant font-label-md uppercase">COMPLETED</span>
</td>
<td className="py-4 px-4 text-right">
<button className="p-1 hover:bg-surface-container-high text-on-surface transition-all" title="View Report">
<span className="material-symbols-outlined text-[20px]">visibility</span>
</button>
</td>
</tr>
<tr className="hover:bg-surface transition-all">
<td className="py-4 px-4 font-bold text-on-surface">
                  Coal City Youth Fest 2025
                  <span className="block text-xs font-normal text-on-surface-variant">Category: U-15 / U-17</span>
</td>
<td className="py-4 px-4">
<span className="px-2 py-1 bg-surface-container text-on-surface font-label-md uppercase">Football & Futsal</span>
</td>
<td className="py-4 px-4 text-on-surface-variant">May 01 - May 20, 2025</td>
<td className="py-4 px-4 text-on-surface-variant">Awgu Township Stadium</td>
<td className="py-4 px-4">
<span className="px-2 py-1 bg-surface-container-highest text-on-surface-variant font-label-md uppercase">COMPLETED</span>
</td>
<td className="py-4 px-4 text-right">
<button className="p-1 hover:bg-surface-container-high text-on-surface transition-all" title="View Report">
<span className="material-symbols-outlined text-[20px]">visibility</span>
</button>
</td>
</tr>
</tbody>
</table>
</div>

<div className="mt-space-lg flex items-center justify-between pt-4 border-t border-outline-variant/20">
<span className="text-body-sm text-on-surface-variant">Showing 4 of 12 total tournaments</span>
<div className="flex items-center gap-space-sm">
<button className="px-3 py-1 bg-surface border border-outline-variant text-body-sm hover:bg-surface-container">Prev</button>
<button className="px-3 py-1 bg-primary text-on-primary font-bold text-body-sm">1</button>
<button className="px-3 py-1 bg-surface border border-outline-variant text-body-sm hover:bg-surface-container">2</button>
<button className="px-3 py-1 bg-surface border border-outline-variant text-body-sm hover:bg-surface-container">Next</button>
</div>
</div>
</div>
</div>
</div>

<div className="fixed inset-0 bg-inverse-surface/60 backdrop-blur-sm z-50 flex items-center justify-center p-gutter hidden" id="create-modal">
<div className="bg-surface w-full max-w-3xl max-h-[921px] overflow-y-auto p-space-xl shadow-2xl relative">
<button className="absolute top-6 right-6 p-2 text-on-surface hover:bg-surface-container" onClick={() => {}}>
<span className="material-symbols-outlined">close</span>
</button>
<div className="mb-space-lg">
<span className="font-label-md text-primary uppercase block">Obsidian Elite Secure Gateway</span>
<h2 className="font-headline-xl text-headline-lg mt-1">CONFIGURE NEW TOURNAMENT</h2>
<p className="text-body-sm text-on-surface-variant">Define schedule windows, venues, sport formats, and athlete categories for marquee events.</p>
</div>
<form className="flex flex-col gap-space-md" onSubmit={() => {}}>

<div className="flex flex-col gap-1">
<label className="font-label-md uppercase text-on-surface-variant">Tournament Name</label>
<input className="bg-surface border border-outline-variant px-space-md py-3 text-body-md focus:border-primary outline-none" placeholder="e.g. Coal City Games 2026" required={true} type="text"/>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
<div className="flex flex-col gap-1">
<label className="font-label-md uppercase text-on-surface-variant">Start Date</label>
<input className="bg-surface border border-outline-variant px-space-md py-3 text-body-md focus:border-primary outline-none" required={true} type="date"/>
</div>
<div className="flex flex-col gap-1">
<label className="font-label-md uppercase text-on-surface-variant">End Date</label>
<input className="bg-surface border border-outline-variant px-space-md py-3 text-body-md focus:border-primary outline-none" required={true} type="date"/>
</div>
</div>

<div className="flex flex-col gap-1">
<label className="font-label-md uppercase text-on-surface-variant">Primary Venues / Stadiums</label>
<select className="bg-surface border border-outline-variant px-space-md py-3 text-body-md focus:border-primary outline-none h-28" multiple={true}>
<option>Nnamdi Azikiwe Stadium, Enugu</option>
<option>UNEC Sports Complex, Enugu</option>
<option>Indoor Sports Hall, Ogui</option>
<option>Awgu Township Stadium</option>
<option>Nsukka Mini Stadium</option>
</select>
<span className="text-body-sm text-on-surface-variant text-xs">Hold Ctrl/Cmd to select multiple venues.</span>
</div>

<div className="flex flex-col gap-2 pt-2">
<label className="font-label-md uppercase text-on-surface-variant">Available Sport Disciplines</label>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
<label className="flex items-center gap-space-sm p-4 border border-outline-variant cursor-pointer hover:border-primary transition-all">
<input defaultChecked={true} className="w-5 h-5 accent-primary" type="checkbox"/>
<div>
<span className="font-headline-sm block">Football (11-a-side)</span>
<span className="text-body-sm text-on-surface-variant text-xs">Standard outdoor pitch regulation</span>
</div>
</label>
<label className="flex items-center gap-space-sm p-4 border border-outline-variant cursor-pointer hover:border-primary transition-all">
<input defaultChecked={true} className="w-5 h-5 accent-primary" type="checkbox"/>
<div>
<span className="font-headline-sm block">Futsal (Indoor)</span>
<span className="text-body-sm text-on-surface-variant text-xs">Parquet court indoor championship</span>
</div>
</label>
</div>
</div>

<div className="flex flex-col gap-2 pt-2">
<label className="font-label-md uppercase text-on-surface-variant">Age & Gender Categories</label>
<div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
<label className="flex items-center gap-2 p-2 border border-outline-variant bg-surface cursor-pointer">
<input defaultChecked={true} className="accent-primary" type="checkbox"/>
<span className="text-body-sm font-bold">Men's Open</span>
</label>
<label className="flex items-center gap-2 p-2 border border-outline-variant bg-surface cursor-pointer">
<input defaultChecked={true} className="accent-primary" type="checkbox"/>
<span className="text-body-sm font-bold">Women's Open</span>
</label>
<label className="flex items-center gap-2 p-2 border border-outline-variant bg-surface cursor-pointer">
<input className="accent-primary" type="checkbox"/>
<span className="text-body-sm font-bold">U-17 Youth</span>
</label>
<label className="flex items-center gap-2 p-2 border border-outline-variant bg-surface cursor-pointer">
<input className="accent-primary" type="checkbox"/>
<span className="text-body-sm font-bold">U-20 Junior</span>
</label>
</div>
</div>

<div className="flex items-center justify-end gap-space-md mt-space-md pt-4 border-t border-outline-variant/20">
<button className="px-space-lg py-3 border border-outline-variant text-on-surface font-headline-sm hover:bg-surface-container" onClick={() => {}} type="button">Cancel</button>
<button className="px-space-xl py-3 bg-primary text-on-primary font-headline-sm hover:bg-primary-container shadow-sm" type="submit">Initialize Tournament</button>
</div>
</form>
</div>
</div>
</div></main></div>
    </div>
  );
}
