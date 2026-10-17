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
];

export default function LoveNotesForCouples() {
  return (
    <main className="legal-page" style={{ padding: '40px 16px' }}>
      <Seo
        title="Love Notes App for Couples | Bunny"
        description="Send a little love with Bunny. Write text love notes to your partner, read them in your shared mailbox and find simple ideas for your next letter."
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
              <p className="blog-card-meta">Love notes for couples</p>
              <h1>A little love note can make their day</h1>
              <p className="lede">Write something sweet, silly or completely you. Bunny gives your letters a place in your shared mailbox, ready for your partner to open and read again.</p>
              <a href={appStoreLink('love-notes', 'hero')} className="app-store-badge" aria-label="Download Bunny on the App Store" />
              <p>Text letters and mailbox included free</p>
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

          <h2>Questions about love notes</h2>
          {faq.map(({ q, a }) => <div className="faq-item" key={q}><h3>{q}</h3><p>{a}</p></div>)}

          <div className="cta-row">
            <h2>Write your first little letter</h2>
            <p>Connect with your partner in Bunny, leave a note and make room for more small moments together. You can also <Link to="/shared-pet-for-couples">raise a shared pet</Link>.</p>
            <a href={appStoreLink('love-notes', 'footer')} className="app-store-badge" aria-label="Download Bunny on the App Store" />
          </div>
          <p className="muted-links"><Link to="/compare/bunny-vs-lovelee">Compare Bunny and Lovelee</Link> · <Link to="/contact">Get help</Link> · <Link to="/privacy">Privacy</Link></p>
        </article>
      </div>
    </main>
  );
}
