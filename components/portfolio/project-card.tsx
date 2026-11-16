"use client";

import { ArrowUpRight } from "@/components/icons";
import type { Project } from "@/lib/portfolio-types";
import ProjectStory from "@/components/portfolio/project-story";

type ProjectCardProps = {
  project: Project;
  onSelect: () => void;
};

const mayRoarResources = [
  {
    label: "Figma designs",
    href: "https://www.figma.com/design/pwvNqcXqkhOmnhrAU9wMiP/MayRoar?node-id=0-1",
  },
  {
    label: "System design",
    href: "https://www.figma.com/design/pwvNqcXqkhOmnhrAU9wMiP/MayRoar?node-id=152-448",
  },
  {
    label: "AFCD analysis",
    href: "https://colab.research.google.com/drive/1HHYbzpeq73ACe3YkEXFovQwxgc0ix9KC?usp=sharing",
  },
  {
    label: "Open Food Facts analysis",
    href: "https://colab.research.google.com/drive/1rgEbnFOxYIMc5cR-oiltX06dIDAZ4ysb?usp=sharing",
  },
];

const focusClass =
  "focus-visible:outline focus-visible:outline-2 " +
  "focus-visible:outline-offset-4 focus-visible:outline-[#ff7137]";

function ExternalLink({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        inline-flex min-h-11 min-w-0 items-center gap-2
        rounded-sm text-sm leading-5 text-white/70
        transition-colors hover:text-[#ff7137]
        ${focusClass}
      `}
    >
      <span>{label}</span>
      <span aria-hidden="true" className="shrink-0">
        <ArrowUpRight size="1rem" />
      </span>
    </a>
  );
}

function ProjectThumbnail({
  project,
  onSelect,
}: ProjectCardProps) {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-label={`Read about ${project.title}`}
      className={`
        group relative block aspect-[4/3] w-full min-w-0
        overflow-hidden rounded-2xl bg-neutral-900 text-left
        ${focusClass}
      `}
    >
      <img
        src={project.image}
        alt={`${project.title} project preview`}
        loading="lazy"
        className="
          absolute inset-0 h-full w-full object-cover object-top
          transition-transform duration-500
          motion-safe:group-hover:scale-105
        "
      />

      <span
        className="
          absolute left-4 top-4 rounded-full bg-black/70
          px-3 py-2 text-xs tracking-widest text-white
        "
      >
        {project.number} / SELECTED PROJECT
      </span>

      <span
        aria-hidden="true"
        className="
          absolute bottom-4 right-4 grid size-12
          place-items-center rounded-full bg-[#f4f1ec]
          text-neutral-950 transition-colors
          group-hover:bg-[#ff7137]
        "
      >
        <ArrowUpRight size="1.5rem" />
      </span>
    </button>
  );
}

function MayRoarResources() {
  return (
    <div className="mt-5 border-t border-white/10 pt-4">
      <p className="m-0 text-xs uppercase tracking-[0.16em] text-white/45">
        Explore the build
      </p>

      <div className="mt-2 grid grid-cols-1 gap-x-5 sm:grid-cols-2">
        {mayRoarResources.map((resource) => (
          <ExternalLink
            key={resource.href}
            href={resource.href}
            label={resource.label}
          />
        ))}
      </div>
    </div>
  );
}

function MayRoarDemoNote() {
  return (
    <div className="mt-4 border-l-2 border-[#ff7137]/50 pl-3">
      <p className="m-0 text-xs leading-5 text-white/55">
        <span className="font-medium text-[#ff7137]">
          Designed for mobile.
        </span>{" "}
        Browser demo for testing features; layout may differ.
      </p>

      <details className="mt-1 text-xs text-white/65">
        <summary
          className={`
            w-fit cursor-pointer rounded-sm py-2
            transition-colors hover:text-[#ff7137]
            ${focusClass}
          `}
        >
          Demo login details
        </summary>

        <dl className="m-0 space-y-1 pb-2 leading-6">
          <div className="flex flex-wrap gap-x-2">
            <dt className="text-white/45">Email:</dt>
            <dd className="m-0 break-all">
              demo@email.com
            </dd>
          </div>

          <div className="flex flex-wrap gap-x-2">
            <dt className="text-white/45">Password:</dt>
            <dd className="m-0">Demo@12345678</dd>
          </div>
        </dl>
      </details>
    </div>
  );
}

export default function ProjectCard({
  project,
  onSelect,
}: ProjectCardProps) {
  const isMayRoar = project.id === "may-roar";

  return (
    <article
      data-reveal
      className="
        grid min-w-0 grid-cols-1 items-center gap-7
        overflow-hidden rounded-3xl border border-white/20
        bg-white/[0.02] p-5 transition-colors duration-300
        hover:border-white/35 focus-within:border-white/35
        sm:gap-8 sm:p-8
        lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]
        lg:gap-10 xl:gap-12
      "
    >
      <ProjectThumbnail project={project} onSelect={onSelect} />

      <div className="min-w-0">
        <p className="m-0 text-xs uppercase tracking-widest text-white/55">
          {project.category}
        </p>

        <h3 className="mb-0 mt-4 text-3xl font-medium tracking-tight sm:text-4xl">
          <button
            type="button"
            onClick={onSelect}
            className={`
              inline-flex max-w-full items-center gap-4
              rounded-sm text-left
              ${focusClass}
            `}
          >
            <span className="min-w-0 break-words">
              {project.title}
            </span>

            <span
              aria-hidden="true"
              className="shrink-0 text-[#ff7137]"
            >
              <ArrowUpRight size="1.5rem" />
            </span>
          </button>
        </h3>

        <p className="mb-0 mt-4 max-w-prose text-sm leading-7 text-white/65">
          {project.description}
        </p>

        <ul className="mb-0 mt-5 flex list-none flex-wrap gap-2 p-0">
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

        {isMayRoar && <MayRoarResources />}

        <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-1">
          {isMayRoar && (
            <button
              type="button"
              onClick={onSelect}
              className={`
                inline-flex min-h-11 items-center gap-2
                rounded-sm text-sm font-medium text-[#ff7137]
                transition-colors hover:text-white
                ${focusClass}
              `}
            >
              Read project story
              <span aria-hidden="true">
                <ArrowUpRight size="1rem" />
              </span>
            </button>
          )}

          <ExternalLink
            href={project.live}
            label={isMayRoar ? "Try browser demo" : "Live site"}
          />

          <ExternalLink
            href={project.github}
            label="Source code"
          />
        </div>

        {isMayRoar && <MayRoarDemoNote />}
      </div>
    </article>
  );
}