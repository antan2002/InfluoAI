import Link from "next/link";
import { ArrowRight, CreditCard, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="grid-bg relative flex min-h-[85vh] flex-col items-center justify-center overflow-hidden bg-[#F5F5F3] px-4 pt-8 pb-8">
      {/* Soft Background Glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-70 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,0.9) 0%, rgba(248,239,216,0.45) 40%, transparent 75%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl text-center">
        {/* Trusted Badge */}
        <div className="badge-shine mb-6 inline-flex items-center gap-2 rounded-full border border-[#2F6BFF]/30 bg-white/80 px-4 py-1.5 shadow-sm backdrop-blur-md">
          <Sparkles className="h-3.5 w-3.5 text-[#D6B97A]" />
          <span className="text-sm font-medium text-[#2F6BFF]">
            AI-powered email for everyone
          </span>
        </div>

        {/* Heading */}
        <h1 className="mx-auto mb-6 max-w-6xl text-5xl font-bold leading-[0.92] tracking-[-0.04em] text-black md:text-7xl">
          Email that thinks
          <br />
          with you.
        </h1>

        {/* Description */}
        <p className="mx-auto mb-8 max-w-3xl text-xl leading-relaxed text-black/45">
          Mailix is an AI-powered email client that reads, understands, and
          helps you act on your inbox — so you can focus on what actually
          matters.
        </p>

        {/* CTA */}
        <div className="flex flex-col items-center justify-center gap-5">
          <Link href="/sign-up">
            <button className="flex items-center gap-2 rounded-2xl bg-[#2F6BFF] px-8 py-3 text-base font-semibold text-white shadow-[0_10px_30px_rgba(47,107,255,0.25)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#1F5EFF] hover:shadow-[0_15px_35px_rgba(47,107,255,0.35)]">
              Get Started For Free
            </button>
          </Link>

          {/* Bottom Text */}
          <div className="flex items-center gap-2 text-black/75">
            <CreditCard className="h-4 w-4 text-[#2F6BFF]" />
            <span className="text-sm font-semibold">
              No credit card required
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
