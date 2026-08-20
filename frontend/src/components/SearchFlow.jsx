const Chip = ({ children, accent = false }) => (
  <div
    className={`shrink-0 border px-1.5 py-1.5 text-center font-mono text-[9px] tracking-wider transition-colors duration-300 ${
      accent
        ? "border-accent/50 bg-accent-soft text-accent"
        : "border-line bg-panel text-fg/85 group-hover:border-accent/40"
    }`}
  >
    {children}
  </div>
);

const HConn = () => <span className="flow-h-connector mx-0.5 w-2 shrink-0" aria-hidden="true" />;

export const SearchFlow = () => (
  <div
    className="flex w-max items-center pb-16 pt-4"
    role="img"
    aria-label="Multiple CRMs fan into the ingestion service, field mapping and the canonical model, written into Elasticsearch; Search APIs read from Elasticsearch via Query DSL"
  >
    <div className="flex shrink-0 flex-col gap-1.5">
      <Chip>CRM A</Chip>
      <Chip>CRM B</Chip>
      <Chip>CRM C</Chip>
    </div>

    <svg viewBox="0 0 44 64" className="h-14 w-10 shrink-0" aria-hidden="true">
      <path id="fan-a" d="M2 10 C 22 10 22 32 42 32" fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="1" className="flow-line" />
      <path id="fan-b" d="M2 32 H 42" fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="1" className="flow-line" />
      <path id="fan-c" d="M2 54 C 22 54 22 32 42 32" fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="1" className="flow-line" />
      {[
        { href: "#fan-a", begin: "0s" },
        { href: "#fan-b", begin: "0.7s" },
        { href: "#fan-c", begin: "1.4s" },
      ].map((p) => (
        <circle key={p.href} r="2" fill="#57c7ff" className="packet">
          <animateMotion dur="2.1s" begin={p.begin} repeatCount="indefinite">
            <mpath href={p.href} />
          </animateMotion>
        </circle>
      ))}
    </svg>

    <div className="flex items-center">
      <Chip>INGESTION SERVICE</Chip>
      <HConn />
      <Chip>FIELD MAPPING</Chip>
      <HConn />
      <Chip>CANONICAL MODEL</Chip>
      <HConn />
      <div className="relative shrink-0">
        <span className="absolute -top-4 left-1/2 -translate-x-1/2 font-mono text-[8px] tracking-[0.2em] text-mute/80">
          WRITE
        </span>
        <Chip accent>ELASTICSEARCH</Chip>
        <div className="absolute left-1/2 top-full mt-1.5 flex -translate-x-1/2 flex-col items-center">
          <svg viewBox="0 0 8 22" className="h-5 w-2" aria-hidden="true">
            <path d="M4 22 V 6" fill="none" stroke="#57c7ff" strokeWidth="1" className="flow-line" />
            <path d="M1 8 L 4 2 L 7 8" fill="none" stroke="#57c7ff" strokeWidth="1" />
          </svg>
          <span className="mt-0.5 whitespace-nowrap font-mono text-[8px] tracking-[0.18em] text-accent/80">
            READ · QUERY DSL
          </span>
          <div className="mt-1.5">
            <Chip>SEARCH APIS</Chip>
          </div>
        </div>
      </div>
    </div>
  </div>
);
