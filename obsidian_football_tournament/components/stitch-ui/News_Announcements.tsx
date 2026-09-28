import React from 'react';

export default function News_Announcements() {
  return (
    <div className="stitch-app">
      <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]"><div className="h-20 max-w-7xl mx-auto px-gutter flex items-center justify-between"><div className="flex items-center gap-space-md"><img alt="Obsidian Elite Logo" className="h-8 w-auto object-contain" src="/assets/stitch/News_Announcements_asset_1.png"/><span className="font-headline-lg text-primary uppercase tracking-tight">Obsidian Elite</span></div><nav className="hidden md:flex items-center gap-space-lg" data-active-classes="bg-primary-container text-on-primary-container font-bold px-3 py-1 rounded"><a className="text-body-md text-on-surface-variant hover:text-on-surface transition-colors" data-path="home" href="#">Home</a><a className="text-body-md text-on-surface-variant hover:text-on-surface transition-colors" data-path="competitions" href="#">Competitions</a><a className="text-body-md text-on-surface-variant hover:text-on-surface transition-colors" data-path="teams" href="#">Teams</a><a aria-current="page" className="transition-colors bg-primary-container text-on-primary-container font-bold px-3 py-1 rounded" data-path="news" href="#">News</a><div className="relative group"><button className="flex items-center gap-space-xs text-body-md text-on-surface-variant hover:text-on-surface transition-colors py-2"><span>Admin Backend</span><span className="material-symbols-outlined text-[18px]">expand_more</span></button><div className="absolute right-0 top-full hidden group-hover:block w-56 bg-surface-container-lowest shadow-[0_4px_20px_rgba(0,0,0,0.08)] py-space-sm"><a className="block px-space-md py-2 text-body-sm text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface" data-path="admin-tournament-creation" href="#">Tournament Creation</a><a className="block px-space-md py-2 text-body-sm text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface" data-path="admin-registration" href="#">Registration</a><a className="block px-space-md py-2 text-body-sm text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface" data-path="admin-scheduling" href="#">Scheduling</a><a className="block px-space-md py-2 text-body-sm text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface" data-path="admin-rules" href="#">Rules</a></div></div></nav><div className="flex items-center gap-space-md"><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center"><span className="material-symbols-outlined text-on-primary text-[18px]">person</span></div></div></div></header><main className="w-full pt-20 bg-surface"><div className="flex flex-col w-full">

<section className="w-full bg-surface-container-low py-space-xl px-gutter">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-space-lg">
<div className="max-w-3xl">
<div className="flex items-center gap-space-sm mb-space-xs">
<span className="w-3 h-3 bg-primary-container inline-block"></span>
<span className="font-label-md text-on-surface-variant uppercase tracking-widest">Coal City Games 2026 Pressroom</span>
</div>
<h1 className="font-headline-xxl text-on-surface uppercase tracking-tight">Official News & Reports</h1>
</div>
<div className="flex items-center gap-space-sm">
<button className="px-space-md py-2 bg-surface text-on-surface font-headline-sm uppercase hover:bg-surface-container-high transition-colors">All Categories</button>
<button className="px-space-md py-2 bg-primary text-on-primary font-headline-sm uppercase hover:bg-primary-container transition-colors">Match Reports</button>
</div>
</div>
</section>

<section className="w-full max-w-7xl mx-auto px-gutter py-space-xl">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-stretch bg-surface-container-lowest shadow-sm hover:shadow-xl transition-shadow overflow-hidden group">
<div className="lg:col-span-7 relative min-h-[350px] lg:min-h-[480px]">
<div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" data-alt="Intense dramatic action shot of a professional football match under stadium floodlights during the Coal City Games 2026, players clashing for the ball on a pristine grass pitch with atmospheric lens flare and cheering crowds in the background blur." style={{"backgroundImage":"url('https"}}></div>
<div className="absolute top-space-md left-space-md">
<span className="px-3 py-1 bg-secondary-container text-on-secondary-container font-label-md uppercase">Match Report</span>
</div>
</div>
<div className="lg:col-span-5 p-space-xl flex flex-col justify-between">
<div>
<div className="flex items-center gap-space-md text-body-sm text-on-surface-variant mb-space-sm">
<span>May 24, 2026</span>
<span>•</span>
<span>4 min read</span>
</div>
<h2 className="font-headline-xl text-on-surface uppercase mb-space-md group-hover:text-primary transition-colors">Enugu Thunder Stuns Lagos Titans in 4-2 Thriller to Open Coal City Games</h2>
<p className="font-body-md text-on-surface-variant mb-space-xl">An electrifying opening night at the Nnamdi Azikiwe Stadium saw Enugu Thunder mount a breathtaking second-half comeback, fueled by a hat-trick from star striker Chidi Okafor.</p>
</div>
<div className="flex items-center justify-between pt-space-md border-t border-surface-container-high">
<div className="flex items-center gap-space-sm">
<div className="w-10 h-10 bg-surface-container-high flex items-center justify-center font-headline-sm text-on-surface">EO</div>
<div>
<div className="font-body-lg text-on-surface text-sm">Emeka Okoro</div>
<div className="font-body-sm text-on-surface-variant text-xs">Chief Football Writer</div>
</div>
</div>
<a className="font-headline-sm text-primary uppercase flex items-center gap-space-xs hover:underline" href="#">
<span>Read Article</span>
<span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</a>
</div>
</div>
</div>
</section>

<section className="w-full max-w-7xl mx-auto px-gutter pb-space-xl">
<div className="flex items-center justify-between mb-space-lg">
<h3 className="font-headline-lg text-on-surface uppercase">Latest Dispatches</h3>
<div className="flex items-center gap-space-sm text-body-sm text-on-surface-variant">
<span>Sort by:</span>
<select className="bg-surface border border-outline px-space-sm py-1 font-body-md text-on-surface focus:outline-none focus:border-primary">
<option>Newest First</option>
<option>Most Popular</option>
</select>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg">

<article className="bg-surface-container-lowest flex flex-col justify-between shadow-sm hover:shadow-lg transition-shadow group">
<div>
<div className="relative h-60 w-full overflow-hidden">
<div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" data-alt="Coaches and tactical analysts reviewing match formations on a digital tablet at the sidelines of the training ground during Coal City Games 2026." style={{"backgroundImage":"url('https"}}></div>
<div className="absolute top-space-sm left-space-sm">
<span className="px-2.5 py-1 bg-secondary-container text-on-secondary-container font-label-md uppercase">Announcement</span>
</div>
</div>
<div className="p-space-lg">
<div className="flex items-center gap-space-sm text-body-sm text-on-surface-variant mb-space-sm">
<span>May 23, 2026</span>
<span>•</span>
<span>2 min read</span>
</div>
<h4 className="font-headline-md text-on-surface uppercase mb-space-sm group-hover:text-primary transition-colors">Referees Committee Unveils VAR Protocol for Knockout Stages</h4>
<p className="font-body-md text-on-surface-variant text-sm line-clamp-3">New guidelines implemented to ensure absolute transparency and swift decision-making as tournament reaches the decisive elimination rounds.</p>
</div>
</div>
<div className="p-space-lg pt-0 flex items-center justify-between">
<div className="flex items-center gap-space-xs text-body-sm text-on-surface-variant">
<span>By Admin Desk</span>
</div>
<a className="font-headline-sm text-primary uppercase text-sm hover:underline" href="#">Read →</a>
</div>
</article>

<article className="bg-surface-container-lowest flex flex-col justify-between shadow-sm hover:shadow-lg transition-shadow group">
<div>
<div className="relative h-60 w-full overflow-hidden">
<div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" data-alt="Portrait of an elite Nigerian football captain smiling confidently in team jersey holding a golden tournament football in the stadium tunnel." style={{"backgroundImage":"url('https"}}></div>
<div className="absolute top-space-sm left-space-sm">
<span className="px-2.5 py-1 bg-secondary-container text-on-secondary-container font-label-md uppercase">Interview</span>
</div>
</div>
<div className="p-space-lg">
<div className="flex items-center gap-space-sm text-body-sm text-on-surface-variant mb-space-sm">
<span>May 22, 2026</span>
<span>•</span>
<span>5 min read</span>
</div>
<h4 className="font-headline-md text-on-surface uppercase mb-space-sm group-hover:text-primary transition-colors">“We Came to Win Gold” — Captain Ibrahim's Unshakable Vision</h4>
<p className="font-body-md text-on-surface-variant text-sm line-clamp-3">The inspirational midfielder sits down with Obsidian Elite to discuss team chemistry, pressure, and the unwavering support of the Enugu fans.</p>
</div>
</div>
<div className="p-space-lg pt-0 flex items-center justify-between">
<div className="flex items-center gap-space-xs text-body-sm text-on-surface-variant">
<span>By Zainab Bello</span>
</div>
<a className="font-headline-sm text-primary uppercase text-sm hover:underline" href="#">Read →</a>
</div>
</article>

<article className="bg-surface-container-lowest flex flex-col justify-between shadow-sm hover:shadow-lg transition-shadow group">
<div>
<div className="relative h-60 w-full overflow-hidden">
<div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" data-alt="Panoramic view of fans packed into the stands waving flags and wearing green and white colors during a sunny afternoon match at Coal City Games." style={{"backgroundImage":"url('https"}}></div>
<div className="absolute top-space-sm left-space-sm">
<span className="px-2.5 py-1 bg-secondary-container text-on-secondary-container font-label-md uppercase">Match Report</span>
</div>
</div>
<div className="p-space-lg">
<div className="flex items-center gap-space-sm text-body-sm text-on-surface-variant mb-space-sm">
<span>May 21, 2026</span>
<span>•</span>
<span>3 min read</span>
</div>
<h4 className="font-headline-md text-on-surface uppercase mb-space-sm group-hover:text-primary transition-colors">Plateau United and Kano Pillars Share Spoils in Scorcher</h4>
<p className="font-body-md text-on-surface-variant text-sm line-clamp-3">A tactical masterclass ended in a 1-1 deadlock as both defensive lines held firm under intense pressure from opposing wingers.</p>
</div>
</div>
<div className="p-space-lg pt-0 flex items-center justify-between">
<div className="flex items-center gap-space-xs text-body-sm text-on-surface-variant">
<span>By Tunde Adeyemi</span>
</div>
<a className="font-headline-sm text-primary uppercase text-sm hover:underline" href="#">Read →</a>
</div>
</article>

<article className="bg-surface-container-lowest flex flex-col justify-between shadow-sm hover:shadow-lg transition-shadow group">
<div>
<div className="relative h-60 w-full overflow-hidden">
<div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" data-alt="Youth football development clinic taking place on an auxiliary pitch with kids practicing dribbling drills under expert guidance." style={{"backgroundImage":"url('https"}}></div>
<div className="absolute top-space-sm left-space-sm">
<span className="px-2.5 py-1 bg-secondary-container text-on-secondary-container font-label-md uppercase">Announcement</span>
</div>
</div>
<div className="p-space-lg">
<div className="flex items-center gap-space-sm text-body-sm text-on-surface-variant mb-space-sm">
<span>May 20, 2026</span>
<span>•</span>
<span>2 min read</span>
</div>
<h4 className="font-headline-md text-on-surface uppercase mb-space-sm group-hover:text-primary transition-colors">Coal City Games Grassroots Clinic Inspires Over 500 Youngsters</h4>
<p className="font-body-md text-on-surface-variant text-sm line-clamp-3">Legendary Nigerian football alumni led an unforgettable training session for local academies at the Cathedral of Football.</p>
</div>
</div>
<div className="p-space-lg pt-0 flex items-center justify-between">
<div className="flex items-center gap-space-xs text-body-sm text-on-surface-variant">
<span>By Ngozi Uche</span>
</div>
<a className="font-headline-sm text-primary uppercase text-sm hover:underline" href="#">Read →</a>
</div>
</article>

<article className="bg-surface-container-lowest flex flex-col justify-between shadow-sm hover:shadow-lg transition-shadow group">
<div>
<div className="relative h-60 w-full overflow-hidden">
<div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" data-alt="Close-up of golden winner's trophy gleaming under stadium spotlight against a dark background with confetti falling." style={{"backgroundImage":"url('https"}}></div>
<div className="absolute top-space-sm left-space-sm">
<span className="px-2.5 py-1 bg-secondary-container text-on-secondary-container font-label-md uppercase">Interview</span>
</div>
</div>
<div className="p-space-lg">
<div className="flex items-center gap-space-sm text-body-sm text-on-surface-variant mb-space-sm">
<span>May 19, 2026</span>
<span>•</span>
<span>4 min read</span>
</div>
<h4 className="font-headline-md text-on-surface uppercase mb-space-sm group-hover:text-primary transition-colors">Behind the Scenes with Tournament Director Chief Dr. Obinna</h4>
<p className="font-body-md text-on-surface-variant text-sm line-clamp-3">An exclusive walkthrough of the logistics, security, and world-class infrastructure put in place for Coal City Games 2026.</p>
</div>
</div>
<div className="p-space-lg pt-0 flex items-center justify-between">
<div className="flex items-center gap-space-xs text-body-sm text-on-surface-variant">
<span>By Emeka Okoro</span>
</div>
<a className="font-headline-sm text-primary uppercase text-sm hover:underline" href="#">Read →</a>
</div>
</article>

<article className="bg-surface-container-lowest flex flex-col justify-between shadow-sm hover:shadow-lg transition-shadow group">
<div>
<div className="relative h-60 w-full overflow-hidden">
<div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" data-alt="Goalkeeper making a spectacular diving save during a penalty shootout in high stakes tournament match." style={{"backgroundImage":"url('https"}}></div>
<div className="absolute top-space-sm left-space-sm">
<span className="px-2.5 py-1 bg-secondary-container text-on-secondary-container font-label-md uppercase">Match Report</span>
</div>
</div>
<div className="p-space-lg">
<div className="flex items-center gap-space-sm text-body-sm text-on-surface-variant mb-space-sm">
<span>May 18, 2026</span>
<span>•</span>
<span>3 min read</span>
</div>
<h4 className="font-headline-md text-on-surface uppercase mb-space-sm group-hover:text-primary transition-colors">Super Save Sparks Extra-Time Victory for Rivers United</h4>
<p className="font-body-md text-on-surface-variant text-sm line-clamp-3">A miraculous 119th-minute penalty block sent the supporters into absolute rapture and secured a spot in the quarter-finals.</p>
</div>
</div>
<div className="p-space-lg pt-0 flex items-center justify-between">
<div className="flex items-center gap-space-xs text-body-sm text-on-surface-variant">
<span>By Tunde Adeyemi</span>
</div>
<a className="font-headline-sm text-primary uppercase text-sm hover:underline" href="#">Read →</a>
</div>
</article>
</div>

<div className="flex items-center justify-center gap-space-sm mt-space-xl">
<button className="px-4 py-2 bg-surface border border-outline font-headline-sm uppercase text-on-surface hover:bg-surface-container-high transition-colors">Prev</button>
<button className="px-4 py-2 bg-primary text-on-primary font-headline-sm uppercase">1</button>
<button className="px-4 py-2 bg-surface border border-outline font-headline-sm uppercase text-on-surface hover:bg-surface-container-high transition-colors">2</button>
<button className="px-4 py-2 bg-surface border border-outline font-headline-sm uppercase text-on-surface hover:bg-surface-container-high transition-colors">3</button>
<button className="px-4 py-2 bg-surface border border-outline font-headline-sm uppercase text-on-surface hover:bg-surface-container-high transition-colors">Next</button>
</div>
</section>

<section className="w-full bg-surface-container-high py-space-xl px-gutter">
<div className="max-w-4xl mx-auto bg-surface-container-lowest p-space-xl shadow-sm text-center relative overflow-hidden">
<div className="absolute -right-16 -bottom-16 w-64 h-64 bg-secondary-container/20 rounded-full blur-2xl pointer-events-none"></div>
<div className="relative z-10 max-w-xl mx-auto">
<span className="px-3 py-1 bg-primary-container text-on-primary-container font-label-md uppercase inline-block mb-space-md">Stay Informed</span>
<h3 className="font-headline-xl text-on-surface uppercase mb-space-sm">Never Miss a Goal or Announcement</h3>
<p className="font-body-md text-on-surface-variant mb-space-lg">Get daily match digests, exclusive player interviews, and breaking tournament news delivered straight to your inbox.</p>
<form className="flex flex-col sm:flex-row gap-space-sm justify-center" onSubmit={() => {}}>
<input className="px-space-md py-3 bg-surface border border-outline font-body-md text-on-surface flex-grow focus:outline-none focus:border-primary" placeholder="Enter your email address" required={true} type="email"/>
<button className="px-space-xl py-3 bg-primary text-on-primary font-headline-sm uppercase hover:bg-primary-container transition-colors" type="submit">Subscribe</button>
</form>
<span className="font-body-sm text-on-surface-variant text-xs mt-space-sm inline-block">No spam ever. Unsubscribe at any time.</span>
</div>
</div>
</section>
</div></main><footer className="w-full bg-surface-container-low py-space-xl"><div className="max-w-7xl mx-auto px-gutter text-center text-on-surface-variant text-body-sm">© 2026 Obsidian Elite Football Portal. Coal City Games. All rights reserved.</div></footer>
    </div>
  );
}
