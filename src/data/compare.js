// Data-driven comparison ("vs") pages. Each entry renders a full /compare/<slug>
// page with a feature table, honest pros/cons, pricing, a recommendation, and
// FAQ schema. Facts about competitors are kept fair and verifiable.

export const COMPARISONS = [
  {
    slug: 'bunny-vs-paired',
    competitor: 'Paired',
    targetKeyword: 'Bunny vs Paired',
    title: 'Bunny vs Paired: Which Couples App Is Right for You? (2026)',
    metaDescription:
      'Bunny vs Paired compared: daily questions vs shared play. See features, pricing, and which couples app is the better fit for long distance in 2026.',
    intro:
      'Paired is the best-known couples app, built around research-backed daily questions. Bunny takes a different approach: shared play. Here is an honest, side-by-side look so you can pick the one that fits your relationship.',
    verdict:
      'Choose Paired if you mainly want guided conversation prompts and relationship lessons. Choose Bunny if you want to feel connected through shared activities — a virtual pet, a draw-together canvas, love notes, and games — with a cheap lifetime option instead of a recurring subscription. Many couples happily use both.',
    bunnyPricing: 'Free; Pro from $1.99/week or $19.99 lifetime',
    competitorPricing: 'Free tier; Premium ~$14.99/month or ~$39.99+/year',
    features: [
      { feature: 'Shared virtual pet to raise together', bunny: true, competitor: false },
      { feature: 'Draw-together canvas / whiteboard', bunny: true, competitor: false },
      { feature: 'Love notes & letters', bunny: true, competitor: false },
      { feature: 'Mini-games for two', bunny: true, competitor: 'Some' },
      { feature: 'Daily check-ins', bunny: true, competitor: true },
      { feature: 'Daily questions & conversation prompts', bunny: 'Some', competitor: true },
      { feature: 'Expert-written relationship content', bunny: false, competitor: true },
      { feature: 'One-time lifetime price option', bunny: true, competitor: 'Limited' },
      { feature: 'Free to start', bunny: true, competitor: true },
    ],
    bunnyBestFor: 'Couples who want shared play and daily rituals, and prefer a one-time price.',
    competitorBestFor: 'Couples who want structured, research-backed conversation and relationship coaching.',
    faq: [
      {
        q: 'Is Bunny a good alternative to Paired?',
        a: 'Yes. Bunny is a good alternative to Paired for couples who want more than daily questions. Where Paired focuses on conversation prompts and relationship lessons, Bunny adds shared play — a virtual pet, a draw-together canvas, love notes, and mini-games — and offers a one-time lifetime purchase instead of a recurring subscription.',
      },
      {
        q: 'Is Bunny cheaper than Paired?',
        a: 'Bunny can be cheaper over time. Bunny offers a $19.99 one-time lifetime purchase, while Paired Premium is a recurring subscription (around $14.99/month or $39.99+/year). Both apps are free to start.',
      },
      {
        q: 'Which is better for long-distance couples, Bunny or Paired?',
        a: 'For long distance, it depends on what you want. Paired is better for guided daily conversation; Bunny is better for feeling present together through a shared pet, doodles, love notes, and games between calls.',
      },
    ],
  },

  {
    slug: 'bunny-vs-lovelee',
    competitor: 'lovelee',
    targetKeyword: 'Bunny vs lovelee',
    title: 'Bunny vs lovelee: Two Playful Couples Apps Compared (2026)',
    metaDescription:
      'Bunny vs lovelee compared: shared pets, doodles, love notes, widgets and pricing. See how these two playful couples apps differ in 2026.',
    intro:
      'Bunny and lovelee are two of the most playful couples apps, and they share a lot of DNA: love notes, doodles, a shared pet, and daily check-ins. Here is how they actually differ.',
    verdict:
      'Both are great picks for couples who want something fun rather than clinical. lovelee leans into home-screen widgets and a love-question library; Bunny leans into a shared digital home with a draw-together canvas, mini-games, and a very low lifetime price. Try whichever matches the features you care about most.',
    bunnyPricing: 'Free; Pro from $1.99/week or $19.99 lifetime',
    competitorPricing: 'Free; Pro from ~$7.99/month or ~$39.99 lifetime',
    features: [
      { feature: 'Shared virtual pet', bunny: true, competitor: true },
      { feature: 'Grow a plant together', bunny: true, competitor: true },
      { feature: 'Draw-together canvas / whiteboard', bunny: true, competitor: 'Doodles' },
      { feature: 'Love notes & letters', bunny: true, competitor: true },
      { feature: 'Mini-games for two', bunny: true, competitor: false },
      { feature: 'Home-screen widgets', bunny: 'Planned', competitor: true },
      { feature: 'Love-question library', bunny: 'Some', competitor: true },
      { feature: 'Daily check-ins', bunny: true, competitor: true },
      { feature: 'Lifetime price', bunny: '$19.99', competitor: '~$39.99' },
    ],
    bunnyBestFor: 'Couples who want games and a draw-together canvas, at the lowest lifetime price.',
    competitorBestFor: 'Couples who love home-screen widgets and a big library of love questions.',
    faq: [
      {
        q: 'What is the difference between Bunny and lovelee?',
        a: 'Bunny and lovelee are both playful couples apps with a shared pet, love notes, and doodles. The main differences: Bunny adds mini-games for two and a dedicated draw-together canvas and has a lower $19.99 lifetime price, while lovelee emphasizes home-screen widgets and a large love-question library.',
      },
      {
        q: 'Which is cheaper, Bunny or lovelee?',
        a: 'Bunny is cheaper for a lifetime purchase, at $19.99 versus lovelee’s roughly $39.99. Both apps are free to download.',
      },
    ],
  },

  {
    slug: 'bunny-vs-widgetable',
    competitor: 'Widgetable',
    targetKeyword: 'apps like Widgetable for couples',
    title: 'Bunny vs Widgetable: A Couples App for Your Shared Pet (2026)',
    metaDescription:
      'Bunny vs Widgetable: a shared pet without the ads. Compare features, pricing, and why couples pick Bunny over a general widget app in 2026.',
    intro:
      'Widgetable popularized the co-parented virtual pet on your home screen, but it is built for friends and besties broadly, and many reviews flag heavy ads and pay-to-progress mechanics. Bunny is built specifically for couples.',
    verdict:
      'Pick Widgetable if you want a huge catalog of widgets to share with friends. Pick Bunny if you want a calmer, couples-first space — a shared pet, a draw-together canvas, love notes, and games — without ad clutter, and with a one-time lifetime price.',
    bunnyPricing: 'Free; Pro from $1.99/week or $19.99 lifetime',
    competitorPricing: 'Free with ads; Premium ~$4.99/month or ~$19.99/year',
    features: [
      { feature: 'Couples-first design', bunny: true, competitor: 'Friends & couples' },
      { feature: 'Shared virtual pet', bunny: true, competitor: true },
      { feature: 'Draw-together canvas', bunny: true, competitor: false },
      { feature: 'Love notes & letters', bunny: true, competitor: false },
      { feature: 'Mini-games for two', bunny: true, competitor: false },
      { feature: 'Daily check-ins', bunny: true, competitor: 'Mood widgets' },
      { feature: 'Minimal ads', bunny: true, competitor: false },
      { feature: 'One-time lifetime price', bunny: true, competitor: false },
    ],
    bunnyBestFor: 'Couples who want a shared pet plus notes and games, without ads.',
    competitorBestFor: 'Friend groups who want the widest variety of shareable widgets.',
    faq: [
      {
        q: 'Is there a couples app like Widgetable without ads?',
        a: 'Yes. Bunny offers a shared virtual pet like Widgetable but is built specifically for couples and keeps ads minimal. It also adds love notes, a draw-together canvas, and mini-games, with a one-time $19.99 lifetime option.',
      },
      {
        q: 'Can you raise a pet with your partner in Bunny?',
        a: 'Yes. Bunny lets you and your partner co-raise a virtual pet and grow a plant together, similar to Widgetable’s shared pet, but inside a private couples-only space.',
      },
    ],
  },

  {
    slug: 'apps-like-locket-for-couples',
    competitor: 'Locket',
    targetKeyword: 'apps like Locket for couples',
    title: 'Apps Like Locket for Couples: Why Bunny Goes Further (2026)',
    metaDescription:
      'Looking for apps like Locket for couples? Bunny puts your partner on your home screen and adds a shared pet, doodles, love notes and games. Compare in 2026.',
    intro:
      'Locket made the shared-photo widget famous — your favorite person’s photo, right on your home screen. Couples love it, but Locket is a single-feature app. If you want that closeness plus more ways to play, here is how Bunny compares.',
    verdict:
      'Use Locket if all you want is a photo on your home screen. Use Bunny if you want that feeling of presence and a shared pet, a draw-together canvas, love notes, mini-games, and daily check-ins — a complete shared space for two rather than one widget.',
    bunnyPricing: 'Free; Pro from $1.99/week or $19.99 lifetime',
    competitorPricing: 'Free; Locket Gold from ~$1.99',
    features: [
      { feature: 'Feel present on each other’s phones', bunny: true, competitor: true },
      { feature: 'Shared photos', bunny: 'Planned', competitor: true },
      { feature: 'Shared virtual pet', bunny: true, competitor: false },
      { feature: 'Draw-together canvas', bunny: true, competitor: false },
      { feature: 'Love notes & letters', bunny: true, competitor: false },
      { feature: 'Mini-games for two', bunny: true, competitor: false },
      { feature: 'Daily check-ins', bunny: true, competitor: false },
      { feature: 'Built specifically for couples', bunny: true, competitor: 'Friends & couples' },
    ],
    bunnyBestFor: 'Couples who want presence plus a full set of shared activities.',
    competitorBestFor: 'People who want the simplest possible photo-on-home-screen widget.',
    faq: [
      {
        q: 'What is a good app like Locket for couples?',
        a: 'Bunny is a good Locket alternative for couples. It gives you the same sense of presence — feeling close throughout the day — and adds a shared virtual pet, a draw-together canvas, love notes, and mini-games, so it works as a complete shared space rather than a single widget.',
      },
      {
        q: 'Is Bunny better than Locket for long-distance relationships?',
        a: 'For long distance, Bunny offers more ways to stay connected than Locket. Locket shares photos to your home screen; Bunny adds a shared pet, doodles, notes, games, and daily check-ins so there is always something to do together.',
      },
    ],
  },
];

export function getComparison(slug) {
  return COMPARISONS.find((c) => c.slug === slug);
}
