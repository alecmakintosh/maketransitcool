import { useEffect } from 'react';
import './StoryModal.css';

function StoryModal({ story, onClose }) {
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

  return (
    <div className="story-modal-overlay" onClick={onClose}>
      <div className="story-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="story-modal-close" onClick={onClose}>×</button>
        
        <div className="story-modal-image-placeholder">
          <div className="story-location-badge">
            {story.city}, {story.province}
          </div>
        </div>

        <div className="story-modal-body">
          <div className="story-meta">
            <span className="story-year">{story.year}</span>
            <span className="story-intervention">{story.intervention}</span>
          </div>
          
          <h2>{story.title}</h2>
          
          <p className="story-text">{story.story}</p>
        </div>
      </div>
    </div>
  );
}

export default StoryModal;