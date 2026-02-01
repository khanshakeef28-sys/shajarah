//import { Users, Award, Globe, BookOpen } from 'lucide-react';

// import BlurText from "../components/BlurText";
// import SplitText from "../components/SplitText";
// import CountUp from "../components/CountUp";
import MovingTestimonials from './MovingTestimonial';
// import HighlightsOrientationGallery from './Hilights';
// import WhyChooseUs from './WhyToChooseUs';
// import VisionMission from './MissionVision';
// import HasanahSection from './HasanahSection';

import HeroSection from './HeroSection';
import MissionVision from './MissionVision';
import OurImpact from './OurImpact';
import FeaturedCourses from './FeaturedCourses'

export default function Home() {
  return (
    <div className="space-y-2 ">
      <HeroSection />
      <MissionVision />
      <FeaturedCourses/>
      <OurImpact />
      <MovingTestimonials />
    </div>
  );
}