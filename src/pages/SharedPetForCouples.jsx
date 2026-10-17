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
    a: 'Yes. Once you connect with your partner in Bunny, you share one pet. Both of you can take part in its care and see its name, mood and age.',
  },
  {
    q: 'Is Bunny pet care free?',
    a: 'Bunny is free to download, and basic bunny care is included. Optional Bunny Pro features are marked in the app, where you can review the current offers.',
  },
  {
    q: 'Can we use it in a long-distance relationship?',
    a: 'Yes. You can care for your shared pet from different places. Connect your accounts and use an internet connection so your care updates can be shared.',
  },
  {
    q: 'Which devices do we need?',
    a: 'Bunny is available on iPhone and iPad. Each partner installs the app and connects their account. Check the App Store listing for current device and operating-system requirements.',
  },
];

export default function SharedPetForCouples() {
  return (
    <main className="legal-page" style={{ padding: '40px 16px' }}>
      <Seo
        title="Shared Virtual Pet for Couples | Bunny"
        description="Raise a shared virtual pet with your partner in Bunny. Feed, play and care for your bunny together, even from far apart. Learn how to connect and get started."
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
              <p className="blog-card-meta">A shared virtual pet for couples</p>
              <h1>Raise a pet together, even when you’re apart</h1>
              <p className="lede">A little bunny to feed, play with and care for. Bunny gives you and your partner something small to look after together, wherever your day takes you.</p>
              <a href={appStoreLink('shared-pet', 'hero')} className="app-store-badge" aria-label="Download Bunny on the App Store" />
              <p>Free to download · Optional Bunny Pro</p>
            </div>
            <figure style={{ flex: '0 1 220px', margin: '0 auto' }}>
              <img src={screenshotPet} alt="Bunny pet-care screen with Feed, Play and Water actions, mood and age" width="720" height="1564" style={{ height: 'auto', borderRadius: 24 }} />
              <figcaption style={{ marginTop: 12, fontSize: 14, color: 'var(--text-secondary)' }}>A shared pet, with simple care actions.</figcaption>
            </figure>
          </div>

          <h2>One pet, a little teamwork</h2>
          <p>Choose a name for your bunny and make caring for it a small part of your day. Feed, Play and Water each have their own timer, so you can see when the next care action is ready. Your pet’s mood and age give you something to check in on together.</p>
          <p>You share the same pet with your connected partner. Try taking turns: one of you can check on the bunny before work, and the other can stop by later. There’s no need to turn it into a competition.</p>

          <h2>Start your shared pet</h2>
          <ol style={{ paddingLeft: 24, color: 'var(--text-secondary)' }}>
            <li>Both download Bunny and create an account.</li>
            <li>Connect with each other using the partner-pairing flow in the app.</li>
            <li>Open your pet and give it a name you both like.</li>
            <li>Try an available care action, then come back when its timer is ready.</li>
          </ol>

          <h2>A small ritual for long-distance couples</h2>
          <p>When you’re in different places, everyday moments can take a little more planning. A shared virtual pet gives you a playful thing to do between calls. Add a <Link to="/love-notes-for-couples">love note</Link> or a <Link to="/drawing-widgets-for-couples">shared doodle</Link> when you want to leave something personal, too.</p>
          <p>For more things to try together, explore our <Link to="/blog">long-distance relationship guides</Link>.</p>

          <h2>Questions about your shared pet</h2>
          {faq.map(({ q, a }) => <div className="faq-item" key={q}><h3>{q}</h3><p>{a}</p></div>)}

          <div className="cta-row">
            <h2>Meet your little bunny</h2>
            <p>Download Bunny, connect with your partner and start caring for your shared pet.</p>
            <a href={appStoreLink('shared-pet', 'footer')} className="app-store-badge" aria-label="Download Bunny on the App Store" />
          </div>
          <p className="muted-links"><Link to="/compare/bunny-vs-widgetable">Compare Bunny and Widgetable</Link> · <Link to="/contact">Get help</Link> · <Link to="/privacy">Privacy</Link></p>
        </article>
      </div>
    </main>
  );
}
