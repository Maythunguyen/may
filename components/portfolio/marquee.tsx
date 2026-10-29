"use client";

import { Star } from "@/components/icons";

export default function Marquee() {

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        STAY CURIOUS <span><Star size="0.8em" /></span> KEEP BUILDING <span><Star size="0.8em" /></span> STAY
        CURIOUS <span><Star size="0.8em" /></span> KEEP BUILDING
      </div>
    </div>
  );
}
