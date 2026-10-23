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
    a: 'Yes. Bunny’s shared whiteboard lets connected partners add drawings to the same canvas. You can leave a drawing for your partner to open and add to later. The whiteboard is a Bunny Pro feature.',
  },
  {
    q: 'Are drawings saved as separate letters?',
    a: 'No. The whiteboard is one editable shared canvas that either partner can change or clear. Bunny’s separate text letters stay in your mailbox so you can read them again.',
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
    a: 'Bunny is free to download; the shared whiteboard requires Bunny Pro. Pro offers include a weekly subscription and a one-time lifetime purchase. Review the current offer and included features in the app before purchasing.',
  },
  {
    q: 'Which devices and languages does Bunny support?',
    a: 'Bunny is available on iPhone and iPad, with an English interface. There is currently no Android version. Check the App Store listing for current device and operating-system requirements.',
  },
];

export default function DrawingWidgetsForCouples() {
  return (
    <main className="legal-page" style={{ padding: '40px 16px' }}>
      <Seo
        title="Shared Drawing App & Widgets for Couples | Bunny"
        description="Leave a drawing for your partner on Bunny’s shared canvas for iPhone and iPad. Add to each other’s doodles and use a Home Screen widget. Requires Bunny Pro."
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
              <p className="blog-card-meta">One shared canvas for the two of you</p>
              <h1>Leave a drawing for your partner to find</h1>
              <p className="lede">Draw a heart, an inside joke or a tiny hello in Bunny. Your partner can open the same whiteboard and add something of their own. You don’t have to draw at the same time.</p>
              <a href={appStoreLink('drawing-widgets', 'hero')} className="app-store-badge" aria-label="Download Bunny on the App Store" />
              <p>Requires Bunny Pro · iPhone and iPad · <Link to="/pricing">See free and Pro features</Link></p>
            </div>
            <figure style={{ flex: '0 1 220px', margin: '0 auto' }}>
              <img src={screenshotWhiteboard} alt="Bunny’s in-app shared drawing canvas with colored doodles and drawing controls" width="720" height="1564" style={{ height: 'auto', borderRadius: 24 }} />
              <figcaption style={{ marginTop: 12, fontSize: 14, color: 'var(--text-secondary)' }}>Bunny’s in-app whiteboard. Both partners contribute to this shared canvas.</figcaption>
            </figure>
          </div>

          <h2>A drawing you can both add to</h2>
          <p>Sketch tonight’s dinner, write a short hello by hand or start a doodle for your partner to finish. Choose a brush color and size, use Undo to remove the most recent stroke on the shared canvas, or clear the board when you both want to start again.</p>
          <p>This is one shared, editable whiteboard. Either of you can add to it or clear it. For a message you want to keep in your mailbox, send a separate <Link to="/love-notes-for-couples">text love letter</Link>.</p>
          <p>Start with our <Link to="/blog/shared-drawing-apps-for-couples">five drawing ideas for couples</Link>, with a guide to making your first shared doodle in Bunny.</p>

          <h2>Open your first shared whiteboard</h2>
          <ol style={{ paddingLeft: 24, color: 'var(--text-secondary)' }}>
            <li>Install Bunny on both devices and create an account each.</li>
            <li>One partner creates a Love Nest and shares the invite code. The other joins using that code.</li>
            <li>Open Doodles with Bunny Pro, choose a color and draw something for your partner. Completed strokes save automatically; if Bunny shows a save error, use Retry before closing.</li>
            <li>Your partner opens the same whiteboard with an internet connection to see it and add their own strokes.</li>
          </ol>

          <h2>Drawing is part of Bunny Pro</h2>
          <p>You can start with <Link to="/shared-pet-for-couples">free basic bunny care</Link> and text love letters before choosing Pro for the shared canvas. Pro offers include a weekly subscription and a one-time lifetime purchase. <Link to="/pricing">Compare what’s free and what’s included with Pro</Link>, then check the current offer in the app.</p>
          <p>Bunny began as an app Prafull built for his girlfriend. <Link to="/about">Read the story behind Bunny</Link>.</p>

          <h2>Keep your drawing on the Home Screen, too</h2>
          <p>The optional Whiteboard widget displays your shared drawing on your Home Screen. You draw inside Bunny; tap the widget to open the canvas when you want to add something.</p>
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

          <h2>Questions about drawing together</h2>
          {faq.map(({ q, a }) => <div className="faq-item" key={q}><h3>{q}</h3><p>{a}</p></div>)}

          <div className="cta-row">
            <h2>Make your first doodle together</h2>
            <p>Download Bunny, connect your accounts and choose Pro to open your shared canvas. Start with something only the two of you would understand.</p>
            <a href={appStoreLink('drawing-widgets', 'footer')} className="app-store-badge" aria-label="Download Bunny on the App Store" />
          </div>
          <p className="muted-links"><Link to="/blog/shared-drawing-apps-for-couples">Shared drawing guide</Link> · <Link to="/contact">Get help</Link> · <Link to="/privacy">Privacy</Link></p>
        </article>
      </div>
    </main>
  );
}
