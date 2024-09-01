import React from 'react';
import './Header.css';
import profilePicture from '../assets/images/profilepicture.jpg';

function Header({ toggleSidebar }) {
  return (
    <header className="header">
      <div className="header-container">
        <button className="toggle-btn" onClick={toggleSidebar}>☰</button>
        <div className="header-content">
          <img src={profilePicture} alt="Ali Sotoudeh" className="profile-pic" />
          <h1>Ali Sotoudeh</h1>
          <p className="tagline">Software Developer</p>
          <p className="secondary-tagline">Passionate about creating impactful digital solutions.</p>
        </div>
        <div className="contact-info">
          <a href="tel:+61434031715" className="contact-item">
            <i className="fas fa-phone"></i>
          </a>
          <a 
            href="https://www.google.com/maps/place/St+Kilda,+Melbourne,+Australia" 
            target="_blank" 
            rel="noopener noreferrer"
            className="contact-item"
          >
            <i className="fas fa-map-marker-alt"></i>
          </a>
          <a 
            href="https://www.linkedin.com/in/ali-sotoudeh-0aaa562b9" 
            target="_blank" 
            rel="noopener noreferrer"
            className="contact-item"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a 
            href="mailto:Alisotoudehpsn4@gmail.com" 
            className="contact-item"
          >
            <i className="fas fa-envelope"></i>
          </a>
          <a 
            href="https://github.com/alisotoudehpsn4" 
            target="_blank" 
            rel="noopener noreferrer"
            className="contact-item"
          >
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
