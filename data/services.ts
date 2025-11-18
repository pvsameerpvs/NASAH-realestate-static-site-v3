// data/services.ts
// ⛔ No Lucide imports in a data file

export type IconKey =
  | "Building2"
  | "ClipboardCheck"
  | "LineChart"
  | "Landmark"
  | "Scale"
  | "HandCoins";

export type Service = {
  slug: string;
  title: string;
  excerpt: string;
  icon: IconKey;                      // ✅ string, not a component
  hero?: string;
  highlights: string[];
  content: { heading: string; body: string }[];
  cta?: { label: string; href: string };
};

export const SERVICES: Service[] = [
  {
    slug: "residential-sales",
    title: "Residential Sales",
    excerpt: "Buy & sell homes and apartments with confidence.",
    icon: "Building2",
    hero: "/hero22.jpg",
    highlights: ["Market comps & pricing", "Staging & media", "Offer negotiation", "Paperwork & closing"],
    content: [
      { heading: "Overview", body: "We help you evaluate, price, and sell residential properties faster using data-driven comps, high-impact marketing, and precise negotiation." },
      { heading: "How it Works", body: "Discovery → Valuation → Media & Listing → Lead Screening → Viewings → Offers → Closing." },
    ],
    cta: { label: "Talk to Sales", href: "/contact" },
  },
  {
    slug: "property-management",
    title: "Property Management",
    excerpt: "End-to-end management for rentals and portfolios.",
    icon: "ClipboardCheck",      
    hero: "/hero4.jpg",
    highlights: ["Tenant screening", "Rent collection", "Maintenance", "Reporting"],
    content: [
      { heading: "Overview", body: "We manage day-to-day operations, financials, and tenant relations so your assets stay healthy and profitable." },
      { heading: "What You Get", body: "Preventive maintenance plan, monthly statements, vacancy reduction strategies, and quick support." },
    ],
    cta: { label: "Get a Management Plan", href: "/contact" },
  },
  {
    slug: "investment-advisory",
    title: "Investment Advisory",
    excerpt: "Smart acquisitions with risk-aware returns.",
    icon: "LineChart",                // ✅ string
    hero: "/property2.jpeg",
    highlights: ["Deal sourcing", "Underwriting", "Portfolio strategy", "Exit planning"],
    content: [
      { heading: "Overview", body: "We evaluate cap rates, cash-on-cash returns, DSCR, and growth zones to match your profile and time horizon." },
      { heading: "Deliverables", body: "Investment memo, sensitivity models, risk notes, and recommended next steps." },
    ],
    cta: { label: "Request a Deal Memo", href: "/contact" },
  },
  {
    slug: "project-marketing",
    title: "Project Marketing",
    excerpt: "Launch campaigns that fill your units faster.",
    icon: "Landmark",                 // ✅ string
    hero: "/property3.jpeg",
    highlights: ["Brand & positioning", "Lead funnels", "Events & viewings", "Analytics"],
    content: [
      { heading: "Overview", body: "Integrated media, landing pages, and funnels to drive qualified leads for new-builds and conversions." },
      { heading: "Tooling", body: "Performance dashboards, A/B creatives, and CRM integrations." },
    ],
    cta: { label: "Plan a Launch", href: "/contact" },
  },
  {
    slug: "valuation-advisory",
    title: "Valuation & Advisory",
    excerpt: "Independent valuations for lending and strategy.",
    icon: "Scale",                    // ✅ string
    hero: "/property4.jpeg",
    highlights: ["RICS-style reports", "Comparable analysis", "Income approach", "Development appraisals"],
    content: [
      { heading: "Overview", body: "Objective valuations using market, income, and cost approaches with transparent assumptions." },
      { heading: "Use Cases", body: "Refinance, disposal, M&A, and financial reporting." },
    ],
    cta: { label: "Request a Valuation", href: "/contact" },
  },
  {
    slug: "legal-and-paperwork",
    title: "Legal & Paperwork",
    excerpt: "Compliance, contracts, and smooth closings.",
    icon: "HandCoins",                // ✅ string
    hero: "/property5.jpeg",
    highlights: ["KYC/AML checks", "SPA/tenancy drafting", "Registration", "Closing coordination"],
    content: [
      { heading: "Overview", body: "We coordinate with trusted legal partners to ensure every document and dependency is correct and on-time." },
      { heading: "Scope", body: "From offer letters to registration, escrow, and handover." },
    ],
    cta: { label: "Speak to Legal Desk", href: "/contact" },
  },
];

export const serviceBySlug = new Map(SERVICES.map((s) => [s.slug, s]));
