import React from 'react';
import {
  BookOpen,
  CalendarDays,
  Clock,
  MapPin,
  Users,
  Sparkles,
  CheckCircle,
  Heart,
  Shield
} from 'lucide-react';
import { MagicBento, MagicBentoItem } from '../components/MagicBento';

const KidsSundayClasses = () => {
  return (
    <section className="section space-y-10 py-10">
      <div className="space-y-4">
        <div className="space-y-2">
          <h1 className="h1">Shajara Sunday Sessions for Kids</h1>
          <div className="max-w-3xl rounded-2xl border border-black/10 bg-white/60 p-4 text-sm text-black/70 shadow-sm">
            A one-of-a-kind Islamic learning experience for children aged 6–15, designed to nurture
            hearts, shape character, and deepen connection with the Qur’an.
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <span className="rounded-full bg-beige/80 px-3 py-1 text-xs font-semibold text-black">
            Ages 6–15
          </span>
          <span className="rounded-full bg-beige/80 px-3 py-1 text-xs font-semibold text-black">
            Every Sunday
          </span>
          <span className="rounded-full bg-beige/80 px-3 py-1 text-xs font-semibold text-black">
            11:00 AM – 1:30 PM
          </span>
          <span className="rounded-full bg-beige/80 px-3 py-1 text-xs font-semibold text-black">
            Offline, 1-year
          </span>
        </div>
      </div>

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
                <Clock size={16} className="mt-1 text-olive" />
                <span>Every Sunday, 11:00 AM – 1:30 PM</span>
              </li>
              <li className="flex items-start gap-2">
                <CalendarDays size={16} className="mt-1 text-olive" />
                <span>Starting from 18th January (1-year journey)</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 text-olive" />
                <span>Offline, in-person sessions</span>
              </li>
              <li className="flex items-start gap-2">
                <Users size={16} className="mt-1 text-olive" />
                <span>For ages 6–15</span>
              </li>
            </ul>
          </div>
        </MagicBentoItem>

        <MagicBentoItem spotlightRadius={320} glowColor="255, 215, 0" enableTilt>
          <div className="card p-6 space-y-4 text-center">
            <div className="mx-auto inline-flex items-center justify-center rounded-full bg-olive/10 p-3 text-olive">
              <Heart size={22} />
            </div>
            <div className="space-y-1">
              <h2 className="h2 text-center">Why It’s Special</h2>
              <p className="text-sm text-black/70">Imaan, adab, and awareness in one power-packed day.</p>
            </div>
            <ul className="space-y-2 text-black/80 text-left">
              <li className="flex items-start gap-2">
                <CheckCircle size={16} className="mt-1 text-olive" />
                <span>Nurtures hearts and builds strong moral foundations</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={16} className="mt-1 text-olive" />
                <span>Develops a lasting connection with the Qur’an</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={16} className="mt-1 text-olive" />
                <span>Balances deen and dunya with practical life skills</span>
              </li>
            </ul>
          </div>
        </MagicBentoItem>
      </MagicBento>

      <MagicBento className="grid">
        <MagicBentoItem spotlightRadius={360} glowColor="255, 215, 0" enableTilt>
          <div className="card p-6 space-y-4 text-center">
            <div className="space-y-1">
              <h2 className="h2 text-center">What’s Inside</h2>
              <p className="text-sm text-black/70">Structured, engaging, and age-appropriate learning.</p>
            </div>
            <div className="grid gap-4 md:grid-cols-2 text-black/80">
              <div className="space-y-2 text-left">
                <p className="font-semibold text-black flex items-center gap-2">
                  <BookOpen size={16} className="text-olive" />
                  Qur’an with Meaning
                </p>
                <p>5–6 surahs memorized with deep understanding.</p>
              </div>
              <div className="space-y-2 text-left">
                <p className="font-semibold text-black flex items-center gap-2">
                  <Sparkles size={16} className="text-olive" />
                  Asma ul Husna
                </p>
                <p>25 names of Allah with stories and hands-on activities.</p>
              </div>
              <div className="space-y-2 text-left">
                <p className="font-semibold text-black flex items-center gap-2">
                  <Shield size={16} className="text-olive" />
                  Soft Skills for Real Life
                </p>
                <p>Manners, emotions, digital discipline, and self-care.</p>
              </div>
              <div className="space-y-2 text-left">
                <p className="font-semibold text-black flex items-center gap-2">
                  <Sparkles size={16} className="text-olive" />
                  Muslim Heroes
                </p>
                <p>Monthly stories of inspiring role models.</p>
              </div>
              <div className="space-y-2 text-left md:col-span-2">
                <p className="font-semibold text-black flex items-center gap-2">
                  <BookOpen size={16} className="text-olive" />
                  Seerah of the Prophet ﷺ
                </p>
                <p>Life-changing lessons made relatable for children.</p>
              </div>
            </div>
            <div className="rounded-xl bg-beige/70 p-4 text-black/80">
              Fun & effective methods: journals, activities, games, and presentations.
            </div>
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
              <h2 className="h2">Ready to Register?</h2>
              <p className="text-black/80">
                Limited seats — reserve your spot early and share with other parents.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <button className="btn btn-primary">Register Now</button>
              <button className="btn btn-outline">Share with Parents</button>
            </div>
            <div className="space-y-1 text-sm text-black/70">
              <p>Call/WhatsApp: +91 8850999818</p>
              <p>Email: info@shajarahacademy.com</p>
              <p>Instagram: @shajaraseekers</p>
            </div>
            <p className="text-xs text-black/60">
              One message from you could help a child fall in love with the Qur’an.
            </p>
          </div>
        </MagicBentoItem>
      </MagicBento>
    </section>
  );
};

export default KidsSundayClasses;
