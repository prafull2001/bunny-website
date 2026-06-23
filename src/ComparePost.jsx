import { motion } from 'framer-motion';
import { ArrowLeft, Check, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import Seo from './seo/Seo';
import { appStoreLink } from './seo/siteConfig';
import { breadcrumbSchema, faqSchema } from './seo/schema';
import { getComparison, COMPARISONS } from './data/compare';

function Cell({ value }) {
  if (value === true) return <Check size={18} className="cmp-yes" aria-label="Yes" />;
  if (value === false) return <X size={18} className="cmp-no" aria-label="No" />;
  return <span className="cmp-text">{value}</span>;
}

export default function ComparePost({ slug }) {
  const c = getComparison(slug);
  if (!c) return null;

  const related = COMPARISONS.filter((x) => x.slug !== slug).slice(0, 2);

  return (
    <div className="legal-page">
      <Seo
        title={c.title}
        description={c.metaDescription}
        path={`/compare/${c.slug}`}
        image="/og/og-compare.jpg"
        type="article"
        schema={[
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Compare', path: '/compare' },
            { name: `Bunny vs ${c.competitor}`, path: `/compare/${c.slug}` },
          ]),
          faqSchema(c.faq),
        ]}
      />
      <div className="container">
        <Link to="/compare" className="back-link">
          <ArrowLeft size={20} />
          All comparisons
        </Link>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="legal-content glass-panel"
        >
          <h1>{c.title}</h1>
          <p className="lede">{c.intro}</p>

          <div className="verdict-box">
            <h2>The verdict</h2>
            <p>{c.verdict}</p>
          </div>

          <h2>Bunny vs {c.competitor}: feature comparison</h2>
          <div className="cmp-table-wrap">
            <table className="cmp-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Bunny</th>
                  <th>{c.competitor}</th>
                </tr>
              </thead>
              <tbody>
                {c.features.map((row) => (
                  <tr key={row.feature}>
                    <td>{row.feature}</td>
                    <td><Cell value={row.bunny} /></td>
                    <td><Cell value={row.competitor} /></td>
                  </tr>
                ))}
                <tr>
                  <td>Pricing</td>
                  <td>{c.bunnyPricing}</td>
                  <td>{c.competitorPricing}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>Which should you choose?</h2>
          <p><strong>Choose Bunny if:</strong> {c.bunnyBestFor}</p>
          <p><strong>Choose {c.competitor} if:</strong> {c.competitorBestFor}</p>

          <h2>Frequently asked questions</h2>
          {c.faq.map((item) => (
            <div key={item.q} className="faq-item">
              <h3>{item.q}</h3>
              <p>{item.a}</p>
            </div>
          ))}

          <div className="cta-row">
            <p>Ready to try the all-in-one shared space for couples?</p>
            <a
              href={appStoreLink('compare', c.slug)}
              className="app-store-badge"
              title="Download Bunny on the App Store"
            ></a>
          </div>

          {related.length > 0 && (
            <p className="muted-links">
              More comparisons:{' '}
              {related.map((r, i) => (
                <span key={r.slug}>
                  <Link to={`/compare/${r.slug}`}>Bunny vs {r.competitor}</Link>
                  {i < related.length - 1 ? ' · ' : ''}
                </span>
              ))}
            </p>
          )}
        </motion.div>
      </div>
    </div>
  );
}
