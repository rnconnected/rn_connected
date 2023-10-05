import React, { useState } from 'react';
import './top_nav.css'; // Import your CSS file for styling

const NavBar = () => {

  return (
    <nav className="navbar">
      <div className="nav-links">
        <ul>
          <li><a href="/invites">New Invites</a></li>
          <li><a href="/connection_list">View Connections</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
