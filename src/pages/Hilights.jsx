import React from 'react';
import { Award, Clock, Users } from 'lucide-react';

 const highlights = [
  {
    icon: Award,
    title: "Certified Courses"
  },
  {
    icon: Clock,
    title: "Self-Paced Learning"
  },
  {
    icon: Users,
    title: "Experienced Instructors"
  }
];

const galleryImages = [
  "https://images.unsplash.com/photo-1585036156171-384164a8c675?w=800",
  "https://images.unsplash.com/photo-1542816417-0983c9c9ad53?w=500",
  "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=500",
  "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=500",
  "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=500"
];

export default function HighlightsOrientationGallery() {
  return (
    <section className="py-16 bg-[#F5F5DC]">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Left Side - Highlights */}
          <div>
            <h2 className="text-5xl font-serif mb-12 text-gray-900">
              Highlights
            </h2>
            
            <div className="flex gap-8">
              {highlights.map((highlight, index) => {
                const Icon = highlight.icon;
                return (
                  <div 
                    key={index}
                    className="flex flex-col items-center text-center"
                  >
                    <div className="w-24 h-24 rounded-full border-2 border-gray-300 flex items-center justify-center mb-4 bg-white">
                      <Icon className="w-10 h-10 text-gray-800" strokeWidth={1.5} />
                    </div>
                    <p className="text-gray-900 font-medium max-w-[120px] leading-snug">
                      {highlight.title}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Side - Orientation & Gallery */}
          <div className="space-y-8">
            
            {/* Orientation Session */}
            <div className="bg-[#E8DCC8] rounded-2xl px-8 py-4 inline-block">
              <p className="text-gray-900 text-lg">
                Orientation Session – Nov 2, 3:30 PM
              </p>
            </div>

            {/* Gallery */}
            <div>
              <h2 className="text-5xl font-serif mb-8 text-gray-900">
                Gallery
              </h2>
              
              <div className="grid grid-cols-2 gap-4">
                {/* First large image */}
                <div className="col-span-2 rounded-2xl overflow-hidden shadow-lg">
                  <img 
                    src={galleryImages[0]}
                    alt="Gallery image 1"
                    className="w-full h-64 object-cover"
                  />
                </div>
                
                {/* Remaining smaller images */}
                {galleryImages.slice(1).map((image, index) => (
                  <div 
                    key={index + 1}
                    className="rounded-2xl overflow-hidden shadow-lg"
                  >
                    <img 
                      src={image}
                      alt={`Gallery image ${index + 2}`}
                      className="w-full h-40 object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}