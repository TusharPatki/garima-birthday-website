import React from 'react';
import { Link } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col font-poppins">
      <nav className="bg-purple-600 text-white p-4">
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
      
      <main className="flex-grow">
        {children}
      </main>
      
      <footer className="bg-purple-600 text-white py-4">
        <div className="container mx-auto text-center">
          <p>Made with ❤️ for Garima's Birthday</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout; 