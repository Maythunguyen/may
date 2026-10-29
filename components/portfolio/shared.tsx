import type { ReactNode } from "react";
import { ArrowUpRight } from "@/components/icons";

// Preserve the span wrapper used by the existing stylesheet.
export function Arrow() {
  return <span aria-hidden="true"><ArrowUpRight /></span>;
}

export function SectionLabel({ children, number }: {
  children: ReactNode;
  number: string;
}) {
  return (
    <div className="section-label">
      <span><i />{children}</span>
      <span>{number}</span>
    </div>
  );
}
