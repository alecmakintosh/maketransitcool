import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { stories } from '../data/stories';
import StoryModal from '../components/StoryModal';
import PageTransition from '../components/PageTransition';
import './Stories.css';

// Fix for default marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
});

// Calculate distance between two points in pixels at current zoom
const getPixelDistance = (map, lat1, lng1, lat2, lng2) => {
  const point1 = map.latLngToContainerPoint([lat1, lng1]);
  const point2 = map.latLngToContainerPoint([lat2, lng2]);
  return Math.sqrt(Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2));
};

// Group stories that are close together
const groupStoriesIntoClusters = (stories, map, clusterRadius = 60) => {
  const clusters = [];
  const processed = new Set();
  
  stories.forEach(story => {
    if (processed.has(story.id)) return;
    
    const cluster = [story];
    processed.add(story.id);
    
    // Find nearby stories
    stories.forEach(otherStory => {
      if (processed.has(otherStory.id)) return;
      
      const distance = getPixelDistance(
        map,
        story.lat,
        story.lng,
        otherStory.lat,
        otherStory.lng
      );
      
      if (distance < clusterRadius) {
        cluster.push(otherStory);
        processed.add(otherStory.id);
      }
    });
    
    clusters.push(cluster);
  });
  
  return clusters;
};

// Calculate positions for stories in a cluster
// Calculate positions for stories in a cluster
const getClusterPositions = (cluster, map) => {
  if (cluster.length === 1) {
    return [{
      story: cluster[0],
      position: [cluster[0].lat, cluster[0].lng],
      rotation: 0,
      isCluster: false
    }];
  }
  
  // Get center point
  const centerLat = cluster.reduce((sum, s) => sum + s.lat, 0) / cluster.length;
  const centerLng = cluster.reduce((sum, s) => sum + s.lng, 0) / cluster.length;
  
  // If more than 6 stories, show as numbered cluster
  if (cluster.length > 4) {
    return [{
      stories: cluster,
      position: [centerLat, centerLng],
      isCluster: true,
      count: cluster.length
    }];
  }
  
  // Arrange pins in a circle around the center
  const positions = [];
  const radius = 0.08; // Radius in degrees
  const rotationStep = 72; // 30 degrees per pin
  
  cluster.forEach((story, index) => {
    // Calculate rotation: spread evenly around 0
    // For 2 pins: -36, 36
    // For 3 pins: -72, 0, 72
    // For 4 pins: -108, -36, 36, 108
    const totalRotation = rotationStep * (cluster.length - 1);
    const rotation = -totalRotation / 2 + (index * rotationStep);
    
    // Convert rotation to radians for position calculation
    const angleRad = rotation * Math.PI / 180;
    
    positions.push({
      story,
      position: [
        centerLat + radius * Math.sin(angleRad),
        centerLng + radius * Math.cos(angleRad)
      ],
      rotation: rotation, // Just use the rotation directly
      isCluster: false
    });
  });
  
  return positions;
};

// Custom marker icon for individual stories
const createStoryIcon = (storyId, storyTitle, rotation = 0) => {
  return L.divIcon({
    className: 'custom-marker',
    html: `
      <div class="marker-container">
        <div class="marker-pin" data-story="${storyId}" style="transform: rotate(${rotation}deg); transform-origin: 15px 40px;">
          <div class="marker-image-placeholder"></div>
        </div>
        <div class="marker-tooltip">${storyTitle}</div>
      </div>
    `,
    iconSize: [30, 40],
    iconAnchor: [15, 40],
  });
};

// Custom icon for numbered clusters
const createClusterIcon = (count) => {
  return L.divIcon({
    className: 'custom-cluster-marker',
    html: `
      <div class="cluster-marker">
        <span>${count}</span>
      </div>
    `,
    iconSize: [50, 50],
    iconAnchor: [25, 25],
  });
};

// Component to handle map events and update clusters
function MapEventHandler({ onMapChange }) {
  const map = useMapEvents({
    zoomend: () => onMapChange(map),
    moveend: () => onMapChange(map),
  });
  
  useEffect(() => {
    onMapChange(map);
  }, []);
  
  return null;
}

function Stories() {
  const [selectedStory, setSelectedStory] = useState(null);
  const [clusterPositions, setClusterPositions] = useState([]);
  const [showClusterModal, setShowClusterModal] = useState(false);
  const [selectedClusterStories, setSelectedClusterStories] = useState([]);
  
  const mapCenter = [56.1304, -106.3468];
  const mapZoom = 4;

  const handleMapChange = (map) => {
    const clusters = groupStoriesIntoClusters(stories, map);
    const positions = clusters.flatMap(cluster => getClusterPositions(cluster, map));
    setClusterPositions(positions);
  };

  const handleClusterClick = (storiesInCluster) => {
    setSelectedClusterStories(storiesInCluster);
    setShowClusterModal(true);
  };

  return (
    <PageTransition>
        <div className="stories-page">
        <div className="stories-header">
            <h1>Our Stories</h1>
            <p>Explore stories from Group Five's diverse backgrounds on why we love transit.</p>
        </div>

        <div className="map-container">
            <MapContainer 
            center={mapCenter} 
            zoom={mapZoom} 
            className="leaflet-map"
            scrollWheelZoom={true}
            >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            
            <MapEventHandler onMapChange={handleMapChange} />
            
                {clusterPositions.map((item, index) => {
                if (item.isCluster) {
                    return (
                    <Marker
                        key={`cluster-${index}`}
                        position={item.position}
                        icon={createClusterIcon(item.count)}
                        eventHandlers={{
                        click: () => handleClusterClick(item.stories),
                        }}
                    />
                    );
                } else {
                    return (
                    <Marker
                        key={`story-${item.story.id}-${index}`}
                        position={item.position}
                        icon={createStoryIcon(item.story.id, item.story.title, item.rotation)}
                        eventHandlers={{
                        click: () => setSelectedStory(item.story),
                        }}
                    />
                    );
                }
                })}
            </MapContainer>
        </div>

        {selectedStory && (
            <StoryModal 
            story={selectedStory}
            onClose={() => setSelectedStory(null)}
            />
        )}

        {showClusterModal && (
            <ClusterModal 
            stories={selectedClusterStories}
            onSelectStory={(story) => {
                setShowClusterModal(false);
                setSelectedStory(story);
            }}
            onClose={() => setShowClusterModal(false)}
            />
        )}
        </div>
    </PageTransition>
  );
}

// Modal for showing list of stories in a cluster
function ClusterModal({ stories, onSelectStory, onClose }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="story-modal-overlay" onClick={onClose}>
      <div className="cluster-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="story-modal-close" onClick={onClose}>×</button>
        <h2>Select a Story</h2>
        <div className="cluster-story-list">
          {stories.map(story => (
            <div 
              key={story.id} 
              className="cluster-story-item"
              onClick={() => onSelectStory(story)}
            >
              <div className="cluster-story-placeholder"></div>
              <div className="cluster-story-info">
                <h3>{story.title}</h3>
                <p>{story.city}, {story.province} • {story.year}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Stories;