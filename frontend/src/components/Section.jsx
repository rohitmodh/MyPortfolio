import { Reveal } from "./Reveal";

export const Section = ({ id, index, label, title, children, className = "" }) => (
  <section id={id} data-testid={`section-${id}`} className={`relative scroll-mt-20 border-t border-line ${className}`}>
    <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <Reveal>
        <header className="mb-14 md:mb-20 flex items-start justify-between gap-6">
          <div>
            <p className="mb-4 font-mono text-xs tracking-[0.25em] text-accent">
              {index} / {label}
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-fg md:text-4xl">{title}</h2>
          </div>
          <span className="hidden pt-2 font-mono text-[10px] tracking-widest text-dim md:block">
            §{index}
          </span>
        </header>
      </Reveal>
      {children}
    </div>
  </section>
);
