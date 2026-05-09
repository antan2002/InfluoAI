import { INTEGRATIONS } from "@/lib/constants/landing";

export default function Integrations() {
  return (
    <section className="px-4 py-20 text-center">
      <p className="mb-8 text-sm uppercase tracking-widest text-black/30">
        Works with your stack
      </p>
      <div className="mx-auto flex max-w-2xl flex-wrap items-center justify-center gap-6">
        {INTEGRATIONS.map((item) => (
          <div
            key={item}
            className="bg-black/5 rounded-full border border-black/10 px-5 py-2.5 text-sm text-black/40"
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}
