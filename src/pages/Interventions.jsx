import { useState } from 'react';
import { interventions, categories } from '../data/interventions';
import InterventionModal from '../components/InterventionModal';
import PageTransition from '../components/PageTransition';
import './Interventions.css';

function Interventions() {
  const [selectedIntervention, setSelectedIntervention] = useState(null);
  const [filterCategory, setFilterCategory] = useState('All');

  const filteredInterventions = filterCategory === 'All' 
    ? interventions 
    : interventions.filter(i => i.category === filterCategory);

  return (
    <PageTransition>
        <div className="interventions-page">
        <div className="interventions-header">
            <h1>Interventions</h1>
            <p>Explore proven strategies to improve your transit system</p>
        </div>

        <div className="filter-bar">
            <button 
            className={filterCategory === 'All' ? 'active' : ''}
            onClick={() => setFilterCategory('All')}
            >
            All
            </button>
            {categories.map(cat => (
            <button 
                key={cat}
                className={filterCategory === cat ? 'active' : ''}
                onClick={() => setFilterCategory(cat)}
            >
                {cat}
            </button>
            ))}
        </div>

            <div className="interventions-grid">
            {filteredInterventions.map(intervention => (
                <div 
                key={intervention.id} 
                className="intervention-card"
                onClick={() => setSelectedIntervention(intervention)}
                >
                <div className="card-image" style={{backgroundImage: `url(${intervention.image})`}}>
                    <span className="category-badge">{intervention.category}</span>
                </div>
                <div className="card-content">
                    <h3>{intervention.title}</h3>
                    <p className="card-tagline">{intervention.tagline}</p>
                    <button className="learn-more">Learn More →</button>
                </div>
                </div>
            ))}
            </div>

        {selectedIntervention && (
            <InterventionModal 
            intervention={selectedIntervention}
            onClose={() => setSelectedIntervention(null)}
            />
        )}
        </div>
    </PageTransition>
  );
}

export default Interventions;