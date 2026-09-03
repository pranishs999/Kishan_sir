export interface CredentialItem {
  label: string;
  detail: string;
  category: 'experience' | 'education' | 'leadership' | 'current';
}

export interface RoleFact {
  title: string;
  organization: string;
  type: 'current' | 'former';
  scope?: string;
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

export interface UserAssetCustomizer {
  heroPhotoUrl: string;
  astronovaPhotoUrl: string;
  hricPhotoUrl: string;
  mediaClippingUrl: string;
  cvPdfUrl: string;
}
