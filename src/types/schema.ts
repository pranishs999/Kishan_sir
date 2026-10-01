export type Language = 'en' | 'ne';

export type LocalizedString = string | {
  en: string;
  ne: string;
};

export type LocalizedStringArray = (string | { en: string; ne: string })[] | {
  en: string[];
  ne: string[];
};

export interface PersonEntity {
  fullName: LocalizedString;
  nepaliName: string;
  professionalTitle: LocalizedString;
  tagline: LocalizedString;
  shortBiography: LocalizedString;
  biography: LocalizedStringArray;
  currentFocus: LocalizedString[];
  profileImage: string;
  professionalIdentity: { title: LocalizedString; description: LocalizedString }[];
}

export interface EducationEntity {
  id: string;
  degree: LocalizedString;
  field: LocalizedString;
  institution: LocalizedString;
  location: LocalizedString;
  year: string;
  verified: boolean;
  description: LocalizedString;
}

export interface ExperienceEntity {
  id: string;
  position: LocalizedString;
  organization: LocalizedString;
  startDate: string;
  endDate: string;
  location: LocalizedString;
  description: LocalizedString;
  responsibilities: LocalizedString[];
  achievements: LocalizedString[];
  verified: boolean;
}

export interface LeadershipEntity {
  id: string;
  role: LocalizedString;
  organization: LocalizedString;
  organizationType: LocalizedString;
  period: string;
  description: LocalizedString;
  responsibilities: LocalizedString[];
  relatedInitiativeId?: string;
  verified: boolean;
}

export type WorkCategory = 'education' | 'mathematics' | 'science' | 'research' | 'innovation' | 'entrepreneurship';

export interface WorkEntity {
  id: string;
  slug: string;
  title: LocalizedString;
  category: WorkCategory;
  categoryLabel: LocalizedString;
  description: LocalizedString;
  principles: LocalizedString[];
  relatedInitiativeIds: string[];
  iconName?: string;
}

export interface InstitutionEntity {
  id: string;
  name: LocalizedString;
  type: LocalizedString;
  role: LocalizedString;
  establishedNotice: LocalizedString;
  description: LocalizedString;
  mission: LocalizedString;
  governance: LocalizedString;
  keyPillars: LocalizedString[];
  impactSummary: LocalizedString;
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
  title: LocalizedString;
  category: InitiativeCategory;
  categoryLabel: LocalizedString;
  institutionId: string;
  role: LocalizedString;
  summary: LocalizedString;
  description: LocalizedString;
  location: LocalizedString;
  startDate: string;
  endDate?: string;
  impactMetrics: { label: LocalizedString; value: string }[];
  keyOutcomes: LocalizedString[];
  coverImage: string;
  galleryImages?: string[];
  media?: string[];
  linkUrl?: string;
  linkText?: LocalizedString;
  verified: boolean;
}

export interface EcosystemStakeholder {
  id: string;
  name: LocalizedString;
  role: LocalizedString;
  description: LocalizedString;
}

export interface EcosystemConnection {
  from: string;
  to: string;
  description: LocalizedString;
}

export interface EcosystemPipelineStep {
  id: string;
  stage: LocalizedString;
  subtitle: LocalizedString;
  description: LocalizedString;
  impact: LocalizedString;
}

export interface EcosystemEntity {
  stakeholders: EcosystemStakeholder[];
  connections: EcosystemConnection[];
  pipeline: EcosystemPipelineStep[];
}

export interface ArticleEntity {
  id: string;
  slug: string;
  title: LocalizedString;
  publishedDate: string;
  readTime: string;
  category: LocalizedString;
  summary: LocalizedString;
  content: LocalizedString[];
  coverImage?: string;
  tags?: string[];
  relatedInitiativeIds?: string[];
  verified: boolean;
}

export type MediaCategory = 'newspaper' | 'interview' | 'event' | 'social';

export interface MediaEntity {
  id: string;
  headline: LocalizedString;
  publication: LocalizedString;
  publishedDate: string;
  category: MediaCategory;
  externalUrl: string;
  summary?: LocalizedString;
  image?: string;
  verified: boolean;
  verificationNotes?: string;
}

export interface AchievementEntity {
  id: string;
  type: LocalizedString;
  title: LocalizedString;
  awarder: LocalizedString;
  year: string;
  category: LocalizedString;
  description: LocalizedString;
  verified: boolean;
}

export interface GalleryEntity {
  id: string;
  title: LocalizedString;
  category: LocalizedString;
  date: string;
  imageUrl: string;
  caption: LocalizedString;
  location: LocalizedString;
  relatedInitiativeId?: string;
}

export interface ContactEntity {
  email: string;
  altEmail?: string;
  phone: string;
  whatsapp: string;
  location: LocalizedString;
  address: LocalizedString;
  fullNameNep?: string;
  credentialsLine?: string;
  facebookUrl: string;
  linkedinUrl: string;
  astronovaUrl: string;
  tisfUrl: string;
  MANBagmatiUrl: string;
  collaborationPurposes: { id: string; label: LocalizedString; description: LocalizedString }[];
}
