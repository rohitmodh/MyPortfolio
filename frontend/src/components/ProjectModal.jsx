import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ArrowUpRight } from "lucide-react";
import { FlowDiagram } from "./FlowDiagram";
import { SearchFlow } from "./SearchFlow";

const Block = ({ title, children }) => (
  <div>
    <h4 className="mb-3 font-mono text-[10px] tracking-[0.25em] text-accent">{title.toUpperCase()}</h4>
    {children}
  </div>
);

export const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    if (!project) return;
    window.__lenis?.stop();
    document.body.style.overflow = "hidden";
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      window.__lenis?.start();
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          data-testid="project-modal"
          className="fixed inset-0 z-[80] flex items-end justify-center p-0 md:items-center md:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="absolute inset-0 bg-base/85 backdrop-blur-sm" onClick={onClose} />
          <motion.article
            data-lenis-prevent
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 40, opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="relative max-h-[92vh] w-full max-w-3xl overflow-y-auto border border-line bg-panel"
            aria-label={`${project.title} details`}
          >
            <header className="sticky top-0 z-10 flex items-start justify-between gap-6 border-b border-line bg-panel/95 px-6 py-5 backdrop-blur-md md:px-10">
              <div>
                <p className="mb-1 font-mono text-[10px] tracking-[0.25em] text-mute">
                  PROJECT {project.index} {project.personal ? "· PERSONAL BUILD" : ""}
                </p>
                <h3 className="text-xl font-semibold tracking-tight text-fg md:text-2xl">{project.title}</h3>
              </div>
              <button
                data-testid="project-modal-close"
                onClick={onClose}
                aria-label="Close project details"
                className="flex h-9 w-9 shrink-0 items-center justify-center border border-line text-mute transition-colors duration-300 hover:border-accent/60 hover:text-accent"
              >
                <X size={16} />
              </button>
            </header>

            <div className="space-y-10 px-6 py-8 md:px-10 md:py-10">
              <p className="text-base italic leading-relaxed text-mute md:text-lg">“{project.tagline}”</p>

              {project.metric && (
                <div data-testid="project-metric" className="border border-accent/25 bg-accent-soft/50 p-6">
                  <p className="mb-4 font-mono text-[10px] tracking-[0.25em] text-accent">
                    {project.metric.label.toUpperCase()} — BEFORE → AFTER
                  </p>
                  <div className="space-y-3">
                    <div>
                      <div className="h-2 w-full bg-mute/30" />
                      <p className="mt-1 font-mono text-[10px] tracking-widest text-mute">{project.metric.before.toUpperCase()}</p>
                    </div>
                    <div>
                      <motion.div
                        initial={{ width: "100%" }}
                        whileInView={{ width: project.metric.afterWidth || "60%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                        className="h-2 bg-accent"
                      />
                      <p className="mt-1 font-mono text-[10px] tracking-widest text-accent">{project.metric.after.toUpperCase()}</p>
                    </div>
                  </div>
                  <p className="mt-4 text-3xl font-semibold tracking-tight text-fg">
                    {project.metric.improvement}
                    <span className="ml-2 text-sm font-normal text-mute">improvement</span>
                  </p>
                </div>
              )}

              <div className={`grid gap-10 ${project.horizontal ? "" : "md:grid-cols-[1fr_220px]"}`}>
                <div className="space-y-10">
                  <Block title="Problem">
                    <p className="text-sm leading-relaxed text-fg/85">{project.detail.problem}</p>
                  </Block>
                  <Block title="Architecture">
                    <p className="text-sm leading-relaxed text-fg/85">{project.detail.architecture}</p>
                  </Block>
                  <Block title="Design Decisions">
                    <ul className="space-y-2">
                      {project.detail.decisions.map((d, i) => (
                        <li key={i} className="flex gap-3 text-sm leading-relaxed text-fg/85">
                          <span className="mt-0.5 font-mono text-[10px] text-accent">{String(i + 1).padStart(2, "0")}</span>
                          {d}
                        </li>
                      ))}
                    </ul>
                  </Block>
                </div>
                {!project.horizontal && (
                  <div className="group">
                    <h4 className="mb-3 font-mono text-[10px] tracking-[0.25em] text-mute">FLOW</h4>
                    <FlowDiagram nodes={project.flow} compact />
                  </div>
                )}
              </div>

              {project.horizontal && (
                <Block title="Flow">
                  <div className="group border border-line bg-base/50 p-4">
                    {project.flowType === "search" ? (
                      <div className="overflow-x-auto">
                        <SearchFlow />
                      </div>
                    ) : (
                      <FlowDiagram nodes={project.flow} horizontal />
                    )}
                    {project.flowNote && (
                      <p className="mt-3 whitespace-pre-line border-t border-line pt-2.5 font-mono text-[9px] leading-4 tracking-widest text-mute/80">
                        {project.flowNote}
                      </p>
                    )}
                  </div>
                </Block>
              )}

              <Block title="Challenges">
                <p className="text-sm leading-relaxed text-fg/85">{project.detail.challenges}</p>
              </Block>
              <Block title="Implementation">
                <p className="text-sm leading-relaxed text-fg/85">{project.detail.implementation}</p>
              </Block>
              <Block title="Trade-offs">
                <p className="text-sm leading-relaxed text-fg/85">{project.detail.tradeoffs}</p>
              </Block>
              <Block title="Results">
                <p className="text-sm leading-relaxed text-fg/85">{project.detail.results}</p>
              </Block>

              <Block title="Technology">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="border border-line px-3 py-1 font-mono text-[10px] tracking-widest text-fg/80">
                      {t}
                    </span>
                  ))}
                </div>
              </Block>

              {project.link && (
                <a
                  data-testid="project-modal-github-link"
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 border border-line px-5 py-3 font-mono text-xs tracking-[0.15em] text-fg transition-colors duration-300 hover:border-accent/60 hover:text-accent"
                >
                  VIEW ON GITHUB
                  <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              )}
            </div>
          </motion.article>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
