import Link from "next/link";
import { Button } from "@/components/ui/button";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import {
  BrainCircuit,
  Search,
  Zap,
  Mail,
  ArrowRight,
  Check,
  Star,
  MessageSquare,
  Sparkles,
  Shield,
  Clock,
  ChevronDown,
} from "lucide-react";

export default async function LandingPage() {
  const { userId } = await auth();
  if (userId) return redirect("/mail");

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#09030E] font-['Space_Grotesk',sans-serif] text-white">
      {/* Font import */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap');
        * { font-family: 'Space Grotesk', sans-serif; }
        .gradient-text {
          background: linear-gradient(135deg, #D934F7, #BCF429, #D934F7);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shine 4s linear infinite;
        }
        @keyframes shine {
          to { background-position: 200% center; }
        }
        .glow-purple { box-shadow: 0 0 40px rgba(217, 52, 247, 0.15); }
        .glow-green { box-shadow: 0 0 40px rgba(188, 244, 41, 0.15); }
        .card-hover { transition: all 0.3s ease; }
        .card-hover:hover { transform: translateY(-4px); box-shadow: 0 20px 40px rgba(217, 52, 247, 0.1); }
        .btn-primary {
          background: linear-gradient(135deg, #D934F7, #7E078F);
          border: none;
          color: white;
          transition: all 0.3s ease;
        }
        .btn-primary:hover {
          background: linear-gradient(135deg, #BCF429, #7E078F);
          transform: scale(1.02);
        }
        .btn-outline {
          border: 1px solid rgba(217, 52, 247, 0.4);
          color: #D934F7;
          background: transparent;
          transition: all 0.3s ease;
        }
        .btn-outline:hover {
          background: rgba(217, 52, 247, 0.1);
          border-color: #D934F7;
        }
        .noise-bg {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E");
        }
        .grid-bg {
          background-image: linear-gradient(rgba(217,52,247,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(217,52,247,0.05) 1px, transparent 1px);
          background-size: 40px 40px;
        }
        .faq-item { border-bottom: 1px solid rgba(255,255,255,0.08); }
      `}</style>

      {/* Nav */}
      <nav className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between border-b border-white/5 px-8 py-4 backdrop-blur-md">
        <div className="flex items-center gap-2">
          <div
            className="flex h-8 w-8 items-center justify-center rounded-lg"
            style={{ background: "linear-gradient(135deg, #D934F7, #7E078F)" }}
          >
            <Mail className="h-4 w-4 text-white" />
          </div>
          <span className="text-lg font-semibold tracking-tight">Mailix</span>
        </div>
        <div className="hidden items-center gap-8 text-sm text-white/60 md:flex">
          <a href="#features" className="transition-colors hover:text-white">
            Features
          </a>
          <a
            href="#how-it-works"
            className="transition-colors hover:text-white"
          >
            How it works
          </a>
          <a href="#pricing" className="transition-colors hover:text-white">
            Pricing
          </a>
          <a href="#faq" className="transition-colors hover:text-white">
            FAQ
          </a>
        </div>
        <div className="flex items-center gap-3">
          <Link href="/sign-in">
            <button className="btn-outline rounded-lg px-4 py-2 text-sm font-medium">
              Sign in
            </button>
          </Link>
          <Link href="/sign-up">
            <button className="btn-primary rounded-lg px-4 py-2 text-sm font-medium">
              Get started free
            </button>
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="grid-bg relative flex min-h-screen flex-col items-center justify-center px-4 pt-20">
        <div className="noise-bg pointer-events-none absolute inset-0" />
        {/* Glow orbs */}
        <div
          className="pointer-events-none absolute left-1/4 top-1/4 h-96 w-96 rounded-full opacity-20 blur-3xl"
          style={{ background: "#D934F7" }}
        />
        <div
          className="pointer-events-none absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full opacity-10 blur-3xl"
          style={{ background: "#BCF429" }}
        />

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/60">
            <Sparkles className="h-3.5 w-3.5 text-[#BCF429]" />
            AI-powered email for everyone
          </div>
          <h1 className="mb-6 text-6xl font-bold leading-[1.05] tracking-tight md:text-8xl">
            Email that <span className="gradient-text">thinks</span>
            <br />
            with you.
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-xl leading-relaxed text-white/50">
            Mailix is an AI-powered email client that reads, understands, and
            helps you act on your inbox — so you can focus on what actually
            matters.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/sign-up">
              <button className="btn-primary flex items-center gap-2 rounded-xl px-8 py-4 text-base font-semibold">
                Start for free <ArrowRight className="h-4 w-4" />
              </button>
            </Link>
            <a href="#how-it-works">
              <button className="btn-outline rounded-xl px-8 py-4 text-base font-medium">
                See how it works
              </button>
            </a>
          </div>
          <p className="mt-6 text-sm text-white/30">
            No credit card required · Free plan available
          </p>
        </div>

        {/* Mock UI preview */}
        <div
          className="glow-purple relative z-10 mx-auto mt-20 w-full max-w-5xl overflow-hidden rounded-2xl border border-white/10"
          style={{ background: "rgba(255,255,255,0.03)" }}
        >
          <div className="flex items-center gap-2 border-b border-white/5 px-4 py-3">
            <div className="h-3 w-3 rounded-full bg-red-500/60" />
            <div className="h-3 w-3 rounded-full bg-yellow-500/60" />
            <div className="h-3 w-3 rounded-full bg-green-500/60" />
            <div className="mx-4 flex h-6 flex-1 items-center rounded-md bg-white/5 px-3">
              <span className="text-xs text-white/20">app.mailix.io/mail</span>
            </div>
          </div>
          <div className="grid h-96 grid-cols-12">
            {/* Sidebar */}
            <div className="col-span-2 flex flex-col gap-1 border-r border-white/5 p-3">
              <div
                className="mb-4 h-8 w-8 rounded-lg"
                style={{
                  background: "linear-gradient(135deg, #D934F7, #7E078F)",
                }}
              />
              {["Inbox", "Sent", "Drafts"].map((item, i) => (
                <div
                  key={item}
                  className={`rounded-lg px-3 py-2 text-xs ${i === 0 ? "bg-white/10 text-white" : "text-white/30"}`}
                >
                  {item}
                </div>
              ))}
            </div>
            {/* Thread list */}
            <div className="col-span-4 flex flex-col gap-2 border-r border-white/5 p-3">
              <div className="mb-2 flex h-7 items-center rounded-md bg-white/5 px-3">
                <span className="text-xs text-white/20">Search emails...</span>
              </div>
              {[
                {
                  name: "Kai",
                  subject: "We'd love to hear from you",
                  time: "2h ago",
                  unread: true,
                },
                {
                  name: "One Minute Investor",
                  subject: "Why Experts Can't Predict",
                  time: "4h ago",
                  unread: true,
                },
                {
                  name: "Stephen from Exponent",
                  subject: "Last chance: 20% off",
                  time: "6h ago",
                  unread: false,
                },
                {
                  name: "Eightfold AI",
                  subject: "Enterprise hiring at speed",
                  time: "14h ago",
                  unread: false,
                },
              ].map((email) => (
                <div
                  key={email.name}
                  className={`cursor-pointer rounded-lg p-3 ${email.unread ? "bg-white/5" : ""}`}
                >
                  <div className="mb-1 flex items-start justify-between">
                    <span
                      className={`text-xs font-medium ${email.unread ? "text-white" : "text-white/40"}`}
                    >
                      {email.name}
                    </span>
                    <span className="text-[10px] text-white/20">
                      {email.time}
                    </span>
                  </div>
                  <p className="truncate text-[10px] text-white/40">
                    {email.subject}
                  </p>
                </div>
              ))}
            </div>
            {/* Email content */}
            <div className="col-span-4 border-r border-white/5 p-4">
              <div className="mb-4 flex items-center gap-3">
                <div
                  className="flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold"
                  style={{
                    background: "rgba(217,52,247,0.2)",
                    color: "#D934F7",
                  }}
                >
                  K
                </div>
                <div>
                  <p className="text-xs font-medium text-white">Kai</p>
                  <p className="text-[10px] text-white/30">alerts@kai.com</p>
                </div>
              </div>
              <div className="space-y-2">
                {[90, 75, 85, 60, 70].map((w, i) => (
                  <div
                    key={i}
                    className="h-2 rounded-full bg-white/10"
                    style={{ width: `${w}%` }}
                  />
                ))}
              </div>
            </div>
            {/* AI panel */}
            <div className="col-span-2 flex flex-col gap-2 p-3">
              <div className="mb-2 flex items-center gap-1">
                <Sparkles className="h-3 w-3 text-[#BCF429]" />
                <span className="text-[10px] text-white/40">Ask AI</span>
              </div>
              <div className="rounded-lg bg-white/5 p-2 text-[9px] text-white/40">
                What is the mail from Kai about?
              </div>
              <div
                className="rounded-lg p-2 text-[9px] text-white/60"
                style={{
                  background: "rgba(217,52,247,0.1)",
                  border: "1px solid rgba(217,52,247,0.2)",
                }}
              >
                Kai is asking for feedback to improve their product...
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-white/5 py-16">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 px-4 text-center md:grid-cols-4">
          {[
            { value: "90 days", label: "Email history synced" },
            { value: "15/day", label: "Free AI credits" },
            { value: "< 3s", label: "Avg. sync time" },
            { value: "100%", label: "Privacy focused" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="gradient-text mb-1 text-3xl font-bold">
                {stat.value}
              </p>
              <p className="text-sm text-white/40">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="mx-auto max-w-6xl px-4 py-24">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-[#BCF429]">
            Features
          </p>
          <h2 className="text-4xl font-bold md:text-5xl">
            Experience the power of
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              icon: <BrainCircuit className="h-6 w-6" />,
              title: "AI Email RAG",
              desc: "Ask anything about your emails. Our AI understands context, threads, and history to answer like a human assistant.",
              color: "#D934F7",
            },
            {
              icon: <Search className="h-6 w-6" />,
              title: "Semantic search",
              desc: "Find emails by meaning, not just keywords. Search 'last offer from John' and actually find it.",
              color: "#BCF429",
            },
            {
              icon: <Zap className="h-6 w-6" />,
              title: "AI autocomplete",
              desc: "Press Cmd+J while composing and watch Mailix finish your sentence with contextually perfect suggestions.",
              color: "#D934F7",
            },
            {
              icon: <MessageSquare className="h-6 w-6" />,
              title: "Smart compose",
              desc: "Generate entire email drafts from a single prompt. Mailix uses your previous emails to match your writing style.",
              color: "#BCF429",
            },
            {
              icon: <Shield className="h-6 w-6" />,
              title: "Multi-account support",
              desc: "Connect multiple Gmail or Outlook accounts. Switch between them instantly with a single click.",
              color: "#D934F7",
            },
            {
              icon: <Clock className="h-6 w-6" />,
              title: "Real-time sync",
              desc: "New emails appear instantly via webhooks. No refresh needed — your inbox is always up to date.",
              color: "#BCF429",
            },
          ].map((f) => (
            <div
              key={f.title}
              className="card-hover border-white/8 rounded-2xl border p-6"
              style={{ background: "rgba(255,255,255,0.02)" }}
            >
              <div
                className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl"
                style={{ background: `${f.color}20`, color: f.color }}
              >
                {f.icon}
              </div>
              <h3 className="mb-2 text-lg font-semibold">{f.title}</h3>
              <p className="text-sm leading-relaxed text-white/40">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section
        id="how-it-works"
        className="border-y border-white/5 px-4 py-24"
        style={{ background: "rgba(217,52,247,0.03)" }}
      >
        <div className="mx-auto max-w-5xl">
          <div className="mb-16 text-center">
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-[#BCF429]">
              How it works
            </p>
            <h2 className="text-4xl font-bold md:text-5xl">
              Get started in 3 steps
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Connect your email",
                desc: "Sign in with Google. Mailix securely connects to your Gmail account via OAuth — no passwords stored.",
                icon: <Mail className="h-8 w-8" />,
              },
              {
                step: "02",
                title: "AI syncs & indexes",
                desc: "Mailix pulls your last 90 days of emails, builds a semantic index, and creates AI embeddings for instant search.",
                icon: <BrainCircuit className="h-8 w-8" />,
              },
              {
                step: "03",
                title: "Ask, compose, act",
                desc: "Chat with your inbox, compose with AI, search semantically, and manage everything from one clean interface.",
                icon: <Sparkles className="h-8 w-8" />,
              },
            ].map((step, i) => (
              <div key={step.step} className="relative">
                {i < 2 && (
                  <div
                    className="absolute left-full top-10 z-0 hidden h-px w-full md:block"
                    style={{
                      background:
                        "linear-gradient(90deg, #D934F7, transparent)",
                    }}
                  />
                )}
                <div className="relative z-10 text-center">
                  <div
                    className="glow-purple mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl"
                    style={{
                      background: "rgba(217,52,247,0.1)",
                      border: "1px solid rgba(217,52,247,0.2)",
                      color: "#D934F7",
                    }}
                  >
                    {step.icon}
                  </div>
                  <p className="mb-2 font-mono text-sm text-[#D934F7]">
                    {step.step}
                  </p>
                  <h3 className="mb-3 text-xl font-semibold">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-white/40">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="px-4 py-20 text-center">
        <p className="mb-8 text-sm uppercase tracking-widest text-white/30">
          Works with your stack
        </p>
        <div className="mx-auto flex max-w-2xl flex-wrap items-center justify-center gap-6">
          {[
            "Gmail",
            "Outlook",
            "Google OAuth",
            "OpenRouter",
            "Stripe",
            "Clerk",
          ].map((item) => (
            <div
              key={item}
              className="bg-white/3 rounded-full border border-white/10 px-5 py-2.5 text-sm text-white/40"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="border-y border-white/5 px-4 py-24">
        <div className="mx-auto max-w-4xl">
          <div className="mb-16 text-center">
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-[#BCF429]">
              Pricing
            </p>
            <h2 className="text-4xl font-bold md:text-5xl">
              Simple pricing for every team
            </h2>
            <p className="mt-4 text-white/40">
              Start free. Upgrade when you need more AI power.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                name: "Starter",
                price: "Free",
                period: "forever",
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
                price: "$49",
                period: "/month",
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
                price: "$99",
                period: "/month",
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
            ].map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl p-6 ${plan.highlight ? "border-2" : "border-white/8 border"}`}
                style={{
                  background: plan.highlight
                    ? "rgba(217,52,247,0.05)"
                    : "rgba(255,255,255,0.02)",
                  borderColor: plan.highlight ? "#D934F7" : undefined,
                  ...(plan.highlight
                    ? { boxShadow: "0 0 40px rgba(217,52,247,0.2)" }
                    : {}),
                }}
              >
                {plan.highlight && (
                  <div
                    className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-4 py-1 text-xs font-semibold"
                    style={{
                      background: "linear-gradient(135deg, #D934F7, #7E078F)",
                    }}
                  >
                    Most popular
                  </div>
                )}
                <p className="mb-2 text-sm text-white/50">{plan.name}</p>
                <div className="mb-1 flex items-baseline gap-1">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-sm text-white/30">{plan.period}</span>
                </div>
                <p className="mb-6 text-sm text-white/30">{plan.desc}</p>
                <ul className="mb-8 space-y-3">
                  {plan.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-2 text-sm text-white/60"
                    >
                      <Check className="h-4 w-4 flex-shrink-0 text-[#BCF429]" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href="/sign-up">
                  <button
                    className={`w-full rounded-xl py-3 text-sm font-medium ${plan.highlight ? "btn-primary" : "btn-outline"}`}
                  >
                    {plan.cta}
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="px-4 py-24">
        <div className="mx-auto max-w-4xl">
          <div
            className="border-white/8 rounded-3xl border p-10 text-center"
            style={{ background: "rgba(217,52,247,0.04)" }}
          >
            <div className="mb-6 flex items-center justify-center gap-1">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-[#BCF429] text-[#BCF429]"
                  />
                ))}
            </div>
            <blockquote className="mb-8 text-2xl font-medium leading-relaxed text-white/80 md:text-3xl">
              "Mailix gives me instant clarity on my inbox. The AI understands
              context like no other tool I've used — I'm more accurate and make
              decisions faster than ever."
            </blockquote>
            <div className="flex items-center justify-center gap-3">
              <div
                className="flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold"
                style={{ background: "rgba(217,52,247,0.2)", color: "#D934F7" }}
              >
                AR
              </div>
              <div className="text-left">
                <p className="text-sm font-medium">Antan Roy</p>
                <p className="text-xs text-white/30">Founder, Mailix</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="border-t border-white/5 px-4 py-24">
        <div className="mx-auto max-w-3xl">
          <div className="mb-16 text-center">
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-[#BCF429]">
              FAQ
            </p>
            <h2 className="text-4xl font-bold">Frequently asked questions</h2>
          </div>
          <div className="space-y-0">
            {[
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
            ].map((item, i) => (
              <details key={i} className="faq-item group cursor-pointer py-5">
                <summary className="flex list-none items-center justify-between text-base font-medium">
                  {item.q}
                  <ChevronDown className="h-4 w-4 text-white/30 transition-transform group-open:rotate-180" />
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-white/40">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <div
            className="relative overflow-hidden rounded-3xl p-12"
            style={{
              background: "rgba(217,52,247,0.08)",
              border: "1px solid rgba(217,52,247,0.2)",
            }}
          >
            <div
              className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full opacity-20 blur-3xl"
              style={{ background: "#D934F7" }}
            />
            <div className="relative z-10">
              <h2 className="mb-4 text-4xl font-bold md:text-5xl">
                Bring AI clarity to
                <br />
                your inbox today.
              </h2>
              <p className="mb-8 text-lg text-white/40">
                Start free. No credit card required.
              </p>
              <Link href="/sign-up">
                <button className="btn-primary inline-flex items-center gap-2 rounded-xl px-10 py-4 text-base font-semibold">
                  Get started free <ArrowRight className="h-4 w-4" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 px-4 py-12">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2">
            <div
              className="flex h-7 w-7 items-center justify-center rounded-lg"
              style={{
                background: "linear-gradient(135deg, #D934F7, #7E078F)",
              }}
            >
              <Mail className="h-3.5 w-3.5 text-white" />
            </div>
            <span className="font-semibold">Mailix</span>
          </div>
          <div className="flex items-center gap-6 text-sm text-white/30">
            <Link
              href="/privacy"
              className="transition-colors hover:text-white"
            >
              Privacy
            </Link>
            <Link
              href="/terms-of-service"
              className="transition-colors hover:text-white"
            >
              Terms
            </Link>
            <Link
              href="/sign-in"
              className="transition-colors hover:text-white"
            >
              Sign in
            </Link>
          </div>
          <p className="text-sm text-white/20">
            © 2026 Mailix. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
