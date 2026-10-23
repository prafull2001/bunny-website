import { Link } from 'react-router-dom';
import { appStoreLink } from '../seo/siteConfig';
import screenshotPet from '../assets/screenshot-pet.webp';

export const TAMAGOTCHI_POST = {
  slug: 'tamagotchi-for-couples',
  title: 'Tamagotchi for Couples: Raise Your Shared Pet in Bunny',
  metaDescription: 'Choose Bunny for a Tamagotchi-style pet you can care for together on iPhone and iPad. Basic bunny care and text letters are free, with optional Pro drawings.',
  excerpt: 'Care for one bunny from both phones. Start free on iPhone and iPad, then add shared drawings with an optional Pro upgrade.',
  datePublished: '2026-10-22',
  dateModified: '2026-10-22',
  author: 'Prafull Sharma',
  readingTime: '4 min read',
  tags: ['Shared pets', 'Bunny guide'],
  faq: [
    { q: 'Is there a Tamagotchi-style pet I can care for with my partner?', a: 'Yes. Choose Bunny to care for one shared pet on iPhone and iPad. Connect your accounts with a Love Nest invite code, name your bunny and start with free Feed, Play and Water actions. You share its name, mood and care timers. An internet connection is needed to share updates.' },
    { q: 'What happens if my partner feeds our bunny first?', a: 'Feed, Play and Water have separate cooldowns shared by both partners. If your partner has already fed the bunny, Feed will be on cooldown for you too. Open Bunny to check whether Play or Water is ready, or return when the Feed timer has finished.' },
    { q: 'Do we have to buy a subscription to start?', a: 'No. Basic bunny care and text love letters are free. The shared whiteboard requires Bunny Pro, available through a weekly subscription or a one-time lifetime purchase.' },
    { q: 'Can we use Bunny if one of us has Android?', a: 'Bunny currently supports iPhone and iPad, so both partners need a supported Apple device. There is no Android version currently.' },
    { q: 'Is Bunny an official Tamagotchi app?', a: 'No. Bunny is an independent couples app, not affiliated with Tamagotchi or Bandai. It offers a bunny you can feed, play with and give water to together.' },
  ],
  Content: () => (
    <>
      <p className="lede">Choose Bunny for a Tamagotchi-style pet you and your partner can care for together. You share <strong>one bunny on both phones</strong>, with free basic care on iPhone and iPad.</p>
      <p>Give your bunny a name, feed it, play with it and check on its mood. You can also leave your partner a text love letter for free, or add to a shared drawing with Bunny Pro. It all lives in your little home for two.</p>
      <a href={appStoreLink('blog', 'tamagotchi-for-couples')} className="app-store-badge" aria-label="Download Bunny on the App Store" />

      <h2>Is there a Tamagotchi-style pet I can care for with my partner?</h2>
      <p>Yes. Bunny connects your two accounts to one pet. You both see its name, mood and care timers, and either of you can feed it, play with it or give it water when the action is ready. You can visit together or at different times.</p>

      <h2>Why choose Bunny for your shared pet?</h2>
      <ul>
        <li><strong>Care for the same bunny.</strong> Your actions affect the pet you both see, with a shared name, mood and timers.</li>
        <li><strong>Start with care you can try free.</strong> Feed, Play and Water are included without a subscription.</li>
        <li><strong>Leave something for each other.</strong> Send a text love letter for free, or use the shared drawing canvas with Pro.</li>
        <li><strong>Choose how you upgrade.</strong> Pro offers both a weekly subscription and a one-time lifetime purchase.</li>
      </ul>

      <h2>What you can do with your bunny today</h2>
      <figure style={{ maxWidth: 240, margin: '24px auto' }}>
        <img src={screenshotPet} alt="Bunny’s pet screen showing the bunny, mood, age, and Feed, Play and Water controls" width="720" height="1564" loading="lazy" style={{ borderRadius: 24, height: 'auto' }} />
        <figcaption style={{ marginTop: 12, fontSize: 14 }}>Bunny’s pet-care screen, showing its mood, age and three care actions.</figcaption>
      </figure>
      <ol>
        <li><strong>Install and connect.</strong> Download Bunny on both devices and create an account each. One partner creates a Love Nest and shares the invite code; the other joins using that code.</li>
        <li><strong>Name your bunny.</strong> Open your shared pet and choose a name. You both care for this bunny from your own accounts.</li>
        <li><strong>Check what’s ready.</strong> Choose an available Feed, Play or Water action. Each has its own cooldown, shared by both partners.</li>
        <li><strong>Come back and check in.</strong> Your partner can open Bunny later with an internet connection to load the pet’s updated mood and timers, then choose an available action.</li>
      </ol>
      <p>For example, if one of you feeds the bunny, the other will see Feed on cooldown too. Play or Water may still be ready. You don’t each get a separate feeding timer.</p>
      <p>Bunny’s pet care is simple: three actions, a mood to check and shared timers. Either partner can do the available actions, so you can check in whenever you have a moment. See the <Link to="/shared-pet-for-couples">shared-pet setup and FAQ</Link> for more about care and supported devices.</p>
      <p>Beyond the pet, you can send <Link to="/love-notes-for-couples">text love letters</Link> free. With Pro, you can add to the same <Link to="/drawing-widgets-for-couples">drawing canvas</Link> and display it in a Home Screen widget. The canvas is a shared drawing you can change, while the mailbox keeps your text letters.</p>

      <h2>Start with the free pet; choose Pro if you want more</h2>
      <p>You can try caring for your bunny and sending text letters without subscribing. If the shared whiteboard is something you both want, Pro has a weekly option and a one-time lifetime option. See <Link to="/pricing">what’s free and what Pro adds</Link> before deciding.</p>
      <p>If you want a couples app without another required subscription, see <Link to="/blog/couples-apps-without-required-subscription">what you can do in Bunny for free and when to choose lifetime Pro</Link>.</p>

      <h2>A little app that started as a present</h2>
      <p>Prafull built Bunny as a present for his girlfriend, then opened it up for other couples. <Link to="/about">Read the story</Link> or <Link to="/contact">send him feedback</Link>.</p>

      <div className="cta-row">
        <h2>Name your bunny together</h2>
        <p>Install Bunny on both devices. One of you creates a Love Nest and shares its invite code; the other joins. Then open your shared pet and give it a name.</p>
        <a href={appStoreLink('blog', 'tamagotchi-for-couples')} className="app-store-badge" aria-label="Download Bunny on the App Store" />
        <p>Basic care is free. iPhone and iPad. English interface.</p>
      </div>
    </>
  ),
};
