import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 font-poppins">
        <header className="bg-purple-600 text-white p-4">
          <div className="container mx-auto">
            <h1 className="text-3xl font-chewy">🎉 Happy Birthday Garima!</h1>
          </div>
        </header>
        <main className="container mx-auto px-4 py-8">
          <h2 className="text-4xl text-center text-purple-600 font-chewy mb-8">
            Welcome to Your Special Day! 🎂
          </h2>
          <p className="text-center text-xl text-gray-700">
            A website made with love for your birthday celebration!
          </p>
        </main>
      </div>
    </Router>
  );
}

export default App; 