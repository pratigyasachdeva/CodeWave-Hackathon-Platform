import React, { useState } from 'react';
import '../styles/ProfileCircle.css';

const ProfileCircle = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="profile-container">
      <div 
        className="profile-circle" 
        onClick={() => setOpen(!open)}
      >
        P
      </div>
      {open && (
        <div className="profile-dropdown">
          <h3>Pratigya</h3>
          <p>Certificates:</p>
          <ul>
            <li>AI Challenge Badge 🏅</li>
            <li>Frontend Challenge Badge 🏅</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProfileCircle;