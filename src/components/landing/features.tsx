// TODO: Build features grid section with icons, titles, and descriptions

import { FEATURES } from "@/lib/constants/landing";
import SectionContainer from "./section-container";
import SectionHeading from "./section-heading";

export default function Features() {
  return (
    <SectionContainer id="features">
      <SectionHeading
        title="Features"
        subtitle="Everything you need to manage your inbox"
      />
      <div>
        {/* TODO: Map over FEATURES and render feature cards with icon, title, description */}
      </div>
    </SectionContainer>
  );
}
