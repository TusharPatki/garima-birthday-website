import React, { useState, useEffect } from 'react';
import Confetti from 'react-confetti';
import birthdayVideo from '../../assets/videos/birthday-video.mp4';

const Hero = ({ showConfetti, setShowConfetti }) => {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    
    const timer = setTimeout(() => {
      setShowConfetti(false);
    }, 5000);

    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timer);
    };
  }, [setShowConfetti]);

  return (
    <section className="relative py-16 min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-pink-400 to-purple-500 overflow-hidden">
      {showConfetti && (
        <Confetti
          width={dimensions.width}
          height={dimensions.height}
          recycle={false}
          numberOfPieces={200}
        />
      )}
      
      <div className="container mx-auto px-4 text-center z-10">
        <h1 className="text-5xl md:text-7xl font-chewy text-white mb-8 animate-bounce">
          Happy Birthday Garima! 🎉
        </h1>
        
        <div className="relative mx-auto max-w-3xl aspect-video bg-black rounded-lg overflow-hidden shadow-2xl">
          <video 
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src={birthdayVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        
        <button 
          onClick={() => setShowConfetti(true)} 
          className="mt-8 px-6 py-3 bg-white text-purple-600 rounded-full font-bold shadow-lg hover:bg-pink-100 transition-colors"
        >
          More Confetti! 🎊
        </button>
      </div>
    </section>
  );
};

export default Hero; 