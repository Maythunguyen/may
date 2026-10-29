"use client";

import { principles } from "@/lib/portfolio-content";
import { SectionLabel as Label } from "./shared";

export default function PrinciplesSection() {

  return (
    <section className="principles section">
      <Label number="05 / PRINCIPLES">HOW I WORK</Label>
      <div className="principles-grid">
        {principles.map((v, i) => (
          <div key={v.title} data-reveal>
            <span className="principle-number">{String(i + 1).padStart(2, "0")}</span>
            <h3>{v.title}</h3>
            <p>{v.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
