import MovingTestimonials from './MovingTestimonial';

import HeroSection from './HeroSection';
import MissionVision from './MissionVision';
import OurImpact from './OurImpact';
import FeaturedCourses from './FeaturedCourses';
import UpcomingEvents from './UpcomingEvents';

export default function Home() {
  return (
    <div className="space-y-2 ">
      <HeroSection />
      <MissionVision />
      <FeaturedCourses/>
      <UpcomingEvents />
      <OurImpact />
      <MovingTestimonials />
    </div>
  );
}