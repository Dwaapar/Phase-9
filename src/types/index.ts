export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: 'user' | 'admin';
  createdAt: Date;
}

export interface Workflow {
  id: string;
  name: string;
  description: string;
  category: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  runtime: string;
  downloads: string;
  rating: number;
  reviews: number;
  tags: string[];
  pricing: 'Free' | 'Premium';
  lastUpdated: string;
  steps: string[];
  envVars: EnvVar[];
  integrations: string[];
  patchNotes: PatchNote[];
}

export interface EnvVar {
  name: string;
  description: string;
  required: boolean;
  default?: string;
}

export interface PatchNote {
  version: string;
  date: string;
  changes: string[];
}

export interface Agent {
  id: string;
  name: string;
  type: 'SDR' | 'Support' | 'Operations';
  description: string;
  features: string[];
  status: 'Popular' | 'New' | 'Featured';
  deployment: 'Managed' | 'Self-hosted' | 'Hybrid';
}

export interface Asset {
  id: string;
  name: string;
  type: 'Prompt Pack' | 'Dataset' | 'Playbook' | 'Creative Bundle';
  description: string;
  category: string;
  downloads: string;
  rating: number;
  pricing: 'Free' | 'Premium';
  fileSize?: string;
  format?: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  company: string;
  industry: string;
  challenge: string;
  solution: string;
  results: Result[];
  image: string;
}

export interface Result {
  metric: string;
  value: string;
  icon: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  publishedAt: Date;
  readTime: string;
  image: string;
  tags: string[];
}

export interface Guide {
  id: string;
  title: string;
  description: string;
  category: string;
  pages: number;
  readTime: string;
  rating: number;
  downloads: string;
  image: string;
  content: string;
}

export interface Comparison {
  id: string;
  title: string;
  category: string;
  description: string;
  winner: string;
  tools: ComparisonTool[];
  rating: number;
  views: string;
}

export interface ComparisonTool {
  name: string;
  pros: string[];
  cons: string[];
  pricing: string;
  bestFor: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  avatar: string;
  rating: number;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface ContactForm {
  name: string;
  email: string;
  company?: string;
  subject: string;
  message: string;
  type: 'general' | 'sales' | 'support' | 'partnership';
}

export interface Video {
  id: string;
  title: string;
  description: string;
  url: string;
  thumbnail: string;
  duration: string;
  category: string;
}

export interface PilotForm {
  useCase: string;
  stack: string;
  dataAccess: string;
  timeline: string;
  company: string;
  email: string;
  name: string;
}