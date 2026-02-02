import React from 'react';
import {
  BookOpen,
  CheckCircle,
  CalendarDays,
  GraduationCap,
  Sparkles,
  Users,
  Clock
} from 'lucide-react';
import { MagicBento, MagicBentoItem } from '../components/MagicBento';
import { Link } from 'react-router-dom';

const WomenKhatmah = () => {
  return (
    <section className="section space-y-10 py-10">
      <div className="space-y-4">
        <div className="space-y-2">
          <h1 className="h1">Khatmah Journey</h1>
          <div className="max-w-3xl rounded-2xl border border-black/10 bg-white/60 p-4 text-sm text-black/70 shadow-sm">
            A complete Quran journey from Surah Al-Fatiha to the end, with steady guidance and
            spiritual focus.
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <span className="rounded-full bg-beige/80 px-3 py-1 text-xs font-semibold text-black">
            No age limit
          </span>
          <span className="rounded-full bg-beige/80 px-3 py-1 text-xs font-semibold text-black">
            Online classes
          </span>
          <span className="rounded-full bg-beige/80 px-3 py-1 text-xs font-semibold text-black">
            2 days/week
          </span>
          <span className="rounded-full bg-beige/80 px-3 py-1 text-xs font-semibold text-black">
            1 year duration
          </span>
        </div>
      </div>

      <MagicBento className="grid gap-6 md:grid-cols-2 auto-rows-fr">
        <MagicBentoItem spotlightRadius={320} glowColor="255, 215, 0" enableTilt className="h-full">
          <div className="card h-full p-6 space-y-4 text-center">
            <div className="mx-auto inline-flex items-center justify-center rounded-full bg-olive/10 p-3 text-olive">
              <Users size={22} />
            </div>
            <h2 className="h2 text-center">Who It’s For</h2>
            <p className="text-black/80">
              For anyone who wants to complete the Qur’an with guidance and a steady pace.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <span className="rounded-full bg-beige/80 px-3 py-1 text-xs font-semibold text-black">
                No age limit
              </span>
              <span className="rounded-full bg-beige/80 px-3 py-1 text-xs font-semibold text-black">
                Any level
              </span>
              <span className="rounded-full bg-beige/80 px-3 py-1 text-xs font-semibold text-black">
                Online guidance
              </span>
            </div>
          </div>
        </MagicBentoItem>

        <MagicBentoItem spotlightRadius={320} glowColor="255, 215, 0" enableTilt className="h-full">
          <div className="card h-full p-6 space-y-4 text-center">
            <div className="mx-auto inline-flex items-center justify-center rounded-full bg-olive/10 p-3 text-olive">
              <CheckCircle size={22} />
            </div>
            <div className="space-y-1">
              <h2 className="h2 text-center">Learning Outcomes</h2>
              <p className="text-sm text-black/70">Consistent recitation with completion goals.</p>
            </div>
            <ul className="space-y-2 text-black/80 text-left">
              <li className="flex items-start gap-2">
                <CheckCircle size={16} className="mt-1 text-olive" />
                <span>Follow a guided plan to complete the Qur’an.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={16} className="mt-1 text-olive" />
                <span>Strengthen fluency and tajweed through review.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={16} className="mt-1 text-olive" />
                <span>Build a consistent, lifelong recitation habit.</span>
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
                  Step 1: Intention & Pacing
                </p>
                <p>Set a realistic plan based on your schedule and goals.</p>
              </div>
              <div className="h-full space-y-2 rounded-xl border border-black/5 bg-white/60 p-4">
                <p className="font-semibold text-black flex items-center justify-center gap-2">
                  <BookOpen size={16} className="text-olive" />
                  Step 2: Guided Recitation
                </p>
                <p>Follow a structured reading plan with teacher support.</p>
              </div>
              <div className="h-full space-y-2 rounded-xl border border-black/5 bg-white/60 p-4">
                <p className="font-semibold text-black flex items-center justify-center gap-2">
                  <Sparkles size={16} className="text-olive" />
                  Step 3: Review & Reflection
                </p>
                <p>Regular checkpoints to strengthen accuracy and meaning.</p>
              </div>
              <div className="h-full space-y-2 rounded-xl border border-black/5 bg-white/60 p-4">
                <p className="font-semibold text-black flex items-center justify-center gap-2">
                  <CheckCircle size={16} className="text-olive" />
                  Step 4: Completion & Dua
                </p>
                <p>Celebrate progress and maintain momentum after khatmah.</p>
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
              <p className="text-sm text-black/70">Flexible structure with steady progress.</p>
            </div>
            <ul className="space-y-2 text-black/80 text-left">
              <li className="flex items-start gap-2">
                <Clock size={16} className="mt-1 text-olive" />
                <span>2 sessions per week</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={16} className="mt-1 text-olive" />
                <span>1-year guided completion plan.</span>
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
              <p className="text-sm text-black/70">Clear targets with supportive guidance.</p>
            </div>
            <ul className="space-y-2 text-black/80 text-left">
              <li className="flex items-start gap-2">
                <CheckCircle size={16} className="mt-1 text-olive" />
                <span>Structured reading plan with milestones.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={16} className="mt-1 text-olive" />
                <span>Teacher feedback for accuracy and fluency.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={16} className="mt-1 text-olive" />
                <span>Progress tracking and encouragement.</span>
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
                Join the khatmah journey and complete the Qur’an with guidance.
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
          </div>
        </MagicBentoItem>
      </MagicBento>
    </section>
  );
};

export default WomenKhatmah;
