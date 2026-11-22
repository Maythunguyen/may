"use client";

import { useEffect, useId, useRef, useState } from "react";

type Certification = {
  title: string;
  issuer: string;
  category: string;
  href?: string;
};

// Add href to each certificate when you have its verification link.
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
    <div
      role="listitem"
      className="
        flex min-w-0 flex-col
        rounded-2xl border border-white/15
        bg-[#111111] p-5
        transition-colors duration-300
        hover:border-[#ff7137]/40
        focus-within:border-[#ff7137]/40
        sm:w-[320px] sm:flex-none sm:p-8
      "
    >
      <p className="m-0 text-[10px] uppercase leading-5 tracking-[0.16em] text-[#ff7137]">
        {certification.category}
      </p>

      <h3 className="mb-0 mt-3 text-lg font-medium leading-snug tracking-tight text-[#f4f1ec] sm:mt-7 sm:text-xl">
        {certification.title}
      </h3>

      <p className="mb-0 mt-2 text-sm leading-6 text-white/55 sm:mt-3">
        {certification.issuer}
      </p>

      {certification.href ? (
        <div className="mt-auto pt-4 sm:pt-7">
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
        </div>
      ) : (
        <div className="mt-auto hidden pt-7 sm:block">
          <span
            aria-hidden="true"
            className="block h-px w-8 bg-[#ff7137]/70"
          />
        </div>
      )}
    </div>
  );
}

export default function CertificationsSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const titleId = useId();
  const trackId = useId();

  const [canPrevious, setCanPrevious] = useState(false);
  const [canNext, setCanNext] = useState(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    function updateControls() {
      if (!track) return;

      const maximumScroll = track.scrollWidth - track.clientWidth;

      setCanPrevious(track.scrollLeft > 2);
      setCanNext(track.scrollLeft < maximumScroll - 2);
    }

    updateControls();

    const observer = new ResizeObserver(updateControls);

    observer.observe(track);

    for (const child of track.children) {
      observer.observe(child);
    }

    track.addEventListener("scroll", updateControls, {
      passive: true,
    });

    return () => {
      observer.disconnect();
      track.removeEventListener("scroll", updateControls);
    };
  }, []);

  function move(direction: -1 | 1) {
    const track = trackRef.current;
    if (!track) return;

    const maxScroll = Math.max(
      0,
      track.scrollWidth - track.clientWidth,
    );

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    track.scrollTo({
      left: direction === 1 ? maxScroll : 0,
      behavior: reducedMotion ? "instant" : "smooth",
    });
  }
  const arrowClass = `
    grid size-11 shrink-0 place-items-center rounded-full
    border border-white/20 text-xl text-[#f4f1ec]
    transition-colors
    hover:border-[#ff7137] hover:text-[#ff7137]
    disabled:cursor-default disabled:opacity-25
    disabled:hover:border-white/20
    disabled:hover:text-[#f4f1ec]
    focus-visible:outline focus-visible:outline-2
    focus-visible:outline-offset-4
    focus-visible:outline-[#ff7137]
  `;

  return (
    <section
      id="certifications"
      aria-labelledby={titleId}
      className="w-full min-w-0 py-12 sm:py-16"
    >
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-16">
        <p className="m-0 text-xs uppercase tracking-[0.18em] text-[#ff7137]">
          Certifications
        </p>

        <div className="mb-6 mt-5 flex items-end justify-between gap-6 sm:mb-8">
          <div className="min-w-0">
            <h2
              id={titleId}
              className="m-0 text-3xl font-medium leading-tight tracking-tight text-[#f4f1ec] sm:text-4xl"
            >
              Always learning.
            </h2>

            <p className="mb-0 mt-3 max-w-lg text-sm leading-7 text-white/60">
              Learning across software development, AI, and design.
            </p>
          </div>

          <div className="hidden shrink-0 gap-2 sm:flex">
            <button
              type="button"
              onClick={() => move(-1)}
              disabled={!canPrevious}
              aria-label="Previous certificates"
              aria-controls={trackId}
              className={arrowClass}
            >
              <span aria-hidden="true">←</span>
            </button>

            <button
              type="button"
              onClick={() => move(1)}
              disabled={!canNext}
              aria-label="Next certificates"
              aria-controls={trackId}
              className={arrowClass}
            >
              <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>

        <div
          ref={trackRef}
          id={trackId}
          role="list"
          aria-label="Certificates"
          tabIndex={0}
          className="
            grid w-full min-w-0 grid-cols-1 gap-3
            sm:flex sm:items-stretch sm:gap-4
            sm:overflow-x-auto sm:overscroll-x-contain
            sm:pb-4
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
            <CertificationCard
              key={certification.title}
              certification={certification}
            />
          ))}
        </div>

        <p className="mb-0 mt-3 hidden text-xs leading-6 text-white/40 sm:block">
          Scroll or use the arrows to explore.
        </p>
      </div>
    </section>
  );
}