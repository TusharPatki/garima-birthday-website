import React, { useState } from 'react';

// Import meme images
import doctorMeme from '../../assets/images/memes/Doctor.jpg';
import garimaCryingMeme from '../../assets/images/memes/garima crying.jpeg';
import garimaHappyMeme from '../../assets/images/memes/garima happy.jpeg';
import haanjiMeme from '../../assets/images/memes/haanji.jpg';
import managerSurpriseMeme from '../../assets/images/memes/Manager Surprise.jpg';
import newJobMeme from '../../assets/images/memes/new job.jpeg';
import thappadMeme from '../../assets/images/memes/thappad.jpeg';

// Updated memes array with correct image imports
const memes = [
  {
    id: 1,
    image: doctorMeme
  },
  {
    id: 2,
    image: garimaCryingMeme
  },
  {
    id: 3,
    image: garimaHappyMeme
  },
  {
    id: 4,
    image: haanjiMeme
  },
  {
    id: 5,
    image: managerSurpriseMeme
  },
  {
    id: 6,
    image: newJobMeme
  },
  {
    id: 7,
    image: thappadMeme
  }
];

const Memes = () => {
  const [selectedMeme, setSelectedMeme] = useState(null);

  return (
    <section className="py-16 bg-gradient-to-r from-pink-100 to-purple-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-chewy text-center mb-12 text-purple-600">
          Meme Gallery 😂
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {memes.map((meme) => (
            <div
              key={meme.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer hover:shadow-2xl transition-shadow duration-300 flex flex-col"
              onClick={() => setSelectedMeme(meme)}
            >
              <div className="h-64 flex items-center justify-center bg-gray-50 p-2">
                <img
                  src={meme.image}
                  alt={`Meme ${meme.id}`}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Popup modal for selected meme */}
      {selectedMeme && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedMeme(null)}
        >
          <div
            className="bg-white rounded-xl max-w-4xl w-full p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-center">
              <img
                src={selectedMeme.image}
                alt={`Meme ${selectedMeme.id}`}
                className="max-h-[70vh] rounded-lg"
              />
            </div>
            <div className="mt-4 flex justify-end">
              <button
                className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                onClick={() => setSelectedMeme(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Memes; 