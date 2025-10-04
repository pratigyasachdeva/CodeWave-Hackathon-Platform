import React, { useState, useRef } from 'react';
import '../styles/GameDevHackDetail.css';
import videoFile from '../assets/video.mp4'; // Video import karo
import videoThumbnail from '../assets/video.jpeg'; // Thumbnail agar chahiye

const GameDevHackDetail = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlayVideo = () => {
    setIsPlaying(true);
    videoRef.current.play();
  };

  const handlePauseVideo = () => {
    setIsPlaying(false);
    videoRef.current.pause();
  };

  return (
    <div className="game-dev-page">
      {/* Hero Section */}
      <section className="hero-section">
        <h1 className="hero-title">GAMEDEV HACK</h1>
        <div className="hero-bg"></div>
      </section>

      {/* Media Section */}
      <section className="media-section">
        <div className="video-container">
          <div className="video-placeholder">
            {/* Video Element */}
            <video
              ref={videoRef}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '15px',
                display: isPlaying ? 'block' : 'none'
              }}
              controls={isPlaying}
              onClick={isPlaying ? handlePauseVideo : undefined}
            >
              <source src={videoFile} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Play Button Overlay - Only show when video is not playing */}
            {!isPlaying && (
              <div 
                className="video-content"
                onClick={handlePlayVideo}
                style={{
                  backgroundImage: `url(${videoThumbnail})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  width: '100%',
                  height: '100%',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  borderRadius: '15px'
                }}
              >
                <div className="play-button">
                  <svg width="80" height="80" viewBox="0 0 60 60" fill="none">
                    <circle cx="30" cy="30" r="30" fill="white" fillOpacity="0.9"/>
                    <path d="M25 20L40 30L25 40V20Z" fill="#ff4757"/>
                  </svg>
                </div>
                <p className="video-text">Click to play video</p>
              </div>
            )}
          </div>
        </div>
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

      {/* Event Description */}
      <section className="event-description neon-card">
        <h2>About The GameDev Hack</h2>
        <p>
          <strong>"The GameDev Hack"</strong> is an event designed to bring together creators of all skill levels to design and build a game from scratch under a time constraint. It's often called a <strong>game jam</strong>.
        </p>
        <h3>At "The GameDev Hack," you will:</h3>
        <ul>
          <li>
            <strong>• Form a Team:</strong> Join up with other programmers, artists, designers, and writers to form a collaborative team.
          </li>
          <li>
            <strong>• Receive a Theme:</strong> A surprise theme will be revealed at the start of the event. All game ideas must be based on this theme.
          </li>
          <li>
            <strong>• Build a Game Prototype:</strong> Within a set timeframe (e.g., 24 or 48 hours), you will brainstorm, code, create art, and build a playable game prototype from the ground up.
          </li>
          <li>
            <strong>• Present Your Game:</strong> At the end of the event, teams will present their completed games to a panel of judges.
          </li>
        </ul>
        <p className="closing-line">
          This event is your chance to turn an idea into a tangible project, learn new skills, and connect with other creators in a fun, high-energy environment.
        </p>
      </section>
    </div>
  );
};

export default GameDevHackDetail;