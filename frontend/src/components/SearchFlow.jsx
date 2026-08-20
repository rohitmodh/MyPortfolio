const Chip = ({ children, accent = false }) => (
  <div
    className={`shrink-0 border px-2 py-1.5 text-center font-mono text-[9px] tracking-wider transition-colors duration-300 ${
      accent
        ? "border-accent/50 bg-accent-soft text-accent"
        : "border-line bg-panel text-fg/85 group-hover:border-accent/40"
    }`}
  >
    {children}
  </div>
);

const HConn = () => <span className="flow-h-connector mx-0.5 w-3 shrink-0" aria-hidden="true" />;

export const SearchFlow = () => (
  <div
    className="flex w-max items-center"
    role="img"
    aria-label="Multiple CRMs fan into .NET ingestion, field mapping and the canonical model, stored in Elasticsearch; Search APIs query Elasticsearch via Query DSL"
  >
    <div className="flex shrink-0 flex-col gap-1.5">
      <Chip>CRM A</Chip>
      <Chip>CRM B</Chip>
      <Chip>CRM C</Chip>
    </div>

    <svg viewBox="0 0 44 64" className="h-16 w-11 shrink-0" aria-hidden="true">
      <path d="M2 10 C 22 10 22 32 42 32" fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="1" className="flow-line" />
      <path d="M2 32 H 42" fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="1" className="flow-line" />
      <path d="M2 54 C 22 54 22 32 42 32" fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="1" className="flow-line" />
    </svg>

    <div className="flex items-center">
      <Chip>INGESTION (.NET)</Chip>
      <HConn />
      <Chip>FIELD MAPPING</Chip>
      <HConn />
      <Chip>CANONICAL MODEL</Chip>
      <HConn />
    </div>

    <div className="flex shrink-0 flex-col items-center gap-1">
      <Chip accent>ELASTICSEARCH</Chip>
      <div className="flex items-center gap-1">
        <svg viewBox="0 0 8 26" className="h-6 w-2" aria-hidden="true">
          <path d="M4 26 V 6" fill="none" stroke="#57c7ff" strokeWidth="1" className="flow-line" />
          <path d="M1 8 L 4 2 L 7 8" fill="none" stroke="#57c7ff" strokeWidth="1" />
        </svg>
        <span className="font-mono text-[8px] tracking-[0.18em] text-accent/80 [writing-mode:vertical-rl]">
          QUERY DSL
        </span>
      </div>
      <Chip>SEARCH APIS</Chip>
    </div>
  </div>
);
