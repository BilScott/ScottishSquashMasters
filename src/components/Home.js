import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

function Home() {
  return (
    <div className="home-container">
      {/* Enhanced Hero Banner with diagonal elements */}
      <div className="hero-banner">
        <div className="hero-overlay"></div>
        <div className="diagonal-element"></div>
        <div className="hero-content">
          <div className="content-wrapper">
            <h1>Scottish Squash Masters</h1>
            <p>Promoting and developing masters squash across Scotland</p>
            <Link to="/events" className="cta-button">Explore Events</Link>
          </div>
        </div>
      </div>

      {/* Welcome Section with constrained width */}
      <div className="content-section welcome-section">
        <div className="section-header">
          <span className="section-tag">Welcome</span>
          <h2>Welcome to <span className="highlight">Scottish Squash Masters</span></h2>
          <div className="accent-line"></div>
        </div>
        <div className="constrained-content">
          <p>Scottish Squash Masters is dedicated to promoting competitive squash for players aged 35 and over across Scotland. We organize tournaments throughout the season at venues across the country.</p>
          <p>Whether you're new to masters squash or a seasoned competitor, we invite you to join our community and participate in our events.</p>
        </div>
      </div>

      {/* News Grid with visual enhancements */}
      <div className="content-section news-section">
        <div className="section-header">
          <span className="section-tag">Updates</span>
          <h2>Latest <span className="highlight">News</span></h2>
          <div className="accent-line"></div>
        </div>
        <div className="news-grid">
          <div className="news-item">
            <div className="news-image" style={{backgroundImage: 'url(https://via.placeholder.com/300x200?text=Tournament+Results)'}}></div>
            <div className="news-content">
              <span className="news-date">April 5, 2025</span>
              <h3>Scottish Masters Open Results</h3>
              <p>Congratulations to all winners and participants in the 2025 Scottish Masters Open held at Edinburgh Sports Club.</p>
              <Link to="/news/1" className="read-more">
                <span>Read more</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </div>
          <div className="news-item">
            <div className="news-image" style={{backgroundImage: 'url(https://via.placeholder.com/300x200?text=Selection+News)'}}></div>
            <div className="news-content">
              <span className="news-date">March 28, 2025</span>
              <h3>Home Internationals Team Selection</h3>
              <p>The Scottish team for the upcoming Masters Home Internationals has been announced.</p>
              <Link to="/news/2" className="read-more">
                <span>Read more</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </div>
          <div className="news-item">
            <div className="news-image" style={{backgroundImage: 'url(https://via.placeholder.com/300x200?text=Upcoming+Event)'}}></div>
            <div className="news-content">
              <span className="news-date">March 15, 2025</span>
              <h3>West of Scotland Masters Opens for Entry</h3>
              <p>Entries are now being accepted for the West of Scotland Masters at Western Squash Club.</p>
              <Link to="/news/3" className="read-more">
                <span>Read more</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Links with enhanced visual design */}
      <div className="content-section quick-links">
        <div className="section-header">
          <span className="section-tag">Resources</span>
          <h2>Quick <span className="highlight">Links</span></h2>
          <div className="accent-line"></div>
        </div>
        <div className="constrained-content">
          <div className="links-grid">
            <Link to="/entry-forms" className="link-card">
              <div className="card-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 5H7C5.89543 5 5 5.89543 5 7V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V7C19 5.89543 18.1046 5 17 5H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <line x1="9" y1="12" x2="15" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="9" y1="16" x2="15" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="card-content">
                <h3>Entry Forms</h3>
                <p>Register for upcoming tournaments</p>
              </div>
              <div className="card-arrow">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </Link>
            <Link to="/rankings" className="link-card">
              <div className="card-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 18L4 14L8 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 18L20 14L16 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <line x1="14" y1="6" x2="10" y2="22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="card-content">
                <h3>Rankings</h3>
                <p>Current Scottish Masters rankings</p>
              </div>
              <div className="card-arrow">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </Link>
            <Link to="/calendar" className="link-card">
              <div className="card-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <line x1="8" y1="2" x2="8" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="card-content">
                <h3>Calendar</h3>
                <p>Upcoming Scottish Masters events</p>
              </div>
              <div className="card-arrow">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </Link>
            <Link to="/join-us" className="link-card">
              <div className="card-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M20 21V19C19.9993 18.1137 19.7044 17.2528 19.1614 16.5523C18.6184 15.8519 17.8581 15.3516 17 15.13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="card-content">
                <h3>Join Us</h3>
                <p>Information for new players</p>
              </div>
              <div className="card-arrow">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Sponsors with enhanced styling */}
      <div className="content-section sponsors-section">
        <div className="section-header">
          <span className="section-tag">Support</span>
          <h2>Our <span className="highlight">Sponsors</span></h2>
          <div className="accent-line"></div>
        </div>
        <div className="sponsors-container">
          <div className="sponsor-logo">Scottish Squash</div>
          <div className="sponsor-logo">Eye Rackets</div>
          <div className="sponsor-logo">Dunlop</div>
        </div>
      </div>
    </div>
  );
}

export default Home;