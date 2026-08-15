import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Reveal } from "./Reveal";
import { Section } from "./Section";
import { experience } from "../data/portfolio";

const Item = ({ job, open, onToggle }) => (
  <div className="relative pl-10 md:pl-14">
    <span
      className={`absolute left-0 top-2 flex h-4 w-4 items-center justify-center border transition-colors duration-300 ${
        open ? "border-accent bg-accent/10" : "border-line bg-panel"
      }`}
    >
      <span className={`h-1 w-1 transition-colors duration-300 ${open ? "bg-accent" : "bg-mute/40"}`} />
    </span>

    <button
      data-testid={`experience-toggle-${job.id}`}
      onClick={onToggle}
      aria-expanded={open}
      className="group w-full text-left"
    >
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
        <h3 className="text-lg font-semibold tracking-tight text-fg transition-colors duration-300 group-hover:text-accent md:text-xl">
          {job.role}
          <span className="text-mute"> · {job.company}</span>
          {job.current && (
            <span className="ml-3 inline-flex items-center gap-1.5 border border-accent/30 bg-accent-soft px-2 py-0.5 align-middle font-mono text-[9px] tracking-[0.2em] text-accent">
              CURRENT
            </span>
          )}
        </h3>
        <div className="flex items-center gap-4">
          <span className="font-mono text-xs tracking-widest text-mute">{job.period}</span>
          <ChevronDown
            size={15}
            className={`text-mute transition-transform duration-300 ${open ? "rotate-180 text-accent" : "group-hover:text-fg"}`}
          />
        </div>
      </div>
      <p className="mt-1 font-mono text-[10px] tracking-[0.2em] text-meta">{job.location.toUpperCase()}</p>
    </button>

    <AnimatePresence initial={false}>
      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden"
        >
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-mute">{job.summary}</p>
          <ul className="mt-5 space-y-3">
            {job.achievements.map((a, i) => (
              <li key={i} className="group/a relative border-l border-line pl-5 transition-colors duration-300 hover:border-accent/60">
                <p className="text-sm leading-relaxed text-fg/90">{a.text}</p>
                <div className="mt-1.5 flex flex-wrap gap-1.5 opacity-100 transition-[opacity,transform] duration-300 md:translate-y-1 md:opacity-0 md:group-hover/a:translate-y-0 md:group-hover/a:opacity-100">
                  {a.tags.map((t) => (
                    <span key={t} className="border border-line bg-panel px-2 py-0.5 font-mono text-[9px] tracking-widest text-accent/90">
                      {t}
                    </span>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

export const Experience = () => {
  const [openId, setOpenId] = useState("enpal");

  return (
    <Section id="experience" index="02" label="EXPERIENCE" title="A decade in production.">
      <div className="relative">
        <span className="absolute bottom-2 left-[7px] top-2 w-px bg-line" aria-hidden="true" />
        <div className="space-y-12">
          {experience.map((job, i) => (
            <Reveal key={job.id} delay={i * 0.05}>
              <Item job={job} open={openId === job.id} onToggle={() => setOpenId(openId === job.id ? null : job.id)} />
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
};
