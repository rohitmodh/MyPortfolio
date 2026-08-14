import { Reveal } from "./Reveal";
import { Section } from "./Section";
import { stack } from "../data/portfolio";

export const TechStack = () => (
  <Section id="stack" index="05" label="STACK" title="The engineering stack">
    <div className="space-y-0 border-t border-line">
      {stack.map((cat, i) => (
        <Reveal key={cat.id} delay={i * 0.05} y={16}>
          <div
            data-testid={`stack-${cat.id}`}
            className="group grid gap-4 border-b border-line py-7 transition-colors duration-400 hover:bg-panel/60 md:grid-cols-[240px_1fr] md:items-baseline md:px-4"
          >
            <div className="flex items-baseline gap-4">
              <span className="font-mono text-[10px] tracking-widest text-mute/50">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-mono text-xs tracking-[0.25em] text-mute transition-colors duration-300 group-hover:text-accent">
                {cat.label.toUpperCase()}
              </h3>
            </div>
            <div className="flex flex-wrap gap-x-2 gap-y-2.5">
              {cat.items.map((item, j) => (
                <span
                  key={item}
                  data-testid={`stack-item-${item.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                  className="cursor-default border border-line bg-panel px-4 py-1.5 text-sm text-fg/85 transition-[border-color,color,transform,background-color] duration-300 hover:-translate-y-0.5 hover:border-accent/50 hover:bg-accent-soft hover:text-accent"
                  style={{ transitionDelay: `${j * 12}ms` }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      ))}
    </div>
    <Reveal delay={0.2}>
      <p className="mt-8 font-mono text-[10px] tracking-[0.2em] text-mute/50">
        DEPTH OVER BREADTH — NO PERCENTAGE BARS, NO LOGO WALLS
      </p>
    </Reveal>
  </Section>
);
