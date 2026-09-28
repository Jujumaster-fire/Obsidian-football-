"use client";

import React from 'react';

export default function Admin_Team_Registration() {
  return (
    <div className="stitch-app">
      <aside className="fixed left-0 top-0 h-full w-64 bg-surface-container-low z-50 flex flex-col pt-space-lg pb-space-xl"><div className="px-gutter mb-space-lg flex items-center gap-space-sm"><img alt="Obsidian Elite Logo" className="h-6 w-auto object-contain" src="/assets/stitch/Admin_Team_Registration_asset_1.png"/><span className="font-headline-sm text-primary uppercase tracking-tight">Admin Backend</span></div><nav className="flex-1 px-space-sm flex flex-col gap-space-xs" data-active-classes="bg-primary-container text-on-primary-container font-bold"><a className="flex items-center px-space-md py-3 text-body-md text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all" data-path="admin-dashboard" href="#"><span className="material-symbols-outlined mr-space-md">dashboard</span>Dashboard</a><a className="flex items-center px-space-md py-3 text-body-md text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all" data-path="admin-tournament-creation" href="#"><span className="material-symbols-outlined mr-space-md">emoji_events</span>Tournaments</a><a aria-current="page" className="flex items-center px-space-md py-3 transition-all bg-primary-container text-on-primary-container font-bold" data-path="admin-registration" href="#"><span className="material-symbols-outlined mr-space-md">group_add</span>Registration</a><a className="flex items-center px-space-md py-3 text-body-md text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all" data-path="admin-scheduling" href="#"><span className="material-symbols-outlined mr-space-md">calendar_month</span>Scheduling</a><a className="flex items-center px-space-md py-3 text-body-md text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all" data-path="admin-rules" href="#"><span className="material-symbols-outlined mr-space-md">gavel</span>Rules</a></nav></aside><div className="pl-64"><header className="fixed top-0 left-64 right-0 h-20 bg-surface/80 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-40 flex items-center justify-end px-gutter gap-space-md"><div className="flex items-center gap-space-sm text-on-surface-variant"><span className="material-symbols-outlined">notifications</span><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center"><span className="material-symbols-outlined text-on-primary text-[18px]">person</span></div></div></header><main className="relative pt-20 bg-surface"><div className="flex flex-col w-full pb-24 bg-surface text-on-surface">

<div className="bg-surface-container-low px-gutter py-space-xl flex flex-col md:flex-row md:items-center justify-between gap-space-md">
<div>
<div className="flex items-center gap-space-sm mb-space-xs">
<span className="px-space-sm py-1 bg-primary text-on-primary font-label-md uppercase tracking-wider">Enugu 2026 Portal</span>
<span className="text-on-surface-variant font-label-md uppercase tracking-wider">/ Admin Registration</span>
</div>
<h1 className="font-headline-xxl text-on-surface uppercase tracking-tight">Team & Roster Registration</h1>
<p className="text-body-md text-on-surface-variant max-w-2xl mt-1">Onboard new squads, review submitted player rosters, assign tournament sport categories, and manage approval status in real-time.</p>
</div>
<div className="flex items-center gap-space-md">
<div className="bg-surface-container-lowest px-space-md py-space-sm border-l-4 border-primary shadow-sm">
<div className="text-label-md text-on-surface-variant uppercase">Total Registered</div>
<div className="font-headline-lg text-primary">48 Squads</div>
</div>
<button className="bg-primary hover:bg-primary-container text-on-primary font-headline-sm px-space-lg py-3 flex items-center gap-space-sm uppercase tracking-wider transition-all shadow-md">
<span className="material-symbols-outlined">add_circle</span> Register New Team
      </button>
</div>
</div>

<div className="px-gutter py-space-lg grid grid-cols-1 lg:grid-cols-12 gap-space-lg">

<div className="lg:col-span-4 flex flex-col gap-space-lg">

<div className="bg-surface-container-lowest p-space-lg shadow-sm">
<h3 className="font-headline-md text-on-surface uppercase mb-space-md flex items-center justify-between">
<span>Registration Funnel</span>
<span className="material-symbols-outlined text-primary">analytics</span>
</h3>
<div className="flex flex-col gap-space-md">
<div>
<div className="flex justify-between text-body-sm mb-1">
<span className="font-bold text-on-surface">Approved Teams</span>
<span className="text-on-surface-variant">32 / 48</span>
</div>
<div className="w-full h-3 bg-surface-container overflow-hidden">
<div className="bg-tertiary-container h-full w-[66%]"></div>
</div>
</div>
<div>
<div className="flex justify-between text-body-sm mb-1">
<span className="font-bold text-on-surface">Pending Review</span>
<span className="text-on-surface-variant">12 / 48</span>
</div>
<div className="w-full h-3 bg-surface-container overflow-hidden">
<div className="bg-secondary-container h-full w-[25%]"></div>
</div>
</div>
<div>
<div className="flex justify-between text-body-sm mb-1">
<span className="font-bold text-on-surface">Action Required (Docs)</span>
<span className="text-on-surface-variant">4 / 48</span>
</div>
<div className="w-full h-3 bg-surface-container overflow-hidden">
<div className="bg-primary h-full w-[9%]"></div>
</div>
</div>
</div>
</div>

<div className="bg-surface-container-lowest p-space-lg shadow-sm">
<h3 className="font-headline-md text-on-surface uppercase mb-space-md flex items-center justify-between">
<span>Filter Roster Data</span>
<span className="material-symbols-outlined text-primary">filter_alt</span>
</h3>
<div className="flex flex-col gap-space-md">
<div>
<label className="block text-label-md text-on-surface-variant uppercase mb-1">Search Squad / Coach</label>
<div className="relative">
<span className="material-symbols-outlined absolute left-3 top-3 text-on-surface-variant text-[20px]">search</span>
<input className="w-full pl-10 pr-4 py-2.5 bg-surface border border-outline/30 text-on-surface focus:border-primary focus:outline-none transition-all" id="searchInput" placeholder="Enter team name..." type="text"/>
</div>
</div>
<div>
<label className="block text-label-md text-on-surface-variant uppercase mb-1">Sport Category</label>
<select className="w-full px-4 py-2.5 bg-surface border border-outline/30 text-on-surface focus:border-primary focus:outline-none transition-all" id="sportFilter">
<option value="">All Sports</option>
<option value="Football">Football (11-a-side)</option>
<option value="Futsal">Futsal (Indoor)</option>
</select>
</div>
<div>
<label className="block text-label-md text-on-surface-variant uppercase mb-1">Gender Division</label>
<select className="w-full px-4 py-2.5 bg-surface border border-outline/30 text-on-surface focus:border-primary focus:outline-none transition-all" id="genderFilter">
<option value="">All Divisions</option>
<option value="Male">Male Category</option>
<option value="Female">Female Category</option>
</select>
</div>
<button className="w-full bg-surface-container-high hover:bg-surface-dim text-on-surface font-headline-sm py-2.5 uppercase transition-all">
            Apply Filters
          </button>
</div>
</div>

<div className="bg-primary-fixed text-on-primary-fixed p-space-md flex items-start gap-space-sm border-l-4 border-primary">
<span className="material-symbols-outlined mt-0.5">info</span>
<div>
<h4 className="font-headline-sm uppercase text-primary">Registration Deadline</h4>
<p className="text-body-sm mt-1">All final player medical clearances and passport uploads must be completed before Friday, 18:00 WAT.</p>
</div>
</div>
</div>

<div className="lg:col-span-8 flex flex-col gap-space-lg">
<div className="bg-surface-container-lowest p-space-lg shadow-sm">
<div className="flex flex-col sm:flex-row sm:items-center justify-between pb-space-md border-b border-surface-container gap-space-sm">
<div>
<h2 className="font-headline-lg text-on-surface uppercase">Submitted Teams Roster</h2>
<p className="text-body-sm text-on-surface-variant">Review team credentials, inspect staff composition, and toggle approval status.</p>
</div>
<div className="flex items-center gap-space-sm">
<span className="text-label-md bg-tertiary-fixed text-on-tertiary-fixed-variant px-space-sm py-1 uppercase">Live Feed Active</span>
</div>
</div>

<div className="overflow-x-auto mt-space-md">
<table className="w-full text-left border-collapse">
<thead>
<tr className="border-b border-surface-container text-on-surface-variant text-label-md uppercase">
<th className="py-3 px-2">Team / Logo</th>
<th className="py-3 px-2">Sport & Division</th>
<th className="py-3 px-2">Coach & Staff</th>
<th className="py-3 px-2">Roster Size</th>
<th className="py-3 px-2">Status</th>
<th className="py-3 px-2 text-right">Actions</th>
</tr>
</thead>
<tbody className="text-body-sm divide-y divide-surface-container" id="teamsTableBody">

<tr className="hover:bg-surface-container-low transition-all">
<td className="py-4 px-2 flex items-center gap-space-sm">
<div className="w-10 h-10 bg-surface-container flex items-center justify-center font-headline-sm text-primary overflow-hidden">
<img className="w-full h-full object-cover" data-alt="Emblem of Enugu Rangers International featuring a stylized antelope against a red and white crest background." src="/assets/stitch/Admin_Team_Registration_asset_2.png"/>
</div>
<div>
<div className="font-bold text-on-surface">Rangers Int. FC</div>
<div className="text-[12px] text-on-surface-variant">Enugu State</div>
</div>
</td>
<td className="py-4 px-2">
<span className="inline-block bg-primary-fixed text-on-primary-fixed px-2 py-0.5 text-label-md uppercase mb-1">Football</span>
<div className="text-[12px] text-on-surface-variant">Male Category</div>
</td>
<td className="py-4 px-2">
<div className="font-medium">Coach Fidelis Ilechukwu</div>
<div className="text-[12px] text-on-surface-variant">4 Staff Members</div>
</td>
<td className="py-4 px-2">
<span className="font-bold">26 Players</span>
</td>
<td className="py-4 px-2">
<span className="bg-tertiary-container text-on-tertiary px-2 py-1 text-label-md uppercase">Approved</span>
</td>
<td className="py-4 px-2 text-right">
<div className="flex items-center justify-end gap-space-xs">
<button className="p-2 hover:bg-surface-container text-on-surface" title="View Roster">
<span className="material-symbols-outlined text-[20px]">visibility</span>
</button>
<button className="p-2 hover:bg-tertiary-fixed text-tertiary" title="Change Status">
<span className="material-symbols-outlined text-[20px]">check_circle</span>
</button>
<button className="p-2 hover:bg-error-container text-error" title="Delete">
<span className="material-symbols-outlined text-[20px]">delete</span>
</button>
</div>
</td>
</tr>

<tr className="hover:bg-surface-container-low transition-all">
<td className="py-4 px-2 flex items-center gap-space-sm">
<div className="w-10 h-10 bg-surface-container flex items-center justify-center font-headline-sm text-primary overflow-hidden">
<img className="w-full h-full object-cover" data-alt="Abia Warriors FC team badge featuring traditional warrior shield and spear in navy blue and gold." src="/assets/stitch/Admin_Team_Registration_asset_3.png"/>
</div>
<div>
<div className="font-bold text-on-surface">Abia Warriors Queens</div>
<div className="text-[12px] text-on-surface-variant">Abia State</div>
</div>
</td>
<td className="py-4 px-2">
<span className="inline-block bg-secondary-fixed text-on-secondary-fixed px-2 py-0.5 text-label-md uppercase mb-1">Football</span>
<div className="text-[12px] text-on-surface-variant">Female Category</div>
</td>
<td className="py-4 px-2">
<div className="font-medium">Coach Imama Amapakabo</div>
<div className="text-[12px] text-on-surface-variant">3 Staff Members</div>
</td>
<td className="py-4 px-2">
<span className="font-bold">22 Players</span>
</td>
<td className="py-4 px-2">
<span className="bg-secondary-container text-on-secondary-container px-2 py-1 text-label-md uppercase">Pending</span>
</td>
<td className="py-4 px-2 text-right">
<div className="flex items-center justify-end gap-space-xs">
<button className="p-2 hover:bg-surface-container text-on-surface" title="View Roster">
<span className="material-symbols-outlined text-[20px]">visibility</span>
</button>
<button className="p-2 hover:bg-tertiary-fixed text-tertiary" title="Approve">
<span className="material-symbols-outlined text-[20px]">check_circle</span>
</button>
<button className="p-2 hover:bg-error-container text-error" title="Delete">
<span className="material-symbols-outlined text-[20px]">delete</span>
</button>
</div>
</td>
</tr>

<tr className="hover:bg-surface-container-low transition-all">
<td className="py-4 px-2 flex items-center gap-space-sm">
<div className="w-10 h-10 bg-surface-container flex items-center justify-center font-headline-sm text-primary overflow-hidden">
<img className="w-full h-full object-cover" data-alt="Coal City Futsal Club logo featuring indoor arena lightning bolts and football graphic." src="/assets/stitch/Admin_Team_Registration_asset_4.png"/>
</div>
<div>
<div className="font-bold text-on-surface">Coal City Futsal Strikers</div>
<div className="text-[12px] text-on-surface-variant">Enugu State</div>
</div>
</td>
<td className="py-4 px-2">
<span className="inline-block bg-tertiary-fixed-dim text-on-tertiary-fixed px-2 py-0.5 text-label-md uppercase mb-1">Futsal</span>
<div className="text-[12px] text-on-surface-variant">Male Category</div>
</td>
<td className="py-4 px-2">
<div className="font-medium">Coach Chijioke Opara</div>
<div className="text-[12px] text-on-surface-variant">2 Staff Members</div>
</td>
<td className="py-4 px-2">
<span className="font-bold">14 Players</span>
</td>
<td className="py-4 px-2">
<span className="bg-tertiary-container text-on-tertiary px-2 py-1 text-label-md uppercase">Approved</span>
</td>
<td className="py-4 px-2 text-right">
<div className="flex items-center justify-end gap-space-xs">
<button className="p-2 hover:bg-surface-container text-on-surface" title="View Roster">
<span className="material-symbols-outlined text-[20px]">visibility</span>
</button>
<button className="p-2 hover:bg-tertiary-fixed text-tertiary" title="Change Status">
<span className="material-symbols-outlined text-[20px]">check_circle</span>
</button>
<button className="p-2 hover:bg-error-container text-error" title="Delete">
<span className="material-symbols-outlined text-[20px]">delete</span>
</button>
</div>
</td>
</tr>
</tbody>
</table>
</div>

<div className="flex items-center justify-between pt-space-md mt-space-md border-t border-surface-container text-body-sm text-on-surface-variant">
<div>Showing <span className="font-bold text-on-surface">3</span> of <span className="font-bold text-on-surface">48</span> registered squads</div>
<div className="flex items-center gap-space-sm">
<button className="px-3 py-1 bg-surface-container hover:bg-surface-dim text-on-surface disabled:opacity-50" disabled={true}>Previous</button>
<button className="px-3 py-1 bg-primary text-on-primary">1</button>
<button className="px-3 py-1 bg-surface-container hover:bg-surface-dim text-on-surface">2</button>
<button className="px-3 py-1 bg-surface-container hover:bg-surface-dim text-on-surface">3</button>
<button className="px-3 py-1 bg-surface-container hover:bg-surface-dim text-on-surface">Next</button>
</div>
</div>
</div>
</div>
</div>

<div className="fixed inset-0 bg-inverse-surface/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 hidden" id="registrationModal">
<div className="bg-surface-container-lowest w-full max-w-4xl max-h-[921px] overflow-y-auto shadow-2xl flex flex-col">

<div className="bg-primary text-on-primary px-gutter py-space-md flex items-center justify-between sticky top-0 z-10">
<div>
<h2 className="font-headline-lg uppercase">New Team Registration Portal</h2>
<p className="text-body-sm text-primary-fixed">Fill out official credentials, upload emblems, and input staff/player lineups for Enugu 2026.</p>
</div>
<button className="text-on-primary hover:bg-primary-container p-2">
<span className="material-symbols-outlined">close</span>
</button>
</div>

<form className="p-gutter flex flex-col gap-space-lg" id="newTeamForm">

<div>
<h3 className="font-headline-md text-on-surface uppercase mb-space-sm flex items-center gap-space-sm border-b pb-2 border-surface-container">
<span className="material-symbols-outlined text-primary">sports_soccer</span> Team Information & Category
          </h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
<div>
<label className="block text-label-md text-on-surface-variant uppercase mb-1">Official Team Name *</label>
<input className="w-full px-4 py-2.5 bg-surface border border-outline/30 text-on-surface focus:border-primary focus:outline-none" id="regTeamName" placeholder="e.g. Enugu Lions FC" required={true} type="text"/>
</div>
<div>
<label className="block text-label-md text-on-surface-variant uppercase mb-1">State / Region Represented *</label>
<input className="w-full px-4 py-2.5 bg-surface border border-outline/30 text-on-surface focus:border-primary focus:outline-none" id="regState" placeholder="e.g. Enugu State" required={true} type="text"/>
</div>
<div>
<label className="block text-label-md text-on-surface-variant uppercase mb-1">Assign Sport *</label>
<select className="w-full px-4 py-2.5 bg-surface border border-outline/30 text-on-surface focus:border-primary focus:outline-none" id="regSport" required={true}>
<option value="Football">Football (11-a-side)</option>
<option value="Futsal">Futsal (Indoor Arena)</option>
</select>
</div>
<div>
<label className="block text-label-md text-on-surface-variant uppercase mb-1">Gender Division *</label>
<select className="w-full px-4 py-2.5 bg-surface border border-outline/30 text-on-surface focus:border-primary focus:outline-none" id="regGender" required={true}>
<option value="Male">Male Category</option>
<option value="Female">Female Category</option>
</select>
</div>
</div>
</div>

<div>
<h3 className="font-headline-md text-on-surface uppercase mb-space-sm flex items-center gap-space-sm border-b pb-2 border-surface-container">
<span className="material-symbols-outlined text-primary">image</span> Team Emblem / Logo
          </h3>
<div className="border-2 border-dashed border-outline/40 p-space-lg text-center bg-surface-container-low flex flex-col items-center justify-center gap-space-sm">
<span className="material-symbols-outlined text-[48px] text-on-surface-variant">cloud_upload</span>
<div className="font-bold text-on-surface">Drag and drop club crest here, or browse files</div>
<p className="text-body-sm text-on-surface-variant">Supports PNG, JPG, SVG (Max 5MB, High Resolution recommended)</p>
<input className="hidden" id="regLogoFile" type="file"/>
<button className="px-4 py-2 bg-surface border border-outline/40 text-on-surface font-headline-sm uppercase text-[14px]" type="button">Select Logo File</button>
</div>
</div>

<div>
<h3 className="font-headline-md text-on-surface uppercase mb-space-sm flex items-center gap-space-sm border-b pb-2 border-surface-container">
<span className="material-symbols-outlined text-primary">badge</span> Technical Staff Lineup
          </h3>
<div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
<div>
<label className="block text-label-md text-on-surface-variant uppercase mb-1">Head Coach Name *</label>
<input className="w-full px-4 py-2.5 bg-surface border border-outline/30 text-on-surface focus:border-primary focus:outline-none" id="regHeadCoach" placeholder="Full Name" required={true} type="text"/>
</div>
<div>
<label className="block text-label-md text-on-surface-variant uppercase mb-1">Assistant Coach</label>
<input className="w-full px-4 py-2.5 bg-surface border border-outline/30 text-on-surface focus:border-primary focus:outline-none" id="regAsstCoach" placeholder="Full Name" type="text"/>
</div>
<div>
<label className="block text-label-md text-on-surface-variant uppercase mb-1">Team Medic / Physio</label>
<input className="w-full px-4 py-2.5 bg-surface border border-outline/30 text-on-surface focus:border-primary focus:outline-none" id="regMedic" placeholder="Full Name" type="text"/>
</div>
</div>
</div>

<div>
<h3 className="font-headline-md text-on-surface uppercase mb-space-sm flex items-center gap-space-sm border-b pb-2 border-surface-container">
<span className="material-symbols-outlined text-primary">groups</span> Player Roster Input
          </h3>
<p className="text-body-sm text-on-surface-variant mb-space-md">Enter player names and jersey numbers separated by commas or add them individually below.</p>
<textarea className="w-full p-4 bg-surface border border-outline/30 text-on-surface focus:border-primary focus:outline-none font-mono text-body-sm" id="regPlayerList" placeholder="1. John Doe (GK)
2. Emeka Obi (DF)
3. Samuel Okoro (MF)
4. David Adebayo (FW)" rows={4}></textarea>
</div>

<div className="flex items-center justify-end gap-space-md pt-space-md border-t border-surface-container">
<button className="px-space-lg py-3 bg-surface-container hover:bg-surface-dim text-on-surface font-headline-sm uppercase" type="button">Cancel</button>
<button className="px-space-xl py-3 bg-primary hover:bg-primary-container text-on-primary font-headline-sm uppercase tracking-wider" type="submit">Submit Team Roster</button>
</div>
</form>
</div>
</div>

<div className="fixed inset-0 bg-inverse-surface/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 hidden" id="rosterModal">
<div className="bg-surface-container-lowest w-full max-w-2xl max-h-[870px] overflow-y-auto shadow-2xl flex flex-col">
<div className="bg-surface-container-low px-gutter py-space-md flex items-center justify-between border-b border-surface-container">
<div>
<h3 className="font-headline-lg text-on-surface uppercase" id="modalTeamTitle">Team Roster Breakdown</h3>
<p className="text-body-sm text-on-surface-variant" id="modalTeamMeta">Football / Male Category • 26 Registered Players</p>
</div>
<button className="p-2 hover:bg-surface-container text-on-surface">
<span className="material-symbols-outlined">close</span>
</button>
</div>
<div className="p-gutter flex flex-col gap-space-md">
<div className="bg-surface-container-low p-space-md flex items-center justify-between">
<div>
<div className="text-label-md text-on-surface-variant uppercase">Technical Crew</div>
<div className="font-bold text-on-surface mt-1">Head Coach: Fidelis Ilechukwu</div>
<div className="text-body-sm text-on-surface-variant">Assoc: Dr. Kalu (Team Doctor), B. Nnamdi (GK Coach)</div>
</div>
<span className="bg-tertiary-container text-on-tertiary px-3 py-1 text-label-md uppercase">Verified Staff</span>
</div>
<div>
<h4 className="font-headline-sm uppercase text-on-surface mb-2">Squad List</h4>
<div className="flex flex-col gap-space-xs" id="modalPlayerListContainer">
<div className="flex justify-between items-center p-2 bg-surface border border-surface-container">
<span className="font-bold">#1 • John Doe</span>
<span className="text-body-sm text-on-surface-variant">Goalkeeper (GK) • Cleared</span>
</div>
<div className="flex justify-between items-center p-2 bg-surface border border-surface-container">
<span className="font-bold">#4 • Emeka Obi</span>
<span className="text-body-sm text-on-surface-variant">Defender (CB) • Cleared</span>
</div>
<div className="flex justify-between items-center p-2 bg-surface border border-surface-container">
<span className="font-bold">#10 • Samuel Okoro</span>
<span className="text-body-sm text-on-surface-variant">Midfielder (AM) • Cleared</span>
</div>
<div className="flex justify-between items-center p-2 bg-surface border border-surface-container">
<span className="font-bold">#9 • David Adebayo</span>
<span className="text-body-sm text-on-surface-variant">Forward (ST) • Cleared</span>
</div>
</div>
</div>
</div>
<div className="px-gutter py-space-md bg-surface-container-low border-t border-surface-container flex justify-end">
<button className="px-6 py-2 bg-primary text-on-primary font-headline-sm uppercase">Close</button>
</div>
</div>
</div>


</div></main></div>
    </div>
  );
}
