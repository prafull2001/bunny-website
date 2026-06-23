import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Seo from './seo/Seo';
import { SITE, appStoreLink } from './seo/siteConfig';
import { organizationSchema, breadcrumbSchema } from './seo/schema';

export default function About() {
  return (
    <div className="legal-page">
      <Seo
        title="About Bunny — The All-in-One App for Couples"
        description="Bunny is the app for couples who want one shared home instead of five. Learn why we built a single app for shared pets, doodles, love notes, and games."
        path="/about"
        image="/og/og-about.jpg"
        schema={[
          organizationSchema(),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'About', path: '/about' },
          ]),
        ]}
      />
      <div className="container">
        <Link to="/" className="back-link">
          <ArrowLeft size={20} />
          Back to Home
        </Link>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="legal-content glass-panel"
        >
          <h1>About Bunny</h1>
          <p className="last-updated">Building a digital home for two.</p>

          <h2>Our mission</h2>
          <p>
            Bunny exists to help couples feel close every day — especially the
            ones doing the hard, beautiful work of loving someone from a distance.
            We think staying connected shouldn’t require a five-app stack and a
            shared calendar full of reminders. It should be small, playful, and
            effortless.
          </p>

          <h2>Why we built Bunny</h2>
          <p>
            Look at the couples-app space and you’ll notice something: every app
            does one thing. One app for daily questions. Another for a shared pet.
            Another for a photo widget. Another for doodles. Couples end up
            stitching together half a dozen apps just to feel present with each
            other.
          </p>
          <p>
            Bunny collapses that stack into a single shared space. You raise a{' '}
            <strong>virtual pet</strong> and grow a plant together, doodle on a{' '}
            <strong>shared canvas</strong>, send <strong>love letters</strong> that
            arrive with a little ceremony, play <strong>mini-games</strong> made for
            two, and <strong>check in</strong> each day. It’s one home, for two
            people, wherever they are.
          </p>

          <h2>How Bunny is different</h2>
          <p>
            Most relationship apps focus on conversation. That’s valuable — but
            connection isn’t only talking. It’s shared <em>doing</em>: caring for
            something together, leaving each other something to find, being playful.
            Bunny is built around shared activity, not just shared chat. As far as
            we know, no other mainstream app combines a shared pet, a draw-together
            canvas, love notes, and games in one place.
          </p>

          <h2>The facts</h2>
          <ul>
            <li><strong>Platform:</strong> iPhone (iOS), via the App Store</li>
            <li><strong>Category:</strong> Lifestyle — relationships &amp; couples</li>
            <li>
              <strong>Price:</strong> Free to download; Bunny Pro from $
              {SITE.pricing.proWeekly}/week or ${SITE.pricing.lifetime} lifetime
            </li>
            <li><strong>Built for:</strong> couples, especially long distance</li>
            <li><strong>Maker:</strong> {SITE.founder.name}</li>
            <li><strong>Contact:</strong> {SITE.contactEmail}</li>
          </ul>

          <h2>Who makes Bunny</h2>
          <p>
            Bunny is made by <a href={SITE.founder.url} target="_blank" rel="noopener noreferrer">{SITE.founder.name}</a>,
            an indie developer who wanted a kinder, more playful way to stay close
            to the people who matter. Have feedback or a feature request? Email{' '}
            <a href={`mailto:${SITE.contactEmail}`}>{SITE.contactEmail}</a> — a real
            person reads every message.
          </p>

          <div className="cta-row">
            <a href={appStoreLink('about', 'about-page')} className="app-store-badge" title="Download Bunny on the App Store"></a>
          </div>

          <p className="muted-links">
            Explore: <Link to="/compare">app comparisons</Link> ·{' '}
            <Link to="/blog">long-distance guides</Link> ·{' '}
            <Link to="/contact">contact</Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
