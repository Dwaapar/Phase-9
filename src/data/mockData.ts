import { Workflow, Agent, Asset, CaseStudy, BlogPost, Testimonial } from '../types';

export const mockWorkflows: Workflow[] = [
  {
    id: '1',
    name: 'Lead Qualification Pipeline',
    description: 'Automatically qualify and route leads based on custom criteria',
    category: 'Sales',
    difficulty: 'Intermediate',
    runtime: '~5 minutes',
    downloads: '1,240',
    rating: 4.8,
    reviews: 156,
    tags: ['CRM', 'Lead Gen', 'Automation', 'Salesforce'],
    pricing: 'Free',
    lastUpdated: '2024-12-10',
    steps: [
      'Lead data captured from form submission',
      'Enrichment with company and contact data',
      'Scoring based on ICP criteria',
      'Territory and rep assignment',
      'Automated notification and task creation'
    ],
    envVars: [
      { name: 'SALESFORCE_API_KEY', description: 'Your Salesforce API key', required: true },
      { name: 'SLACK_WEBHOOK_URL', description: 'Slack webhook for notifications', required: false },
      { name: 'SCORING_THRESHOLD', description: 'Minimum score for qualified leads', required: true, default: '75' }
    ],
    integrations: ['Salesforce', 'HubSpot', 'Slack', 'Zapier'],
    patchNotes: [
      { version: '1.2.0', date: '2024-12-10', changes: ['Added Slack integration', 'Improved scoring algorithm'] },
      { version: '1.1.0', date: '2024-11-28', changes: ['Territory assignment logic', 'Bug fixes'] }
    ]
  }
];

export const mockAgents: Agent[] = [
  {
    id: '1',
    name: 'SDR Agent',
    type: 'SDR',
    description: 'Automated sales development and lead qualification',
    features: ['Lead outreach', 'Email sequences', 'Meeting booking'],
    status: 'Popular',
    deployment: 'Managed'
  },
  {
    id: '2',
    name: 'Support Agent',
    type: 'Support',
    description: '24/7 customer support and ticket resolution',
    features: ['Instant responses', 'Ticket routing', 'Knowledge base'],
    status: 'New',
    deployment: 'Hybrid'
  }
];

export const mockAssets: Asset[] = [
  {
    id: '1',
    name: 'Sales Prompt Pack',
    type: 'Prompt Pack',
    description: 'Ready-to-use prompts for sales conversations',
    category: 'Sales',
    downloads: '2,100',
    rating: 4.9,
    pricing: 'Free',
    fileSize: '2.5 MB',
    format: 'JSON'
  }
];

export const mockCaseStudies: CaseStudy[] = [
  {
    id: '1',
    title: 'SaaS Company Achieves 23% MQL Uplift in 72 Hours',
    company: 'TechFlow',
    industry: 'B2B SaaS',
    challenge: 'Manual lead routing causing delays and missed opportunities',
    solution: 'Automated lead scoring and intelligent routing system',
    results: [
      { metric: 'MQL Conversion', value: '+23%', icon: 'TrendingUp' },
      { metric: 'Response Time', value: '-67%', icon: 'Clock' },
      { metric: 'Sales Team Efficiency', value: '+40%', icon: 'Users' }
    ],
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
  }
];

export const mockBlogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Future of Business Automation in 2025',
    excerpt: 'Explore the latest trends and technologies shaping the automation landscape.',
    content: 'Full blog post content here...',
    category: 'Automation',
    author: 'Sarah Chen',
    publishedAt: new Date('2024-12-15'),
    readTime: '5 min read',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    tags: ['automation', 'AI', 'trends']
  }
];

export const mockTestimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Chen',
    role: 'VP Operations',
    company: 'TechFlow',
    quote: 'Findawise transformed our operations completely. We now run 10x faster with half the manual work.',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    rating: 5
  }
];