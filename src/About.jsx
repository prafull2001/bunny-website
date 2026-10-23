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
        title="About Bunny: A Present That Became a Couples App"
        description="Bunny began as a present Prafull Sharma made for his girlfriend. Meet the maker behind the shared pet, drawing and love-note app for iPhone and iPad."
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
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          className="legal-content glass-panel"
        >
          <h1>About Bunny</h1>
          <p className="last-updated">A present for my girlfriend became a little home for other couples, too.</p>

          <h2>Hi, I’m Prafull</h2>
          <p>
            I’m <a href={SITE.founder.url} target="_blank" rel="noopener noreferrer">{SITE.founder.name}</a>,
            a software engineer and the maker of Bunny. I originally made the app
            as a present for my girlfriend: a small, playful place for the two of us.
            My sister drew the original bunny artwork that gave it its character.
          </p>

          <h2>Something to care for together</h2>
          <p>
            Bunny gives you and your partner one shared pet to look after from
            your own phones. You can also grow a plant, leave a text letter,
            answer couple questions or draw on a shared whiteboard. It’s a place
            for small things you do for each other, whether you’re nearby or miles apart.
          </p>
          <p>
            Start with <Link to="/shared-pet-for-couples">free basic bunny care</Link>{' '}
            and <Link to="/love-notes-for-couples">text love letters</Link>. The{' '}
            <Link to="/drawing-widgets-for-couples">shared drawing whiteboard</Link>{' '}
            is included with Bunny Pro. Pro is optional, with weekly and one-time
            lifetime options; <Link to="/pricing">see what’s included and current pricing</Link>.
          </p>

          <h2>You can talk to the person making it</h2>
          <p>
            Hearing how other couples use Bunny helps me decide what to improve
            next. If something doesn’t work or you have an idea, email me directly
            at <a href={`mailto:${SITE.contactEmail}`}>{SITE.contactEmail}</a>.
            I’d like to know what you and your partner enjoy and what gets in the way.
          </p>

          <h2>Bunny today</h2>
          <ul>
            <li><strong>Devices:</strong> iPhone and iPad. There is currently no Android app.</li>
            <li><strong>Language:</strong> English interface and built-in questions.</li>
            <li>
              <strong>Price:</strong> Free basic bunny care and text letters, with optional Bunny Pro.
            </li>
            <li><strong>Built for:</strong> two partners sharing a little space, including long-distance couples.</li>
            <li><strong>Maker:</strong> {SITE.founder.name}</li>
          </ul>

          <div className="cta-row">
            <a href={appStoreLink('about', 'about-page')} className="app-store-badge" aria-label="Download Bunny on the App Store"></a>
          </div>

          <p className="muted-links">
            Explore: <Link to="/pricing">free features and Pro</Link> ·{' '}
            <Link to="/blog/tamagotchi-for-couples">a virtual pet for two</Link> ·{' '}
            <Link to="/contact">contact</Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
