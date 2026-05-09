import { Star } from "lucide-react";
import { TESTIMONIAL } from "@/lib/constants/landing";

export default function Testimonials() {
  return (
    <section className="px-4 py-24">
      <div className="mx-auto max-w-4xl">
        <div
          className="border-black/8 rounded-3xl border p-10 text-center"
          style={{ background: "rgba(255,244,214,0.04)" }}
        >
          <div className="mb-6 flex items-center justify-center gap-1">
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <Star
                  key={i}
                  className="h-5 w-5 fill-[#BCF429] text-[#BCF429]"
                />
              ))}
          </div>
          <blockquote className="mb-8 text-2xl font-medium leading-relaxed text-black/80 md:text-3xl">
            {TESTIMONIAL.content}
          </blockquote>
          <div className="flex items-center justify-center gap-3">
            <div
              className="flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold"
              style={{ background: "rgba(255,244,214,0.2)", color: "#E8D5AE" }}
            >
              {TESTIMONIAL.initials}
            </div>
            <div className="text-left">
              <p className="text-sm font-medium">{TESTIMONIAL.name}</p>
              <p className="text-xs text-black/30">
                {TESTIMONIAL.role}, {TESTIMONIAL.company}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
