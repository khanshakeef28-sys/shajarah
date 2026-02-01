import { useParams, Link, useNavigate } from 'react-router-dom';
import { courses } from '../data/courses';
import { useMemo, useState } from 'react';
import Modal from '../components/Modal';

export default function CourseDetail() {
  const { category, courseSlug } = useParams();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const course = useMemo(() => {
    const list = courses[category] ?? [];
    return list.find((c) => c.slug === courseSlug);
  }, [category, courseSlug]);

  if (!course) {
    return (
      <section className="section">
        <h1 className="h1 mb-4">Course not found</h1>
        <Link to="/" className="btn btn-outline">Go to home page</Link>
      </section>
    );
  }

  return (
    <section className="section space-y-6">
      <h1 className="h1">{course.title}</h1>
      <div className="card p-6">
        <p className="text-black/80">Course content placeholder — you can add details here later.</p>
      </div>
      <div className="flex flex-col sm:flex-row gap-3">
        <button className="btn btn-outline" onClick={() => navigate('/')}>go to home page</button>
        <button className="btn btn-primary" onClick={() => setOpen(true)}>Connect us for enrollment</button>
      </div>

      <Modal open={open} onClose={() => setOpen(false)} titleId="enrollment-title">
        <div className="space-y-3">
          <div id="enrollment-title" className="h3">Contact Details</div>
          <div className="text-black/80">Academy Name: <span className="font-semibold">Shajarah Academy</span></div>
          <div className="text-black/80">Mobile Number: <span className="font-semibold">+91 8450997600</span></div>
        </div>
      </Modal>
    </section>
  );
}


