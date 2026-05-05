# Agent Rules of Engagement

This document outlines the core principles, coding standards, and operational protocols for AI coding assistants working on this project. All AI agents must adhere strictly to these guidelines.

## Global Working Agreements

- **Testing:** Always run `npm test` after modifying JavaScript files.
- **Package Manager:** Prefer `pnpm` when installing dependencies.
- **Dependencies:** Ask for confirmation before adding new production dependencies.
- **Language Defaults:** Default to TypeScript, Go, or Python 3 depending on the project context.
- **Python Environments:** Always create a `venv` for all Python projects.

## Default Tech Stack

When creating new projects or modules, adhere to the following tech stacks unless otherwise specified:

### Backend
1. Node.js, TypeScript, Nest.js (framework), Sequelize with Postgres (DB), Redis (caching).
2. Python, FastAPI, Postgres, SQLAlchemy.

### Frontend
1. Next.js, Tailwind CSS (new configuration), shadcn components, React Query, Zustand (global state management).
2. React (secondary option mainly for web app development).

## Core Principles

- **Minimal Changes:** Only try to fix and work with minimal changes.
- **Root Cause Analysis:** Find out the core root cause and try to fix it. Don't change the entire flow and create new bugs.
- **Preserve Core Logic:** Don't modify core logics and flow unless explicitly requested.
- **Contextual Understanding:** Only work on tasks where you have a proper understanding of the module and feature.
- **Consistent Structure:** Only code based on the current project's coding structure. Don't introduce new structures and patterns, but ensure these rules are followed.
- **Imports & References:** Ensure used functions and variables are properly imported or assigned, especially when reusing existing common/utility functions and constants.

## Coding Standards

- **Nesting Limit:** No more than 3 nested blocks inside functions and methods.
- **Naming Conventions:** Set proper, descriptive variable names and function names.
- **Modularity & Documentation:** Core logics should be separated into their own functions with proper docs, comments, and JSDocs.

## Agent-Specific Rules

- **Workflow Diagrams:** Need to create a workflow diagram in the planning section when creating an implementation plan.
- **Documentation:** Add the implementation plan into the walkthrough artifact, including any changes made to the flow.
- **!Important:** Don't miss importing used functions and variables from another file.

## Web Application Development & Design Aesthetics

For web projects (like this portfolio):
- **Rich Aesthetics:** Use modern web design best practices (e.g., vibrant colors, dark modes, glassmorphism, dynamic animations).
- **Visual Excellence:** Use curated color palettes (no generic plain colors), modern typography (Inter, Roboto, Outfit), smooth gradients, and subtle micro-animations.
- **Dynamic Design:** Create an interface that feels responsive and alive with hover effects and interactive elements.
- **Premium Feel:** Avoid simple minimum viable products; the design should feel premium and state-of-the-art.
- **SEO Best Practices:** Implement proper title tags, meta descriptions, single `<h1>` per page, semantic HTML, unique IDs for interactive elements, and optimize for fast page load times.
