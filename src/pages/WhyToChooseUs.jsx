import React from 'react';
import { BookOpen, Heart, Users, Star, BookMarked, Sparkles } from 'lucide-react';

const reasons = [
  {
    icon: BookOpen,
    title: "Authentic Knowledge",
    description: "Every course is based on reliable and scholarly Islamic sources, ensuring students receive true and trustworthy understanding of Deen."
  },
  {
    icon: Users,
    title: "Experienced & Passionate Teachers",
    description: "Our teachers, led by the founder herself, have years of experience in teaching Tajweed, Tafseer, and Islamic studies with sincerity and care."
  },
  {
    icon: Star,
    title: "Balanced Approach",
    description: "We help students grow spiritually while also preparing them to live confidently in the modern world — beautifully balancing Deen and Dunya."
  },
  {
    icon: Heart,
    title: "Heartfelt Connection",
    description: "We believe learning is most effective when teachers and students share a genuine bond. Our classes are filled with warmth, compassion, and encouragement."
  },
  {
    icon: BookMarked,
    title: "Comprehensive Courses",
    description: "From Qa'idah Nooraniyah to Tafheem-ul-Qur'an, Tajweed, Grammar, and Sunday Kids' Classes, our programs are designed for every age and level."
  },
  {
    icon: Sparkles,
    title: "A Vision for the Future",
    description: "We work to empower the young generation, connecting them to the Qur'an and helping them become ambassadors of faith, character, and knowledge."
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-gradient-to-br from-white via-green-50/30 to-blue-50/30">
      <div className="container mx-auto px-4">
        
        {/* Main Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-green-600 via-emerald-600 to-blue-600 bg-clip-text text-transparent">
              Why Choose Us?
            </span>
          </h2>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Left Side - Paragraph */}
          <div className="relative h-[500px] flex items-center">
            <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-green-500 to-blue-500 rounded-full opacity-50"></div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-green-100 w-full">
              <div className="mb-6">
                <div className="inline-block p-3 bg-gradient-to-br from-green-100 to-blue-100 rounded-lg mb-4">
                  <Heart className="w-8 h-8 text-green-600" />
                </div>
              </div>
              
              <p className="text-lg md:text-xl leading-relaxed text-gray-800 font-medium">
                At <span className="text-green-600 font-bold">Shajarah Academy</span>, we believe that Islamic education should touch both the{' '}
                <span className="text-green-600 font-semibold italic">heart</span> and the{' '}
                <span className="text-blue-600 font-semibold italic">mind</span>.
              </p>
              
              <p className="text-lg md:text-xl leading-relaxed text-gray-700 mt-6">
                Our goal is not just to teach — but to{' '}
                <span className="font-semibold text-emerald-600">inspire</span>,{' '}
                <span className="font-semibold text-emerald-600">nurture</span>, and{' '}
                <span className="font-semibold text-emerald-600">guide</span>{' '}
                every student towards a deeper connection with the Qur'an and the teachings of Islam.
              </p>

              <div className="mt-8 pt-6 border-t border-green-100">
                <p className="text-base text-gray-600 italic">
                  "Education is not just knowledge — it's transformation of the soul."
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Scrollable Pointers */}
          <div className="relative h-[500px]">
            <div className="h-full overflow-y-auto pr-2 scrollbar-custom space-y-5">
              {reasons.map((reason, index) => {
                const Icon = reason.icon;
                return (
                  <div 
                    key={index}
                    className="group bg-white rounded-xl p-6 shadow-lg border-2 border-transparent hover:border-green-400 transition-all duration-300 hover:shadow-xl"
                  >
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-blue-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Icon className="w-6 h-6 text-green-600" />
                        </div>
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-olive-600 transition-colors">
                          {reason.title}
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                          {reason.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            
            {/* Scroll indicator */}
            <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white/90 to-transparent pointer-events-none flex items-end justify-center pb-2">
              <div className="text-gray-400 text-sm animate-bounce">↓ Scroll for more</div>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        .scrollbar-custom::-webkit-scrollbar {
          width: 8px;
        }
        
        .scrollbar-custom::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
        
        .scrollbar-custom::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #059669, #2563eb);
          border-radius: 10px;
        }
        
        .scrollbar-custom::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #047857, #1d4ed8);
        }
      `}</style>
    </section>
  );
}