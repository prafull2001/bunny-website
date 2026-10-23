// Data-driven comparison ("vs") pages. Each entry renders a full /compare/<slug>
// page with a feature table, honest pros/cons, pricing, a recommendation, and
// FAQ schema. Facts about competitors are kept fair and verifiable.

export const COMPARISONS = [
  {
    slug: 'bunny-vs-paired',
    competitor: 'Paired',
    reviewedOn: '2026-10-17',
    sourceUrl: 'https://apps.apple.com/us/app/paired-couples-relationship/id1469609343',
    targetKeyword: 'Bunny vs Paired',
    title: 'Bunny vs Paired: Which Couples App Is Right for You? (2026)',
    metaDescription:
      'Bunny vs Paired compared: daily questions vs shared play. See features, pricing, and which couples app is the better fit for long distance in 2026.',
    intro:
      'Paired is built around expert-led daily questions and relationship exercises. Bunny takes a different approach: shared play. Here is an honest, side-by-side look so you can pick the one that fits your relationship.',
    verdict:
      'Choose Paired if you mainly want guided conversation prompts and relationship lessons. Choose Bunny if you want to feel connected through shared activities — a virtual pet, a draw-together canvas, love notes, and question packs — with a lifetime option alongside a weekly subscription.',
    bunnyPricing: 'Free; optional Pro weekly subscription or lifetime purchase',
    competitorPricing: 'Free tier; optional Paired Premium subscription',
    features: [
      { feature: 'Shared virtual pet to raise together', bunny: true, competitor: false },
      { feature: 'Draw-together canvas / whiteboard', bunny: true, competitor: false },
      { feature: 'Love notes & letters', bunny: true, competitor: false },
      { feature: 'Mini-games for two', bunny: false, competitor: 'Some' },
      { feature: 'Daily check-ins', bunny: true, competitor: true },
      { feature: 'Daily questions & conversation prompts', bunny: 'Some', competitor: true },
      { feature: 'Expert-written relationship content', bunny: false, competitor: true },
      { feature: 'Paid upgrade', bunny: 'Weekly or lifetime', competitor: 'Premium subscription' },
      { feature: 'Free to start', bunny: true, competitor: true },
    ],
    bunnyBestFor: 'Couples who want shared play and daily rituals, and prefer a one-time price.',
    competitorBestFor: 'Couples who want structured, research-backed conversation and relationship coaching.',
    faq: [
      {
        q: 'Is Bunny a good alternative to Paired?',
        a: 'Yes. Bunny is a good alternative to Paired for couples who want more than daily questions. Where Paired focuses on conversation prompts and relationship lessons, Bunny adds shared pet care, a draw-together canvas and love notes alongside its question packs, and offers a lifetime option alongside a weekly subscription.',
      },
      {
        q: 'How do Bunny and Paired prices compare?',
        a: 'Both are free to start. Bunny offers a weekly subscription and a one-time lifetime purchase; Paired offers Premium subscriptions. Compare the current offers shown in each app for your region and the features you want to use.',
      },
      {
        q: 'Which is better for long-distance couples, Bunny or Paired?',
        a: 'For long distance, it depends on what you want. Paired is better for guided daily conversation; Bunny is better for feeling present together through a shared pet, doodles, love notes, and question rounds between calls.',
      },
    ],
  },

  {
    slug: 'bunny-vs-lovelee',
    competitor: 'lovelee',
    reviewedOn: '2026-10-17',
    sourceUrl: 'https://apps.apple.com/us/app/lovelee-couples-love-note-app/id6754182711',
    targetKeyword: 'Bunny vs lovelee',
    title: 'Bunny vs lovelee: Two Playful Couples Apps Compared (2026)',
    metaDescription:
      'Bunny vs lovelee compared: shared pets, doodles, love notes, widgets and pricing. See how these two playful couples apps differ in 2026.',
    intro:
      'Bunny and lovelee are two of the most playful couples apps, and they share a lot of DNA: love notes, doodles, a shared pet, and daily check-ins. Here is how they actually differ.',
    verdict:
      'Both apps offer shared pets, plants, notes, questions, and a whiteboard. Bunny brings these activities into an illustrated shared home with a Home Screen drawing widget. lovelee offers a Love Zone with drawing, note, mood, and days-together widgets. Compare the design and current paid offers to choose the space you both enjoy.',
    bunnyPricing: 'Free; optional Pro weekly subscription or lifetime purchase',
    competitorPricing: 'Free; paid subscriptions and lifetime offers vary by region and promotion',
    features: [
      { feature: 'Shared virtual pet', bunny: true, competitor: true },
      { feature: 'Grow a plant together', bunny: true, competitor: true },
      { feature: 'Draw-together canvas / whiteboard', bunny: true, competitor: true },
      { feature: 'Love notes & letters', bunny: true, competitor: true },
      { feature: 'Mini-games for two', bunny: false, competitor: true },
      { feature: 'Home-screen widgets', bunny: 'Drawing widget', competitor: 'Drawings, notes, moods, days together' },
      { feature: 'Love-question library', bunny: true, competitor: true },
      { feature: 'Daily check-ins', bunny: true, competitor: true },
      { feature: 'One-time lifetime option', bunny: true, competitor: true },
    ],
    bunnyBestFor: 'Couples who enjoy an illustrated shared home, shared activities, and a lifetime upgrade option.',
    competitorBestFor: 'Couples who prefer lovelee’s Love Zone and its note, mood, and days-together widgets.',
    faq: [
      {
        q: 'What is the difference between Bunny and lovelee?',
        a: 'Both offer pets, plants, shared whiteboards, love notes, question packs, and Home Screen widgets. Bunny centers these activities in an illustrated shared home and provides a drawing widget; lovelee also promotes note, mood, and days-together widgets. The design and current paid offers are useful points to compare.',
      },
      {
        q: 'How do Bunny and lovelee prices compare?',
        a: 'Both are free to download with paid upgrades. Bunny offers weekly and lifetime options; lovelee offers subscriptions and lifetime purchases. Check the price and offer shown in each app for your region before purchasing.',
      },
    ],
  },

  {
    slug: 'bunny-vs-widgetable',
    competitor: 'Widgetable',
    reviewedOn: '2026-10-17',
    sourceUrl: 'https://apps.apple.com/us/app/widgetable-besties-couples/id1641107226',
    targetKeyword: 'apps like Widgetable for couples',
    title: 'Bunny vs Widgetable: A Couples App for Your Shared Pet (2026)',
    metaDescription:
      'Compare Bunny and Widgetable for shared pet care, drawings, notes and widgets. See their different approaches to staying connected with your partner.',
    intro:
      'Widgetable offers shared pets and connection widgets for friends and couples, including mood, distance, photos, doodles and text. Bunny combines pet care with a shared in-app home, a drawing canvas, letters and question packs for couples.',
    verdict:
      'Pick Widgetable if you want its range of widgets for friends and couples. Pick Bunny if you prefer a shared home with pet care, a draw-together canvas, love letters and question packs, with weekly and lifetime upgrade options.',
    bunnyPricing: 'Free; optional Pro weekly subscription or lifetime purchase',
    competitorPricing: 'Free with ads and in-app purchases; optional Premium subscription',
    features: [
      { feature: 'Couples-first design', bunny: true, competitor: 'Friends & couples' },
      { feature: 'Shared virtual pet', bunny: true, competitor: true },
      { feature: 'Share drawings', bunny: 'Shared canvas and drawing widget', competitor: 'Doodles through Pin It!' },
      { feature: 'Share written messages', bunny: 'Love letters and mailbox', competitor: 'Texts through Pin It!' },
      { feature: 'Daily check-ins', bunny: true, competitor: 'Mood widgets' },
      { feature: 'Paid upgrade', bunny: 'Weekly or lifetime', competitor: 'Premium subscription and in-app purchases' },
    ],
    bunnyBestFor: 'Couples who want a shared in-app home with a pet, letters, drawings and question rounds.',
    competitorBestFor: 'Friends and couples who want pet, mood, distance and other connection widgets.',
    faq: [
      {
        q: 'How is Bunny different from Widgetable?',
        a: 'Both offer shared virtual pets. Widgetable focuses on widgets for friends and couples, including sharing doodles and text through Pin It! Bunny brings pet care, a shared drawing canvas, love letters and question packs into a couples home, with a separate drawing widget.',
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
    reviewedOn: '2026-10-17',
    sourceUrl: 'https://apps.apple.com/us/app/locket-widget/id1600525061',
    targetKeyword: 'apps like Locket for couples',
    title: 'Apps Like Locket for Couples: Photos or Shared Activities? (2026)',
    metaDescription:
      'Compare Bunny’s shared pet, drawing widget, love notes and question packs with Locket’s photo-sharing experience for friends and couples.',
    intro:
      'Locket focuses on sharing everyday photos with close friends and partners, including through Home Screen widgets. Bunny focuses on shared activities such as pet care, doodles, notes, and question rounds. These are different ways to stay present in each other’s day.',
    verdict:
      'Choose Locket for photo sharing with close friends and partners. Choose Bunny for shared pet care, a draw-together canvas and drawing widget, love notes, question packs, and daily check-ins. Bunny’s drawing widget is not a photo-sharing widget.',
    bunnyPricing: 'Free; optional Pro weekly subscription or lifetime purchase',
    competitorPricing: 'Free; optional Locket Gold subscription',
    features: [
      { feature: 'Feel present on each other’s phones', bunny: true, competitor: true },
      { feature: 'Photo-sharing widget', bunny: false, competitor: true },
      { feature: 'Shared drawing widget', bunny: true, competitor: false },
      { feature: 'Shared virtual pet', bunny: true, competitor: false },
      { feature: 'Draw-together canvas', bunny: true, competitor: false },
      { feature: 'Love notes & letters', bunny: true, competitor: false },
      { feature: 'Daily check-ins', bunny: true, competitor: false },
      { feature: 'Built specifically for couples', bunny: true, competitor: 'Friends & couples' },
    ],
    bunnyBestFor: 'Couples who want presence plus a full set of shared activities.',
    competitorBestFor: 'People who want the simplest possible photo-on-home-screen widget.',
    faq: [
      {
        q: 'What is a good app like Locket for couples?',
        a: 'Bunny is an alternative for couples who want shared activities: a virtual pet, a draw-together canvas and drawing widget, love notes, and question packs. Choose Locket if photo sharing is your main goal; Bunny’s widget displays your shared drawing rather than photos.',
      },
      {
        q: 'Is Bunny better than Locket for long-distance relationships?',
        a: 'It depends on your routine. Locket centers on sharing everyday photos. Bunny offers shared pet care, doodles, notes, question rounds, and daily check-ins. Try the experience that you and your partner are most likely to use regularly.',
      },
    ],
  },
];

export function getComparison(slug) {
  return COMPARISONS.find((c) => c.slug === slug);
}
