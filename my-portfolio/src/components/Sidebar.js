import React from 'react';
import './Sidebar.css';
import resume from '../assets/ALI-CV-3.pdf';

function Sidebar() {
  const toggleSidebar = () => {
    document.getElementById('sidebar').classList.toggle('show');
  };

  return (
    <div>
      <button className="toggle-btn" onClick={toggleSidebar}>☰</button>
      <div className="sidebar" id="sidebar">
        <a href={resume} target="_blank" rel="noopener noreferrer"><i className="fas fa-file-alt"></i> Resume</a>
        <a href="mailto:alisotoudehpsn4@gmail.com"><i className="fas fa-envelope"></i> Email Me</a>
        <a href="https://www.linkedin.com/in/ali-sotoudeh-0aaa562b9" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i> LinkedIn</a>
        <a href="https://github.com/alisotoudehpsn4" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i> GitHub</a>
      </div>
    </div>
  );
}

export default Sidebar;
