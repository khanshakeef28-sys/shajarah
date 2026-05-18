import { Link } from 'react-router-dom';
import { courses, womenPrograms } from '../data/courses';

const titleMap = { kids: 'Kids', teens: 'Teens', women: 'Women' };

function WomenProgramGroup({ group }) {
  return (
    <div>
      <h2 className="font-display text-xl md:text-2xl text-black mb-4">{group.title}</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {group.items.map((c) => (
          <Link
            key={c.slug}
            to={`/women/${c.slug}`}
            className="card p-4 md:p-6 hover:-translate-y-0.5 transition-transform"
          >
            <div className="font-display text-lg md:text-xl">{c.title}</div>
            <div className="text-sm md:text-base text-black/60 mt-2">Learn more or enroll</div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function Category({ category }) {
  if (category === 'women') {
    return (
      <section className="section">
        <div className="mb-6 md:mb-8">
          <h1 className="h1">Women</h1>
          <p className="text-sm md:text-base text-black/70">
            Explore our programs for women. Select any course to learn more or enroll.
          </p>
        </div>
        <div className="space-y-10">
          {womenPrograms.map((group) => (
            <WomenProgramGroup key={group.title} group={group} />
          ))}
        </div>
      </section>
    );
  }

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
            <div className="text-sm md:text-base text-black/60 mt-2">View details and enrollment info.</div>
          </Link>
        ))}
      </div>
    </section>
  );
}
