// Central route manifest consumed by vite-react-ssg at build time to know
// which pages to statically pre-render, and by the client router at runtime.
import { Outlet, ScrollRestoration } from 'react-router-dom';
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
import SharedPetForCouples from './pages/SharedPetForCouples';
import DrawingWidgetsForCouples from './pages/DrawingWidgetsForCouples';
import LoveNotesForCouples from './pages/LoveNotesForCouples';
import Pricing from './pages/Pricing';

const pages = [
  { path: '/', element: <Home />, entry: 'src/App.jsx' },
  { path: '/about', element: <About />, entry: 'src/About.jsx' },
  { path: '/pricing', element: <Pricing />, entry: 'src/pages/Pricing.jsx' },
  { path: '/contact', element: <Contact />, entry: 'src/Contact.jsx' },
  { path: '/privacy', element: <PrivacyPolicy />, entry: 'src/PrivacyPolicy.jsx' },
  { path: '/terms', element: <TermsOfService />, entry: 'src/TermsOfService.jsx' },
  { path: '/shared-pet-for-couples', element: <SharedPetForCouples />, entry: 'src/pages/SharedPetForCouples.jsx' },
  { path: '/drawing-widgets-for-couples', element: <DrawingWidgetsForCouples />, entry: 'src/pages/DrawingWidgetsForCouples.jsx' },
  { path: '/love-notes-for-couples', element: <LoveNotesForCouples />, entry: 'src/pages/LoveNotesForCouples.jsx' },

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

// Keep scroll positions for Back/Forward, but open a new page at its heading.
export const routes = [{
  element: <><Outlet /><ScrollRestoration /></>,
  children: pages,
}];

export default routes;
