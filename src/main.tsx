import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

// Ready-made pages arrive with their text already inside (for search engines and link previews).
// That copy stays hidden; the live, animated site replaces it here.
if (rootElement.hasAttribute('data-prerendered')) {
  rootElement.replaceChildren();
  rootElement.removeAttribute('data-prerendered');
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
