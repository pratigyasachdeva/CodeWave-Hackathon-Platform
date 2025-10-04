import React from 'react';
import '../styles/Profile.css';

const Profile = () => {
  const participant = {
    name: 'Pratigya Sachdeva',
    badges: ['AI Challenge', 'Frontend Challenge'],
    certificates: ['AI Certificate', 'Frontend Certificate']
  };

  return (
    <div className="profile-page">
      <h2>{participant.name}</h2>
      <div className="badges">
        {participant.badges.map((b,i)=><span key={i} className="badge">{b}</span>)}
      </div>
      <h3>Certificates</h3>
      <ul>
        {participant.certificates.map((c,i)=><li key={i}>{c}</li>)}
      </ul>
    </div>
  );
};

export default Profile;