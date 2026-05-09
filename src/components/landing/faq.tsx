import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { ChatBubbleIcon } from "@radix-ui/react-icons";
import { FAQ_ITEMS } from "@/lib/constants/landing";

export default function FAQ() {
  return (
    <section id="faq" className="bg-gradient-to-br from-white via-orange-50 to-orange-100 py-20">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="md:grid md:grid-cols-2 md:gap-12 items-start">
          {/* Left Panel */}
          <div className="mb-10 flex flex-col gap-6 md:mb-0">
            <span className="inline-flex w-fit items-center gap-3">
              <span className="inline-flex items-center rounded-full border border-[rgba(0,0,0,0.05)] bg-white px-3 py-1 text-sm font-semibold text-gray-800">
                FAQ
              </span>
              <Link href="/contact" className="group relative inline-flex items-center">
                <ChatBubbleIcon className="h-4 w-4 cursor-pointer text-black/30 transition-colors hover:text-black/60" />
                <span className="absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap rounded-lg border border-[rgba(0,0,0,0.05)] bg-white px-3 py-1.5 text-xs font-medium text-gray-700 opacity-0 shadow-sm transition-opacity duration-200 group-hover:opacity-100">
                  Contact us
                </span>
              </Link>
            </span>
            <h2 className="text-4xl font-extrabold leading-tight tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
              Frequently asked questions
            </h2>
            <p className="max-w-xl text-sm text-[rgba(0,0,0,0.5)]">
              Find answers to common questions about our platform, features, and pricing.
            </p>
          </div>

          {/* Right Panel */}
          <div className="space-y-6">
            {FAQ_ITEMS.map((item, i) => (
              <details
                key={i}
                className="group w-full rounded-[28px] border border-[rgba(0,0,0,0.05)] bg-white px-6 py-5 transition-all duration-200 hover:shadow-md md:px-8"
              >
                <summary className="flex list-none cursor-pointer items-start justify-between gap-4">
                  <span className="text-left text-lg font-semibold text-gray-900 md:text-xl">
                    {item.q}
                  </span>
                  <ChevronDown className="ml-4 mt-1 h-5 w-5 shrink-0 text-black/30 transition-transform duration-200 group-open:rotate-180" />
                </summary>
                <p className="mt-4 max-w-[70ch] px-1 text-base leading-relaxed text-gray-800">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
