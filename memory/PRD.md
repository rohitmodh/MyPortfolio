# PRD — Rohit Modh Portfolio

## Original problem statement
Build a highly polished, modern, lightweight developer portfolio for Rohit Modh, Senior Backend Engineer / Distributed Systems Engineer (10+ yrs, currently Senior Software Engineer at Enpal, Berlin). Dark, premium, engineering-focused interface — NOT a generic AI/template portfolio. Near-black background, monospace accents, one accent color (electric cyan-blue chosen), high information density, subtle technical details, smooth micro-interactions, excellent performance (Lighthouse >90), mobile-first responsive, accessibility, SEO/OG metadata, no stock photos, no fake stats, no skill percentages.

Required sections: Hero (masked headline reveal + lightweight SVG distributed-system animation with moving data packets), sticky compacting nav with mobile hamburger, About ("Engineer, not just a coder."), expandable Experience timeline (Enpal highlighted), strong Projects section with hover interactions + detail modals (Problem/Architecture/Design Decisions/Challenges/Implementation/Technology/Trade-offs/Results), Engineering principles cards, interactive tech stack (no logo wall), terminal typing section (no constant replay), optional GitHub/code section (static data allowed, no API dependency), minimal contact card, minimal footer. Animations must be CSS/SVG-first, respect prefers-reduced-motion.

## User personas
- Recruiters/hiring managers scanning for senior backend credibility
- Fellow engineers evaluating craftsmanship of both systems and site
- Rohit himself editing content later (data separated from presentation)

## Architecture
- Frontend-only React (CRA + craco, JSX) single-page portfolio; no backend dependency. Backend (FastAPI + MongoDB) left untouched, still serves /api health route.
- Data layer: `/app/frontend/src/data/portfolio.js` (all profile, experience, projects, principles, stack, terminal content).
- Components: Navbar, Hero, ArchitectureVisual (SVG + SMIL animateMotion packets), Marquee, About (count-up), Experience (accordion timeline), Projects + ProjectModal (framer-motion), FlowDiagram (CSS packet drip), Principles, TechStack, Terminal (type-once), Contact, Footer, Section/Reveal helpers.
- Motion: framer-motion (scroll reveals, modal, masked hero reveal) + Lenis smooth scrolling (skipped under prefers-reduced-motion).
- Fonts: Geist + Geist Mono (Google Fonts). Accent: #57c7ff on #08090b.

## Implemented (2026-08-14)
- All sections from the statement: hero w/ animated topology, marquee, about, 5-role experience timeline (real resume data: Enpal, Phreesia, Coditas, Aventri, Capgemini/AON), 5 projects w/ full detail modals + flow diagrams + p99 before/after metric visual, 6 principles, 5-category stack, terminal + static code section, contact, footer.
- SEO + OG metadata, RM SVG favicon, noise overlay, corner ticks, coordinate labels, reduced-motion support.
- Resume download links to latest uploaded PDF; contact details extracted from resume (rohit.modh1602@gmail.com, linkedin.com/in/rohit-modh, github.com/rohitmodh).
- Verified: all sections render, project modal opens/closes, experience accordion toggles, terminal types once, no console errors, backend /api healthy.

## Backlog
- P0: none blocking.
- P1: Lighthouse audit pass & font preloading tuning; mobile device pass on real hardware.
- P2: optional live GitHub API (requires username confirmation); light-mode variant; project detail deep links (routing); blog/writing section.

## Next tasks
1. Confirm GitHub username/repos to optionally wire live GitHub data.
2. Run Lighthouse and tune any perf/a11y findings.
3. Add writing/notes section if Rohit wants to publish ADR-style posts.
