export interface PricedDeliverable {
  id: string;
  label: string;
  price: number;
  includedByDefault?: boolean;
}

export interface Service {
  slug: string;
  number: string;
  category: string;
  title: string;
  description: string;
  longDescription: string;
  basePrice: number;
  pricedDeliverables: PricedDeliverable[];
  approach: string;
}

export const services: Service[] = [
  {
    slug: "web-design-and-development",
    number: "01",
    category: "DIGITAL FOUNDATIONS",
    title: "Web design & development",
    description:
      "Business websites and landing pages designed to communicate your value, build credibility and guide visitors towards taking action.",
    longDescription:
      "We don't build generic software or bloated templates. We engineer fast, conversion-led static and dynamic web experiences that establish instant authority and make your next step obvious.",
    basePrice: 150000,
    pricedDeliverables: [
      { id: "ui_ux", label: "Custom mobile-first UI/UX architecture", price: 50000, includedByDefault: true },
      { id: "typography", label: "High-contrast editorial typography & brand tokens", price: 30000, includedByDefault: true },
      { id: "performance", label: "Performance-optimised static build & hosting setup", price: 40000, includedByDefault: true },
      { id: "seo", label: "Technical SEO structure, sitemaps & metadata", price: 35000, includedByDefault: false },
      { id: "cms", label: "CMS integration or custom dynamic data handling", price: 75000, includedByDefault: false },
      { id: "whatsapp_funnel", label: "Advanced WhatsApp lead capture & booking funnel", price: 45000, includedByDefault: true }
    ],
    approach:
      "Every layout is built with intention—prioritizing speed, clear hierarchy, and an unwavering focus on what your visitors need to see before they take action.",
  },
  {
    slug: "content-writing",
    number: "02",
    category: "STRATEGIC COMMUNICATION",
    title: "Content writing",
    description:
      "Clear, persuasive content that helps people understand your offer, connect with your message and make informed decisions.",
    longDescription:
      "Words either clarify or confuse. We write sharp, commercially aware copy that strips away corporate fluff and communicates your exact value proposition with human clarity.",
    basePrice: 80000,
    pricedDeliverables: [
      { id: "messaging", label: "Core website messaging & value proposition copy", price: 40000, includedByDefault: true },
      { id: "landing_copy", label: "High-converting landing page sales copy", price: 45000, includedByDefault: true },
      { id: "profile", label: "Company profile & professional executive pitch deck", price: 50000, includedByDefault: false },
      { id: "blog_pack", label: "SEO-driven editorial article pack (4 posts)", price: 60000, includedByDefault: false }
    ],
    approach:
      "We focus on what your customers are actually thinking, answering their objections and guiding them naturally toward your solution.",
  },
  {
    slug: "social-media-management",
    number: "03",
    category: "BRAND VISIBILITY",
    title: "Social media management",
    description:
      "Strategic content planning and social media management that help businesses stay visible, communicate consistently and build meaningful audience relationships.",
    longDescription:
      "Consistency beats erratic bursts of posting. We help growing brands structure their social presence, plan engaging content calendars, and maintain active authority across platforms.",
    basePrice: 90000,
    pricedDeliverables: [
      { id: "strategy", label: "Monthly content strategy & editorial calendar", price: 30000, includedByDefault: true },
      { id: "optimization", label: "Platform optimization & profile branding refresh", price: 25000, includedByDefault: true },
      { id: "content_creation", label: "Copywriting & asset scheduling (15 posts/mo)", price: 50000, includedByDefault: true },
      { id: "growth_framework", label: "Audience engagement & organic growth framework", price: 35000, includedByDefault: false }
    ],
    approach:
      "We design social systems that keep your brand top-of-mind without resorting to gimmicks or empty vanity metrics.",
  },
  {
    slug: "youtube-optimisation-and-automation",
    number: "04",
    category: "VIDEO & DISCOVERY",
    title: "YouTube optimisation & automation",
    description:
      "Channel optimisation, content organisation and practical automation to improve how your YouTube presence works.",
    longDescription:
      "YouTube is the world's second-largest search engine. We help you structure your channel, optimize discoverability, and streamline your video workflows to turn views into business leverage.",
    basePrice: 120000,
    pricedDeliverables: [
      { id: "architecture", label: "Channel architecture & playlist organization", price: 40000, includedByDefault: true },
      { id: "metadata_audit", label: "Metadata, tags & search visibility audit", price: 35000, includedByDefault: true },
      { id: "workflow_auto", label: "Workflow automation for publishing & asset management", price: 55000, includedByDefault: false },
      { id: "thumbnail_strat", label: "Thumbnail & high-click title strategy consultation", price: 30000, includedByDefault: true }
    ],
    approach:
      "We turn chaotic video libraries into searchable, authoritative assets that work for your business around the clock.",
  },
  {
    slug: "ai-assisted-video-content",
    number: "05",
    category: "DIGITAL CREATIVE PRODUCTION",
    title: "AI-assisted video content",
    description:
      "Creative video production using AI-assisted tools and human direction to develop engaging visual content for businesses.",
    longDescription:
      "Leveraging cutting-edge AI production pipelines combined with disciplined human editing, we create commercial video assets, social clips, and promotional promos at a fraction of traditional agency overhead.",
    basePrice: 130000,
    pricedDeliverables: [
      { id: "ai_scripts", label: "AI-assisted commercial video scripts & storyboards", price: 35000, includedByDefault: true },
      { id: "vertical_ads", label: "Vertical cinematic commercials & ad reels (3 videos)", price: 75000, includedByDefault: true },
      { id: "voiceover", label: "Synthetic professional voiceovers & audio integration", price: 30000, includedByDefault: false },
      { id: "grading", label: "Post-production polish & brand grading", price: 25000, includedByDefault: true }
    ],
    approach:
      "Technology accelerates production, but human taste and commercial awareness dictate the final result.",
  },
  {
    slug: "custom-t-shirts-and-stationery",
    number: "06",
    category: "PRINT & BRAND MATERIALS",
    title: "Custom T-shirts & stationery",
    description:
      "Custom-printed T-shirts, stationery and practical branded materials for businesses, organisations and special projects.",
    longDescription:
      "Physical touchpoints matter. Whether custom apparel for a corporate team or premium stationery for executive meetings, we produce tangible brand assets that look sharp and feel premium.",
    basePrice: 70000,
    pricedDeliverables: [
      { id: "apparel_print", label: "Custom typography-led apparel printing (Batch setup)", price: 40000, includedByDefault: true },
      { id: "stationery", label: "Corporate stationery, notebooks & packaging design", price: 45000, includedByDefault: true },
      { id: "merchandise", label: "Event merchandise & promotional materials pack", price: 50000, includedByDefault: false },
      { id: "material_audit", label: "Material quality audit & production prep", price: 20000, includedByDefault: true }
    ],
    approach:
      "Clean design translates seamlessly from digital screens onto premium fabrics and paper stocks.",
  },
];