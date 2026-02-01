import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const Founder = () => {
  const prefersReducedMotion = useReducedMotion();
  return (
    <div className="bg-white text-[#1A1A1A] font-display">
      
      {/* --- HERO SECTION --- */}
      <section className="bg-[#E3D8C6] py-20 px-6">
        <div className="container mx-auto text-center">
          <motion.span
            initial={prefersReducedMotion ? false : { opacity: 0 }}
            animate={prefersReducedMotion ? false : { opacity: 1 }}
            className="text-[#4A8522] font-semibold tracking-widest uppercase text-sm"
          >
            Our Beginning
          </motion.span>
          <motion.h1
            initial={prefersReducedMotion ? false : { y: 20, opacity: 0 }}
            animate={prefersReducedMotion ? false : { y: 0, opacity: 1 }}
            transition={prefersReducedMotion ? undefined : { delay: 0.2 }}
            className="text-5xl md:text-7xl font-callig mt-4 text-[#1A1A1A]"
          >
            The Visionary Behind <br/> <span className="text-[#4A8522]">Hasanah</span>
          </motion.h1>
        </div>
      </section>

      {/* --- FOUNDER BIOGRAPHY SECTION --- */}
      <section className="py-24 px-6 container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Founder Image Column */}
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, x: -30 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, x: 0 }}
            viewport={prefersReducedMotion ? undefined : { once: true }}
            className="lg:col-span-5 relative"
          >
            {/* Decorative Olive Box behind image */}
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-[#4A8522] rounded-2xl z-0"></div>
            <div className="relative z-10 bg-[#E3D8C6] rounded-2xl overflow-hidden shadow-2xl aspect-[4/5]">
               {/* Replace with actual founder image */}
               <img 
                 src="" 
                 alt="Founder portrait (placeholder)" 
                 className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
               />
            </div>
          </motion.div>

          {/* Founder Content Column */}
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, x: 30 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, x: 0 }}
            viewport={prefersReducedMotion ? undefined : { once: true }}
            className="lg:col-span-7"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 flex items-center">
              <span className="w-12 h-[2px] bg-[#4A8522] mr-4"></span>
              A Message from the Founder
            </h2>
            
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                In the pursuit of <span className="text-[#4A8522] font-bold">Hasanah</span>, we recognized a need for a bridge between ancient wisdom and modern clarity. Our journey began with a simple question: How can we live a life that flourishes in this world while remaining anchored in the next?
              </p>
              
              <p className="border-l-4 border-[#E3D8C6] pl-6 italic text-xl">
                "Our mission is to empower learners to find balance. Not through force, but through the gentle rhythm of Quranic guidance and character building."
              </p>

              <p>
                With over a decade of dedication to Islamic education, I envisioned a platform where 'Dunya and Akhira' aren't two separate paths, but one unified journey toward purpose. 
              </p>
            </div>

            {/* Social / Signature */}
            <div className="mt-10">
              <p className="font-callig text-3xl text-[#4A8522]">Founder Name</p>
              <p className="text-sm text-gray-500 uppercase tracking-tighter">Director & Lead Educator</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- CORE VALUES (OLIVE & BEIGE) --- */}
      <section className="bg-[#1A1A1A] text-white py-20 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            
            {[
              { title: "Quranic Clarity", desc: "Understanding the word of Allah as a living guide for daily life." },
              { title: "Character Growth", desc: "Developing the 'Akhlaq' that defines a true seeker of Hasanah." },
              { title: "Balanced Purpose", desc: "Succeeding in modern professions without losing spiritual focus." }
            ].map((value, idx) => (
              <motion.div
                key={idx}
                whileHover={prefersReducedMotion ? undefined : { y: -10 }}
                className="p-8 border border-white/10 rounded-xl hover:border-[#4A8522] transition-colors"
              >
                <div className="w-12 h-12 bg-[#4A8522] rounded-full flex items-center justify-center mx-auto mb-6 text-[#E3D8C6]">
                  {idx + 1}
                </div>
                <h3 className="text-2xl font-callig mb-4 text-[#E3D8C6]">{value.title}</h3>
                <p className="text-gray-400 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* --- CALL TO ACTION --- */}
      <section className="py-24 text-center">
        <h2 className="text-4xl font-callig mb-8">Join our community of seekers.</h2>
        <button className="bg-[#4A8522] hover:bg-[#3a6b1b] text-[#E3D8C6] px-10 py-4 rounded-full font-bold transition-all transform hover:scale-105 shadow-xl">
          Get Started Today
        </button>
      </section>

    </div>
  );
};

export default Founder;
