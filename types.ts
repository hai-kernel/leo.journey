export interface ContactInfo {
  phone: string;
  email: string;
  github: string;
  linkedin: string;
  location: string;
}

export interface Education {
  institution: string;
  degree: string;
  duration: string;
  details: string[];
}

export interface Experience {
  role: string;
  company: string; // Used as project name/company name 
  duration: string;
  location?: string;
  technologies: string[];
  description?: string;
  keyFeatures?: string[];
  keyContributions: string[];
  imageUrl?: string; // Optional image for the project
  logoUrl?: string; // Optional company logo (experience cards)
  link?: string; // Optional live link
  github?: string; // Optional specific Github repository link
}

export interface Certification {
  name: string;
  date?: string;
  link?: string; // Optional link to the certificate
}

export interface Award {
  name: string;
  date?: string;
  link?: string; // Optional link to the award proof
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface ResumeData {
  name: string;
  realName: string;
  title: string;
  contact: ContactInfo;
  objective: string;
  skills: SkillGroup[];
  education: Education[];
  experience: Experience[];
  projects: Experience[];
  certifications: Certification[];
  awards: Award[];
  awardPhotos: string[]; // New field for award images
  personalPhotos?: string[]; // Field for personal images
  cvUrl?: string; // Optional: Path to a static PDF file (e.g., "/cv.pdf")
}