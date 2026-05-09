"use client";

import Link from "next/link";
import { useState } from "react";
import { Check, Rocket, TrendingUp, Crown } from "lucide-react";
import { PRICING_TIERS } from "@/lib/constants/landing";

const PLAN_ICONS: Record<string, typeof Rocket> = {
  Starter: Rocket,
  Growth: TrendingUp,
  Pro: Crown,
};

export default function Pricing() {
  const [annual, setAnnual] = useState(false);

  return (
    <section id="pricing" className="bg-gradient-to-r from-orange-100 via-orange-50 to-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <span className="inline-flex w-fit items-center rounded-full border border-black/5 bg-white px-4 py-1.5 text-sm font-semibold text-gray-800">
            Our Pricing Plan
          </span>
          <h2 className="mt-6 text-4xl font-extrabold tracking-tight md:text-5xl">
            Simple pricing for every team
          </h2>
          <p className="mt-4 text-black/45">
            Start free. Upgrade when you need more AI power.
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="mb-14 flex items-center justify-center gap-3">
          <div className="inline-flex items-center rounded-full border border-black/5 bg-white p-1">
            <button
              onClick={() => setAnnual(false)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-200 ${
                !annual ? "bg-black text-white" : "text-black/50 hover:text-black/80"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-200 ${
                annual ? "bg-black text-white" : "text-black/50 hover:text-black/80"
              }`}
            >
              Annual
            </button>
          </div>
          <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-600">
            Save 30%
          </span>
        </div>

        {/* Pricing Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {PRICING_TIERS.map((plan) => {
            const IconComponent = PLAN_ICONS[plan.name] || Rocket;
            return (
              <div
                key={plan.name}
                className={`relative rounded-[32px] border border-black/5 bg-[#F7F5EF] p-8 transition-all duration-300 ${
                  plan.highlight ? "scale-[1.02] shadow-xl" : "shadow-sm"
                }`}
              >
                {plan.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-[#E8D5AE] to-[#F4EAD2] px-4 py-1 text-xs font-semibold text-gray-900">
                    Most popular
                  </div>
                )}

                {/* Plan Icon */}
                <div className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-[#F5EDE0]">
                  <IconComponent className="h-5 w-5 text-gray-700" />
                </div>

                <p className="mb-1 text-sm font-medium text-black/50">{plan.name}</p>
                <div className="mb-1 flex items-baseline gap-1">
                  <span className="text-4xl font-bold">{annual ? plan.priceAnnual : plan.priceMonthly}</span>
                  <span className="text-sm text-black/30">{annual ? plan.periodAnnual : plan.periodMonthly}</span>
                </div>
                <p className="mb-8 text-sm text-black/30">{plan.desc}</p>

                <ul className="mb-10 space-y-4">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm text-black/60">
                      <Check className="h-4 w-4 flex-shrink-0 text-black/40" />
                      {f}
                    </li>
                  ))}
                </ul>

                <Link href="/sign-up">
                  <button
                    className={`w-full rounded-full py-3 text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 ${
                      plan.highlight
                        ? "bg-black text-white shadow-md hover:shadow-lg"
                        : "border border-black/10 bg-white text-gray-900 hover:border-black/20 hover:shadow-sm"
                    }`}
                  >
                    {plan.cta}
                  </button>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
