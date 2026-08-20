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
    className="flex w-max items-center pb-16"
    role="img"
    aria-label="Multiple CRMs fan into the ingestion service, field mapping and the canonical model, written into Elasticsearch; Search APIs query Elasticsearch via Query DSL"
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
      <Chip>INGESTION SERVICE</Chip>
      <HConn />
      <Chip>FIELD MAPPING</Chip>
      <HConn />
      <Chip>CANONICAL MODEL</Chip>
      <HConn />
      <div className="relative shrink-0">
        <Chip accent>ELASTICSEARCH</Chip>
        <div className="absolute left-1/2 top-full mt-1.5 flex -translate-x-1/2 flex-col items-center">
          <svg viewBox="0 0 8 22" className="h-5 w-2" aria-hidden="true">
            <path d="M4 22 V 6" fill="none" stroke="#57c7ff" strokeWidth="1" className="flow-line" />
            <path d="M1 8 L 4 2 L 7 8" fill="none" stroke="#57c7ff" strokeWidth="1" />
          </svg>
          <span className="mt-0.5 font-mono text-[8px] tracking-[0.18em] text-accent/80">QUERY DSL</span>
          <div className="mt-1.5">
            <Chip>SEARCH APIS</Chip>
          </div>
        </div>
      </div>
    </div>
  </div>
);
