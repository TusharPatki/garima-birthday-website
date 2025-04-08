import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-pink-500 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-chewy">
          🎉 Garima's Birthday
        </Link>
        <div className="space-x-4">
          <Link to="/" className="hover:text-pink-200 transition-colors">
            Home
          </Link>
          <Link to="/about" className="hover:text-pink-200 transition-colors">
            About
          </Link>
          <Link to="/privacy" className="hover:text-pink-200 transition-colors">
            Privacy
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 