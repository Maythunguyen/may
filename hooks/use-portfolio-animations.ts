"use client";

import { useEffect, type RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/** data-reveal opts a mounted element into the shared scroll reveal. */
export function usePortfolioAnimations(
  root: RefObject<HTMLDivElement | null>,
  still: boolean,
) {
  useEffect(() => {
    if (still) return;
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const name = root.current?.querySelector<HTMLElement>(".hero-name");
      const hero = root.current?.querySelector<HTMLElement>(".hero");

      if (name && hero) {
        gsap.fromTo(
          name,
          {
            x: () => hero.clientWidth * 0.04,
          },
          {
            x: () =>
              -Math.max(
                0,
                name.scrollWidth - hero.clientWidth * 0.96,
              ),
            duration: 20,
            repeat: -1,
            yoyo: true,
            repeatRefresh: true,
            ease: "sine.inOut",
          },
        );
      }
      gsap.from(".hero-meta", {
        opacity: 0,
        y: 20,
        duration: 0.8,
        delay: 0.45,
      });
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
        gsap.from(el, {
          y: 45,
          opacity: 0,
          duration: 0.85,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 92%", once: true },
        });
      });
      gsap.to(".marquee-track", {
        xPercent: -22,
        ease: "none",
        scrollTrigger: {
          trigger: ".marquee",
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
      gsap.to(".hero-image", {
        yPercent: 15,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });
    }, root);
    return () => ctx.revert();
  }, [root, still]);
}
