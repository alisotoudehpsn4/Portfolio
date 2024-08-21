import React from 'react';
import './Sidebar.css';
import resume from '../assets/ALI-CV-3.pdf';

function Sidebar() {
  const toggleSidebar = () => {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    sidebar.classList.toggle('show');
    overlay.classList.toggle('show');
  };

  return (
    <div>
      <div className="overlay" id="overlay" onClick={toggleSidebar}></div>
      <button className="toggle-btn" onClick={toggleSidebar}>☰</button>
      <div className="sidebar" id="sidebar">
        <a href={resume} target="_blank" rel="noopener noreferrer"><i className="fas fa-file-alt"></i> Resume</a>
        <div className="sidebar-divider"></div>
        <div className="current-project">
          <h3>Current Project</h3>
          <p>ExpenseMate - Expense Tracker App</p>
          <a href="https://github.com/alisotoudehpsn4/expensemate" target="_blank" rel="noopener noreferrer">View on GitHub</a>
        </div>
        <div className="sidebar-divider"></div>
        <div className="table-of-contents">
          <h3>Table of Contents</h3>
          <ul>
            <li><a href="#about">About Me</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#project1">ExpenseMate</a></li>
            <li><a href="#project2">Taskify</a></li>
            <li><a href="#wealtheon">Wealtheon</a></li>
          </ul>
        </div>
        <div className="sidebar-divider"></div>
        <div className="business-hours">
          <h3>Business Hours</h3>
          <p>Mon - Fri: 9 AM - 6 PM</p>
          <p>Sat - Sun: Urgent enquiries only</p>
        </div>
        <div className="sidebar-divider"></div>
      </div>
    </div>
  );
}

export default Sidebar;
