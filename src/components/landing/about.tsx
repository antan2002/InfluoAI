"use client";

import { useRef } from "react";
import {
  Inbox,
  Search,
  MessageSquare,
  Activity,
  Globe,
  Layers,
  Zap,
  Mail,
} from "lucide-react";
import { motion } from "framer-motion";

/* ── Theme ── */
const theme = {
  bg: "#FBFCF8",
  card: "#FFFFFF",
  border: "rgba(0,0,0,0.07)",
  text: "rgba(0,0,0,0.9)",
  muted: "rgba(0,0,0,0.45)",
  dot: "rgba(0,0,0,0.06)",
  line: "rgba(0,0,0,0.10)",
} as const;

/* ── Brand icons ── */
function GmailIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="2" y="4" width="20" height="16" rx="2" fill="#EA4335" />
      <path d="M2 8l10 6 10-6" stroke="white" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

function OutlookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="2" y="4" width="20" height="16" rx="2" fill="#0078D4" />
      <path d="M12 10l-2 2 2 2m0-4l2 2-2 2" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function WorkspacesIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="3" y="3" width="8" height="8" rx="1.5" fill="#34A853" />
      <rect x="13" y="3" width="8" height="8" rx="1.5" fill="#4285F4" />
      <rect x="3" y="13" width="8" height="8" rx="1.5" fill="#FBBC04" />
      <rect x="13" y="13" width="8" height="8" rx="1.5" fill="#EA4335" />
    </svg>
  );
}

/* ── Corner plus markers ── */
function CornerPlus({ className }: { className: string }) {
  return (
    <span className={`absolute select-none text-base font-light text-black/20 ${className}`} style={{ lineHeight: 1 }}>
      +
    </span>
  );
}

/* ── Dotted grid ── */
function DottedGrid({ className = "" }: { className?: string }) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 ${className}`}
      style={{
        backgroundImage: `radial-gradient(${theme.dot} 1.2px, transparent 1.2px)`,
        backgroundSize: "22px 22px",
      }}
    />
  );
}

/* ── Workflow node card ── */
interface WorkflowNodeProps {
  title: string;
  items: { label: string; icon: React.ReactNode }[];
  index: number;
  accent?: string;
}

function WorkflowNode({ title, items, index, accent = "#F59E0B" }: WorkflowNodeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.12 }}
      className="relative rounded-2xl border bg-white p-5 shadow-sm"
      style={{ borderColor: theme.border }}
    >
      <div className="mb-4 flex items-center gap-2.5">
        <span className="flex h-7 w-7 items-center justify-center rounded-lg text-xs font-bold text-white" style={{ background: accent }}>
          {index + 1}
        </span>
        <h3 className="text-[13px] font-semibold" style={{ color: theme.text }}>{title}</h3>
      </div>
      <ul className="space-y-1.5">
        {items.map((item) => (
          <li
            key={item.label}
            className="flex items-center gap-2 rounded-lg border px-3 py-2 text-[12px] font-medium"
            style={{ borderColor: theme.border, color: theme.text, background: "#FAFAF8" }}
          >
            <span className="flex items-center justify-center">{item.icon}</span>
            {item.label}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

/* ══════════════════════════════════════════════════════════════════ */
export default function About() {
  const canvasRef = useRef<HTMLDivElement>(null);

  const nodes = [
    {
      title: "Inbox Sources",
      accent: "#F59E0B",
      items: [
        { label: "Gmail", icon: <GmailIcon className="h-4 w-4" /> },
        { label: "Outlook", icon: <OutlookIcon className="h-4 w-4" /> },
        { label: "Workspaces", icon: <WorkspacesIcon className="h-4 w-4" /> },
      ],
    },
    {
      title: "Mailix AI Engine",
      accent: "#F59E0B",
      items: [
        { label: "Semantic Search", icon: <Search className="h-3.5 w-3.5" /> },
        { label: "AI Reply", icon: <MessageSquare className="h-3.5 w-3.5" /> },
        { label: "Smart Summaries", icon: <Zap className="h-3.5 w-3.5" /> },
      ],
    },
    {
      title: "Unified Workflow",
      accent: "#F59E0B",
      items: [
        { label: "Prioritized inbox", icon: <Inbox className="h-3.5 w-3.5" /> },
        { label: "Instant search", icon: <Search className="h-3.5 w-3.5" /> },
        { label: "AI drafting", icon: <Activity className="h-3.5 w-3.5" /> },
      ],
    },
  ];

  return (
    <section className="relative overflow-hidden pt-28 pb-0 md:pb-0" style={{ background: theme.bg }}>
      <DottedGrid />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 lg:px-24">
        {/* ── Editorial header ── */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 grid gap-8 md:grid-cols-2"
        >
          <div>
            <span
              className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm font-semibold"
              style={{ background: theme.card, borderColor: theme.border, color: theme.text }}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
              About Mailix
            </span>
            <h2
              className="mt-6 text-5xl font-extrabold leading-tight tracking-tight md:text-6xl lg:text-7xl"
              style={{ color: theme.text }}
            >
              Your inbox,<br />
              <span className="rounded-lg bg-amber-200 px-2 text-amber-900">
                supercharged by AI
              </span>
            </h2>
          </div>
          <div className="flex items-end">
            <p className="max-w-lg text-base leading-relaxed" style={{ color: theme.muted }}>
              Mailix is an intelligent email client that connects your accounts,
              understands your conversations, and helps you respond faster. No more
              digging through thousands of emails — just ask and Mailix finds what you need.
            </p>
          </div>
        </motion.div>

        {/* ══════════════════════════════════════════ */}
        {/* Workflow canvas                          */}
        {/* ══════════════════════════════════════════ */}
        <div ref={canvasRef} className="relative border-0 border-t" style={{ borderColor: theme.border, background: theme.bg }}>
          <DottedGrid />
          <CornerPlus className="-left-2 -top-2" />
          <CornerPlus className="-right-2 -top-2" />

          {/* Desktop */}
          <div className="relative hidden px-12 py-16 md:block">
            <svg
              className="pointer-events-none absolute inset-0 h-full w-full"
              style={{ zIndex: 1 }}
              preserveAspectRatio="none"
            >
              <defs>
                <marker id="arrow" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                  <path d="M0,0 L8,4 L0,8Z" fill={theme.line} />
                </marker>
              </defs>

              {/* Connector bundle 1→2: three lines bridging the gap */}
              <motion.line
                x1="29%" y1="42%" x2="37%" y2="42%"
                stroke={theme.line} strokeWidth="1" strokeDasharray="3 3"
                markerEnd="url(#arrow)"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              />
              <motion.line
                x1="29%" y1="50%" x2="37%" y2="50%"
                stroke={theme.line} strokeWidth="1.5" strokeDasharray="5 3"
                markerEnd="url(#arrow)"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              />
              <motion.line
                x1="29%" y1="58%" x2="37%" y2="58%"
                stroke={theme.line} strokeWidth="1" strokeDasharray="3 3"
                markerEnd="url(#arrow)"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              />

              {/* Connector bundle 2→3: three lines bridging the gap */}
              <motion.line
                x1="63%" y1="42%" x2="71%" y2="42%"
                stroke={theme.line} strokeWidth="1" strokeDasharray="3 3"
                markerEnd="url(#arrow)"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.55 }}
              />
              <motion.line
                x1="63%" y1="50%" x2="71%" y2="50%"
                stroke={theme.line} strokeWidth="1.5" strokeDasharray="5 3"
                markerEnd="url(#arrow)"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.65 }}
              />
              <motion.line
                x1="63%" y1="58%" x2="71%" y2="58%"
                stroke={theme.line} strokeWidth="1" strokeDasharray="3 3"
                markerEnd="url(#arrow)"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.75 }}
              />

              {/* Blue animated flow line — runs across both gaps */}
              <motion.line
                x1="29%" y1="50%" x2="71%" y2="50%"
                stroke="#3B82F6" strokeWidth="2.5" strokeLinecap="round"
                strokeDasharray="10 24"
                initial={{ strokeDashoffset: 0 }}
                animate={{ strokeDashoffset: -68 }}
                transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
              />
            </svg>

            {/* 3-column node grid */}
            <div className="relative z-10 grid grid-cols-3 gap-10">
              {nodes.map((node, i) => (
                <WorkflowNode key={node.title} {...node} index={i} />
              ))}
            </div>
          </div>

          {/* Mobile */}
          <div className="flex flex-col gap-0 md:hidden">
            {nodes.map((node, i) => (
              <div key={node.title} className="relative">
                <div className="px-6 py-6">
                  <WorkflowNode {...node} index={i} />
                </div>
                {i < nodes.length - 1 && (
                  <div className="flex justify-center py-1">
                    <div
                      className="h-8 w-px"
                      style={{
                        background: `repeating-linear-gradient(to bottom, ${theme.line} 0, ${theme.line} 4px, transparent 4px, transparent 8px)`,
                      }}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
