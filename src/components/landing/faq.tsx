// TODO: Build FAQ accordion section with expandable questions and answers

import { FAQ_ITEMS } from "@/lib/constants/landing";
import SectionContainer from "./section-container";
import SectionHeading from "./section-heading";

export default function FAQ() {
  return (
    <SectionContainer id="faq">
      <SectionHeading
        title="FAQ"
        subtitle="Frequently asked questions"
      />
      <div>
        {/* TODO: Map over FAQ_ITEMS and render accordion with question/answer pairs */}
      </div>
    </SectionContainer>
  );
}
