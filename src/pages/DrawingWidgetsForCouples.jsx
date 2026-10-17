import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Seo from '../seo/Seo';
import { appStoreLink } from '../seo/siteConfig';
import { breadcrumbSchema, faqSchema } from '../seo/schema';
import screenshotWhiteboard from '../assets/screenshot-whiteboard.webp';

const path = '/drawing-widgets-for-couples';
const faq = [
  {
    q: 'Can my partner and I draw on the same canvas?',
    a: 'Yes. Bunny’s shared whiteboard lets connected partners add drawings to the same canvas. The whiteboard is a Bunny Pro feature.',
  },
  {
    q: 'Is this a Home Screen or Lock Screen widget?',
    a: 'Bunny’s Whiteboard widget is for the Home Screen. It displays your shared drawing in small, medium or large sizes. Tap it to open the whiteboard in Bunny.',
  },
  {
    q: 'Will the widget change instantly?',
    a: 'Widget refresh timing is controlled by iOS. If a drawing looks out of date, open Bunny and the shared whiteboard with an internet connection, then return to your Home Screen.',
  },
  {
    q: 'Is the shared whiteboard free?',
    a: 'Bunny is free to download; the shared whiteboard requires Bunny Pro. Review the current offer and included features in the app before purchasing.',
  },
];

export default function DrawingWidgetsForCouples() {
  return (
    <main className="legal-page" style={{ padding: '40px 16px' }}>
      <Seo
        title="Drawing Widgets for Couples | Bunny"
        description="Draw together on Bunny’s shared whiteboard and add your doodles to a Home Screen widget. See setup steps, supported widget sizes and Bunny Pro details."
        path={path}
        schema={[
          breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Drawing widgets for couples', path }]),
          faqSchema(faq),
        ]}
      />
      <div className="container" style={{ padding: 0 }}>
        <Link to="/" className="back-link"><ArrowLeft size={20} aria-hidden="true" /> Back to Bunny</Link>
        <article className="legal-content glass-panel" style={{ padding: 'clamp(24px, 5vw, 40px)' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 32, alignItems: 'center' }}>
            <div style={{ flex: '1 1 260px' }}>
              <p className="blog-card-meta">A drawing widget for couples</p>
              <h1>Your little doodles, on your Home Screen</h1>
              <p className="lede">Draw a heart, an inside joke or a tiny hello on your shared whiteboard. Add Bunny’s Whiteboard widget to keep your drawings close throughout the day.</p>
              <a href={appStoreLink('drawing-widgets', 'hero')} className="app-store-badge" aria-label="Download Bunny on the App Store" />
              <p>Shared whiteboard included with Bunny Pro</p>
            </div>
            <figure style={{ flex: '0 1 220px', margin: '0 auto' }}>
              <img src={screenshotWhiteboard} alt="Bunny’s in-app shared drawing canvas with colored doodles and drawing controls" width="720" height="1564" style={{ height: 'auto', borderRadius: 24 }} />
              <figcaption style={{ marginTop: 12, fontSize: 14, color: 'var(--text-secondary)' }}>Draw inside Bunny. Add the Home Screen widget separately.</figcaption>
            </figure>
          </div>

          <h2>A shared canvas for the two of you</h2>
          <p>Connect with your partner, open the whiteboard and choose a brush color and size. Both of you can contribute to the drawing. Use undo for your last stroke, or clear the canvas when you’re ready to start again.</p>
          <p>Try finishing each other’s drawing, sketching tonight’s dinner or leaving a good-morning heart. You don’t need to be good at drawing to make something that feels like you.</p>

          <h2>How to add Bunny’s drawing widget</h2>
          <ol style={{ paddingLeft: 24, color: 'var(--text-secondary)' }}>
            <li>Install Bunny, connect with your partner and open your shared whiteboard.</li>
            <li>Make a drawing in Bunny, then return to your iPhone Home Screen.</li>
            <li>Touch and hold an empty area. Tap Edit, then Add Widget.</li>
            <li>Search for Bunny and select the Whiteboard widget.</li>
            <li>Choose a small, medium or large widget, tap Add Widget, position it and tap Done.</li>
          </ol>
          <p>Each partner adds the widget on their own device. You can also follow <a href="https://support.apple.com/en-us/118610">Apple’s Home Screen widget instructions</a>.</p>

          <h2>Keep your shared drawing up to date</h2>
          <p>The widget displays a saved view of your whiteboard. Open Bunny and the shared canvas to load the latest drawing; iOS decides when the Home Screen widget refreshes. Tap the widget whenever you want to open the board and add something.</p>
          <p>Bunny is available on iPhone and iPad. Check the App Store listing for the current device requirements. The shared whiteboard requires Bunny Pro; current purchase options are shown in the app.</p>

          <h2>Questions about drawing together</h2>
          {faq.map(({ q, a }) => <div className="faq-item" key={q}><h3>{q}</h3><p>{a}</p></div>)}

          <div className="cta-row">
            <h2>Leave a little drawing for your partner</h2>
            <p>Explore Bunny’s shared whiteboard alongside <Link to="/love-notes-for-couples">love notes</Link> and a <Link to="/shared-pet-for-couples">pet you care for together</Link>.</p>
            <a href={appStoreLink('drawing-widgets', 'footer')} className="app-store-badge" aria-label="Download Bunny on the App Store" />
          </div>
          <p className="muted-links"><Link to="/compare/apps-like-locket-for-couples">Drawing and photo widgets compared</Link> · <Link to="/contact">Get help</Link> · <Link to="/privacy">Privacy</Link></p>
        </article>
      </div>
    </main>
  );
}
