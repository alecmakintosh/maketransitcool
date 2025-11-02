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
              <h3>Transit Is In A Crisis</h3>
              <p>Lack of operational funding, issues with safety and anti-social behaviour, a recovery from COVID-19; these all weigh heavily on Canadian transit.</p>
            </div>
            <div className="why-card">
              <h3>We Can Change The Culture Of Transit</h3>
              <p>Public transit projects are easier to plan and fund when there is a culture of support for transit from the public.</p>
            </div>
            <div className="why-card">
              <h3>Decision-Makers Can </h3>
              <p>Greater political will compels decision-makers to act to support transit.</p>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}

export default Home;