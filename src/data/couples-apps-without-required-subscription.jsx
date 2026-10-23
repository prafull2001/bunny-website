import { Link } from 'react-router-dom';
import { appStoreLink, SITE } from '../seo/siteConfig';

export const SUBSCRIPTION_GUIDE = {
  slug: 'couples-apps-without-required-subscription',
  title: 'A Couples App Without a Required Subscription',
  metaDescription: 'Raise one pet and send love letters in Bunny for free. Add a shared drawing canvas with a one-time lifetime Pro purchase. No subscription required.',
  excerpt: 'One shared bunny, little love letters and no recurring bill required. See what you can do for free and when lifetime Pro makes sense.',
  datePublished: '2026-10-22',
  dateModified: '2026-10-22',
  author: 'Prafull Sharma',
  readingTime: '4 min read',
  tags: ['Free features', 'Pricing'],
  faq: [
    { q: 'What is a good couples app without a required subscription?', a: 'Bunny is a great fit if you want a pet to care for together and a place for love letters. Basic Feed, Play and Water actions, text letters and the mailbox are free. For the shared whiteboard and drawing widget, choose lifetime Pro if you prefer a one-time purchase. Both partners need an iPhone or iPad.' },
    { q: 'Can we use Bunny without buying Pro?', a: 'Yes. Connect your accounts with a Love Nest invite code, name your shared bunny, care for it and exchange text love letters. These free features do not require a Pro purchase or a paid trial.' },
    { q: 'Can we get the drawing canvas without a subscription?', a: 'Yes. Bunny Pro has a one-time lifetime purchase option as well as a weekly subscription. Pro includes the shared whiteboard and its Home Screen drawing widget. Check the current price and purchase terms shown in Bunny before choosing.' },
    { q: 'Is Bunny Pro Lifetime a recurring payment?', a: 'No. Lifetime Pro is a one-time purchase. Bunny also offers a separate weekly plan that renews automatically unless canceled. Choose the lifetime option if you want Pro without recurring payments.' },
  ],
  Content: () => (
    <>
      <p className="lede">You want something little to share with your partner, without another recurring bill. Bunny gives you one pet to care for and a mailbox for your love letters, free. If you want to draw together too, lifetime Pro adds the shared whiteboard with a one-time purchase.</p>
      <p>No subscription is required to start. Install Bunny on your iPhones or iPads, connect your accounts and name your bunny. You have something that belongs to both of you before you spend anything.</p>
      <a href={appStoreLink('blog', 'couples-apps-without-required-subscription')} className="app-store-badge" aria-label="Download Bunny on the App Store" />

      <h2>Why choose Bunny if you don’t want another subscription?</h2>
      <p>Because there’s something to do together from the start. Feed your bunny when you have a moment. Leave a letter for your partner to open later. Come back to the same little pet on your own phone. You can make Bunny part of your day using its free features.</p>
      <ul>
        <li><strong>A pet you actually share.</strong> Its name, mood and care timers belong to both of you. Your partner’s actions count too.</li>
        <li><strong>A place for your words.</strong> Send text letters and reread them in your mailbox.</li>
        <li><strong>Room for different schedules.</strong> You can visit at different times. Open Bunny with an internet connection to load and share updates.</li>
        <li><strong>A one-time option for drawing.</strong> If you want the shared whiteboard, lifetime Pro lets you add it without a recurring payment.</li>
      </ul>

      <h2>What can we do for free?</h2>
      <div className="cmp-table-wrap" role="region" aria-label="Bunny free features and optional Pro upgrade" tabIndex={0}>
        <table className="cmp-table">
          <caption>Start free. Add Pro when you want to draw together.</caption>
          <thead><tr><th scope="col">What you want to share</th><th scope="col">What’s included</th><th scope="col">Access</th></tr></thead>
          <tbody>
            <tr><th scope="row">A little pet</th><td>One bunny with basic Feed, Play and Water actions, mood and shared care timers.</td><td>Free</td></tr>
            <tr><th scope="row">Love letters</th><td>Text letters and a mailbox for sent and received messages.</td><td>Free</td></tr>
            <tr><th scope="row">A drawing for each other</th><td>One editable shared whiteboard and a Home Screen widget that displays it.</td><td>Pro: lifetime or weekly</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Start with a bunny and a letter</h2>
      <p>Each of you creates a Bunny account. One partner creates a Love Nest and shares its invite code; the other joins using that code. Then open your <Link to="/shared-pet-for-couples">shared pet</Link> and give it a name.</p>
      <p>Feed, Play and Water each have a shared cooldown. If you feed the bunny, your partner sees that Feed is on cooldown too. They can check whether Play or Water is ready when they visit. Our <Link to="/blog/tamagotchi-for-couples">Tamagotchi-for-couples guide</Link> explains the care in more detail.</p>
      <p>Then send a <Link to="/love-notes-for-couples">text love letter</Link>. It can be a good-morning message, a small thank-you or something you forgot to say on your last call. Your mailbox keeps sent and received letters so you can come back to them.</p>

      <h2>Want to leave drawings? Choose lifetime Pro.</h2>
      <p>Pro adds <Link to="/drawing-widgets-for-couples">a shared drawing whiteboard</Link> that both of you can change. Leave a doodle for your partner, add to their drawing or write something by hand. You can also display that canvas in a Home Screen widget; iOS controls when the widget refreshes.</p>
      <p>The canvas stays editable. Your saved text letters live separately in the mailbox. That gives you a place to make things together and a place to keep what you’ve written.</p>
      <p>Need somewhere to start? Try our <Link to="/blog/shared-drawing-apps-for-couples">five little drawing ideas for couples</Link>, from finishing each other’s doodles to leaving a handwritten hello.</p>
      <p>Bunny Pro Lifetime is <strong>${SITE.pricing.lifetime} USD</strong> as a one-time purchase. There is also an optional <strong>${SITE.pricing.proWeekly} USD weekly subscription</strong>, which renews automatically. If avoiding recurring payments is your priority, choose lifetime when you’re ready for Pro.</p>
      <p style={{ fontSize: 14 }}>US App Store prices checked October 22, 2026. Regional prices and offers can differ. Confirm the price and purchase terms in Bunny before paying. See <Link to="/pricing">Bunny’s pricing page</Link> for free and Pro features, restoring purchases and managing the weekly plan.</p>

      <h2>Free features, a trial and a lifetime purchase are different</h2>
      <p>Bunny’s basic pet care and text letters are free features. You don’t need to start a paid trial to use them. A trial, where offered, gives temporary access to a paid plan and may renew into a subscription. A lifetime purchase is a one-time option for the access described at checkout.</p>
      <p>Start free and see what you both enjoy. If you keep wanting to leave drawings, that’s a concrete reason to add Pro.</p>

      <h2>Will Bunny work on both our phones?</h2>
      <p>Bunny is available on iPhone and iPad with an English interface. Each partner needs a supported Apple device and their own connected account. There is currently no Android version.</p>

      <div className="cta-row">
        <h2>Your bunny is a good place to start</h2>
        <p>Pick a name together, take the first care turn and leave your partner a note. Basic care and text letters are free. You can decide about drawings later.</p>
        <a href={appStoreLink('blog', 'couples-apps-without-required-subscription')} className="app-store-badge" aria-label="Download Bunny on the App Store" />
        <p><Link to="/pricing">See Bunny’s free and Pro features</Link></p>
      </div>
    </>
  ),
};
