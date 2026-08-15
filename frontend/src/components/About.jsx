import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { Reveal } from "./Reveal";
import { Section } from "./Section";
import { aboutCopy, aboutMeta } from "../data/portfolio";

const CountUp = ({ to, suffix = "" }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [v, setV] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setV(to);
      return;
    }
    const start = performance.now();
    const dur = 1300;
    let raf;
    const tick = (t) => {
      const p = Math.min(1, (t - start) / dur);
      setV(Math.round(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);

  return (
    <span ref={ref} data-testid="about-years-counter">
      {v}
      {suffix}
    </span>
  );
};

export const About = () => (
  <Section id="about" index="01" label="ABOUT" title="Engineer, not just a coder.">
    <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="space-y-6">
        {aboutCopy.map((p, i) => (
          <Reveal key={i} delay={i * 0.08}>
            <p className="text-base leading-relaxed text-mute md:text-lg">{p}</p>
          </Reveal>
        ))}
        <Reveal delay={0.25}>
          <p className="pt-4 font-mono text-xs tracking-[0.2em] text-meta">
            CURRENTLY: IDENTITY SYSTEMS @ ENPAL — BERLIN
          </p>
        </Reveal>
      </div>

      <div className="space-y-px border border-line bg-line/40">
        {aboutMeta.map((m, i) => (
          <Reveal key={m.label} delay={i * 0.06} y={16}>
            <div
              data-testid={`about-meta-${m.label.toLowerCase().replace(/\s+/g, "-")}`}
              className="group flex items-baseline justify-between gap-4 bg-panel px-6 py-5 transition-colors duration-300 hover:bg-[#12151a]"
            >
              <span className="font-mono text-[10px] tracking-widest text-dim">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="flex-1 text-right">
                <span className="block text-2xl font-semibold tracking-tight text-fg transition-colors duration-300 group-hover:text-accent md:text-3xl">
                  {m.numeric ? <CountUp to={m.value} suffix={m.suffix} /> : m.value}
                </span>
                <span className="mt-1 block font-mono text-[10px] uppercase tracking-[0.2em] text-mute">
                  {m.label}
                </span>
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </Section>
);
