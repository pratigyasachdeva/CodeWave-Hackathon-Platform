import React from 'react';
import '../styles/SidePanelProfile.css';


const SidePanelProfile = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <div className="side-panel-overlay" onClick={onClose}>
      <div className="side-panel" onClick={e => e.stopPropagation()}>

        {/* Profile Picture & Basic Info */}
        <div className="profile-header">
          <div className="profile-pic">P</div>
          <div className="profile-info">
            <h2>Pratigya Sachdeva</h2>
            <p>Email: pratigya@example.com</p>
            <p>Institute: IGDTUW</p>
          </div>
        </div>

        {/* Personal Details */}
        <div className="profile-section">
          <h3>Personal Details</h3>
          <p>Course: B.Tech CSE</p>
          <p>Year: 3rd Year</p>
        </div>

        {/* Certificates */}
        <div className="profile-section">
          <h3>Certificates Earned</h3>
          <ul>
            <li>Hackathon AI Challenge 2025</li>
            <li>Frontend Mastery 2025</li>
          </ul>
        </div>

        {/* Hackathon Passport / QR */}
        <div className="profile-section qr-section">
          <h3>Hackathon Passport</h3>
          <div className="qr-code">QR</div>
        </div>

        {/* Settings Button */}
        <div className="profile-section settings-section">
          <button className="settings-btn">Settings ⚙️</button>
        </div>

      </div>
    </div>
  );
};

export default SidePanelProfile;