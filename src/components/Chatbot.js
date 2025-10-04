import React from 'react';
import '../styles/Chatbot.css';

const Chatbot = () => {
  return (
    <div 
      className="chatbot-button"
      onClick={() => alert('Chatbot coming soon! 🤖')}
    >
      🤖
    </div>
  );
};

export default Chatbot;