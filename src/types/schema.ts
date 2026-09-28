export interface PersonEntity {
  fullName: string;
  nepaliName: string;
  professionalTitle: string;
  tagline: string;
  shortBiography: string;
  biography: string[];
  currentFocus: string[];
  profileImage: string;
  professionalIdentity: { title: string; description: string }[];
}

export interface EducationEntity {
  id: string;
  degree: string;
  field: string;
  institution: string;
  location: string;
  year: string;
  verified: boolean;
  description: string;
}

export interface ExperienceEntity {
  id: string;
  position: string;
  organization: string;
  startDate: string;
  endDate: string;
  location: string;
  description: string;
  responsibilities: string[];
  achievements: string[];
  verified: boolean;
}

export interface LeadershipEntity {
  id: string;
  role: string;
  organization: string;
  organizationType: string;
  period: string;
  description: string;
  responsibilities: string[];
  relatedInitiativeId?: string;
  verified: boolean;
}

export type WorkCategory = 'education' | 'mathematics' | 'science' | 'research' | 'innovation' | 'entrepreneurship';

export interface WorkEntity {
  id: string;
  slug: string;
  title: string;
  category: WorkCategory;
  categoryLabel: string;
  description: string;
  principles: string[];
  relatedInitiativeIds: string[];
  iconName?: string;
}

export interface InstitutionEntity {
  id: string;
  name: string;
  type: string;
  role: string;
  establishedNotice: string;
  description: string;
  mission: string;
  governance: string;
  keyPillars: string[];
  impactSummary: string;
  coverImage: string;
  websiteUrl: string | null;
  verified: boolean;
}

export type InitiativeCategory = 
  | 'education' 
  | 'astronova' 
  | 'hric' 
  | 'young-scientists' 
  | 'steam' 
  | 'science-engineering-fair' 
  | 'workshops' 
  | 'delegation';

export interface InitiativeEntity {
  id: string;
  slug: string;
  title: string;
  category: InitiativeCategory;
  categoryLabel: string;
  institutionId: string;
  role: string;
  summary: string;
  description: string;
  location: string;
  startDate: string;
  endDate?: string;
  activities: string[];
  highlights: string[];
  image: string;
  externalLink?: string;
  verified: boolean;
}

export interface EcosystemStakeholder {
  id: string;
  name: string;
  role: string;
  description: string;
}

export interface EcosystemConnection {
  from: string;
  to: string;
  description: string;
}

export interface EcosystemEntity {
  stakeholders: EcosystemStakeholder[];
  connections: EcosystemConnection[];
  pipeline: { id: string; stage: string; subtitle: string; description: string; impact: string }[];
  focusAreas: string[];
  outcomes: { label: string; value: string; verified: boolean }[];
}

export interface ArticleEntity {
  id: string;
  slug: string;
  title: string;
  author: string;
  date: string;
  category: string;
  excerpt: string;
  content: string;
  coverImage?: string;
  tags: string[];
  relatedInitiativeIds: string[];
}

export type MediaCategory = 'newspaper' | 'interview' | 'event';

export interface MediaItemEntity {
  id: string;
  headline: string;
  publication: string;
  date: string;
  category: MediaCategory;
  thumbnail: string;
  summary: string;
  externalUrl: string;
  verified: boolean;
  language: 'ne' | 'en';
  sourceNotice?: string;
}

export interface AchievementEntity {
  id: string;
  type: string;
  title: string;
  organization: string;
  date: string;
  description: string;
  verified: boolean;
  evidenceUrl?: string;
}

export interface GalleryItemEntity {
  id: string;
  image: string;
  caption: string;
  event: string;
  date: string;
  location: string;
  category: string;
  relatedInitiativeId?: string;
}

export interface ContactEntity {
  name: string;
  title: string;
  description: string;
  email: string;
  phone: string;
  office: string;
  address: string;
  locationNep: string;
  facebookUrl: string;
  linkedinUrl: string;
  astronovaUrl: string;
  hricUrl: string;
  tisfUrl: string;
  manUrl: string;
  contactPurposes: string[];
}
