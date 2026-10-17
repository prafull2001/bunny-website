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
      'Choose Paired if you mainly want guided conversation prompts and relationship lessons. Choose Bunny if you want to feel connected through shared activities — a virtual pet, a draw-together canvas, love notes, and games — with a lifetime option alongside a weekly subscription. Many couples happily use both.',
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
        a: 'Yes. Bunny is a good alternative to Paired for couples who want more than daily questions. Where Paired focuses on conversation prompts and relationship lessons, Bunny adds shared play — a virtual pet, a draw-together canvas, love notes, and mini-games — and offers a lifetime option alongside a weekly subscription.',
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
      'Both apps offer shared pets, plants, notes, games, questions, and a whiteboard. Bunny brings these activities into a hand-drawn home with a Home Screen drawing widget. lovelee offers a Love Zone with drawing, note, mood, and days-together widgets. Compare the design and current paid offers to choose the space you both enjoy.',
    bunnyPricing: 'Free; Pro from $1.99/week or $19.99 lifetime',
    competitorPricing: 'Free; paid subscriptions and lifetime offers vary by region and promotion',
    features: [
      { feature: 'Shared virtual pet', bunny: true, competitor: true },
      { feature: 'Grow a plant together', bunny: true, competitor: true },
      { feature: 'Draw-together canvas / whiteboard', bunny: true, competitor: true },
      { feature: 'Love notes & letters', bunny: true, competitor: true },
      { feature: 'Mini-games for two', bunny: true, competitor: true },
      { feature: 'Home-screen widgets', bunny: 'Drawing widget', competitor: 'Drawings, notes, moods, days together' },
      { feature: 'Love-question library', bunny: true, competitor: true },
      { feature: 'Daily check-ins', bunny: true, competitor: true },
      { feature: 'One-time lifetime option', bunny: true, competitor: true },
    ],
    bunnyBestFor: 'Couples who enjoy a hand-drawn home, shared activities, and a lifetime upgrade option.',
    competitorBestFor: 'Couples who prefer lovelee’s Love Zone and its note, mood, and days-together widgets.',
    faq: [
      {
        q: 'What is the difference between Bunny and lovelee?',
        a: 'Both offer pets, plants, games, shared whiteboards, love notes, question packs, and Home Screen widgets. Bunny centers these activities in a hand-drawn home and provides a drawing widget; lovelee also promotes note, mood, and days-together widgets. The design and current paid offers are useful points to compare.',
      },
      {
        q: 'How do Bunny and lovelee prices compare?',
        a: 'Both are free to download with paid upgrades. Bunny offers weekly and lifetime options. lovelee’s US listing includes $39.99 lifetime and a $19.99 lifetime offer, so Bunny is not always cheaper. Check the price and offer shown in each app for your region before purchasing.',
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
      'Compare Bunny’s shared pet, drawing widget, love notes and games with Locket’s photo-sharing experience for friends and couples.',
    intro:
      'Locket focuses on sharing everyday photos with close friends and partners, including through Home Screen widgets. Bunny focuses on shared activities such as pet care, doodles, notes, and games. These are different ways to stay present in each other’s day.',
    verdict:
      'Choose Locket for photo sharing with close friends and partners. Choose Bunny for shared pet care, a draw-together canvas and drawing widget, love notes, games, and daily check-ins. Bunny’s drawing widget is not a photo-sharing widget.',
    bunnyPricing: 'Free; Pro from $1.99/week or $19.99 lifetime',
    competitorPricing: 'Free; Locket Gold from ~$1.99',
    features: [
      { feature: 'Feel present on each other’s phones', bunny: true, competitor: true },
      { feature: 'Photo-sharing widget', bunny: false, competitor: true },
      { feature: 'Shared drawing widget', bunny: true, competitor: false },
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
        a: 'Bunny is an alternative for couples who want shared activities: a virtual pet, a draw-together canvas and drawing widget, love notes, and games. Choose Locket if photo sharing is your main goal; Bunny’s widget displays your shared drawing rather than photos.',
      },
      {
        q: 'Is Bunny better than Locket for long-distance relationships?',
        a: 'It depends on your routine. Locket centers on sharing everyday photos. Bunny offers shared pet care, doodles, notes, games, and daily check-ins. Try the experience that you and your partner are most likely to use regularly.',
      },
    ],
  },
];

export function getComparison(slug) {
  return COMPARISONS.find((c) => c.slug === slug);
}
