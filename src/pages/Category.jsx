import { Link } from 'react-router-dom';
import { courses } from '../data/courses';

const titleMap = { kids: 'Kids', teens: 'Teens', women: 'Women' };

export default function Category({ category }) {
  const list = courses[category] ?? [];
  return (
    <section className="section">
      <div className="mb-6 md:mb-8">
        <h1 className="h1">{titleMap[category]}</h1>
        <p className="text-sm md:text-base text-black/70">Choose a course to view details.</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {list.map((c) => (
          <Link key={c.slug} to={`/${category}/${c.slug}`} className="card p-4 md:p-6 hover:-translate-y-0.5">
            <div className="font-display text-lg md:text-xl">{c.title}</div>
            <div className="text-sm md:text-base text-black/60 mt-2">Content placeholder — add later.</div>
          </Link>
        ))}
      </div>
    </section>
  );
}


