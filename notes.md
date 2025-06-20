# Package Overview

## Core Framework & Tooling

- **next**  
  The React framework for production. Handles routing, SSR/SSG, API routes, and more.

- **react** & **react-dom**  
  The core React library and its DOM renderer. Required for building UI components.

- **typescript**  
  Adds static typing to JavaScript, improving code quality and developer experience.

---

## Database & ORM

- **@prisma/client**  
  The auto-generated Prisma ORM client. Lets you query your database in a type-safe way.

- **prisma**  
  The Prisma CLI and migration tool. Used for generating the client, running migrations, and managing your schema.

- **@prisma/adapter-neon**  
  Prisma adapter for [Neon](https://neon.tech/) (a serverless Postgres provider). Allows Prisma to connect efficiently to Neon databases.

- **@neondatabase/serverless**  
  Neon’s official serverless Postgres driver for Node.js. Used for direct, efficient connections to Neon’s cloud Postgres.

---

## UI & Styling

- **@radix-ui/react-dialog**  
  Unstyled, accessible dialog/modal primitives for React.

- **@radix-ui/react-dropdown-menu**  
  Unstyled, accessible dropdown menu primitives for React.

- **@radix-ui/react-slot**  
  Utility for advanced composition patterns in React components.

- **lucide-react**  
  A collection of beautiful, customizable SVG icons for React.

- **tailwindcss**  
  Utility-first CSS framework for rapidly building custom designs.

- **tailwindcss-animate**  
  Adds animation utilities to Tailwind CSS.

- **@tailwindcss/postcss**  
  Integrates Tailwind with PostCSS for processing CSS.

- **class-variance-authority**  
  Utility for managing complex Tailwind class combinations and variants.

- **clsx**  
  Utility for conditionally joining classNames together.

- **tailwind-merge**  
  Utility to intelligently merge Tailwind CSS classes, resolving conflicts.

---

## Theming

- **next-themes**  
  Theme management for Next.js apps (e.g., dark/light mode), works well with Tailwind’s dark mode.

---

## Validation & Utilities

- **zod**  
  TypeScript-first schema validation library. Used for validating and parsing data (e.g., API inputs).

---

## WebSocket Support

- **ws**  
  WebSocket implementation for Node.js. Used for real-time features or, in your case, enabling Neon’s WebSocket connections.

- **@types/ws**  
  TypeScript type definitions for the `ws` package.

- **bufferutil**  
  Optional dependency for `ws` to improve WebSocket performance.

---

## Linting & Code Quality

- **eslint**  
  Pluggable JavaScript linter for code quality and style.

- **eslint-config-next**  
  Next.js’s recommended ESLint configuration.

- **@eslint/eslintrc**  
  ESLint’s configuration file loader.

---

## TypeScript Type Definitions

- **@types/node**  
  TypeScript types for Node.js APIs.

- **@types/react** & **@types/react-dom**  
  TypeScript types for React and ReactDOM.

---

## Other

- **prostore**  
  This is a local package reference (likely your own codebase or a monorepo package).

---

## Summary Table

| Module                                                 | Purpose                                                 |
| ------------------------------------------------------ | ------------------------------------------------------- |
| next, react, react-dom                                 | Core framework and UI                                   |
| typescript, @types/\*                                  | TypeScript support and type definitions                 |
| prisma, @prisma/client                                 | ORM and database access                                 |
| @prisma/adapter-neon, @neondatabase/serverless         | Neon Postgres integration and serverless DB connections |
| tailwindcss, tailwindcss-animate, @tailwindcss/postcss | Styling and CSS utilities                               |
| class-variance-authority, clsx, tailwind-merge         | Class name utilities for Tailwind                       |
| @radix-ui/\*, lucide-react                             | UI primitives and icons                                 |
| next-themes                                            | Theme management                                        |
| zod                                                    | Schema validation                                       |
| ws, @types/ws, bufferutil                              | WebSocket support and performance                       |
| eslint, eslint-config-next, @eslint/eslintrc           | Linting and code quality                                |
