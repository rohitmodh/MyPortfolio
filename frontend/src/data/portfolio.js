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
  resumeUrl: "/Rohit_Modh_Resume.pdf",
};

export const aboutMeta = [
  { value: 10, suffix: "+", label: "Years Experience", numeric: true },
  { value: "Backend", label: "Engineering" },
  { value: "Distributed", label: "Systems" },
  { value: "Cloud", label: "Infrastructure" },
  { value: "Production", label: "Ownership" },
];

export const aboutCopy = [
  "I build and operate backend systems across their full lifecycle — from API and service design to messaging, cloud infrastructure, deployment, testing, and production observability. Over the past decade, I’ve worked across polyglot backend environments, solving problems around distributed systems, data consistency, customer identity, and platform reliability.",
  "At Enpal, my work spans customer identity and backend platforms, while driving technical architecture through RFCs and architecture decisions, translating ambiguous product requirements into maintainable systems, and collaborating asynchronously across engineering and product teams.",
  "I also own the path from code to production — improving CI/CD, managing deployments for my team, and building confidence through layered testing across unit, integration, end-to-end, and load testing. I look beyond individual services as well, analyzing legacy systems and infrastructure, simplifying operational dependencies, and improving the cloud footprint where the engineering trade-offs make sense.",
  "I optimize for systems that are predictable under failure, observable in production, well tested, and straightforward for teams to evolve.",
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
        text: "Built an event-driven customer search platform mapping CRM events from multiple sources into one canonical model in Elasticsearch — searchable by Global Customer ID, Sign-up ID, Order Number, and PersonId, with as-you-type name search.",
        tags: [".NET", "Elasticsearch", "Azure Event Hub", "Kafka", "Canonical Model", "Search"],
      },
      {
        text: "Designed a customer-detection workflow combining address normalization, Azure Maps, and CRM intelligence to identify potential multi-site customers from incoming leads.",
        tags: [".NET", "Azure Maps", "MongoDB", "CRM Integration", "Customer Identity", "Distributed Systems"],
      },
      {
        text: "Designed a deterministic identity-generation service producing consistent 10-digit PersonIds, supporting up to 10 billion identifiers within each yearly namespace for reliable customer identity resolution.",
        tags: [".NET", "Format-Preserving Encryption", "MongoDB", "Cryptography", "Identity Resolution", "Deterministic Systems"],
      },
      {
        text: "Built live and historical address-matching workflows that reconcile normalized customer addresses across MongoDB and CRM systems, including large-scale backfill processing.",
        tags: [".NET", "MongoDB", "Backfill", "Data Consistency", "CRM Synchronization", "Data Reconciliation"],
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
      {
        text: "Redesigned sequential CI pipelines into parallel multi-stage workflows using build artifacts, reducing pull-request build and merge time from 12–14 minutes to 5.5 minutes.",
        tags: ["CI/CD", "GitLab CI", "Parallel Jobs", "Build Artifacts", "Pipeline Optimization", "Developer Experience"],
      },
      {
        text: "Automated development and staging deployments after pull requests are merged, replacing manual environment-specific tagging and reducing repetitive developer effort.",
        tags: ["CI/CD", "Deployment Automation", "GitLab CI", "DevOps", "Developer Experience", "Release Engineering"],
      },
      {
        text: "Established layered test coverage across unit, integration, end-to-end, and load testing for backend services with CRM and external-system dependencies.",
        tags: ["Test Pyramid", "Unit Testing", "Integration Testing", "E2E Testing", "Load Testing", "Quality Engineering"],
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
    id: "unified-customer-search",
    index: "01",
    title: "Unified Customer Search",
    tagline: "Many CRMs. One canonical customer.",
    description:
      "An event-driven search platform that maps customer events from multiple CRMs into one canonical model in Elasticsearch — searchable by Global Customer ID, Sign-up ID, Order Number, and PersonId, with as-you-type name search.",
    tech: [
      ".NET",
      "Azure Event Hub",
      "Kafka",
      "CRM Integration",
      "Background Services",
      "Batch Processing",
      "Elasticsearch",
      "Bulk APIs",
      "Resiliency",
    ],
    horizontal: true,
    flowType: "search",
    flow: ["CRM Events", "Ingestion (.NET)", "Field Mapping", "Canonical Model", "Elasticsearch", "Search API"],
    flowNote:
      "KEYWORD: GLOBAL CUSTOMER ID · SIGN-UP ID · ORDER NUMBER · PERSONID\nSEARCH-AS-YOU-TYPE: FIRST & LAST NAME",
    detail: {
      problem:
        "Customer events arrive from multiple CRMs, each with its own schema and identifier conventions. Without a shared structure, no system could answer a simple question — find this customer — consistently across all of them.",
      architecture:
        "CRM events stream through Azure Event Hub and Kafka into .NET ingestion background services. Each event is mapped — its identifiers and a core set of fields — into one canonical customer model, so every CRM speaks the same structure. Canonical documents are batch-processed and indexed into Elasticsearch via the bulk APIs. Search APIs then serve consumers by querying Elasticsearch directly with Query DSL: exact identifier lookups on keyword fields, plus search-as-you-type on first and last name.",
      decisions: [
        "Canonical model as the contract — every CRM maps into one structure instead of building N×N integrations.",
        "Elasticsearch keyword type for identifiers (Global Customer ID, Sign-up ID, Order Number, PersonId) — exact, deterministic matches with no analyzer interference.",
        "search-as-you-type for first and last name — instant prefix matching for humans, without compromising identifier precision.",
        "Search APIs read straight from Elasticsearch via Query DSL — consumers get one search surface without touching ingestion.",
        "Bulk API batch indexing over per-event writes — throughput without pressuring the ingestion hot path.",
      ],
      challenges:
        "Mapping inconsistent CRM schemas into one model without losing meaning; keeping ingestion resilient under event spikes; and keeping deterministic IDs aligned with the PersonId generator as events arrive out of order.",
      implementation:
        ".NET background services consume Event Hub and Kafka topics, normalize and map each payload into the canonical model, derive deterministic IDs linked to the PersonId generator, and bulk-index into Elasticsearch. A set of Search APIs exposes the index to consumers through Query DSL — keyword filters for identifiers and search-as-you-type for names. Retry policies and circuit breakers protect the pipeline end to end.",
      tradeoffs:
        "A canonical model is a deliberate compromise — it holds the shared core of every CRM, not every source-specific field. Accepted in exchange for one searchable structure across all sources.",
      results:
        "One search surface across every CRM: Search APIs querying Elasticsearch via Query DSL give consumers exact lookup by Global Customer ID, Sign-up ID, Order Number or PersonId, plus as-you-type name search — fed by a resilient, event-driven ingestion pipeline built entirely in .NET.",
    },
  },
  {
    id: "multisite-detection",
    index: "02",
    title: "Multisite Customer Detection",
    tagline: "Is this lead already our customer?",
    description:
      "A customer-detection workflow combining address normalization, Azure Maps, and CRM intelligence to identify potential multi-site customers from incoming leads.",
    tech: [".NET", "Azure Maps", "MongoDB", "CRM Integration"],
    flow: ["Incoming Lead", "Address", "Normalize", "CRM Lookup", "Existing Customer?", "Multisite Detection"],
    detail: {
      problem:
        "Leads arrive across channels with raw address data. An incoming lead can belong to a customer Enpal already serves at another site — treated as net-new, it loses all existing customer context and creates duplicates downstream.",
      architecture:
        "On intake, the lead's raw address is normalized via Azure Maps, the normalized form is looked up against CRM customer records, and the detection decision links the lead to an existing multi-site customer when the evidence holds.",
      decisions: [
        "Normalize before matching — raw address text is never compared directly.",
        "CRM stays the source of truth; the workflow links leads to customers instead of creating parallel records.",
        "Ambiguous cases surface for review instead of auto-linking.",
      ],
      challenges:
        "Address quality varies by channel, and a false positive — attaching a lead to the wrong customer — is costlier than a missed link.",
      implementation:
        "A deterministic pipeline in .NET: ingest lead, normalize address, CRM lookup, classify. Mappings persist in MongoDB, and each stage is independently observable so detection quality is measured, not assumed.",
      tradeoffs:
        "Conservative matching intentionally misses some legitimate multisite links in exchange for never misattributing a lead.",
      results:
        "Multi-site customers are identified from incoming leads at intake instead of being discovered downstream by support or operations.",
    },
  },
  {
    id: "personid-resolution",
    index: "03",
    title: "PersonId & Identity Resolution",
    tagline: "Same input. Same PersonId.",
    description:
      "A deterministic identity-generation service producing consistent 10-digit PersonIds — up to 10 billion identifiers within each yearly namespace — unifying fragmented customer identities across systems.",
    tech: [".NET", "Format-Preserving Encryption", "MongoDB", "Cryptography"],
    flow: ["Input", "Sequential Identifier", "FPE + Key + Year/Version Tweak", "10-digit PersonId", "Identity Mapping"],
    detail: {
      problem:
        "Fragmented customer identities across systems needed one stable identifier — reproducible, human-compatible at 10 digits, and verifiable without a lookup.",
      architecture:
        "A .NET service applies format-preserving encryption over sequential inputs with a key and a year/version-based tweak, deriving deterministic 10-digit PersonIds. Mappings persist in MongoDB for identity resolution.",
      decisions: [
        "FPE over random UUIDs — output stays 10-digit and fits existing schemas.",
        "Year/version-based tweak namespaces each era — up to 10 billion identifiers per yearly namespace.",
        "Deterministic by construction: the same input always derives the same PersonId.",
      ],
      challenges:
        "Guaranteeing determinism across key and version rotations, and proving collision behaviour across the sequential input space of each namespace.",
      implementation:
        "A sequential identifier per resolved identity, encrypted with format-preserving encryption keyed with a yearly tweak; the mapping store in MongoDB keeps re-derivation verifiable offline.",
      tradeoffs:
        "Sequential inputs simplify determinism but demand strict single-writer discipline for sequence allocation within each namespace.",
      results:
        "Fragmented records across systems resolve under one reproducible 10-digit PersonId, with each yearly namespace supporting up to 10 billion identifiers.",
    },
  },
  {
    id: "address-matching",
    index: "04",
    title: "Address Matching & Data Backfill",
    tagline: "One mapping — live and historical.",
    description:
      "Live and historical address-matching workflows that reconcile normalized customer addresses across MongoDB and CRM systems, including large-scale backfill processing.",
    tech: [".NET", "MongoDB", "Backfill", "CRM Synchronization"],
    flow: ["Incoming / Historical", "Normalize", "Hash", "MongoDB Mapping", "CRM Reconciliation"],
    detail: {
      problem:
        "Address matching had to serve two worlds at once: live requests entering the funnel and years of historical records — and both must converge on the same mapping.",
      architecture:
        "Live path: incoming request → normalize → hash → MongoDB mapping → CRM. Historical path: existing records → backfill → the same address mapping → continuous CRM reconciliation as leads progress through the funnel.",
      decisions: [
        "One canonical normalize-and-hash pipeline shared by live and backfill paths — no divergent logic to reconcile later.",
        "Backfills as resumable jobs; CRM reconciliation runs continuously instead of as a one-shot migration.",
      ],
      challenges:
        "Running large-scale backfill next to live traffic without contention, while CRM state keeps changing underneath it.",
      implementation:
        ".NET services normalize and hash addresses into MongoDB mappings; backfill workers checkpoint batches; a reconciliation loop keeps CRM in sync as leads advance.",
      tradeoffs:
        "Continuous reconciliation converges more slowly than a big-bang sync, but it never blocks the funnel and is safe to rerun.",
      results:
        "Live and historical addresses resolve into one mapping, with CRM kept continuously consistent as leads move through the funnel.",
    },
  },
  {
    id: "contract-governance",
    index: "05",
    title: "AI-Assisted API Contract Governance",
    tagline: "The pipeline owns compatibility.",
    description:
      "An AI-assisted CI workflow that analyzes OpenAPI diffs, detects potential breaking changes, and prepares synchronized updates across application and API specification repositories.",
    tech: ["OpenAPI", "AI-assisted Engineering", "GitLab CI", "API Governance"],
    flow: [
      "Application PR",
      "Build Pipeline",
      "OpenAPI Diff",
      "AI-assisted Analysis",
      "Breaking Change Detection",
      "Generated PR + Summary",
      "API Spec Repository",
    ],
    detail: {
      problem:
        "Breaking OpenAPI changes surfaced late — sometimes via consumers. Compatibility enforcement had to move into the delivery pipeline itself.",
      architecture:
        "Every application PR triggers a GitLab CI build that generates an OpenAPI diff. An AI-assisted analysis stage classifies the changes and flags potential breaking changes; automation then prepares a pull request with a change summary in the API specification repository.",
      decisions: [
        "The pipeline — not reviewers' memory — owns compatibility enforcement.",
        "AI assists analysis and summarization; the auditable artifact stays a human-reviewable PR.",
        "Detection runs on every build, so contract drift is caught at authoring time.",
      ],
      challenges:
        "Separating genuinely breaking changes from compatible evolutions, and keeping generated summaries precise enough to review at a glance.",
      implementation:
        "A CI stage emits the spec diff; AI-assisted analysis annotates each change; automation opens a PR with the change summary into the specification repository, keeping cross-repo contracts synchronized.",
      tradeoffs:
        "Automated detection can flag conservative false positives — acceptable, since a human reviews the generated PR before merge.",
      results:
        "Contract compatibility is enforced on every build, with synchronized updates prepared automatically across application and API specification repositories.",
    },
  },
  {
    id: "rate-limiter",
    index: "06",
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
  {
    id: "ci-pipeline",
    index: "07",
    title: "CI Pipeline Parallelization",
    tagline: "Feedback loops, measured in minutes saved.",
    description:
      "Redesigned sequential CI pipelines into parallel multi-stage workflows using build artifacts, cutting pull-request build and merge time from 12–14 minutes to 5.5 minutes.",
    tech: ["GitLab CI", "CI/CD", "Pipeline Optimization", "Build Artifacts", "Deployment Automation"],
    metric: {
      label: "PR build + merge time",
      before: "Sequential · 12–14 min",
      after: "Parallel · 5.5 min",
      improvement: "~60%",
      afterWidth: "42%",
    },
    flow: ["Pull Request", "Parallel Stages", "Build Artifacts", "Test & Package", "Merge — 5.5 min"],
    detail: {
      problem:
        "Pull-request pipelines ran sequentially — build, test, package, one stage at a time. Every PR waited 12–14 minutes for build and merge, and the wait compounded across a team merging all day.",
      architecture:
        "The pipeline was redesigned into parallel multi-stage workflows on GitLab CI: independent jobs run concurrently, and build artifacts are passed between stages so downstream jobs reuse outputs instead of rebuilding them.",
      decisions: [
        "Parallelize by dependency graph, not by guesswork — jobs run concurrently only when their inputs allow it.",
        "Artifacts as the handoff between stages — each stage builds on previous output, nothing is recomputed.",
      ],
      challenges:
        "Untangling hidden stage dependencies that made naive parallelization flaky, and keeping artifact passing deterministic across runners.",
      implementation:
        "Mapped the existing sequential pipeline into a dependency graph, split it into parallel stages with explicit artifact contracts, and validated timings against real pull-request traffic before rollout.",
      tradeoffs:
        "Parallel stages consume more concurrent runners — an infrastructure cost traded directly for developer time.",
      results:
        "Pull-request build and merge time dropped from 12–14 minutes to 5.5 minutes, shortening the feedback loop on every change the team ships.",
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
  {
    n: "07",
    title: "Test in layers",
    body: "Unit tests for logic, integration tests for boundaries, end-to-end for critical paths, load tests for behaviour under pressure. Each layer catches what the others miss — confidence in a system is built, not assumed.",
  },
];

export const stack = [
  { id: "languages", label: "Languages", items: ["Go", "C#", "TypeScript", "JavaScript"] },
  { id: "backend", label: "Backend & APIs", items: [".NET", "Node.js", "REST", "Microservices", "FastEndpoints", "gRPC", "Azure Functions"] },
  { id: "distributed", label: "Distributed Systems", items: ["Distributed Systems", "Event-Driven Architecture", "Message Queues", "Resilience", "Service-to-Service Communication"] },
  { id: "data", label: "Data & Messaging", items: ["MongoDB", "MySQL", "Redis", "Kafka", "RabbitMQ", "Azure Service Bus", "Elasticsearch", "Azure Event Hub"] },
  { id: "cloud", label: "Cloud & Infra", items: ["AWS", "Azure", "GCP", "Terraform", "Docker"] },
  { id: "testing", label: "Testing & Quality", items: ["Unit Testing", "Integration Testing", "E2E Testing", "Load Testing", "Test Pyramid"] },
  { id: "cicd", label: "CI/CD & Delivery", items: ["GitLab CI", "CI/CD", "Pipeline Optimization", "Build Artifacts", "Deployment Automation"] },
  { id: "architecture", label: "Architecture", items: ["API Design", "OpenAPI", "Architecture Decisions", "System Design", "Legacy Modernization", "Cloud Optimization"] },
  { id: "observability", label: "Observability", items: ["OpenTelemetry", "Datadog", "Grafana"] },
];

export const terminalLines = [
  { cmd: "whoami", out: "rohit-modh" },
  { cmd: "focus", out: "distributed-systems" },
  { cmd: "currently-learning", out: "go + concurrency" },
  { cmd: "architecture", out: "microservices / event-driven" },
  { cmd: "location", out: "berlin, de" },
  { cmd: "deployments", out: "automated — merge → dev/staging" },
  { cmd: "pipeline", out: "parallel · 12–14min → 5.5min" },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Engineering", href: "#engineering" },
  { label: "Contact", href: "#contact" },
];
