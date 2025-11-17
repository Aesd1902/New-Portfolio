
export interface PersonalDetails {
  name: string;
  title: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  linkedin: string;
  portfolio: string;
  location: string;
}

export interface Experience {
  role: string;
  company: string;
  duration: string;
  location: string;
  points: string[];
}

export interface Education {
  institution: string;
  degree: string;
  duration: string;
}
