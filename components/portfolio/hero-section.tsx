"use client";

import { profile } from "@/lib/content";
import { ArrowDown, Star, Play, Pause } from "@/components/icons";

type HeroSectionProps = {
  paused: boolean;
  reducedMotion: boolean;
  onToggleMotion: () => void;
};

export default function HeroSection({ paused, reducedMotion: reduced, onToggleMotion }: HeroSectionProps) {

  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div className="hero-top hero-meta">
        <span className="eyebrow">
          SOFTWARE ENGINEER & CREATIVE BUILDER
        </span>
        <span className="location">
          <span className="status-dot" /> SYDNEY, AUSTRALIA
        </span>
      </div>
      <div className="hero-image">
        <img
          src={profile.heroImage}
          alt={profile.heroImageAlt}
          fetchPriority="high"
        />
      </div>
      <div className="hero-shade" />
      <h1 id="hero-title" className="hero-name" aria-label="May Thu Nguyen">
        May Thu <span className="orange"><Star size="0.8em" /></span> Nguyen
      </h1>
      <div className="hero-bottom hero-meta">
        <a className="round-link" href="#work">
          <span className="circle-arrow"><ArrowDown /></span>
          <span>
            SCROLL TO EXPLORE
            <br />
            <span className="muted">SELECTED WORK BELOW</span>
          </span>
        </a>
        <div className="hero-description text-xs sm:text-md">
          Thoughtful interfaces.
          <br />
          Dependable systems.
          <br />
          <span className="muted text-xs md:text-md">Built with a human in mind.</span>
        </div>
      </div>
      <div className="hero-foot hero-meta">
        <span>CODE WITH PURPOSE. CREATE WITH CARE.</span>
        <button
          className="motion-toggle"
          onClick={onToggleMotion}
          aria-pressed={paused}
          disabled={Boolean(reduced)}
        >
          {reduced
            ? "REDUCED MOTION"
            : paused
              ? <>PLAY MOTION <Play /></>
              : <>PAUSE MOTION <Pause /></>}
        </button>
      </div>
    </section>
  );
}
