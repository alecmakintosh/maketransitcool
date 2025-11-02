import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Interventions from './pages/Interventions';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <Router>
      <div className="App">
        {/* Overlay for mobile menu */}
        <div 
          className={`menu-overlay ${menuOpen ? 'active' : ''}`}
          onClick={closeMenu}
        />

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
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/interventions" element={<Interventions />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;