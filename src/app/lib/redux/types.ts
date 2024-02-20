export interface ResumeSocialProfile {
  network: string;
  username: string;
  url: string;
}

export interface ResumeWorkExperience {
  organization: string;
  position: string;
  startDate: string;
  endDate?: string;
  description?: string[];
}

export interface ResumeVolunteer {
  organization: string;
  position: string;
  url: string;
  startDate: string;
  endDate?: string;
  summary: string;
  description: string[];
}

export interface ResumeEducation {
  institution: string;
  course: string;
  startDate: string;
  endDate: string;
  score?: string;
  description?: string[];
}

export interface ResumeAward {
  title: string;
  date: string;
  awarder: string;
  summary: string;
}

export interface ResumeCertificate {
  title: string;
  date: string;
  issuer: string;
  url?: string;
  description?: string;
}

export interface ResumePublication {
  title: string;
  publisher: string;
  releaseDate: string;
  url: string;
  summary: string;
}

export interface ResumeSkill {
  description: string[];
}

export interface ResumeLanguage {
  language: string;
  fluency: string;
}

export interface ResumeInterest {
  name: string;
  keywords: string[];
}

export interface ResumeReference {
  name: string;
  position: string;
  organization?: string;
  contact?: string;
  summary?: string;
}

export interface ResumeProject {
  name: string;
  startDate: string;
  endDate?: string;
  description: string[];
  url: string;
}
export interface ResumeBasics {
  name: string;
  label: string;
  image?: string;
  email?: string;
  phone?: string;
  url?: string;
  summary?: string;
  location?: string;
  profiles: ResumeSocialProfile[];
}

export interface Resume {
  basics: ResumeBasics;
  works: ResumeWorkExperience[];
  education: ResumeEducation[];
  projects: ResumeProject[];
  skills: string[];
  references: ResumeReference[];
  certificates: ResumeCertificate[];

  awards: ResumeAward[];
  publications: ResumePublication[];
  languages: ResumeLanguage[];
  interests: ResumeInterest[];
  volunteer: ResumeVolunteer[];
}

export type ResumeKey = keyof Resume;
