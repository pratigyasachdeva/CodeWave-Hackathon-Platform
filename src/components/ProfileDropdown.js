import React from 'react';
import '../styles/Profile.css';

const ProfileDropdown = () => {
  const participant = {
    name: 'Pratigya Sachdeva',
    badges: ['AI Challenge', 'Frontend Challenge'],
    certificates: ['AI Certificate', 'Frontend Certificate']
  };

  return (
    <div className="profile-dropdown">
      <h4>{participant.name}</h4>
      <div className="badges">
        {participant.badges.map((b,i)=> <span key={i} className="badge">{b}</span>)}
      </div>
      <div className="certificates">
        {participant.certificates.map((c,i)=> <p key={i}>{c}</p>)}
      </div>
      <button>Settings</button>
    </div>
  );
};

export default ProfileDropdown;