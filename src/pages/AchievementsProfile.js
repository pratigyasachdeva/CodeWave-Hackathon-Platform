import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/AchievementsProfile.css';

const AchievementsProfile = () => {
  const { userId } = useParams();

  // Mock Data - Hardcoded (Backend nahi hai)
  const userData = {
    id: userId,
    name: 'Pratigya Sachdeva',
    institute: 'IGDTUW',
    course: 'B.Tech CSE',
    year: '3rd Year',
    email: 'pratigya@example.com',
    hackathons: [
      {
        id: 1,
        name: 'AI Challenge 2025',
        status: 'Won',
        position: '1st',
        date: '2025-10-01',
        team: 'Code Warriors',
        prize: '$5,000',
        description: 'Developed an AI model for predictive analysis'
      },
      {
        id: 2,
        name: 'Frontend Mastery 2025',
        status: 'Participated',
        position: 'Finalist',
        date: '2025-09-15',
        team: 'UI Masters',
        prize: '-',
        description: 'Built a responsive web application with React'
      },
      {
        id: 3,
        name: 'Blockchain Hack 2025',
        status: 'Won',
        position: '2nd',
        date: '2025-08-20',
        team: 'Chain Breakers',
        prize: '$3,000',
        description: 'Created a decentralized voting system'
      },
      {
        id: 4,
        name: 'IoT Innovation 2025',
        status: 'Won',
        position: '1st',
        date: '2025-07-10',
        team: 'Smart Tech',
        prize: '$4,500',
        description: 'Built smart home automation system'
      }
    ],
    stats: {
      totalHackathons: 8,
      won: 4,
      participated: 4,
      totalPrize: '$12,500'
    },
    skills: ['React', 'Node.js', 'Python', 'MongoDB', 'AI/ML'],
    certificates: [
      'AI Challenge Winner 2025',
      'Frontend Mastery Finalist',
      'Blockchain Innovation Award',
      'IoT Excellence Certificate'
    ]
  };

  return (
    <div className="achievements-profile">
      {/* Header Section */}
      <div className="profile-header">
        <div className="profile-avatar">
          {userData.name.charAt(0)}
        </div>
        <div className="profile-info">
          <h1>{userData.name}</h1>
          <p className="profile-meta">
            {userData.institute} • {userData.course} • {userData.year}
          </p>
          <p className="profile-email">{userData.email}</p>
          <p className="profile-id">Hackathon ID: {userData.id}</p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="stats-section">
        <h2>📊 Hackathon Statistics</h2>
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon">🏆</div>
            <div className="stat-number">{userData.stats.totalHackathons}</div>
            <div className="stat-label">Total Participated</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">🎯</div>
            <div className="stat-number">{userData.stats.won}</div>
            <div className="stat-label">Hackathons Won</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">⭐</div>
            <div className="stat-number">{userData.stats.participated}</div>
            <div className="stat-label">Finalist</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">💰</div>
            <div className="stat-number">{userData.stats.totalPrize}</div>
            <div className="stat-label">Total Prize Won</div>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="skills-section">
        <h2>🛠️ Technical Skills</h2>
        <div className="skills-list">
          {userData.skills.map((skill, index) => (
            <span key={index} className="skill-tag">{skill}</span>
          ))}
        </div>
      </div>

      {/* Hackathons Section */}
      <div className="hackathons-section">
        <h2>🚀 Recent Hackathons</h2>
        <div className="hackathons-list">
          {userData.hackathons.map((hackathon) => (
            <div key={hackathon.id} className="hackathon-card">
              <div className="hackathon-header">
                <h3>{hackathon.name}</h3>
                <span className={`status-badge ${hackathon.status.toLowerCase()}`}>
                  {hackathon.status} {hackathon.position}
                </span>
              </div>
              
              <div className="hackathon-meta">
                <span className="meta-item">📅 {new Date(hackathon.date).toLocaleDateString()}</span>
                <span className="meta-item">👥 {hackathon.team}</span>
                <span className="meta-item prize">💰 {hackathon.prize}</span>
              </div>

              <p className="hackathon-description">{hackathon.description}</p>

              <div className="hackathon-actions">
                <button className="action-btn certificate-btn">
                  📜 View Certificate
                </button>
                <button className="action-btn project-btn">
                  🔗 View Project
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certificates Section */}
      <div className="certificates-section">
        <h2>📜 Certificates & Awards</h2>
        <div className="certificates-list">
          {userData.certificates.map((certificate, index) => (
            <div key={index} className="certificate-item">
              <span className="certificate-icon">🏅</span>
              <span className="certificate-text">{certificate}</span>
              <button className="download-certificate">⬇️</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AchievementsProfile;