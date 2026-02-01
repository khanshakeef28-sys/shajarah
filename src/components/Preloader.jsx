// src/components/Preloader.jsx
import React, { useEffect, useState } from "react";

const Preloader = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Handler to hide preloader
    const handleLoad = () => {
      setIsLoaded(true);
    };

    // Check if the page is already loaded (for refresh/navigation edge cases)
    if (document.readyState === "complete") {
      handleLoad();
    } else {
      // Equivalent to jQuery(window).on('load', ...)
      window.addEventListener("load", handleLoad);
    }

    // Cleanup listener
    return () => window.removeEventListener("load", handleLoad);
  }, []);

  return (
    <div
      className={`fixed left-0 right-0 z-[99999] flex h-full w-full items-center justify-center bg-[#FFD700] transition-all duration-3000 ease-[cubic-bezier(0.86,0,0.09,1)] ${
        isLoaded ? "bottom-[-100%]" : "bottom-0"
      }`}
    >
      <div className="loader-grid">
        <div className="loader-dot"></div>
        <div className="loader-dot"></div>
        <div className="loader-dot"></div>
        <div className="loader-dot"></div>
      </div>
    </div>
  );
};

export default Preloader;