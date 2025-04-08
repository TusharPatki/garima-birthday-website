import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-100 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-5xl font-chewy text-center text-purple-600 mb-8">
            About the Creator 🎨
          </h1>
          
          <div className="space-y-6 text-gray-700">
            <p className="text-lg">
              Hi there! I'm the mastermind behind this fabulous birthday website. 
              Some say I'm a web developer, others say I'm a professional party planner 
              in disguise. I prefer to think of myself as a "digital birthday fairy" 🧚‍♀️
            </p>
            
            <h2 className="text-2xl font-chewy text-purple-600 mt-8">
              My Mission Statement
            </h2>
            <p className="text-lg">
              "To create the most epic birthday websites known to humankind, 
              one confetti animation at a time. Because everyone deserves 
              a virtual party that's as extra as they are!" 🎉
            </p>
            
            <h2 className="text-2xl font-chewy text-purple-600 mt-8">
              Fun Facts About Me
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>I can code and eat cake at the same time (multitasking at its finest!)</li>
              <li>My favorite debugging tool is a rubber duck named Sir Quacks-a-Lot</li>
              <li>I once tried to center a div with my mind (it didn't work)</li>
              <li>I believe in making the web a more fun place, one birthday at a time</li>
            </ul>
            
            <div className="mt-8 p-4 bg-purple-50 rounded-lg">
              <p className="text-center text-purple-600 font-semibold">
                "Life is too short for boring websites. Let's make it sparkle!" ✨
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 