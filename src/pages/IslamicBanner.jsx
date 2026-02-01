import React from 'react';

export default function IslamicCTABanner() {
  const handleWhatsAppClick = () => {
    // Replace with your WhatsApp community/group link
    const whatsappLink = "https://chat.whatsapp.com/YOUR_GROUP_INVITE_CODE";
    window.open(whatsappLink, '_blank');
  };

  const handleExploreCourses = () => {
    // Scroll to courses section or navigate to courses page
    document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' });
    // Or use: window.location.href = '/courses';
  };

  return (
    <section className="relative overflow-hidden bg-[#F5EEDC]/60 from-emerald-900 via-teal-800 to-cyan-900 py-16 px-4">
      <h2 className="sr-only">Join the Shajarah Academy community</h2>
      {/* Background Pattern/Image Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 flex items-center justify-center">
          <svg width="200" height="200" viewBox="0 0 200 200" className="text-black" aria-hidden="true">
            {/* Simplified Mizan/Balance Scale Icon */}
            <line x1="100" y1="40" x2="100" y2="160" stroke="currentColor" strokeWidth="3"/>
            <line x1="100" y1="60" x2="40" y2="80" stroke="currentColor" strokeWidth="2"/>
            <line x1="100" y1="60" x2="160" y2="80" stroke="currentColor" strokeWidth="2"/>
            <rect x="20" y="80" width="40" height="30" fill="none" stroke="currentColor" strokeWidth="2"/>
            <rect x="140" y="80" width="40" height="30" fill="none" stroke="currentColor" strokeWidth="2"/>
            <circle cx="100" cy="160" r="8" fill="currentColor"/>
          </svg>
        </div>
      </div>

      <div className="relative max-w-5xl mx-auto space-y-8">
        {/* Animated Arabic Text */}
        <div className="overflow-hidden bg-white/10 backdrop-blur-sm rounded-lg py-4 px-6">
          <div className="animate-scroll whitespace-nowrap">
            <p 
              className="inline-block text-2xl md:text-3xl text-black font-semibold px-8"
              dir="rtl" 
              lang="ar"
              style={{ fontFamily: "'Amiri', 'Noto Naskh Arabic', serif" }}
            >
              رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ
            </p>
            <p 
              className="inline-block text-2xl md:text-3xl text-black font-semibold px-8"
              dir="rtl" 
              lang="ar"
              style={{ fontFamily: "'Amiri', 'Noto Naskh Arabic', serif" }}
            >
              رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ
            </p>
          </div>
        </div>

        {/* Translation */}
        <div className="text-center">
          <p className="text-lg md:text-xl text-black/90 italic max-w-3xl mx-auto leading-relaxed">
            "Our Lord! Give us good in this world and good in the Hereafter, and defend us from the torment of the Fire!"
          </p>
          <p className="text-sm text-black/70 mt-2">(Surah Al-Baqarah 2:201)</p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <button
            onClick={handleExploreCourses}
            className="px-8 py-3 bg-white text-black font-semibold rounded-lg hover:bg-beige transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 w-full sm:w-auto"
          >
            Explore Our Courses
          </button>
          
          <button
            onClick={handleWhatsAppClick}
            className="px-8 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center gap-2 w-full sm:w-auto"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            Join Our Community
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}