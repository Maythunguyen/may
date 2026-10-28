"use client";
import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import {
  AnimatePresence,
  MotionConfig,
  motion,
  useReducedMotion,
} from "motion/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  experience,
  moreProjects,
  profile,
  projects,
  testimonials,
} from "@/lib/content";
import ProjectCards from "./project-cards";

const Scene = dynamic(() => import("./scene"), { ssr: false });
const nav = [
  ["Work", "work"],
  ["About", "about"],
  ["Experience", "experience"],
  ["Contact", "contact"],
];
function Arrow() {
  return <span aria-hidden="true">↗</span>;
}
function Label({
  children,
  number,
}: {
  children: React.ReactNode;
  number: string;
}) {
  return (
    <div className="section-label">
      <span>
        <i />
        {children}
      </span>
      <span>{number}</span>
    </div>
  );
}

export default function Portfolio() {
  const root = useRef<HTMLDivElement>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const menuButton = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const [paused, setPaused] = useState(false);
  const [menu, setMenu] = useState(false);
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [quote, setQuote] = useState(0);
  const [copied, setCopied] = useState(false);
  const copyTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const still = Boolean(reduced) || paused;
  useEffect(
    () => () => {
      if (copyTimer.current) clearTimeout(copyTimer.current);
    },
    [],
  );
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
  }, [still]);
  useEffect(() => {
    if (activeProject !== null) {
      dialog.current?.showModal();
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeProject]);
  useEffect(() => {
    if (!menu) return;
    document.body.style.overflow = "hidden";
    const links = menuRef.current?.querySelectorAll<HTMLAnchorElement>("a");
    links?.[0]?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenu(false);
        menuButton.current?.focus();
      }
      if (e.key === "Tab" && links) {
        const first = menuButton.current,
          last = links[links.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first?.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [menu]);
  function closeProject() {
    dialog.current?.close();
    setActiveProject(null);
  }
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      if (copyTimer.current) clearTimeout(copyTimer.current);
      copyTimer.current = setTimeout(() => setCopied(false), 2200);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  }
  const selected = activeProject !== null ? projects[activeProject] : null;
  return (
    <MotionConfig reducedMotion="user">
      <div
        ref={root}
        className={still ? "portfolio motion-paused" : "portfolio"}
      >
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <header className="header">
          <a className="wordmark" href="#home" aria-label="May Thu Nguyen home">
            MAY THU NGUYEN<span className="orange">✳</span>
          </a>
          <nav className="desktop-nav" aria-label="Main navigation">
            {nav.map(([label, id]) => (
              <a key={id} href={`#${id}`}>
                {label}
              </a>
            ))}
          </nav>
          <button
            className="menu-toggle"
            ref={menuButton}
            onClick={() => setMenu(!menu)}
            aria-expanded={menu}
            aria-controls="mobile-menu"
          >
            {menu ? "Close −" : "Menu +"}
          </button>
        </header>
        <AnimatePresence>
          {menu && (
            <motion.div
              ref={menuRef}
              id="mobile-menu"
              className="mobile-menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: still ? 0 : 0.2 }}
            >
              <nav aria-label="Mobile navigation">
                {nav.map(([label, id], i) => (
                  <a key={id} href={`#${id}`} onClick={() => setMenu(false)}>
                    <small>0{i + 1}</small>
                    {label}
                    <Arrow />
                  </a>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
        <main id="main">
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
            <h1 id="hero-title" className="hero-name">
              May Thu <span className="orange">✳</span> Nguyen
            </h1>
            <div className="hero-bottom hero-meta">
              <a className="round-link" href="#work">
                <span className="circle-arrow">↓</span>
                <span>
                  SCROLL TO EXPLORE
                  <br />
                  <span className="muted">SELECTED WORK BELOW</span>
                </span>
              </a>
              <div className="hero-description">
                Thoughtful interfaces.
                <br />
                Dependable systems.
                <br />
                <span className="muted">Built with a human in mind.</span>
              </div>
            </div>
            <div className="hero-foot hero-meta">
              <span>CODE WITH PURPOSE. CREATE WITH CARE.</span>
              <button
                className="motion-toggle"
                onClick={() => setPaused(!paused)}
                aria-pressed={paused}
                disabled={Boolean(reduced)}
              >
                {reduced
                  ? "REDUCED MOTION"
                  : paused
                    ? "PLAY MOTION ▷"
                    : "PAUSE MOTION Ⅱ"}
              </button>
            </div>
          </section>
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
          <section className="work section" id="work">
            <Label number="02 / PROJECTS">SELECTED WORK</Label>
            <div className="section-heading" data-reveal>
              <h2>
                A few things
                <br />
                I’ve <em>built.</em>
              </h2>
              <p className="muted">
                Ideas, experiments, and a lot of learning.
                <br />A selection from my development practice.
              </p>
            </div>
            <ProjectCards onSelect={setActiveProject} />
            <div className="more-work" data-reveal>
              <div className="eyebrow muted">MORE EXPLORATIONS</div>
              {moreProjects.map((p, i) => (
                <a
                  className="more-row"
                  key={p.title}
                  href={p.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="muted">0{i + 4}</span>
                  <div>
                    <h3>{p.title}</h3>
                    <p>{p.description}</p>
                  </div>
                  <span className="eyebrow muted more-type">{p.type}</span>
                  <Arrow />
                </a>
              ))}
            </div>
          </section>
          <div className="marquee" aria-hidden="true">
            <div className="marquee-track">
              STAY CURIOUS <span>✳</span> KEEP BUILDING <span>✳</span> STAY
              CURIOUS <span>✳</span> KEEP BUILDING
            </div>
          </div>
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
                  <span>SYDNEY ↗</span>
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
              <div>
                <span className="eyebrow orange">
                  A LITTLE ROOM TO EXPERIMENT
                </span>
                <h3>
                  Serious about the craft.
                  <br />
                  Curious about <em>what’s next.</em>
                </h3>
                <p className="muted">
                  A small interactive study in form and motion.
                  <br />
                  Move your pointer over the sculpture.
                </p>
              </div>
              <div className="study-scene">
                <Scene paused={still} />
              </div>
            </div>
            <div className="toolkit" data-reveal>
              <span className="eyebrow muted">TOOLS I BUILD WITH</span>
              <div>
                {[
                  "TypeScript",
                  "JavaScript",
                  "React",
                  "Next.js",
                  "Python",
                  "FastAPI",
                  "Ruby on Rails",
                  "PostgreSQL",
                  "Supabase",
                  "MongoDB",
                  "Three.js",
                  "GSAP",
                ].map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </div>
          </section>
          <section className="experience section" id="experience">
            <Label number="04 / EXPERIENCE">LEARNING BY DOING</Label>
            <div className="section-heading" data-reveal>
              <h2>
                Good work.
                <br />
                <em>Good people.</em>
              </h2>
              <p className="muted">
                Contributing to real products.
                <br />
                Growing through collaboration.
              </p>
            </div>
            <div>
              {experience.map((e, i) => (
                <details
                  className="experience-row"
                  key={`${e.company}-${i}`}
                  data-reveal
                  open={i === 0 ? true : undefined}
                >
                  <summary>
                    <span className="row-number">0{i + 1}</span>
                    <div>
                      <h3>{e.company}</h3>
                      <p>{e.role}</p>
                    </div>
                    <span className="eyebrow experience-label">{e.label}</span>
                    <span className="expand" aria-hidden="true">
                      +
                    </span>
                  </summary>
                  <div className="experience-detail">
                    <p>{e.description}</p>
                  </div>
                </details>
              ))}
            </div>
          </section>
          <section className="principles section">
            <Label number="05 / PRINCIPLES">HOW I WORK</Label>
            <div className="principles-grid">
              {[
                {
                  title: "Make it useful.",
                  body: "Start with the person using it. Understand their problem before choosing a tool.",
                },
                {
                  title: "Keep it clear.",
                  body: "Readable code, deliberate interfaces, and communication that makes the next step obvious.",
                },
                {
                  title: "Own the details.",
                  body: "Follow the data flow. Consider loading states, failure cases, and what happens after the happy path.",
                },
              ].map((v, i) => (
                <div key={v.title} data-reveal>
                  <span className="principle-number">0{i + 1}</span>
                  <h3>{v.title}</h3>
                  <p>{v.body}</p>
                </div>
              ))}
            </div>
          </section>
          <section className="testimonials section">
            <Label number="06 / KIND WORDS">FROM PEOPLE I’VE WORKED WITH</Label>
            <div className="quote-area">
              <span className="quote-symbol" aria-hidden="true">
                “
              </span>
              <AnimatePresence mode="wait">
                <motion.figure
                  key={quote}
                  initial={still ? false : { opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: still ? 0 : 0.25 }}
                >
                  <blockquote>{testimonials[quote].quote}</blockquote>
                  <figcaption>
                    <strong>{testimonials[quote].name}</strong>
                    <span>{testimonials[quote].role}</span>
                  </figcaption>
                </motion.figure>
              </AnimatePresence>
              <div className="quote-controls">
                <span aria-live="polite">
                  0{quote + 1} <span className="muted">/ 03</span>
                </span>
                <button
                  aria-label="Previous testimonial"
                  onClick={() => setQuote((quote + 2) % 3)}
                >
                  ←
                </button>
                <button
                  aria-label="Next testimonial"
                  onClick={() => setQuote((quote + 1) % 3)}
                >
                  →
                </button>
              </div>
            </div>
          </section>
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
                {copied ? "COPIED ✓" : "COPY EMAIL ↗"}
              </button>
              <div>
                <a href={profile.linkedin} target="_blank" rel="noreferrer">
                  LINKEDIN ↗
                </a>
                <a href={profile.github} target="_blank" rel="noreferrer">
                  GITHUB ↗
                </a>
              </div>
            </div>
          </section>
        </main>
        <footer>
          <span>© {new Date().getFullYear()} MAY THU NGUYEN</span>
          <span>MADE WITH CURIOSITY & CODE</span>
          <a href="#home">BACK TO TOP ↑</a>
        </footer>
        <dialog
          aria-labelledby="project-dialog-title"
          className="project-dialog"
          ref={dialog}
          onCancel={closeProject}
          onClose={() => setActiveProject(null)}
          onClick={(e) => {
            if (e.target === e.currentTarget) closeProject();
          }}
        >
          {selected && (
            <div className="dialog-inner">
              <button
                className="dialog-close"
                onClick={closeProject}
                autoFocus
                aria-label="Close project details"
              >
                Close ×
              </button>
              <span className="eyebrow orange">{selected.category}</span>
              <h2 id="project-dialog-title">{selected.title}</h2>
              <img
                src={selected.image}
                alt={`${selected.title} interface`}
                width="1200"
                height="750"
              />
              <p>{selected.detail}</p>
              <div className="tags">
                {selected.tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
              <div className="dialog-actions">
                <a
                  className="button-primary"
                  href={selected.live}
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit live site <Arrow />
                </a>
                <a
                  className="text-link"
                  href={selected.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  Explore the code <Arrow />
                </a>
              </div>
            </div>
          )}
        </dialog>
      </div>
    </MotionConfig>
  );
}
