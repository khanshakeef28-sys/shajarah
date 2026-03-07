import MovingTestimonials from './MovingTestimonial';

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