"use client";

import { useId, useRef } from "react";
import { SectionLabel } from "./shared";

type Certification = {
  title: string;
  issuer: string;
  category: string;
  href?: string;
};

// Add a verification URL to href when available.
const certifications: Certification[] = [
  {
    title: "JavaScript Data Structures & Algorithms",
    issuer: "Udemy",
    category: "Development",
  },
  {
    title: "Multi AI Agent Systems",
    issuer: "CrewAI · DeepLearning.AI",
    category: "Artificial intelligence",
  },
  {
    title: "Generative AI for Everyone",
    issuer: "DeepLearning.AI",
    category: "Artificial intelligence",
  },
  {
    title: "Foundation of User Experience (UX) Design",
    issuer: "Google",
    category: "User experience",
  },
  {
    title: "UI Designer",
    issuer: "Mir Design",
    category: "Interface design",
  },
];

function CertificationCard({
  certification,
}: {
  certification: Certification;
}) {
  return (
    <article
      className="
        group flex h-full min-h-[18rem] flex-col
        rounded-[1.25rem] border border-white/15
        bg-[#111111] p-6
        transition-colors duration-300
        hover:border-[#ff7137]/40
        focus-within:border-[#ff7137]/40
        sm:p-8
      "
    >
      <div className="flex items-start justify-between gap-4">
        <p className="m-0 text-[0.65rem] uppercase leading-5 tracking-[0.16em] text-[#ff7137]">
          {certification.category}
        </p>

        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="size-6 shrink-0 text-white/35"
        >
          <rect x="3" y="4" width="18" height="13" rx="2" />
          <path d="M7 8h10M7 12h5" />
          <path d="m15 17-1 4 3-1 3 1-1-4" />
        </svg>
      </div>

      <h3 className="mb-0 mt-8 text-xl font-medium leading-snug tracking-tight text-[#f4f1ec] sm:text-2xl">
        {certification.title}
      </h3>

      <p className="mb-0 mt-3 text-sm leading-6 text-white/55">
        {certification.issuer}
      </p>

      <div className="mt-auto pt-7">
        {certification.href ? (
          <a
            href={certification.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View certificate: ${certification.title}`}
            className="
              inline-flex min-h-11 items-center gap-2
              rounded-sm text-sm text-[#ff7137]
              transition-colors hover:text-white
              focus-visible:outline focus-visible:outline-2
              focus-visible:outline-offset-4
              focus-visible:outline-[#ff7137]
            "
          >
            View certificate
            <span aria-hidden="true">↗</span>
          </a>
        ) : (
          <span
            aria-hidden="true"
            className="block h-px w-8 bg-[#ff7137]/70"
          />
        )}
      </div>
    </article>
  );
}

export default function CertificationsSection() {
  const trackRef = useRef<HTMLUListElement>(null);
  const trackId = useId();
  const titleId = useId();

  function scrollCards(direction: "previous" | "next") {
    const track = trackRef.current;
    const firstCard = track?.firstElementChild;

    if (!track || !(firstCard instanceof HTMLElement)) return;

    const gap = Number.parseFloat(
      window.getComputedStyle(track).columnGap,
    ) || 0;

    const distance = firstCard.getBoundingClientRect().width + gap;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    track.scrollBy({
      left: direction === "next" ? distance : -distance,
      behavior: reduceMotion ? "instant" : "smooth",
    });
  }

  return (
    <section
      id="certifications"
      className="section min-w-0"
      aria-labelledby={titleId}
    >
      <SectionLabel number="06 / LEARNING">
        CERTIFICATIONS
      </SectionLabel>

      <div className="mb-7 flex flex-wrap items-end justify-between gap-5 sm:mb-9">
        <div>
          <h2
            id={titleId}
            className="
              m-0 text-3xl font-medium leading-tight
              tracking-tight text-[#f4f1ec] sm:text-4xl
            "
          >
            Always learning.
          </h2>

          <p className="mb-0 mt-3 max-w-lg text-sm leading-7 text-white/60">
            Learning across software development, AI, and design.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => scrollCards("previous")}
            aria-label="Scroll to previous certificates"
            aria-controls={trackId}
            className="
              grid size-11 place-items-center rounded-full
              border border-white/20 text-xl text-[#f4f1ec]
              transition-colors
              hover:border-[#ff7137] hover:text-[#ff7137]
              focus-visible:outline focus-visible:outline-2
              focus-visible:outline-offset-4
              focus-visible:outline-[#ff7137]
            "
          >
            <span aria-hidden="true">←</span>
          </button>

          <button
            type="button"
            onClick={() => scrollCards("next")}
            aria-label="Scroll to next certificates"
            aria-controls={trackId}
            className="
              grid size-11 place-items-center rounded-full
              border border-white/20 text-xl text-[#f4f1ec]
              transition-colors
              hover:border-[#ff7137] hover:text-[#ff7137]
              focus-visible:outline focus-visible:outline-2
              focus-visible:outline-offset-4
              focus-visible:outline-[#ff7137]
            "
          >
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>

      <ul
        ref={trackRef}
        id={trackId}
        tabIndex={0}
        aria-label="Certificates — scroll horizontally to explore"
        className="
          m-0 flex w-full min-w-0 snap-x snap-mandatory
          list-none gap-5 overflow-x-auto overscroll-x-contain
          rounded-xl p-0 pb-5
          focus-visible:outline focus-visible:outline-2
          focus-visible:outline-offset-4
          focus-visible:outline-[#ff7137]
        "
        style={{
          scrollbarWidth: "thin",
          scrollbarColor: "#ff7137 #202020",
        }}
      >
        {certifications.map((certification) => (
          <li
            key={certification.title}
            className="
              w-[85%] shrink-0 snap-start
              sm:w-[calc((100%-1.25rem)/2)]
              lg:w-[calc((100%-2.5rem)/3)]
            "
          >
            <CertificationCard certification={certification} />
          </li>
        ))}
      </ul>

      <p className="mb-0 mt-3 text-xs leading-6 text-white/40">
        Swipe or use the arrows to explore.
      </p>
    </section>
  );
}