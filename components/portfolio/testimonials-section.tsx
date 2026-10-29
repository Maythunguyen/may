"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { testimonials } from "@/lib/content";
import type { Testimonial } from "@/lib/portfolio-types";
import { ArrowLeft, ArrowRight } from "@/components/icons";
import { SectionLabel } from "./shared";

type TestimonialsSectionProps = {
  still: boolean;
  items?: readonly Testimonial[];
};

export default function TestimonialsSection({ still, items = testimonials }: TestimonialsSectionProps) {
  const [quote, setQuote] = useState(0);
  const count = items.length;
  if (count === 0) return null;

  const index = quote % count;
  const selected = items[index];
  const navigate = (direction: number) => {
    setQuote((current) => (current % count + direction + count) % count);
  };

  return (
    <section className="testimonials section">
      <SectionLabel number="06 / KIND WORDS">FROM PEOPLE I’VE WORKED WITH</SectionLabel>
      <div className="quote-area">
        <span className="quote-symbol" aria-hidden="true">“</span>
        <AnimatePresence mode="wait">
          <motion.figure
            key={index}
            initial={still ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: still ? 0 : 0.25 }}
          >
            <blockquote>{selected.quote}</blockquote>
            <figcaption>
              <strong>{selected.name}</strong>
              <span>{selected.role}</span>
            </figcaption>
          </motion.figure>
        </AnimatePresence>
        <div className="quote-controls">
          <span aria-live="polite" aria-atomic="true">
            {String(index + 1).padStart(2, "0")} <span className="muted">/ {String(count).padStart(2, "0")}</span>
          </span>
          <button type="button" aria-label="Previous testimonial" disabled={count < 2} onClick={() => navigate(-1)}>
            <ArrowLeft />
          </button>
          <button type="button" aria-label="Next testimonial" disabled={count < 2} onClick={() => navigate(1)}>
            <ArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
}
