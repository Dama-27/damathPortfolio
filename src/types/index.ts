/* ── Portfolio Data Types ── */

export interface NavLink {
  label: string;
  href: string;
}

export interface JourneyEvent {
  year: string;
  title: string;
  description: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: string[];
}

export interface ExperienceBullet {
  text: string;
}

export interface Experience {
  title: string;
  company: string;
  companyUrl?: string;
  period: string;
  type: string;
  bullets: ExperienceBullet[];
  tags: string[];
}

export type ProjectCategory = 'All' | 'Web' | 'IoT/Embedded' | 'AI/ML' | 'Research';

export interface Project {
  title: string;
  subtitle: string;
  status: 'Completed' | 'In Progress';
  statusDate?: string;
  tech: string[];
  description: string;
  tags: string[];
  categories: ProjectCategory[];
  githubUrl?: string;
  liveUrl?: string;
  role?: string;
  featured?: boolean;
}

export interface Offer {
  icon: string;
  title: string;
  description: string;
}

export interface CertificationCompleted {
  title: string;
  issuer: string;
  year: string;
  tags: string[];
  status: 'completed';
}

export interface CertificationInProgress {
  title: string;
  issuer: string;
  expectedCompletion: string;
  progress: number;
  note: string;
  tags: string[];
  status: 'in-progress';
}

export type Certification = CertificationCompleted | CertificationInProgress;

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  github: string;
  linkedin: string;
  medium?: string;
  portfolioUrl: string;
}

export interface OwnerInfo {
  name: string;
  role: string;
  tagline: string;
  current: string;
  education: string;
  bio: string;
  pullQuote: string;
  interestTags: string[];
  contactBlurb: string;
}
