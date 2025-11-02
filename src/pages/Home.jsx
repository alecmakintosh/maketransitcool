import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import './Home.css';

function Home() {
  return (
    <PageTransition>
      <div className="home">
        <div className="hero">
          <div className="hero-content">
            <h1>Make Transit Cool</h1>
            <p className="tagline">
              Proven interventions to transform public transportation
            </p>
            <p className="description">
              A curated resource for transportation professionals showcasing practical, 
              evidence-based strategies to improve transit systems and increase ridership.
            </p>
            <Link to="/interventions" className="cta-button">
              Explore Interventions
            </Link>
          </div>
        </div>
        
        <div className="content-section">
          <h2>Why This Matters</h2>
          <div className="why-grid">
            <div className="why-card">
              <h3>🚀 Increase Ridership</h3>
              <p>Small changes can lead to significant ridership gains when done right</p>
            </div>
            <div className="why-card">
              <h3>💰 Maximize ROI</h3>
              <p>Learn which interventions deliver the most impact for your investment</p>
            </div>
            <div className="why-card">
              <h3>📊 Evidence-Based</h3>
              <p>All strategies backed by real-world examples and data</p>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}

export default Home;