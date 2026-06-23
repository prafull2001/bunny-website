# Bunny SEO & GEO — Product Requirements Document

**Site:** https://www.bunnycouples.com
**App:** Bunny — Love Notes for Couples (iOS) — an all-in-one app for couples, especially long distance
**App Store:** https://apps.apple.com/us/app/bunny-love-notes-for-couples/id6756160637
**Contact:** prafull2001@gmail.com

---

## Context

Bunny is a couples app that bundles a **shared virtual pet, a draw-together canvas, love notes, mini-games, and daily check-ins** into one "digital home for two." It's free on iPhone with a Bunny Pro upgrade ($1.99/week or $19.99 lifetime).

The marketing site was a client-side Vite/React SPA deployed to GitHub Pages, with **no SEO**: a single hardcoded title, no meta description, no Open Graph, no structured data, no robots.txt, no sitemap, and — most importantly — **no server-rendered content**. Crawlers (Googlebot, Bingbot) and answer-engine bots (GPTBot, ClaudeBot, PerplexityBot) fetched an empty `<div id="root">`. Nothing could be indexed or cited.

This PRD covers the technical, content, ASO, and distribution work to make Bunny rank for couples / long-distance queries on Google **and** be recommended by ChatGPT, Claude, and Perplexity.

---

## Goals

| Goal | Target | Timeframe |
|------|--------|-----------|
| Indexable pages | 1 (broken) → 12+ | Done (this build) |
| Crawler sees real content | No → Yes | Done |
| Core Web Vitals (LCP) | >6s (2.45 MB hero) → <2.5s | Done (WebP) |
| Organic clicks | ~0 → 300/mo | 6 months |
| LLM recommendation for "best long-distance couples app" | Appear in top answers | 3–6 months |
| App Store: subtitle + keyword field optimized | Empty → full | This week (manual) |

---

## Part 1 — Technical Architecture (DONE)

### 1.1 The crawlability fix
**Problem:** CSR SPA → crawlers see nothing.
**Fix:** Static Site Generation via **`vite-react-ssg`** (the React Router v6 SSG path). Router downgraded v7→v6 (only `Link` was used; zero v7-only APIs). Each route in `src/routes.jsx` is pre-rendered to static HTML at build time.

- Clean URLs: `dirStyle: 'nested'` → `/about` served from `dist/about/index.html` (GitHub Pages friendly).
- All routes pre-rendered (incl. personal pages) so direct hits never 404 on GitHub Pages; personal/utility pages carry `noindex`.
- `public/CNAME` pins `www.bunnycouples.com`.
- Build: `vite-react-ssg build && node scripts/postbuild.mjs`.

### 1.2 Image optimization (Core Web Vitals)
Hero/screenshot PNGs were 0.3–2.45 MB. `scripts/optimize-images.mjs` converts them to right-sized WebP (hero **2.45 MB → 40 KB**). This is the single biggest LCP win.

### 1.3 Architecture map
```
src/
  main.jsx            ViteReactSSG entry (auto-hydrates on client)
  routes.jsx          route manifest consumed by SSG + client router
  App.jsx             Home (exported)
  About / CompareHub / ComparePost / BlogIndex / BlogPost
  Contact / PrivacyPolicy / TermsOfService / Confirm / AvishiSurprise / Anniversaries
  seo/
    siteConfig.js     single source of truth (domain, brand, pricing, social)
    Seo.jsx           <Head> wrapper: title/desc/canonical/OG/Twitter/robots/JSON-LD
    schema.js         JSON-LD builders
  data/
    faq.js            homepage FAQ
    compare.js        4 comparison pages (data-driven)
    blog.jsx          3 posts (metadata + JSX content)
scripts/
  optimize-images.mjs · gen-og.mjs · postbuild.mjs (sitemap)
public/
  robots.txt · llms.txt · llms-full.txt · CNAME · og/*.jpg
```

---

## Part 2 — Technical SEO (DONE)

- **Per-page metadata** via `<Seo>`: unique title (≤60 chars), description (≤160), canonical, OG, Twitter card, robots.
- **Structured data (JSON-LD):**
  - `SoftwareApplication` + `Organization` + `WebSite` — homepage
  - `FAQPage` — homepage, every comparison page, blog posts with FAQs
  - `Article` — blog posts
  - `BreadcrumbList` — all nested pages
  - `ItemList` — compare hub and blog index
  - **No `aggregateRating`** — Bunny has too few ratings to assert a credible count; faking it violates Google's guidelines. Add it later once reviews are rendered and verifiable.
- **robots.txt** — allows everything except personal pages; explicitly allows LLM crawlers; links the sitemap.
- **sitemap.xml** — generated from real build output; excludes noindex routes.
- **Open Graph images** — branded 1200×630 cards per section.

---

## Part 3 — On-Page SEO (DONE)

- One H1 per page; logical H2/H3 hierarchy. Blog/compare H2s are phrased as the exact questions people search (snippet/PAA bait).
- Descriptive, keyword-rich alt text on all homepage images.
- Homepage FAQ section (answer-first) targeting "best app for long-distance couples," "feel closer to partner," "draw together," "raise a pet together," "free alternative to Paired."
- Internal linking: home ⇄ compare ⇄ blog ⇄ about, plus contextual links inside posts.
- UTM on every App Store link (`?utm_source=…&utm_campaign=…`) for install attribution.

---

## Part 4 — GEO (Generative Engine Optimization)

Goal: be the answer when someone asks an LLM "what's the best app for long-distance couples?" / "apps to feel close to my partner."

- **`/llms.txt`** — clean structured product description.
- **`/llms-full.txt`** — full FAQ + comparison Q&A, written to be quoted verbatim.
- **Answer-first content** — every FAQ and post leads with the answer in the first sentence.
- **Honest comparisons** — `/compare/*` gives LLMs structured, fair comparisons against the apps users actually weigh.
- **Get into the training/citation corpus:** Reddit (r/LongDistance), AlternativeTo, Product Hunt, Indie Hackers, and the "best apps for long-distance couples" listicles that LLMs cite (The Knot, Marriage.com, MakeUseOf, Cupla, Flamme).
- **Brand entity consistency:** name "Bunny," one-liner, URL `https://www.bunnycouples.com`, and contact identical everywhere (site, App Store, social).

---

## Part 5 — Competitive Landscape

(See the research that informed this build. Key facts:)

| App | Positioning | Why it matters to Bunny |
|-----|-------------|--------------------------|
| **Paired** | Research-backed daily questions; 8M+ downloads; *publishes* the listicles LLMs cite | #1 brand to position against; biggest "alternative to" target |
| **lovelee** (Jack Frik) | Playful: shared pet, doodles, notes, widgets, love questions | Bunny's nearest feature twin — watch closely |
| **Cozy Couples** | Shared space + widgets + virtual pet + decorate-a-home; 1M+ downloads | Dominant incumbent in Bunny's exact niche |
| **Pookie / Widgetable** | Shared pet + doodle/mood widgets | Direct overlap on the pet/draw mechanic |
| **Locket** | Photo-on-home-screen widget; ~91M installs | Biggest *widget* comparison anchor |

**Bunny's white space:** *no mainstream app combines a shared pet + draw-together canvas + love notes + games + daily check-ins in one product.* Each rival owns one piece. The hook for SEO, ASO, and GEO is **"collapse the 2–3 app stack into one shared home."**

> Note: the "Lovely / Couples Lovely" app referenced informally is really **lovelee** by Jack Frik. There is no significant couples app simply named "Lovely" — don't build a comparison page for it.

---

## Part 6 — Keyword Strategy

**Primary:** app for couples · couples app · long distance relationship app · best app for long distance couples · couple widget · shared pet app for couples

**Secondary / long-tail:** apps to feel close to partner · app to draw together with partner · long distance relationship games · questions to ask long distance partner · paired alternative · apps like locket · raise a pet together long distance

**Comparison (high intent):** Bunny vs Paired · paired alternative (free) · apps like Locket for couples · apps like Widgetable

### Topical clusters
- **Cluster A — Long-distance connection:** pillar "best apps for long-distance couples" → games, questions, date-night ideas, how-to-make-it-work.
- **Cluster B — Couples apps comparison:** `/compare` hub → vs Paired, vs lovelee, vs Widgetable, apps like Locket.
- **Cluster C — Features:** shared pet, draw-together, love notes, daily check-ins (future `/features/*` pages).

---

## Part 7 — App Store Optimization (ASO)

ASO matters for GEO too (LLMs index App Store pages) and drives organic installs.

- **Subtitle (currently EMPTY — top priority):** `Widgets, Long Distance & Games`. Don't repeat "couples" (already in the title; Apple indexes the union of title + subtitle + keyword field).
- **Keyword field (100 chars):** `long distance,couple widget,draw together,virtual pet,love counter,days together,anniversary,check in,doodle,relationship quiz,marriage,date night,mood`
- **Description:** lead with the white-space hook; bullet the features; include the lifetime price as a differentiator.
- **Screenshots:** lead with the shared pet or draw-together canvas (most differentiated), keyword-rich captions.
- **Reviews:** add `SKStoreReviewController` prompts after positive moments — Bunny needs review volume to compete with 40K-review incumbents.
- **Category:** keep **Lifestyle** (where Paired, lovelee, Cupla, Cozy Couples all live).

---

## Part 8 — Link Building & Distribution

1. **AlternativeTo** — list as alternative to Paired, lovelee, Widgetable, Locket.
2. **Product Hunt** — schedule a launch (indexed by Google, crawled by LLMs).
3. **Indie Hackers** — founder/build story.
4. **Reddit / forums** — r/LongDistance, r/relationship_advice, Loving From A Distance. Be helpful first.
5. **Listicle inclusion** — pitch The Knot, Marriage.com, MakeUseOf, Cupla, Flamme. The SERP is owned by app blogs (not Wirecutter), so it's outrankable and open to PR.
6. **Pinterest / TikTok** — long-distance content is huge on both; repurpose blog clusters into pinnable/short-form assets.

---

## Part 9 — Monitoring

| Tool | Purpose |
|------|---------|
| Google Search Console | Submit sitemap; track clicks/impressions/position; Core Web Vitals |
| Bing Webmaster Tools | Bing/Copilot indexing |
| PageSpeed Insights | Confirm LCP < 2.5s monthly |
| Manual LLM checks | Monthly: ask ChatGPT/Claude/Perplexity the head queries; track if Bunny appears |
| App Store Connect | Impressions → product page views → installs; keyword ranks |

---

## Part 10 — Roadmap

**Phase 1 — Foundation (DONE):** prerendering, metadata, structured data, robots/sitemap/llms, WebP, OG images, /about, /compare ×4, /blog ×3.

**Phase 2 — This week (manual):** App Store subtitle + keyword field; verify Search Console + Bing; submit sitemap; AlternativeTo + Product Hunt; in-app review prompts.

**Phase 3 — Month 1–2:** 2–4 posts/month per the calendar; add `/features/*` pages; add comparison pages as competitors grow (Cozy Couples, Pookie, Cupla); Reddit/Pinterest presence.

**Phase 4 — Month 3+:** earn listicle inclusions + press; revisit `aggregateRating` once review volume supports it; iterate ASO screenshots via Product Page Optimization.

---

## Verification checklist (after each deploy)

- [ ] `curl https://www.bunnycouples.com | grep -i "miles apart"` returns content (not blank).
- [ ] `/sitemap.xml`, `/robots.txt`, `/llms.txt` all load.
- [ ] Rich Results Test passes on home, a compare page, a blog post.
- [ ] PageSpeed mobile LCP < 2.5s on `/`.
- [ ] Personal pages (`/avishi`, `/anniversaries`, `/confirm`) return `noindex`.
- [ ] OG preview looks right (opengraph.xyz) for home + a post.

---

*PRD v1.0 — adapted for Bunny from the Spool SEO/GEO playbook.*
