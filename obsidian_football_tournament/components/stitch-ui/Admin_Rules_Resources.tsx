import React from 'react';

export default function Admin_Rules_Resources() {
  return (
    <div className="stitch-app">
      <aside className="fixed left-0 top-0 h-full w-64 bg-surface-container-low z-50 flex flex-col pt-space-lg pb-space-xl"><div className="px-gutter mb-space-lg flex items-center gap-space-sm"><img alt="Obsidian Elite Logo" className="h-6 w-auto object-contain" src="/assets/stitch/Admin_Rules_Resources_asset_1.png"/><span className="font-headline-sm text-primary uppercase tracking-tight">Admin Backend</span></div><nav className="flex-1 px-space-sm flex flex-col gap-space-xs" data-active-classes="bg-primary-container text-on-primary-container font-bold"><a className="flex items-center px-space-md py-3 text-body-md text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all" data-path="admin-dashboard" href="#"><span className="material-symbols-outlined mr-space-md">dashboard</span>Dashboard</a><a className="flex items-center px-space-md py-3 text-body-md text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all" data-path="admin-tournament-creation" href="#"><span className="material-symbols-outlined mr-space-md">emoji_events</span>Tournaments</a><a className="flex items-center px-space-md py-3 text-body-md text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all" data-path="admin-registration" href="#"><span className="material-symbols-outlined mr-space-md">group_add</span>Registration</a><a className="flex items-center px-space-md py-3 text-body-md text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all" data-path="admin-scheduling" href="#"><span className="material-symbols-outlined mr-space-md">calendar_month</span>Scheduling</a><a aria-current="page" className="flex items-center px-space-md py-3 transition-all bg-primary-container text-on-primary-container font-bold" data-path="admin-rules" href="#"><span className="material-symbols-outlined mr-space-md">gavel</span>Rules</a></nav></aside><div className="pl-64"><header className="fixed top-0 left-64 right-0 h-20 bg-surface/80 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-40 flex items-center justify-end px-gutter gap-space-md"><div className="flex items-center gap-space-sm text-on-surface-variant"><span className="material-symbols-outlined">notifications</span><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center"><span className="material-symbols-outlined text-on-primary text-[18px]">person</span></div></div></header><main className="relative pt-20 bg-surface"><div className="flex flex-col w-full bg-surface text-on-surface min-h-[calc(100vh-5rem)]">

<div className="px-gutter pt-space-xl pb-space-lg bg-surface-container-low flex flex-col md:flex-row md:items-end justify-between gap-space-md">
<div className="max-w-2xl">
<div className="flex items-center gap-space-sm mb-space-xs">
<span className="px-2 py-0.5 bg-primary-container text-on-primary-container font-label-md uppercase tracking-wider">Governance & Official Docs</span>
<span className="text-on-surface-variant font-body-sm">/ ENUGU 2026</span>
</div>
<h1 className="text-headline-xl font-headline-xl uppercase text-on-surface">Rules & Resources</h1>
<p className="text-body-md text-on-surface-variant mt-space-xs">
        Central repository for tournament handbooks, FIFA regulations, official disciplinary codes, and referee guidelines. Upload, manage, and distribute securely to all registered teams and match officials.
      </p>
</div>
<div className="flex items-center gap-space-md">
<button className="bg-primary hover:bg-surface-tint text-on-primary font-headline-sm uppercase px-space-lg py-3 flex items-center gap-space-sm transition-all shadow-md" onClick={() => {}}>
<span className="material-symbols-outlined">upload_file</span>
        Upload Document
      </button>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-[1px] bg-outline-variant/30 border-y border-outline-variant/30">
<div className="bg-surface p-space-lg flex flex-col">
<span className="text-label-md text-on-surface-variant uppercase">Total Documents</span>
<span className="text-headline-lg font-headline-lg text-primary mt-space-xs">18 Files</span>
<span className="text-body-sm text-on-surface-variant mt-1">Across 4 categories</span>
</div>
<div className="bg-surface p-space-lg flex flex-col">
<span className="text-label-md text-on-surface-variant uppercase">Storage Used</span>
<span className="text-headline-lg font-headline-lg text-on-surface mt-space-xs">142.4 MB</span>
<span className="text-body-sm text-on-surface-variant mt-1">Limit: 5 GB (Cloud)</span>
</div>
<div className="bg-surface p-space-lg flex flex-col">
<span className="text-label-md text-on-surface-variant uppercase">Total Downloads</span>
<span className="text-headline-lg font-headline-lg text-secondary mt-space-xs">3,892</span>
<span className="text-body-sm text-on-surface-variant mt-1">+245 this week</span>
</div>
<div className="bg-surface p-space-lg flex flex-col">
<span className="text-label-md text-on-surface-variant uppercase">Last Sync</span>
<span className="text-headline-lg font-headline-lg text-tertiary-container mt-space-xs">Today</span>
<span className="text-body-sm text-on-surface-variant mt-1">Auto-backup active</span>
</div>
</div>

<div className="p-gutter flex flex-col gap-space-xl">

<div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-space-md bg-surface-container p-space-md">

<div className="relative flex-1">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
<input className="w-full bg-surface-container-lowest text-on-surface pl-10 pr-space-md py-3 text-body-md border border-outline-variant focus:border-primary outline-none transition-all" id="docSearch" onInput={() => {}} placeholder="Search by title, keyword, or file type..." type="text"/>
</div>

<div className="flex items-center gap-space-xs overflow-x-auto pb-2 lg:pb-0">
<button className="category-btn px-space-md py-2 text-label-md uppercase bg-primary text-on-primary transition-all whitespace-nowrap" onClick={() => {}}>All Files</button>
<button className="category-btn px-space-md py-2 text-label-md uppercase bg-surface-container-lowest text-on-surface hover:bg-surface-container-high transition-all whitespace-nowrap" onClick={() => {}}>Handbooks</button>
<button className="category-btn px-space-md py-2 text-label-md uppercase bg-surface-container-lowest text-on-surface hover:bg-surface-container-high transition-all whitespace-nowrap" onClick={() => {}}>FIFA Regulations</button>
<button className="category-btn px-space-md py-2 text-label-md uppercase bg-surface-container-lowest text-on-surface hover:bg-surface-container-high transition-all whitespace-nowrap" onClick={() => {}}>Referee Guides</button>
<button className="category-btn px-space-md py-2 text-label-md uppercase bg-surface-container-lowest text-on-surface hover:bg-surface-container-high transition-all whitespace-nowrap" onClick={() => {}}>Disciplinary</button>
</div>
</div>

<div className="flex flex-col bg-surface border border-outline-variant/50 shadow-sm overflow-hidden">
<div className="px-space-md py-space-sm bg-surface-container-low border-b border-outline-variant/50 grid grid-cols-12 gap-space-sm text-label-md text-on-surface-variant uppercase">
<div className="col-span-6 md:col-span-5">Document Title</div>
<div className="col-span-3 md:col-span-2">Category</div>
<div className="hidden md:block md:col-span-2">File Size / Date</div>
<div className="col-span-3 md:col-span-1 text-center">Downloads</div>
<div className="col-span-3 md:col-span-2 text-right">Actions</div>
</div>
<div className="divide-y divide-outline-variant/30" id="documentList">

<div className="doc-row grid grid-cols-12 gap-space-sm p-space-md items-center hover:bg-surface-container-low transition-all" data-category="handbooks" data-title="Enugu 2026 Official Tournament Handbook">
<div className="col-span-6 md:col-span-5 flex items-start gap-space-sm">
<div className="w-10 h-10 bg-primary-container text-on-primary-container flex items-center justify-center shrink-0 font-headline-sm">
              PDF
            </div>
<div>
<h4 className="font-body-lg text-on-surface leading-tight">Enugu 2026 Official Tournament Handbook</h4>
<p className="text-body-sm text-on-surface-variant mt-0.5">Comprehensive guide for participating teams, lodging, and match schedules.</p>
</div>
</div>
<div className="col-span-3 md:col-span-2">
<span className="px-2 py-1 bg-surface-container-high text-on-surface font-label-md uppercase text-[10px]">Handbooks</span>
</div>
<div className="hidden md:block md:col-span-2 text-body-sm text-on-surface-variant">
<div>12.4 MB</div>
<div className="text-[12px] opacity-75">Updated Jan 12, 2026</div>
</div>
<div className="col-span-3 md:col-span-1 text-center font-body-lg text-on-surface">
            1,420
          </div>
<div className="col-span-3 md:col-span-2 flex items-center justify-end gap-space-xs">
<button className="p-2 bg-surface-container hover:bg-primary hover:text-on-primary text-on-surface transition-all" onClick={() => {}} title="Download PDF">
<span className="material-symbols-outlined text-[18px]">download</span>
</button>
<button className="p-2 bg-surface-container hover:bg-secondary hover:text-on-secondary text-on-surface transition-all" onClick={() => {}} title="Preview">
<span className="material-symbols-outlined text-[18px]">visibility</span>
</button>
<button className="p-2 bg-surface-container hover:bg-error hover:text-on-error text-on-surface transition-all" onClick={() => {}} title="Delete">
<span className="material-symbols-outlined text-[18px]">delete</span>
</button>
</div>
</div>

<div className="doc-row grid grid-cols-12 gap-space-sm p-space-md items-center hover:bg-surface-container-low transition-all" data-category="fifa" data-title="Standard FIFA Laws of the Game 2025/2026">
<div className="col-span-6 md:col-span-5 flex items-start gap-space-sm">
<div className="w-10 h-10 bg-primary-container text-on-primary-container flex items-center justify-center shrink-0 font-headline-sm">
              PDF
            </div>
<div>
<h4 className="font-body-lg text-on-surface leading-tight">Standard FIFA Laws of the Game 2025/2026</h4>
<p className="text-body-sm text-on-surface-variant mt-0.5">Official IFAB rules governing 11-a-side competitive matches.</p>
</div>
</div>
<div className="col-span-3 md:col-span-2">
<span className="px-2 py-1 bg-tertiary-fixed text-on-tertiary-fixed font-label-md uppercase text-[10px]">FIFA Regulations</span>
</div>
<div className="hidden md:block md:col-span-2 text-body-sm text-on-surface-variant">
<div>8.7 MB</div>
<div className="text-[12px] opacity-75">Updated Dec 01, 2025</div>
</div>
<div className="col-span-3 md:col-span-1 text-center font-body-lg text-on-surface">
            982
          </div>
<div className="col-span-3 md:col-span-2 flex items-center justify-end gap-space-xs">
<button className="p-2 bg-surface-container hover:bg-primary hover:text-on-primary text-on-surface transition-all" onClick={() => {}} title="Download PDF">
<span className="material-symbols-outlined text-[18px]">download</span>
</button>
<button className="p-2 bg-surface-container hover:bg-secondary hover:text-on-secondary text-on-surface transition-all" onClick={() => {}} title="Preview">
<span className="material-symbols-outlined text-[18px]">visibility</span>
</button>
<button className="p-2 bg-surface-container hover:bg-error hover:text-on-error text-on-surface transition-all" onClick={() => {}} title="Delete">
<span className="material-symbols-outlined text-[18px]">delete</span>
</button>
</div>
</div>

<div className="doc-row grid grid-cols-12 gap-space-sm p-space-md items-center hover:bg-surface-container-low transition-all" data-category="fifa" data-title="FIFA Futsal Regulations & Arena Specifications">
<div className="col-span-6 md:col-span-5 flex items-start gap-space-sm">
<div className="w-10 h-10 bg-primary-container text-on-primary-container flex items-center justify-center shrink-0 font-headline-sm">
              PDF
            </div>
<div>
<h4 className="font-body-lg text-on-surface leading-tight">FIFA Futsal Regulations & Arena Specifications</h4>
<p className="text-body-sm text-on-surface-variant mt-0.5">Indoor arena guidelines, ball standards, and match protocols.</p>
</div>
</div>
<div className="col-span-3 md:col-span-2">
<span className="px-2 py-1 bg-tertiary-fixed text-on-tertiary-fixed font-label-md uppercase text-[10px]">FIFA Regulations</span>
</div>
<div className="hidden md:block md:col-span-2 text-body-sm text-on-surface-variant">
<div>5.2 MB</div>
<div className="text-[12px] opacity-75">Updated Nov 15, 2025</div>
</div>
<div className="col-span-3 md:col-span-1 text-center font-body-lg text-on-surface">
            412
          </div>
<div className="col-span-3 md:col-span-2 flex items-center justify-end gap-space-xs">
<button className="p-2 bg-surface-container hover:bg-primary hover:text-on-primary text-on-surface transition-all" onClick={() => {}} title="Download PDF">
<span className="material-symbols-outlined text-[18px]">download</span>
</button>
<button className="p-2 bg-surface-container hover:bg-secondary hover:text-on-secondary text-on-surface transition-all" onClick={() => {}} title="Preview">
<span className="material-symbols-outlined text-[18px]">visibility</span>
</button>
<button className="p-2 bg-surface-container hover:bg-error hover:text-on-error text-on-surface transition-all" onClick={() => {}} title="Delete">
<span className="material-symbols-outlined text-[18px]">delete</span>
</button>
</div>
</div>

<div className="doc-row grid grid-cols-12 gap-space-sm p-space-md items-center hover:bg-surface-container-low transition-all" data-category="referee" data-title="Match Officials Code of Conduct & VAR Protocol">
<div className="col-span-6 md:col-span-5 flex items-start gap-space-sm">
<div className="w-10 h-10 bg-primary-container text-on-primary-container flex items-center justify-center shrink-0 font-headline-sm">
              PDF
            </div>
<div>
<h4 className="font-body-lg text-on-surface leading-tight">Match Officials Code of Conduct & VAR Protocol</h4>
<p className="text-body-sm text-on-surface-variant mt-0.5">Referee briefing notes, VAR review criteria, and communications.</p>
</div>
</div>
<div className="col-span-3 md:col-span-2">
<span className="px-2 py-1 bg-secondary-fixed text-on-secondary-fixed font-label-md uppercase text-[10px]">Referee Guides</span>
</div>
<div className="hidden md:block md:col-span-2 text-body-sm text-on-surface-variant">
<div>3.1 MB</div>
<div className="text-[12px] opacity-75">Updated Jan 05, 2026</div>
</div>
<div className="col-span-3 md:col-span-1 text-center font-body-lg text-on-surface">
            650
          </div>
<div className="col-span-3 md:col-span-2 flex items-center justify-end gap-space-xs">
<button className="p-2 bg-surface-container hover:bg-primary hover:text-on-primary text-on-surface transition-all" onClick={() => {}} title="Download PDF">
<span className="material-symbols-outlined text-[18px]">download</span>
</button>
<button className="p-2 bg-surface-container hover:bg-secondary hover:text-on-secondary text-on-surface transition-all" onClick={() => {}} title="Preview">
<span className="material-symbols-outlined text-[18px]">visibility</span>
</button>
<button className="p-2 bg-surface-container hover:bg-error hover:text-on-error text-on-surface transition-all" onClick={() => {}} title="Delete">
<span className="material-symbols-outlined text-[18px]">delete</span>
</button>
</div>
</div>

<div className="doc-row grid grid-cols-12 gap-space-sm p-space-md items-center hover:bg-surface-container-low transition-all" data-category="disciplinary" data-title="Enugu 2026 Disciplinary Code & Appeals Manual">
<div className="col-span-6 md:col-span-5 flex items-start gap-space-sm">
<div className="w-10 h-10 bg-primary-container text-on-primary-container flex items-center justify-center shrink-0 font-headline-sm">
              PDF
            </div>
<div>
<h4 className="font-body-lg text-on-surface leading-tight">Enugu 2026 Disciplinary Code & Appeals Manual</h4>
<p className="text-body-sm text-on-surface-variant mt-0.5">Penalties, red/yellow card suspensions, and arbitration timelines.</p>
</div>
</div>
<div className="col-span-3 md:col-span-2">
<span className="px-2 py-1 bg-error-container text-on-error-container font-label-md uppercase text-[10px]">Disciplinary</span>
</div>
<div className="hidden md:block md:col-span-2 text-body-sm text-on-surface-variant">
<div>4.5 MB</div>
<div className="text-[12px] opacity-75">Updated Dec 20, 2025</div>
</div>
<div className="col-span-3 md:col-span-1 text-center font-body-lg text-on-surface">
            428
          </div>
<div className="col-span-3 md:col-span-2 flex items-center justify-end gap-space-xs">
<button className="p-2 bg-surface-container hover:bg-primary hover:text-on-primary text-on-surface transition-all" onClick={() => {}} title="Download PDF">
<span className="material-symbols-outlined text-[18px]">download</span>
</button>
<button className="p-2 bg-surface-container hover:bg-secondary hover:text-on-secondary text-on-surface transition-all" onClick={() => {}} title="Preview">
<span className="material-symbols-outlined text-[18px]">visibility</span>
</button>
<button className="p-2 bg-surface-container hover:bg-error hover:text-on-error text-on-surface transition-all" onClick={() => {}} title="Delete">
<span className="material-symbols-outlined text-[18px]">delete</span>
</button>
</div>
</div>
</div>
</div>
</div>

<div className="fixed inset-0 z-50 bg-inverse-surface/60 backdrop-blur-sm hidden flex items-center justify-center p-space-md" id="uploadModal">
<div className="bg-surface w-full max-w-xl p-space-xl shadow-2xl border border-outline-variant relative flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<h3 className="text-headline-md font-headline-md uppercase text-on-surface">Upload Official Document</h3>
<button className="p-2 text-on-surface-variant hover:text-on-surface" onClick={() => {}}>
<span className="material-symbols-outlined">close</span>
</button>
</div>
<form className="flex flex-col gap-space-md" id="uploadForm" onSubmit={() => {}}>

<div className="flex flex-col gap-space-xs">
<label className="text-label-md uppercase text-on-surface-variant">Document Title</label>
<input className="w-full bg-surface-container-lowest border border-outline-variant px-space-md py-3 text-body-md focus:border-primary outline-none" id="newTitle" placeholder="e.g., Tournament Medical Guidelines 2026" required={true} type="text"/>
</div>

<div className="flex flex-col gap-space-xs">
<label className="text-label-md uppercase text-on-surface-variant">Category</label>
<select className="w-full bg-surface-container-lowest border border-outline-variant px-space-md py-3 text-body-md focus:border-primary outline-none" id="newCategory">
<option value="handbooks">Handbooks</option>
<option value="fifa">FIFA Regulations</option>
<option value="referee">Referee Guides</option>
<option value="disciplinary">Disciplinary</option>
</select>
</div>

<div className="flex flex-col gap-space-xs">
<label className="text-label-md uppercase text-on-surface-variant">Short Description</label>
<textarea className="w-full bg-surface-container-lowest border border-outline-variant px-space-md py-3 text-body-md focus:border-primary outline-none resize-none" id="newDesc" placeholder="Brief summary of what this document contains..." rows={2}></textarea>
</div>

<div className="flex flex-col items-center justify-center border-2 border-dashed border-outline-variant p-space-xl bg-surface-container-low text-center cursor-pointer hover:border-primary transition-all">
<span className="material-symbols-outlined text-[48px] text-primary mb-space-sm">cloud_upload</span>
<span className="font-body-lg text-on-surface">Drag and drop your PDF file here</span>
<span className="text-body-sm text-on-surface-variant mt-1">Supports PDF up to 50MB</span>
<input accept=".pdf" className="hidden" id="fileInput" required={true} type="file"/>
<button className="mt-space-md px-space-md py-2 bg-surface-container-high hover:bg-primary hover:text-on-primary text-on-surface text-label-md uppercase transition-all" onClick={() => {}} type="button">Browse Files</button>
</div>

<div className="flex items-center justify-end gap-space-md mt-space-sm">
<button className="px-space-md py-3 bg-surface-container hover:bg-surface-container-high text-on-surface text-headline-sm uppercase transition-all" onClick={() => {}} type="button">Cancel</button>
<button className="px-space-xl py-3 bg-primary hover:bg-surface-tint text-on-primary text-headline-sm uppercase transition-all shadow-md" type="submit">Upload & Publish</button>
</div>
</form>
</div>
</div>

<div className="fixed inset-0 z-50 bg-inverse-surface/80 backdrop-blur-sm hidden flex items-center justify-center p-space-md" id="previewModal">
<div className="bg-surface w-full max-w-3xl h-[819px] p-space-lg shadow-2xl border border-outline-variant relative flex flex-col">
<div className="flex items-center justify-between pb-space-md border-b border-outline-variant/30">
<h3 className="text-headline-md font-headline-md uppercase text-on-surface" id="previewTitle">Document Preview</h3>
<button className="p-2 text-on-surface-variant hover:text-on-surface" onClick={() => {}}>
<span className="material-symbols-outlined">close</span>
</button>
</div>
<div className="flex-1 bg-surface-container-low flex flex-col items-center justify-center my-space-md relative overflow-hidden">
<span className="material-symbols-outlined text-[64px] text-primary mb-space-md">description</span>
<p className="font-headline-sm text-on-surface">Secure PDF Document Viewer</p>
<p className="text-body-sm text-on-surface-variant mt-1">Rendering high-resolution vector text and stamps.</p>
<div className="absolute bottom-4 px-space-md py-2 bg-surface shadow border border-outline-variant/50 text-body-sm text-on-surface flex items-center gap-space-md">
<span>Page 1 of 24</span>
<span>•</span>
<span>100% Zoom</span>
</div>
</div>
<div className="flex justify-end gap-space-md">
<button className="px-space-md py-2 bg-surface-container text-on-surface text-headline-sm uppercase" onClick={() => {}}>Close</button>
<button className="px-space-md py-2 bg-primary text-on-primary text-headline-sm uppercase flex items-center gap-space-xs" onClick={() => {}}>
<span className="material-symbols-outlined text-[16px]">download</span> Download PDF
        </button>
</div>
</div>
</div>

<div className="fixed bottom-6 right-6 z-50 bg-tertiary-container text-on-tertiary-container px-space-lg py-space-md shadow-xl flex items-center gap-space-md transition-all duration-300 translate-y-32 opacity-0" id="toast">
<span className="material-symbols-outlined text-[24px]">check_circle</span>
<span className="font-headline-sm text-[16px]" id="toastText">Action completed successfully</span>
</div>

</div></main></div>
    </div>
  );
}
