import { Reveal } from "./Reveal";
import { Section } from "./Section";
import { principles } from "../data/portfolio";

export const Principles = () => (
  <Section id="engineering" index="04" label="ENGINEERING" title="How I think about systems">
    <div className="grid gap-px border border-line bg-line/40 sm:grid-cols-2 lg:grid-cols-3">
      {principles.map((p, i) => {
        const Tag = p.link ? "a" : "div";
        return (
          <Reveal
            key={p.n}
            delay={(i % 3) * 0.06}
            y={18}
            className={`h-full ${i === principles.length - 1 && principles.length % 3 !== 0 ? "sm:col-span-2 lg:col-span-3" : ""}`}
          >
            <Tag
              data-testid={p.link ? `principle-link-${p.n}` : `principle-${p.n}`}
              {...(p.link
                ? {
                    href: p.link,
                    onClick: (e) => {
                      e.preventDefault();
                      const el = document.querySelector(p.link);
                      if (!el) return;
                      if (window.__lenis) window.__lenis.scrollTo(el, { offset: -100, duration: 1.2 });
                      else el.scrollIntoView({ behavior: "smooth" });
                    },
                  }
                : { tabIndex: 0 })}
              className="group flex h-full min-h-[190px] flex-col justify-between bg-panel p-7 outline-none transition-colors duration-400 hover:bg-[#12161c] focus-visible:bg-[#12161c]"
            >
              <div className="flex items-start justify-between">
                <span className="font-mono text-2xl font-light text-dim transition-colors duration-400 group-hover:text-accent group-focus-visible:text-accent">
                  {p.n}
                </span>
                <span className="h-px w-8 self-center bg-line transition-[width,background-color] duration-500 group-hover:w-14 group-hover:bg-accent/60 group-focus-visible:w-14 group-focus-visible:bg-accent/60" />
              </div>
              <div>
                <h3 className="text-base font-semibold tracking-tight text-fg md:text-lg">{p.title}</h3>
                <p className="mt-3 text-[13px] leading-relaxed text-mute opacity-100 transition-[opacity,transform] duration-400 lg:translate-y-1.5 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100 lg:group-focus-visible:translate-y-0 lg:group-focus-visible:opacity-100">
                  {p.body}
                </p>
                {p.link && (
                  <span className="mt-3 block font-mono text-[9px] tracking-[0.2em] text-accent/80 transition-opacity duration-300 lg:opacity-0 lg:group-hover:opacity-100">
                    VIEW IN EXPERIENCE →
                  </span>
                )}
              </div>
            </Tag>
          </Reveal>
        );
      })}
    </div>
  </Section>
);
