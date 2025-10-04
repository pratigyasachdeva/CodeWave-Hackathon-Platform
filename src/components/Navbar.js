import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import ProfileDropdown from './ProfileDropdown';

const Navbar = () => {
  const [showProfile, setShowProfile] = useState(false);

  return (
    <nav className="navbar">
      <input type="text" placeholder="Search hackathons..." className="search-bar"/>
      <div className="profile-container" onClick={() => setShowProfile(!showProfile)}>
        <div className="profile-circle">P</div>
        {showProfile && <ProfileDropdown />}
      </div>
    </nav>
  );
};

export default Navbar;