import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { rememberReadyMade } from './lib/prerendered';
import './index.css';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const app = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

if (rootElement.hasAttribute('data-prerendered')) {
  // Ready-made page (scripts/prerender.mjs): it is already on screen, so the live site attaches to it
  // ("hydration") instead of drawing it again. Visitors see the page as soon as the HTML arrives.
  rememberReadyMade(rootElement);
  ReactDOM.hydrateRoot(rootElement, app, {
    onRecoverableError: (error) => console.warn('[hydration]', error),
  });
  // Tells the blank-page self-recovery check in index.html that the live site has started
  rootElement.removeAttribute('data-prerendered');
} else {
  ReactDOM.createRoot(rootElement).render(app);
}
