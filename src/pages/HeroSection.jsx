import React, { useState, useEffect } from 'react';
// Make sure this path is correct for your project structure

import Quran from '../assets/Quran.jpg';
import QuranWithWOmen from '../assets/QuranwithWomen.jpg';
import QuranWithKid from '../assets/QuranKidMom.jpg';
import KidReciting from '../assets/KidReadingQuran.jpg';
import usePrefersReducedMotion from '../hooks/usePrefersReducedMotion';

const HeroSection = () => {
  // State to track the current background image
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const prefersReducedMotion = usePrefersReducedMotion();

  
  const backgroundImages = [
    Quran,
    QuranWithWOmen,
    QuranWithKid,
    KidReciting
  ];

  // Logic to rotate images every 5 seconds
  useEffect(() => {
    if (prefersReducedMotion) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [backgroundImages.length, prefersReducedMotion]);

  return (
    <div className="relative w-full h-screen overflow-hidden font-sans">

      {/* --- BACKGROUND SLIDER --- */}
      {backgroundImages.map((img, index) => (
        <img
          key={index}
          src={img}
          alt=""
          aria-hidden="true"
          className={`absolute inset-0 w-full h-full object-cover ${prefersReducedMotion ? '' : 'transition-opacity duration-1000 ease-in-out'}`}
          style={{ opacity: currentImageIndex === index ? 1 : 0 }}
        />
      ))}

      {/* --- DARK OVERLAY --- */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* --- CONTENT LAYER --- */}
      <div className="relative z-10 h-full flex flex-col">

        {/* 1. HERO MAIN TEXT & IMAGE */}
        <div className="flex-grow flex items-left container mx-auto px-6 md:px-12 mt-4">
          <div className="grid md:grid-cols-2 gap-12 w-full items-left">

  {/* LEFT COLUMN: Text and Button */}
  <div className="flex flex-col items-start justify-center text-left space-y-4">
      {/* Text Content Group */}
      <div className="space-y-6">
        <h1 className="text-5xl md:text-15xl max-w-xl items-center font-callig text-white leading-tight">
          Hasanah in Dunya and Aakhirah
        </h1>
        
        {/* Changed mx-auto to mx-0 to keep it left-aligned */}
        <p className="text-lg text-white/90 max-w-xl mx-0 font-display italic">
          Inspired by the dua <strong>(Surah Al-Baqarah 2:201)</strong> for goodness in both worlds, 
          we help learners grow with Quran, character, and clarity of purpose.
        </p>
      </div>
      <div className='Space-y-6' ></div>

      {/* Button */}
      <button className="bg-yellow text-black px-10 py-3 rounded-full font-bold transition-all transform hover:scale-105 shadow-xl">
      Join Our Community
     </button>
     <div className='Space-y-6' ></div>
      
    </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;