import React from 'react';
import {
  BookOpen,
  Link2,
  SpellCheck,
  BookText,
  CheckCircle,
  CalendarDays,
  GraduationCap,
  Sparkles
} from 'lucide-react';
import { MagicBento, MagicBentoItem } from '../components/MagicBento';
import { Link } from 'react-router-dom';

const KidsQaidaToQuran = () => {
  return (
    <section className="section space-y-10 py-10">
      <div className="space-y-4">
        <div className="space-y-2">
          <h1 className="h1">Qa’idah to Quran Journey</h1>
          <div className="max-w-3xl rounded-2xl border border-black/10 bg-white/60 p-4 text-sm text-black/70 shadow-sm">
            A structured online program for ages 5-15 that builds strong foundations in Arabic
            reading and leads children to confident Quran recitation.
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <span className="rounded-full bg-beige/80 px-3 py-1 text-xs font-semibold text-black">
            Ages 5-15
          </span>
          <span className="rounded-full bg-beige/80 px-3 py-1 text-xs font-semibold text-black">
            4 days/week
          </span>
          <span className="rounded-full bg-beige/80 px-3 py-1 text-xs font-semibold text-black">
            Online classes
          </span>
          <span className="rounded-full bg-beige/80 px-3 py-1 text-xs font-semibold text-black">
            Beginner-friendly
          </span>
        </div>
      </div>

      <MagicBento className="grid gap-6 md:grid-cols-2">
        <MagicBentoItem spotlightRadius={320} glowColor="255, 215, 0" enableTilt>
          <div className="card p-6 space-y-4 text-center">
            <div className="mx-auto inline-flex items-center justify-center rounded-full bg-olive/10 p-3 text-olive">
              <BookOpen size={22} />
            </div>
            <h2 className="h2 text-center">Who It's For</h2>
            <p className="text-black/80">
              Designed for ages 5-15, from complete beginners to readers who need a confident reset.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <span className="rounded-full bg-beige/80 px-3 py-1 text-xs font-semibold text-black">
                Ages 5-15
              </span>
              <span className="rounded-full bg-beige/80 px-3 py-1 text-xs font-semibold text-black">
                No prerequisites
              </span>
              <span className="rounded-full bg-beige/80 px-3 py-1 text-xs font-semibold text-black">
                Online guidance
              </span>
            </div>
          </div>
        </MagicBentoItem>

        <MagicBentoItem spotlightRadius={320} glowColor="255, 215, 0" enableTilt>
          <div className="card p-6 space-y-4 text-center">
            <div className="mx-auto inline-flex items-center justify-center rounded-full bg-olive/10 p-3 text-olive">
              <CheckCircle size={22} />
            </div>
            <div className="space-y-1">
              <h2 className="h2 text-center">Learning Outcomes</h2>
              <p className="text-sm text-black/70">
                Clear milestones that show progress from letters to confident reading.
              </p>
            </div>
            <ul className="space-y-2 text-black/80 text-left">
              <li className="flex items-start gap-2">
                <CheckCircle size={16} className="mt-1 text-olive" />
                <span>Recognize Arabic letters with correct pronunciation.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={16} className="mt-1 text-olive" />
                <span>Read joined letters and basic words smoothly.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={16} className="mt-1 text-olive" />
                <span>Apply harakat, sukoon, and shaddah with accuracy.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={16} className="mt-1 text-olive" />
                <span>Build confidence to begin Quran recitation.</span>
              </li>
            </ul>
          </div>
        </MagicBentoItem>
      </MagicBento>

      <MagicBento className="grid">
        <MagicBentoItem spotlightRadius={380} glowColor="255, 215, 0" enableTilt>
          <div className="card min-h-[380px] p-6 space-y-5 text-center">
            <h2 className="h2 text-center">The Journey</h2>
            <div className="grid gap-6 md:grid-cols-2 text-black/80">
              <div className="h-full space-y-2 rounded-xl border border-black/5 bg-white/60 p-4">
                <p className="font-semibold text-black flex items-center justify-center gap-2">
                  <BookOpen size={16} className="text-olive" />
                  Step 1: Letters & Sounds
                </p>
                <p>Learn Arabic letters and correct makharij (pronunciation points).</p>
              </div>
              <div className="h-full space-y-2 rounded-xl border border-black/5 bg-white/60 p-4">
                <p className="font-semibold text-black flex items-center justify-center gap-2">
                  <Link2 size={16} className="text-olive" />
                  Step 2: Joining & Reading
                </p>
                <p>Build fluency in joined letters, syllables, and short words.</p>
              </div>
              <div className="h-full space-y-2 rounded-xl border border-black/5 bg-white/60 p-4">
                <p className="font-semibold text-black flex items-center justify-center gap-2">
                  <SpellCheck size={16} className="text-olive" />
                  Step 3: Harakat & Rules
                </p>
                <p>Practice vowels, sukoon, and shaddah with reading patterns.</p>
              </div>
              <div className="h-full space-y-2 rounded-xl border border-black/5 bg-white/60 p-4">
                <p className="font-semibold text-black flex items-center justify-center gap-2">
                  <BookText size={16} className="text-olive" />
                  Step 4: Quran Readiness
                </p>
                <p>Develop smooth, confident reading to begin Quran recitation.</p>
              </div>
            </div>
          </div>
        </MagicBentoItem>
      </MagicBento>

      <MagicBento className="grid gap-6 md:grid-cols-2">
        <MagicBentoItem spotlightRadius={320} glowColor="255, 215, 0" enableTilt>
          <div className="card p-6 space-y-4 text-center">
            <div className="mx-auto inline-flex items-center justify-center rounded-full bg-olive/10 p-3 text-olive">
              <CalendarDays size={22} />
            </div>
            <div className="space-y-1">
              <h2 className="h2 text-center">Schedule & Format</h2>
              <p className="text-sm text-black/70">Consistent rhythm with flexible placement.</p>
            </div>
            <ul className="space-y-2 text-black/80 text-left">
              <li className="flex items-start gap-2">
                <CheckCircle size={16} className="mt-1 text-olive" />
                <span>
                  <span className="font-semibold text-black">Online Classes:</span> 4 days per week
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={16} className="mt-1 text-olive" />
                <span>Flexible batches based on student level and availability.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={16} className="mt-1 text-olive" />
                <span>Small-group focus to keep reading time personal.</span>
              </li>
            </ul>
          </div>
        </MagicBentoItem>

        <MagicBentoItem spotlightRadius={320} glowColor="255, 215, 0" enableTilt>
          <div className="card p-6 space-y-4 text-center">
            <div className="mx-auto inline-flex items-center justify-center rounded-full bg-olive/10 p-3 text-olive">
              <GraduationCap size={22} />
            </div>
            <div className="space-y-1">
              <h2 className="h2 text-center">How We Teach</h2>
              <p className="text-sm text-black/70">Practical, paced, and encouraging.</p>
            </div>
            <ul className="space-y-2 text-black/80 text-left">
              <li className="flex items-start gap-2">
                <CheckCircle size={16} className="mt-1 text-olive" />
                <span>Step-by-step guidance from trained teachers.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={16} className="mt-1 text-olive" />
                <span>Regular revision and reading practice each week.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={16} className="mt-1 text-olive" />
                <span>Progress tracking with parent updates.</span>
              </li>
            </ul>
          </div>
        </MagicBentoItem>
      </MagicBento>

      <MagicBento className="grid">
        <MagicBentoItem spotlightRadius={320} glowColor="255, 215, 0" enableTilt clickEffect>
          <div className="card p-6 space-y-4 text-center">
            <div className="mx-auto inline-flex items-center justify-center rounded-full bg-olive/10 p-3 text-olive">
              <Sparkles size={22} />
            </div>
            <div className="space-y-1">
              <h2 className="h2">Ready to Begin?</h2>
              <p className="text-black/80">
                Enroll your child today and start their journey from Qaida to Quran.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link className="btn btn-primary" to="/contact">
                Get in touch
              </Link>
              <a
                className="btn btn-outline"
                href="https://calendly.com/shajarahacademy-info/30min"
                target="_blank"
                rel="noopener noreferrer"
              >
                Talk to an Advisor
              </a>
            </div>
            <p className="text-xs text-black/60">
              No commitment required. Choose a time that works for you.
            </p>
          </div>
        </MagicBentoItem>
      </MagicBento>
    </section>
  );
};

export default KidsQaidaToQuran;
