import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Seo from '../seo/Seo';
import { appStoreLink } from '../seo/siteConfig';
import { breadcrumbSchema, faqSchema } from '../seo/schema';
import mailbox from '../assets/mailbox.png';

const path = '/love-notes-for-couples';
const faq = [
  {
    q: 'How do I send a love note to my partner?',
    a: 'Download Bunny, connect your accounts and open the letter composer. Write your message and tap Send with Love. Your partner can read it in their Bunny mailbox.',
  },
  {
    q: 'Can we read our earlier letters?',
    a: 'Yes. Bunny’s mailbox keeps your sent and received letters together so you can open them and read them again.',
  },
  {
    q: 'Will my partner receive a notification?',
    a: 'Bunny can notify your partner when you send a letter. Notifications depend on their device permissions, connection and notification settings, so delivery time can vary.',
  },
  {
    q: 'Do love letters require Bunny Pro?',
    a: 'Text love letters and the mailbox are included with Bunny’s free features. Other features, including the shared drawing whiteboard, require Bunny Pro.',
  },
  {
    q: 'Can I send a handwritten letter?',
    a: 'Bunny’s letters are text messages you write in the letter composer. You can draw or write by hand on the separate Pro whiteboard, but that canvas stays editable and is not saved as a letter in the mailbox.',
  },
  {
    q: 'Which devices and languages does Bunny support?',
    a: 'Bunny is available on iPhone and iPad, with an English interface. There is currently no Android version. Check the App Store listing for current device and operating-system requirements.',
  },
];

export default function LoveNotesForCouples() {
  return (
    <main className="legal-page" style={{ padding: '40px 16px' }}>
      <Seo
        title="Free Love Notes App for Couples | Bunny"
        description="Write text love letters to your partner and keep them in Bunny’s shared mailbox. Letters are free on iPhone and iPad, with no subscription required."
        path={path}
        schema={[
          breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Love notes for couples', path }]),
          faqSchema(faq),
        ]}
      />
      <div className="container" style={{ padding: 0 }}>
        <Link to="/" className="back-link"><ArrowLeft size={20} aria-hidden="true" /> Back to Bunny</Link>
        <article className="legal-content glass-panel" style={{ padding: 'clamp(24px, 5vw, 40px)' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 32, alignItems: 'center' }}>
            <div style={{ flex: '1 1 260px' }}>
              <p className="blog-card-meta">Free text love letters for couples</p>
              <h1>Write a letter. Leave it in their mailbox.</h1>
              <p className="lede">A thank-you, an inside joke or something you’ve been meaning to say. Write it in Bunny, send it to your partner and keep it in your mailbox to read again.</p>
              <a href={appStoreLink('love-notes', 'hero')} className="app-store-badge" aria-label="Download Bunny on the App Store" />
              <p>Text letters and mailbox included free · iPhone and iPad</p>
            </div>
            <img src={mailbox} alt="Bunny’s illustrated mailbox with a heart-sealed letter" width="220" height="220" style={{ flex: '0 1 220px', height: 'auto', margin: '0 auto' }} />
          </div>

          <h2>Send a note in your own words</h2>
          <p>Both install Bunny and connect your accounts. Open the letter composer, write your message and tap <strong>Send with Love</strong>. Your partner can find it in their mailbox, along with your earlier letters.</p>
          <p>A quick thank-you can be enough. Or take your time with a longer letter when there’s something you want to say. Bunny’s letters are text; if you feel like drawing instead, try the separate <Link to="/drawing-widgets-for-couples">shared whiteboard</Link>.</p>

          <h2>Three little notes to make your own</h2>
          <p>Start with one of these ideas and add a detail only your partner would recognize.</p>
          <ul>
            <li><strong>For an ordinary day:</strong> “I saw something that made me think of you today: …”</li>
            <li><strong>For a little appreciation:</strong> “Thank you for … I noticed, and it meant a lot.”</li>
            <li><strong>For a long-distance hello:</strong> “If we had an hour together tonight, I’d want to …”</li>
          </ul>
          <p>These are writing ideas, so change them to sound like you. For another way to start a conversation, browse our <Link to="/blog/questions-to-ask-long-distance-partner">questions for long-distance partners</Link>.</p>

          <h2>A mailbox for the moments between calls</h2>
          <p>You don’t have to be online at the same moment to write to each other. Leave a note during your day and let your partner read it when they open Bunny. Sent and received letters stay available in the mailbox.</p>
          <p>Bunny can send a notification for a new letter when your partner’s device allows it. Notification timing can vary. The letter itself is available in Bunny after it has been sent successfully.</p>

          <h2>Letters are free, from the first hello</h2>
          <p>You don’t need a subscription to send text letters or care for your <Link to="/shared-pet-for-couples">shared bunny</Link>. The editable drawing canvas is part of Bunny Pro, with weekly and one-time lifetime purchase options. <Link to="/pricing">See what’s free and what Pro includes</Link>.</p>
          <p>Bunny started as an app Prafull built for his girlfriend. <Link to="/about">Read how that became Bunny</Link>, or <Link to="/contact">send feedback to its maker</Link>.</p>

          <h2>Questions about love notes</h2>
          {faq.map(({ q, a }) => <div className="faq-item" key={q}><h3>{q}</h3><p>{a}</p></div>)}

          <div className="cta-row">
            <h2>Leave them a note to open</h2>
            <p>Download Bunny, connect with your partner and send your first text letter for free.</p>
            <a href={appStoreLink('love-notes', 'footer')} className="app-store-badge" aria-label="Download Bunny on the App Store" />
          </div>
          <p className="muted-links"><Link to="/compare/bunny-vs-lovelee">Compare Bunny and Lovelee</Link> · <Link to="/contact">Get help</Link> · <Link to="/privacy">Privacy</Link></p>
        </article>
      </div>
    </main>
  );
}
