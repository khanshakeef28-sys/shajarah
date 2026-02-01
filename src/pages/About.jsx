import QuranWithWomen from "../assets/QuranwithWomen.jpg";

export default function About() {
  return (
    <section className="section space-y-12 py-8 md:py-12">
      <div className="grid gap-8 lg:grid-cols-[280px,1fr] lg:items-start">
        <div className="sketch-frame">
          <img
            src={QuranWithWomen}
            alt="Kahkashan Altamash, Founder & Lead Instructor"
            className="sketch-photo"
          />
          <div className="mt-4 text-center">
            <div className="text-base font-semibold text-black">Kahkashan Altamash</div>
            <div className="text-xs uppercase tracking-wide text-black/60">
              Founder & Lead Instructor
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-wide text-black/60">
            About Shajarah Academy
          </p>
          <h1 className="h1">
            From roots of knowledge to fruits of action
          </h1>
          <p className="max-w-3xl text-black/80">
            Kahkashan Altamash was born and raised in India and her path beautifully weaves
            academic learning with Islamic knowledge. After studying Biotechnology and
            Microbiology and teaching at the PhD level, her calling became the Qur'an.
            Shajarah Academy was founded to help families build a living connection to the
            Book of Allah, so that faith, character, and purposeful learning grow together.
          </p>
          <div className="flex flex-wrap gap-3 text-sm">
            <span className="rounded-full bg-yellow/90 px-3 py-1 font-semibold text-black">
              Women · Teens · Children
            </span>
            <span className="rounded-full bg-yellow/90 px-3 py-1 font-semibold text-black">
              Balanced Deen & Dunya
            </span>
            <span className="rounded-full bg-yellow/90 px-3 py-1 font-semibold text-black">
              Qur'an-Centered Learning
            </span>
          </div>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold text-black">Mission</h2>
          <p className="mt-3 text-black/80">
            To make Qur'anic learning a living part of everyday life—supporting parents,
            guiding children, and mentoring youth with a balanced model of faith and
            modern knowledge that strengthens identity and values.
          </p>
        </div>
        <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold text-black">Vision</h2>
          <p className="mt-3 text-black/80">
            To nurture a generation anchored in the Qur'an—where mothers find clarity in
            parenting, children grow with love for the Book of Allah, and youth flourish
            into confident Muslims carrying this legacy forward.
          </p>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold text-black">Founder’s Journey</h2>
          <p className="mt-3 text-black/80">
            Kahkashan is an educator, mentor, and community builder with 10+ years of
            teaching and guiding. She serves as Chapter Head (Nagpur) for Alhuda Outreach
            India and has participated in community intellectual meets and jury panels.
          </p>
          <div className="mt-4 space-y-2 text-sm text-black/70">
            <div className="font-semibold text-black">Academic Education</div>
            <ul className="list-disc pl-5 space-y-1">
              <li>M.Sc. Biotechnology, Nagpur University (2009)</li>
              <li>Post-Master’s Diploma in Nanotechnology, Karnataka (2010)</li>
              <li>Former Ph.D. student, Water Technology research (2010–2011)</li>
              <li>B.Ed. (Bachelor of Education), 2014</li>
            </ul>
          </div>
        </div>

        <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold text-black">Islamic Studies</h2>
          <p className="mt-3 text-black/80">
            Her Islamic education includes advanced Tajweed, Qirā'ah, Arabic grammar, and
            Islamic sciences, with studies under scholars from India, Saudi Arabia, Sri
            Lanka, the US, UK, Canada, Pakistan, and beyond.
          </p>
          <ul className="mt-4 list-disc pl-5 space-y-1 text-sm text-black/70">
            <li>Qira'ah completion: Ḥafṣ and Shu'bah 'an 'Āṣim</li>
            <li>Recitation Khatmah (Hafs) – Dar Al Khair</li>
            <li>Certified Qa'idah Nooraniyah Trainer – Furqaan Center, Jeddah</li>
            <li>Ijazah in Muqaddimat al-Jazariyyah</li>
            <li>Ijazah in listening "Akhlaq Ahl al-Qur'an"</li>
          </ul>
        </div>
      </div>

      <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-semibold text-black">Impact & Reach</h2>
        <p className="mt-3 text-black/80">
          Shajarah Academy nurtures learners across India, UAE, the UK, and beyond through
          Qur'an-focused programs for children, teens, and adults—rooted in authentic
          knowledge, warm mentorship, and a balanced approach to life.
        </p>
        <div className="mt-4 flex flex-wrap gap-3 text-sm">
          <span className="rounded-full bg-yellow/90 px-3 py-1 font-semibold text-black">
            500+ learners nurtured
          </span>
          <span className="rounded-full bg-yellow/90 px-3 py-1 font-semibold text-black">
            200+ Qa'idah completions
          </span>
          <span className="rounded-full bg-yellow/90 px-3 py-1 font-semibold text-black">
            50+ workshops & webinars
          </span>
        </div>
      </div>
    </section>
  );
}


