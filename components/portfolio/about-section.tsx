"use client";

import dynamic from "next/dynamic";
import { ArrowUpRight } from "@/components/icons";
import Toolkit from "./toolkit";
import { SectionLabel as Label } from "./shared";

const Scene = dynamic(() => import("@/components/scene"), { ssr: false });

export default function AboutSection({ still }: { still: boolean }) {

  return (
    <section className="about section" id="about">
      <Label number="03 / ABOUT">THE HUMAN BEHIND THE CODE</Label>
      <div className="about-grid">
        <div className="portrait" data-reveal>
          <img
            src="/pf.webp"
            alt="May Thu Nguyen"
            width="800"
            height="1000"
            loading="lazy"
          />
          <div className="portrait-caption">
            <span>MAY, IN REAL LIFE.</span>
            <span>SYDNEY <ArrowUpRight /></span>
          </div>
        </div>
        <div className="about-content">
          <h2 data-reveal>
            Always learning.
            <br />
            Always <em>building.</em>
          </h2>
          <p data-reveal>
            I’m May, a software engineer who enjoys connecting the dots
            between design, code, and real-world problems.
          </p>
          <p className="muted" data-reveal>
            My experience spans booking platforms, healthcare interfaces,
            and localisation. I’m developing my craft through team
            projects, hands-on experimentation, and feedback from the
            people I work with.
          </p>
          <dl className="about-facts" data-reveal>
            <div>
              <dt>BASED IN</dt>
              <dd>Sydney, Australia</dd>
            </div>
            <div>
              <dt>EDUCATION</dt>
              <dd>
                Bachelor of Information Technology
                <br />
                <span className="muted">
                  Kaplan Business School · 2026
                </span>
              </dd>
            </div>
            <div>
              <dt>MY APPROACH</dt>
              <dd>
                Understand the problem.
                <br />
                Build the simplest useful solution.
                <br />
                Test, learn, improve.
              </dd>
            </div>
          </dl>
        </div>
      </div>
      <div className="motion-study" data-reveal>
      </div>
      <div >
        <div>
          <Toolkit />
        </div>
      </div>
    </section>
  );
}
