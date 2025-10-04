import React, { useState } from 'react';
import HackathonCard from '../components/HackathonCard';
import Chatbot from '../components/Chatbot';
import SidePanelProfile from '../components/SidePanelProfile';
import SearchBar from '../components/SearchBar';

const hackathons = [
  { id: 1, title: "AI Challenge", host: "Innovertex", venue: "IGDTUW", teamSize: "2-5", deadline: "Oct 5, 2025" },
  { id: 2, title: "Frontend Challenge", host: "CodeWave", venue: "Online", teamSize: "1-3", deadline: "Oct 6, 2025" },
  { id: 3, title: "Blockchain Hack", host: "TechLabs", venue: "IGDTUW", teamSize: "2-4", deadline: "Oct 7, 2025" },
  { id: 4, title: "Cyber Security Hack", host: "SecureIT", venue: "Online", teamSize: "2-5", deadline: "Oct 8, 2025" },
  { id: 5, title: "IoT Hack", host: "SmartTech", venue: "IGDTUW", teamSize: "2-4", deadline: "Oct 9, 2025" },
  { id: 6, title: "Game Dev Hack", host: "GameX", venue: "Online", teamSize: "1-4", deadline: "Oct 10, 2025" },
  { id: 7, title: "AR/VR Hack", host: "VisionTech", venue: "IGDTUW", teamSize: "2-5", deadline: "Oct 11, 2025" },
  { id: 8, title: "ML Challenge", host: "DataLab", venue: "Online", teamSize: "1-3", deadline: "Oct 12, 2025" },
];

// Sample data for Mentorship and Host panels
const mentorships = [
  { id: 1, title: "React Basics Mentorship", mentor: "Neha Aggarwal", date: "Oct 5, 2025" },
  { id: 2, title: "AI Model Mentorship", mentor: "Raj Sharma", date: "Oct 6, 2025" },
];

const hosts = [
  { id: 1, name: "Innovertex", eventsHosted: 5 },
  { id: 2, name: "CodeWave", eventsHosted: 3 },
];

const Home = () => {
  const [panelOpen, setPanelOpen] = useState(false);
  const [activePanel, setActivePanel] = useState("Hackathon"); // Default page

  return (
    <div style={{ padding: '20px', position: 'relative' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 style={{ flex: 1, textAlign: 'center', color: '#6c5ce7' }}>Innovertex 4.0</h1>
        
        {/* Profile Circle */}
        <div 
          style={{
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #6c5ce7, #a29bfe)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
            fontWeight: 'bold',
            fontSize: '1.2rem',
            cursor: 'pointer',
            zIndex: 2000,
            position: 'absolute',
            right: '20px',
            top: '20px'
          }}
          onClick={() => setPanelOpen(true)}
        >
          P
        </div>
      </div>

      {/* Top Panel above Search Bar */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '30px',
          marginTop: '20px',
        }}
      >
        {["Hackathon", "Mentorship", "Host"].map((item) => (
          <div key={item}
            onClick={() => setActivePanel(item)}
            style={{
              padding: '10px 20px',
              borderRadius: '25px',
              background: activePanel === item 
                          ? 'linear-gradient(135deg, #6c5ce7, #a29bfe)' 
                          : 'rgba(0,0,0,0.05)',
              color: activePanel === item ? 'white' : '#6c5ce7',
              fontWeight: '600',
              cursor: 'pointer',
              boxShadow: activePanel === item ? '0px 4px 10px rgba(0,0,0,0.1)' : 'none',
              transition: 'transform 0.2s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            {item}
          </div>
        ))}
      </div>

      {/* 🟣 Search Bar */}
      <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}>
        <SearchBar />
      </div>

      {/* Content based on Active Panel */}
      {activePanel === "Hackathon" && (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '60px',
            justifyItems: 'center',
            marginTop: '40px'
          }}
        >
          {hackathons.map((hack) => (
            <HackathonCard
              key={hack.id}
              id={hack.id}
              title={hack.title}
              host={hack.host}
              venue={hack.venue}
              teamSize={hack.teamSize}
              deadline={hack.deadline}
            />
          ))}
        </div>
      )}

      {activePanel === "Mentorship" && (
        <div style={{ marginTop: '40px', display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center' }}>
          {mentorships.map((m) => (
            <div key={m.id} style={{
              width: '250px',
              padding: '15px',
              borderRadius: '10px',
              background: '#fff',
              boxShadow: '0px 4px 10px rgba(0,0,0,0.1)',
              textAlign: 'center'
            }}>
              <h3>{m.title}</h3>
              <p>Mentor: {m.mentor}</p>
              <p>Date: {m.date}</p>
            </div>
          ))}
        </div>
      )}

      {activePanel === "Host" && (
        <div style={{ marginTop: '40px', display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center' }}>
          {hosts.map((h) => (
            <div key={h.id} style={{
              width: '200px',
              padding: '15px',
              borderRadius: '10px',
              background: '#fff',
              boxShadow: '0px 4px 10px rgba(0,0,0,0.1)',
              textAlign: 'center'
            }}>
              <h3>{h.name}</h3>
              <p>Events Hosted: {h.eventsHosted}</p>
            </div>
          ))}
        </div>
      )}

      {/* Chatbot */}
      <Chatbot />

      {/* Side Panel */}
      {panelOpen && <SidePanelProfile open={panelOpen} onClose={() => setPanelOpen(false)} />}
    </div>
  );
};

export default Home;