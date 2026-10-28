"use client";

import { projects } from "@/lib/content";
import { ArrowUpRight } from "@/components/icons";

type ProjectCardsProps = {
  onSelect: (index: number) => void;
};

export default function ProjectCards({ onSelect }: ProjectCardsProps) {
  return (
    <div className="mb-16 flex flex-col gap-10">
      {projects.map((project, index) => (
        <article
          key={project.id}
          data-reveal
          className="
            grid min-w-0 grid-cols-1 items-center
            gap-8 overflow-hidden rounded-3xl
            border border-white/20 bg-white/[0.02]
            p-5 transition-colors duration-300
            hover:border-white/35 focus-within:border-white/35
            sm:p-8
            lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]
            lg:gap-12
          "
        >
          {/* Image */}
          <button
            type="button"
            onClick={() => onSelect(index)}
            aria-label={`Read about ${project.title}`}
            className="
              group relative block aspect-[4/3]
              w-full min-w-0 overflow-hidden
              rounded-2xl bg-neutral-900 text-left
            "
          >
            <img
              src={project.image}
              alt={`${project.title} website preview`}
              loading="lazy"
              className="
                absolute inset-0 h-full w-full
                object-cover object-top
                transition-transform duration-500
                motion-safe:group-hover:scale-105
              "
            />

            <span
              className="
                absolute left-4 top-4 rounded-full
                bg-black/70 px-3 py-2 text-xs
                tracking-widest text-white
              "
            >
              {project.number} / SELECTED PROJECT
            </span>

            <span
              aria-hidden="true"
              className="
                absolute bottom-4 right-4
                grid size-12 place-items-center
                rounded-full bg-[#f4f1ec] text-neutral-950
                transition-colors group-hover:bg-[#ff7137]
              "
            >
              <ArrowUpRight size="1.5rem" />
            </span>
          </button>

          {/* Details */}
          <div className="flex min-w-0 flex-col items-start gap-5">
            <p className="text-xs uppercase tracking-widest text-white/55">
              {project.category}
            </p>

            <h3 className="max-w-full text-3xl font-medium tracking-tight sm:text-4xl">
              <button
                type="button"
                onClick={() => onSelect(index)}
                className="inline-flex max-w-full items-center gap-4 text-left"
              >
                <span className="min-w-0 break-words">
                  {project.title}
                </span>
                <ArrowUpRight
                  size="1.5rem"
                  className="text-[#ff7137]"
                />
              </button>
            </h3>

            <p className="max-w-prose text-sm leading-7 text-white/65">
              {project.description}
            </p>

            <ul className="m-0 flex list-none flex-wrap gap-2 p-0">
              {project.tags.map((tag) => (
                <li
                  key={tag}
                  className="
                    rounded-full border border-white/20
                    px-3 py-1.5 text-xs text-white/70
                  "
                >
                  {tag}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-6 pt-2 text-sm">
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="
                  inline-flex items-center gap-2
                  transition-colors hover:text-[#ff7137]
                "
              >
                Live site
                <ArrowUpRight size="1rem" />
              </a>

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="
                  inline-flex items-center gap-2
                  transition-colors hover:text-[#ff7137]
                "
              >
                Source code
                <ArrowUpRight size="1rem" />
              </a>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}