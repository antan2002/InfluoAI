// TODO: Add landing page constants (navigation links, feature data, pricing tiers, testimonials, FAQ items, etc.)

export const SITE_CONFIG = {
  name: "Influo AI",
  description: "AI-powered email platform",
  url: "https://influo.ai",
} as const;

export const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
] as const;

export const FEATURES = [] as Array<{
  title: string;
  description: string;
  icon: string;
}>;

export const PRICING_TIERS = [] as Array<{
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
}>;

export const TESTIMONIALS = [] as Array<{
  name: string;
  role: string;
  company: string;
  content: string;
  avatar?: string;
}>;

export const FAQ_ITEMS = [] as Array<{
  question: string;
  answer: string;
}>;

export const FOOTER_LINKS = {
  product: [] as Array<{ label: string; href: string }>,
  company: [] as Array<{ label: string; href: string }>,
  legal: [] as Array<{ label: string; href: string }>,
};
