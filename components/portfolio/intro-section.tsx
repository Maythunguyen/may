"use client";

import { profile } from "@/lib/content";
import { Arrow, SectionLabel as Label } from "./shared";

export default function IntroSection() {

  return (
    <section className="intro section" id="intro">
      <Label number="01 / INTRO">A LITTLE INTRODUCTION</Label>
      <div className="offset-content">
        <h2 data-reveal>
          I turn <em>curiosity</em>
          <br />
          into things
          <br />
          that work<span className="orange">.</span>
        </h2>
        <div className="intro-copy" data-reveal>
          <p>{profile.intro}</p>
          <p className="muted">
            I’m a Sydney-based software engineer working across React,
            Next.js, Python, and AI-powered experiences. I like clear
            code, useful products, and understanding the why behind the
            build.
          </p>
          <a className="text-link" href="#about">
            A little more about me <Arrow />
          </a>
        </div>
      </div>
    </section>
  );
}
