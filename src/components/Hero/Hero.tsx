import React, { useState, useEffect } from 'react';
import Confetti from 'react-confetti';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowConfetti(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-pink-400 to-purple-500 overflow-hidden">
      {showConfetti && (
        <Confetti
          width={windowSize.width}
          height={windowSize.height}
          recycle={false}
          numberOfPieces={500}
        />
      )}
      
      <div className="text-center z-10">
        <motion.h1 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-6xl md:text-8xl font-chewy text-white mb-8"
        >
          Happy Birthday Garima! 🎉
        </motion.h1>
        
        <div className="relative w-full max-w-4xl mx-auto aspect-video bg-black/20 rounded-lg overflow-hidden">
          {/* Video placeholder - replace with actual video later */}
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-white text-xl">Video Coming Soon!</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 