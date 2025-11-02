import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from './pages/Home';
import Interventions from './pages/Interventions';
import Stories from './pages/Stories';
import Footer from './components/Footer';
import './App.css';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/interventions" element={<Interventions />} />
        <Route path="/stories" element={<Stories />} />
      </Routes>
    </AnimatePresence>
  );
}

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
              <Link to="/stories" onClick={closeMenu}>Our Stories</Link>
            </div>
          </div>
        </nav>

        {menuOpen && (
          <div className="menu-overlay" onClick={closeMenu} />
        )}

        <AnimatedRoutes />

        <Footer />
      </div>
    </Router>
  );
}

export default App;