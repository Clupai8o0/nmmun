# NMMUN — New Millennium Model United Nations 2024-25

Explore the world of diplomacy and global affairs with the New Millennium Model United Nations Conference. This site presents the 2024-2025 event: councils, schedules, registration guidance, and team profiles, built with Next.js for a smooth, animated, and SEO-aware experience.

## What it does
- Publishes event information, dress code, itineraries, and rules of procedure.
- Highlights councils and chair details with per-council background guides.
- Guides delegates, chairs, runners, and security through registration steps and timelines.
- Shares media, contact points, and location details for the conference.

## Key features
- **Data-driven content:** Navigation, councils, teams, table-of-content blocks, and cards are driven from `lib/links.ts`; hero and banner copy, event schedule, itineraries, and dress code live in `lib/config.ts`.
- **Event awareness:** Countdown timer and call-to-action behavior use `useTime` plus `eventDate`/`eventEndDate` settings to show the right state before, during, and after the event.
- **Rich sections per page:** Councils list with per-council detail routes (`/council/[id]`), info page with itinerary timelines and dress code checklists, register page with payment guidance and Google Form links, contact page with map/embed and direct channels, and gallery/team pages wired for media and profile grids.
- **Animations and UI:** Framer Motion-driven transitions, Embla-based hero carousel, shadcn/ui components (Radix primitives), Tailwind CSS theme tokens, and Lucide icons for consistent styling.
- **SEO helpers:** `lib/metadata.ts` centralizes Open Graph/Twitter metadata generation for each route.
- **Legacy continuity:** Forked from the 2023 build by @Clupai8o0 and team, carried forward for the 2024-2025 batch with the same component system.

## Tech stack
- Next.js 14 (App Router) with React 18 and TypeScript.
- Tailwind CSS with shadcn/ui (Radix UI), tailwind-merge, and tailwindcss-animate.
- Framer Motion for animations; Embla carousel (+ autoplay) for hero slides.
- Lucide React icons, clsx, class-variance-authority, cmdk utilities.

## Architecture overview
- `app/`: Route handlers and pages (home, councils, council/[id], gallery, info, register, team, contact) plus global styles and root layout.
- `components/`: Reusable content (Hero, FAQ, Timer, Timeline), layouts (BaseLayout, Container, Background), navigation (Navbar, CTA, TableOfContent, Sidebar), typography primitives, and shadcn/ui elements.
- `hooks/useTime.ts`: Event-aware countdown and state helpers.
- `lib/`: Configuration for event copy/timing (`config.ts`), navigation/council/team/link data (`links.ts`), metadata generation (`metadata.ts`), animations, types, and utilities.
- `public/`: Static assets (hero imagery, council/team badges, icons).

```
app/
  page.tsx (home)
  councils/, council/[id]/, gallery/, info/, register/, team/, contact/
components/
  content/, layouts/, navigation/, typography/, ui/
lib/
  config.ts, links.ts, metadata.ts, animations.ts, types.ts, utils.ts
```

## Getting started (local)

### Prerequisites
- Node.js >= 18.7, npm, and Git.
- Working knowledge of HTML/CSS/JS; React familiarity helps for page-level changes.
- Review `TODO.md` and existing conventions before contributing.

### Install
```bash
git clone https://github.com/<your-username>/nmmun.git
cd nmmun
npm install
```

### Environment variables
Create `.env.local` to control environment-aware behavior:
```bash
NEXT_PUBLIC_STATUS=DEVELOPMENT
```

### Run
```bash
npm run dev    # start Next.js in development mode
npm run build  # production build
npm start      # serve built app
npm run lint   # lint via next lint
```

Open http://localhost:3000 after `npm run dev`.

## Usage
- Update hero copy, banners, event timing, itineraries, and dress code in `lib/config.ts`.
- Manage navigation, councils (including topics, background guides, and chair profiles), teams, register/info table-of-content cards in `lib/links.ts`.
- Adjust SEO metadata defaults per page in `lib/metadata.ts`.
- Edit page content/layouts under `app/**/page.tsx`; assets live in `public/`.
- Components and layouts are intended to stay stable; prefer data/config changes over structural rewrites when possible, and document any major component edits.

## Testing / Quality
- Lint: `npm run lint`.
- No automated tests are present in this repository.

## Deployment
- Suitable for Vercel or any Next.js host; no deployment config is checked in.
- The domain is managed on NameCheap; coordinate with the most recent Head of IT for access (renewal each September 17th).

## Project status / Roadmap
- See `TODO.md` for tracked items. Pending items include: flipping `NEXT_PUBLIC_STATUS` to production when ready, font weight specification, color refinements, JS docs, consolidating shared classnames, and centralizing more data/config.

## Credits / Contributors
- Originally built by @Clupai8o0 and team; maintained for NMMUN 2024-2025.
- Contact channels: Instagram `@nmmun_24`, email `nmmun2024.25@gmail.com`, bug reports via https://github.com/Shawarma22/nmmun.
- NMMUN'24 Head of IT: Hiranya Bansal.  
  NMMUN'23 Head of IT: Samridh Limbu — [GitHub](https://github.com/Clupai8o0) · [Instagram](https://instagram.com/clupai8o0) · Email: limbusamaka@icloud.com.

## Additional resources
- [TypeScript](https://www.typescriptlang.org/docs/) · [React.js](https://react.dev/) · [Next.js](https://nextjs.org)
- UI components: [shadcn/ui](https://ui.shadcn.com/) · [Tailwind](https://tailwindcss.com/)
- Animations: [Framer Motion](https://www.framer.com/motion/)
- Recommended extensions: Tailwind CSS IntelliSense, Better Comments, Markdown Preview Enhanced, Color Highlight, Code Spell Checker, Monokai Pro
