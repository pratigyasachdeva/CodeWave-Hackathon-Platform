import React from 'react';
import '../styles/EventCard.css';

const EventCard = ({ title, date, description }) => {
  return (
    <div className="event-card">
      <h3>{title}</h3>
      <p><strong>Date:</strong> {date}</p>
      <p>{description}</p>
    </div>
  );
};

export default EventCard;