import React from 'react';
import { Target, Eye, LucideAirplay } from 'lucide-react';
import usePrefersReducedMotion from '../hooks/usePrefersReducedMotion';

// 1. IMPORT YOUR VIDEO
import ShajarahVideo from '../assets/shajarah-vision.mp4'; 

const VisionMission = () => {
  const prefersReducedMotion = usePrefersReducedMotion();
  return (
    <section className="py-8 md:py-16 bg-beige/30">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* --- LEFT SIDE: MISSION & VISION --- */}
          <div className="bg-white/70 backdrop-blur rounded-2xl p-6 md:p-8 shadow-lg border border-white/60 space-y-8">
            {/* About */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <LucideAirplay className="text-olive" size={28} />
                <h2 className="text-2xl md:text-3xl font-display text-black">About Us</h2>
              </div>
              <p className="text-black/80 leading-relaxed text-base md:text-lg border-l-4 border-yellow pl-4">
                <span className="text-olive font-bold">Welcome to Shajarah.</span> Where Qur’anic learning meets real life—nurturing mindful parents, confident children, and faith-anchored families.
              </p>
            </div>

            {/* Vision */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Eye className="text-olive" size={28} />
                <h2 className="text-2xl md:text-3xl font-display text-black">Vision</h2>
              </div>
              <p className="text-black/80 leading-relaxed text-base md:text-lg border-l-4 border-yellow pl-4">
                To nurture a generation anchored in the Qur’an—where mothers find clarity in their parenting, children grow with love for the Book of Allah, and families build faith-centered homes.
              </p>
            </div>

            {/* Mission */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Target className="text-olive" size={28} />
                <h2 className="text-2xl md:text-3xl font-display text-black">Mission</h2>
              </div>
              <p className="text-black/80 leading-relaxed text-base md:text-lg border-l-4 border-yellow pl-4">
                At <span className="text-olive font-bold">Shajarah Academy</span>, we make Qur’anic learning a living part of everyday life—supporting parents, guiding children, and mentoring youth with clarity and compassion.
              </p>
            </div>
          </div>

          {/* --- RIGHT SIDE: LOCAL VIDEO PLAYER --- */}
          <div className="relative">
            {/* Design Accents */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-beige rounded-full -z-10"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-yellow/20 rounded-full -z-10"></div>

            <div className="rounded-2xl overflow-hidden shadow-xl border-8 border-white bg-black">
              <video 
              autoPlay={!prefersReducedMotion}
              loop
              muted
                controls 
                className="w-full h-full object-cover"
                poster="../assets/Quran.jpg" // Optional: Image shown before video plays
              >
                <source src={ShajarahVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default VisionMission;