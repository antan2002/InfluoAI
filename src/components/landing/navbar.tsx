"use client";

import Link from "next/link";
import { Mail, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <nav
        className={`flex w-full items-center justify-between transition-all duration-500 ease-in-out ${
          scrolled
            ? "max-w-6xl rounded-full border border-black/5 bg-white/80 px-6 py-4 shadow-[0_8px_30px_rgb(0,0,0,0.06)] backdrop-blur-xl"
            : "max-w-full bg-transparent px-8 py-4"
        }`}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-black text-white">
            <Mail className="h-4 w-4" />
          </div>

          <span className="text-xl font-semibold tracking-tight text-black">
            Mailix
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-10 md:flex">
          <a
            href="#features"
            className="text-[15px] font-medium text-black/70 transition-colors hover:text-black"
          >
            Features
          </a>

          <a
            href="#how-it-works"
            className="text-[15px] font-medium text-black/70 transition-colors hover:text-black"
          >
            Benefits
          </a>

          <a
            href="#pricing"
            className="text-[15px] font-medium text-black/70 transition-colors hover:text-black"
          >
            Pricing
          </a>

          <a
            href="#blog"
            className="text-[15px] font-medium text-black/70 transition-colors hover:text-black"
          >
            Blog
          </a>

          <a
            href="#contact"
            className="text-[15px] font-medium text-black/70 transition-colors hover:text-black"
          >
            Contact Us
          </a>
        </div>

        {/* Desktop CTA */}
        <div className="hidden items-center md:flex">
          <Link href="/sign-up">
            <button className="rounded-full bg-black px-7 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:bg-black/90">
              Try Mailix free
            </button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenu(!mobileMenu)}
          className="flex items-center justify-center md:hidden"
        >
          {mobileMenu ? (
            <X className="h-6 w-6 text-black" />
          ) : (
            <Menu className="h-6 w-6 text-black" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`absolute top-full mt-3 w-[calc(100%-2rem)] overflow-hidden rounded-3xl border border-black/5 bg-white/95 shadow-[0_8px_30px_rgb(0,0,0,0.06)] backdrop-blur-xl transition-all duration-300 md:hidden ${
          mobileMenu
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex flex-col p-6">
          <a
            href="#features"
            className="border-b border-black/5 py-4 text-black/70"
          >
            Features
          </a>

          <a
            href="#how-it-works"
            className="border-b border-black/5 py-4 text-black/70"
          >
            Benefits
          </a>

          <a
            href="#pricing"
            className="border-b border-black/5 py-4 text-black/70"
          >
            Pricing
          </a>

          <a
            href="#blog"
            className="border-b border-black/5 py-4 text-black/70"
          >
            Blog
          </a>

          <a href="#contact" className="py-4 text-black/70">
            Contact Us
          </a>

          <Link href="/sign-up" className="mt-4">
            <button className="w-full rounded-full bg-black px-6 py-3 text-sm font-semibold text-white">
              Try Mailix free
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}
