import { STATS } from "@/lib/constants/landing";

export default function Stats() {
  return (
    <section className="border-y border-black/5 py-16">
      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 px-4 text-center md:grid-cols-4">
        {STATS.map((stat) => (
          <div key={stat.label}>
            <p className="gradient-text mb-1 text-3xl font-bold">
              {stat.value}
            </p>
            <p className="text-sm text-black/40">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
