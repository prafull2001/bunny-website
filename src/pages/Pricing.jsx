import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Seo from '../seo/Seo';
import { appStoreLink, SITE } from '../seo/siteConfig';
import { breadcrumbSchema, faqSchema } from '../seo/schema';
import screenshotWhiteboard from '../assets/screenshot-whiteboard.webp';

const path = '/pricing';
const faq = [
  {
    q: 'Can we use Bunny for free?',
    a: 'Yes. Basic Feed, Play and Water actions for your shared bunny, the shared plant, text love letters and the mailbox are free. Travel Adventures, Foodie Fun and Random Fun are free question packs. Bunny Pro adds premium features, including the shared whiteboard, its Home Screen widget and more question packs.',
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
                <li>A <Link to="/shared-plant-for-couples">shared plant</Link> to name and water</li>
                <li>Three free <Link to="/couples-question-games">question packs</Link>: Travel Adventures, Foodie Fun and Random Fun</li>
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
                <li>Additional couple question packs</li>
              </ul>
              <p><strong>${SITE.pricing.proWeekly} USD / week</strong><br />Auto-renewing subscription</p>
              <p style={{ marginTop: 12 }}><strong>${SITE.pricing.lifetime} USD lifetime</strong><br />One-time purchase</p>
            </section>
          </div>

          <p style={{ fontSize: 14 }}>US App Store prices checked October 22, 2026. Prices and availability can vary by region. Confirm the amount and terms shown in Bunny before purchase. iOS controls when the drawing widget refreshes.</p>
          <p>Prefer to skip recurring bills? See <Link to="/blog/couples-apps-without-required-subscription">what you can share in Bunny without a subscription</Link>.</p>

          <section aria-labelledby="draw-with-pro" style={{ display: 'flex', flexWrap: 'wrap', gap: 28, alignItems: 'center', margin: '32px 0' }}>
            <div style={{ flex: '1 1 260px' }}>
              <h2 id="draw-with-pro">A little drawing for them to find</h2>
              <p>Draw half a face and let your partner finish it. Leave a handwritten hello or add something to their picture. Pro gives you one shared whiteboard you can both change.</p>
              <p>Open Doodles in Bunny to draw. The canvas stays editable, and Clear removes it for both partners. Your saved text letters stay separate in the mailbox.</p>
              <p>Try <Link to="/blog/shared-drawing-apps-for-couples">five drawing ideas</Link>, or follow the <Link to="/drawing-widgets-for-couples">whiteboard and widget setup steps</Link>. If you want drawing without a recurring payment, choose the lifetime Pro option.</p>
            </div>
            <figure style={{ flex: '0 1 200px', margin: '0 auto' }}>
              <img src={screenshotWhiteboard} alt="Bunny’s whiteboard with colored doodles and drawing controls" width="720" height="1564" loading="lazy" style={{ borderRadius: 24, height: 'auto' }} />
              <figcaption style={{ marginTop: 12, fontSize: 14 }}>The shared whiteboard, included with Pro.</figcaption>
            </figure>
          </section>

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
