import { useParams, Link, useNavigate } from 'react-router-dom';
import { courses, findWomenCourse } from '../data/courses';
import { useMemo } from 'react';
import { Mail, MapPin, Phone, Globe } from 'lucide-react';
import {
  EMAIL,
  LOCATION,
  PHONE_DISPLAY,
  PHONE_TEL,
  WEBSITE_DISPLAY,
  WEBSITE_URL,
} from '../constants/contact';

export default function CourseDetail() {
  const { category, courseSlug } = useParams();
  const navigate = useNavigate();

  const course = useMemo(() => {
    if (category === 'women') {
      return findWomenCourse(courseSlug);
    }
    const list = courses[category] ?? [];
    return list.find((c) => c.slug === courseSlug);
  }, [category, courseSlug]);

  if (!course) {
    return (
      <section className="section">
        <h1 className="h1 mb-4">Course not found</h1>
        <Link to="/" className="btn btn-outline">
          Go to home page
        </Link>
      </section>
    );
  }

  if (category === 'women') {
    return (
      <section className="section space-y-8 max-w-3xl">
        {course.group && (
          <p className="text-sm font-semibold uppercase tracking-wide text-black/50">
            {course.group}
          </p>
        )}
        <h1 className="h1">{course.title}</h1>

        <DetailCard>
          <p className="text-black/80 leading-relaxed">
            If you would like to know more about this program or wish to enroll, please
            contact us. Our team at Shajarah Academy will guide you to the right class,
            schedule, and learning path.
          </p>
        </DetailCard>

        <DetailCard>
          <h2 className="text-lg font-semibold text-black mb-4">Contact Shajarah Academy</h2>
          <ul className="space-y-4 text-black/80">
            <li className="flex items-start gap-3">
              <Phone size={20} className="mt-0.5 shrink-0 text-olive" aria-hidden />
              <a href={`tel:${PHONE_TEL}`} className="hover:text-olive transition-colors">
                {PHONE_DISPLAY}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Mail size={20} className="mt-0.5 shrink-0 text-olive" aria-hidden />
              <a href={`mailto:${EMAIL}`} className="hover:text-olive transition-colors break-all">
                {EMAIL}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Globe size={20} className="mt-0.5 shrink-0 text-olive" aria-hidden />
              <a
                href={WEBSITE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-olive transition-colors"
              >
                {WEBSITE_DISPLAY}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin size={20} className="mt-0.5 shrink-0 text-olive" aria-hidden />
              <span>{LOCATION}</span>
            </li>
          </ul>
        </DetailCard>

        <DetailCard>
          <p className="text-sm text-black/60">
            You can also reach us through the{' '}
            <Link to="/contact" className="text-olive underline underline-offset-2">
              Contact us
            </Link>{' '}
            page or message us on social media @shajarahseekers.
          </p>
        </DetailCard>

        <div className="flex flex-col sm:flex-row gap-3">
          <button type="button" className="btn btn-outline" onClick={() => navigate('/')}>
            Go to home page
          </button>
          <Link to="/women" className="btn btn-primary text-center">
            View all programs
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="section space-y-6">
      <h1 className="h1">{course.title}</h1>
      <DetailCard>
        <p className="text-black/80">Course content placeholder — you can add details here later.</p>
      </DetailCard>
      <div className="flex flex-col sm:flex-row gap-3">
        <button type="button" className="btn btn-outline" onClick={() => navigate('/')}>
          Go to home page
        </button>
        <Link to="/contact" className="btn btn-primary text-center">
          Connect us for enrollment
        </Link>
      </div>
    </section>
  );
}

function DetailCard({ children }) {
  return <div className="card p-6 md:p-8">{children}</div>;
}
