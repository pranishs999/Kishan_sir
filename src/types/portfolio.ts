export interface CredentialItem {
  label: string;
  detail: string;
  category: 'experience' | 'education' | 'leadership' | 'current';
}

export interface FrameworkStep {
  id: string;
  stepNumber: string;
  title: string;
  subtitle: string;
  description: string;
  impact: string;
}

export interface WorkEntry {
  id: string;
  number: string;
  title: string;
  role: string;
  organization: string;
  category: string;
  summary: string;
  fullDescription: string;
  highlights: string[];
  imagePlaceholderLabel: string;
  customImageUrl?: string;
  linkText?: string;
  linkUrl?: string;
}

export interface InstitutionEntry {
  id: string;
  name: string;
  role: string;
  establishedNotice: string;
  mission: string;
  governance: string;
  keyPillars: string[];
  impactSummary: string;
  imagePlaceholderLabel: string;
  customImageUrl?: string;
}

export interface DelegationEntry {
  id: string;
  title: string;
  country: string;
  location: string;
  flagEmoji: string;
  role: string;
  event: string;
  summary: string;
  achievements: string[];
  imageUrl: string;
}

export interface ThesisEntry {
  id: string;
  title: string;
  authorOrStudent: string;
  role: string; // 'Supervisor' | 'Author'
  year: string;
  field: string; // 'Mathematics Pedagogy' | 'STEAM' | 'Applied Science'
  abstract: string;
  pdfUrl?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  event: string;
  category: 'STEAM Expo' | 'International Fair' | 'Workshop' | 'Conference';
  date: string;
  location: string;
  imageUrl: string;
  caption: string;
}

export interface MediaEntry {
  id: string;
  headline: string;
  publication: string;
  date: string;
  category: string;
  excerpt: string;
  fullSummary: string;
  clippingPlaceholderLabel: string;
  customImageUrl?: string;
  sourceNotice: string;
}

export interface ThoughtEntry {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  keyTakeaways: string[];
}

export interface SupportVisionData {
  bankName: string;
  accountHolder: string;
  accountNumber: string;
  branch: string;
  note: string;
}
