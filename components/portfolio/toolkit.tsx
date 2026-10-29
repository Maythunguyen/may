"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";

const skillGroups = [
  {
    title: "interfaces",
    label: "01 / FRONTEND",
    description: "Turning ideas into clear, responsive experiences.",
    tools: ["TypeScript", "JavaScript", "React", "Next.js"],
  },
  {
    title: "systems",
    label: "02 / BACKEND",
    description: "Connecting interfaces, APIs, and application logic.",
    tools: ["Python", "FastAPI", "Node.js", "AL/ML", "Ruby on Rails"],
  },
  {
    title: "data",
    label: "03 / DATABASES",
    description: "Giving information structure and a useful place to live.",
    tools: ["PostgreSQL", "Supabase", "MongoDB"],
  },
  {
    title: "motion",
    label: "04 / INTERACTION",
    description: "Making interactions feel responsive and considered.",
    tools: ["Three.js", "GSAP"],
  },
];

type SkillGroup = (typeof skillGroups)[number];

type ToolkitProps = {
  still?: boolean;
};

function getActiveIndex(progress: number) {
  return Math.max(
    0,
    Math.min(
      skillGroups.length - 1,
      Math.round(progress * (skillGroups.length - 1)),
    ),
  );
}

function ToolTags({ tools }: { tools: string[] }) {
  return (
    <ul className="m-0 flex list-none flex-wrap justify-center gap-2 p-0">
      {tools.map((tool) => (
        <li
          key={tool}
          className="
            rounded-full border border-[#ff7137]/30
            bg-[#ff7137]/5 px-3 py-2
            text-xs leading-normal text-[#f4f1ec]
            sm:px-4 sm:text-sm
          "
        >
          {tool}
        </li>
      ))}
    </ul>
  );
}

function SkillSlide({ group }: { group: SkillGroup }) {
  return (
    <div
      className="
        relative z-10 flex w-full min-w-0
        flex-col items-center justify-center
        px-5 py-8 text-center sm:px-8
      "
    >
      <p className="mb-6 text-xs tracking-[0.22em] text-white/50">
        {group.label}
      </p>

      {/* Only this title animates. Tool labels stay fully sharp. */}
      <motion.h3
        key={group.title}
        initial={{ y: 12 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="
          m-0 text-[clamp(2.25rem,10vw,11rem)]
          font-medium leading-none tracking-[-0.065em]
          text-[#ff7137]
        "
      >
        {group.title}
      </motion.h3>

      <p
        className="
          mb-7 mt-6 max-w-sm
          text-sm leading-6 text-white/65 sm:mt-8
        "
      >
        {group.description}
      </p>

      <ToolTags tools={group.tools} />
    </div>
  );
}

function StaticToolkit() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {skillGroups.map((group) => (
        <article
          key={group.title}
          className="
            min-w-0 rounded-3xl border border-white/10
            bg-white/[0.02] px-5 py-10 text-center
            sm:px-8
          "
        >
          <p className="text-xs tracking-[0.2em] text-white/50">
            {group.label}
          </p>

          <h3
            className="
              mt-6 text-[clamp(2rem,6vw,3rem)]
              font-medium tracking-tight text-[#ff7137]
            "
          >
            {group.title}
          </h3>

          <p className="mb-6 mt-4 text-sm leading-6 text-white/65">
            {group.description}
          </p>

          <ToolTags tools={group.tools} />
        </article>
      ))}
    </div>
  );
}

function ScrollingToolkit() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [-25, 155]);

  const counterRotate = useTransform(
    scrollYProgress,
    [0, 1],
    [25, -100],
  );

  useEffect(() => {
    setActiveIndex(getActiveIndex(scrollYProgress.get()));
  }, [scrollYProgress]);

  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    setActiveIndex(getActiveIndex(progress));
  });

  function goToGroup(index: number) {
    const section = sectionRef.current;
    if (!section) return;

    const sectionTop =
      section.getBoundingClientRect().top + window.scrollY;

    const viewportHeight = document.documentElement.clientHeight;

    const scrollDistance = Math.max(
      0,
      section.offsetHeight - viewportHeight,
    );

    const fraction = index / (skillGroups.length - 1);

    window.scrollTo({
      top: sectionTop + scrollDistance * fraction,
      behavior: "smooth",
    });
  }

  return (
    <div ref={sectionRef} className="relative h-[320svh]">
      <div
        className="
          sticky top-0 isolate flex h-[100svh]
            flex-col overflow-hidden bg-transparent
        "
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(255,113,55,0.09), transparent 65%)",
          }}
        />

        <header
          className="
            flex shrink-0 flex-wrap items-center
            justify-between gap-x-4 gap-y-2
            px-5 py-5 sm:px-10 sm:py-7
          "
        >
          <h2
            className="
              text-[0.625rem] font-medium uppercase
              tracking-[0.2em] text-[#ff7137] sm:text-xs
            "
          >
            Tools I build with
          </h2>

          <span className="text-[0.625rem] text-white/45 sm:text-xs">
            Scroll to explore
          </span>
        </header>

        <div className="relative flex min-h-0 flex-1">
          <div
            aria-hidden="true"
            className="
              pointer-events-none absolute inset-0
              flex items-center justify-center overflow-hidden
            "
          >
            <motion.div
              style={{ rotate }}
              className="
                absolute h-[65%] w-[min(75%,35rem)]
                rounded-[50%] border border-[#ff7137]/15
              "
            />

            <motion.div
              style={{ rotate: counterRotate }}
              className="
                absolute h-[40%] w-[min(90%,48rem)]
                rounded-[50%] border border-[#ff7137]/10
              "
            />
          </div>

          {/* One visible group at a time prevents overlapping slides. */}
          <div
            aria-hidden="true"
            className="
              relative z-10 flex min-h-0 w-full
              items-center overflow-y-auto
            "
          >
            <SkillSlide group={skillGroups[activeIndex]} />
          </div>
        </div>

        <footer className="shrink-0 px-4 pb-2 pt-4 sm:px-10">
          <nav
            aria-label="Explore skill categories"
            className="mb-0 grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3"
          >
            {skillGroups.map((group, index) => {
              const isActive = index === activeIndex;

              return (
                <button
                  key={group.title}
                  type="button"
                  onClick={() => goToGroup(index)}
                  aria-current={isActive ? "step" : undefined}
                  className={`
                    flex min-h-12 min-w-0
                    items-center justify-center
                    rounded-2xl px-3 py-3
                    text-[0.8125rem] font-medium
                    capitalize tracking-normal
                    transition-colors
                    active:bg-[#ff7137]/15
                    focus-visible:outline
                    focus-visible:outline-2
                    focus-visible:outline-offset-2
                    focus-visible:outline-[#ff7137]
                    sm:text-sm
                    ${
                      isActive
                        ? "bg-[#ff7137]/10 text-[#ff7137]"
                        : "bg-white/[0.03] text-white/70 hover:text-[#ff7137]"
                    }
                  `}
                >
                  {group.title}
                </button>
              );
            })}
          </nav>

          <div
            aria-hidden="true"
            className="h-px overflow-hidden bg-white/15"
          >
            <motion.div
              style={{
                scaleX: scrollYProgress,
                transformOrigin: "left",
              }}
              className="h-full bg-[#ff7137]"
            />
          </div>
        </footer>
      </div>

      {/* Complete skill list for screen readers. */}
      <div className="sr-only">
        {skillGroups.map((group) => (
          <div key={group.title}>
            <h3>{group.title}</h3>
            <p>{group.description}</p>

            <ul>
              {group.tools.map((tool) => (
                <li key={tool}>{tool}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Toolkit({ still = false }: ToolkitProps) {
  const reduceMotion = useReducedMotion();

  return (
    <section
      aria-label="My skills and toolkit"
      className="mt-16 min-w-0 text-[#f4f1ec]"
    >
      {still || reduceMotion ? (
        <StaticToolkit />
      ) : (
        <ScrollingToolkit />
      )}
    </section>
  );
}