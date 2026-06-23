import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Seo from './seo/Seo';
import { breadcrumbSchema, articleSchema, faqSchema } from './seo/schema';
import { getPost } from './data/blog';

export default function BlogPost({ slug }) {
  const post = getPost(slug);
  if (!post) return null;

  const { Content } = post;

  return (
    <div className="legal-page">
      <Seo
        title={`${post.title} | Bunny`}
        description={post.metaDescription}
        path={`/blog/${post.slug}`}
        image={post.ogImage || '/og/og-blog.jpg'}
        type="article"
        schema={[
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Blog', path: '/blog' },
            { name: post.title, path: `/blog/${post.slug}` },
          ]),
          articleSchema({
            title: post.title,
            description: post.metaDescription,
            path: `/blog/${post.slug}`,
            datePublished: post.datePublished,
            dateModified: post.dateModified,
            author: post.author,
            image: post.ogImage || '/og/og-blog.jpg',
          }),
          ...(post.faq ? [faqSchema(post.faq)] : []),
        ]}
      />
      <div className="container">
        <Link to="/blog" className="back-link">
          <ArrowLeft size={20} />
          All articles
        </Link>
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="legal-content glass-panel blog-post"
        >
          <div className="blog-card-meta">
            {post.tags.join(' · ')} · {post.readingTime} · Updated{' '}
            {new Date(post.dateModified).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </div>
          <h1>{post.title}</h1>

          {post.tldr && (
            <div className="tldr-box">
              <h2>TL;DR</h2>
              <ul>
                {post.tldr.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          )}

          <Content />

          {post.faq && (
            <>
              <h2>Frequently asked questions</h2>
              {post.faq.map((item) => (
                <div key={item.q} className="faq-item">
                  <h3>{item.q}</h3>
                  <p>{item.a}</p>
                </div>
              ))}
            </>
          )}

          <p className="muted-links">
            By {post.author} · <Link to="/about">About Bunny</Link> ·{' '}
            <Link to="/compare">Compare apps</Link>
          </p>
        </motion.article>
      </div>
    </div>
  );
}
