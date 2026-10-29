"use client";

import { useEffect, useRef } from "react";
import { Close } from "@/components/icons";
import type { Project } from "@/lib/portfolio-types";
import { useBodyScrollLock } from "@/hooks/use-body-scroll-lock";
import { Arrow } from "./shared";

type ProjectDialogProps = {
  project: Project | null;
  onClose: () => void;
};

export default function ProjectDialog({ project, onClose }: ProjectDialogProps) {
  const dialog = useRef<HTMLDialogElement>(null);
  useBodyScrollLock(project !== null);

  useEffect(() => {
    const element = dialog.current;
    if (!element) return;
    if (project && !element.open) element.showModal();
    else if (!project && element.open) element.close();
  }, [project]);

  useEffect(() => {
    const element = dialog.current;
    return () => { if (element?.open) element.close(); };
  }, []);

  return (
    <dialog
      ref={dialog}
      className="project-dialog"
      aria-labelledby="project-dialog-title"
      onCancel={(event) => { event.preventDefault(); onClose(); }}
      onClose={() => { if (!dialog.current?.open) onClose(); }}
      onClick={(event) => { if (event.target === event.currentTarget) onClose(); }}
    >
      {project && (
        <div className="dialog-inner">
          <button type="button" className="dialog-close" onClick={onClose} autoFocus aria-label="Close project details">
            Close <Close />
          </button>
          <span className="eyebrow orange">{project.category}</span>
          <h2 id="project-dialog-title">{project.title}</h2>
          <img src={project.image} alt={`${project.title} interface`} width="1200" height="750" />
          <p>{project.detail}</p>
          <div className="tags">
            {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
          </div>
          <div className="dialog-actions">
            <a className="button-primary" href={project.live} target="_blank" rel="noreferrer">
              Visit live site <Arrow />
            </a>
            <a className="text-link" href={project.github} target="_blank" rel="noreferrer">
              Explore the code <Arrow />
            </a>
          </div>
        </div>
      )}
    </dialog>
  );
}
