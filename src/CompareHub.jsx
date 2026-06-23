import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Seo from './seo/Seo';
import { breadcrumbSchema, itemListSchema } from './seo/schema';
import { COMPARISONS } from './data/compare';

export default function CompareHub() {
  return (
    <div className="legal-page">
      <Seo
        title="Bunny vs Other Couples Apps: Honest Comparisons (2026)"
        description="See how Bunny compares to Paired, lovelee, Widgetable, and Locket. Honest, side-by-side comparisons of features and pricing for couples apps in 2026."
        path="/compare"
        image="/og/og-compare.jpg"
        schema={[
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Compare', path: '/compare' },
          ]),
          itemListSchema(
            COMPARISONS.map((c) => ({ name: c.title, path: `/compare/${c.slug}` }))
          ),
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
          <h1>Bunny vs other couples apps</h1>
          <p className="last-updated">Honest, side-by-side comparisons.</p>
          <p>
            There are a lot of couples apps, and most “best app” lists are paid
            placements. These comparisons are written to actually help you choose —
            with real feature tables, fair pros and cons, and pricing. Bunny is an
            all-in-one shared space (a pet, a draw-together canvas, love notes, and
            games), so here is how it stacks up against the apps you’re probably
            weighing.
          </p>

          <div className="compare-grid">
            {COMPARISONS.map((c) => (
              <Link key={c.slug} to={`/compare/${c.slug}`} className="compare-card">
                <h2>Bunny vs {c.competitor}</h2>
                <p>{c.intro}</p>
                <span className="compare-card-cta">
                  Read comparison <ArrowRight size={16} />
                </span>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
