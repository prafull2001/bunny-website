import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Seo from '../seo/Seo';
import { appStoreLink, SITE } from '../seo/siteConfig';
import { breadcrumbSchema, faqSchema } from '../seo/schema';

const path = '/pricing';
const faq = [
  {
    q: 'Can we use Bunny for free?',
    a: 'Yes. Basic Feed, Play and Water actions for your shared bunny, text love letters and the mailbox are free features. Bunny Pro is an optional purchase for premium features, including the shared drawing whiteboard and its Home Screen widget.',
  },
  {
    q: 'Is Bunny Pro Lifetime a subscription?',
    a: 'Bunny Pro Lifetime is a one-time purchase. Bunny Pro Weekly is a subscription that renews automatically unless canceled. Check the price and purchase terms shown in Bunny before choosing an option.',
  },
  {
    q: 'How do I restore an existing purchase?',
    a: 'Open Settings in Bunny and tap Restore Purchases. If you still need help with access, contact us through the Get help link below.',
  },
  {
    q: 'How do I manage or cancel the weekly subscription?',
    a: 'Open Settings in Bunny and tap App Store Subscriptions to manage your subscription through Apple. Deleting Bunny or your Bunny account does not cancel an App Store subscription.',
  },
];

export default function Pricing() {
  return (
    <main className="legal-page" style={{ padding: '40px 16px' }}>
      <Seo
        title="Bunny Pricing | Free Features & Bunny Pro"
        description="Start with free shared bunny care and text love letters. Explore Bunny Pro for the shared whiteboard and drawing widget, with weekly or lifetime options."
        path={path}
        schema={[
          breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Pricing', path }]),
          faqSchema(faq),
        ]}
      />
      <div className="container" style={{ padding: 0 }}>
        <Link to="/" className="back-link"><ArrowLeft size={20} aria-hidden="true" /> Back to Bunny</Link>
        <article className="legal-content glass-panel" style={{ padding: 'clamp(24px, 5vw, 40px)' }}>
          <p className="blog-card-meta">Your little home for two</p>
          <h1>Bunny pricing</h1>
          <p className="lede">Start with a shared bunny and little love letters. Add Bunny Pro when you want more ways to create together.</p>
          <a href={appStoreLink('pricing', 'hero')} className="app-store-badge" aria-label="Download Bunny on the App Store" />

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 20, margin: '32px 0 20px' }}>
            <section className="verdict-box" aria-labelledby="free-plan" style={{ flex: '1 1 240px', margin: 0 }}>
              <h2 id="free-plan">Free</h2>
              <p>Small moments, every day.</p>
              <ul>
                <li><Link to="/shared-pet-for-couples">Shared bunny care</Link> with basic Feed, Play and Water actions</li>
                <li><Link to="/love-notes-for-couples">Text love letters</Link> for your partner</li>
                <li>A mailbox for sent and received letters</li>
              </ul>
              <p>No purchase required for these features.</p>
            </section>

            <section className="verdict-box" aria-labelledby="pro-plan" style={{ flex: '1 1 240px', margin: 0 }}>
              <h2 id="pro-plan">Bunny Pro</h2>
              <p>A little more room to create.</p>
              <ul>
                <li>Your free features, plus premium features</li>
                <li>A <Link to="/drawing-widgets-for-couples">shared drawing whiteboard</Link></li>
                <li>A Home Screen widget for your shared drawing</li>
              </ul>
              <p><strong>${SITE.pricing.proWeekly} USD / week</strong><br />Auto-renewing subscription</p>
              <p style={{ marginTop: 12 }}><strong>${SITE.pricing.lifetime} USD lifetime</strong><br />One-time purchase</p>
            </section>
          </div>

          <p style={{ fontSize: 14 }}>US App Store prices checked October 22, 2026. Prices and availability can vary by region. Confirm the amount and terms shown in Bunny before purchase. iOS controls when the drawing widget refreshes.</p>
          <p>Prefer to skip recurring bills? See <Link to="/blog/couples-apps-without-required-subscription">what you can share in Bunny without a subscription</Link>.</p>

          <h2>A few things to know</h2>
          {faq.map(({ q, a }) => <div className="faq-item" key={q}><h3>{q}</h3><p>{a}</p></div>)}
          <p><Link to="/contact">Get help with Bunny or an existing purchase</Link>.</p>

          <div className="cta-row">
            <h2>Make a little space for each other</h2>
            <p>Download Bunny, connect with your partner and start with the free features.</p>
            <a href={appStoreLink('pricing', 'footer')} className="app-store-badge" aria-label="Download Bunny on the App Store" />
          </div>
          <p className="muted-links"><Link to="/about">About Bunny</Link> · <Link to="/contact">Get help</Link> · <Link to="/terms">Terms</Link> · <Link to="/privacy">Privacy</Link></p>
        </article>
      </div>
    </main>
  );
}
