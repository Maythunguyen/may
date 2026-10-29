"use client";

import { useCallback, useRef, useState } from "react";
import { MotionConfig, useReducedMotion } from "motion/react";
import { projects } from "@/lib/content";
import { usePortfolioAnimations } from "@/hooks/use-portfolio-animations";
import SiteHeader from "./portfolio/site-header";
import HeroSection from "./portfolio/hero-section";
import IntroSection from "./portfolio/intro-section";
import WorkSection from "./portfolio/work-section";
import Marquee from "./portfolio/marquee";
import AboutSection from "./portfolio/about-section";
import ExperienceSection from "./portfolio/experience-section";
import PrinciplesSection from "./portfolio/principles-section";
import TestimonialsSection from "./portfolio/testimonials-section";
import ContactSection from "./portfolio/contact-section";
import SiteFooter from "./portfolio/site-footer";
import ProjectDialog from "./portfolio/project-dialog";

export default function Portfolio() {
  const root = useRef<HTMLDivElement>(null);
  const reducedMotion = Boolean(useReducedMotion());
  const [paused, setPaused] = useState(false);
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const still = reducedMotion || paused;
  const selected = activeProject === null ? null : projects[activeProject] ?? null;
  const closeProject = useCallback(() => setActiveProject(null), []);

  usePortfolioAnimations(root, still);

  return (
    <MotionConfig reducedMotion="user">
      <div ref={root} className={still ? "portfolio motion-paused" : "portfolio"}>
        <a className="skip-link" href="#main">Skip to content</a>
        <SiteHeader still={still} />
        <main id="main">
          <HeroSection
            paused={paused}
            reducedMotion={reducedMotion}
            onToggleMotion={() => setPaused((value) => !value)}
          />
          <IntroSection />
          <WorkSection onSelect={setActiveProject} />
          <Marquee />
          <AboutSection still={still} />
          <ExperienceSection />
          <PrinciplesSection />
          <TestimonialsSection still={still} />
          <ContactSection />
        </main>
        <SiteFooter />
        <ProjectDialog project={selected} onClose={closeProject} />
      </div>
    </MotionConfig>
  );
}
