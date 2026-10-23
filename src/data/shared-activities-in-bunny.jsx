import { Link } from 'react-router-dom';
import { appStoreLink } from '../seo/siteConfig';

export const SHARED_ACTIVITIES_GUIDE = {
  slug: 'best-apps-for-long-distance-couples-2026',
  title: '5 Shared Activities for Long-Distance Couples in Bunny',
  metaDescription: 'Want something small to do together? Share a pet, grow a plant, leave letters, draw and answer questions in Bunny. See what is free and how to start.',
  excerpt: 'One bunny, a growing plant and little things to leave for each other. Five shared activities you can actually try in Bunny, with free and Pro options.',
  datePublished: '2026-06-22',
  dateModified: '2026-10-23',
  author: 'Prafull Sharma',
  readingTime: '4 min read',
  tags: ['Long distance', 'Shared activities'],
  faq: [
    { q: 'What can long-distance couples do together in Bunny?', a: 'Care for one shared bunny, grow a plant, send text love letters, draw on a shared whiteboard and play couple question rounds. Basic bunny care, the plant and text letters are free. Three question packs are free; drawing and additional packs require Pro. Both partners need a supported iPhone or iPad.' },
    { q: 'Do we each have our own pet and plant?', a: 'Your connected accounts share the same pet and plant. Either partner can use available care actions. The pet has shared Feed, Play and Water cooldowns, so your partner’s care changes what is ready for you.' },
    { q: 'Do we need to be online at the same time?', a: 'You can care for the pet, water the plant when available, leave a letter or add to the whiteboard at different times. Open Bunny with an internet connection to send and load updates. For question rounds, both partners submit answers before the round can reveal them.' },
    { q: 'Can we start without a subscription?', a: 'Yes. Start with basic bunny care, the plant, text letters and the three free question packs. Pro adds shared drawing and more question packs, with an optional weekly subscription or a one-time lifetime purchase. Review the current price and terms in Bunny before buying.' },
  ],
  Content: () => (
    <>
      <p className="lede">Looking for something little that belongs to both of you? In Bunny, you can care for the same pet, grow a plant or leave something for your partner to open later. Here are five things to do together, starting with the free features.</p>
      <p>You each use your own iPhone or iPad. Create an account each, then connect with a Love Nest invite code. Your shared home is ready for a first visit.</p>
      <a href={appStoreLink('blog', 'best-apps-roundup')} className="app-store-badge" aria-label="Download Bunny on the App Store" />

      <h2>1. Raise the same virtual pet</h2>
      <p>Choose a name together, check your bunny’s mood and see which care action is ready. Feed, Play and Water each have a cooldown shared between you. If your partner has already fed the bunny, you’ll see that Feed is waiting too.</p>
      <p>Try making the first name a tiny joint decision: each suggest three, then pick the one that makes you both smile. Our <Link to="/blog/virtual-pet-names-for-couples">virtual-pet name ideas</Link> can get you started.</p>
      <p>Basic bunny care is free. See <Link to="/shared-pet-for-couples">how shared pet care works</Link>, or read the <Link to="/blog/tamagotchi-for-couples">Tamagotchi-for-couples guide</Link> if that’s the kind of experience you have in mind.</p>

      <h2>2. Grow a little plant together</h2>
      <p>Your shared plant has a name, a growth stage and a watering action. Open it to see how it’s doing, then give it water when the button is available. Both of you return to the same plant.</p>
      <p>Name it after something small you share: the café where you met, a favorite meal or a place you’d like to visit. Watch for its seed, sprout, sapling and tree stages as you keep caring for it.</p>
      <p>The plant is free. The <Link to="/shared-plant-for-couples">shared virtual plant page</Link> shows where to find it and how to rename it.</p>

      <h2>3. Leave a letter they can read again</h2>
      <p>Write one detail from your day that you would have told them if they were beside you. Maybe lunch went wrong, you saw a dog they would love, or you remembered something funny they said.</p>
      <p>Text letters stay in your mailbox, so they’re easy to come back to. You can also write a small thank-you or leave a note before a busy day. <Link to="/love-notes-for-couples">Text love letters and the mailbox</Link> are free.</p>

      <h2>4. Add to each other’s drawing</h2>
      <p>With Bunny Pro, open Doodles and draw a half-finished shape. Leave room for your partner to turn it into something. Next time, let them start. You both edit the same whiteboard.</p>
      <p>Try a small sketch on both devices first so you know what fits on both screens. The canvas stays editable and clearing it affects both partners. It is separate from your saved text letters.</p>
      <p>Our <Link to="/blog/shared-drawing-apps-for-couples">shared drawing guide</Link> has five ideas and the current controls. You can also display the drawing in Bunny’s Home Screen widget; iOS controls its refresh timing.</p>

      <h2>5. See how you answer a question</h2>
      <p>Open a couple question pack and start a round. Make your own choices, then compare when both of you have answered. A surprising match or disagreement gives you something to ask about on your next call.</p>
      <p>Travel Adventures, Foodie Fun and Random Fun are free packs. More packs are included with Pro. See <Link to="/couples-question-games">Bunny’s question games and how a round works</Link> before choosing a topic.</p>

      <h2>Pick one thing for your first visit</h2>
      <p>You don’t need to do everything. Name the bunny, water the plant when it’s ready or send a first letter. Come back to whatever you both enjoy. Use an internet connection so your changes can reach your partner.</p>
      <p>If drawing becomes your favorite idea, Bunny Pro offers a one-time lifetime purchase alongside a weekly subscription. <Link to="/pricing">See the free features and Pro options</Link>. Bunny’s interface and built-in questions are in English; both partners need a supported Apple device. There is currently no Android version.</p>

      <div className="cta-row">
        <h2>Start with something that’s yours</h2>
        <p>Download Bunny, connect with your partner and give your shared bunny a name. Basic care, the plant and text letters are free.</p>
        <a href={appStoreLink('blog', 'best-apps-roundup')} className="app-store-badge" aria-label="Download Bunny on the App Store" />
      </div>
    </>
  ),
};
