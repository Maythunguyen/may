"use client";

import { useEffect, useRef, useState } from "react";
import { profile } from "@/lib/content";
import { ArrowUpRight, Check } from "@/components/icons";
import { Arrow, SectionLabel as Label } from "./shared";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const copyTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const mounted = useRef(false);

  useEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
      if (copyTimer.current) clearTimeout(copyTimer.current);
    };
  }, []);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      if (!mounted.current) return;
      setCopied(true);
      if (copyTimer.current) clearTimeout(copyTimer.current);
      copyTimer.current = setTimeout(() => setCopied(false), 2200);
    } catch {
      if (mounted.current) window.location.href = `mailto:${profile.email}`;
    }
  }

  return (
    <section className="contact section" id="contact">
      <Label number="07 / SAY HELLO">HAVE SOMETHING IN MIND?</Label>
      <div className="contact-top" data-reveal>
        <p>
          For opportunities, collaborations,
          <br />
          or a good conversation.
        </p>
        <a
          className="contact-arrow"
          href={`mailto:${profile.email}`}
          aria-label="Email May"
        >
          <Arrow />
        </a>
      </div>
      <h2 data-reveal>
        <a href={`mailto:${profile.email}`}>
          Let’s build
          <br />
          <em>something.</em>
        </a>
      </h2>
      <div className="contact-details">
        <a href={`mailto:${profile.email}`}>{profile.email}</a>
        <button onClick={copyEmail} aria-live="polite">
          {copied ? <>COPIED <Check /></> : <>COPY EMAIL <ArrowUpRight /></>}
        </button>
        <div>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            LINKEDIN <ArrowUpRight />
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer">
            GITHUB <ArrowUpRight />
          </a>
        </div>
      </div>
    </section>
  );
}
