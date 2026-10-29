"use client";

import { moreProjects, projects } from "@/lib/content";
import ProjectCards from "@/components/project-cards";
import { Arrow, SectionLabel as Label } from "./shared";

type WorkSectionProps = { onSelect: (index: number) => void };

export default function WorkSection({ onSelect }: WorkSectionProps) {

  return (
    <section className="work section" id="work">
      <Label number="02 / PROJECTS">SELECTED WORK</Label>
      <div className="section-heading" data-reveal>
        <h2>
          A few things
          <br />
          I’ve <em>built.</em>
        </h2>
        <p className="muted">
          Ideas, experiments, and a lot of learning.
          <br />A selection from my development practice.
        </p>
      </div>
      <ProjectCards onSelect={onSelect} />
      <div className="more-work" data-reveal>
        <div className="eyebrow muted">MORE EXPLORATIONS</div>
        {moreProjects.map((p, i) => (
          <a
            className="more-row"
            key={p.title}
            href={p.href}
            target="_blank"
            rel="noreferrer"
          >
            <span className="muted">{String(projects.length + i + 1).padStart(2, "0")}</span>
            <div>
              <h3>{p.title}</h3>
              <p>{p.description}</p>
            </div>
            <span className="eyebrow muted more-type">{p.type}</span>
            <Arrow />
          </a>
        ))}
      </div>
    </section>
  );
}
