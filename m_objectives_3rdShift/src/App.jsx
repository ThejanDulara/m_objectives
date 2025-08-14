// src/App.jsx
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

import './index.css';
import Objectives from './components/Objectives';

function App() {
  return (
    <div className="app-container">
      {/* Header (kept as-is) */}
      <Header />

      {/* Main content with spacing from header and footer */}
      <div className="content-container">
        <div className="section-wrapper">
          <Objectives />
        </div>
      </div>

      {/* Footer (kept as-is) */}
      <Footer />

      <style jsx>{`
        .app-container {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          min-height: 100vh;
          background: #f3e8ff; /* page bg */
          padding: 0;
          margin: 0;
        }
          .content-container {
            width: 100%;
            max-width: 1400px;
            margin: 0 auto;
            margin-top: 2rem;
            margin-bottom: 2rem;
            padding: 0 1rem; /* reduce from 2rem to 1rem */
          }
        .section-wrapper {
          background: #e9d5ff;       /* purple container visible behind white cards */
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          padding: 2rem;
          box-sizing: border-box;
        }
        @media (min-width: 1400px) {
        .content-container {
          padding: 0 2rem; /* reduce from 4rem to 2rem */
        }
        }
      `}</style>
    </div>
  );
}

export default App;
