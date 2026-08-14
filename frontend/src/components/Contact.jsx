import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { Section } from "./Section";
import { profile } from "../data/portfolio";

const links = [
  { id: "email", label: "EMAIL", value: profile.email, href: `mailto:${profile.email}` },
  { id: "linkedin", label: "LINKEDIN", value: "linkedin.com/in/rohit-modh", href: profile.linkedin },
  { id: "github", label: "GITHUB", value: "github.com/rohitmodh", href: profile.github },
];

export const Contact = () => (
  <Section id="contact" index="07" label="CONTACT" title="Let's build something reliable.">
    <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start">
      <Reveal>
        <div>
          <p className="max-w-md text-base leading-relaxed text-mute md:text-lg">
            I'm most interested in hard backend problems: identity, messaging, platform modernisation, systems
            that have to keep working when everything around them fails.
          </p>
          <p className="mt-6 font-mono text-xs tracking-[0.2em] text-mute/60">
            BERLIN, DE — CET · USUALLY REPLIES WITHIN 24H
          </p>
        </div>
      </Reveal>

      <div className="space-y-px border border-line bg-line/40">
        {links.map((l, i) => (
          <Reveal key={l.id} delay={i * 0.07} y={14}>
            <a
              data-testid={`contact-link-${l.id}`}
              href={l.href}
              target={l.id === "email" ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-4 bg-panel px-6 py-6 transition-colors duration-300 hover:bg-[#12161c]"
            >
              <div>
                <p className="font-mono text-[10px] tracking-[0.25em] text-mute/60">{l.label}</p>
                <p className="mt-1.5 text-base text-fg transition-colors duration-300 group-hover:text-accent md:text-lg">
                  {l.value}
                </p>
              </div>
              <ArrowUpRight
                size={18}
                className="shrink-0 text-mute transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-accent"
              />
            </a>
          </Reveal>
        ))}
      </div>
    </div>
  </Section>
);
