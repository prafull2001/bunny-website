import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Seo from '../seo/Seo';
import { appStoreLink } from '../seo/siteConfig';
import { breadcrumbSchema, faqSchema } from '../seo/schema';
import plantIllustration from '../assets/shared-plant-tree.webp';

const path = '/shared-plant-for-couples';
const faq = [
  {
    q: 'Can we grow one virtual plant together?',
    a: 'Yes. Connect your accounts with a Love Nest invite code and Bunny gives your pair one shared plant. You can name it, check its health and growth stage, and water it when the control is available.',
  },
  {
    q: 'Is the shared plant free?',
    a: 'Yes. Plant care is included with Bunny’s free features, along with basic bunny care and text love letters. The shared drawing whiteboard requires Bunny Pro.',
  },
  {
    q: 'Do we have to open Bunny at the same time?',
    a: 'No. You can visit your plant at different times. Open the plant screen with an internet connection to load its current state and check whether watering is available.',
  },
  {
    q: 'What are the plant’s growth stages?',
    a: 'Bunny’s plant grows through Seed, Sprout, Sapling and Tree stages. The plant screen shows its current stage, health and growth progress as you care for it.',
  },
  {
    q: 'Can we change our plant’s name?',
    a: 'Yes. Open Plant from your shared home, tap the pencil in Our Garden, enter a name and tap Save. The name belongs to your shared plant.',
  },
  {
    q: 'Which devices and languages does Bunny support?',
    a: 'Both partners need an iPhone or iPad and their own connected Bunny accounts. The interface is in English. There is currently no Android version; check the App Store for current device requirements.',
  },
];

export default function SharedPlantForCouples() {
  return (
    <main className="legal-page" style={{ padding: '40px 16px' }}>
      <Seo
        title="Shared Virtual Plant for Couples | Bunny"
        description="Grow a virtual plant together in Bunny. Name your shared plant, water it and follow its growth from seed to tree. Free plant care on iPhone and iPad."
        path={path}
        image="/og/og-shared-plant.jpg"
        schema={[
          breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Shared plant for couples', path }]),
          faqSchema(faq),
        ]}
      />
      <div className="container" style={{ padding: 0 }}>
        <Link to="/" className="back-link"><ArrowLeft size={20} aria-hidden="true" /> Back to Bunny</Link>
        <article className="legal-content glass-panel" style={{ padding: 'clamp(24px, 5vw, 40px)' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 32, alignItems: 'center' }}>
            <div style={{ flex: '1 1 260px' }}>
              <p className="blog-card-meta">One plant to grow together</p>
              <h1>A shared virtual plant for the two of you</h1>
              <p className="lede">Give it a name, stop by with a little water and watch it grow. Bunny gives you and your partner one plant to care for from your own phones, even when you’re apart.</p>
              <a href={appStoreLink('shared-plant', 'hero')} className="app-store-badge" aria-label="Download Bunny on the App Store" />
              <p>Plant care is free · iPhone and iPad</p>
            </div>
            <figure style={{ flex: '0 1 240px', margin: '0 auto' }}>
              <img src={plantIllustration} alt="Bunny’s Tree-stage plant illustration, with green leaves in a peach-colored pot" width="512" height="512" style={{ height: 'auto' }} />
              <figcaption style={{ marginTop: 12, fontSize: 14, color: 'var(--text-secondary)', textAlign: 'center' }}>The Tree-stage illustration from Bunny’s plant screen.</figcaption>
            </figure>
          </div>

          <h2>A little garden that belongs to both of you</h2>
          <p>Once you connect your accounts, you share the same named plant. Its health and growth progress belong to your pair, so you can both return to something you’re looking after together.</p>
          <p>You don’t need to arrange a call to check on it. Open your plant with an internet connection, see how it’s doing and water it when the control is available. Your partner can visit later and load the updated plant.</p>

          <h2>From a seed to a tree</h2>
          <p>Your plant has four stages: <strong>Seed, Sprout, Sapling and Tree</strong>. The artwork changes as it grows, and the plant screen shows its current stage, health and progress. It gives you a small shared project to come back to.</p>

          <h2>Start your shared plant</h2>
          <ol style={{ paddingLeft: 24, color: 'var(--text-secondary)' }}>
            <li>Install Bunny on both devices and create an account each.</li>
            <li>One partner creates a Love Nest and shares the invite code. The other joins using that code.</li>
            <li>Tap <strong>Plant</strong> in your shared home, or <strong>Our plant</strong> in the shortcuts menu, to open <strong>Our Garden</strong>.</li>
            <li>Tap the pencil to choose a name, then tap <strong>Save</strong>.</li>
            <li>Use <strong>A little water</strong> when it is available. Check the plant screen when you return to see its current state.</li>
          </ol>

          <h2>Free care, with more to share nearby</h2>
          <p>You don’t need a subscription to grow your plant. You can also care for your <Link to="/shared-pet-for-couples">shared bunny</Link> and send <Link to="/love-notes-for-couples">text love letters</Link> for free.</p>
          <p>When you feel like making something together, Bunny Pro adds a <Link to="/drawing-widgets-for-couples">shared drawing canvas</Link> and its Home Screen widget. Pro has weekly and one-time lifetime options. <Link to="/pricing">See the free features and Pro pricing</Link> before choosing an upgrade.</p>

          <h2>Questions about your shared plant</h2>
          {faq.map(({ q, a }) => <div className="faq-item" key={q}><h3>{q}</h3><p>{a}</p></div>)}

          <div className="cta-row">
            <h2>Choose a name. Grow something together.</h2>
            <p>Download Bunny, connect with your partner and visit your free shared plant.</p>
            <a href={appStoreLink('shared-plant', 'footer')} className="app-store-badge" aria-label="Download Bunny on the App Store" />
          </div>
          <p className="muted-links"><Link to="/shared-pet-for-couples">Meet your shared bunny</Link> · <Link to="/contact">Get help</Link> · <Link to="/privacy">Privacy</Link></p>
        </article>
      </div>
    </main>
  );
}
