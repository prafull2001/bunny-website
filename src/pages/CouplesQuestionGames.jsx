import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Seo from '../seo/Seo';
import { appStoreLink } from '../seo/siteConfig';
import { breadcrumbSchema, faqSchema } from '../seo/schema';

const path = '/couples-question-games';
const faq = [
  {
    q: 'What kind of question game can we play in Bunny?',
    a: 'Bunny has Who’s More Likely To? question packs. Each partner answers the same questions by choosing Me or My Partner. When both finish the round, you can compare your answers and see where you picked the same person.',
  },
  {
    q: 'Which question packs are free?',
    a: 'Travel Adventures, Foodie Fun and Random Fun are free. Additional question packs require Bunny Pro. Open the Free collection in Questions to choose a free pack.',
  },
  {
    q: 'When can we see each other’s answers?',
    a: 'The results screen becomes available after both partners finish the round. If you finish first, Bunny shows a waiting screen. Return to the pack to check on your partner or see your answers when the round is complete.',
  },
  {
    q: 'Can we finish a round at different times?',
    a: 'Yes. Saved answers let you continue an unfinished round. Each partner opens the same pack from their connected account and answers in their own time. Use an internet connection to save answers and check the round’s progress.',
  },
  {
    q: 'Which devices and languages are supported?',
    a: 'Bunny is available on iPhone and iPad. Both partners need their own connected account and a supported Apple device. The app interface and built-in questions are in English. There is currently no Android version.',
  },
];

export default function CouplesQuestionGames() {
  return (
    <main className="legal-page" style={{ padding: '40px 16px' }}>
      <Seo
        title="Couples Question Games: Who’s More Likely To? | Bunny"
        description="Play Who’s More Likely To? with your partner in Bunny. Choose Me or My Partner, then compare answers. Start with three free question packs on iPhone and iPad."
        path={path}
        image="/og/og-question-games.jpg"
        schema={[
          breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Couples question games', path }]),
          faqSchema(faq),
        ]}
      />
      <div className="container" style={{ padding: 0 }}>
        <Link to="/" className="back-link"><ArrowLeft size={20} aria-hidden="true" /> Back to Bunny</Link>
        <article className="legal-content glass-panel" style={{ padding: 'clamp(24px, 5vw, 40px)' }}>
          <p className="blog-card-meta">A question game for the two of you</p>
          <h1>Who’s more likely to? Find out what your partner thinks.</h1>
          <p className="lede">Choose a topic, answer Me or My Partner, then compare your choices when you both finish. Bunny’s question packs give you something small to play together and plenty to talk about afterward.</p>
          <a href={appStoreLink('question-games', 'hero')} className="app-store-badge" aria-label="Download Bunny on the App Store" />
          <p>Three free packs · iPhone and iPad · English questions</p>

          <h2>Start with a free question pack</h2>
          <p>Open the Free collection in Questions and pick the topic you’re in the mood for.</p>
          <ul>
            <li><strong>Travel Adventures:</strong> take the conversation toward trips and travel.</li>
            <li><strong>Foodie Fun:</strong> compare your food habits and tastes.</li>
            <li><strong>Random Fun:</strong> choose a mixed topic round.</li>
          </ul>
          <p>These three packs are free. Additional packs, including Lovey Dovey, require Bunny Pro. The library shows each pack’s access label and question count before you start.</p>

          <h2>How to play your first round</h2>
          <ol style={{ paddingLeft: 24, color: 'var(--text-secondary)' }}>
            <li>Install Bunny and create an account each. One partner creates a Love Nest and shares its invite code; the other joins using that code.</li>
            <li>Open Games from the home screen to reach Questions. Choose a free pack and tap <strong>Let’s play</strong>.</li>
            <li>Answer each question by choosing <strong>Me</strong> or <strong>My Partner</strong>. Your partner opens the same pack on their device and chooses <strong>Continue round</strong> to answer too.</li>
            <li>Finish the round on both devices to see the results. You can also return to the pack and choose <strong>See your answers</strong> once you’re both done.</li>
          </ol>
          <p>If you pause partway through, return to the pack and choose Continue round to pick up from your saved answers. Keep an internet connection while saving answers and checking progress.</p>

          <h2>See where you picked the same person</h2>
          <p>Each of you answers from your own point of view. If you choose Me and your partner chooses My Partner, you have both picked you. That counts as a match.</p>
          <p>After both of you finish, the results show your answers side by side and how often you agreed. Pick a surprising answer and ask what made your partner choose it. The conversation can be the best part of the round.</p>

          <h2>Play together or finish in your own time</h2>
          <p>You can answer while you’re on a call, sitting together or checking in at different times. If you finish first, Bunny waits for your partner before showing the results. You can leave the waiting screen and return to the pack later.</p>
          <p>There is one active round for the couple. Finish it before starting another pack, or use End this game if you both want to move on. Ending an unfinished round ends it for both of you without a results screen.</p>

          <h2>Choose more topics with Bunny Pro</h2>
          <p>Start with the three free packs and see which conversations you enjoy. Bunny Pro adds the other question packs and the <Link to="/drawing-widgets-for-couples">shared drawing whiteboard</Link>.</p>
          <p>Pro offers a weekly subscription and a one-time lifetime purchase. <Link to="/pricing">See the free and Pro features</Link>, then check the current price and terms in Bunny before choosing.</p>
          <p>Between rounds, you can care for your <Link to="/shared-pet-for-couples">shared bunny</Link> or send a <Link to="/love-notes-for-couples">text love letter</Link>. Basic bunny care and text letters are free too.</p>

          <h2>Questions about playing together</h2>
          {faq.map(({ q, a }) => <div className="faq-item" key={q}><h3>{q}</h3><p>{a}</p></div>)}

          <div className="cta-row">
            <h2>Pick your first pack together</h2>
            <p>Connect your accounts and start with Travel Adventures, Foodie Fun or Random Fun. See which answers surprise you.</p>
            <a href={appStoreLink('question-games', 'footer')} className="app-store-badge" aria-label="Download Bunny on the App Store" />
          </div>
          <p className="muted-links"><Link to="/pricing">Free and Pro features</Link> · <Link to="/contact">Get help</Link> · <Link to="/about">About Bunny</Link></p>
        </article>
      </div>
    </main>
  );
}
