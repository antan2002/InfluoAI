export const SITE_CONFIG = {
  name: "Mailix",
  description: "AI-powered email client that reads, understands, and helps you act on your inbox",
  url: "https://mailix.io",
} as const;

export const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
] as const;

export const STATS = [
  { value: "90 days", label: "Email history synced" },
  { value: "15/day", label: "Free AI credits" },
  { value: "< 3s", label: "Avg. sync time" },
  { value: "100%", label: "Privacy focused" },
] as const;

export const INTEGRATIONS = [
  "Gmail",
  "Outlook",
  "Google OAuth",
  "OpenRouter",
  "Stripe",
  "Clerk",
] as const;

export const PRICING_TIERS = [
  {
    name: "Starter",
    priceMonthly: "Free",
    priceAnnual: "Free",
    periodMonthly: "forever",
    periodAnnual: "forever",
    desc: "Perfect for trying Mailix",
    features: [
      "1 email account",
      "15 AI credits/day",
      "90-day email sync",
      "Full-text search",
      "Basic compose",
    ],
    cta: "Get started",
    highlight: false,
  },
  {
    name: "Growth",
    priceMonthly: "₹3,999",
    priceAnnual: "₹33,990",
    periodMonthly: "/month",
    periodAnnual: "/year",
    desc: "For power users and professionals",
    features: [
      "3 email accounts",
      "Unlimited AI credits",
      "Full email history",
      "Semantic search",
      "AI compose & autocomplete",
      "Priority support",
    ],
    cta: "Start free trial",
    highlight: true,
  },
  {
    name: "Pro",
    priceMonthly: "₹7,999",
    priceAnnual: "₹67,990",
    periodMonthly: "/month",
    periodAnnual: "/year",
    desc: "For teams and businesses",
    features: [
      "Unlimited accounts",
      "Unlimited AI credits",
      "Team collaboration",
      "Custom AI models",
      "API access",
      "Dedicated support",
    ],
    cta: "Contact sales",
    highlight: false,
  },
] as const;

export const TESTIMONIAL = {
  name: "Antan Roy",
  role: "Founder",
  company: "Mailix",
  content:
    "\"Mailix gives me instant clarity on my inbox. The AI understands context like no other tool I've used — I'm more accurate and make decisions faster than ever.\"",
  initials: "AR",
} as const;

export const FAQ_ITEMS = [
  {
    q: "Is my email data secure?",
    a: "Yes. Mailix uses OAuth — we never store your email password. All data is encrypted in transit and at rest. We use Aurinko as our secure email connector.",
  },
  {
    q: "Which email providers are supported?",
    a: "Currently Gmail and Google Workspace. Outlook/Office365 support is coming soon.",
  },
  {
    q: "How many AI credits do I get for free?",
    a: "Free users get 15 AI chat credits per day. This resets every midnight. Upgrade to Pro for unlimited credits.",
  },
  {
    q: "Can I use my own AI API key?",
    a: "Pro users can connect their own OpenAI or OpenRouter API key for unlimited usage with their preferred models.",
  },
  {
    q: "Do you offer refunds?",
    a: "Yes, we offer a 7-day money-back guarantee on all paid plans, no questions asked.",
  },
] as const;

export const HOW_IT_WORKS_STEPS = [
  {
    step: "01",
    title: "Connect your email",
    desc: "Sign in with Google. Mailix securely connects to your Gmail account via OAuth — no passwords stored.",
  },
  {
    step: "02",
    title: "AI syncs & indexes",
    desc: "Mailix pulls your last 90 days of emails, builds a semantic index, and creates AI embeddings for instant search.",
  },
  {
    step: "03",
    title: "Ask, compose, act",
    desc: "Chat with your inbox, compose with AI, search semantically, and manage everything from one clean interface.",
  },
] as const;

export const MOCK_EMAILS = [
  { name: "Kai", subject: "We'd love to hear from you", time: "2h ago", unread: true },
  { name: "One Minute Investor", subject: "Why Experts Can't Predict", time: "4h ago", unread: true },
  { name: "Stephen from Exponent", subject: "Last chance: 20% off", time: "6h ago", unread: false },
  { name: "Eightfold AI", subject: "Enterprise hiring at speed", time: "14h ago", unread: false },
] as const;

export const MOCK_BAR_WIDTHS = [90, 75, 85, 60, 70] as const;
