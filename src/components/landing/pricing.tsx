// TODO: Build pricing section with tier cards, feature lists, and CTA buttons

import { PRICING_TIERS } from "@/lib/constants/landing";
import SectionContainer from "./section-container";
import SectionHeading from "./section-heading";

export default function Pricing() {
  return (
    <SectionContainer id="pricing">
      <SectionHeading
        title="Pricing"
        subtitle="Choose the plan that fits your needs"
      />
      <div>
        {/* TODO: Map over PRICING_TIERS and render tier cards with price, features, CTA */}
      </div>
    </SectionContainer>
  );
}
