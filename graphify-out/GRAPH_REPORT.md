# Graph Report - .  (2026-07-21)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 181 nodes · 210 edges · 16 communities (13 shown, 3 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `f7cab708`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- Community 0
- Community 1
- Community 2
- Community 3
- Community 4
- Community 5
- Community 6
- Community 7
- Community 8
- Community 9
- Community 10
- Community 13
- Community 14

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 16 edges
2. `tailwind` - 6 edges
3. `aliases` - 6 edges
4. `cn()` - 6 edges
5. `Quadtree` - 6 edges
6. `include` - 6 edges
7. `scripts` - 5 edges
8. `useLoading()` - 5 edges
9. `Hero()` - 4 edges
10. `lib` - 4 edges

## Surprising Connections (you probably didn't know these)
- `Preloader()` --calls--> `useLoading()`  [EXTRACTED]
  components/shared/preloader.tsx → scripts/hooks/loading-context.tsx
- `RedBannerHeading()` --calls--> `cn()`  [EXTRACTED]
  components/ui/red-banner-heading.tsx → scripts/lib/utils.ts
- `Wings()` --calls--> `useLoading()`  [EXTRACTED]
  sections/wings.tsx → scripts/hooks/loading-context.tsx
- `Navbar()` --calls--> `useMobile()`  [EXTRACTED]
  sections/navbar.tsx → scripts/hooks/use-mobile.tsx

## Import Cycles
- None detected.

## Communities (16 total, 3 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.09
Nodes (18): ContactForm, Experience, PROJECTS, Cursor(), Parallax(), ParallaxProps, ScrollProgress(), SmoothScroll() (+10 more)

### Community 1 - "Community 1"
Cohesion: 0.09
Nodes (23): class-variance-authority, clsx, framer-motion, lucide-react, next, dependencies, class-variance-authority, clsx (+15 more)

### Community 2 - "Community 2"
Cohesion: 0.11
Nodes (19): autoprefixer, eslint, eslint-config-next, devDependencies, autoprefixer, eslint, eslint-config-next, postcss (+11 more)

### Community 3 - "Community 3"
Cohesion: 0.11
Nodes (19): dom, dom.iterable, esnext, compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules (+11 more)

### Community 4 - "Community 4"
Cohesion: 0.11
Nodes (17): aliases, components, hooks, lib, ui, utils, iconLibrary, rsc (+9 more)

### Community 5 - "Community 5"
Cohesion: 0.20
Nodes (10): metadata, personSchema, plusJakarta, websiteSchema, Preloader(), LoadingContext, LoadingContextType, LoadingProvider() (+2 more)

### Community 6 - "Community 6"
Cohesion: 0.23
Nodes (8): Button, ButtonProps, buttonVariants, Input, RedBannerHeading(), RedBannerHeadingProps, Textarea, cn()

### Community 7 - "Community 7"
Cohesion: 0.22
Nodes (8): name, private, scripts, build, dev, lint, start, version

### Community 8 - "Community 8"
Cohesion: 0.22
Nodes (8): .next/dev/types/**/*.ts, next-env.d.ts, .next/types/**/*.ts, node_modules, **/*.ts, **/*.tsx, exclude, include

### Community 10 - "Community 10"
Cohesion: 0.33
Nodes (5): Highlighter(), HighlighterProps, Experience, ExperienceItem, experiences

## Knowledge Gaps
- **89 isolated node(s):** `plusJakarta`, `metadata`, `personSchema`, `websiteSchema`, `Experience` (+84 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **3 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `dependencies` connect `Community 1` to `Community 7`?**
  _High betweenness centrality (0.052) - this node is a cross-community bridge._
- **Why does `devDependencies` connect `Community 2` to `Community 7`?**
  _High betweenness centrality (0.045) - this node is a cross-community bridge._
- **Why does `compilerOptions` connect `Community 3` to `Community 8`?**
  _High betweenness centrality (0.019) - this node is a cross-community bridge._
- **What connects `plusJakarta`, `metadata`, `personSchema` to the rest of the system?**
  _89 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 0` be split into smaller, more focused modules?**
  _Cohesion score 0.0896551724137931 - nodes in this community are weakly interconnected._
- **Should `Community 1` be split into smaller, more focused modules?**
  _Cohesion score 0.08695652173913043 - nodes in this community are weakly interconnected._
- **Should `Community 2` be split into smaller, more focused modules?**
  _Cohesion score 0.10526315789473684 - nodes in this community are weakly interconnected._