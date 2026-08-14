const words = [
  "IDENTITY RESOLUTION",
  "EVENT-DRIVEN ARCHITECTURE",
  "DISTRIBUTED SYSTEMS",
  "API DESIGN",
  "OBSERVABILITY",
  "MESSAGE QUEUES",
  "CLOUD INFRASTRUCTURE",
  "MICROSERVICES",
];

const Strip = () => (
  <div className="flex shrink-0 items-center">
    {words.map((w) => (
      <span key={w} className="flex items-center">
        <span className="px-8 font-mono text-xs tracking-[0.3em] text-mute/70">{w}</span>
        <span className="text-accent/50 text-[8px]">◆</span>
      </span>
    ))}
  </div>
);

export const Marquee = () => (
  <div
    data-testid="tech-marquee"
    className="relative overflow-hidden border-y border-line bg-panel/40 py-5"
    aria-hidden="true"
  >
    <div className="marquee-track">
      <Strip />
      <Strip />
    </div>
    <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-base to-transparent" />
    <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-base to-transparent" />
  </div>
);
