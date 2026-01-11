import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Gamepad, Gift, Sprout } from 'lucide-react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Contact from './Contact';
import PrivacyPolicy from './PrivacyPolicy';
import TermsOfService from './TermsOfService';
import Confirm from './Confirm';
import AvishiSurprise from './AvishiSurprise';
import './index.css';

// Assets
import logoImg from './assets/bunny-logo.png';
import bunnyPetImg from './assets/bunny-pet.png';
import homescreenImg from './assets/homescreen.jpg';

function Home() {
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
      setCurrentSlide((prev) => (prev + 1) % 3);
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
      {/* Navigation */}
      <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
        <div className="container nav-content">
          <div className="brand">
            <img src={logoImg} alt="Bunny Logo" className="brand-logo-img" />
            <span className="brand-name">Bunny</span>
          </div>
          <div className="nav-links">
            <a href="#features">Features</a>
            <a href="#about">About</a>
            <Link to="/contact">Contact</Link>
            <button className="btn-primary small">Download App</button>
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
            <div className="pill-badge">
              <span className="gradient-text-small">
                ✨ The cutest app for couples
              </span>
            </div>
            <h1 className="hero-title">
              Stay connected,<br />
              <img src={bunnyPetImg} alt="Bunny Pet" className="hero-pet-img" />
              <span className="highlight-text">miles apart.</span>
            </h1>
            <p className="hero-subtitle">
              Bunny helps you feel closer to your partner through shared pets, doodles, games, and daily check-ins. Your digital home for two.
            </p>
            <div className="hero-buttons">
              <a href="#" className="app-store-badge" title="Download on the App Store"></a>
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
                <div className="carousel-slide" style={{ backgroundColor: '#E0F2F1', display: currentSlide === 0 ? 'flex' : 'none' }}>
                  <div className="placeholder-content">
                    <span className="emoji">📅</span>
                    <span>Check-in Daily</span>
                  </div>
                </div>
                <div className="carousel-slide" style={{ backgroundColor: '#F3E5F5', display: currentSlide === 1 ? 'flex' : 'none' }}>
                  <div className="placeholder-content">
                    <span className="emoji">🎮</span>
                    <span>Play Games</span>
                  </div>
                </div>
                <div className="carousel-slide" style={{ backgroundColor: '#FFEBEE', display: currentSlide === 2 ? 'flex' : 'none' }}>
                  <div className="placeholder-content">
                    <span className="emoji">💌</span>
                    <span>Send Love</span>
                  </div>
                </div>
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

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand-col">
              <div className="brand">
                <img src={logoImg} alt="Bunny Logo" className="brand-logo-img" />
                <span className="brand-name">Bunny</span>
              </div>
              <p>
                Building stronger relationships, one pixel at a time. Download Bunny today and start your journey together.
              </p>
            </div>

            <div>
              <h4>Company</h4>
              <ul className="footer-links">
                <li><a href="#">About Us</a></li>
                <li><a href="#">Blog</a></li>
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

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/confirm" element={<Confirm />} />
        <Route path="/avishi" element={<AvishiSurprise />} />
      </Routes>
    </Router>
  );
}

export default App;
