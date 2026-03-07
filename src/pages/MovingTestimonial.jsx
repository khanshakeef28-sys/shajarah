import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Aisha",
    role: "Parent",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aisha",
    text: "My daughter has grown so much in her understanding of the Qur'an. The teachers are patient and caring.",
    rating: 5
  },
  {
    id: 2,
    name: "Arifa",
    role: "Student",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=arifa",
    text: "Learning Qa'idah here has been an amazing experience. The lessons are clear and easy to follow.",
    rating: 5
  },
  {
    id: 3,
    name: "Fatima",
    role: "Parent",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Fatima",
    text: "Excellent teaching methods and very supportive staff. Highly recommend Shajarah Academy!",
    rating: 5
  },
  {
    id: 4,
    name: "Ibrahim Ahmed",
    role: "Student",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ibrahim",
    text: "The Tajweed classes have improved my recitation significantly. Alhamdulillah!",
    rating: 5
  },
  {
    id: 5,
    name: "Maryam Khan",
    role: "Parent",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Maryam",
    text: "A wonderful learning environment for children. My son looks forward to every class.",
    rating: 5
  },
  {
    id: 6,
    name: "Omar Abdullah",
    role: "Student",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Omar",
    text: "The interactive lessons make learning enjoyable. I've memorized many Surahs thanks to the academy.",
    rating: 5
  }
];

const TestimonialCard = ({ testimonial }) => (
  <div className="card shrink-0 w-80 rounded-3xl bg-white p-6 mx-3">
    <div className="flex items-center mb-4">
      <div>
        <h3 className="font-semibold text-black">{testimonial.name}</h3>
        <p className="text-sm text-black/60">{testimonial.role}</p>
      </div>
    </div>
    
    <div className="flex mb-3">
      {[...Array(testimonial.rating)].map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-yellow text-yellow" />
      ))}
    </div>
    
    <p className="text-black/80 leading-relaxed">{testimonial.text}</p>
  </div>
);

export default function MovingTestimonials() {
  // Duplicate testimonials for infinite scroll effect
  const duplicatedTestimonials = [...testimonials, ...testimonials];
  return (
    <section className="section space-y-8 py-10 overflow-hidden">
      <div className="text-center space-y-3">
        <p className="text-sm font-semibold uppercase tracking-wide text-black/60">
          Testimonials
        </p>
        <h2 className="h2 text-black">What Our Students Say</h2>
        <p className="text-black/70 max-w-2xl mx-auto">
          Hear from our students and parents about their experience at Shajarah Academy.
        </p>
      </div>

      {/* Moving testimonials container */}
      <div className="relative overflow-hidden">
        <div className="flex flex-nowrap animate-scroll">
          {duplicatedTestimonials.map((testimonial, index) => (
            <TestimonialCard key={`${testimonial.id}-${index}`} testimonial={testimonial} />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 10s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}