import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Interventions from './pages/Interventions';
import Stories from './pages/Stories';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <div className="nav-container">
            <Link to="/" className="nav-logo" onClick={closeMenu}>
              Make Transit Cool
            </Link>
            
            <button 
              className="menu-toggle"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>

            <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
              <Link to="/" onClick={closeMenu}>Home</Link>
              <Link to="/interventions" onClick={closeMenu}>Interventions</Link>
              <Link to="/stories" onClick={closeMenu}>Stories</Link>
            </div>
          </div>
        </nav>

        {menuOpen && (
          <div className="menu-overlay" onClick={closeMenu} />
        )}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/interventions" element={<Interventions />} />
          <Route path="/stories" element={<Stories />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;