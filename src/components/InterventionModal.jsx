import { useEffect } from 'react';
import './InterventionModal.css';

function InterventionModal({ intervention, onClose }) {
  useEffect(() => {
    // Prevent scrolling when modal is open
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        
        <div className="modal-header">
          <div className="modal-image-placeholder">
            <span className="modal-category-badge">{intervention.category}</span>
          </div>
          <div className="modal-title-section">
            <h2>{intervention.title}</h2>
            <p className="modal-tagline">{intervention.tagline}</p>
          </div>
        </div>

        <div className="modal-body">
          <section className="modal-section">
            <h3>Overview</h3>
            <p>{intervention.description}</p>
          </section>

          <section className="modal-section">
            <h3>Key Benefits</h3>
            <ul className="benefits-list">
              {intervention.benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </section>

          <section className="modal-section">
            <h3>Implementation Guidelines</h3>
            <p>{intervention.implementation}</p>
          </section>

          <section className="modal-section">
            <h3>Real-World Examples</h3>
            <ul className="examples-list">
              {intervention.examples.map((example, index) => (
                <li key={index}>{example}</li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

export default InterventionModal;