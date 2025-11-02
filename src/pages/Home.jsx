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
              A toolkit to improve engagement and communication for transit agencies.
            </p>
            <p className="description">
              A resource for transport professionals showcasing past successful interventions to increase public interest in transit.
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
              <h3>Change The Culture Of Transit</h3>
              <p>Public transit projects are easier to plan and fund when there is a culture of support for transit by the public.</p>
            </div>
            <div className="why-card">
              <h3>Enable Decision-Makers To Act</h3>
              <p>Political support is crucial for transit development, especially amongst those that may not immediately benefit.</p>
            </div>
            <div className="why-card">
              <h3>Get People Involved In Transit</h3>
              <p>There is a lot of interest in transit. Let's engage with them.</p>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}

export default Home;