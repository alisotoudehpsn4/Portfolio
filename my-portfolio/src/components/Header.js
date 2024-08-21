import React from 'react';
import './Header.css';
import profilePicture from '../assets/images/profilepicture.jpg';

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <img src={profilePicture} alt="Ali Sotoudeh" className="profile-pic" />
        <h1>Ali Sotoudeh</h1>
        <p className="subtitle">Software Developer</p>
        <p className="tagline">
          <i className="fas fa-laptop-code"></i> Passionate about creating impactful digital solutions.
        </p>
      </div>
    </header>
  );
}

export default Header;
