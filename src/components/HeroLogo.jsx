// HeroLogo.jsx
import React from 'react';
// Assuming your logo is in the public folder or assets
import logoImage from '../assets/Shajarahblacklogo.png'; 

const HeroLogo = ({ className = "w-full" }) => {
  return (
    <div className={className}>
      <img 
        src={logoImage} 
        alt="Shajarah Academy Logo" 
        className="w-full h-auto object-contain drop-shadow-2xl"
      />
    </div>
  );
};

export default HeroLogo;