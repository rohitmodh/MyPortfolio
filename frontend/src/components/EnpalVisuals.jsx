import { FlowDiagram } from "./FlowDiagram";

const Lane = ({ label, nodes }) => (
  <div>
    <p className="mb-2 font-mono text-[9px] tracking-[0.25em] text-accent/80">{label.toUpperCase()}</p>
    <FlowDiagram nodes={nodes} compact />
  </div>
);

export const EnpalVisual = ({ project }) => {
  switch (project.visual) {
    case "multisite":
      return (
        <FlowDiagram
          compact
          nodes={["Incoming Lead", "Address", "Normalize", "CRM Lookup", "Existing Customer?", "Multisite Detection"]}
        />
      );
    case "personid":
      return (
        <div>
          <FlowDiagram
            compact
            nodes={["Input", "Sequential Identifier", "FPE + Key + Year/Version Tweak", "10-digit PersonId", "Identity Mapping"]}
          />
          <p className="mt-3 border-t border-line pt-2 font-mono text-[9px] leading-4 tracking-widest text-mute/80">
            SAME INPUT → SAME PERSONID · DETERMINISTIC · FORMAT-PRESERVING · IDENTITY UNIFICATION
          </p>
        </div>
      );
    case "backfill":
      return (
        <div className="space-y-4">
          <Lane label="Live path" nodes={["Incoming Request", "Normalize Address", "Hash", "MongoDB Mapping", "CRM"]} />
          <Lane label="Backfill path" nodes={["Historical Data", "Backfill", "Address Mapping", "CRM Reconciliation"]} />
        </div>
      );
    case "domainid":
      return (
        <FlowDiagram
          compact
          nodes={["Consumers", "Domain ID API", "Azure Functions", "ID Generation", "Multiple Enpal Systems"]}
        />
      );
    case "polyglot":
      return (
        <div>
          <p className="mb-2 font-mono text-[9px] tracking-[0.25em] text-accent/80">POLYGLOT SERVICE MESH</p>
          <div className="space-y-0">
            {[
              "Service A · Node.js",
              "Service B · .NET",
              "Service C · Node.js",
            ].map((s, i) => (
              <div key={s} className="flex flex-col items-stretch">
                <div className="border border-line bg-panel px-3 py-1.5 text-center font-mono text-[9px] tracking-widest text-fg/85 transition-colors duration-300 group-hover:border-accent/40">
                  {s.toUpperCase()}
                </div>
                <span
                  className="flow-connector h-4"
                  style={{ "--drip-dist": "16px", animationDelay: `${i * 0.4}s` }}
                />
              </div>
            ))}
            <div className="border border-accent/40 bg-accent-soft px-3 py-1.5 text-center font-mono text-[9px] tracking-widest text-accent">
              CRM · REST APIS
            </div>
          </div>
          <p className="mt-3 border-t border-line pt-2 font-mono text-[9px] tracking-widest text-mute/80">
            ONE BACKEND, TWO EXISTING SERVICE STACKS
          </p>
        </div>
      );
    case "governance":
      return (
        <FlowDiagram
          compact
          nodes={[
            "Application PR",
            "Build Pipeline",
            "OpenAPI Diff",
            "AI-assisted Analysis",
            "Breaking Change Detection",
            "Generated PR + Change Summary",
            "API Specification Repository",
          ]}
        />
      );
    default:
      return null;
  }
};
