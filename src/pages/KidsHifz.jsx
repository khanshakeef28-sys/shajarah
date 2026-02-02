import React from 'react';
import {
  BookOpen,
  CheckCircle,
  CalendarDays,
  GraduationCap,
  Sparkles,
  Users,
  Clock,
  Monitor
} from 'lucide-react';
import { MagicBento, MagicBentoItem } from '../components/MagicBento';
import { Link } from 'react-router-dom';

const KidsHifz = () => {
  return (
    <section className="section space-y-10 py-10">
      <div className="space-y-4">
        <div className="space-y-2">
          <h1 className="h1">Kids Hifz Program</h1>
          <div className="max-w-3xl rounded-2xl border border-black/10 bg-white/60 p-4 text-sm text-black/70 shadow-sm">
            A focused 6-month Hifz journey for ages 5–15, helping children memorize selected surahs
            with understanding, consistency, and confidence.
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <span className="rounded-full bg-beige/80 px-3 py-1 text-xs font-semibold text-black">
            Ages 5–15
          </span>
          <span className="rounded-full bg-beige/80 px-3 py-1 text-xs font-semibold text-black">
            6 months
          </span>
          <span className="rounded-full bg-beige/80 px-3 py-1 text-xs font-semibold text-black">
            3 days/week
          </span>
          <span className="rounded-full bg-beige/80 px-3 py-1 text-xs font-semibold text-black">
            Online 1:1 or small-group
          </span>
        </div>
      </div>

      <MagicBento className="grid gap-6 md:grid-cols-2">
        <MagicBentoItem spotlightRadius={320} glowColor="255, 215, 0" enableTilt>
          <div className="card p-6 space-y-4 text-center">
            <div className="mx-auto inline-flex items-center justify-center rounded-full bg-olive/10 p-3 text-olive">
              <Users size={22} />
            </div>
            <h2 className="h2 text-center">Who It’s For</h2>
            <p className="text-black/80">
              Designed for ages 5–15, perfect for children beginning or strengthening Hifz.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <span className="rounded-full bg-beige/80 px-3 py-1 text-xs font-semibold text-black">
                Ages 5–15
              </span>
              <span className="rounded-full bg-beige/80 px-3 py-1 text-xs font-semibold text-black">
                Short-term program
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
              <p className="text-sm text-black/70">Structured memorization with steady revision.</p>
            </div>
            <ul className="space-y-2 text-black/80 text-left">
              <li className="flex items-start gap-2">
                <CheckCircle size={16} className="mt-1 text-olive" />
                <span>Memorize selected surahs with correct recitation.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={16} className="mt-1 text-olive" />
                <span>Build consistency through guided revision.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={16} className="mt-1 text-olive" />
                <span>Improve tajweed accuracy and fluency.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={16} className="mt-1 text-olive" />
                <span>Grow confidence to continue Hifz independently.</span>
              </li>
            </ul>
          </div>
        </MagicBentoItem>
      </MagicBento>

      <MagicBento className="grid">
        <MagicBentoItem spotlightRadius={360} glowColor="255, 215, 0" enableTilt>
          <div className="card min-h-[380px] p-6 space-y-5 text-center">
            <h2 className="h2 text-center">The 6-Month Journey</h2>
            <div className="grid gap-6 md:grid-cols-2 text-black/80">
              <div className="h-full space-y-2 rounded-xl border border-black/5 bg-white/60 p-4">
                <p className="font-semibold text-black flex items-center justify-center gap-2">
                  <BookOpen size={16} className="text-olive" />
                  Step 1: Assessment & Goals
                </p>
                <p>Level check and a personalized surah plan.</p>
              </div>
              <div className="h-full space-y-2 rounded-xl border border-black/5 bg-white/60 p-4">
                <p className="font-semibold text-black flex items-center justify-center gap-2">
                  <GraduationCap size={16} className="text-olive" />
                  Step 2: Memorization
                </p>
                <p>Weekly targets with teacher-guided correction.</p>
              </div>
              <div className="h-full space-y-2 rounded-xl border border-black/5 bg-white/60 p-4">
                <p className="font-semibold text-black flex items-center justify-center gap-2">
                  <Sparkles size={16} className="text-olive" />
                  Step 3: Revision Cycles
                </p>
                <p>Spaced repetition for retention and fluency.</p>
              </div>
              <div className="h-full space-y-2 rounded-xl border border-black/5 bg-white/60 p-4">
                <p className="font-semibold text-black flex items-center justify-center gap-2">
                  <CheckCircle size={16} className="text-olive" />
                  Step 4: Confidence Check
                </p>
                <p>Recitation reviews and completion milestones.</p>
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
              <p className="text-sm text-black/70">Short-term, focused, and flexible.</p>
            </div>
            <ul className="space-y-2 text-black/80 text-left">
              <li className="flex items-start gap-2">
                <Clock size={16} className="mt-1 text-olive" />
                <span>Duration: 6 months</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock size={16} className="mt-1 text-olive" />
                <span>Frequency: 3 days per week</span>
              </li>
              <li className="flex items-start gap-2">
                <Monitor size={16} className="mt-1 text-olive" />
                <span>Online classes with live guidance</span>
              </li>
              <li className="flex items-start gap-2">
                <Users size={16} className="mt-1 text-olive" />
                <span>1:1 sessions or small-group batches</span>
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
              <p className="text-sm text-black/70">Gentle, consistent, and goal-oriented.</p>
            </div>
            <ul className="space-y-2 text-black/80 text-left">
              <li className="flex items-start gap-2">
                <CheckCircle size={16} className="mt-1 text-olive" />
                <span>Daily/weekly memorization targets.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={16} className="mt-1 text-olive" />
                <span>Frequent revision to strengthen retention.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={16} className="mt-1 text-olive" />
                <span>Progress updates for parents.</span>
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
                Enroll your child and start a focused Hifz journey with gentle guidance.
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
              Limited seats — choose a batch that fits your schedule.
            </p>
          </div>
        </MagicBentoItem>
      </MagicBento>
    </section>
  );
};

export default KidsHifz;
