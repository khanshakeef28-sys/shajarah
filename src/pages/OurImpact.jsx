// import React from 'react';

// const OurImpact = () => {
//     return (
// <section className="bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-left mb-6 md:mb-10">
//             <SplitText
//               text="Our Impact!"
//               className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4"
//               delay={100}
//               duration={0.6}
//               ease="power3.out"
//               splitType="chars"
//               from={{ opacity: 0, y: 40 }}
//               to={{ opacity: 1, y: 0 }}
//               threshold={0.1}
//               rootMargin="-100px"
//             />

//             <BlurText
//               text="Transforming lives through education and faith"
//               delay={100}
//               animateBy="words"
//               direction="top"
//               className="text-stone-1000 text-base md:text-lg"
//               startDelay={2500} // Start after SplitText completes
//             />
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">

//             <div className="flex-shrink-0 bg-[#F5EEDC]/50 rounded-xl p-4 md:p-6 lg:p-8 text-center shadow-lg border-2 border-gray-200 transition-all hover:scale-105">
//               <Users className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-black mx-auto mb-3 md:mb-4" />
//               <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-2">
//                 <CountUp
//                   from={0}
//                   to={500}
//                   separator=","
//                   direction="up"
//                   duration={1}
//                   className="count-up-text text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-2"
//                 /><span>+</span>
//               </div>
//               <p className="text-sm md:text-base text-black">Learners nurtured through Qur'anic programs</p>
//             </div>

//             <div className="flex-shrink-0 bg-white-100 rounded-xl p-4 md:p-6 lg:p-8 text-center shadow-lg border-2 border-gray-200 transition-all hover:scale-105">
//               <Award className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-black mx-auto mb-3 md:mb-4" />
//               <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-2">
//                 <CountUp
//                   from={0}
//                   to={200}
//                   separator=","
//                   direction="up"
//                   duration={1}
//                   className="count-up-text text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-2"
//                 /><span>+</span>
//               </div>
//               <p className="text-sm md:text-base text-black">Students successfully completed Qa'idah</p>
//             </div>
//             <div className="flex-shrink-0 bg-white-100 rounded-xl p-4 md:p-6 lg:p-8 text-center shadow-lg border-2 border-gray-200 transition-all hover:scale-105">
//               <Globe className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-black mx-auto mb-3 md:mb-4" />
//               <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-2">
//                 <CountUp
//                   from={0}
//                   to={3}
//                   separator=","
//                   direction="up"
//                   duration={1}
//                   className="count-up-text text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-2" />
//                 <span>+</span>
//               </div>
//               <p className="text-sm md:text-base text-black">Countries: Learners from India, UAE, UK & beyond</p>
//             </div>

//             <div className="flex-shrink-0 bg-white-100 rounded-xl p-4 md:p-6 lg:p-8 text-center shadow-lg border-2 border-gray-200 transition-all hover:scale-105">
//               <BookOpen className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-black mx-auto mb-3 md:mb-4" />
//               <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-2">
//                 <CountUp
//                   from={0}
//                   to={50}
//                   separator=","
//                   direction="up"
//                   duration={1}
//                   className="count-up-text text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-2"
//                 /><span>+</span>
//               </div>
//               <p className="text-sm md:text-base text-black">Workshops and webinars conducted</p>
//             </div>
//           </div>
//         </div>
//       </section>
//     );
// };

// export default OurImpact;

import React from 'react';
import { Users, Award, Globe, BookOpen } from 'lucide-react';
// Assuming SplitText, BlurText, and CountUp are your custom animation components
import CountUp from '../components/CountUp';

const OurImpact = () => {
  return (
    <section className="">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
         
            <div className="text-black">
             <h2 className="text-4xl md:text-5xl lg:text-6xl font-callig mb-4">Our Impact!</h2>
             <p className="text-lg md:text-xl font-medium">Transforming lives through education and faith</p>
          </div>
          
          {/* <div className="text-black/70">
           
          </div> */}
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          
          {/* Card 1 */}
          <div className="group bg-white/50 backdrop-blur-sm rounded-2xl p-8 text-center shadow-sm border border-black/5 transition-all hover:bg-olive hover:shadow-xl hover:-translate-y-2 duration-300">
            <Users className="w-12 h-12 text-olive group-hover:text-yellow mx-auto mb-4 transition-colors" />
            <div className="text-4xl md:text-5xl font-bold text-black group-hover:text-white mb-2 flex justify-center items-center">
              <CountUp to={500} duration={5} />
              <span>+</span>
            </div>
            <p className="text-sm md:text-base text-black/60 group-hover:text-white/90 font-medium">
              Learners nurtured through Qur'anic programs
            </p>
          </div>

          {/* Card 2 */}
          <div className="group bg-white/50 backdrop-blur-sm rounded-2xl p-8 text-center shadow-sm border border-black/5 transition-all hover:bg-olive hover:shadow-xl hover:-translate-y-2 duration-300">
            <Award className="w-12 h-12 text-olive group-hover:text-yellow mx-auto mb-4 transition-colors" />
            <div className="text-4xl md:text-5xl font-bold text-black group-hover:text-white mb-2 flex justify-center items-center">
              <CountUp to={200} duration={5} />
              <span>+</span>
            </div>
            <p className="text-sm md:text-base text-black/60 group-hover:text-white/90 font-medium">
              Students successfully completed Qa'idah
            </p>
          </div>

          {/* Card 3 */}
          <div className="group bg-white/50 backdrop-blur-sm rounded-2xl p-8 text-center shadow-sm border border-black/5 transition-all hover:bg-olive hover:shadow-xl hover:-translate-y-2 duration-300">
            <Globe className="w-12 h-12 text-olive group-hover:text-yellow mx-auto mb-4 transition-colors" />
            <div className="text-4xl md:text-5xl font-bold text-black group-hover:text-white mb-2 flex justify-center items-center">
              <CountUp to={3} duration={1} />
              <span>+</span>
            </div>
            <p className="text-sm md:text-base text-black/60 group-hover:text-white/90 font-medium">
              Countries: India & beyond
            </p>
          </div>

          {/* Card 4 */}
          <div className="group bg-white/50 backdrop-blur-sm rounded-2xl p-8 text-center shadow-sm border border-black/5 transition-all hover:bg-olive hover:shadow-xl hover:-translate-y-2 duration-300">
            <BookOpen className="w-12 h-12 text-olive group-hover:text-yellow mx-auto mb-4 transition-colors" />
            <div className="text-4xl md:text-5xl font-bold text-black group-hover:text-white mb-2 flex justify-center items-center">
              <CountUp to={50} duration={5} />
              <span>+</span>
            </div>
            <p className="text-sm md:text-base text-black/60 group-hover:text-white/90 font-medium">
              Workshops and webinars conducted
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default OurImpact;