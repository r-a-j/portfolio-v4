# Portfolio v4 — Raj Pawar

**Live:** [rajpawar.in](https://www.rajpawar.in/)

![Home Page View](https://raw.githubusercontent.com/r-a-j/portfolio-v4/master/public/HomePageView.png)

## Tech Stack

- **Framework:** Angular 22 (standalone components, `OnPush` change detection, signals, `@angular/build`)
- **Styling:** Tailwind CSS 4 (`@tailwindcss/postcss`) + SCSS + FontAwesome Free 7
- **Content:** `ngx-markdown` for open-source GitHub READMEs + custom interactive `app-project-showcase` for closed-source flagship products
- **Tooling:** `pnpm` 10, TypeScript 6, ESLint 10 (`angular-eslint` 22)
- **Deployment:** Automated GitHub Actions → Vercel Production on push to `master`

---

## Prerequisites

- **[pnpm](https://pnpm.io/) 10+** (`packageManager` is pinned to `pnpm@10.32.1`)
- **Node.js `^22.22.3 || ^24.15.0 || >=26.0.0`**
  - You do **not** need to change your system-wide Node.js version if it is older: `package.json` configures `pnpm.executionEnv.nodeVersion` (`24.22.3`), so `pnpm` automatically fetches and runs a project-scoped Node 24 runtime for all scripts.

---

## Quick Start

```bash
git clone https://github.com/r-a-j/portfolio-v4.git
cd portfolio-v4
pnpm install
pnpm dev
```

Open [http://localhost:4200/](http://localhost:4200/) in your browser. Changes hot-reload automatically.

---

## Commands Reference

### Development & Local Serving

| Command | Description |
| :--- | :--- |
| `pnpm dev` | Start the local Angular dev server at `http://localhost:4200` with live reload and source maps |
| `pnpm dev:open` | Start the dev server and automatically open `http://localhost:4200` in your default browser |
| `pnpm start` | Alias for `pnpm dev` |
| `pnpm start:prod` | Serve the app locally at `http://localhost:4200` using the **production** build configuration (minified, optimized, budget-checked) |
| `pnpm watch` | Continuously rebuild in development mode (`dist/portfolio`) whenever files change |

### Production Builds & Static Preview

| Command | Description |
| :--- | :--- |
| `pnpm build` | Build the optimized production bundle to `dist/portfolio/browser` (executed by Vercel CI) |
| `pnpm build:prod` | Explicit alias for `ng build --configuration production` |
| `pnpm build:dev` | Fast unminified development build with source maps |
| `pnpm preview` | Run a full production build and serve the static `dist/portfolio/browser` output on `http://localhost:4173` with SPA fallback routing (mirrors Vercel behavior) |

### Quality, Typechecking & Maintenance

| Command | Description |
| :--- | :--- |
| `pnpm lint` | Run Angular ESLint across all `src/**/*.ts` and `src/**/*.html` files |
| `pnpm lint:fix` | Run ESLint and auto-fix supported issues |
| `pnpm typecheck` | Run strict Angular AOT + TypeScript checking (`ngc --noEmit`) without emitting artifacts |
| `pnpm check` | Full pre-push verification gate: `pnpm lint` → `pnpm typecheck` → `pnpm build` |
| `pnpm clean` | Remove `dist/` and `.angular/cache/` (cross-platform on Windows & Linux) |
| `pnpm ng <args>` | Run any Angular CLI command directly (e.g., `pnpm ng generate component ...`) |

---

## Scaffolding New Features

Angular 22 components are standalone by default:

```bash
pnpm ng generate component components/my-feature
pnpm ng generate service services/my-service
```

---

## Project Showcase Modes

Projects are defined in `src/app/data/projects-data.ts`:

- **Open-source projects** provide `githubLink` and `githubReadmeUrl` and render their live GitHub README via `ngx-markdown`.
- **Closed-source flagship products** (such as **CineScope**) omit `githubLink`/`githubReadmeUrl` and define `statusBadge`, `externalLinks`, and `showcase` to render the interactive `app-project-showcase` view (hero banner, metrics, lightbox screenshot gallery, capability cards, and high-level architecture).

---

## Deployment

Pushing to `master` triggers `.github/workflows/production.yaml`, which:
1. Sets up `pnpm` + Node.js 24.
2. Pulls Vercel production configuration and injects EmailJS secrets into `src/environments/environment.prod.ts`.
3. Builds with `vercel build --prod` (`pnpm run build`) and deploys to [https://www.rajpawar.in/](https://www.rajpawar.in/).

Before pushing, run:

```bash
pnpm check
```

---

## License

Licensed under the [GNU General Public License v3.0](./LICENSE).

© 2026 Raj Pawar. All Rights Reserved.
