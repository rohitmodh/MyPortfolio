import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, FileDown } from "lucide-react";
import { ArchitectureVisual } from "./ArchitectureVisual";
import { profile } from "../data/portfolio";

const lineReveal = (i) => ({
  initial: { y: "112%" },
  animate: { y: 0 },
  transition: { duration: 1, delay: 0.2 + i * 0.14, ease: [0.22, 1, 0.36, 1] },
});

const scrollTo = (href) => {
  const el = document.querySelector(href);
  if (!el) return;
  if (window.__lenis) window.__lenis.scrollTo(el, { offset: -72, duration: 1.4 });
  else el.scrollIntoView({ behavior: "smooth" });
};

export const Hero = () => (
  <section id="top" data-testid="hero-section" className="relative overflow-hidden">
    <div className="hero-grid pointer-events-none absolute inset-0" aria-hidden="true" />
    <div
      className="pointer-events-none absolute -top-40 right-0 h-[480px] w-[480px] rounded-full opacity-[0.07]"
      style={{ background: "radial-gradient(circle, #57c7ff 0%, transparent 65%)" }}
      aria-hidden="true"
    />

    <div className="relative mx-auto grid max-w-6xl gap-16 px-6 pb-24 pt-36 md:pt-44 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:pb-32">
      <div>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mb-8 inline-flex items-center gap-3 border border-line bg-panel/70 px-4 py-2 backdrop-blur-sm"
        >
          <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-accent" />
          <span data-testid="hero-status" className="font-mono text-[11px] tracking-[0.2em] text-mute">
            {profile.status.toUpperCase()}
          </span>
        </motion.div>

        <h1 className="text-4xl font-semibold leading-[1.08] tracking-tight text-fg sm:text-5xl lg:text-6xl">
          <span className="block overflow-hidden pb-1">
            <motion.span className="block" {...lineReveal(0)}>
              Senior Backend Engineer
            </motion.span>
          </span>
          <span className="block overflow-hidden pb-2">
            <motion.span className="block text-mute" {...lineReveal(1)}>
              building systems that <span className="text-accent">scale.</span>
            </motion.span>
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="mt-6 max-w-xl text-base leading-relaxed text-mute md:text-lg"
        >
          {profile.sub}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <button
            data-testid="hero-view-projects-btn"
            onClick={() => scrollTo("#projects")}
            className="group inline-flex items-center gap-2 bg-accent px-6 py-3 font-mono text-xs font-semibold tracking-[0.15em] text-base transition-[background-color,transform] duration-300 hover:bg-[#7cd4ff] hover:-translate-y-0.5"
          >
            VIEW PROJECTS
            <ArrowDown size={14} className="transition-transform duration-300 group-hover:translate-y-0.5" />
          </button>
          <button
            data-testid="hero-contact-btn"
            onClick={() => scrollTo("#contact")}
            className="group inline-flex items-center gap-2 border border-line px-6 py-3 font-mono text-xs tracking-[0.15em] text-fg transition-[border-color,color,transform] duration-300 hover:border-accent/60 hover:text-accent hover:-translate-y-0.5"
          >
            CONTACT ME
            <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
          <a
            data-testid="hero-resume-link"
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-2 py-3 font-mono text-xs tracking-[0.15em] text-mute transition-colors duration-300 hover:text-fg"
          >
            <FileDown size={14} className="transition-transform duration-300 group-hover:translate-y-0.5" />
            DOWNLOAD RESUME
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="mt-14 flex items-center gap-6 font-mono text-[10px] tracking-[0.2em] text-meta"
        >
          <span>BACKEND ENGINEERING — DISTRIBUTED SYSTEMS · API PLATFORMS</span>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="hidden lg:block"
      >
        <ArchitectureVisual />
      </motion.div>
    </div>
  </section>
);
