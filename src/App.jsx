import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Gamepad, Gift, Sprout } from 'lucide-react';
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
      title: "Raise Pets",
      description: "Raise a cute virtual pet and grow a personalized plant together.",
      icon: <Sprout className="feature-icon-svg" />,
      color: "#FFE0B2"
    },
    {
      title: "Love Letters",
      description: "Send heartfelt letters that arrive with a sweet delivery animation.",
      icon: <Mail className="feature-icon-svg" />,
      color: "#BBDEFB"
    },
    {
      title: "Play Together",
      description: "Mini-games designed for two. Compete or cooperate!",
      icon: <Gamepad className="feature-icon-svg" />,
      color: "#E1BEE7"
    },
    {
      title: "Send Gifts",
      description: "Surprise your partner with virtual gifts and affections.",
      icon: <Gift className="feature-icon-svg" />,
      color: "#F8BBD0"
    }
  ];

  return (
    <div className="app-container">
      <Seo
        title="Bunny — App for Couples | Shared Pet, Notes &amp; Long Distance"
        description="The all-in-one app for couples, especially long distance. Raise a shared pet, draw together, send love notes, play games &amp; check in daily. Free on iPhone."
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
            <Link to="/compare">Compare</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/contact">Contact</Link>
            <a href={appStoreLink('homepage', 'nav')} className="app-store-badge-small" title="Download Bunny on the App Store"></a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="container hero-grid">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-text"
          >
            <h1 className="hero-title">
              Stay connected,<br />
              <Link to="/avishi" style={{ display: 'inline-block' }}>
                <img src={bunnyPetImg} alt="Bunny — the virtual pet couples raise together" className="hero-pet-img" />
              </Link>
              <span className="highlight-text">miles apart.</span>
            </h1>
            <p className="hero-subtitle">
              Bunny is the all-in-one app for couples — especially long distance. Feel closer through a shared pet, a draw-together canvas, love notes, games, and daily check-ins. Your digital home for two.
            </p>
            <div className="hero-buttons">
              <a href={appStoreLink('homepage', 'hero')} className="app-store-badge" title="Download Bunny on the App Store"></a>
            </div>
          </motion.div>

          {/* ... (Visual remains same) ... */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
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
                  { img: screenshotGames, alt: 'Mini-games for couples to play together in Bunny' },
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
            <h2>Everything you need to<br />nurture your relationship</h2>
            <p>Designed with love, for love. Every feature is crafted to bring a smile to your face.</p>
          </div>

          <div className="features-grid">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="feature-card"
              >
                <div className="feature-icon-wrapper" style={{ backgroundColor: feature.color, opacity: 0.8 }}>
                  {feature.icon}
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ / SEO content */}
      <section id="faq" className="faq-section">
        <div className="container">
          <div className="section-header">
            <h2>Frequently asked questions</h2>
            <p>Everything couples ask about Bunny, long-distance connection, and how it compares.</p>
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
            <Link to="/blog">long-distance guides</Link>.
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
                Building stronger relationships, one pixel at a time. Download Bunny today and start your journey together.
              </p>
            </div>

            <div>
              <h4>Company</h4>
              <ul className="footer-links">
                <li><Link to="/about">About Us</Link></li>
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
