import React from 'react';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-black to-gray-700 pt-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
               <span className="text-indigo-600">Hi, I'm Shibiraj</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Aspiring Developer & Cybersecurity Enthusiast
            </p>
            <a
              href="#portfolio"
              className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors"
            >
              View My Work
              <ChevronRight className="ml-2" size={20} />
            </a>
          </div>
          <div className="md:w-1/2 mt-12 md:mt-0">
  <img
    src="./dist/assets/profile.jpeg"
    alt="Shibiraj R."
    className="rounded-full w-64 h-64 md:w-96 md:h-96 object-cover mx-auto shadow-2xl"
  />
</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;