import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { Section } from "./Section";
import { FlowDiagram } from "./FlowDiagram";
import { ProjectModal } from "./ProjectModal";
import { projects } from "../data/portfolio";

const Card = ({ project, onOpen }) => (
  <button
    data-testid={`project-card-${project.id}`}
    onClick={() => onOpen(project)}
    className="group relative flex h-full flex-col border border-line bg-panel/50 p-7 text-left transition-[transform,border-color,background-color] duration-500 hover:-translate-y-1.5 hover:border-accent/40 hover:bg-panel md:p-8"
  >
    <div className="mb-6 flex items-start justify-between gap-4">
      <span className="font-mono text-xs tracking-[0.25em] text-mute/60">{project.index}</span>
      {project.personal && (
        <span className="border border-accent/30 bg-accent-soft px-2 py-0.5 font-mono text-[9px] tracking-[0.2em] text-accent">
          PERSONAL BUILD
        </span>
      )}
    </div>

    <h3 className="text-xl font-semibold tracking-tight text-fg transition-colors duration-300 group-hover:text-accent md:text-2xl">
      {project.title}
    </h3>
    <p className="mt-1 font-mono text-[10px] tracking-[0.2em] text-mute/70">{project.tagline.toUpperCase()}</p>
    <p className="mt-4 flex-1 text-sm leading-relaxed text-mute">{project.description}</p>

    {project.metric ? (
      <div className="mt-6 border border-line bg-base/60 p-4">
        <div className="flex items-center justify-between gap-4">
          <div className="flex-1">
            <div className="h-1.5 w-full bg-mute/30" />
            <p className="mt-1 font-mono text-[9px] tracking-widest text-mute/70">NODE.JS</p>
          </div>
          <span className="font-mono text-[10px] text-mute">→</span>
          <div className="flex-1">
            <div className="h-1.5 w-3/5 bg-accent" />
            <p className="mt-1 font-mono text-[9px] tracking-widest text-accent">.NET 8</p>
          </div>
          <span className="text-2xl font-semibold tracking-tight text-fg">{project.metric.improvement}</span>
        </div>
        <p className="mt-2 font-mono text-[9px] tracking-[0.2em] text-mute/60">P99 LATENCY — BEFORE → AFTER</p>
      </div>
    ) : (
      <div className="mt-6 max-w-[220px]">
        <FlowDiagram nodes={project.flow.slice(0, 3)} compact />
      </div>
    )}

    <div className="mt-6 flex flex-wrap gap-1.5 opacity-100 transition-[opacity,transform] duration-400 md:translate-y-2 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100">
      {project.tech.map((t) => (
        <span key={t} className="border border-line px-2 py-0.5 font-mono text-[9px] tracking-widest text-fg/70">
          {t}
        </span>
      ))}
    </div>

    <div className="mt-6 flex items-center gap-2 font-mono text-[10px] tracking-[0.25em] text-mute transition-colors duration-300 group-hover:text-accent">
      EXPLORE
      <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-1.5" />
    </div>
  </button>
);

export const Projects = () => {
  const [active, setActive] = useState(null);

  return (
    <Section id="projects" index="03" label="PROJECTS" title="Systems I've designed and run.">
      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.id} delay={(i % 2) * 0.08} className={i === projects.length - 1 ? "md:col-span-2" : ""}>
            <Card project={p} onOpen={setActive} />
          </Reveal>
        ))}
      </div>
      <ProjectModal project={active} onClose={() => setActive(null)} />
    </Section>
  );
};
