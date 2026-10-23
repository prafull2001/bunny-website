import { Link } from 'react-router-dom';
import { appStoreLink } from '../seo/siteConfig';
import { TAMAGOTCHI_POST } from './tamagotchi-for-couples';
import { SUBSCRIPTION_GUIDE } from './couples-apps-without-required-subscription';

// Blog posts. Each post is data + a JSX `Content` component so it can use
// proper heading hierarchy, lists, internal links, and CTAs. The first H2s are
// phrased as the exact questions people search, to win snippets and LLM quotes.

export const POSTS = [
  SUBSCRIPTION_GUIDE,
  TAMAGOTCHI_POST,
  {
    slug: 'best-apps-for-long-distance-couples-2026',
    title: 'Is Bunny Right for Your Long-Distance Relationship?',
    metaDescription:
      'See how Bunny helps long-distance couples share a pet, send text letters and draw together. Learn what is free, what Pro adds and how to get started.',
    excerpt:
      'A shared bunny, a letter to come back to and a place to draw. See what you can do together in Bunny, with free basics and optional Pro.',
    datePublished: '2026-06-22',
    dateModified: '2026-10-22',
    author: 'Prafull Sharma',
    readingTime: '4 min read',
    tags: ['Long distance', 'Bunny guide'],
    tldr: [
      'Bunny gives you one pet to care for together and a mailbox for your text love letters. Both are free.',
      'Bunny Pro adds a shared whiteboard and Home Screen drawing widget, with weekly or one-time lifetime purchase options.',
      'You can care for the bunny and leave letters at different times. Open the app with an internet connection to share updates.',
      'Both partners need an iPhone or iPad. Bunny’s interface and built-in questions are in English.',
    ],
    faq: [
      {
        q: 'Is Bunny a good app for long-distance couples?',
        a: 'Bunny fits couples who want small things to do together between calls: caring for one pet, sending text love letters, answering question packs and drawing on a shared whiteboard. Basic bunny care and text letters are free. Drawing requires Pro. Both partners need an iPhone or iPad.',
      },
      {
        q: 'Do we have to use Bunny at the same time?',
        a: 'No. You can care for the bunny or send a text letter when you have a moment, and your partner can open Bunny later to see the update. Both devices need an internet connection to share changes. Pet care timers are shared between you.',
      },
      {
        q: 'Can we try Bunny without subscribing?',
        a: 'Yes. Basic bunny care and text love letters are free. Shared drawing requires Bunny Pro, with an optional weekly subscription or a one-time lifetime purchase. Check the current price and terms in the app before buying.',
      },
    ],
    Content: () => (
      <>
        <p>
          You don’t always have time for a long call. Bunny gives you something
          small to share in between: a bunny you both care for, a letter waiting
          in your mailbox, or a doodle your partner leaves for you. Here’s what
          you can do together and what you can try for free.
        </p>

        <h2>One bunny, cared for from both phones</h2>
        <p>
          Connect your accounts with a Love Nest invite code and give your{' '}
          <Link to="/shared-pet-for-couples">shared bunny</Link> a name. Both of
          you can check its mood and use Feed, Play and Water when each action
          is ready. If your partner feeds it first, you’ll see the same feeding
          cooldown when you open the app.
        </p>
        <p>
          Basic bunny care is free. You can visit together or at different times;
          open Bunny with an internet connection to load and share updates. For
          a closer look at the care actions, read our{' '}
          <Link to="/blog/tamagotchi-for-couples">Tamagotchi-style shared pet guide</Link>.
        </p>

        <h2>Leave something for your partner to find</h2>
        <p>
          A <Link to="/love-notes-for-couples">text love letter</Link> can be a
          good-morning note, something you miss about them, or a thought you want
          to save. Your letters stay in the mailbox so you can read them again.
          Text letters are free, and you can write one whenever you have a moment.
        </p>
        <p>
          If you like drawing, Pro opens a{' '}
          <Link to="/drawing-widgets-for-couples">shared whiteboard</Link> for
          doodles and little messages. You can add to the same canvas and put
          its drawing on your Home Screen with Bunny’s widget. iOS controls when
          the widget refreshes.
        </p>

        <h2>Find a question to talk about</h2>
        <p>
          Bunny also includes couple question packs and answer rounds. Pick a
          topic and see how you each answer. Some packs are free; others require
          Pro. You can start a conversation on a call, then return to your pet
          or letters another time.
        </p>

        <h2>Try the free parts before choosing an upgrade</h2>
        <p>
          Name your bunny and send each other a letter first. If you want shared
          drawing or more question packs, Bunny Pro has a weekly subscription
          and a one-time lifetime option. The{' '}
          <Link to="/pricing">pricing page</Link> explains the free features and
          paid options. Confirm the amount and terms shown in Bunny before buying.
        </p>

        <h2>Start your shared home</h2>
        <p>
          Both of you need an iPhone or iPad; Bunny’s interface and built-in
          questions are in English. Install the app, create an account each,
          then connect with a Love Nest invite code. You can{' '}
          <a href={appStoreLink('blog', 'best-apps-roundup')}>download Bunny free on the App Store</a>{' '}
          and give your bunny a name today.
        </p>
      </>
    ),
  },

  {
    slug: 'long-distance-relationship-games',
    title: '11 Long-Distance Relationship Games to Play Together (2026)',
    metaDescription:
      '11 long-distance relationship games to play with your partner, from app mini-games to questions and challenges. Fun ways to feel close from afar in 2026.',
    excerpt:
      'From in-app mini-games to questions and challenges, here are 11 long-distance relationship games that actually make you feel closer.',
    datePublished: '2026-06-22',
    dateModified: '2026-10-22',
    author: 'Prafull Sharma',
    readingTime: '6 min read',
    tags: ['Long distance', 'Activities'],
    tldr: [
      'The best long-distance games are quick, shared, and repeatable: something you can do in a few minutes any day.',
      'Mix app-based games (mini-games, co-op puzzles) with talking games (20 questions, would-you-rather).',
      'A shared pet or daily challenge keeps a game going even when your schedules don’t line up.',
      'Bunny includes couple question packs and answer rounds, plus a shared pet and daily check-ins.',
    ],
    faq: [
      {
        q: 'What games can long-distance couples play together?',
        a: 'Long-distance couples can play in-app mini-games, co-op mobile games, online multiplayer titles, and talking games like 20 questions, would-you-rather, and truth-or-dare. The best ones are quick and repeatable so you can play a round any day, even with a time difference.',
      },
      {
        q: 'What is a good app with games for couples?',
        a: 'Bunny offers couple question packs and answer rounds alongside a shared virtual pet and daily check-ins. Some question packs are free; others require Bunny Pro.',
      },
      {
        q: 'How do you keep a long-distance relationship fun?',
        a: 'Build small, recurring rituals: a daily game or question, a shared goal like raising a pet, and the occasional themed challenge. Variety plus consistency keeps things light and gives you both something to look forward to.',
      },
    ],
    Content: () => (
      <>
        <p>
          Calls and texts are the backbone of a long-distance relationship, but
          they can start to feel routine. Games break the pattern. The best{' '}
          <strong>long-distance relationship games</strong> are quick, shared, and
          easy to repeat, something you can pull off in a few minutes on a normal
          Tuesday. Here are 11 that actually make you feel closer.
        </p>

        <h2>What are the best long-distance relationship games?</h2>
        <p>
          The best games for long distance are the ones you’ll actually keep
          playing. That means low setup, no need for perfectly matched schedules,
          and a little bit of personality. This list mixes app-based games with
          talking games so you can pick based on your mood and time zones.
        </p>

        <h3>App &amp; screen games</h3>
        <ol>
          <li><strong>Couple question rounds.</strong> In <Link to="/">Bunny</Link>, choose a question pack and answer a round with your partner. Some packs are free; others require Bunny Pro.</li>
          <li><strong>Raise a shared pet.</strong> Co-caring for a <Link to="/shared-pet-for-couples">virtual pet</Link> is a slow game you both “win” over time. It keeps going even when you can’t be online at the same moment.</li>
          <li><strong>Co-op mobile puzzles.</strong> Pick a co-op puzzle or escape-room style game you only play together, so progress is a shared thing.</li>
          <li><strong>Online multiplayer classics.</strong> Chess, cards, or a casual battle-royale: pick one “your game” and keep a running scoreboard.</li>
          <li><strong>Watch-and-guess.</strong> Start the same show and pause to bet on what happens next; loser plans the next virtual date.</li>
        </ol>

        <h3>Talking games (no app required)</h3>
        <ol start={6}>
          <li><strong>20 Questions.</strong> The classic. Great for a quick call or a slow text thread.</li>
          <li><strong>Would You Rather.</strong> Silly or deep; you control the dial.</li>
          <li><strong>Truth or Dare (long-distance edition).</strong> Dares become “send a photo of…” or “text me a voice note doing…”.</li>
          <li><strong>Two Truths and a Lie.</strong> You’ll be surprised what you still don’t know.</li>
          <li><strong>The Question Jar.</strong> Keep a shared list of questions and pull one a day. (See our <Link to="/blog/questions-to-ask-long-distance-partner">150+ questions to ask your long-distance partner</Link>.)</li>
          <li><strong>Daily check-in challenge.</strong> Each send one “high, low, and a doodle” every day. It’s a game you both win by showing up.</li>
        </ol>

        <h2>How do you keep the games going across time zones?</h2>
        <p>
          The trick is asynchronous play: games that don’t require you both to be
          awake at once. A shared pet, a question jar, and a daily check-in all
          continue on each person’s own schedule, then sync when you’re both
          around. That’s exactly why all-in-one couples apps work well for long
          distance: the game is always “on,” waiting for whoever shows up next.
        </p>

        <h2>The bottom line</h2>
        <p>
          You don’t need elaborate plans to keep a long-distance relationship
          playful, just a few quick games you return to often. If you want
          question rounds, a shared pet, and a daily check-in in one place,{' '}
          <a href={appStoreLink('blog', 'ldr-games')}>download Bunny free</a> and
          start a round tonight.
        </p>
      </>
    ),
  },

  {
    slug: 'questions-to-ask-long-distance-partner',
    title: '150+ Questions to Ask Your Long-Distance Partner (2026)',
    metaDescription:
      '150+ questions to ask your long-distance partner: deep, fun, future, and daily check-in questions to spark real conversation and feel closer from afar.',
    excerpt:
      'A categorized bank of questions to ask your long-distance partner, for deeper talks, lighter nights, and everyday check-ins.',
    datePublished: '2026-06-22',
    dateModified: '2026-10-18',
    author: 'Prafull Sharma',
    readingTime: '7 min read',
    tags: ['Long distance', 'Connection'],
    tldr: [
      'Good questions beat “how was your day?” because they invite a real answer.',
      'Rotate between four buckets: deep, fun, future, and daily check-in.',
      'Ask one a day rather than 20 at once; consistency builds intimacy.',
      'Save your favorites somewhere shared so the ritual sticks.',
    ],
    faq: [
      {
        q: 'What are good questions to ask your long-distance partner?',
        a: 'Good questions invite a real answer instead of a yes/no. Rotate between deep questions (values, fears, dreams), fun questions (favorites, hypotheticals), future questions (plans, the next visit, life goals), and daily check-in questions (high and low of your day). Asking one a day works better than a long interrogation.',
      },
      {
        q: 'How can questions help a long-distance relationship?',
        a: 'Questions create the deeper conversation that distance can crowd out. A daily question is a small, reliable ritual that keeps you learning about each other and gives every day a moment of real connection, not just logistics.',
      },
      {
        q: 'How often should we ask each other questions?',
        a: 'Once a day is a sweet spot. A single thoughtful question each day is sustainable and builds intimacy over time, whereas marathon Q&A sessions are hard to keep up.',
      },
    ],
    Content: () => (
      <>
        <p>
          “How was your day?” gets you a one-word answer. Better{' '}
          <strong>questions to ask your long-distance partner</strong> invite a
          real story, and over time, those stories are what keep you close. Below
          are 150+ questions sorted into four buckets so you can match the moment.
        </p>

        <h2>Why questions matter more in long distance</h2>
        <p>
          When you live apart, logistics eat your conversations: schedules, time
          zones, the next visit. Intentional questions carve out space for the
          deeper stuff. The most effective approach isn’t asking a hundred at once;
          it’s asking <em>one a day</em>, as a small, reliable ritual.
        </p>

        <h2>Deep questions</h2>
        <ul>
          <li>What does a perfect ordinary day with me look like to you?</li>
          <li>When do you feel most loved by me?</li>
          <li>What’s a fear about us you’ve never said out loud?</li>
          <li>What did your family teach you about love, for better or worse?</li>
          <li>What does “home” mean to you right now?</li>
          <li>What’s something you’re proud of that you don’t talk about?</li>
          <li>When have you felt closest to me, even from far away?</li>
        </ul>

        <h2>Fun questions</h2>
        <ul>
          <li>If we had a free weekend together right now, what would we do?</li>
          <li>What’s the most ridiculous thing you’d do to surprise me?</li>
          <li>If our relationship had a theme song, what would it be?</li>
          <li>What pet would we adopt first when we live together?</li>
          <li>What’s a tiny habit of mine you secretly love?</li>
          <li>Truth: what did you think of me on day one?</li>
        </ul>

        <h2>Future questions</h2>
        <ul>
          <li>Where do you imagine us in three years?</li>
          <li>What’s the first thing you want to do when we’re finally in the same place?</li>
          <li>What does “closing the distance” look like for you?</li>
          <li>What’s a tradition you want us to start?</li>
          <li>What’s a goal you want us to chase together?</li>
        </ul>

        <h2>Daily check-in questions</h2>
        <ul>
          <li>What was the high and low of your day?</li>
          <li>What made you think of me today?</li>
          <li>What’s one thing you need from me this week?</li>
          <li>On a scale of 1–10, how’s your battery today, and why?</li>
          <li>What’s one small win you had today?</li>
        </ul>

        <h2>How to make the question ritual stick</h2>
        <p>
          Pick a time (morning text, goodnight call) and ask one question then.
          Save the ones that spark the best conversations somewhere you both can
          see. A daily check-in feature does this automatically; in{' '}
          <Link to="/">Bunny</Link>, your daily check-in is the natural home for a
          question a day, right next to your shared pet and notes. For more ways to
          play, see our{' '}
          <Link to="/blog/long-distance-relationship-games">long-distance relationship games</Link>.
        </p>

        <h2>The bottom line</h2>
        <p>
          Distance doesn’t have to mean shallow conversations. One good question a
          day is a tiny ritual that compounds into real intimacy. Want it built
          into your day?{' '}
          <a href={appStoreLink('blog', 'ldr-questions')}>Download Bunny free</a>{' '}
          and make the daily check-in yours.
        </p>
      </>
    ),
  },
];

export function getPost(slug) {
  return POSTS.find((p) => p.slug === slug);
}
