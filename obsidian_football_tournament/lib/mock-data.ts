export interface Match {
  id: string;
  sport: 'football' | 'futsal';
  category: 'male' | 'female';
  status: 'LIVE' | 'Full Time' | 'Upcoming';
  statusDetail?: string;
  teamA: { name: string; code: string; score?: number };
  teamB: { name: string; code: string; score?: number };
  location: string;
  time?: string;
  date?: string;
}

export interface Standing {
  rank: number;
  team: string;
  code: string;
  played: number;
  won: number;
  drawn: number;
  lost: number;
  gd: string;
  points: number;
  group: string;
}

export interface Team {
  id: string;
  name: string;
  shortCode: string;
  category: 'Male' | 'Female';
  sport: 'Football' | 'Futsal';
  wins: number;
  losses: number;
  draws: number;
  rank: number;
  points: number;
  coach: string;
  captain: string;
  description: string;
  logoText: string;
  roster: { id: string; name: string; position: string; number: number; goals: number; yellowCards: number }[];
}

export interface NewsArticle {
  id: string;
  title: string;
  category: string;
  date: string;
  summary: string;
  content?: string;
  readTime: string;
  image?: string;
  author: string;
}

export interface Registration {
  id: string;
  teamName: string;
  division: string;
  coach: string;
  status: 'Approved' | 'Pending Review' | 'Payment Due' | 'Rejected';
  rosterCount: number;
  submittedDate: string;
}

export interface TournamentRule {
  id: string;
  section: string;
  title: string;
  summary: string;
  details: string[];
}

export interface ScheduleItem {
  id: string;
  time: string;
  field: string;
  matchName: string;
  division: string;
  status: 'Scheduled' | 'In Progress' | 'Completed';
  referee: string;
}

export interface StatItem {
  label: string;
  value: string | number;
  subtext?: string;
  icon?: string;
}

export const MOCK_MATCHES: Match[] = [
  {
    id: 'm1',
    sport: 'football',
    category: 'male',
    status: 'LIVE',
    statusDetail: "78'",
    teamA: { name: 'Enugu Lions', code: 'EN', score: 2 },
    teamB: { name: 'Abuja Titans', code: 'AB', score: 1 },
    location: 'Pitch 2, Nnamdi Azikiwe Complex',
  },
  {
    id: 'm2',
    sport: 'futsal',
    category: 'female',
    status: 'Full Time',
    teamA: { name: 'Coal City Queens', code: 'CC', score: 4 },
    teamB: { name: 'Port Harcourt Strikers', code: 'PH', score: 3 },
    location: 'Indoor Arena A',
  },
  {
    id: 'm3',
    sport: 'football',
    category: 'male',
    status: 'Upcoming',
    time: '18:00 Today',
    teamA: { name: 'Lagos Warriors', code: 'LW' },
    teamB: { name: 'Calabar Rovers', code: 'CR' },
    location: 'Main Bowl Stadium',
  },
  {
    id: 'm4',
    sport: 'football',
    category: 'female',
    status: 'Full Time',
    teamA: { name: 'Ibadan Falcons', code: 'IF', score: 1 },
    teamB: { name: 'Asaba Angels', code: 'AA', score: 0 },
    location: 'Pitch 1, Nnamdi Azikiwe Complex',
  },
  {
    id: 'm5',
    sport: 'futsal',
    category: 'male',
    status: 'Upcoming',
    time: '20:00 Today',
    teamA: { name: 'Kano Pillars Futsal', code: 'KP' },
    teamB: { name: 'Enugu Express', code: 'EE' },
    location: 'Indoor Arena B',
  }
];

export const MOCK_STANDINGS: Standing[] = [
  { rank: 1, team: 'Enugu Lions', code: 'EN', played: 5, won: 4, drawn: 1, lost: 0, gd: '+8', points: 13, group: 'Group A' },
  { rank: 2, team: 'Abuja Titans', code: 'AB', played: 5, won: 3, drawn: 1, lost: 1, gd: '+4', points: 10, group: 'Group A' },
  { rank: 3, team: 'Lagos Warriors', code: 'LW', played: 5, won: 2, drawn: 1, lost: 2, gd: '0', points: 7, group: 'Group A' },
  { rank: 4, team: 'Calabar Rovers', code: 'CR', played: 5, won: 0, drawn: 1, lost: 4, gd: '-12', points: 1, group: 'Group A' },
  { rank: 1, team: 'Coal City Queens', code: 'CC', played: 4, won: 4, drawn: 0, lost: 0, gd: '+10', points: 12, group: 'Female Futsal' },
  { rank: 2, team: 'Port Harcourt Strikers', code: 'PH', played: 4, won: 2, drawn: 1, lost: 1, gd: '+2', points: 7, group: 'Female Futsal' },
];

export const MOCK_TEAMS: Team[] = [
  {
    id: 'enugu-lions',
    name: 'Enugu Lions FC',
    shortCode: 'EN',
    category: 'Male',
    sport: 'Football',
    wins: 4,
    losses: 0,
    draws: 1,
    rank: 1,
    points: 13,
    coach: 'Chidi Okafor',
    captain: 'Emeka Nwosu',
    description: 'Defending champions of the Coal City Games known for high-intensity pressing and electric home support.',
    logoText: 'EN',
    roster: [
      { id: 'p1', name: 'Emeka Nwosu', position: 'Forward', number: 9, goals: 6, yellowCards: 1 },
      { id: 'p2', name: 'Uche Eze', position: 'Midfielder', number: 10, goals: 3, yellowCards: 2 },
      { id: 'p3', name: 'Chinedu Obi', position: 'Defender', number: 4, goals: 1, yellowCards: 0 },
      { id: 'p4', name: 'Ikenna Vance', position: 'Goalkeeper', number: 1, goals: 0, yellowCards: 0 },
    ]
  },
  {
    id: 'abuja-titans',
    name: 'Abuja Titans',
    shortCode: 'AB',
    category: 'Male',
    sport: 'Football',
    wins: 3,
    losses: 1,
    draws: 1,
    rank: 2,
    points: 10,
    coach: 'Kabir Bello',
    captain: 'Sani Usman',
    description: 'Tactical powerhouses featuring elite collegiate athletes from the Federal Capital Territory.',
    logoText: 'AB',
    roster: [
      { id: 'p5', name: 'Sani Usman', position: 'Midfielder', number: 8, goals: 4, yellowCards: 1 },
      { id: 'p6', name: 'Tunde Bakare', position: 'Forward', number: 11, goals: 5, yellowCards: 0 },
      { id: 'p7', name: 'Ahmed Musa', position: 'Defender', number: 3, goals: 0, yellowCards: 3 },
    ]
  },
  {
    id: 'coal-city-queens',
    name: 'Coal City Queens',
    shortCode: 'CC',
    category: 'Female',
    sport: 'Futsal',
    wins: 4,
    losses: 0,
    draws: 0,
    rank: 1,
    points: 12,
    coach: 'Grace Nnaji',
    captain: 'Adaora Igwe',
    description: 'Unbeaten female futsal giants dominating with quick footwork and rapid counter-attacks.',
    logoText: 'CC',
    roster: [
      { id: 'p8', name: 'Adaora Igwe', position: 'Pivot', number: 10, goals: 8, yellowCards: 0 },
      { id: 'p9', name: 'Chioma Adebayo', position: 'Ala', number: 7, goals: 4, yellowCards: 1 },
    ]
  },
  {
    id: 'lagos-warriors',
    name: 'Lagos Warriors',
    shortCode: 'LW',
    category: 'Male',
    sport: 'Football',
    wins: 2,
    losses: 2,
    draws: 1,
    rank: 3,
    points: 7,
    coach: 'Femi Johnson',
    captain: 'Babatunde Raji',
    description: 'Dynamic squad with flair and fast attack wingers competing in Group A.',
    logoText: 'LW',
    roster: [
      { id: 'p10', name: 'Babatunde Raji', position: 'Winger', number: 7, goals: 3, yellowCards: 2 },
    ]
  }
];

export const MOCK_NEWS: NewsArticle[] = [
  {
    id: 'news-1',
    title: 'Coal City Games 2026 Grand Opening Ceremony Set for Nnamdi Azikiwe Stadium',
    category: 'Tournament Announcement',
    date: 'Oct 14, 2026',
    readTime: '3 min read',
    author: 'Editorial Team',
    summary: 'The inaugural ceremony promises live performances, team parades, and celebrity exhibition matches in Enugu.',
    content: 'Full article body detailing the schedule of the opening ceremony, tickets, guest appearances, and television broadcasting details for Coal City Games 2026.'
  },
  {
    id: 'news-2',
    title: 'Enugu Lions Defeat Abuja Titans in Thrilling Group A Showdown',
    category: 'Match Report',
    date: 'Oct 12, 2026',
    readTime: '5 min read',
    author: 'Sports Desk',
    summary: 'Emeka Nwosu scored a late winner in the 78th minute to secure a crucial 2-1 victory over Abuja Titans.',
    content: 'An in-depth tactical analysis of Enugu Lions victory including ball possession stats and post-match coach interviews.'
  },
  {
    id: 'news-3',
    title: 'Female Futsal Category Reaches Record Registration Numbers',
    category: 'Futsal News',
    date: 'Oct 10, 2026',
    readTime: '4 min read',
    author: 'Grace Nnaji',
    summary: 'Over 16 collegiate female teams have registered for the indoor championship, making it the largest turn-out in history.',
    content: 'Detailed report on female sports expansion in Enugu and regional athletic development programs.'
  }
];

export const MOCK_REGISTRATIONS: Registration[] = [
  { id: 'reg-101', teamName: 'Enugu Lions FC', division: 'Male Football', coach: 'Chidi Okafor', status: 'Approved', rosterCount: 22, submittedDate: '2026-09-15' },
  { id: 'reg-102', teamName: 'Coal City Queens', division: 'Female Futsal', coach: 'Grace Nnaji', status: 'Approved', rosterCount: 14, submittedDate: '2026-09-18' },
  { id: 'reg-103', teamName: 'Warri Strikers', division: 'Male Football', coach: 'Victor Ojo', status: 'Pending Review', rosterCount: 18, submittedDate: '2026-10-01' },
  { id: 'reg-104', teamName: 'Owerri United', division: 'Male Futsal', coach: 'Kalu Nwankwo', status: 'Payment Due', rosterCount: 12, submittedDate: '2026-10-03' },
];

export const MOCK_SCHEDULE_ITEMS: ScheduleItem[] = [
  { id: 'sch-1', time: '09:00 AM', field: 'Pitch 1 (Main Bowl)', matchName: 'Enugu Lions vs Abuja Titans', division: 'Male Football Group A', status: 'In Progress', referee: 'Ref. Danjuma' },
  { id: 'sch-2', time: '11:30 AM', field: 'Indoor Arena A', matchName: 'Coal City Queens vs PH Strikers', division: 'Female Futsal Final', status: 'Completed', referee: 'Ref. Amina' },
  { id: 'sch-3', time: '02:00 PM', field: 'Pitch 2', matchName: 'Lagos Warriors vs Calabar Rovers', division: 'Male Football Group B', status: 'Scheduled', referee: 'Ref. Okon' },
  { id: 'sch-4', time: '04:30 PM', field: 'Indoor Arena B', matchName: 'Kano Pillars vs Enugu Express', division: 'Male Futsal Group A', status: 'Scheduled', referee: 'Ref. Chike' },
];

export const MOCK_RULES: TournamentRule[] = [
  {
    id: 'rule-1',
    section: 'Section 1: Match Format & Duration',
    title: 'Match Rules and Injury Time',
    summary: 'Standard 90-minute regulation matches for Football (two 45-min halves) and 40-minute effective time for Futsal.',
    details: [
      'Football matches consist of two equal halves of 45 minutes.',
      'Futsal matches consist of two 20-minute periods of stop-clock play.',
      'In knockout phases, tied matches go directly to penalty shootouts (5 kicks each).'
    ]
  },
  {
    id: 'rule-2',
    section: 'Section 2: Player Eligibility & Rosters',
    title: 'Roster Limits and Identification',
    summary: 'Strict squad caps and mandatory official ID verifications prior to every kickoff.',
    details: [
      'Maximum squad size for Football is 25 registered players; Futsal is capped at 14 players.',
      'All players must present valid Coal City Games accredited photo IDs during pre-match check-in.'
    ]
  },
  {
    id: 'rule-3',
    section: 'Section 3: Disciplinary System',
    title: 'Cards, Suspensions, and Fair Play Points',
    summary: 'Automated card tracking and strict automatic suspension enforcement.',
    details: [
      'Two accumulated yellow cards lead to an automatic 1-match suspension.',
      'Direct red cards carry a minimum 1-match suspension pending review by the disciplinary committee.'
    ]
  }
];

export const MOCK_STATS: StatItem[] = [
  { label: 'Registered Teams', value: '32', subtext: 'Across 4 Divisions', icon: 'groups' },
  { label: 'Total Matches Scheduled', value: '64', subtext: 'Over 14 Days', icon: 'sports_soccer' },
  { label: 'Live Active Pitches', value: '4', subtext: 'Enugu Sports Complex', icon: 'stadium' },
  { label: 'Total Goals Scored', value: '118', subtext: '2.8 Goals / Match', icon: 'sports_score' }
];
