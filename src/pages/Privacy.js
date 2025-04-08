import React from 'react';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-100 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-5xl font-chewy text-center text-purple-600 mb-8">
            Privacy Policy 🍪
          </h1>
          
          <div className="space-y-6 text-gray-700">
            <div className="p-4 bg-pink-50 rounded-lg">
              <p className="text-center text-pink-600 font-semibold">
                Warning: This privacy policy contains actual cookies (the edible kind) 🍪
              </p>
            </div>
            
            <h2 className="text-2xl font-chewy text-purple-600 mt-8">
              What We Collect
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Absolutely nothing! We're too busy eating cookies to collect data</li>
              <li>Your smiles (but only the virtual ones)</li>
              <li>The number of times you click the confetti button (because it's fun!)</li>
            </ul>
            
            <h2 className="text-2xl font-chewy text-purple-600 mt-8">
              Cookie Policy
            </h2>
            <p className="text-lg">
              We love cookies! Chocolate chip, oatmeal raisin, you name it! 
              But we don't use any digital cookies (except the ones you're eating 
              while reading this). 🍪
            </p>
            
            <h2 className="text-2xl font-chewy text-purple-600 mt-8">
              Data Storage
            </h2>
            <p className="text-lg">
              We store all our data in a magical birthday cake. 
              Just kidding! We don't store any data at all. 
              Your secrets are safe with us (mostly because we don't know any). 🤫
            </p>
            
            <h2 className="text-2xl font-chewy text-purple-600 mt-8">
              Third-Party Sharing
            </h2>
            <p className="text-lg">
              We only share your birthday wishes with the birthday fairy 
              (and maybe a few unicorns). 🦄
            </p>
            
            <div className="mt-8 p-4 bg-purple-50 rounded-lg">
              <p className="text-center text-purple-600 font-semibold">
                Remember: The only tracking we do is tracking down the last cookie! 🍪
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy; 