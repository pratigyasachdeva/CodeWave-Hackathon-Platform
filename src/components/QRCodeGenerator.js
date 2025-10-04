import React from 'react';
import '../styles/QRCodeGenerator.css';

const QRCodeGenerator = ({ userId, userName }) => {
  // Create profile URL
  const profileUrl = `${window.location.origin}/achievements/${userId}`;

  return (
    <div className="qr-generator-container">
      <h3>🎫 Hackathon Passport</h3>
      
      {/* QR Code Placeholder */}
      <div className="qr-code-placeholder">
        <div className="qr-grid">
          {Array.from({ length: 169 }).map((_, index) => (
            <div 
              key={index} 
              className={`qr-pixel ${Math.random() > 0.5 ? 'active' : ''}`}
            />
          ))}
        </div>
        <div className="qr-user-info">
          <div className="qr-user-name">{userName}</div>
          <div className="qr-user-id">ID: {userId}</div>
        </div>
      </div>

      <p className="qr-instruction">
        📱 Scan this code to view hackathon achievements
      </p>
      
      <div className="qr-stats">
        <div className="stat">
          <span className="stat-number">8</span>
          <span className="stat-label">Hackathons</span>
        </div>
        <div className="stat">
          <span className="stat-number">3</span>
          <span className="stat-label">Won</span>
        </div>
        <div className="stat">
          <span className="stat-number">$12.5K</span>
          <span className="stat-label">Prize</span>
        </div>
      </div>
    </div>
  );
};

export default QRCodeGenerator;