export const FlowDiagram = ({ nodes, compact = false, horizontal = false }) => {
  if (horizontal) {
    return (
      <div className="flex flex-wrap items-center gap-y-2" aria-label={`Flow: ${nodes.join(" to ")}`} role="img">
        {nodes.map((n, i) => (
          <div key={n} className="flex items-center">
            <div className="border border-line bg-panel px-2.5 py-1.5 text-center font-mono text-[9px] tracking-widest text-fg/85 transition-colors duration-300 group-hover:border-accent/40">
              {n.toUpperCase()}
            </div>
            {i < nodes.length - 1 && (
              <span className="flow-h-connector mx-0.5 w-4 shrink-0" aria-hidden="true" />
            )}
          </div>
        ))}
      </div>
    );
  }
  return (
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
};
