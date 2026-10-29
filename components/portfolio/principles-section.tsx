"use client";

import { principles } from "@/lib/portfolio-content";
import { SectionLabel } from "./shared";

export default function PrinciplesSection() {
  return (
    <section
      id="principles"
      className="section"
      aria-labelledby="principles-title"
    >
      <SectionLabel number="05 / PRINCIPLES">
        PRINCIPLES & VALUES
      </SectionLabel>

      <h2 id="principles-title" className="sr-only">
        Principles and values
      </h2>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {principles.map((principle, index) => {
          const number = String(index + 1).padStart(2, "0");

          return (
            <article
              key={principle.title}
              data-reveal
              className="
                group relative isolate flex
                min-h-[18rem] flex-col overflow-hidden
                rounded-[1.25rem]
                border-[0.0625rem] border-white/15
                bg-[#111111] p-6
                transition-colors duration-300
                hover:border-[#ff7137]/40
                sm:p-8 lg:p-10
              "
            >
              {/* Decorative background number */}
              <span
                aria-hidden="true"
                className="
                  pointer-events-none absolute
                  right-4 top-0 z-0 select-none
                  text-[9rem] font-semibold
                  leading-none tracking-[-0.08em]
                  text-white/[0.035]
                  transition-colors duration-300
                  group-hover:text-[#ff7137]/[0.07]
                  lg:text-[11rem]
                "
              >
                {number}
              </span>

              <div className="relative z-10">
                <span
                  className="
                    text-xs font-medium
                    tracking-[0.15em] text-[#ff7137]
                  "
                >
                  {number}
                </span>

                <h3
                  className="
                    mt-5 text-2xl font-medium
                    leading-tight tracking-tight
                    text-[#f4f1ec] lg:text-3xl
                  "
                >
                  {principle.title}
                </h3>
              </div>

              <div className="relative z-10 mt-auto pt-10">
                <p className="max-w-[48ch] text-sm leading-7 text-white/65">
                  {principle.body}
                </p>

                <span
                  aria-hidden="true"
                  className="
                    mt-6 block h-[0.0625rem]
                    w-8 bg-[#ff7137]/70
                  "
                />
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}