import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/HackathonCard.css';

const HackathonCard = ({ id, title, host, venue, teamSize, deadline }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    // For Game Dev Hack, navigate to detail page
    if (title === "Game Dev Hack") {
      navigate('/gamedev-hack');
    } else {
      // Placeholder for other hackathons
      alert(`Details for "${title}" coming soon!`);
    }
  };

  return (
    <div className="hackathon-card" onClick={handleClick}>
      <h2 className="hackathon-title">{title}</h2>
      <p className="hackathon-host">Hosted by: {host}</p>
      <p className="hackathon-venue">Venue: {venue}</p>
      <p className="hackathon-team">Team Size: {teamSize}</p>
      <p className="hackathon-deadline">Registration Deadline: {deadline}</p>
    </div>
  );
};

export default HackathonCard;