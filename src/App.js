import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/App.css';

// Components
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Register from './pages/Register';
import GameDevHackDetail from './pages/GameDevHackDetail';
import AchievementsProfile from './pages/AchievementsProfile';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/gamedev-hack" element={<GameDevHackDetail />} />
         {/* New route */}
        <Route path="/achievements/:userId" element={<AchievementsProfile />} />
          
      </Routes>
    </Router>
  );
}

export default App;