import { useEffect, useState } from 'react';
import './InterventionModal.css';

function InterventionModal({ intervention, onClose }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => 
      prev === intervention.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => 
      prev === 0 ? intervention.images.length - 1 : prev - 1
    );
  };

  const goToImage = (index, e) => {
    e.stopPropagation();
    setCurrentImageIndex(index);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        
        <div className="modal-header">
          <div className="modal-image-container">
            <div 
              className="modal-image" 
              style={{backgroundImage: `url(${intervention.images[currentImageIndex]})`}}
            >
              <div className="modal-category-badge">{intervention.category}</div>
            </div>

            {intervention.images.length > 1 && (
              <>
                <button className="image-nav prev" onClick={prevImage}>
                  ‹
                </button>
                <button className="image-nav next" onClick={nextImage}>
                  ›
                </button>

                <div className="image-dots">
                  {intervention.images.map((_, index) => (
                    <button
                      key={index}
                      className={`dot ${index === currentImageIndex ? 'active' : ''}`}
                      onClick={(e) => goToImage(index, e)}
                    />
                  ))}
                </div>
              </>
            )}
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