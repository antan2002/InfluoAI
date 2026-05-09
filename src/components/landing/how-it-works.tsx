"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import {
  Mail,
  BrainCircuit,
  RefreshCw,
  Inbox,
  Search,
  Edit3,
  ArrowRight,
  Globe,
  Zap,
} from "lucide-react";
import { motion, useInView } from "framer-motion";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

type VisualType = "classification" | "semantic-search" | "compose" | "sync";

interface WorkflowCardProps {
  step: string;
  title: React.ReactNode;
  description: string;
  details: string;
  visualType: VisualType;
  index: number;
  setActiveStep: (i: number) => void;
  isActive: boolean;
}

/* ------------------------------------------------------------------ */
/*  Reduced-motion hook                                                */
/* ------------------------------------------------------------------ */

function usePrefersReducedMotion(): boolean {
  const [prefersReduced, setPrefersReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReduced(mq.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReduced(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return prefersReduced;
}

/* ------------------------------------------------------------------ */
/*  Framer Motion variants                                             */
/* ------------------------------------------------------------------ */

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" },
  }),
};

/* ------------------------------------------------------------------ */
/*  Visual: Classification                                             */
/* ------------------------------------------------------------------ */

function VisualClassification() {
  const reduced = usePrefersReducedMotion();
  const emails = [
    { label: "Meeting notes", color: "bg-amber-200 border-amber-300", text: "text-amber-800" },
    { label: "Invoice", color: "bg-blue-200 border-blue-300", text: "text-blue-800" },
    { label: "Newsletter", color: "bg-purple-200 border-purple-300", text: "text-purple-800" },
    { label: "Urgent reply", color: "bg-red-200 border-red-300", text: "text-red-800" },
  ];

  return (
    <div className="relative flex h-48 items-center justify-center gap-4 overflow-hidden rounded-2xl bg-white p-4 shadow-inner">
      {/* Incoming emails */}
      <div className="flex flex-col gap-2">
        {emails.map((e, i) => (
          <motion.div
            key={e.label}
            initial={reduced ? {} : { opacity: 0, x: -50 }}
            whileInView={reduced ? {} : { opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, duration: 0.4 }}
            className={`flex h-9 w-28 items-center rounded-xl border ${e.color} ${e.text} px-3 text-[10px] font-bold shadow-md`}
          >
            {e.label}
          </motion.div>
        ))}
      </div>

      {/* Big blue arrow */}
      <motion.div
        initial={reduced ? {} : { scale: 0 }}
        whileInView={reduced ? {} : { scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
        className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500 shadow-lg shadow-blue-500/30"
      >
        <ArrowRight className="h-5 w-5 text-white" />
      </motion.div>

      {/* AI classification bubbles — more vibrant */}
      <div className="flex flex-col gap-2">
        {["Work", "Finance", "Social", "Urgent"].map((cat, i) => {
          const colors = [
            "bg-emerald-400 text-white border-emerald-500",
            "bg-blue-400 text-white border-blue-500",
            "bg-violet-400 text-white border-violet-500",
            "bg-rose-400 text-white border-rose-500",
          ];
          return (
            <motion.div
              key={cat}
              initial={reduced ? {} : { opacity: 0, x: 50 }}
              whileInView={reduced ? {} : { opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35 + i * 0.1, duration: 0.4 }}
              className={`flex h-9 items-center rounded-full border-2 ${colors[i]} px-4 text-[10px] font-bold shadow-md`}
            >
              {cat}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Visual: Semantic Search                                            */
/* ------------------------------------------------------------------ */

function VisualSearch() {
  const reduced = usePrefersReducedMotion();
  const results = [
    { text: "Q4 budget proposal", match: true },
    { text: "Meeting notes — Project Alpha", match: true },
    { text: "Team standup summary", match: false },
  ];

  return (
    <div className="relative flex h-48 flex-col gap-3 overflow-hidden rounded-2xl bg-white p-4 shadow-inner">
      {/* Search bar */}
      <motion.div
        initial={reduced ? {} : { opacity: 0, y: -20 }}
        whileInView={reduced ? {} : { opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex items-center gap-2 rounded-xl border-2 border-blue-200 bg-blue-50 px-4 py-3 shadow-sm"
      >
        <Search className="h-4 w-4 text-blue-500" />
        <span className="text-sm font-medium text-blue-700">budget report last quarter</span>
      </motion.div>

      {/* Results */}
      <div className="relative space-y-2">
        {results.map((r, i) => (
          <motion.div
            key={r.text}
            initial={reduced ? {} : { opacity: 0, x: r.match ? 30 : -30 }}
            whileInView={reduced ? {} : { opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + i * 0.15, duration: 0.4 }}
            className={`flex items-center gap-2 rounded-lg px-3 py-2.5 text-xs font-medium ${
              r.match
                ? "border border-emerald-300 bg-emerald-50 text-emerald-800 shadow-md"
                : "text-black/25 line-through"
            }`}
          >
            {r.match ? (
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-400">
                <Zap className="h-3 w-3 text-white" />
              </span>
            ) : (
              <span className="h-3 w-3 rounded-full bg-black/10" />
            )}
            {r.text}
          </motion.div>
        ))}

        {/* Glow */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-transparent via-blue-200/20 to-transparent blur-xl pointer-events-none"
        />
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Visual: Compose                                                    */
/* ------------------------------------------------------------------ */

function VisualCompose() {
  const reduced = usePrefersReducedMotion();
  const suggestions = [
    "Sounds great, I'm in!",
    "Let me check and get back to you.",
    "Thanks for the update!",
  ];

  return (
    <div className="relative flex h-48 flex-col gap-3 overflow-hidden rounded-2xl bg-white p-4 shadow-inner">
      {/* Email thread snippet */}
      <motion.div
        initial={reduced ? {} : { opacity: 0 }}
        whileInView={reduced ? {} : { opacity: 1 }}
        viewport={{ once: true }}
        className="rounded-xl border border-gray-200 bg-gray-50 p-3 text-xs font-medium text-gray-600 shadow-sm"
      >
        <span className="font-bold text-gray-800">Kai:</span> Would you be available to review the proposal?
      </motion.div>

      {/* AI typing indicator */}
      <motion.div
        initial={reduced ? {} : { opacity: 0, x: -20 }}
        whileInView={reduced ? {} : { opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.25 }}
        className="flex items-center gap-2 text-xs font-semibold text-violet-600"
      >
        <BrainCircuit className="h-4 w-4 text-violet-500" />
        AI composing reply...
      </motion.div>

      {/* Suggested replies — more vibrant colors */}
      <div className="flex flex-wrap gap-2">
        {suggestions.map((s, i) => {
          const chips = [
            "border-emerald-300 bg-emerald-100 text-emerald-700",
            "border-blue-300 bg-blue-100 text-blue-700",
            "border-amber-300 bg-amber-100 text-amber-700",
          ];
          return (
            <motion.div
              key={s}
              initial={reduced ? {} : { opacity: 0, y: 12 }}
              whileInView={reduced ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.45 + i * 0.12, duration: 0.3 }}
              className={`cursor-pointer rounded-full border-2 px-4 py-1.5 text-[10px] font-bold ${chips[i]} transition-all hover:shadow-md hover:-translate-y-0.5 shadow-sm`}
            >
              {s}
            </motion.div>
          );
        })}
      </div>

      {/* Glow */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1 }}
        className="absolute bottom-2 right-2 h-16 w-40 rounded-full bg-violet-200/20 blur-3xl pointer-events-none"
      />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Visual: Sync                                                       */
/* ------------------------------------------------------------------ */

function VisualSync() {
  const reduced = usePrefersReducedMotion();
  const providers = [
    { icon: Mail, label: "Gmail", color: "bg-red-100 border-red-300 text-red-600", x: -45 },
    { icon: Globe, label: "Outlook", color: "bg-blue-100 border-blue-300 text-blue-600", x: 45 },
  ];

  return (
    <div className="relative flex h-48 items-center justify-center gap-6 overflow-hidden rounded-2xl bg-white p-4 shadow-inner">
      {/* Provider nodes — more colorful */}
      {providers.map((p, i) => (
        <motion.div
          key={p.label}
          initial={reduced ? {} : { opacity: 0, x: p.x }}
          whileInView={reduced ? {} : { opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.15, duration: 0.5, type: "spring" }}
          className={`flex h-16 w-16 flex-col items-center justify-center gap-1 rounded-2xl border-2 shadow-lg ${p.color}`}
        >
          <p.icon className="h-6 w-6" />
          <span className="text-[9px] font-bold">{p.label}</span>
        </motion.div>
      ))}

      {/* Big blue curved arrow SVG */}
      <svg className="absolute inset-0 h-full w-full pointer-events-none" viewBox="0 0 200 200">
        <motion.path
          d="M50,100 Q100,30 150,100"
          fill="none"
          stroke="#3B82F6"
          strokeWidth="3"
          strokeDasharray="6 4"
          initial={reduced ? {} : { pathLength: 0 }}
          whileInView={reduced ? {} : { pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        />
        <motion.circle
          cx={150}
          cy={100}
          r={4}
          fill="#3B82F6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.2 }}
        />
      </svg>

      {/* Unified inbox — gold highlight */}
      <motion.div
        initial={reduced ? {} : { scale: 0 }}
        whileInView={reduced ? {} : { scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.7, type: "spring", stiffness: 150 }}
        className="z-10 flex h-20 w-20 flex-col items-center justify-center gap-1 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 shadow-xl shadow-orange-500/30"
      >
        <Inbox className="h-7 w-7 text-white" />
        <span className="text-[9px] font-bold text-white">Inbox</span>
      </motion.div>

      {/* Pulse ring */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0.6 }}
        whileInView={{ scale: 1.5, opacity: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
        className="absolute h-24 w-24 rounded-full border-2 border-blue-400/40 pointer-events-none"
      />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  WorkflowCard subcomponent                                          */
/* ------------------------------------------------------------------ */

function WorkflowCard({
  step,
  title,
  description,
  details,
  visualType,
  index,
  setActiveStep,
  isActive,
}: WorkflowCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const inView = useInView(cardRef, { margin: "-100px 0px -100px 0px" });
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (inView) setActiveStep(index);
  }, [inView, index, setActiveStep]);

  const visualMap: Record<VisualType, React.ReactNode> = {
    classification: <VisualClassification />,
    "semantic-search": <VisualSearch />,
    compose: <VisualCompose />,
    sync: <VisualSync />,
  };

  return (
    <motion.div
      ref={cardRef}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      custom={index}
      tabIndex={0}
      role="article"
      aria-label={`${step}: workflow card`}
      className={`group rounded-[32px] border-2 p-8 transition-all duration-500 ${
        isActive
          ? "border-amber-300 bg-white shadow-xl shadow-amber-200/30"
          : "border-gray-200 bg-white shadow-md"
      } hover:-translate-y-1.5 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/50`}
    >
      {/* Step badge */}
      <div className="mb-4 flex items-center gap-3">
        <span className="inline-flex items-center rounded-full bg-gradient-to-r from-amber-400 to-orange-500 px-3 py-1 text-xs font-bold text-white shadow-md">
          {step}
        </span>
        {isActive && (
          <motion.span
            initial={reduced ? { opacity: 1 } : { scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="h-2 w-2 rounded-full bg-blue-500 shadow-sm"
          />
        )}
      </div>

      {/* Visual diagram */}
      <div className="mb-5">{visualMap[visualType]}</div>

      {/* Text */}
      <h3 className="mb-2 text-xl font-bold text-gray-900">{title}</h3>
      <p className="text-sm leading-relaxed text-gray-500">{description}</p>

      {/* Details — shown when card is active */}
      {isActive && (
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mt-3 rounded-xl border border-amber-200 bg-amber-50 px-4 py-2.5 text-xs font-medium text-amber-800 shadow-sm"
        >
          {details}
        </motion.p>
      )}
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main HowItWorks component                                          */
/* ------------------------------------------------------------------ */

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);
  const reduced = usePrefersReducedMotion();
  const setActiveStepCallback = useCallback((i: number) => setActiveStep(i), []);

  const steps = [
    {
      step: "STEP 01",
      title: (
        <>
          AI <span className="bg-amber-200/70 text-amber-900 px-1 rounded font-extrabold">understands</span> your inbox
        </>
      ),
      description:
        "Mailix automatically reads, categorizes, and prioritizes your emails using AI so you focus only on what matters.",
      details:
        "AI detects urgency, extracts action items, and surfaces emails that need your reply — no manual sorting needed.",
      visualType: "classification" as VisualType,
    },
    {
      step: "STEP 02",
      title: (
        <>
          Semantic search finds <span className="bg-amber-200/70 text-amber-900 px-1 rounded font-extrabold">anything instantly</span>
        </>
      ),
      description:
        "Search emails by meaning, context, people, or intent — not just exact keywords.",
      details:
        "Type a natural question like 'budget report from last quarter' and Mailix instantly surfaces the right email using AI embeddings.",
      visualType: "semantic-search" as VisualType,
    },
    {
      step: "STEP 03",
      title: (
        <>
          AI <span className="bg-amber-200/70 text-amber-900 px-1 rounded font-extrabold">drafts replies</span> for you
        </>
      ),
      description:
        "Mailix generates contextual email replies and summaries using your writing style and conversation history.",
      details:
        "Choose from AI-suggested replies, tweak the tone, or let Mailix auto-compose — your voice, your style, zero effort.",
      visualType: "compose" as VisualType,
    },
    {
      step: "STEP 04",
      title: (
        <>
          Real-time <span className="bg-amber-200/70 text-amber-900 px-1 rounded font-extrabold">sync</span> across all accounts
        </>
      ),
      description:
        "Connect Gmail, Outlook, and multiple inboxes with instant synchronization and unified management.",
      details:
        "Every email, calendar event, and contact stays in sync in real-time — switch between accounts without ever leaving Mailix.",
      visualType: "sync" as VisualType,
    },
  ];

  const stepLabels = [
    { icon: Mail, label: "AI Understanding" },
    { icon: Search, label: "Smart Search" },
    { icon: Edit3, label: "AI Compose" },
    { icon: RefreshCw, label: "Sync" },
  ];

  return (
    <section
      id="how-it-works"
      className="bg-gradient-to-b from-[#F5F5F3] via-white to-[#F5F5F3] py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid gap-16 md:grid-cols-12 md:items-start">
          {/* ---------- Left Column (sticky) ---------- */}
          <div className="md:col-span-5 md:sticky md:top-32 md:self-start md:h-fit">
            <motion.div
              initial={reduced ? {} : { opacity: 0, y: 30 }}
              whileInView={reduced ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Badge */}
              <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-sm font-bold text-blue-700 shadow-sm">
                <Zap className="h-4 w-4 text-blue-500" />
                How It Works
              </span>

              {/* Heading */}
              <h2 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
                How Mailix <span className="bg-gradient-to-r from-amber-200 to-amber-300 text-amber-900 px-2 rounded-lg">automates your workflow</span>
              </h2>

              {/* Muted paragraph */}
              <p className="mt-4 max-w-md text-base leading-relaxed text-gray-500">
                Mailix connects your email accounts, uses AI to understand
                your inbox, and helps you compose, search, and act faster
                than ever — all from one unified dashboard.
              </p>

              {/* Step indicators — with animated pointing hand */}
              <nav aria-label="Workflow steps" className="relative mt-10 space-y-3">
                {stepLabels.map((s, i) => (
                  <div
                    key={s.label}
                    className={`relative flex items-center gap-3 rounded-xl px-4 py-3 transition-all duration-300 ${
                      i === activeStep
                        ? "bg-white shadow-md shadow-blue-200/30 border border-blue-100"
                        : "opacity-40 hover:opacity-60"
                    }`}
                  >
                    <span
                      className={`flex h-9 w-9 items-center justify-center rounded-xl font-bold text-sm ${
                        i === activeStep
                          ? "bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-md"
                          : "bg-gray-200 text-gray-400"
                      }`}
                    >
                      <s.icon className="h-4 w-4" />
                    </span>
                    <span
                      className={`text-sm font-bold ${
                        i === activeStep ? "text-gray-900" : "text-gray-400"
                      }`}
                    >
                      {s.label}
                    </span>
                    {i === activeStep && (
                      <motion.div
                        layoutId="activeStepPip"
                        className="ml-auto h-2 w-2 rounded-full bg-blue-500 shadow-sm"
                      />
                    )}
                  </div>
                ))}
              </nav>
            </motion.div>
          </div>

          {/* ---------- Right Column (scrollable cards) ---------- */}
          <div className="relative flex flex-col md:col-span-6 md:col-start-7">
            {/* Floating background glow — more visible */}
            <div className="pointer-events-none absolute -right-20 top-1/4 h-80 w-80 rounded-full bg-gradient-to-br from-blue-200/20 via-amber-200/20 to-transparent blur-3xl" />

            {steps.map((s, i) => (
              <div key={s.step}>
                {i > 0 && (
                  <div className="flex items-center gap-2 py-4">
                    <div className="h-3 w-3 rounded-full border-2 border-blue-300 bg-white" />
                    <div className="flex-1 border-t-2 border-dashed border-blue-200" />
                    <div className="h-3 w-3 rounded-full border-2 border-blue-300 bg-white" />
                  </div>
                )}
                <WorkflowCard
                  step={s.step}
                  title={s.title}
                  description={s.description}
                  details={s.details}
                  visualType={s.visualType}
                  index={i}
                  setActiveStep={setActiveStepCallback}
                  isActive={i === activeStep}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
