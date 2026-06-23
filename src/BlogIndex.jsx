import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Seo from './seo/Seo';
import { breadcrumbSchema, itemListSchema } from './seo/schema';
import { POSTS } from './data/blog';

export default function BlogIndex() {
  return (
    <div className="legal-page">
      <Seo
        title="Bunny Blog — Long-Distance &amp; Couples Guides"
        description="Guides for couples and long-distance relationships: the best couples apps, games to play together, questions to ask, and ways to feel close from afar."
        path="/blog"
        image="/og/og-blog.jpg"
        schema={[
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Blog', path: '/blog' },
          ]),
          itemListSchema(POSTS.map((p) => ({ name: p.title, path: `/blog/${p.slug}` }))),
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
          <h1>The Bunny blog</h1>
          <p className="last-updated">
            Practical guides for couples and long-distance relationships.
          </p>

          <div className="blog-list">
            {POSTS.map((p) => (
              <Link key={p.slug} to={`/blog/${p.slug}`} className="blog-card">
                <div className="blog-card-meta">
                  {p.tags.join(' · ')} · {p.readingTime}
                </div>
                <h2>{p.title}</h2>
                <p>{p.excerpt}</p>
                <span className="compare-card-cta">
                  Read article <ArrowRight size={16} />
                </span>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
