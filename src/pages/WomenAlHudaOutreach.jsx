import React from 'react';
import { CheckCircle, GraduationCap, Users, CalendarDays, Clock, Sparkles } from 'lucide-react';
import { MagicBento, MagicBentoItem } from '../components/MagicBento';

const WomenAlHudaOutreach = () => {
  return (
    <section className="section space-y-10 py-10">
      <div className="space-y-4">
        <div className="space-y-2">
          <h1 className="h1">Alhuda Outreach</h1>
          <div className="max-w-3xl rounded-2xl border border-black/10 bg-white/60 p-4 text-sm text-black/70 shadow-sm">
            Certified by Alhuda USA. Diploma and certificate courses for structured Islamic learning.
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <span className="rounded-full bg-beige/80 px-3 py-1 text-xs font-semibold text-black">
            Diploma | Certificate
          </span>
          <span className="rounded-full bg-beige/80 px-3 py-1 text-xs font-semibold text-black">
            Weekend classes
          </span>
          <span className="rounded-full bg-beige/80 px-3 py-1 text-xs font-semibold text-black">
            4.5 years
          </span>
        </div>
      </div>

      <MagicBento className="grid gap-6 md:grid-cols-2 auto-rows-fr">
        <MagicBentoItem spotlightRadius={320} glowColor="255, 215, 0" enableTilt className="h-full">
          <div className="card h-full p-6 space-y-4 text-center">
            <div className="mx-auto inline-flex items-center justify-center rounded-full bg-olive/10 p-3 text-olive">
              <GraduationCap size={22} />
            </div>
            <h2 className="h2 text-center">Program Focus</h2>
            <p className="text-black/80">
              Structured Islamic learning with internationally recognized certification.
            </p>
            <ul className="space-y-2 text-black/80 text-left">
              <li className="flex items-start gap-2">
                <CheckCircle size={16} className="mt-1 text-olive" />
                <span>Certified by Alhuda USA</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={16} className="mt-1 text-olive" />
                <span>Diploma and certificate pathways</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={16} className="mt-1 text-olive" />
                <span>Step-by-step, guided curriculum</span>
              </li>
            </ul>
          </div>
        </MagicBentoItem>

        <MagicBentoItem spotlightRadius={320} glowColor="255, 215, 0" enableTilt className="h-full">
          <div className="card h-full p-6 space-y-4 text-center">
            <div className="mx-auto inline-flex items-center justify-center rounded-full bg-olive/10 p-3 text-olive">
              <CalendarDays size={22} />
            </div>
            <div className="space-y-1">
              <h2 className="h2 text-center">Schedule & Format</h2>
              <p className="text-sm text-black/70">Designed for working adults and busy schedules.</p>
            </div>
            <ul className="space-y-2 text-black/80 text-left">
              <li className="flex items-start gap-2">
                <Clock size={16} className="mt-1 text-olive" />
                <span>Weekend classes</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={16} className="mt-1 text-olive" />
                <span>Program duration: 4.5 years</span>
              </li>
              <li className="flex items-start gap-2">
                <Users size={16} className="mt-1 text-olive" />
                <span>Supportive cohort learning</span>
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
              <h2 className="h2">Ready to Enroll?</h2>
              <p className="text-black/80">Start your structured Islamic learning journey today.</p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <button className="btn btn-primary">Register Now</button>
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

export default WomenAlHudaOutreach;
