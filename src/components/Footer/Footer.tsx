import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Footer: React.FC = () => {
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  const handleLogoClick = () => {
    setClickCount(prev => prev + 1);
    if (clickCount === 4) { // Show Easter egg after 5 clicks
      setShowEasterEgg(true);
      setClickCount(0);
    }
  };

  return (
    <footer className="bg-purple-600 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="cursor-pointer mb-4"
            onClick={handleLogoClick}
          >
            <span className="text-4xl">🎂</span>
          </motion.div>
          
          <p className="text-center mb-4">
            Made with ❤️ for Garima's Birthday
          </p>
          
          <div className="flex space-x-4">
            <a href="/about" className="hover:text-pink-200 transition-colors">
              About
            </a>
            <a href="/privacy" className="hover:text-pink-200 transition-colors">
              Privacy
            </a>
          </div>
        </div>

        <AnimatePresence>
          {showEasterEgg && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
              onClick={() => setShowEasterEgg(false)}
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                className="bg-white rounded-xl p-8 max-w-md text-center"
                onClick={(e) => e.stopPropagation()}
              >
                <h3 className="text-2xl font-chewy text-purple-600 mb-4">
                  🎉 You found the Easter Egg! 🎉
                </h3>
                <p className="text-gray-700 mb-4">
                  Congratulations! You've discovered the secret birthday message!
                </p>
                <p className="text-purple-600 font-semibold">
                  Wishing Garima the happiest birthday ever! 🎂✨
                </p>
                <button
                  className="mt-4 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                  onClick={() => setShowEasterEgg(false)}
                >
                  Close
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </footer>
  );
};

export default Footer; 