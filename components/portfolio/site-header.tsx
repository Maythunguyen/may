"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Star, Minus, Plus } from "@/components/icons";
import { navigation } from "@/lib/portfolio-content";
import { useBodyScrollLock } from "@/hooks/use-body-scroll-lock";
import { Arrow } from "./shared";

export default function SiteHeader({ still }: { still: boolean }) {
  const [menu, setMenu] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  useBodyScrollLock(menu);

  useEffect(() => {
    if (!menu) return;
    menuRef.current?.querySelector<HTMLAnchorElement>("a")?.focus();

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenu(false);
        menuButton.current?.focus();
      }
      if (event.key !== "Tab") return;
      const links = Array.from(menuRef.current?.querySelectorAll<HTMLAnchorElement>("a") ?? []);
      const controls = [menuButton.current, ...links].filter(
        (element): element is HTMLButtonElement | HTMLAnchorElement => element !== null,
      );
      const first = controls[0];
      const last = controls[controls.length - 1];
      if (!first || !last) return;
      const outside = !controls.some((element) => element === document.activeElement);
      if (event.shiftKey && (document.activeElement === first || outside)) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && (document.activeElement === last || outside)) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [menu]);

  function followSection(id: string) {
    setMenu(false);
    // Move keyboard focus out of the disappearing menu without interrupting
    // the anchor's native scroll behaviour.
    const section = document.getElementById(id);
    if (!section) return;
    const oldTabIndex = section.getAttribute("tabindex");
    section.setAttribute("tabindex", "-1");
    section.focus({ preventScroll: true });
    if (oldTabIndex === null) section.removeAttribute("tabindex");
    else section.setAttribute("tabindex", oldTabIndex);
  }

  return (
    <>
      <header className="header">
        <a className="wordmark" href="#home" aria-label="May Thu Nguyen home">
          MAY THU NGUYEN<span className="orange"><Star size="0.8em" /></span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map(({ label, id }) => <a key={id} href={`#${id}`}>{label}</a>)}
        </nav>
        <button
          type="button"
          className="menu-toggle"
          ref={menuButton}
          onClick={() => setMenu((value) => !value)}
          aria-expanded={menu}
          aria-controls="mobile-menu"
        >
          {menu ? <>Close <Minus /></> : <>Menu <Plus /></>}
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
              {navigation.map(({ label, id }, index) => (
                <a key={id} href={`#${id}`} onClick={() => followSection(id)}>
                  <small>{String(index + 1).padStart(2, "0")}</small>
                  {label}<Arrow />
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
