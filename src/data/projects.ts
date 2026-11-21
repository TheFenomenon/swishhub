export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  category: string;
  location: string;
  summary: string;
  problem: string;
  approach: string;
  outcome: string;
  deliverables: string[];
}

export const projects: CaseStudy[] = [
  {
    slug: "real-estate-ecosystem-and-brand-hub",
    title: "Multi-Page Brand & Real Estate Ecosystem",
    client: "Ivy City & Ivy Rose City Estates",
    category: "WEB ARCHITECTURE & POSITIONING",
    location: "Makurdi & Abuja",
    summary:
      "Structured a clear, authoritative digital presence separating estate developments, brand storytelling, and direct buyer inquiries.",
    problem:
      "Prospects looking at estate developments often get overwhelmed by scattered info or unclear next steps, slowing down serious inquiries.",
    approach:
      "Organized page hierarchy around Attention → Trust → Action with clear property highlights, scannable sections, and frictionless WhatsApp inquiry triggers.",
    outcome:
      "A cohesive, credible digital hub that presents properties cleanly and routes interested buyers straight into direct conversations.",
    deliverables: [
      "Multi-page Astro site architecture",
      "Editorial layout & typographic hierarchy",
      "Direct WhatsApp inquiry routing",
      "Mobile-first responsive polish",
    ],
  },
  {
    slug: "executive-book-to-lead-magnet-system",
    title: "Executive Book Compression & Lead Magnet Funnel",
    client: "Guru Deseye Subai",
    category: "CONTENT SYSTEMS & CONVERSION",
    location: "Nigeria",
    summary:
      "Distilled long-form expertise into a focused, high-value lead magnet designed to attract and qualify readers before a sales conversation.",
    problem:
      "Busy prospects rarely finish dense manuscripts on a first pass, leaving valuable authority untapped as a top-of-funnel asset.",
    approach:
      "Extracted the sharpest core frameworks, tightened pacing and readability, and structured the takeaway flow around clear reader action.",
    outcome:
      "A punchy, executive-ready lead asset that positions the author as a trusted authority and sparks higher-intent inquiries.",
    deliverables: [
      "Content editing & structural compression",
      "Executive reading hierarchy",
      "Lead-magnet positioning & CTA flow",
    ],
  },
  {
    slug: "service-pricing-and-brief-funnel",
    title: "Transparent Scope Calculator & Brief Engine",
    client: "SwishHub Interactive Internal System",
    category: "INTERACTIVE CONVERSION UX",
    location: "Gboko & Makurdi",
    summary:
      "Replaced vague 'DM for price' bottlenecks with an interactive Naira scope builder and structured project brief that pre-qualifies leads.",
    problem:
      "Back-and-forth chats over basic features and budgets waste time for both the agency and serious clients.",
    approach:
      "Built live one-time and monthly Naira calculators per service plus a structured brief form that packages exact selections into WhatsApp.",
    outcome:
      "Visitors arrive on WhatsApp already aligned on scope, budget range, and goals—turning casual browsers into warmer leads.",
    deliverables: [
      "Interactive Naira pricing calculator",
      "Structured project brief builder",
      "Context-aware WhatsApp handoff",
    ],
  },
];