export interface ServiceAddon {
  id: string;
  label: string;
  description: string;
  price: number;
  billing?: "one-time" | "monthly";
  category: string;
}

export interface ServiceItem {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  basePrice: number;
  addons: ServiceAddon[];
}

export const services: ServiceItem[] = [
  {
    slug: "web-development",
    title: "Web Development",
    tagline: "Fast, conversion-focused websites built to turn visitors into paying customers.",
    description:
      "Start with a solid website foundation, then select only the one-time features or monthly care options your business needs.",
    basePrice: 50000,
    addons: [
      // 1. Foundation & Infrastructure
      {
        id: "domain-name",
        label: "Domain Name Setup (.com.ng / .com)",
        description: "Domain registration, DNS configuration, and connection to your site.",
        price: 15000,
        billing: "one-time",
        category: "Foundation & Infrastructure",
      },
      {
        id: "web-hosting",
        label: "Website Hosting Setup",
        description: "Reliable hosting configuration so your site stays fast and online.",
        price: 25000,
        billing: "one-time",
        category: "Foundation & Infrastructure",
      },
      {
        id: "mobile-responsiveness",
        label: "Mobile Responsiveness Audit & Polish",
        description: "Ensure layouts, buttons, and typography work smoothly across phones, tablets, and desktops.",
        price: 60000,
        billing: "one-time",
        category: "Foundation & Infrastructure",
      },

      // 2. Performance, Redesign & Migration
      {
        id: "website-redesign",
        label: "Website Redesign",
        description: "Transform an outdated website into a modern, credible, conversion-focused experience.",
        price: 150000,
        billing: "one-time",
        category: "Performance, Redesign & Migration",
      },
      {
        id: "website-migration",
        label: "Website Migration",
        description: "Move an existing website cleanly between hosting providers or platforms with zero downtime.",
        price: 25000,
        billing: "one-time",
        category: "Performance, Redesign & Migration",
      },
      {
        id: "speed-optimisation",
        label: "Website Speed Optimisation",
        description: "Compress assets, streamline scripts, and improve loading speed and performance.",
        price: 20000,
        billing: "one-time",
        category: "Performance, Redesign & Migration",
      },
      {
        id: "website-security",
        label: "Website Security & SSL",
        description: "SSL configuration, hardening, updates, and practical protection practices.",
        price: 20000,
        billing: "one-time",
        category: "Performance, Redesign & Migration",
      },
      {
        id: "website-maintenance",
        label: "Website Maintenance",
        description: "Regular updates, backups, troubleshooting, and ongoing technical support.",
        price: 20000,
        billing: "monthly",
        category: "Performance, Redesign & Migration",
      },

      // 3. Growth, SEO & Tracking
      {
        id: "seo-setup",
        label: "Search Engine Optimisation (SEO)",
        description: "Clean metadata, semantic headings, indexable structure, and search visibility setup.",
        price: 70000,
        billing: "one-time",
        category: "Growth, SEO & Tracking",
      },
      {
        id: "analytics-tracking",
        label: "Google Analytics & Visitor Tracking",
        description: "Track traffic sources, visitor behavior, and key conversion actions.",
        price: 15000,
        billing: "one-time",
        category: "Growth, SEO & Tracking",
      },

      // 4. Conversions & Integrations
      {
        id: "whatsapp-integration",
        label: "WhatsApp Integration",
        description: "Direct chat buttons, pre-filled inquiry messages, and quick-response handoffs.",
        price: 10000,
        billing: "one-time",
        category: "Conversions & Integrations",
      },
      {
        id: "contact-enquiry-forms",
        label: "Contact & Enquiry Forms",
        description: "Structured lead capture and project inquiry forms tailored to your sales process.",
        price: 12000,
        billing: "one-time",
        category: "Conversions & Integrations",
      },
      {
        id: "online-payment-integration",
        label: "Online Payment Integration",
        description: "Accept card, bank transfer, and checkout payments seamlessly on your site.",
        price: 120000,
        billing: "one-time",
        category: "Conversions & Integrations",
      },
      {
        id: "live-chat-integration",
        label: "Live Chat Integration",
        description: "Interactive chat widget to answer questions and guide visitors in real time.",
        price: 55000,
        billing: "one-time",
        category: "Conversions & Integrations",
      },
      {
        id: "booking-appointment-system",
        label: "Booking & Appointment Systems",
        description: "Let clients pick slots, schedule consultations, or book sessions directly.",
        price: 70000,
        billing: "one-time",
        category: "Conversions & Integrations",
      },
      {
        id: "email-marketing-integration",
        label: "Email Marketing Integration",
        description: "Connect forms and triggers to your email marketing list or automation tool.",
        price: 20000,
        billing: "one-time",
        category: "Conversions & Integrations",
      },
      {
        id: "newsletter-subscriptions",
        label: "Newsletter Subscriptions",
        description: "Dedicated signup flows to capture and grow recurring audience subscribers.",
        price: 12000,
        billing: "one-time",
        category: "Conversions & Integrations",
      },
      {
        id: "social-media-integration",
        label: "Social Media Integration",
        description: "Connect social profiles, share links, and embed relevant social proof.",
        price: 10000,
        billing: "one-time",
        category: "Conversions & Integrations",
      },

      // 5. Content & Account Systems
      {
        id: "blog-cms",
        label: "Blog & Content Management Systems",
        description: "Publish articles, announcements, and case studies easily without touching code.",
        price: 120000,
        billing: "one-time",
        category: "Content & Account Systems",
      },
      {
        id: "admin-dashboard-cms",
        label: "Admin Dashboards & Content Management",
        description: "Manage site content, entries, or operational records from a dedicated admin view.",
        price: 55000,
        billing: "one-time",
        category: "Content & Account Systems",
      },
      {
        id: "customer-login-registration",
        label: "Customer Login & Registration",
        description: "Account sign-up, sign-in, and member access flows for returning users.",
        price: 45000,
        billing: "one-time",
        category: "Content & Account Systems",
      },
    ],
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing & Lead Generation",
    tagline: "Targeted campaigns and conversion funnels built to bring qualified buyers to your offer.",
    description:
      "Stop boosting posts blindly. Build campaigns around clear audience targeting, direct-response messaging, and measurable lead flow.",
    basePrice: 40000,
    addons: [
      {
        id: "funnel-audit-strategy",
        label: "Offer & Funnel Conversion Audit",
        description: "Review your current landing page, messaging, and WhatsApp/form handoff for leaks.",
        price: 25000,
        billing: "one-time",
        category: "Strategy & Setup",
      },
      {
        id: "ad-creative-copy-pack",
        label: "Ad Creative & Hook Copy Pack",
        description: "Scroll-stopping ad angles, headlines, and primary copy tailored to your target buyer.",
        price: 30000,
        billing: "one-time",
        category: "Strategy & Setup",
      },
      {
        id: "monthly-campaign-management",
        label: "Monthly Campaign Management",
        description: "Ongoing audience testing, optimization, and weekly performance reporting (ad spend separate).",
        price: 45000,
        billing: "monthly",
        category: "Ongoing Execution",
      },
    ],
  },
  {
    slug: "content-writing-ghostwriting",
    title: "Content Writing & Ghostwriting",
    tagline: "Sharp editorial articles, sales copy, and executive content written in your voice.",
    description:
      "Turn raw ideas, expertise, or long-form manuscripts into clear, persuasive writing that builds authority and drives action.",
    basePrice: 30000,
    addons: [
      {
        id: "content-volume-light",
        label: "Light Content Volume (2–4 posts/week)",
        description: "Steady weekly publishing cadence (~8–16 posts/month) for consistent visibility without overwhelm.",
        price: 35000,
        billing: "monthly",
        category: "Publishing Cadence & Volume",
      },
      {
        id: "content-volume-medium",
        label: "Medium Content Volume (6–8 posts/week)",
        description: "Higher-frequency weekly publishing (~24–32 posts/month) to build stronger reach and authority.",
        price: 65000,
        billing: "monthly",
        category: "Publishing Cadence & Volume",
      },
      {
        id: "content-volume-high",
        label: "High Content Volume (12 posts/week)",
        description: "Aggressive multi-post weekly output (~48 posts/month) for rapid audience growth and campaigns.",
        price: 110000,
        billing: "monthly",
        category: "Publishing Cadence & Volume",
      },
      {
        id: "website-sales-copy",
        label: "Landing Page & Sales Copy Rewrite",
        description: "Clarify headlines, value propositions, proof blocks, and calls-to-action across key pages.",
        price: 45000,
        billing: "one-time",
        category: "Conversion Copywriting",
      },
      {
        id: "lead-magnet-compression",
        label: "Executive Lead Magnet / Book Compression",
        description: "Distill dense books, notes, or frameworks into a sharp, readable lead-magnet asset.",
        price: 65000,
        billing: "one-time",
        category: "Long-Form & Authority",
      },
    ],
  },
  {
    slug: "social-media-management",
    title: "Social Media Management",
    tagline: "Consistent, intentional publishing that grows audience trust and turns followers into leads.",
    description:
      "Show up reliably with structured content pillars, clear messaging, and conversion paths instead of random posting.",
    basePrice: 35000,
    addons: [
      {
        id: "profile-bio-revamp",
        label: "Profile & Bio Conversion Optimisation",
        description: "Sharpen your bio, pinned highlights, and profile links so visitors immediately get what you do.",
        price: 20000,
        billing: "one-time",
        category: "Setup & Positioning",
      },
      {
        id: "monthly-content-calendar",
        label: "Monthly Content Calendar & Scheduling",
        description: "Planned posts, captions, and consistent scheduling across your primary social channels.",
        price: 40000,
        billing: "monthly",
        category: "Monthly Management",
      },
    ],
  },
  {
    slug: "youtube-management-monetization",
    title: "YouTube Channel Management & Monetization",
    tagline: "End-to-end channel structure, packaging, and growth strategy built for watch time and revenue.",
    description:
      "Structure your channel, titles, thumbnails direction, and retention flow so viewers stick around and subscribe.",
    basePrice: 45000,
    addons: [
      {
        id: "channel-audit-roadmap",
        label: "Channel Audit & Monetization Roadmap",
        description: "Actionable review of niche positioning, video topics, retention bottlenecks, and growth steps.",
        price: 30000,
        billing: "one-time",
        category: "Channel Strategy",
      },
      {
        id: "script-title-packaging",
        label: "Video Scripting, Titles & Packaging Pack",
        description: "High-retention video scripts, hook openings, and clickable title/thumbnail concepts.",
        price: 35000,
        billing: "one-time",
        category: "Production & Growth",
      },
      {
        id: "monthly-channel-management",
        label: "Monthly Channel Optimisation & Publishing",
        description: "Ongoing upload optimization, metadata, descriptions, and growth tracking.",
        price: 50000,
        billing: "monthly",
        category: "Production & Growth",
      },
    ],
  },
  {
    slug: "ai-video-production",
    title: "AI-Assisted Video Production",
    tagline: "Fast, expressive visual storytelling and promo videos powered by modern AI workflows.",
    description:
      "Combine narrative direction with AI video generation and editing to produce clean promos, explainers, and visual assets quickly.",
    basePrice: 40000,
    addons: [
      {
        id: "script-storyboard-deck",
        label: "Script & Visual Storyboard",
        description: "Scene-by-scene script, voiceover direction, and visual prompt plan before rendering.",
        price: 20000,
        billing: "one-time",
        category: "Pre-Production",
      },
      {
        id: "extra-video-cut",
        label: "Additional Short-Form / Social Cut",
        description: "Adapted vertical or cut-down versions tailored for reels, shorts, or ads.",
        price: 25000,
        billing: "one-time",
        category: "Deliverables",
      },
    ],
  },
  {
    slug: "sales-coaching",
    title: "Sales Coaching & Conversion Strategy",
    tagline: "Practical sales scripts, offer framing, and closing systems drawn from 10+ years in the trenches.",
    description:
      "Fix slow follow-ups, weak offers, and stalled WhatsApp/DM conversations with clear frameworks your team can execute daily.",
    basePrice: 50000,
    addons: [
      {
        id: "sales-script-playbook",
        label: "DM / WhatsApp Closing Script & Objection Playbook",
        description: "Step-by-step conversation flows and responses for common price and timing objections.",
        price: 35000,
        billing: "one-time",
        category: "Sales Assets",
      },
      {
        id: "one-on-one-strategy-session",
        label: "1-on-1 Live Sales & Offer Intensive",
        description: "Focused working session dissecting your current offer, pipeline, and closing bottlenecks.",
        price: 40000,
        billing: "one-time",
        category: "Coaching",
      },
      {
        id: "monthly-sales-advisory",
        label: "Monthly Sales & Conversion Advisory",
        description: "Ongoing weekly check-ins, script reviews, and pipeline accountability.",
        price: 60000,
        billing: "monthly",
        category: "Coaching",
      },
    ],
  },
];