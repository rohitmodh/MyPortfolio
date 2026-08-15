import { profile } from "../data/portfolio";

export const Footer = () => (
  <footer data-testid="footer" className="border-t border-line">
    <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-12 md:flex-row md:items-end md:justify-between">
      <div>
        <p className="font-mono text-sm font-semibold tracking-widest text-fg">
          <span className="text-accent">[</span>
          {profile.initials}
          <span className="text-accent">]</span>
        </p>
        <p className="mt-2 text-sm text-mute">{profile.name} — Senior Backend Engineer</p>
        <p className="mt-1 font-mono text-[10px] tracking-[0.2em] text-meta">{profile.location.toUpperCase()}</p>
      </div>
      <div className="font-mono text-[10px] leading-5 tracking-[0.15em] text-meta md:text-right">
        <p>REACT · TYPESCRIPT · TAILWIND · FRAMER MOTION</p>
        <p className="mt-2 text-mute">© 2026 {profile.name.toUpperCase()}</p>
      </div>
    </div>
  </footer>
);
