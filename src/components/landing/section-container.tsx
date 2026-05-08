// TODO: Wrap each landing section with consistent max-width, padding, and optional background

import type { ReactNode } from "react";

interface SectionContainerProps {
  children: ReactNode;
  id?: string;
  className?: string;
}

export default function SectionContainer({
  children,
  id,
  className,
}: SectionContainerProps) {
  return (
    <section id={id} className={className}>
      <div>
        {/* TODO: Add consistent container with max-width, horizontal padding, vertical spacing */}
        {children}
      </div>
    </section>
  );
}
