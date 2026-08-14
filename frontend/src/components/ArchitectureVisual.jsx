const nodes = [
  { y: 40, label: "API GATEWAY", meta: "edge · rest" },
  { y: 130, label: "SERVICE", meta: "core · .net 8" },
  { y: 220, label: "MESSAGE BUS", meta: "events · service bus" },
  { y: 310, label: "WORKERS", meta: "async · consumers" },
  { y: 400, label: "DATABASE", meta: "store · mongodb" },
];

const paths = [
  { id: "pp1", d: "M210 62 V108", dur: "2.2s", begin: "0s" },
  { id: "pp2", d: "M210 152 V198", dur: "2.2s", begin: "0.55s" },
  { id: "pp3", d: "M210 242 V288", dur: "2.2s", begin: "1.1s" },
  { id: "pp4", d: "M210 332 V378", dur: "2.2s", begin: "1.65s" },
];

export const ArchitectureVisual = () => (
  <div
    data-testid="architecture-visual"
    className="corner-ticks relative border border-line bg-panel/60 p-5 backdrop-blur-sm"
  >
    <div className="mb-4 flex items-center justify-between border-b border-line pb-3">
      <span className="font-mono text-[10px] tracking-[0.25em] text-mute">
        SYSTEM TOPOLOGY — SIMPLIFIED
      </span>
      <span className="flex gap-1.5">
        <i className="h-2 w-2 rounded-full bg-line" />
        <i className="h-2 w-2 rounded-full bg-line" />
        <i className="h-2 w-2 rounded-full bg-accent/70" />
      </span>
    </div>

    <svg viewBox="0 0 420 440" className="w-full" role="img" aria-label="Distributed system: API gateway flowing through service, message bus and workers into a database">
      <defs>
        <linearGradient id="fade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#57c7ff" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#57c7ff" stopOpacity="0.2" />
        </linearGradient>
      </defs>

      {paths.map((p) => (
        <path key={p.id} d={p.d} fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1" className="flow-line" />
      ))}

      {paths.map((p, i) => (
        <g key={`pkt-${p.id}`}>
          <path id={p.id} d={p.d} fill="none" stroke="none" />
          <circle r="2.5" fill="#57c7ff" className="packet">
            <animateMotion dur={p.dur} begin={p.begin} repeatCount="indefinite">
              <mpath href={`#${p.id}`} />
            </animateMotion>
          </circle>
          <circle r="5.5" fill="none" stroke="#57c7ff" strokeOpacity="0.25" className="packet">
            <animateMotion dur={p.dur} begin={p.begin} repeatCount="indefinite">
              <mpath href={`#${p.id}`} />
            </animateMotion>
          </circle>
        </g>
      ))}

      {nodes.map((n, i) => (
        <g key={n.label}>
          <rect
            x="90"
            y={n.y - 22}
            width="240"
            height="44"
            fill="#0e1013"
            stroke={i === 2 ? "#57c7ff" : "rgba(255,255,255,0.14)"}
            strokeWidth="1"
            className={i === 2 ? "node-glow" : undefined}
          />
          <text x="210" y={n.y - 1} textAnchor="middle" fill="#e8eaed" fontSize="11" fontFamily="Geist Mono, monospace" letterSpacing="2">
            {n.label}
          </text>
          <text x="210" y={n.y + 13} textAnchor="middle" fill="#8b9199" fontSize="8" fontFamily="Geist Mono, monospace" letterSpacing="1">
            {n.meta}
          </text>
          <text x="342" y={n.y + 4} fill="rgba(87,199,255,0.5)" fontSize="8" fontFamily="Geist Mono, monospace">
            n{i + 1}
          </text>
        </g>
      ))}
    </svg>

    <div className="mt-4 flex items-center justify-between border-t border-line pt-3">
      <span className="flex items-center gap-2 font-mono text-[10px] tracking-widest text-mute">
        <i className="pulse-dot inline-block h-1.5 w-1.5 rounded-full bg-accent" />
        LIVE TRAFFIC
      </span>
      <span className="font-mono text-[10px] tracking-widest text-mute/60">simulated · svg only</span>
    </div>
  </div>
);
