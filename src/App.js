import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink, Navigate } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Events from './components/Events';
import Rankings from './components/Rankings';
import ScrollToTop from './components/ScrollToTop';
import MHI from './components/MHI';
import Admin from './components/Admin';
import Login from './components/Login';
import { AuthProvider, useAuth } from './context/AuthContext';
import logo from './assets/images/logo.jpg';

function PrivateRoute({ children, adminOnly }) {
  const { user } = useAuth();
  if (!user) return <Navigate to="/login" />;
  if (adminOnly && user.email !== 'admin@email.com') return <Navigate to="/" />;
  return children;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && menuOpen) {
        setMenuOpen(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [menuOpen]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <AuthProvider>
      <Router basename="/ScottishSquashMasters">
        <ScrollToTop />
        <div className="app">
          <header className={`app-header ${scrolled ? 'scrolled' : ''}`}>
            <div className="container header-container">
              <div className="brand">
                <img 
                  src={logo}
                  alt="Scottish Squash Logo" 
                  className="logo"
                />
                <h1 className="site-title">Masters</h1>
              </div>
              
              <button 
                className={`menu-toggle ${menuOpen ? 'active' : ''}`} 
                onClick={toggleMenu}
                aria-label="Toggle navigation menu"
              >
                <span></span>
                <span></span>
                <span></span>
              </button>
              
              <nav className={`main-nav ${menuOpen ? 'open' : ''}`}>
                <ul>
                  <li><NavLink to="/" onClick={closeMenu} end>Home</NavLink></li>
                  <li><NavLink to="/events" onClick={closeMenu}>Events</NavLink></li>
                  <li><NavLink to="/rankings" onClick={closeMenu}>Rankings</NavLink></li>
                  <li><NavLink to="/home-internationals" onClick={closeMenu} className={({isActive}) => isActive ? 'active' : ''}>
                    Home Internationals
                  </NavLink></li>
                  <li><NavLink to="/admin" onClick={closeMenu}>Admin</NavLink></li>
                  <li><NavLink to="/about" onClick={closeMenu}>About</NavLink></li>
                  <li><NavLink to="/contact" onClick={closeMenu}>Contact</NavLink></li>
                </ul>
              </nav>
            </div>
          </header>
          
          {menuOpen && <div className="overlay" onClick={closeMenu}></div>}
          
          <main className="app-main">
            <div className="container">
              <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Home />} />
                <Route path="/events" element={<Events />} />
                <Route path="/rankings" element={<Rankings />} />
                <Route path="/home-internationals" element={<MHI />} />
                <Route
                  path="/admin"
                  element={
                    <PrivateRoute adminOnly>
                      <Admin />
                    </PrivateRoute>
                  }
                />
              </Routes>
            </div>
          </main>
          
          <footer className="app-footer">
            <div className="container">
              <div className="footer-content">
                <p className="copyright">© {new Date().getFullYear()} Scottish Squash Masters. All rights reserved.</p>
                <div className="social-links">
                  <a href="https://www.facebook.com/scottishsquash" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="https://twitter.com/scottishsquash" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="https://www.instagram.com/scottishsquash" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
