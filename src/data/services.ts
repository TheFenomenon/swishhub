export interface Service {
  slug: string;
  number: string;
  category: string;
  title: string;
  description: string;
  longDescription: string;
  deliverables: string[];
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
    deliverables: [
      "Custom mobile-first UI/UX architecture",
      "High-contrast editorial typography & brand alignment",
      "Performance-optimised static & dynamic web builds",
      "SEO structure, sitemaps & metadata integration",
      "Direct conversion paths & WhatsApp lead triggers"
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
    deliverables: [
      "Website core messaging & value proposition copy",
      "Landing page sales funnels & lead magnets",
      "Company profile & professional pitch decks",
      "Editorial blog posts & SEO-driven articles"
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
    deliverables: [
      "Monthly content strategy & editorial calendars",
      "Platform optimisation & profile branding",
      "Copywriting & asset scheduling guidelines",
      "Engagement and growth frameworks"
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
    deliverables: [
      "Channel architecture & playlist organization",
      "Metadata, tags & search visibility audit",
      "Workflow automation for publishing & asset management",
      "Thumbnail & title strategy consulting"
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
    deliverables: [
      "AI-assisted commercial video scripts & storyboards",
      "Vertical cinematic commercials & ad reels",
      "Synthetic voiceovers & audio integration",
      "Post-production polish & brand grading"
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
    deliverables: [
      "Custom typography-led apparel printing",
      "Corporate stationery, notebooks & packaging",
      "Event merchandise & promotional materials",
      "Material quality audit & production prep"
    ],
    approach:
      "Clean design translates seamlessly from digital screens onto premium fabrics and paper stocks.",
  },
];