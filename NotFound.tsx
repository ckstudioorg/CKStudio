import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound: React.FC = () => {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <div className="error-code">404</div>
        <h1 className="error-title">Page Not Found</h1>
        <p className="error-message">
          Oops! The page you're looking for doesn't exist.
          It might have been moved or deleted.
        </p>
        <div className="error-actions">
          <Link to="/" className="btn-home">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
            Back to Home
          </Link>
          <Link to="/#contact" className="btn-contact">
            Contact Us
          </Link>
        </div>
        <div className="helpful-links">
          <h3>You might be looking for:</h3>
          <ul>
            <li><Link to="/#services">Our Services</Link></li>
            <li><Link to="/#portfolio">Portfolio</Link></li>
            <li><Link to="/#about">About Us</Link></li>
            <li><Link to="/#contact">Contact</Link></li>
          </ul>
        </div>
      </div>
      <div className="film-strip">
        <div className="strip"></div>
        <div className="strip"></div>
        <div className="strip"></div>
        <div className="strip"></div>
      </div>
    </div>
  );
};

export default NotFound;
