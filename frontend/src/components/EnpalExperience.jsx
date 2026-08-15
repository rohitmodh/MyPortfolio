import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { EnpalVisual } from "./EnpalVisuals";
import { enpalProjects, enpalReliability, enpalRole } from "../data/enpal";

const ProjectCard = ({ project, open, onToggle }) => (
  <div
    data-testid={`enpal-project-${project.id}`}
    className={`group relative flex flex-col border bg-panel/50 p-6 transition-[transform,border-color,background-color] duration-500 hover:-translate-y-1 hover:bg-panel md:p-7 ${
      open ? "border-accent/50" : "border-line hover:border-accent/40"
    }`}
  >
    <button
      data-testid={`enpal-project-toggle-${project.id}`}
      onClick={onToggle}
      aria-expanded={open}
      className="w-full text-left"
    >
      <div className="flex items-start justify-between gap-4">
        <span className="font-mono text-xs tracking-[0.25em] text-accent/70">{project.index}</span>
        <Plus
          size={15}
          className={`shrink-0 text-mute transition-transform duration-300 ${open ? "rotate-45 text-accent" : "group-hover:text-fg"}`}
        />
      </div>
      <h3 className="mt-3 text-lg font-semibold tracking-tight text-fg transition-colors duration-300 group-hover:text-accent md:text-xl">
        {project.title}
      </h3>
      <p className="mt-3 text-[13px] leading-relaxed text-mute">{project.description}</p>
    </button>

    <div className="mt-4 flex flex-wrap gap-1.5 transition-[opacity,transform] duration-400 md:translate-y-1 md:opacity-60 md:group-hover:translate-y-0 md:group-hover:opacity-100">
      {project.tech.map((t) => (
        <span key={t} className="border border-line bg-base/60 px-2 py-0.5 font-mono text-[9px] tracking-widest text-fg/70">
          {t}
        </span>
      ))}
    </div>

    <AnimatePresence initial={false}>
      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden"
        >
          <div className="mt-6 border-t border-line pt-5">
            <p className="mb-4 font-mono text-[9px] tracking-[0.25em] text-mute/70">TECHNICAL FLOW</p>
            <EnpalVisual project={project} />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

export const EnpalExperience = () => {
  const [openId, setOpenId] = useState("multisite-detection");

  return (
    <div data-testid="enpal-experience">
      <div className="relative pl-10 md:pl-14">
        <span className="absolute left-0 top-2 flex h-4 w-4 items-center justify-center border border-accent bg-accent/10">
          <span className="h-1 w-1 bg-accent" />
        </span>
        <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
          <h3 className="text-lg font-semibold tracking-tight text-fg md:text-xl">
            {enpalRole.role}
            <span className="text-mute"> · {enpalRole.company}</span>
            <span className="ml-3 inline-flex items-center gap-1.5 border border-accent/30 bg-accent-soft px-2 py-0.5 align-middle font-mono text-[9px] tracking-[0.2em] text-accent">
              CURRENT
            </span>
          </h3>
          <span className="font-mono text-xs tracking-widest text-mute">{enpalRole.period}</span>
        </div>
        <p className="mt-1 font-mono text-[10px] tracking-[0.2em] text-mute/60">{enpalRole.location.toUpperCase()}</p>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-fg/85 md:text-lg">{enpalRole.headline}</p>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {enpalProjects.map((p) => (
          <ProjectCard
            key={p.id}
            project={p}
            open={openId === p.id}
            onToggle={() => setOpenId(openId === p.id ? null : p.id)}
          />
        ))}
      </div>

      <div
        data-testid="enpal-reliability"
        className="mt-8 border border-line bg-panel/40 px-6 py-5 transition-colors duration-300 hover:border-accent/30"
      >
        <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
          <p className="font-mono text-[10px] tracking-[0.25em] text-accent">{enpalReliability.title.toUpperCase()}</p>
          <div className="flex flex-wrap gap-x-4 gap-y-1">
            {enpalReliability.signals.map((s) => (
              <span key={s} className="font-mono text-[10px] tracking-widest text-mute">
                {s}
              </span>
            ))}
          </div>
        </div>
        <p className="mt-3 max-w-3xl text-[13px] leading-relaxed text-mute">{enpalReliability.description}</p>
      </div>
    </div>
  );
};
