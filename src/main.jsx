import { ViteReactSSG } from 'vite-react-ssg';
import { routes } from './routes.jsx';
import { startMarketingAnalytics } from './analytics.js';
import './index.css';

// vite-react-ssg builds the router (data router) for both SSG and the client.
// In the browser the library auto-mounts/hydrates; at build time it renders
// each route to static HTML.
export const createRoot = ViteReactSSG({ routes }, ({ isClient, router }) => {
  if (isClient && import.meta.env.PROD) {
    startMarketingAnalytics(router);
  }
});
