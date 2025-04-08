import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './index.css';
import Hero from './components/Hero/Hero.js';
import PhotoCards from './components/PhotoCards/PhotoCards.js';
import Memes from './components/Memes/Memes.js';
import Playlist from './components/Playlist/Playlist.js';
import About from './pages/About.js';
import Privacy from './pages/Privacy.js';

function App() {
  const [showConfetti, setShowConfetti] = useState(true);
  
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 font-poppins">
        <header className="bg-purple-600 text-white p-4">
          <div className="container mx-auto flex justify-between items-center">
            <Link to="/" className="text-3xl font-chewy">
              🎉 Garima's Birthday
            </Link>
            <nav className="flex space-x-4">
              <Link to="/" className="hover:text-pink-200 transition-colors">
                Home
              </Link>
              <Link to="/about" className="hover:text-pink-200 transition-colors">
                About
              </Link>
              <Link to="/privacy" className="hover:text-pink-200 transition-colors">
                Privacy
              </Link>
            </nav>
          </div>
        </header>
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={
              <div className="space-y-16">
                <Hero showConfetti={showConfetti} setShowConfetti={setShowConfetti} />
                <PhotoCards />
                <Playlist />
                <Memes />
              </div>
            } />
            <Route path="/about" element={<About />} />
            <Route path="/privacy" element={<Privacy />} />
          </Routes>
        </main>
        
        <footer className="bg-purple-600 text-white py-4 mt-16">
          <div className="container mx-auto text-center">
            <p className="mb-2">Made with ❤️ for Garima's Birthday</p>
            <div className="text-4xl cursor-pointer" onClick={() => alert("You found a secret! Happy Birthday Garima! 🎂")}>🎂</div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
