import React from 'react';
import '../styles/SidePanelProfile.css';
import QRCodeGenerator from './QRCodeGenerator'; // ADD THIS

const SidePanelProfile = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <div className="side-panel-overlay" onClick={onClose}>
      <div className="side-panel" onClick={e => e.stopPropagation()}>
        
        <button className="panel-close" onClick={onClose}>×</button>

        {/* Profile Header */}
        <div className="profile-header">
          <div className="profile-pic">P</div>
          <div className="profile-info">
            <h2>Pratigya Sachdeva</h2>
            <p className="email">pratigya@example.com</p>
            <p className="institute">IGDTUW</p>
          </div>
        </div>

        {/* Personal Details */}
        <div className="profile-section">
          <h3>🎓 Personal Details</h3>
          <div className="details-grid">
            <div className="detail-item">
              <span className="detail-label">Course:</span>
              <span className="detail-value">B.Tech CSE</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Year:</span>
              <span className="detail-value">3rd Year</span>
            </div>
          </div>
        </div>

        {/* Hackathon Stats */}
        <div className="profile-section stats-section">
          <h3>📊 Hackathon Stats</h3>
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">8</div>
              <div className="stat-label">Total</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">3</div>
              <div className="stat-label">Won</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">5</div>
              <div className="stat-label">Participated</div>
            </div>
          </div>
        </div>

        {/* Certificates */}
        <div className="profile-section certificates-section">
          <h3>🏆 Certificates</h3>
          <div className="certificates-list">
            <div className="certificate-item">
              <span className="certificate-icon">📜</span>
              <span className="certificate-text">AI Challenge 2025</span>
            </div>
            <div className="certificate-item">
              <span className="certificate-icon">📜</span>
              <span className="certificate-text">Frontend Mastery 2025</span>
            </div>
          </div>
        </div>

        {/* QR Code Generator - ADD THIS SECTION */}
        <div className="profile-section passport-section">
          <QRCodeGenerator 
            userId="pratigya123" 
            userName="Pratigya Sachdeva" 
          />
        </div>

        {/* Settings */}
        <div className="profile-section settings-section">
          <button className="settings-btn">⚙️ Account Settings</button>
        </div>

      </div>
    </div>
  );
};

export default SidePanelProfile;