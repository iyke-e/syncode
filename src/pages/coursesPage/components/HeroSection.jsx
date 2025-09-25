import React from 'react';

const HeroSection = () => {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-4">
              Learn from industry professionals with real-world experience.
            </h1>
          </div>
          <div className="lg:w-1/2 lg:pl-8">
            <p className="text-lg text-gray-600">
              Welcome to ACME Tech Training, where we turn your passion for
              technology into expertise. Our comprehensive training programs are
              designed to equip you with the skills needed to thrive in the
              digital age. Whether you're a beginner looking to break into the
              tech industry or a professional seeking to enhance your skill set.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
