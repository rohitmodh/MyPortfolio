export const profile = {
  name: "Rohit Modh",
  initials: "RM",
  role: "Senior Backend Engineer",
  headline: ["Senior Backend Engineer", "building systems that scale."],
  sub: "10+ years building production-grade backend systems, distributed services, APIs and cloud infrastructure.",
  status: "Currently building at Enpal · Berlin",
  location: "Berlin, Germany",
  coords: "52.5200°N 13.4050°E",
  email: "rohit.modh1602@gmail.com",
  linkedin: "https://linkedin.com/in/rohit-modh",
  github: "https://github.com/rohitmodh",
  resumeUrl:
    "https://customer-assets-eiarnc6j.emergentagent.net/job_b89f0269-46e9-4262-bce3-721f04cb92da/artifacts/k3jfup10_Rohit_Modh_Resume.pdf",
};

export const aboutMeta = [
  { value: 10, suffix: "+", label: "Years Experience", numeric: true },
  { value: "Backend", label: "Engineering Focus" },
  { value: "Distributed", label: "Systems Design" },
  { value: "Cloud", label: "Architecture & IaC" },
  { value: "Production", label: "Systems Ownership" },
];

export const aboutCopy = [
  "I design and operate the backend systems other people's products depend on. Over the past decade I've owned distributed services across their full lifecycle — API contracts, messaging topologies, cloud infrastructure, deployment pipelines and the observability that keeps them honest in production.",
  "My current work at Enpal is identity: resolving fragmented customer records scattered across systems into a single, trustworthy person identity — deterministically, at billions of records per year, in a way an auditor can reason about.",
  "I optimise for boring reliability. Predictable latency, explicit failure modes, clean operational handoffs. The best architecture is the one a team can run at 3 a.m. without me in the room.",
];

export const experience = [
  {
    id: "enpal",
    role: "Senior Software Engineer",
    company: "Enpal",
    period: "2025 — Present",
    location: "Berlin, Germany",
    current: true,
    summary:
      "Technical anchor for customer identity, distributed systems, and API platforms across a multi-service energy-tech backend.",
    achievements: [
      {
        text: "Designed a customer-detection workflow combining address normalization, Azure Maps, and CRM intelligence to identify potential multi-site customers from incoming leads.",
        tags: [".NET", "Azure Maps", "MongoDB", "CRM Integration", "Customer Identity", "Distributed Systems"],
      },
      {
        text: "Designed a deterministic identity-generation service producing consistent 10-digit PersonIds, supporting up to 10 billion identifiers within each yearly namespace for reliable customer identity resolution.",
        tags: ["Go", "Format-Preserving Encryption", "MongoDB", "Cryptography", "Identity Resolution", "Deterministic Systems"],
      },
      {
        text: "Built live and historical address-matching workflows that reconcile normalized customer addresses across MongoDB and CRM systems, including large-scale backfill processing.",
        tags: ["Go", "MongoDB", "Backfill", "Data Consistency", "CRM Synchronization", "Data Reconciliation"],
      },
      {
        text: "Extended a reusable domain-ID generation platform to support additional consumers while maintaining compatibility across existing services.",
        tags: ["Node.js", "Azure Functions", "API Design", "Platform Engineering", "Serverless", "Backward Compatibility"],
      },
      {
        text: "Built and evolved customer and order APIs supporting customer lifecycle workflows, CRM integrations, and service-to-service communication across a polyglot backend.",
        tags: ["Node.js", ".NET", "REST APIs", "Microservices", "CRM Integration", "Backend Systems"],
      },
      {
        text: "Built an AI-assisted CI workflow that analyzes OpenAPI diffs, detects potential breaking changes, and prepares synchronized updates across application and API specification repositories.",
        tags: ["OpenAPI", "AI-assisted Engineering", "CI/CD", "GitLab CI", "API Governance", "Automation"],
      },
      {
        text: "Authored 10+ architecture decision records and introduced resilience patterns that improved failure handling across downstream services and event-driven integrations.",
        tags: ["ADRs", "Circuit Breakers", "Retry Policies", "Azure Service Bus", "Resilience", "Distributed Systems"],
      },
      {
        text: "Led the deprecation of legacy applications and messaging resources, reducing the cloud footprint by 30%+.",
        tags: ["Cloud Optimization", "Legacy Modernization", "Platform Simplification"],
      },
    ],
  },
  {
    id: "phreesia",
    role: "Senior Software Engineer",
    company: "Phreesia",
    period: "2023 — 2025",
    location: "Remote",
    summary:
      "Platform modernisation for a healthcare engagement backend, coordinated asynchronously across product and engineering.",
    achievements: [
      {
        text: "Led architecture discussions to modernize a legacy distributed backend runtime, lifting performance 35% and cutting error rates 25%.",
        tags: [".NET", "Platform", "Availability"],
      },
      {
        text: "Designed decentralized secret-management protocols across microservices, establishing secure configuration standards.",
        tags: ["Security", "Microservices"],
      },
      {
        text: "Built automated CI/CD pipelines and containerized backend services with Docker, cutting deployment times 50%.",
        tags: ["Docker", "CI/CD"],
      },
    ],
  },
  {
    id: "coditas",
    role: "Senior Software Engineer",
    company: "Coditas",
    period: "2022 — 2023",
    location: "India",
    summary:
      "Cloud-native microservices for a distributed enterprise sales platform at sustained production volume.",
    achievements: [
      {
        text: "Built highly available microservices and API workflows processing 100,000+ daily service calls.",
        tags: ["Microservices", "AWS", "APIs"],
      },
      {
        text: "Established centralized observability standards — Grafana, Datadog, OpenTelemetry — accelerating release cycles 40%.",
        tags: ["OpenTelemetry", "Grafana", "Datadog"],
      },
    ],
  },
  {
    id: "aventri",
    role: "Software Engineer",
    company: "Aventri",
    period: "2020 — 2022",
    location: "India",
    summary:
      "Real-time communication infrastructure for an enterprise events platform.",
    achievements: [
      {
        text: "Architected a real-time, distributed communication system scaling to 10,000+ concurrent enterprise users.",
        tags: ["Real-time", "Distributed Systems"],
      },
      {
        text: "Engineered 20+ reusable components and backend optimizations, reducing system load times 30%.",
        tags: ["React", "Performance"],
      },
    ],
  },
  {
    id: "capgemini",
    role: "Software Engineer",
    company: "Capgemini · AON",
    period: "2016 — 2020",
    location: "India",
    summary:
      "Backend integrations for a global risk-mitigation platform at enterprise scale.",
    achievements: [
      {
        text: "Maintained backend API integrations and optimized service-request workflows for 66,000+ distributed enterprise users, improving task completion times 25%.",
        tags: ["APIs", "Enterprise", "Workflows"],
      },
    ],
  },
];

export const projects = [
  {
    id: "identity-resolution",
    index: "01",
    title: "Identity Resolution",
    tagline: "Many records. One person.",
    description:
      "A backend service for resolving multiple global customer identities into a single unified person identity.",
    tech: [".NET 8", "MongoDB", "Azure Service Bus", "Terraform", "OpenTelemetry"],
    flow: ["Source Systems", "Service Bus", "Resolution Engine", "Identity Graph", "PersonId"],
    detail: {
      problem:
        "Customer data was fragmented across sites and source systems — the same physical person existed as several unrelated customer records. Support, offers and downstream processes had no reliable way to know two records belonged to one human.",
      architecture:
        "Source systems publish change events to Azure Service Bus. A .NET 8 resolution engine consumes them idempotently, runs a staged matcher pipeline, and maintains an identity graph in MongoDB. Resolved identities emit downstream events so consumers stay eventually consistent without coupling.",
      decisions: [
        "Deterministic matching over ML scoring — every merge must be explainable and auditable.",
        "Event-driven ingestion to decouple resolution latency from source-system availability.",
        "MongoDB document model for the relationship graph — flexible edges, cheap traversals.",
      ],
      challenges:
        "Conflicting data quality across sources, safe reprocessing of historical backfills, and merge/split semantics when earlier resolutions turn out wrong.",
      implementation:
        "A pipeline of matchers — exact key, normalized composite, fuzzy-with-constraints — each emitting a confidence verdict. Below threshold, records stay separate; above, identities merge with full lineage kept for reversal.",
      tradeoffs:
        "Determinism sacrifices some recall that a learned model might catch. Eventual consistency is accepted everywhere to keep the pipeline available during source outages.",
      results:
        "Multisite customer detection running in production; feeds the PersonId generation service and underpins CRM integrations across the platform.",
    },
  },
  {
    id: "personid-generator",
    index: "02",
    title: "PersonId Generator",
    tagline: "Deterministic identity at billion scale.",
    description:
      "A deterministic, collision-resistant identity generation mechanism built on domain identifiers and validation logic.",
    tech: ["C#", ".NET", "MongoDB", "Bouncy Castle"],
    flow: ["Domain Identifiers", "Derivation", "Format-Preserving Crypto", "Validation", "PersonId"],
    detail: {
      problem:
        "Resolved identities needed a stable, globally unique identifier that downstream systems could store and verify — generated deterministically so the same person always derives the same ID, at a volume of billions per year.",
      architecture:
        "A stateless .NET service derives identifiers from canonical domain inputs using format-preserving cryptography (Bouncy Castle), so outputs fit existing downstream schemas. A validation layer lets any consumer verify an ID without a network call.",
      decisions: [
        "Deterministic derivation instead of random UUIDs — idempotent by construction.",
        "Format preservation so legacy downstream systems require zero migration.",
        "Embedded check logic for offline validation and corruption detection.",
      ],
      challenges:
        "Collision resistance at billion-per-year volume, key management across environments, and proving determinism under every input-normalisation edge case.",
      implementation:
        "Canonicalisation of domain identifiers, keyed derivation with format-preserving encryption, and check-digit style validation. Collision behaviour verified with large-scale batch simulations before production rollout.",
      tradeoffs:
        "Key rotation is harder than with random IDs — derivation inputs are versioned so historical IDs stay verifiable.",
      results:
        "Billions of deterministic, collision-resistant identifiers generated annually; zero collision incidents in production.",
    },
  },
  {
    id: "address-intelligence",
    index: "03",
    title: "Address Intelligence",
    tagline: "Same place, spelled a hundred ways.",
    description:
      "Address normalization, hashing and deduplication infrastructure for identifying equivalent customer addresses.",
    tech: [".NET", "MongoDB", "Backfill Orchestration"],
    flow: ["Raw Addresses", "Normalization", "Canonical Hash", "Dedup Index", "Match API"],
    detail: {
      problem:
        "Addresses entered across channels and years never match literally — abbreviations, local formats, typos. Without equivalence detection, deduplication and identity work built on top of addresses silently fails.",
      architecture:
        "A normalization pipeline converts raw addresses into a canonical form, hashes the result into a stable equivalence key, and maintains a dedup index in MongoDB. A backfill orchestrator reprocesses historical records in resumable batches.",
      decisions: [
        "Normalize-then-hash over pairwise comparison — O(1) lookups instead of O(n²) matching.",
        "Backfills as resumable, idempotent jobs with checkpoints — safe to interrupt and rerun.",
      ],
      challenges:
        "Locale-specific address formats, and running a full historical backfill against live production traffic without degrading p99.",
      implementation:
        "Rule-based normalization stages with a canonical hashing step; throttled backfill workers that yield under production load and checkpoint progress per batch.",
      tradeoffs:
        "Rule-based normalization needs ongoing locale tuning — accepted in exchange for full explainability of every equivalence decision.",
      results:
        "Address equivalence detection feeding identity resolution; historical corpus fully backfilled with zero production incidents.",
    },
  },
  {
    id: "dotnet-migration",
    index: "04",
    title: "Node.js → .NET 8 Migration",
    tagline: "Legacy runtime, modern throughput.",
    description:
      "Modernized legacy backend services from Node.js to .NET 8 — measurably faster, cheaper to run, easier to reason about.",
    tech: [".NET 8", "Node.js", "MongoDB", "OpenTelemetry", "GitHub Actions"],
    metric: { label: "p99 latency", before: "Node.js baseline", after: ".NET 8", improvement: "~40%" },
    flow: ["Legacy Node.js", "Strangler Seams", ".NET 8 Services", "Contract Tests", "Cutover"],
    detail: {
      problem:
        "Legacy Node.js services carried years of accumulated coupling — unpredictable p99 latency under load, weak typing at API boundaries, and rising operational cost per request.",
      architecture:
        "Strangler-fig migration: .NET 8 services grew behind stable API contracts while contract tests guaranteed parity. Traffic shifted route-by-route; OpenTelemetry traced both runtimes side-by-side throughout the cutover.",
      decisions: [
        "Incremental cutover behind contracts instead of a big-bang rewrite.",
        "Performance budgets enforced in CI — regressions blocked at pull request.",
        "Tracing both runtimes to prove parity before decommissioning.",
      ],
      challenges:
        "Behavioural parity for undocumented edge cases, and maintaining feature velocity while two runtimes coexisted.",
      implementation:
        "Route-by-route migration with shadow-traffic comparison, histogram-level latency verification, then legacy decommissioning of code, infrastructure and messaging resources.",
      tradeoffs:
        "Running two stacks temporarily doubled operational surface — the price of zero-downtime certainty.",
      results:
        "p99 API response times improved ~40%; legacy services and infrastructure fully decommissioned, simplifying event flows platform-wide.",
    },
  },
  {
    id: "rate-limiter",
    index: "05",
    title: "Distributed Rate Limiter",
    tagline: "Personal engineering build, in Go.",
    description:
      "A production-style distributed rate limiter demonstrating concurrency, middleware, Redis and scalable API architecture.",
    tech: ["Go", "Redis", "gRPC", "Concurrency", "Docker"],
    personal: true,
    link: "https://github.com/rohitmodh",
    flow: ["Request", "Middleware", "Sliding Window (Redis)", "Allow / Throttle", "Metrics"],
    detail: {
      problem:
        "A self-imposed brief: build infrastructure I'd be proud to run — a rate limiter that protects downstream APIs from anomalous traffic spikes, engineered to production standards rather than tutorial standards.",
      architecture:
        "Go middleware intercepts requests and evaluates a sliding-window log stored in Redis, giving precise per-key throttling across horizontally scaled instances. gRPC keeps the hot path low-overhead; Prometheus hooks expose allow/deny rates.",
      decisions: [
        "Sliding-window log over fixed windows — no burst passes at window boundaries.",
        "Redis as shared state so limits hold across every instance, not per process.",
        "Fail-open with alerting: an unavailable limiter must degrade, never block traffic.",
      ],
      challenges:
        "Keeping the Redis round-trip off the latency-critical path, and proving correctness under concurrent load rather than assuming it.",
      implementation:
        "Atomic Lua scripts for window evaluation, a benchmarking suite exercising contention patterns, containerized deployment, CI pipeline, structured config and full test coverage.",
      tradeoffs:
        "Sliding-window log costs more memory per key than counters — accepted for accuracy, bounded by window TTLs.",
      results:
        "Shipped as production-ready software: benchmarks, CI, observability and containerized deployment. Cut simulated infrastructure exhaustion by 40%. Also my forcing function for going deep on Go and its concurrency model.",
    },
  },
];

export const principles = [
  {
    n: "01",
    title: "Design for failure",
    body: "Every dependency fails eventually. Timeouts, retries with backoff, circuit breakers and graceful degradation get designed in — not bolted on after the first incident.",
  },
  {
    n: "02",
    title: "Measure before optimizing",
    body: "Latency claims need histograms, not hunches. Profile against real production distributions first — p99 tells the truth that averages hide.",
  },
  {
    n: "03",
    title: "Prefer simple architectures",
    body: "Every service, queue and datastore is operational debt. New moving parts earn their place only when the scaling or isolation case is proven.",
  },
  {
    n: "04",
    title: "Make systems observable",
    body: "Tracing, structured logs and metrics are part of the feature. If you can't watch a request cross service boundaries, you don't own the system.",
  },
  {
    n: "05",
    title: "Automate repetitive work",
    body: "If a human does it twice, it becomes a pipeline. CI/CD, contract checks and infrastructure as code delete the entire 'forgot a step' outage class.",
  },
  {
    n: "06",
    title: "Optimize for maintainability",
    body: "Code is read far more than it runs. Clear boundaries, honest naming and written ADRs let the next engineer move faster than I did.",
  },
];

export const stack = [
  { id: "languages", label: "Languages", items: ["C#", "TypeScript", "JavaScript", "Go"] },
  { id: "backend", label: "Backend", items: [".NET", "Node.js", "REST", "Microservices", "FastEndpoints"] },
  { id: "data", label: "Data & Messaging", items: ["MongoDB", "MySQL", "Redis", "Kafka", "RabbitMQ"] },
  { id: "cloud", label: "Cloud & Infra", items: ["AWS", "Azure", "GCP", "Terraform", "Docker"] },
  { id: "observability", label: "Observability", items: ["OpenTelemetry", "Datadog", "Grafana"] },
];

export const terminalLines = [
  { cmd: "whoami", out: "rohit-modh" },
  { cmd: "focus", out: "distributed-systems" },
  { cmd: "currently-learning", out: "go + concurrency" },
  { cmd: "architecture", out: "microservices / event-driven" },
  { cmd: "location", out: "berlin, de" },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Engineering", href: "#engineering" },
  { label: "Contact", href: "#contact" },
];
