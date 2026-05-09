import Link from "next/link";
import { Mail, Facebook, Instagram, Twitter, Send } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#F5F5F3] px-4 pt-24">
      {/* Huge Background Text */}
      <div className="pointer-events-none absolute left-0 top-0 select-none text-[180px] font-bold leading-none tracking-[-0.08em] text-black/[0.03] md:text-[280px]">
        Mailix
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Top Row */}
        <div className="flex flex-col items-start justify-between gap-10 pb-16 md:flex-row md:items-center">
          <div className="max-w-md" />

          <div className="text-left md:text-right">
            <p className="text-3xl font-semibold tracking-tight text-black/70">
              All Rights Reserved.
            </p>

            <p className="mt-2 text-lg text-black/40">
              © 2026 Mailix, premium AI email platform
            </p>
          </div>
        </div>

        {/* Main Footer */}
        <div className="grid gap-16 py-20 md:grid-cols-4">
          {/* Left Content */}
          <div>
            {/* Logo */}
            <div className="mb-8 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#E8D5AE] to-[#F4EAD2] shadow-sm">
                <Mail className="h-5 w-5 text-[#1A140E]" />
              </div>

              <span className="text-2xl font-semibold tracking-tight text-black">
                Mailix
              </span>
            </div>

            {/* Description */}
            <p className="max-w-sm text-lg leading-relaxed text-black/45">
              Mailix gives you the tools needed to create a truly intelligent
              inbox experience powered by modern AI.
            </p>

            {/* Social Icons */}
            <div className="mt-8 flex items-center gap-4">
              {[Facebook, Instagram, Twitter, Send].map((Icon, index) => (
                <button
                  key={index}
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1D2340] text-white transition-all duration-300 hover:scale-105 hover:bg-black"
                >
                  <Icon className="h-5 w-5" />
                </button>
              ))}
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="mb-8 text-2xl font-semibold text-[#1D2340]">
              Product
            </h3>

            <div className="flex flex-col gap-5">
              <Link
                href="/"
                className="text-lg text-[#2F6BFF] transition-colors hover:text-black"
              >
                Landing Page
              </Link>

              <a
                href="#features"
                className="text-lg text-black/45 transition-colors hover:text-black"
              >
                Features
              </a>

              <a
                href="#pricing"
                className="text-lg text-black/45 transition-colors hover:text-black"
              >
                Pricing
              </a>

              <a
                href="#changelog"
                className="text-lg text-black/45 transition-colors hover:text-black"
              >
                Changelog
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-8 text-2xl font-semibold text-[#1D2340]">
              Company
            </h3>

            <div className="flex flex-col gap-5">
              <a
                href="#about"
                className="text-lg text-black/45 transition-colors hover:text-black"
              >
                About
              </a>

              <a
                href="#blog"
                className="text-lg text-black/45 transition-colors hover:text-black"
              >
                Blog
              </a>

              <Link
                href="/privacy"
                className="text-lg text-black/45 transition-colors hover:text-black"
              >
                Privacy Policy
              </Link>

              <Link
                href="/terms-of-service"
                className="text-lg text-black/45 transition-colors hover:text-black"
              >
                Terms & Conditions
              </Link>

              <a
                href="#404"
                className="text-lg text-black/45 transition-colors hover:text-black"
              >
                Error - 404
              </a>
            </div>
          </div>

          {/* Support */}
          <div>
            <h3 className="mb-8 text-2xl font-semibold text-[#1D2340]">
              Support
            </h3>

            <div className="flex flex-col gap-5">
              <a
                href="#contact"
                className="text-lg text-black/45 transition-colors hover:text-black"
              >
                Contact
              </a>

              <a
                href="#demo"
                className="text-lg text-black/45 transition-colors hover:text-black"
              >
                Request Demo
              </a>

              <a
                href="#integration"
                className="text-lg text-black/45 transition-colors hover:text-black"
              >
                Integration
              </a>

              <a
                href="#case-study"
                className="text-lg text-black/45 transition-colors hover:text-black"
              >
                Case Study
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
