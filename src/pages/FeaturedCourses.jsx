import { Card, CardBody } from '@heroui/react';
import React from 'react';
import { MagicBento, MagicBentoItem } from '../components/MagicBento';
//import { Users, Calendar } from 'lucide-react';

import KidReadingQuran from '../assets/QuaidaKids.jpg';
import QuranKidMom from '../assets/parenting.jpg';
import QuranWithWomen from '../assets/QuranwithWomen.jpg';
import SundayClass from '../assets/Sundayclass.jpg';

const featuredCourses = [
    {
      id: 1,
      image: QuranKidMom,
      title: "Parenting Transformation Program",
      courseName: "Parenting Transformation Program",
      keyPoints: "Reflective Parenting Journey",
      coursDetails: "A reflective parenting journey rooted in Qur’anic values, self-awareness, and conscious upbringing.",
      highlightGreenTitle: "Parenting",
      highlightGreenSubtitle: "Transformation Program",
      highlightWhiteTitle: "Parenting Transformation Program",
      highlightWhiteSubtitle: "A reflective parenting journey rooted in Qur’anic values, self-awareness, and conscious upbringing.",
      highlightYellowTop: "Guided | Reflective | Impactful",
      highlightYellowBottom: "Workshop-Based Learning",
      layoutClass: "lg:col-span-1"
    },
    {
      id: 2,
      image: SundayClass,
      title: "Sunday Kids Class",
      courseName: "Sunday Kids Class",
      keyPoints: "Every Sunday",
      coursDetails: "A consistent weekly circle nurturing faith, Manners, and Qur’anic connection in young hearts.",
      highlightGreenTitle: "hildren’s Islamic Program",
      highlightGreenSubtitle: "Children’s Islamic Program",
      highlightWhiteTitle: "Sunday Kids Class",
      highlightWhiteSubtitle: "A consistent weekly circle nurturing faith, Manners, and Qur’anic connection in young hearts.",
      highlightYellowTop: "Faith | Manners | Values",
      highlightYellowBottom: "Every Sunday",
      layoutClass: "lg:col-span-2"
    },
    {
      id: 3,
      image: QuranWithWomen,
      title: "Islamic Studies Program",
      courseName: "Islamic Studies Program",
      keyPoints: "Certified by Alhuda USA",
      coursDetails: "Islamic Studies Program. Diploma and certificate courses for structured Islamic learning.",
      highlightGreenTitle: "Alhuda Outreach",
      highlightGreenSubtitle: "Certified by Alhuda USA",
      highlightWhiteTitle: "Islamic Studies Program",
      highlightWhiteSubtitle: "Diploma and certificate courses for structured Islamic learning.",
      highlightYellowTop: "Diploma | Certificate",
      highlightYellowBottom: "Weekend Classes · 4.5 Years",
      layoutClass: "lg:col-span-1"
    },
    {
      id: 4,
      image: KidReadingQuran,
      title: "Qa’idah Nooraniyah",
      courseName: "Qa’idah Nooraniyah",
      keyPoints: "Foundational Qur’an Program",
      coursDetails: "Building strong foundations for correct pronunciation and confident Qur’an reading from the beginning.",
      highlightGreenTitle: "Qa’idah Nooraniyah",
      highlightGreenSubtitle: "Foundational Qur’an Program",
      highlightWhiteTitle: "Qa’idah Nooraniyah",
      highlightWhiteSubtitle: "Building strong foundations for correct pronunciation and confident Qur’an reading from the beginning.",
      highlightYellowTop: "Structured | Step-by-Step | Beginner Friendly",
      highlightYellowBottom: "Weekly Classes (2–3 Sessions)",
      layoutClass: "lg:col-span-2"
    }
  ];
const FeaturedCourses = () => {
  return (
    <section className="py-10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-black mb-4">Our Featured Courses</h2>
          <p className="text-gray-600">
            Deepen your understanding with our most popular structured learning paths.
          </p>
        </div>

        <MagicBento className="grid grid-cols-1 md:grid-cols-4 auto-rows-fr gap-8">
          {featuredCourses.map((course) => (
            <MagicBentoItem
              key={course.id}
              className="h-full"
              spotlightRadius={360}
              glowColor="255, 215, 0"
              enableTilt
            >
              <Card className="h-full shadow-lg border border-gray-100 bg-white text-center rounded-3xl overflow-hidden">
                <CardBody className="h-full overflow-hidden p-0 text-center">
                  <img
                    alt={course.title}
                    src={course.image}
                    className="w-full h-48 object-cover"
                  />
                  <div className="px-4 py-4 text-center space-y-2">
                    <h4 className="inline-block rounded-md bg-olive px-3 py-1 text-xs font-medium text-white text-center">
                      {course.courseName}
                    </h4>
                    <small className="block text-black/60 text-center">{course.keyPoints}</small>
                    {course.highlightWhiteSubtitle && (
                      <div className="w-full md:w-auto inline-block rounded-xl bg-beige/80 px-4 py-3 text-sm font-semibold text-black border border-black/10 border-l-4 border-l-yellow pl-4 shadow-sm ring-1 ring-black/5 text-center leading-relaxed">
                        {course.highlightWhiteSubtitle}
                      </div>
                    )}
                    {course.highlightYellowTop && (
                      <div className="mt-3 block mx-auto w-fit rounded-full bg-yellow/90 px-3 py-1 text-xs font-semibold text-black text-center">
                        {course.highlightYellowTop}
                      </div>
                    )}
                    {course.highlightYellowBottom && (
                      <div className="mt-3 block mx-auto w-fit rounded-full bg-yellow/90 px-3 py-1 text-xs font-semibold text-black text-center">
                        {course.highlightYellowBottom}
                      </div>
                    )}
                  </div>
                </CardBody>
              </Card>
            </MagicBentoItem>
          ))}
        </MagicBento>
      </div>
    </section>
  );
};

export default FeaturedCourses;