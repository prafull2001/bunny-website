import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Pencil, Sprout } from 'lucide-react';
import { Link } from 'react-router-dom';
import Seo from './seo/Seo';
import { appStoreLink } from './seo/siteConfig';
import {
  organizationSchema,
  websiteSchema,
  softwareApplicationSchema,
  faqSchema,
} from './seo/schema';
import { HOME_FAQ } from './data/faq';
import './index.css';

// Assets (WebP — see scripts/optimize-images.mjs)
import logoImg from './assets/bunny-logo.webp';
import bunnyPetImg from './assets/bunny-pet.webp';
import screenshotHome from './assets/screenshot-home.webp';
import screenshotWhiteboard from './assets/screenshot-whiteboard.webp';
import screenshotPet from './assets/screenshot-pet.webp';
import screenshotGames from './assets/screenshot-games.webp';

export function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Simple auto-rotate for carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 4);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const features = [
    {
      title: "Care for one shared pet",
      description: "Give your bunny a name, feed it, play with it and check on its mood. Both of you care for the same pet from your own phones.",
      access: "Basic bunny care is free",
      path: "/shared-pet-for-couples",
      icon: <Sprout className="feature-icon-svg" />,
      color: "#FFE0B2"
    },
    {
      title: "Draw something together",
      description: "Share a whiteboard for doodles and little messages. Draw together or leave something for your partner to find later.",
      access: "Included with Bunny Pro",
      path: "/drawing-widgets-for-couples",
      icon: <Pencil className="feature-icon-svg" />,
      color: "#E1BEE7"
    },
    {
      title: "Leave a love note",
      description: "Write a text letter just for your partner. Keep your messages in one shared place, ready to read again.",
      access: "Text letters are free",
      path: "/love-notes-for-couples",
      icon: <Mail className="feature-icon-svg" />,
      color: "#BBDEFB"
    }
  ];

  return (
    <div className="app-container">
      <Seo
        title="Bunny — Shared Virtual Pet & Love Notes for Couples"
        description="Raise one virtual pet together and leave love notes. Start with free bunny care and text letters on iPhone and iPad. Shared drawing is included with Bunny Pro."
        path="/"
        image="/og/og-home.jpg"
        schema={[
          organizationSchema(),
          websiteSchema(),
          softwareApplicationSchema(),
          faqSchema(HOME_FAQ),
        ]}
      />
      {/* Navigation */}
      <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
        <div className="container nav-content">
          <div className="brand">
            <img src={logoImg} alt="Bunny app logo" className="brand-logo-img" />
            <span className="brand-name">Bunny</span>
          </div>
          <div className="nav-links">
            <a href="#features">Features</a>
            <Link to="/pricing">Pricing</Link>
            <Link to="/about">Our story</Link>
            <Link to="/compare">Compare</Link>
            <Link to="/contact">Contact</Link>
            <a href={appStoreLink('homepage', 'nav')} className="app-store-badge-small" aria-label="Download Bunny on the App Store"></a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="container hero-grid">
          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-text"
          >
            <h1 className="hero-title">
              Raise a pet,<br />
              <Link to="/avishi" style={{ display: 'inline-block' }}>
                <img src={bunnyPetImg} alt="Bunny — the virtual pet couples raise together" className="hero-pet-img" />
              </Link>
              <span className="highlight-text">together.</span>
            </h1>
            <p className="hero-subtitle">
              One little bunny, cared for by both of you. Feed and play with your shared pet, leave a love note, or draw something for your partner to find—even when you’re miles apart.
            </p>
            <div className="hero-buttons">
              <a href={appStoreLink('homepage', 'hero')} className="app-store-badge" aria-label="Download Bunny on the App Store"></a>
            </div>
            <p className="hero-access-note">
              Free basic pet care and text letters · iPhone and iPad<br />
              <Link to="/pricing">Optional Bunny Pro, including a one-time lifetime upgrade</Link>
            </p>
          </motion.div>

          {/* ... (Visual remains same) ... */}
          <motion.div
            initial={false}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hero-visual"
          >
            {/* Carousel Phone Frame */}
            <div className="phone-frame animate-float">
              <div className="notch"></div>
              <div className="screen-content">
                {[
                  { img: screenshotHome, alt: 'Bunny app home screen showing a couple’s shared space' },
                  { img: screenshotWhiteboard, alt: 'Shared draw-together whiteboard in the Bunny couples app' },
                  { img: screenshotPet, alt: 'Raising a shared virtual pet together in Bunny' },
                  { img: screenshotGames, alt: 'Question packs for couples in Bunny' },
                ].map((slide, idx) => (
                  <div
                    key={idx}
                    className="carousel-slide"
                    style={{
                      display: currentSlide === idx ? 'flex' : 'none',
                      backgroundColor: '#fff',
                      padding: 0,
                    }}
                  >
                    <img
                      src={slide.img}
                      alt={slide.alt}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                    />
                  </div>
                ))}
              </div>
              <div style={{
                position: 'absolute',
                bottom: '20px',
                left: '50%',
                transform: 'translateX(-50%)',
                display: 'flex',
                gap: '6px',
                zIndex: 15,
              }}>
                {[0, 1, 2, 3].map(i => (
                  <div key={i} style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    background: currentSlide === i ? '#fff' : 'rgba(255,255,255,0.4)',
                    transition: 'background 0.3s',
                  }} />
                ))}
              </div>

              {/* Background Blobs */}
              <div className="blob blob-pink"></div>
              <div className="blob blob-blue"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features-section">
        <div className="container">
          <div className="section-header">
            <h2>Little things to share,<br />from your own phones</h2>
            <p>A pet to look after. A drawing to come back to. A note that’s just for them.</p>
          </div>

          <div className="features-grid home-features-grid">
            {features.map((feature) => (
              <Link
                key={feature.path}
                to={feature.path}
                className="feature-card"
              >
                <div className="feature-icon-wrapper" aria-hidden="true" style={{ backgroundColor: feature.color, opacity: 0.8 }}>
                  {feature.icon}
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
                <p className="feature-access">{feature.access} <span aria-hidden="true">→</span></p>
              </Link>
            ))}
          </div>
          <p className="muted-links" style={{ textAlign: 'center', marginTop: 32 }}>
            Looking for a pet you can raise as a pair? Read about a{' '}
            <Link to="/blog/tamagotchi-for-couples">Tamagotchi-style experience for couples</Link>.
          </p>
          <div className="section-header" style={{ marginTop: 64, marginBottom: 0 }}>
            <h2>Start with free bunny care</h2>
            <p>Basic pet care and text letters are free. Shared drawing is part of Bunny Pro, available through an optional weekly subscription or a one-time lifetime purchase.</p>
            <p style={{ marginTop: 16 }}><Link to="/pricing">See free features and Pro pricing →</Link></p>
          </div>
          <p className="muted-links" style={{ textAlign: 'center' }}>
            Bunny began as a present Prafull made for his girlfriend.{' '}
            <Link to="/about">Meet the maker and read the story</Link>.
          </p>
        </div>
      </section>

      {/* FAQ / SEO content */}
      <section id="faq" className="faq-section">
        <div className="container">
          <div className="section-header">
            <h2>Frequently asked questions</h2>
            <p>What to know before you make a little home together.</p>
          </div>
          <div className="home-faq">
            {HOME_FAQ.map((item) => (
              <div key={item.q} className="faq-item">
                <h3>{item.q}</h3>
                <p>{item.a}</p>
              </div>
            ))}
          </div>
          <p className="faq-more-links">
            Compare Bunny with other apps: <Link to="/compare/bunny-vs-paired">vs Paired</Link>,{' '}
            <Link to="/compare/bunny-vs-lovelee">vs lovelee</Link>,{' '}
            <Link to="/compare/apps-like-locket-for-couples">apps like Locket</Link>. Or read our{' '}
            <Link to="/blog">articles about couples apps and activities</Link>.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand-col">
              <div className="brand">
                <img src={logoImg} alt="Bunny app logo" className="brand-logo-img" />
                <span className="brand-name">Bunny</span>
              </div>
              <p>
                A shared pet, little notes and a place to draw together. Made by Prafull, originally as a present for his girlfriend.
              </p>
            </div>

            <div>
              <h4>Company</h4>
              <ul className="footer-links">
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/pricing">Free &amp; Pro</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/compare">Compare</Link></li>
              </ul>
            </div>

            <div>
              <h4>Legal</h4>
              <ul className="footer-links">
                <li><Link to="/privacy">Privacy Policy</Link></li>
                <li><Link to="/terms">Terms of Service</Link></li>
                <li>
                  <Link to="/contact" className="contact-link">
                    <Mail size={16} />
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p>© 2026 Bunny App. All rights reserved.</p>
            <div className="made-with">
              <span>Made with ❤️ for couples everywhere</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
