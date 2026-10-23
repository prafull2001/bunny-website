import { Link } from 'react-router-dom';
import { appStoreLink } from '../seo/siteConfig';
import screenshotWhiteboard from '../assets/screenshot-whiteboard.webp';

export const SHARED_DRAWING_GUIDE = {
  slug: 'shared-drawing-apps-for-couples',
  title: 'Shared Drawing for Couples: Five Ideas to Try in Bunny',
  metaDescription: 'Choose Bunny to leave drawings for your partner on a shared canvas. Try five small drawing ideas, learn the controls and add a Home Screen widget. Requires Pro.',
  excerpt: 'A half-finished doodle, a dinner sketch or a morning hello. Five things to try on your shared Bunny whiteboard, with practical setup tips.',
  datePublished: '2026-10-22',
  dateModified: '2026-10-22',
  author: 'Prafull Sharma',
  readingTime: '4 min read',
  tags: ['Drawing together', 'Bunny guide'],
  faq: [
    { q: 'What is a good shared drawing app for couples?', a: 'Choose Bunny if you want one editable canvas that you and your partner can both add to. The shared whiteboard requires Bunny Pro. Both partners need a supported iPhone or iPad, connected Bunny accounts and an internet connection.' },
    { q: 'Do we have to draw at the same time?', a: 'No. You can leave a drawing for your partner to open and add to later. Open the whiteboard with an internet connection to load and share updates.' },
    { q: 'Are these drawing activities built-in games?', a: 'No. They are ideas to try with Bunny’s drawing tools. You choose what to draw and how to take turns; Bunny does not run or score these activities.' },
    { q: 'Does Bunny keep an album of our drawings?', a: 'No. Bunny’s whiteboard is one editable canvas, not a drawing archive. Clearing it removes the drawing for your partner too. Text love letters are separate and remain in your mailbox.' },
  ],
  Content: () => (
    <>
      <p className="lede">Choose Bunny when you want to make a drawing with your partner or leave one for them to find. Its shared whiteboard gives you one canvas to add to together, with Bunny Pro on iPhone and iPad. Start with something small: a shape, a silly face or a handwritten hello.</p>
      <p>You don’t need matching drawing skills. Take turns adding a few lines and see what your partner makes of them. Here are five ideas to get you started.</p>
      <a href={appStoreLink('blog', 'shared-drawing-apps-for-couples')} className="app-store-badge" aria-label="Download Bunny on the App Store" />

      <h2>Set up your shared canvas</h2>
      <ol>
        <li>Install Bunny and create an account each. One partner creates a Love Nest and shares its invite code; the other joins using that code.</li>
        <li>Open <strong>Doodles</strong> from Bunny’s home or shortcuts. The shared whiteboard requires Bunny Pro and an internet connection.</li>
        <li>Tap the color dot to choose a color. Open Settings on the whiteboard to adjust the brush size.</li>
        <li>Draw a small test shape. Have your partner open Doodles, check that they can see it and add something beside it.</li>
      </ol>
      <figure style={{ maxWidth: 240, margin: '24px auto' }}>
        <img src={screenshotWhiteboard} alt="Bunny’s in-app whiteboard with colored doodles and drawing controls" width="720" height="1564" loading="lazy" style={{ borderRadius: 24, height: 'auto' }} />
        <figcaption style={{ marginTop: 12, fontSize: 14 }}>Bunny’s whiteboard inside the app.</figcaption>
      </figure>

      <h2>Five little drawing ideas to try</h2>
      <h3>1. Finish my doodle</h3>
      <p>Draw an unfinished shape: a loop, a zigzag or half a face. Leave room for your partner to turn it into something. A loop could become a planet, a cat or tonight’s bowl of noodles. Take turns starting the next one.</p>

      <h3>2. Sketch tonight’s dinner</h3>
      <p>Draw one thing you ate, keeping it to a few lines. Your partner can add their own plate beside yours or draw what they think your dish was. Label it by hand after they guess, if your spaghetti looks suspiciously like a cloud.</p>

      <h3>3. Leave a morning hello</h3>
      <p>Draw a sun, a cup or a sleepy little face, then write a short hello. Leave space for a reply underneath. Your partner can add a moon or their own expression when they next open the board.</p>

      <h3>4. Build a tiny scene</h3>
      <p>Pick a color each. One of you draws a little house; the other adds a tree, a pet or something strange outside the window. Add one small detail per turn until you both think the scene is finished.</p>

      <h3>5. Make a two-box comic</h3>
      <p>Draw two small boxes in an area you can both see. Add a stick figure in the first; let your partner draw what happens next in the second. Try recreating a cooking mishap.</p>

      <h2>A few habits that make sharing easier</h2>
      <p>Before a detailed drawing, test a small sketch on both devices and use the area you can both see. Different screen sizes can cut off the edges. If something is cut off, redraw that detail inside your checked area. <Link to="/contact">Get help</Link> if it keeps happening.</p>
      <p>Undo removes the most recent stroke on the shared canvas. Clear removes the drawing for both of you, so agree before starting over. Take a device screenshot first if you want a copy. The board stays editable; it does not save drawings as separate letters or album entries.</p>
      <p>Completed strokes save automatically while you’re connected. If a sync alert appears, reconnect and tap <strong>Retry</strong> before closing. Use <strong>Notify Partner</strong> to request a notification after drawing; delivery depends on their device permissions and settings.</p>

      <h2>Put the drawing on your Home Screen</h2>
      <p>Add Bunny’s Whiteboard widget to display the canvas outside the app. Each partner adds it on their own device. You draw in Bunny and tap the widget to reopen the whiteboard.</p>
      <p>iOS controls refresh timing, so the widget may not change immediately. Open Bunny and the whiteboard online to load the latest drawing. Our <Link to="/drawing-widgets-for-couples">drawing and widget setup page</Link> has the steps and supported sizes.</p>

      <h2>Choose Pro when you’re ready to draw</h2>
      <p>The shared whiteboard and drawing widget require Bunny Pro. Choose a one-time lifetime purchase or a weekly subscription, and check the current terms in the app. <Link to="/pricing">See Bunny’s free and Pro features</Link>.</p>
      <p>You can start with <Link to="/shared-pet-for-couples">basic bunny care</Link> and <Link to="/love-notes-for-couples">text love letters</Link> for free. Bunny’s interface is English, and both partners need a supported iPhone or iPad. There is currently no Android version.</p>

      <div className="cta-row">
        <h2>Leave the first few lines</h2>
        <p>Connect with your partner, open the whiteboard with Pro and start a doodle for them to finish.</p>
        <a href={appStoreLink('blog', 'shared-drawing-apps-for-couples')} className="app-store-badge" aria-label="Download Bunny on the App Store" />
      </div>
    </>
  ),
};
