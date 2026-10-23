import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Seo from '../seo/Seo';
import { appStoreLink } from '../seo/siteConfig';
import { breadcrumbSchema, faqSchema } from '../seo/schema';
import screenshotPet from '../assets/screenshot-pet.webp';

const path = '/shared-pet-for-couples';
const faq = [
  {
    q: 'Can we raise the same virtual pet together?',
    a: 'Yes. Connect your accounts in Bunny and you share one pet, including its name, mood and care timers. Both partners can feed, play with and give water to the same bunny.',
  },
  {
    q: 'Do we need to be online at the same time?',
    a: 'No. You can care for your pet at different times, including from different time zones. Open Bunny with an internet connection to load and share care updates.',
  },
  {
    q: 'Is Bunny pet care free?',
    a: 'Yes. Basic bunny care, including Feed, Play and Water, is free. Text love letters are also free. Additional features such as the shared whiteboard require Bunny Pro; review the current offers and included features in the app.',
  },
  {
    q: 'Why do care actions have timers?',
    a: 'Feed, Play and Water each have a cooldown after use. The timers belong to your shared pet, so an action taken by either partner starts the wait for that action. Check which actions are ready when you visit.',
  },
  {
    q: 'Which devices do we need?',
    a: 'Bunny is available on iPhone and iPad. Each partner installs the app and uses their own connected account. There is currently no Android version. Check the App Store listing for current device and operating-system requirements.',
  },
  {
    q: 'Which language is Bunny available in?',
    a: 'The app interface and built-in questions are currently in English. Japanese localization is not currently available.',
  },
];

export default function SharedPetForCouples() {
  return (
    <main className="legal-page" style={{ padding: '40px 16px' }}>
      <Seo
        title="Shared Virtual Pet for Couples on iPhone & iPad | Bunny"
        description="Raise one virtual pet together on two phones. Feed, play and care for your shared bunny on your own schedules. Free basic care on iPhone and iPad."
        path={path}
        schema={[
          breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Shared pet for couples', path }]),
          faqSchema(faq),
        ]}
      />
      <div className="container" style={{ padding: 0 }}>
        <Link to="/" className="back-link"><ArrowLeft size={20} aria-hidden="true" /> Back to Bunny</Link>
        <article className="legal-content glass-panel" style={{ padding: 'clamp(24px, 5vw, 40px)' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 32, alignItems: 'center' }}>
            <div style={{ flex: '1 1 260px' }}>
              <p className="blog-card-meta">One pet. Two phones.</p>
              <h1>Raise a virtual pet together, even when you’re apart</h1>
              <p className="lede">Share a little bunny with your partner. Give it a name, feed it, play with it and check on its mood—from your own phones, whenever you have a moment.</p>
              <a href={appStoreLink('shared-pet', 'hero')} className="app-store-badge" aria-label="Download Bunny on the App Store" />
              <p>Basic bunny care is free · iPhone and iPad</p>
            </div>
            <figure style={{ flex: '0 1 220px', margin: '0 auto' }}>
              <img src={screenshotPet} alt="Bunny pet-care screen with Feed, Play and Water actions, mood and age" width="720" height="1564" style={{ height: 'auto', borderRadius: 24 }} />
              <figcaption style={{ marginTop: 12, fontSize: 14, color: 'var(--text-secondary)' }}>Feed, Play and Water: small ways to care for the same pet.</figcaption>
            </figure>
          </div>

          <h2>You care for the same pet</h2>
          <p>Once your accounts are connected, you and your partner share one pet, including its name, mood and care timers. Feed, Play and Water each have their own timer, so you can see which action is ready when you open Bunny.</p>
          <p>You don’t have to be online at the same time. One of you can stop by before work; the other can check in later. Open Bunny with an internet connection so your care updates can sync. It’s a small ritual you can share across different schedules and time zones.</p>

          <h2>Looking for a Tamagotchi-style pet you can share?</h2>
          <p>If you enjoy looking after a virtual pet and want your partner to join in, Bunny gives the two of you a bunny to care for together. Choose a name you both like, check on its mood and take turns with the available care actions.</p>
          <p>Still choosing? Our <Link to="/blog/tamagotchi-for-couples">Tamagotchi-style apps for couples guide</Link> compares shared-pet options and the devices you’ll need.</p>
          <p>Bunny also has space to leave something personal: send a <Link to="/love-notes-for-couples">love note</Link> or add a <Link to="/drawing-widgets-for-couples">shared doodle</Link> for your partner to find between calls.</p>

          <h2>Start your shared pet</h2>
          <ol style={{ paddingLeft: 24, color: 'var(--text-secondary)' }}>
            <li>Download Bunny on both devices and create an account each.</li>
            <li>One partner creates a Love Nest and shares the invite code. The other joins using that code.</li>
            <li>Open your shared pet and choose a name together.</li>
            <li>Try an available care action. Your partner can open Bunny later and check which actions are ready.</li>
          </ol>

          <h2>Start with free basic pet care</h2>
          <p>Feeding, playing with and giving water to your bunny are included free, along with text love letters. The shared drawing whiteboard requires Bunny Pro.</p>
          <p>Optional Pro offers include a weekly subscription and a one-time lifetime purchase. <Link to="/pricing">See what’s free and what Pro includes</Link>, then check the current price and offer in the app before choosing. You can start caring for your bunny without a subscription.</p>
          <p>Bunny began as an app Prafull built for his girlfriend. <Link to="/about">Read the story behind your little bunny</Link>.</p>

          <h2>Questions about your shared pet</h2>
          {faq.map(({ q, a }) => <div className="faq-item" key={q}><h3>{q}</h3><p>{a}</p></div>)}

          <div className="cta-row">
            <h2>Meet your shared bunny</h2>
            <p>Download Bunny, connect with your partner and start with free basic pet care.</p>
            <a href={appStoreLink('shared-pet', 'footer')} className="app-store-badge" aria-label="Download Bunny on the App Store" />
          </div>
          <p className="muted-links"><Link to="/compare/bunny-vs-widgetable">Compare Bunny and Widgetable</Link> · <Link to="/contact">Get help</Link> · <Link to="/privacy">Privacy</Link></p>
        </article>
      </div>
    </main>
  );
}
