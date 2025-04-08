import React, { useState } from 'react';

const Playlist = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  
  // Individual videos instead of playlist
  const videos = [
    { id: 'aYnrl1c1_U0', title: 'Song 1' },
    // You can add more videos from your playlist here
  ];
  const playlistLink = 'https://www.youtube.com/watch?v=aYnrl1c1_U0&list=PLpq9re_LDarqJLwIlfV-I3p4eIcbuvH7j';
  
  return (
    <section className="py-16 bg-gradient-to-r from-purple-100 to-pink-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-chewy text-center mb-8 text-purple-600">
          Birthday Playlist 🎵
        </h2>
        
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden">
          <div className="p-6 text-center">
            <p className="text-lg text-gray-700 mb-6">
              A special playlist I created just for you! Songs that remind me of our memories together.
            </p>
            
            {!isPlaying ? (
              <button 
                onClick={() => setIsPlaying(true)}
                className="px-6 py-3 bg-purple-600 text-white rounded-full font-bold shadow-lg hover:bg-purple-700 transition-colors"
              >
                Play Music 🎵
              </button>
            ) : (
              <div className="aspect-video w-full">
                <iframe 
                  className="w-full h-full rounded-lg shadow-lg"
                  src={`https://www.youtube.com/embed/${videos[0].id}`}
                  title="YouTube video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            )}
            
            {isPlaying && (
              <div className="mt-6">
                <button 
                  onClick={() => setIsPlaying(false)}
                  className="px-6 py-2 bg-pink-500 text-white rounded-full font-bold shadow-lg hover:bg-pink-600 transition-colors"
                >
                  Hide Player
                </button>
                <div className="mt-4 text-center">
                  <a 
                    href={playlistLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-6 py-2 bg-red-500 text-white rounded-full font-bold shadow-lg hover:bg-red-600 transition-colors inline-block"
                  >
                    Open Full Playlist on YouTube
                  </a>
                  <p className="mt-3 text-sm text-gray-500">
                    For the best experience, click the button above to view the complete playlist on YouTube
                  </p>
                </div>
              </div>
            )}
          </div>
          
          <div className="bg-purple-50 p-4">
            <p className="text-center text-purple-600 italic">
              "Music gives a soul to the universe, wings to the mind, flight to the imagination, and life to everything." — Plato
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Playlist; 