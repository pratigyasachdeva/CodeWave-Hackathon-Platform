import React from 'react';
import '../styles/GameDevHackDetail.css';

const GameDevHackDetail = () => {
  return (
    <div className="game-dev-page">
      {/* Hero Section */}
      <section className="hero-section">
        <h1 className="hero-title">GAMEDEV HACK</h1>
        <div className="hero-bg"></div>
      </section>

      {/* Media Section */}
      <section className="media-section">
        <div className="video-placeholder">▶️ Video Preview</div>
      </section>

      {/* Event Details */}
      <section className="event-details">
        <div className="event-card neon-card">
          <span className="icon">📍</span>
          <p>Venue: IGDTUW</p>
        </div>
        <div className="event-card neon-card">
          <span className="icon">📅</span>
          <p>Date: Oct 10, 2025</p>
        </div>
        <div className="event-card neon-card">
          <span className="icon">✔️</span>
          <p>Eligibility: Everyone</p>
        </div>
      </section>

      {/* Team Info */}
      <section className="team-info">
        <p className="team-size">Team Size: 2–4 Members</p>
        <div className="avatars">
          <div className="avatar male"></div>
          <div className="avatar male"></div>
          <div className="avatar female"></div>
          <div className="avatar female"></div>
        </div>
      </section>

      {/* Prizes & Rounds */}
      <section className="prizes-rounds">
        <div className="prizes-card">
          <p>Prize Pool: ₹10,000</p>
        </div>
        <div className="rounds">
          <div className="round-card">
            <p>Round 1</p>
            <span className="badge submission">SUBMISSION</span>
            <span className="badge result">RESULT</span>
          </div>
          <div className="round-card">
            <p>Round 2</p>
            <span className="badge submission">SUBMISSION</span>
            <span className="badge result">RESULT</span>
          </div>
        </div>
      </section>

      {/* Certificate CTA */}
      <section className="certificate-cta">
        <button className="download-btn">DOWNLOAD CERTIFICATE</button>
      </section>
    </div>
  );
};

export default GameDevHackDetail;