"use client";

import { experience } from "@/lib/content";
import { Plus } from "@/components/icons";
import { SectionLabel as Label } from "./shared";

export default function ExperienceSection() {

  return (
    <section className="experience section" id="experience">
      <Label number="04 / EXPERIENCE">LEARNING BY DOING</Label>
      <div className="section-heading" data-reveal>
        <h2>
          Good work.
          <br />
          <em>Good people.</em>
        </h2>
        <p className="muted">
          Contributing to real products.
          <br />
          Growing through collaboration.
        </p>
      </div>
      <div>
        {experience.map((e, i) => (
          <details
            className="experience-row"
            key={`${e.company}-${i}`}
            data-reveal
            open={i === 0 ? true : undefined}
          >
            <summary>
              <span className="row-number">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3>{e.company}</h3>
                <p>{e.role}</p>
              </div>
              <span className="eyebrow experience-label">{e.label}</span>
              <span className="expand" aria-hidden="true">
                <Plus />
              </span>
            </summary>
            <div className="experience-detail">
              <p>{e.description}</p>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
