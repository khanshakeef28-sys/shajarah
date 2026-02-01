import React from 'react';

// --- IMPORTANT: Update these paths to where your images are stored ---
import ArabicDua from '../assets/Arabic dua.png';
import BalancedImage from '../assets/balanced.jpeg';

const HasanahSection = () => {
    // Use display on small screens, switch to calligraphic on larger screens with black color.
    const titleFontClass = "font-display md:font-callig text-black drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)]"; 

    return (
        // 1. Full-width container with background image, height, and padding
        <section 
            className="relative bg-cover bg-center bg-no-repeat py-20 md:py-32" 
            style={{ backgroundImage: `url(${BalancedImage})` }}
        >
            {/* 2. Dark Overlay for Readability (opacity 70%) */}
            <div className="absolute inset-0  opacity-70"></div>

            {/* 3. Content Container (relative, centered, above the overlay) */}
            <div className="relative container mx-auto px-4">
                <div className="md:grid md:grid-cols-12 md:gap-12 items-center">
                    
                    {/* LEFT COLUMN: Title and Description */}
                    <div className="md:col-span-7 mb-10 md:mb-0">
                        
                        {/* Title: Large, prominent */}
                        <h2 className={`text-5xl sm:text-6xl md:text-7xl ${titleFontClass} leading-tight mb-6`}>
                            HASANAH in Dunya and Akhira
                        </h2>

                        {/* Description/Inspiration: Lighter gray for hierarchy */}
                        <p className="mt-4 text-xl md:text-2xl text-black-300 max-w-3xl">
                            (inspired by the dua **(Surah Al-Baqarah 2:201 )** for goodness in both worlds, we help learners grow with Quran, character and clarity of purpose.)
                        </p>

                    </div>

                    {/* RIGHT COLUMN: Arabic Image */}
                    <div className="md:col-span-5 flex justify-center md:justify-end">
                        <div className="w-full max-w-sm p-4 ">
                            <img 
                                src={ArabicDua} 
                                alt="Arabic Dua Calligraphy" 
                                className="w-full h-auto object-contain"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HasanahSection;