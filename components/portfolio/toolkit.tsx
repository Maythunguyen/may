"use client";

import { motion, useReducedMotion } from "motion/react";

type ToolkitProps = {
  still?: boolean;
};

type SkillCardData = {
  number: string;
  abbreviation: string;
  title: string;
  description: string;
  tools: string[];
  theme: "orange" | "white" | "charcoal" | "black";
};

const skillGroups: SkillCardData[] = [
  {
    number: "01",
    abbreviation: "FE",
    title: "Frontend",
    description:
      "Building thoughtful interfaces that feel clear and work across screen sizes.",
    tools: ["TypeScript", "JavaScript", "React", "Next.js"],
    theme: "orange",
  },
  {
    number: "02",
    abbreviation: "BE",
    title: "Backend",
    description:
      "Connecting interfaces to APIs, application logic, and the services behind them.",
    tools: ["Python", "FastAPI", "Node.js", "AI/ML"],
    theme: "white",
  },
  {
    number: "03",
    abbreviation: "DB",
    title: "Databases",
    description:
      "Organising application data so it can be stored, queried, and used reliably.",
    tools: ["PostgreSQL", "Supabase", "MongoDB"],
    theme: "charcoal",
  },
  {
    number: "04",
    abbreviation: "M&I",
    title: "Motion & interaction",
    description:
      "Adding purposeful animation and interactive details to the web.",
    tools: ["Three.js", "GSAP"],
    theme: "black",
  },
];

const themes = {
  orange: {
    card: "border-transparent bg-[#ff7137] text-[#17120f]",
    muted: "text-black/70",
    tag: "border-black/20 text-[#17120f]",
    decoration: "text-black/10",
  },
  white: {
    card: "border-transparent bg-[#f4f1ec] text-[#191919]",
    muted: "text-black/65",
    tag: "border-black/20 text-[#191919]",
    decoration: "text-black/[0.06]",
  },
  charcoal: {
    card: "border-white/10 bg-[#242424] text-[#f4f1ec]",
    muted: "text-white/65",
    tag: "border-white/20 text-[#f4f1ec]",
    decoration: "text-white/[0.05]",
  },
  black: {
    card: "border-white/25 bg-[#0c0c0c] text-[#f4f1ec]",
    muted: "text-white/65",
    tag: "border-white/20 text-[#f4f1ec]",
    decoration: "text-[#ff7137]/10",
  },
};

function SkillCard({
  group,
  still,
}: {
  group: SkillCardData;
  still: boolean;
}) {
  const theme = themes[group.theme];

  return (
    <motion.article
      whileHover={still ? undefined : { y: -4 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className={`
        relative isolate flex min-w-0 flex-col
        overflow-hidden rounded-[1.25rem] border
        p-6 sm:p-8 lg:p-10
        ${theme.card}
      `}
    >
      <div className="relative z-10 flex items-center justify-between gap-4">
        <span className="text-xs font-medium uppercase tracking-[0.18em]">
          {group.number} / Toolkit
        </span>

        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="size-6 opacity-60"
        >
          <path
            d="m8 6-6 6 6 6m8-12 6 6-6 6m-3-15-2 18"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <span
        aria-hidden="true"
        className={`
          pointer-events-none absolute right-5 top-12 -z-10
          select-none whitespace-nowrap
          text-[5rem] font-semibold leading-none
          tracking-[-0.07em]
          sm:text-[7rem] lg:text-[9rem]
          ${theme.decoration}
        `}
      >
        {group.abbreviation}
      </span>

      <div className="mt-16 sm:mt-24 lg:mt-28">
        <h3
          className="
            m-0 max-w-full text-[2rem]
            font-semibold leading-[1.08] tracking-[-0.045em]
            sm:text-[2.5rem] lg:text-[3rem]
          "
        >
          {group.title}
        </h3>

        <p
          className={`
            mb-0 mt-5 max-w-[24rem]
            text-sm leading-7
            ${theme.muted}
          `}
        >
          {group.description}
        </p>
      </div>

      <ul className="mb-0 mt-auto flex list-none flex-wrap gap-2 p-0 pt-7">
        {group.tools.map((tool) => (
          <li
            key={tool}
            className={`
              rounded-full border px-3 py-2
              text-xs font-medium leading-normal
              sm:text-sm
              ${theme.tag}
            `}
          >
            {tool}
          </li>
        ))}
      </ul>
    </motion.article>
  );
}

export default function Toolkit({ still = false }: ToolkitProps) {
  const reduceMotion = useReducedMotion();
  const motionOff = still || Boolean(reduceMotion);

  return (
    <section
      aria-labelledby="toolkit-heading"
      className="mt-12 min-w-0 bg-transparent sm:mt-16"
    >
      <header className="mb-6 sm:mb-8">
        <p className="mb-3 text-xs uppercase tracking-[0.2em] text-[#ff7137]">
          My toolkit
        </p>

        <h2
          id="toolkit-heading"
          className="
            m-0 text-3xl font-medium
            leading-tight tracking-tight
            text-[#f4f1ec] sm:text-4xl
          "
        >
          Tools I build with.
        </h2>
      </header>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-5">
        {skillGroups.map((group) => (
          <SkillCard
            key={group.title}
            group={group}
            still={motionOff}
          />
        ))}
      </div>
    </section>
  );
}