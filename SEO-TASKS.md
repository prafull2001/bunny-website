# Bunny SEO / ASO / GEO Task List

**Current status (October 17, 2026):** PR1 and PR2 are deployed: three feature pages, corrected question counts and widget claims, real 404s, route-specific image preloads, Apple campaign links and Bunny website analytics. Earlier suggestions below are historical and are superseded by the current checklist at the end. Search Console is deferred at the user's request.

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


## October 17 — Website accuracy follow-up (current)

- [x] Read website plan, app lessons, Git state and live deployment evidence. Work is isolated from the existing checkout and personal files.
- [x] Confirm latest remote main is 753b8b5; PR1 and PR2 fixes already deployed.
- [x] Remove remaining unsupported cheapest/ad-comparison assertions and unqualified competitor price estimates. Add source links and a review date to the existing comparison pages.
- [x] Clarify free features and Pro drawing access from current app implementation. Partner-sharing guarantees remain omitted because live purchase delivery is unverified. Keep visible copy and reference files aligned.
- [x] Build assets, pass analytics/SEO checks and scoped lint, inspect rendered HTML and complete independent review.
- [ ] Push through a PR and verify production.
- Search Console is deferred at the user's request. No property or account changes are in scope.
- Follow-up lesson: a partial copy cleanup can leave the same claim in blog FAQs, comparison tables and reference files. Search all public surfaces together before publishing pricing or competitor assertions.

- Verification correction: only change an article’s modified date when its content changes. A broad date replacement briefly changed two untouched guides; restore their dates before publishing.

- Date-rendering lesson: JavaScript parses YYYY-MM-DD at UTC midnight, but locale formatting without a timezone displays the previous day in Los Angeles. Render date-only article metadata explicitly in UTC so visible dates match the Article schema across server/client timezones. Reproduced October17 appearing as October16 before this fix.

- Primary sources rechecked October17: official App Store listings for Paired1469609343, lovelee6754182711, Widgetable1641107226 and Locket1600525061. Widgetable explicitly supports doodles/text through Pin It!; the comparison now represents that overlap. Current app PRO_ACCESS.md/source supports basic bunny care and text letters free, whiteboard Pro. Shared-purchase production verification remains outside this copy change.

- Verification correction: prerendered React inserts comment separators around text. The date check must normalize those separators and whitespace before comparing the visible date; the rendered October17 date was correct.

- Validation: 20 prerendered HTML pages, 17 sitemap URLs, 16 Bunny campaign CTAs and four linked comparison sources. The updated roundup visibly renders October17,2026. Browser automation was unavailable, so no new visual-browser claim is made; layouts and assets are unchanged.
