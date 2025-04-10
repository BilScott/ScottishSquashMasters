import React from 'react';
import '../styles/Header.css';

function Header({ title }) {
  return (
    <div className="header">
      <img 
        src="https://www.scottishsquash.org/wp-content/uploads/2017/10/Scottish_Squash_Logo_LANDSCAPE-300x90.jpg" 
        alt="Scottish Squash Logo" 
        className="scottish-squash-logo"
      />
      <div className="header-text">
        {title ? <h1>{title}</h1> : <h1>Masters</h1>}
      </div>
    </div>
  );
}

export default Header;