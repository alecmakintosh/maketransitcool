import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <div className="nav-container">
            <a href="/" className="nav-logo">
              Make Transit Cool
            </a>
            <div className="nav-links">
              <a href="/">Home</a>
              <a href="/interventions">Interventions</a>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          {/* We'll add more routes here */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;