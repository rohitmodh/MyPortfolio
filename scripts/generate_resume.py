"""Regenerate Rohit Modh's resume PDF from the portfolio's final wording."""
from fpdf import FPDF

FONT_DIR = "/opt/plugins-venv/lib/python3.11/site-packages/reportlab/fonts"
OUT = "/app/frontend/public/Rohit_Modh_Resume.pdf"

SUMMARY = (
    "Senior Backend Engineer with 10+ years building production-grade backend systems, distributed "
    "services, APIs and cloud infrastructure. I build and operate backend systems across their full "
    "lifecycle - from API and service design to messaging, cloud infrastructure, deployment, testing, "
    "and production observability - across polyglot backend environments. Currently technical anchor "
    "for customer identity, distributed systems, and API platforms at Enpal, driving architecture "
    "through RFCs and architecture decisions. Open to senior backend engineering roles focused on "
    "distributed systems, scalable APIs, and production-grade platforms."
)

EXPERIENCE = [
    {
        "role": "Senior Software Engineer - Enpal",
        "meta": "2025 - Present  |  Berlin, Germany",
        "summary": (
            "Technical anchor for customer identity, distributed systems, and API platforms across a "
            "multi-service energy-tech backend."
        ),
        "bullets": [
            "Designed a customer-detection workflow combining address normalization, Azure Maps, and CRM intelligence to identify potential multi-site customers from incoming leads.",
            "Designed a deterministic identity-generation service producing consistent 10-digit PersonIds, supporting up to 10 billion identifiers within each yearly namespace for reliable customer identity resolution.",
            "Built live and historical address-matching workflows that reconcile normalized customer addresses across MongoDB and CRM systems, including large-scale backfill processing.",
            "Extended a reusable domain-ID generation platform to support additional consumers while maintaining compatibility across existing services.",
            "Built and evolved customer and order APIs supporting customer lifecycle workflows, CRM integrations, and service-to-service communication across a polyglot backend.",
            "Built an AI-assisted CI workflow that analyzes OpenAPI diffs, detects potential breaking changes, and prepares synchronized updates across application and API specification repositories.",
            "Authored 10+ architecture decision records and introduced resilience patterns that improved failure handling across downstream services and event-driven integrations.",
            "Led the deprecation of legacy applications and messaging resources, reducing the cloud footprint by 30%+.",
            "Redesigned sequential CI pipelines into parallel multi-stage workflows using build artifacts, reducing pull-request build and merge time from 12-14 minutes to 5.5 minutes.",
            "Automated development and staging deployments after pull requests are merged, replacing manual environment-specific tagging and reducing repetitive developer effort.",
            "Established layered test coverage across unit, integration, end-to-end, and load testing for backend services with CRM and external-system dependencies.",
        ],
    },
    {
        "role": "Senior Software Engineer - Phreesia",
        "meta": "2023 - 2025  |  Remote",
        "summary": "Platform modernisation for a healthcare engagement backend, coordinated asynchronously across product and engineering.",
        "bullets": [
            "Led architecture discussions to modernize a legacy distributed backend runtime, lifting performance 35% and cutting error rates 25%.",
            "Designed decentralized secret-management protocols across microservices, establishing secure configuration standards.",
            "Built automated CI/CD pipelines and containerized backend services with Docker, cutting deployment times 50%.",
        ],
    },
    {
        "role": "Senior Software Engineer - Coditas",
        "meta": "2022 - 2023  |  India",
        "summary": "Cloud-native microservices for a distributed enterprise sales platform at sustained production volume.",
        "bullets": [
            "Built highly available microservices and API workflows processing 100,000+ daily service calls.",
            "Established centralized observability standards - Grafana, Datadog, OpenTelemetry - accelerating release cycles 40%.",
        ],
    },
    {
        "role": "Software Engineer - Aventri",
        "meta": "2020 - 2022  |  India",
        "summary": "Real-time communication infrastructure for an enterprise events platform.",
        "bullets": [
            "Architected a real-time, distributed communication system scaling to 10,000+ concurrent enterprise users.",
            "Engineered 20+ reusable components and backend optimizations, reducing system load times 30%.",
        ],
    },
    {
        "role": "Software Engineer - Capgemini (Client: AON)",
        "meta": "2016 - 2020  |  India",
        "summary": "Backend integrations for a global risk-mitigation platform at enterprise scale.",
        "bullets": [
            "Maintained backend API integrations and optimized service-request workflows for 66,000+ distributed enterprise users, improving task completion times 25%.",
        ],
    },
]

PROJECTS = [
    ("Multisite Customer Detection", "Customer-detection workflow combining address normalization, Azure Maps, and CRM intelligence to identify potential multi-site customers from incoming leads."),
    ("PersonId & Identity Resolution", "Deterministic identity-generation service producing consistent 10-digit PersonIds - up to 10 billion identifiers within each yearly namespace - unifying fragmented customer identities across systems."),
    ("Address Matching & Data Backfill", "Live and historical address-matching workflows reconciling normalized customer addresses across MongoDB and CRM systems, including large-scale backfill processing."),
    ("AI-Assisted API Contract Governance", "AI-assisted CI workflow analyzing OpenAPI diffs, detecting potential breaking changes, and preparing synchronized updates across application and API specification repositories."),
    ("Distributed Rate Limiter (personal)", "Production-style distributed rate limiter in Go using a Redis sliding-window log, shipped with benchmarks, containerized deployment, CI, and observability hooks."),
    ("CI Pipeline Parallelization", "Redesigned sequential CI pipelines into parallel multi-stage workflows using build artifacts, cutting pull-request build and merge time from 12-14 minutes to 5.5 minutes."),
]

STACK = [
    ("Languages", "Go, C#, TypeScript, JavaScript"),
    ("Backend & APIs", ".NET, Node.js, REST, Microservices, FastEndpoints, gRPC, Azure Functions"),
    ("Distributed Systems", "Distributed Systems, Event-Driven Architecture, Message Queues, Resilience, Service-to-Service Communication"),
    ("Data & Messaging", "MongoDB, MySQL, Redis, Kafka, RabbitMQ, Azure Service Bus"),
    ("Cloud & Infra", "AWS, Azure, GCP, Terraform, Docker"),
    ("Testing & Quality", "Unit Testing, Integration Testing, E2E Testing, Load Testing, Test Pyramid"),
    ("CI/CD & Delivery", "GitLab CI, CI/CD, Pipeline Optimization, Build Artifacts, Deployment Automation"),
    ("Architecture", "API Design, OpenAPI, Architecture Decisions, System Design, Legacy Modernization, Cloud Optimization"),
    ("Observability", "OpenTelemetry, Datadog, Grafana"),
]


class Resume(FPDF):
    def footer(self):
        self.set_y(-12)
        self.set_font("vera", "", 7.5)
        self.set_text_color(130)
        self.cell(0, 6, "Rohit Modh  ·  Senior Backend Engineer  ·  rohit.modh1602@gmail.com", align="C")


pdf = Resume(orientation="P", unit="mm", format="A4")
pdf.set_auto_page_break(auto=True, margin=16)
pdf.set_margins(16, 14, 16)
pdf.add_page()
pdf.add_font("vera", "", f"{FONT_DIR}/Vera.ttf")
pdf.add_font("vera", "B", f"{FONT_DIR}/VeraBd.ttf")
pdf.add_font("vera", "I", f"{FONT_DIR}/VeraIt.ttf")

W = 178


def section(title):
    pdf.ln(3.5)
    pdf.set_font("vera", "B", 10.5)
    pdf.set_text_color(18, 56, 104)
    pdf.cell(0, 6, title.upper())
    pdf.ln(7)
    pdf.set_draw_color(18, 56, 104)
    pdf.set_line_width(0.3)
    pdf.line(16, pdf.get_y(), 194, pdf.get_y())
    pdf.ln(2.5)
    pdf.set_text_color(35)


def body(text, size=9, style=""):
    pdf.set_font("vera", style, size)
    pdf.multi_cell(0, 4.4, text, new_x="LMARGIN", new_y="NEXT")


def bullet(text):
    pdf.set_font("vera", "", 9)
    pdf.set_x(18)
    pdf.multi_cell(W - 2, 4.4, "-  " + text, new_x="LMARGIN", new_y="NEXT")
    pdf.ln(0.6)


# Header
pdf.set_font("vera", "B", 19)
pdf.set_text_color(15)
pdf.cell(0, 9, "ROHIT MODH")
pdf.ln(9.5)
pdf.set_font("vera", "", 10.5)
pdf.set_text_color(18, 56, 104)
pdf.cell(0, 5.5, "Senior Backend Engineer  ·  Distributed Systems · Cloud · Microservices")
pdf.ln(6.5)
pdf.set_font("vera", "", 8.5)
pdf.set_text_color(80)
pdf.cell(0, 4.5, "Berlin, Germany  ·  rohit.modh1602@gmail.com  ·  rohit.modh.workers.dev")
pdf.ln(5)
pdf.cell(0, 4.5, "linkedin.com/in/rohit-modh  ·  github.com/rohitmodh")
pdf.ln(5)
pdf.cell(0, 4.5, "Open to senior backend engineering roles - India · Remote")
pdf.ln(2)

section("Summary")
body(SUMMARY)

section("Experience")
for job in EXPERIENCE:
    pdf.set_font("vera", "B", 10)
    pdf.set_text_color(15)
    pdf.multi_cell(0, 5, job["role"], new_x="LMARGIN", new_y="NEXT")
    pdf.set_font("vera", "I", 8.5)
    pdf.set_text_color(90)
    pdf.multi_cell(0, 4.4, job["meta"], new_x="LMARGIN", new_y="NEXT")
    pdf.set_text_color(35)
    pdf.ln(0.4)
    body(job["summary"], size=9, style="I")
    pdf.ln(0.8)
    for b in job["bullets"]:
        bullet(b)
    pdf.ln(1.5)

section("Selected Projects")
for title, desc in PROJECTS:
    pdf.set_font("vera", "B", 9)
    pdf.set_x(18)
    pdf.multi_cell(W - 2, 4.4, title, new_x="LMARGIN", new_y="NEXT")
    pdf.set_font("vera", "", 9)
    pdf.set_x(18)
    pdf.multi_cell(W - 2, 4.4, desc, new_x="LMARGIN", new_y="NEXT")
    pdf.ln(1.2)

section("Engineering Stack")
for label, items in STACK:
    pdf.set_font("vera", "B", 9)
    pdf.set_x(18)
    pdf.cell(42, 4.4, label)
    pdf.set_font("vera", "", 9)
    pdf.multi_cell(0, 4.4, items, new_x="LMARGIN", new_y="NEXT")
    pdf.ln(0.8)

section("Education & Certifications")
bullet("B.Tech, Computer Science - Lovely Professional University, 2012 - 2016")
bullet("AWS Certified Cloud Practitioner - Amazon Web Services")

pdf.output(OUT)
print("written:", OUT)
