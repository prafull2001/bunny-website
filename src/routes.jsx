// Central route manifest consumed by vite-react-ssg at build time to know
// which pages to statically pre-render, and by the client router at runtime.
import { Home } from './App.jsx';
import Contact from './Contact';
import PrivacyPolicy from './PrivacyPolicy';
import TermsOfService from './TermsOfService';
import Confirm from './Confirm';
import AvishiSurprise from './AvishiSurprise';
import Anniversaries from './Anniversaries';
import About from './About';
import CompareHub from './CompareHub';
import ComparePost from './ComparePost';
import BlogIndex from './BlogIndex';
import BlogPost from './BlogPost';
import Seo from './seo/Seo';
import { COMPARISONS } from './data/compare';
import { POSTS } from './data/blog';

export const routes = [
  { path: '/', element: <Home />, entry: 'src/App.jsx' },
  { path: '/about', element: <About />, entry: 'src/About.jsx' },
  { path: '/contact', element: <Contact />, entry: 'src/Contact.jsx' },
  { path: '/privacy', element: <PrivacyPolicy />, entry: 'src/PrivacyPolicy.jsx' },
  { path: '/terms', element: <TermsOfService />, entry: 'src/TermsOfService.jsx' },

  // Comparison hub + one statically pre-rendered page per competitor
  { path: '/compare', element: <CompareHub />, entry: 'src/CompareHub.jsx' },
  ...COMPARISONS.map((c) => ({
    path: `/compare/${c.slug}`,
    element: <ComparePost slug={c.slug} />,
    entry: 'src/ComparePost.jsx',
  })),

  // Blog index + one page per post
  { path: '/blog', element: <BlogIndex />, entry: 'src/BlogIndex.jsx' },
  ...POSTS.map((p) => ({
    path: `/blog/${p.slug}`,
    element: <BlogPost slug={p.slug} />,
    entry: 'src/BlogPost.jsx',
  })),

  // Utility / personal pages — pre-rendered so GitHub Pages never 404s on a
  // direct hit, but kept out of search indexes via a noindex <Seo>.
  { path: '/confirm', element: <Confirm />, entry: 'src/Confirm.jsx' },
  {
    path: '/avishi',
    element: (
      <>
        <Seo title="A surprise for Avishi" path="/avishi" noindex />
        <AvishiSurprise />
      </>
    ),
    entry: 'src/AvishiSurprise.jsx',
  },
  {
    path: '/anniversaries',
    element: (
      <>
        <Seo title="Our anniversaries" path="/anniversaries" noindex />
        <Anniversaries />
      </>
    ),
    entry: 'src/Anniversaries.jsx',
  },
];

export default routes;
