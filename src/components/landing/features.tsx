"use client";

import {
  MessageSquare,
  Pin,
  FileInput,
  Sliders,
  Eye,
} from "lucide-react";
import { motion } from "framer-motion";

/* ── Theme ── */
const theme = {
  bg: "#F5F5F3",
  card: "#F8F6F1",
  border: "rgba(0,0,0,0.05)",
  text: "rgba(0,0,0,0.9)",
  muted: "rgba(0,0,0,0.4)",
  accent: "#3B82F6",
  cream: "#E8D5AE",
  gold: "#C9A96E",
};

/* ── Real app-style icons ── */
function GmailIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none">
      <rect x="2" y="4" width="24" height="20" rx="3" fill="#EA4335" />
      <path d="M2 9l12 8 12-8" stroke="white" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  );
}

function SyncIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none">
      <rect x="2" y="2" width="24" height="24" rx="6" fill="#E8F5E9" />
      <path d="M14 7a7 7 0 00-5.66 2.83L7 8v5h5l-1.76-1.76A5 5 0 1114 19" stroke="#2E7D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M18 15l-1 1h5v-5" stroke="#2E7D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="14" cy="14" r="2.5" fill="#4CAF50" fillOpacity="0.2" />
    </svg>
  );
}

function WebhookIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none">
      <rect x="2" y="2" width="24" height="24" rx="6" fill="#FFF3E0" />
      <path d="M9 19l5-14 2 7 3-2-4 9" stroke="#E65100" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="9" cy="19" r="1.5" fill="#FF9800" />
      <circle cx="15" cy="5" r="1.5" fill="#FF9800" />
      <circle cx="20" cy="12" r="1.5" fill="#FF9800" />
    </svg>
  );
}

function MultiAccountIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none">
      <rect x="2" y="2" width="24" height="24" rx="6" fill="#E3F2FD" />
      <circle cx="11" cy="10" r="3.5" fill="#1E88E5" fillOpacity="0.3" stroke="#1565C0" strokeWidth="1.2" />
      <circle cx="18" cy="9" r="3" fill="#1E88E5" fillOpacity="0.2" stroke="#1565C0" strokeWidth="1.2" />
      <path d="M7 20c0-2.5 1.8-4.5 4-4.5h2c2.2 0 4 2 4 4.5" stroke="#1565C0" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M15 19.5c0-1.8 1.3-3.5 3-3.5s3 1.7 3 3.5" stroke="#1565C0" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

function ChatIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none">
      <rect x="2" y="2" width="24" height="24" rx="6" fill="#E8F5E9" />
      <rect x="5" y="6" width="18" height="12" rx="3" fill="white" stroke="#2E7D32" strokeWidth="1.2" />
      <path d="M9 10h10M9 13h7M9 16h4" stroke="#2E7D32" strokeWidth="1.2" strokeLinecap="round" />
      <circle cx="20" cy="20" r="4" fill="#4CAF50" />
      <path d="M19 20h2M20 19v2" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

function SearchIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none">
      <rect x="2" y="2" width="24" height="24" rx="6" fill="#E3F2FD" />
      <circle cx="12" cy="12" r="5" fill="white" stroke="#1565C0" strokeWidth="1.5" />
      <path d="M16 16l4 4" stroke="#1565C0" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="12" cy="12" r="2" fill="#1E88E5" fillOpacity="0.3" />
    </svg>
  );
}

function ComposeIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none">
      <rect x="2" y="2" width="24" height="24" rx="6" fill="#FCE4EC" />
      <rect x="6" y="8" width="16" height="12" rx="2" fill="white" stroke="#C62828" strokeWidth="1.2" />
      <path d="M10 12h8M10 15h6M10 18h4" stroke="#C62828" strokeWidth="1.2" strokeLinecap="round" />
      <circle cx="20" cy="8" r="5" fill="#E91E63" />
      <path d="M19 8h2M20 7v2" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

function AutocompleteIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none">
      <rect x="2" y="2" width="24" height="24" rx="6" fill="#F3E5F5" />
      <path d="M7 14l3 3 5-7" stroke="#7B1FA2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14 14l3 3 5-7" stroke="#9C27B0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" />
      <circle cx="21" cy="7" r="3" fill="#AB47BC" />
      <path d="M20.5 7h1M21 6.5v1" stroke="white" strokeWidth="1" strokeLinecap="round" />
    </svg>
  );
}

function ReplyIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none">
      <rect x="2" y="2" width="24" height="24" rx="6" fill="#E8EAF6" />
      <path d="M6 14l4-4v3h8v-3l4 4-4 4v-3H10v3l-4-4z" stroke="#283593" strokeWidth="1.3" strokeLinejoin="round" fill="#5C6BC0" fillOpacity="0.2" />
    </svg>
  );
}

function InboxIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none">
      <rect x="2" y="2" width="24" height="24" rx="6" fill="#FFF8E1" />
      <path d="M4 10l10 6 10-6V8a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V10" stroke="#F57F17" strokeWidth="1.3" fill="#FFB300" fillOpacity="0.15" />
      <path d="M4 10v4l4 2h12l4-2v-4" stroke="#F57F17" strokeWidth="1.3" />
    </svg>
  );
}

function DoneIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none">
      <rect x="2" y="2" width="24" height="24" rx="6" fill="#E8F5E9" />
      <rect x="5" y="5" width="18" height="18" rx="4" fill="white" stroke="#2E7D32" strokeWidth="1.3" />
      <path d="M9 14l3 3 7-7" stroke="#43A047" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ThemeIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none">
      <rect x="2" y="2" width="24" height="24" rx="6" fill="#FFF3E0" />
      <circle cx="14" cy="14" r="6" fill="#FB8C00" />
      <path d="M14 8v-1M14 21v-1M18.5 9.5l1-1M8.5 18.5l-1 1M20 14h1M7 14H6M18.5 18.5l1 1M8.5 9.5l-1-1" stroke="#E65100" strokeWidth="1.2" strokeLinecap="round" />
      <circle cx="14" cy="14" r="3" fill="white" />
    </svg>
  );
}

function KeyboardIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none">
      <rect x="2" y="2" width="24" height="24" rx="6" fill="#ECEFF1" />
      <rect x="4" y="8" width="20" height="12" rx="2" fill="white" stroke="#546E7A" strokeWidth="1.2" />
      <rect x="6.5" y="10" width="3" height="3" rx="0.8" fill="#607D8B" />
      <rect x="11" y="10" width="3" height="3" rx="0.8" fill="#607D8B" />
      <rect x="15.5" y="10" width="3" height="3" rx="0.8" fill="#607D8B" />
      <rect x="9" y="14" width="3" height="3" rx="0.8" fill="#607D8B" />
      <rect x="13.5" y="14" width="3" height="3" rx="0.8" fill="#607D8B" />
      <rect x="18" y="14" width="3" height="3" rx="0.8" fill="#90A4AE" />
      <rect x="8" y="18" width="12" height="1.5" rx="0.8" fill="#90A4AE" />
    </svg>
  );
}

function FreePlanIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none">
      <rect x="2" y="2" width="24" height="24" rx="6" fill="#E8F5E9" />
      <rect x="5" y="10" width="18" height="12" rx="2" fill="white" stroke="#2E7D32" strokeWidth="1.3" />
      <rect x="5" y="10" width="18" height="4" rx="2" fill="#4CAF50" />
      <text x="14" y="13" textAnchor="middle" fill="white" fontSize="7" fontWeight="bold">FREE</text>
      <circle cx="9" cy="18" r="1.5" fill="#81C784" />
      <circle cx="14" cy="18" r="1.5" fill="#81C784" />
      <circle cx="19" cy="18" r="1.5" fill="#81C784" />
    </svg>
  );
}

function StripeIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none">
      <rect x="2" y="2" width="24" height="24" rx="6" fill="#635BFF" />
      <path d="M14 11c-1.2 0-1.8.4-1.8 1s.3.9 1.8 1.1c1.5.2 3 .5 3 2.2 0 1.6-1.4 2.5-3 2.5-2.2 0-3-1-3.4-1.8" stroke="white" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M14 8v8.5" stroke="white" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

function LayoutIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none">
      <rect x="2" y="2" width="24" height="24" rx="6" fill="#E3F2FD" />
      <rect x="4" y="4" width="7" height="20" rx="1.5" fill="white" stroke="#1565C0" strokeWidth="1.2" />
      <rect x="13" y="4" width="7" height="9" rx="1.5" fill="white" stroke="#1565C0" strokeWidth="1.2" />
      <rect x="13" y="15" width="7" height="9" rx="1.5" fill="white" stroke="#1565C0" strokeWidth="1.2" />
      <rect x="22" y="4" width="3" height="20" rx="1" fill="#1E88E5" fillOpacity="0.15" stroke="#1565C0" strokeWidth="0.8" strokeDasharray="2 2" />
    </svg>
  );
}

/* ── Feature data ── */
const features = [
  { icon: <GmailIcon size={24} />, title: "Gmail OAuth Connect", desc: "Seamless Gmail integration with secure OAuth authentication." },
  { icon: <SyncIcon size={24} />, title: "90-Day Email Sync", desc: "Full email history synced and indexed for instant access." },
  { icon: <WebhookIcon size={24} />, title: "Real-Time Webhooks", desc: "New emails appear instantly. No refresh needed." },
  { icon: <MultiAccountIcon size={24} />, title: "Multi-Account Support", desc: "Connect Gmail, Outlook, and Workspaces in one inbox." },
  { icon: <ChatIcon size={24} />, title: "RAG Email Chat", desc: "Chat with your emails. Ask anything, get answers instantly." },
  { icon: <SearchIcon size={24} />, title: "Semantic Search", desc: "Find emails by meaning, not just keywords." },
  { icon: <ComposeIcon size={24} />, title: "AI Email Compose", desc: "Generate complete drafts from a single prompt." },
  { icon: <AutocompleteIcon size={24} />, title: "AI Autocomplete", desc: "Press Cmd+J and watch Mailix finish your sentences." },
  { icon: <ReplyIcon size={24} />, title: "Reply / Reply All / Fwd", desc: "Full email threading with one-click actions." },
  { icon: <InboxIcon size={24} />, title: "Inbox / Sent / Drafts", desc: "Complete folder management with smart categorization." },
  { icon: <DoneIcon size={24} />, title: "Done / Undone Mgmt", desc: "Track email completion status effortlessly." },
  { icon: <ThemeIcon size={24} />, title: "Dark / Light Mode", desc: "Switch themes seamlessly for any environment." },
  { icon: <KeyboardIcon size={24} />, title: "Keyboard Shortcuts", desc: "Navigate and act faster with powerful shortcuts." },
  { icon: <FreePlanIcon size={24} />, title: "Free Plan (15 cr/day)", desc: "Start free with 15 AI credits daily. No credit card." },
  { icon: <StripeIcon size={24} />, title: "Stripe Payments", desc: "Secure billing powered by Stripe." },
  { icon: <LayoutIcon size={24} />, title: "Resizable 3-Panel", desc: "Customize your layout with a resizable three-panel view." },
];

const upcomingFeatures = [
  { icon: <MessageSquare className="h-5 w-5" />, label: "Thread Summarization", desc: "Auto-summarize long threads" },
  { icon: <Pin className="h-5 w-5" />, label: "Pin Important Emails", desc: "Stick key messages to top" },
  { icon: <FileInput className="h-5 w-5" />, label: "Email Templates", desc: "Save & reuse common replies" },
  { icon: <Sliders className="h-5 w-5" />, label: "AI Model Selector", desc: "Choose your preferred LLM" },
  { icon: <Eye className="h-5 w-5" />, label: "Read Receipts", desc: "See who opened your email" },
];

/* ── Container stagger ── */
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 14 } },
};

/* ══════════════════════════════════════════════════ */
export default function Features() {
  return (
    <section id="features" className="relative overflow-hidden" style={{ background: theme.bg }}>
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(rgba(0,0,0,0.04) 1px, transparent 1px)`,
          backgroundSize: "20px 20px",
        }}
      />

      <motion.div
        className="pointer-events-none absolute -left-40 -top-40 h-96 w-96 rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, #3B82F6, transparent)" }}
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute -right-40 bottom-0 h-80 w-80 rounded-full opacity-15 blur-3xl"
        style={{ background: "radial-gradient(circle, #E8D5AE, transparent)" }}
        animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
        transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <motion.span
            className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm font-semibold"
            style={{ background: theme.card, borderColor: theme.border, color: theme.text }}
            whileHover={{ scale: 1.02 }}
          >
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: theme.accent }} />
            Features
          </motion.span>

          <h2 className="mt-6 text-5xl font-extrabold leading-tight tracking-tight md:text-6xl lg:text-7xl" style={{ color: theme.text }}>
            Everything your
            <br />
            <span className="rounded-lg px-3" style={{ background: theme.cream, color: "#8B7355" }}>
              inbox needs.
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg" style={{ color: theme.muted }}>
            AI-native productivity experience for modern communication.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {features.map((f) => (
            <motion.div
              key={f.title}
              variants={item}
              className="group relative rounded-[20px] border p-6 transition-all duration-300"
              style={{ borderColor: theme.border, background: theme.card }}
              whileHover={{
                y: -6,
                boxShadow: "0 20px 50px rgba(0,0,0,0.06)",
                borderColor: theme.accent,
                transition: { type: "spring", stiffness: 200, damping: 15 },
              }}
            >
              <motion.div
                className="absolute left-0 top-0 h-1 rounded-t-[20px]"
                style={{ background: theme.accent, width: "0%" }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
              <span className="mb-4 flex h-12 w-12 items-center justify-center">
                {f.icon}
              </span>
              <h3 className="mb-2 text-lg font-bold leading-snug" style={{ color: theme.text }}>
                {f.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: theme.muted }}>
                {f.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-24"
        >
          <div className="mb-8 flex items-center gap-3">
            <div className="h-px flex-1" style={{ background: theme.border }} />
            <span className="text-sm font-semibold uppercase tracking-[0.2em]" style={{ color: theme.gold }}>
              Coming Soon
            </span>
            <div className="h-px flex-1" style={{ background: theme.border }} />
          </div>

          <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-5">
            {upcomingFeatures.map((feat, i) => (
              <motion.div
                key={feat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + i * 0.08, type: "spring", stiffness: 80 }}
                className="flex items-center gap-3 rounded-2xl border px-4 py-3"
                style={{ borderColor: theme.border, background: `${theme.card}80`, backdropFilter: "blur(4px)" }}
                whileHover={{ y: -2, borderColor: theme.gold, transition: { type: "spring", stiffness: 200 } }}
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg" style={{ background: `${theme.gold}15`, color: theme.gold }}>
                  {feat.icon}
                </span>
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold" style={{ color: theme.text }}>{feat.label}</p>
                  <p className="truncate text-xs" style={{ color: theme.muted }}>{feat.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
