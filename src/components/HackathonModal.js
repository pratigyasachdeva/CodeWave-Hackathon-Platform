import React from 'react';
import '../styles/HackathonModal.css';

const HackathonModal = ({ hackathon, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>{hackathon.title}</h2>
        <p><strong>Date:</strong> {hackathon.date}</p>
        <p>{hackathon.description}</p>
        <button onClick={onClose}>Close</button>
        <button style={{ marginLeft: '10px' }}>Submit Project</button>
      </div>
    </div>
  );
};

export default HackathonModal;