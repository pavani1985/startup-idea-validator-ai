interface AIAnalysis {
  marketValidation: string;
  strengths: string[];
  weaknesses: string[];
  opportunities: string[];
  threats: string[];
  competitionAnalysis: string;
  revenuePotential: string;
  investorScore: number;
  innovationScore: number;
  suggestions: string[];
}

const industryData: Record<string, AIAnalysis> = {
  healthcare: {
    marketValidation: 'Healthcare sector shows strong market demand with 12% annual growth. Your solution addresses a significant pain point in patient care management.',
    strengths: ['Growing healthcare industry', 'Increasing digitalization', 'Strong regulatory support', 'High customer need'],
    weaknesses: ['Requires regulatory compliance', 'High initial development cost', 'Complex integrations needed'],
    opportunities: ['Government health initiatives', 'Telemedicine expansion', 'AI adoption in healthcare'],
    threats: ['Established healthcare players', 'Strict regulations', 'Data privacy concerns'],
    competitionAnalysis: 'Market includes players like Teladoc, MDLive, and regional solutions. Differentiation through specialized features is crucial.',
    revenuePotential: '$2M-$10M annually at scale',
    investorScore: 82,
    innovationScore: 78,
    suggestions: [
      'Focus on HIPAA compliance early',
      'Partner with healthcare providers',
      'Build strong data security features',
      'Consider B2B2C model'
    ]
  },
  agriculture: {
    marketValidation: 'Agriculture technology market is growing 15% annually with farmers increasingly adopting digital solutions for crop optimization.',
    strengths: ['Large addressable market', 'Growing farmer adoption', 'Clear ROI potential', 'Sustainability focus'],
    weaknesses: ['Geographic dependency', 'Seasonal revenue fluctuations', 'Limited internet connectivity in rural areas'],
    opportunities: ['Government agricultural subsidies', 'Climate tech funding', 'Farm-to-table movement'],
    threats: ['Weather unpredictability', 'Farmer resistance to tech', 'International competition'],
    competitionAnalysis: 'Key competitors: John Deere, Trimble, AGCO. Room for specialized AgTech startups in emerging markets.',
    revenuePotential: '$1M-$8M annually',
    investorScore: 75,
    innovationScore: 72,
    suggestions: [
      'Build offline-first functionality',
      'Partner with agricultural cooperatives',
      'Focus on emerging markets first',
      'Develop mobile app for field use'
    ]
  },
  education: {
    marketValidation: 'EdTech market growing 20% annually post-pandemic with strong demand for online learning solutions globally.',
    strengths: ['Large global market', 'Remote learning acceptance', 'Subscription revenue model', 'Government support'],
    weaknesses: ['High customer acquisition cost', 'Content creation overhead', 'Teacher adoption challenges'],
    opportunities: ['Skill development programs', 'Corporate training', 'International expansion'],
    threats: ['Established platforms (Udemy, Coursera)', 'Free alternatives', 'Variable internet access'],
    competitionAnalysis: 'Market dominated by Coursera, Udemy, 2U but room for specialized niche platforms and regional players.',
    revenuePotential: '$500K-$5M annually',
    investorScore: 78,
    innovationScore: 76,
    suggestions: [
      'Focus on specific skill/niche',
      'Build certification partnerships',
      'Create interactive content',
      'Develop mobile-first platform'
    ]
  },
  ai: {
    marketValidation: 'AI market exploding with $1.8T potential by 2030. Every industry seeking AI solutions.',
    strengths: ['Booming market demand', 'High valuation multiples', 'Enterprise focus', 'Quick adoption'],
    weaknesses: ['Requires top talent', 'High R&D costs', 'Regulatory uncertainty'],
    opportunities: ['Enterprise AI adoption', 'Vertical-specific solutions', 'Government AI initiatives'],
    threats: ['Well-funded competitors', 'Big tech dominance', 'Talent shortage', 'Regulatory scrutiny'],
    competitionAnalysis: 'Highly competitive with players like OpenAI, Anthropic, Google. Success requires differentiation.',
    revenuePotential: '$2M-$50M+ annually',
    investorScore: 88,
    innovationScore: 90,
    suggestions: [
      'Build proprietary datasets',
      'Focus on specific use case',
      'Partner with enterprises',
      'Ensure responsible AI practices'
    ]
  },
  robotics: {
    marketValidation: 'Robotics market growing 13% annually with applications in manufacturing, logistics, and healthcare.',
    strengths: ['Growing automation need', 'Industrial adoption', 'Long-term recurring revenue'],
    weaknesses: ['High capital requirements', 'Manufacturing expertise needed', 'Long sales cycles'],
    opportunities: ['Supply chain automation', 'Warehouse automation', 'Healthcare robotics'],
    threats: ['Capital-heavy competition', 'Economic downturns', 'Technical complexity'],
    competitionAnalysis: 'Established players like ABB, Fanuc dominate. Success through specialized robotics solutions.',
    revenuePotential: '$5M-$100M+ annually',
    investorScore: 72,
    innovationScore: 85,
    suggestions: [
      'Partner with manufacturers',
      'Build specialized robots',
      'Focus on RaaS model',
      'Invest in safety features'
    ]
  },
  fintech: {
    marketValidation: 'FinTech market growing 15% annually with strong investor interest and changing banking landscape.',
    strengths: ['Large addressable market', 'Digital-first users', 'Recurring revenue', 'Scalable model'],
    weaknesses: ['Regulatory complexity', 'Customer trust building', 'Banking partnerships needed'],
    opportunities: ['Emerging markets banking', 'Crypto adoption', 'DeFi solutions'],
    threats: ['Traditional banks moving digital', 'Regulatory tightening', 'Cybersecurity threats'],
    competitionAnalysis: 'Highly competitive with Stripe, Square, PayPal. Success through unique value proposition.',
    revenuePotential: '$1M-$20M annually',
    investorScore: 84,
    innovationScore: 80,
    suggestions: [
      'Understand regulatory environment',
      'Build strong security',
      'Focus on user experience',
      'Plan for banking partnerships'
    ]
  },
  spacetech: {
    marketValidation: 'Space tech market growing 13% annually with government and commercial space initiatives expanding.',
    strengths: ['Emerging market', 'Government backing', 'International partnerships', 'Innovation focus'],
    weaknesses: ['Very high capital needs', 'Long development cycles', 'Regulatory challenges'],
    opportunities: ['Satellite communications', 'Space tourism', 'Resources mining'],
    threats: ['Established space agencies', 'Geopolitical factors', 'Launch costs'],
    competitionAnalysis: 'SpaceX, Blue Origin, Axiom Space lead. Success through niche solutions.',
    revenuePotential: '$10M-$500M+ annually',
    investorScore: 70,
    innovationScore: 95,
    suggestions: [
      'Focus on specific niche',
      'Build government relationships',
      'Plan for 5-10 year timeline',
      'Secure strategic partnerships'
    ]
  }
};

export const generateAIAnalysis = (industry: string): AIAnalysis => {
  const industryLower = industry.toLowerCase();
  const data = industryData[industryLower] || industryData['ai'];
  
  // Add slight randomization for realistic feel
  return {
    ...data,
    investorScore: Math.max(50, Math.min(100, data.investorScore + Math.floor(Math.random() * 10 - 5))),
    innovationScore: Math.max(50, Math.min(100, data.innovationScore + Math.floor(Math.random() * 10 - 5))),
  };
};