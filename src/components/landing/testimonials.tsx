// TODO: Build testimonials section with cards, avatars, quotes, and optional carousel

import { TESTIMONIALS } from "@/lib/constants/landing";
import SectionContainer from "./section-container";
import SectionHeading from "./section-heading";

export default function Testimonials() {
  return (
    <SectionContainer id="testimonials">
      <SectionHeading
        title="Testimonials"
        subtitle="What our customers are saying"
      />
      <div>
        {/* TODO: Map over TESTIMONIALS and render testimonial cards with avatar, name, role, quote */}
      </div>
    </SectionContainer>
  );
}
