"use client";

import { projects } from "@/lib/content";
import ProjectCard from "./portfolio/project-card";

type ProjectCardsProps = { onSelect: (index: number) => void };

export default function ProjectCards({ onSelect }: ProjectCardsProps) {
  return (
    <div className="mb-16 flex flex-col gap-10">
      {projects.map((project, index) => (
        <ProjectCard key={project.id} project={project} onSelect={() => onSelect(index)} />
      ))}
    </div>
  );
}
