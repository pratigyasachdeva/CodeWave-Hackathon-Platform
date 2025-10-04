import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import GameDevHackDetail from './pages/GameDevHackDetail'; // New page import
import './styles/App.css';
import Register from './pages/Register';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/gamedev-hack" element={<GameDevHackDetail />} />
         {/* New route */}
          
      </Routes>
    </Router>
  );
}

export default App;