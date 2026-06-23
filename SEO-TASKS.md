# Bunny SEO / ASO / GEO Task List

**Site:** https://www.bunnycouples.com · **App:** Bunny — Love Notes for Couples (iOS)
**App Store:** https://apps.apple.com/us/app/bunny-love-notes-for-couples/id6756160637

---

## DONE (this session)

### Technical foundation — crawlability (the #1 fix)
- [x] Migrated the Vite SPA to **static prerendering** with `vite-react-ssg` (React Router v6). Every public route is now real HTML at build time — crawlers, social scrapers, and LLMs see full content instead of an empty `<div id="root">`.
- [x] Clean URLs via `dirStyle: 'nested'` (`/about` → `dist/about/index.html`); works on GitHub Pages with no rewrite hacks.
- [x] Added `public/CNAME` so the custom domain persists across deploys.
- [x] Build script now `vite-react-ssg build && node scripts/postbuild.mjs`.

### Per-page metadata + structured data
- [x] Reusable `<Seo>` component (title, description, canonical, Open Graph, Twitter, robots, JSON-LD) + single-source `siteConfig.js`.
- [x] Unique title + meta description + canonical on every page.
- [x] JSON-LD: `SoftwareApplication`, `Organization`, `WebSite` (home); `FAQPage` (home + compare + posts); `Article` (posts); `BreadcrumbList` + `ItemList` on hubs/nested pages. (No fake `aggregateRating` — too few reviews to assert honestly.)
- [x] `noindex` on `/confirm`, `/avishi`, `/anniversaries` (personal/utility).

### GEO / crawl assets
- [x] `robots.txt` — allow all + explicitly allow GPTBot, ClaudeBot, PerplexityBot, OAI-SearchBot, Google-Extended, Applebot-Extended; disallow personal pages; sitemap line.
- [x] `sitemap.xml` — auto-generated at build from the real `dist/` output (`scripts/postbuild.mjs`), excludes noindex routes.
- [x] `llms.txt` + `llms-full.txt` — structured product description + full FAQ/comparison Q&A for answer engines.

### Performance (Core Web Vitals)
- [x] Converted oversized homepage images to WebP (`scripts/optimize-images.mjs`): hero screenshot **2.45 MB → 40 KB**, others 80–90% smaller. Big LCP win.
- [x] Branded 1200×630 Open Graph cards generated (`scripts/gen-og.mjs`) for home/about/compare/blog/default.

### On-page + content
- [x] Homepage: keyword-aware copy, single H1, descriptive alt text, fixed dead footer links (About/Blog/Compare now real), UTM on all App Store links, and an FAQ section with question H3s + FAQPage schema.
- [x] New `/about` page (mission, positioning, E-E-A-T, founder).
- [x] `/compare` hub + 4 comparison pages: Bunny vs Paired, vs lovelee, vs Widgetable, apps like Locket.
- [x] `/blog` index + 3 posts: best apps for long-distance couples 2026; 11 long-distance relationship games; 150+ questions to ask your long-distance partner.
- [x] Internal linking graph between home ⇄ compare ⇄ blog ⇄ about.

---

## QUICK WINS — Do This Week

### ASO (App Store) — biggest immediate lever
- [ ] **Set an App Store subtitle** (currently empty — free keyword real estate). Suggested: `Widgets, Long Distance & Games` or `Couple Widget, Draw & Days Together`. Do NOT repeat "couples" (already in the title; Apple indexes the union).
- [ ] **Keyword field (100 chars), no plurals/stop words:** `long distance,couple widget,draw together,virtual pet,love counter,days together,anniversary,check in,doodle,relationship quiz,marriage,date night,mood`
- [ ] Lead the App Store description with the white-space hook: "One app for two — a shared pet, draw-together canvas, love notes, and games."
- [ ] Make the first screenshot show the most differentiated feature (shared pet or draw-together canvas) with a keyword caption.
- [ ] Set up in-app review prompts (`SKStoreReviewController`) after positive moments (e.g., feeding the pet, sending a letter). Bunny needs review volume.

### Search Console / indexing
- [ ] Verify the domain in **Google Search Console** + **Bing Webmaster Tools**.
- [ ] Submit `https://www.bunnycouples.com/sitemap.xml` to both after the next deploy.
- [ ] Run **PageSpeed Insights** on `/` and a blog post; confirm LCP < 2.5s on mobile.
- [ ] Test a few pages in the **Rich Results Test** (home, a compare page, a blog post).

### Distribution (backlinks + LLM training data)
- [ ] List Bunny on **AlternativeTo** as an alternative to Paired, lovelee, Widgetable, Locket.
- [ ] Submit to **Product Hunt** (schedule a launch).
- [ ] Post the founder story on **Indie Hackers**.
- [ ] Be genuinely helpful in **r/LongDistance**, **r/relationship_advice**, and the Loving From A Distance forum — mention Bunny only where relevant.
- [ ] Pitch inclusion in existing "best apps for long-distance couples" listicles (The Knot, Marriage.com, MakeUseOf, Cupla, Flamme) — the SERP is owned by app blogs, so it's outrankable and PR-open.

---

## MONTH 1–3 — Content Calendar

The site already ships 3 posts. Keep ~2–4/month, each answer-first with FAQ schema.

| # | Title | Target keyword | Type |
|---|-------|----------------|------|
| 4 | Virtual Date Night Ideas for Long-Distance Couples | `long distance date night ideas` | List |
| 5 | How to Make a Long-Distance Relationship Work | `how to make long distance work` | Guide (needs expert quotes for E-E-A-T) |
| 6 | Apps Like Locket for Couples (expand into a post) | `apps like locket` | Comparison |
| 7 | Long-Distance Relationship Activities by Time Zone | `long distance relationship activities` | List |
| 8 | Paired Alternatives: 7 Couples Apps Worth Trying | `paired alternative` | Roundup |
| 9 | How to Feel Close to Your Partner When Apart | `feel close to partner long distance` | Guide |

Add comparison pages as competitors grow: **Bunny vs Cozy Couples**, **Bunny vs Pookie**, **Bunny vs Cupla**.

---

## Target Keywords (by priority)

### Primary (homepage + hubs)
| Keyword | Where |
|---------|-------|
| app for couples / couples app | Home H1/meta |
| long distance relationship app | Home + blog |
| best app for long distance couples | Blog roundup + FAQ |
| couple widget / shared pet app for couples | Home + compare |

### Long-tail (blog/FAQ)
- apps to feel close to partner
- app to draw together with partner
- long distance relationship games
- questions to ask long distance partner
- paired alternative / apps like locket
- raise a pet together long distance

---

## Key facts to use in content
- Platform: iPhone (iOS) · Category: Lifestyle (keep it here)
- Price: Free; Bunny Pro $1.99/week or $19.99 lifetime
- Differentiator: the only app bundling a shared pet + draw-together canvas + love notes + games + daily check-ins
- Nearest competitors: lovelee, Pookie, Cozy Couples, Widgetable (pet/widget); Paired (daily questions); Locket (photo widget)

---

## GEO ongoing
- [ ] Update `llms.txt` whenever features/pricing change.
- [ ] Monthly, ask ChatGPT / Claude / Perplexity "best app for long-distance couples" and note whether Bunny appears and what it's compared to.
- [ ] Publish (and keep updating) the "best apps for long-distance couples" post — both Google and LLMs cite these.
