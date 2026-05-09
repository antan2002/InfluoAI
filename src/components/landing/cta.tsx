"use client";

import Link from "next/link";
import { ArrowRight, Sparkles, ChevronDown } from "lucide-react";
import { MOCK_EMAILS, MOCK_BAR_WIDTHS } from "@/lib/constants/landing";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function CTA() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const dashboardY = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const bgY = useTransform(scrollYProgress, [0, 0.5], [-60, 0]);
  const bgOpacity = useTransform(scrollYProgress, [0, 0.25], [0, 1]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden px-4 py-32">
      {/* Floating Dashboard Background */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center">
        <div className="relative w-full max-w-7xl">
          {/* Water Glow */}
          <div
            className="absolute left-1/2 top-1/2 h-[600px] w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-80 blur-3xl"
            style={{
              background:
                "radial-gradient(circle, rgba(232,213,174,0.65) 0%, rgba(255,248,231,0.55) 45%, transparent 85%)",
            }}
          />

          {/* Floating Dashboard (slow scroll) */}
          <motion.div
            style={{ y: dashboardY }}
            className="relative mx-auto w-full max-w-5xl translate-y-12 overflow-hidden rounded-2xl border border-[#E8D5AE]/40 shadow-[0_40px_120px_rgba(232,213,174,0.4)] backdrop-blur-xl transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_60px_160px_rgba(232,213,174,0.55)]"
          >
            <div className="flex items-center gap-2 border-b border-black/5 px-4 py-3">
              <div className="h-3 w-3 rounded-full bg-red-500/60" />
              <div className="h-3 w-3 rounded-full bg-yellow-500/60" />
              <div className="h-3 w-3 rounded-full bg-green-500/60" />
              <div className="mx-4 flex h-6 flex-1 items-center rounded-md bg-black/5 px-3">
                <span className="text-xs text-black/20">app.mailix.io/mail</span>
              </div>
            </div>
            <div className="grid h-96 grid-cols-12" style={{ background: "rgba(255,255,255,0.95)" }}>
              {/* Sidebar */}
              <div className="col-span-2 flex flex-col gap-1 border-r border-black/5 p-3">
                <div className="mb-4 h-8 w-8 rounded-lg" style={{ background: "linear-gradient(135deg, #E8D5AE, #F4EAD2)" }} />
                {["Inbox", "Sent", "Drafts"].map((item, i) => (
                  <div key={item} className={`rounded-lg px-3 py-2 text-xs ${i === 0 ? "bg-black/10 text-black" : "text-black/30"}`}>
                    {item}
                  </div>
                ))}
              </div>

              {/* Thread List */}
              <div className="col-span-4 flex flex-col gap-2 border-r border-black/5 p-3">
                <div className="mb-2 flex h-7 items-center rounded-md bg-black/5 px-3">
                  <span className="text-xs text-black/20">Search emails...</span>
                </div>
                {MOCK_EMAILS.map((email) => (
                  <div key={email.name} className={`cursor-pointer rounded-lg p-3 ${email.unread ? "bg-black/5" : ""}`}>
                    <div className="mb-1 flex items-start justify-between">
                      <span className={`text-xs font-medium ${email.unread ? "text-black" : "text-black/40"}`}>{email.name}</span>
                      <span className="text-[10px] text-black/20">{email.time}</span>
                    </div>
                    <p className="truncate text-[10px] text-black/40">{email.subject}</p>
                  </div>
                ))}
              </div>

              {/* Email Content */}
              <div className="col-span-4 border-r border-black/5 p-4">
                <div className="mb-4 flex items-center gap-3">
                  <img src="https://i.pravatar.cc/40?img=1" alt="Kai" className="h-8 w-8 rounded-full object-cover" />
                  <div>
                    <p className="text-xs font-medium text-black">Kai</p>
                    <p className="text-[10px] text-black/30">alerts@kai.com</p>
                  </div>
                </div>
                <div className="space-y-2">
                  {MOCK_BAR_WIDTHS.map((w, i) => (
                    <div key={i} className="h-2 rounded-full bg-black/10" style={{ width: `${w}%` }} />
                  ))}
                </div>
              </div>

              {/* AI Panel */}
              <div className="col-span-2 flex flex-col gap-2 p-3">
                <div className="mb-2 flex items-center gap-1">
                  <Sparkles className="h-3 w-3 text-[#BCF429]" />
                  <span className="text-[10px] text-black/40">Ask AI</span>
                </div>
                <div className="rounded-lg bg-black/5 p-2 text-[9px] text-black/40">
                  What is the mail from Kai about?
                </div>
                <div className="rounded-lg p-2 text-[9px] text-black/60" style={{ background: "rgba(255,244,214,0.1)", border: "1px solid rgba(255,244,214,0.2)" }}>
                  Kai is asking for feedback to improve their product...
                </div>
              </div>
            </div>
          </motion.div>

          {/* Scroll Down Effect */}
          <div className="mt-8 flex animate-bounce justify-center">
            <ChevronDown className="h-6 w-6 text-black/30" />
          </div>
        </div>
      </div>

      {/* CTA Card */}
      <div className="relative z-10 mx-auto max-w-3xl text-center">
        {/* Moving transparent background */}
        <motion.div
          style={{ y: bgY, opacity: bgOpacity }}
          className="absolute inset-0 rounded-[40px] border border-white/20 bg-white/15 shadow-[0_10px_40px_rgba(0,0,0,0.03)] backdrop-blur-sm"
        />
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40 blur-3xl" style={{ background: "#FFF8E7" }} />

        {/* Fixed text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 px-14 py-14"
        >
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-black md:text-6xl">
            Bring AI clarity to
            <br />
            your inbox today.
          </h2>

          <p className="mb-10 text-xl text-black/40">
            Start free. No credit card required.
          </p>

          <Link href="/sign-up">
            <button className="btn-primary inline-flex items-center gap-2 rounded-2xl px-6 py-2.5 text-sm font-semibold shadow-[0_8px_25px_rgba(232,213,174,0.45)] hover:shadow-[0_12px_35px_rgba(232,213,174,0.6)]">
              Get started free
              <ArrowRight className="h-4 w-4" />
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
