import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { Section } from "./Section";
import { profile, terminalLines } from "../data/portfolio";

const useTyped = (start) => {
  const [done, setDone] = useState([]);
  const [current, setCurrent] = useState(null);

  useEffect(() => {
    if (!start) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDone(terminalLines);
      return;
    }
    let li = 0;
    let ci = 0;
    let timer;
    const step = () => {
      if (li >= terminalLines.length) {
        setCurrent(null);
        return;
      }
      const line = terminalLines[li];
      if (ci <= line.cmd.length) {
        setCurrent({ cmd: line.cmd.slice(0, ci) });
        ci += 1;
        timer = setTimeout(step, 24 + Math.random() * 34);
      } else {
        setDone((d) => [...d, line]);
        setCurrent(null);
        li += 1;
        ci = 0;
        timer = setTimeout(step, 320);
      }
    };
    timer = setTimeout(step, 350);
    return () => clearTimeout(timer);
  }, [start]);

  return { done, current };
};

export const Terminal = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-120px" });
  const { done, current } = useTyped(inView);

  return (
    <Section id="terminal" index="06" label="SIGNAL" title="Runtime context">
      <div ref={ref} className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal>
          <div data-testid="terminal-window" className="corner-ticks border border-line bg-[#0a0c0f]">
            <div className="flex items-center justify-between border-b border-line px-4 py-2.5">
              <span className="flex gap-1.5">
                <i className="h-2.5 w-2.5 rounded-full bg-[#2a2f36]" />
                <i className="h-2.5 w-2.5 rounded-full bg-[#2a2f36]" />
                <i className="h-2.5 w-2.5 rounded-full bg-accent/60" />
              </span>
              <span className="font-mono text-[10px] tracking-[0.2em] text-meta">rohit@berlin — zsh</span>
            </div>
            <div className="min-h-[240px] p-5 font-mono text-[13px] leading-7">
              {done.map((l) => (
                <div key={l.cmd}>
                  <p className="text-fg/90">
                    <span className="text-accent">$</span> {l.cmd}
                  </p>
                  <p className="text-mute">{l.out}</p>
                </div>
              ))}
              {current && (
                <p className="caret text-fg/90">
                  <span className="text-accent">$</span> {current.cmd}
                </p>
              )}
              {!current && done.length === terminalLines.length && (
                <p className="caret text-fg/90">
                  <span className="text-accent">$</span>
                </p>
              )}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div data-testid="code-section" className="flex h-full flex-col justify-between gap-8 border border-line bg-panel/50 p-7">
            <div>
              <p className="mb-2 font-mono text-[10px] tracking-[0.25em] text-mute">CODE / SELECTED</p>
              <h3 className="text-lg font-semibold tracking-tight text-fg">Open source, no invented metrics</h3>
              <p className="mt-3 text-sm leading-relaxed text-mute">
                Selected code lives on GitHub. No fabricated contribution graphs or star counts here — just the
                work, linked directly.
              </p>
            </div>
            <div className="space-y-3">
              <a
                data-testid="code-ratelimiter-link"
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between border border-line px-5 py-4 transition-colors duration-300 hover:border-accent/50 hover:bg-accent-soft"
              >
                <div>
                  <p className="font-mono text-sm text-fg group-hover:text-accent">distributed-rate-limiter</p>
                  <p className="mt-0.5 font-mono text-[10px] tracking-widest text-mute">GO · REDIS · GRPC · DOCKER</p>
                </div>
                <ArrowUpRight size={16} className="text-mute transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
              </a>
              <a
                data-testid="code-github-profile-link"
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between border border-line px-5 py-4 transition-colors duration-300 hover:border-accent/50 hover:bg-accent-soft"
              >
                <div>
                  <p className="font-mono text-sm text-fg group-hover:text-accent">github.com/rohitmodh</p>
                  <p className="mt-0.5 font-mono text-[10px] tracking-widest text-mute">FULL PROFILE</p>
                </div>
                <ArrowUpRight size={16} className="text-mute transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
};
