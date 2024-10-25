// About.js
import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-center items-center">
      <div className="text-center max-w-xl mx-auto p-8">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">About Our Academy</h1>
        <p className="text-gray-700 text-lg mb-8">
          Welcome to our Trading Academy! We specialize in providing cutting-edge
          training and resources for those eager to learn the art of trading. With
          years of experience in the financial markets, we are committed to guiding
          you toward financial independence and success.
        </p>
        <div className="mt-8">
          <div className="bg-gray-100 shadow-lg rounded-lg p-6">
            <div className="flex justify-center">
              <img
                src="./ceo.jpg"
                alt="CEO"
                className="w-32 h-32 rounded-full object-cover border-4 border-blue-600"
              />
            </div>
            <h2 className="text-2xl font-bold text-blue-600 mt-4">Prince GNF</h2>
            <p className="text-gray-600 text-md mt-2">Founder & CEO</p>
            <p className="text-gray-600 mt-4">
              Prince GNF is a seasoned trader with over 4 years of experience. His
              passion for teaching and helping others succeed in the financial world
              is what drives our academy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
