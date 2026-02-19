// src/constants/objectives.js

// Matches your Tkinter dicts 1:1, just in JS.
export const marketingData = {
  'Drive Penetration': {
    'Media Strategy': [
      'Focus on broad reach to attract new customers',
      'Create awareness and trial',
      'SOV'
    ],
    'Key Focus Areas': [
      'Maximizing reach to untapped audiences',
      'Message simplicity for mass appeal',
      'Highlight USPs and benefits'
    ],
    'Channels/Approach': [
      'Mass Media: TV, Radio, Print, OOH (billboards)',
      'Digital Platforms: Social media, display ads, YouTube (targeted awareness campaigns)',
      'Sampling: Encourage trial through physical or digital product samples'
    ]
  },
  'Build Loyalty': {
    'Media Strategy': [
      'Continuity & frequency',
      'Engage existing customers with personalized and value-driven messaging'
    ],
    'Key Focus Areas': [
      'Reinforce brand trust and emotional connection',
      'Reward repeat customers',
      'Drive storytelling and engagement'
    ],
    'Channels/Approach': [
      'CRM and Email Marketing: Personalized content/offers',
      'Digital Platforms: Social media communities, targeted content marketing',
      'Loyalty Programs: App-based or direct incentive programs',
      'Content Marketing: Stories around brand values'
    ]
  },
  'Increase Frequency of Purchase': {
    'Media Strategy': [
      'Promote reminders, offers, and convenience to encourage repeat purchases',
      'Frequency'
    ],
    'Key Focus Areas': [
      'Driving purchase triggers and urgency',
      'Highlight ease of purchase and added benefits',
      'Encourage habits'
    ],
    'Channels/Approach': [
      'Retail Promotions: In-store displays, POS activations, discounts',
      'Digital Retargeting Ads: Reminder ads (Google, Facebook, etc.)',
      'Push Notifications: Apps or SMS alerts for promotions',
      'Contextual Ads: Placements based on consumer behaviour (food, shopping)'
    ]
  }
};

export const communicationData = {
  'Awareness': {
    'Media Strategy': [
      'Maximize reach to build broad visibility',
      'Deliver simple, clear messaging'
    ],
    'Key Focus Areas': [
      'High-frequency exposure to ensure recall',
      'Reach new and larger audiences',
      'Build familiarity quickly'
    ],
    'Channels/Approach': [
      'Mass Media: TV, Radio, Print, OOH',
      'Digital Media: YouTube ads, social media ads, display ads',
      'Sponsorships: Large events or programs for visibility',
      'SEO/SEM: Boost online presence'
    ]
  },
  'Image / Values': {
    'Media Strategy': [
      'Create emotional connections through storytelling and consistent messaging'
    ],
    'Key Focus Areas': [
      'Reinforce brand identity and values',
      'Build trust and emotional resonance',
      'Focus on brand personality'
    ],
    'Channels/Approach': [
      'Content Marketing: Blogs, branded videos, influencer partnerships',
      'Social Media: Storytelling via Instagram, Facebook, and TikTok',
      'Sponsorships: Align with events or causes that reflect brand values',
      'TV: Emotional storytelling through long-format ads'
    ]
  },
  'Benefits (Functional or Emotional)': {
    'Media Strategy': [
      'Highlight product/service benefits and how they address consumer needs'
    ],
    'Key Focus Areas': [
      'Showcase features, performance, and real-world impact',
      'Emotional appeal: How it improves life',
      'Drive relevance and action'
    ],
    'Channels/Approach': [
      'Demonstrative Ads: Digital video ads, TV commercials showcasing benefits',
      'Social Proof: Influencer testimonials, reviews, and user-generated content',
      'Performance Ads: Google Search Ads, retargeting campaigns',
      'POS Displays: Highlight benefits at point of purchase'
    ]
  }
};

export const campaignData = {
  'Attract': {
    'Challenge': ['Low or No Brand Equity'],
    'Objective': ['Create Association'],
    'How': ['Create emotive long-term connections']
  },
  'Refresh': {
    'Challenge': ['Increase Equity Or Enhance Relevance'],
    'Objective': ['Reinforce Existing Association'],
    'How': ['Remind the consumer of what the brand stands for & encourage sales']
  },
  'Launch': {
    'Challenge': ['Low Or No Awareness'],
    'Objective': ['Build Awareness & Drive Trial'],
    'How': ['Move consumers through the funnel from discovery to purchase']
  },
  'Defend': {
    'Challenge': ['Low To Moderate Saliency Or Apathy'],
    'Objective': ['Maintain TOM & Increase Conversion'],
    'How': ['Always-on. Focus on conversion by driving straight to sale']
  },
  'Respond': {
    'Challenge': ['High Impact'],
    'Objective': ['Drive Awareness & CTA'],
    'How': ['Optimise CTA with fast and proven tactics']
  }
};

export const HEADERS_FOR_TYPE = (type) =>
  type === 'Campaign Objectives'
    ? ['Challenge', 'Objective', 'How']
    : ['Media Strategy', 'Key Focus Areas', 'Channels/Approach'];
