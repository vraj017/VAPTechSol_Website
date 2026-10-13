export type PageRoute = 'home' | 'services' | 'products' | 'about' | 'contact';

export interface ServiceDetail {
  id: string;
  number: string;
  title: string;
  description: string;
  businessImpact: string;
  techStack: string[];
  deliverables: string[];
  tag: string;
  iconName: string;
}

export interface InquiryFormData {
  fullName: string;
  businessEmail: string;
  company?: string;
  serviceRequired: string;
  budgetRange: string;
  description: string;
  contactMethod: 'email' | 'meet' | 'phone';
  requireNda: boolean;
}
