export const enpalRole = {
  company: "Enpal",
  role: "Senior Software Engineer",
  period: "2025 — Present",
  location: "Berlin, Germany",
  headline:
    "Technical anchor for customer identity, distributed systems, and API platforms across a multi-service energy-tech backend.",
};

export const enpalProjects = [
  {
    id: "multisite-detection",
    index: "01",
    title: "Multisite Customer Detection",
    description:
      "Designed a customer-detection workflow combining raw address data, Azure Maps normalization, and CRM records to identify whether an incoming lead could belong to an existing multi-site customer.",
    tech: [".NET", "Azure Maps", "CRM Integration", "MongoDB"],
    visual: "multisite",
  },
  {
    id: "personid-resolution",
    index: "02",
    title: "PersonId & Identity Resolution",
    description:
      "Designed a deterministic PersonId generation service using format-preserving encryption over sequential inputs with a key and year/version-based tweak, producing consistent 10-digit identifiers for unifying fragmented customer identities across systems.",
    tech: ["Go", "Format-Preserving Encryption", "MongoDB", "Cryptography"],
    visual: "personid",
  },
  {
    id: "address-matching",
    index: "03",
    title: "Address Matching & Data Backfill",
    description:
      "Built an address-matching workflow supporting both live requests and historical data. Normalized and incoming addresses are hashed and mapped in MongoDB, with backfill processing and continuous CRM reconciliation as leads progress through the funnel.",
    tech: ["Go", "MongoDB", "Backfill", "CRM Synchronization"],
    visual: "backfill",
  },
  {
    id: "domain-id-platform",
    index: "04",
    title: "Domain ID Generation Platform",
    description:
      "Extended an existing domain-ID generation platform to support additional consumers across Enpal, evolving its Azure Functions and generation logic while maintaining compatibility with existing consumers.",
    tech: ["Node.js", "Azure Functions", "API Design", "Platform Engineering"],
    visual: "domainid",
  },
  {
    id: "customer-order-apis",
    index: "05",
    title: "Customer & Order APIs",
    description:
      "Built and evolved customer and order APIs across existing Node.js and .NET services, supporting customer lifecycle workflows, CRM integrations, and service-to-service communication.",
    tech: ["Node.js", ".NET", "REST APIs", "CRM Integration"],
    visual: "polyglot",
  },
  {
    id: "contract-governance",
    index: "06",
    title: "AI-Assisted API Contract Governance",
    description:
      "Built an AI-assisted workflow that analyzes OpenAPI diffs generated during application builds, identifies potential breaking changes, and automatically prepares a pull request and change summary in the API specification repository.",
    tech: ["OpenAPI", "AI-assisted CI/CD", "GitLab CI", "API Governance"],
    visual: "governance",
  },
];

export const enpalReliability = {
  title: "Architecture & Reliability",
  description:
    "Authored 10+ architecture decision records, introduced resilience patterns across downstream integrations, and led the deprecation of legacy applications and messaging resources, reducing cloud footprint by 30%+.",
  signals: ["10+ ADRs", "Circuit Breakers", "Retry Policies", "Azure Service Bus", "Cloud Optimization"],
};
