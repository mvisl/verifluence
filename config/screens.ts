export interface Screen {
  id: string
  name: string
  figmaUrl?: string // Optional – embedded Figma prototype
  imageUrl?: string // Optional – static export from Figma (PNG/JPG)
  flowImageUrl?: string // Optional – flow illustration
  flowEmbedUrl?: string // Optional – slides/prototype with flows
  category?: string
  description?: string
}

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || ''

export const screens: Screen[] = [
  // Direct links to Figma layouts (PNGs live in public/screens)
  {
    id: 'landing-page',
    name: 'Landing Page',
    imageUrl: `${prefix}/screens/landing-teaser.png`,
    figmaUrl: 'https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/Izgzufe5syG3KcDR7fdPVX/Verifluence.io-MVP-Design?node-id=314%3A8186',
    category: 'Structure',
    description: 'Main Verifluence.io landing page',
  },
  {
    id: 'streamer-overview',
    name: 'Streamer Section Overview',
    imageUrl: `${prefix}/screens/streamer-board.png`,
    figmaUrl: 'https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/Izgzufe5syG3KcDR7fdPVX/Verifluence.io-MVP-Design?node-id=159%3A5198',
    flowImageUrl: `${prefix}/screens/flow.png`,
    flowEmbedUrl: 'https://docs.google.com/presentation/d/1T5y7RnAk9qDxpQEeXpcOxA3ZhYWWmHOODO_O58EIgl4/embed?start=false&loop=false',
    category: 'Streamer',
    description: 'Full streamer area: login, registration, dashboards, campaigns, payments',
  },
  {
    id: 'casino-overview',
    name: 'Casino Section Overview',
    imageUrl: `${prefix}/screens/casino-board.png`,
    figmaUrl: 'https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/Izgzufe5syG3KcDR7fdPVX/Verifluence.io-MVP-Design?node-id=159%3A5199',
    category: 'Casino',
    description: 'Full casino area: registration, dashboards, campaign creation, streamers, analytics, payments',
  },

  // Casino
  {
    id: 'brand-dashboard',
    name: 'Brand Dashboard',
    imageUrl: `${prefix}/screens/brand-dashboard.png`,
    figmaUrl: 'https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/Izgzufe5syG3KcDR7fdPVX/Verifluence.io-MVP-Design?node-id=2161%3A46985',
    category: 'Casino',
    description: 'Casino dashboard with metrics overview and quick actions',
  },
  {
    id: 'brand-onboarding',
    name: 'Casino Onboarding',
    imageUrl: `${prefix}/screens/onboarding-flow.png`,
    figmaUrl: 'https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/Izgzufe5syG3KcDR7fdPVX/Verifluence.io-MVP-Design?node-id=1036%3A16521',
    category: 'Casino',
    description: 'Onboarding flow for a new casino brand',
  },
  {
    id: 'campaign-builder',
    name: 'Campaign Builder',
    imageUrl: `${prefix}/screens/campaign-builder.png`,
    figmaUrl: 'https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/Izgzufe5syG3KcDR7fdPVX/Verifluence.io-MVP-Design?node-id=518%3A12758',
    category: 'Casino',
    description: 'Multistep campaign creation flow',
  },
  {
    id: 'brand-verification',
    name: 'Brand Verification',
    imageUrl: `${prefix}/screens/brand-verification.png`,
    figmaUrl: 'https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/Izgzufe5syG3KcDR7fdPVX/Verifluence.io-MVP-Design?node-id=34%3A1146',
    category: 'Casino',
    description: 'Brand (KYC) verification with document upload',
  },
  {
    id: 'streamer-search-discovery',
    name: 'Streamer Search & Discovery',
    imageUrl: `${prefix}/screens/streamer-search.png`,
    figmaUrl: 'https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/Izgzufe5syG3KcDR7fdPVX/Verifluence.io-MVP-Design?node-id=1477%3A27843',
    category: 'Casino',
    description: 'Streamer discovery with filters and sorting',
  },
  {
    id: 'streamer-management',
    name: 'Streamer Management',
    imageUrl: `${prefix}/screens/streamer-management.png`,
    figmaUrl: 'https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/Izgzufe5syG3KcDR7fdPVX/Verifluence.io-MVP-Design?node-id=1791%3A33414',
    category: 'Casino',
    description: 'Workspace for managing streamer campaigns',
  },
  {
    id: 'streamer-verification-page',
    name: 'Streamer Verification Dashboard',
    imageUrl: `${prefix}/screens/streamer-verification.png`,
    figmaUrl: 'https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/Izgzufe5syG3KcDR7fdPVX/Verifluence.io-MVP-Design?node-id=1746%3A21772',
    category: 'Casino',
    description: 'Streamer verification details and analytics',
  },
  {
    id: 'casino-analytics',
    name: 'Casino Analytics',
    imageUrl: `${prefix}/screens/casino-analytics.png`,
    figmaUrl: 'https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/Izgzufe5syG3KcDR7fdPVX/Verifluence.io-MVP-Design?node-id=825%3A13111',
    category: 'Casino',
    description: 'Campaign performance and ROI analytics',
  },
  {
    id: 'casino-payments-escrow',
    name: 'Casino Payments & Escrow',
    imageUrl: `${prefix}/screens/casino-payments.png`,
    figmaUrl: 'https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/Izgzufe5syG3KcDR7fdPVX/Verifluence.io-MVP-Design?node-id=1078%3A14717',
    category: 'Casino',
    description: 'Escrow, budgets, and payouts',
  },

  // Streamer
  {
    id: 'streamer-dashboard',
    name: 'Streamer Dashboard',
    imageUrl: `${prefix}/screens/streamer-dashboard.png`,
    figmaUrl: 'https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/Izgzufe5syG3KcDR7fdPVX/Verifluence.io-MVP-Design?node-id=1601%3A28102',
    category: 'Streamer',
    description: 'Streamer dashboard with KPIs and status cards',
  },
  {
    id: 'campaign-browser',
    name: 'Campaign Browser',
    imageUrl: `${prefix}/screens/campaign-browser.png`,
    figmaUrl: 'https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/Izgzufe5syG3KcDR7fdPVX/Verifluence.io-MVP-Design?node-id=139%3A11824',
    category: 'Streamer',
    description: 'Campaign catalog to apply and respond',
  },
  {
    id: 'streamer-payments',
    name: 'Streamer Payments & Earnings',
    imageUrl: `${prefix}/screens/streamer-payments.png`,
    figmaUrl: 'https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/Izgzufe5syG3KcDR7fdPVX/Verifluence.io-MVP-Design?node-id=1854%3A63530',
    category: 'Streamer',
    description: 'Payments, history, and payout statuses',
  },

  // Shared / access
  {
    id: 'onboarding-flow',
    name: 'Onboarding Flow',
    imageUrl: `${prefix}/screens/onboarding-flow.png`,
    figmaUrl: 'https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/Izgzufe5syG3KcDR7fdPVX/Verifluence.io-MVP-Design?node-id=1036%3A16521',
    category: 'Both',
    description: 'Example onboarding for a new user',
  },
  {
    id: 'sign-in',
    name: 'Sign In',
    imageUrl: `${prefix}/screens/sign-in.png`,
    figmaUrl: 'https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/Izgzufe5syG3KcDR7fdPVX/Verifluence.io-MVP-Design?node-id=1601%3A27448',
    category: 'Auth',
    description: 'Authentication and login',
  },

  // Admin (kept from the original structure; no dedicated frames yet)
  {
    id: 'admin-panel',
    name: 'Admin Panel',
    figmaUrl: 'https://www.figma.com/embed?embed_host=share&url=YOUR_FIGMA_URL',
    category: 'Admin',
    description: 'User management, content moderation, system monitoring, analytics overview, referrals management',
  },
  {
    id: 'admin-streamer-analytics',
    name: 'Streamer Analytics Engine',
    figmaUrl: 'https://www.figma.com/embed?embed_host=share&url=YOUR_FIGMA_URL',
    category: 'Admin',
    description: 'Kick/Twitch data: follower growth, stream frequency, hours, viewer consistency, categories, languages, bots, sentiment',
  },
  {
    id: 'admin-casino-analytics',
    name: 'Casino Analytics Dashboard',
    figmaUrl: 'https://www.figma.com/embed?embed_host=share&url=YOUR_FIGMA_URL',
    category: 'Admin',
    description: 'Verified casinos list: wagering volume, deposit methods, Trust Score, compliance, market presence, reviews',
  },
  {
    id: 'admin-fraud-detection',
    name: 'Fraud Detection Engine',
    figmaUrl: 'https://www.figma.com/embed?embed_host=share&url=YOUR_FIGMA_URL',
    category: 'Admin',
    description: 'AI analysis: chat patterns, viewer spikes, bot-like messages, chat account age, alerting',
  },
  {
    id: 'admin-roi-modeling',
    name: 'ROI & Performance Modeling',
    figmaUrl: 'https://www.figma.com/embed?embed_host=share&url=YOUR_FIGMA_URL',
    category: 'Admin',
    description: 'ROI modeling: forecasting formula, PES, expected revenue, per-streamer ROI evaluation',
  },
]
