export const FlowDiagram = ({ nodes, compact = false }) => (
  <div className="flex flex-col items-stretch" aria-label={`Flow: ${nodes.join(" to ")}`} role="img">
    {nodes.map((n, i) => (
      <div key={n} className="flex flex-col items-stretch">
        <div
          className={`border border-line bg-panel text-center font-mono tracking-widest text-fg/85 transition-colors duration-300 group-hover:border-accent/40 ${
            compact ? "px-3 py-1.5 text-[9px]" : "px-4 py-2.5 text-[11px]"
          }`}
        >
          {n.toUpperCase()}
        </div>
        {i < nodes.length - 1 && (
          <span
            className={`flow-connector ${i % 2 ? "slow" : ""} ${compact ? "h-4" : "h-6"}`}
            style={{ "--drip-dist": compact ? "16px" : "26px" }}
          />
        )}
      </div>
    ))}
  </div>
);
