import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import TopInfoBar from './components/TopInfoBar.jsx';
import Home from './pages/Home.jsx';
import Category from './pages/Category.jsx';
import CourseDetail from './pages/CourseDetail.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Founder from './pages/Founder.jsx';
import KidsQaidaToQuran from './pages/KidsQaidaToQuran.jsx';
import KidsHifz from './pages/KidsHifz.jsx';
import KidsSundayClasses from './pages/KidsSundayClasses.jsx';
// src/App.jsx
import Preloader from './components/Preloader.jsx';
import { Mail, MapPin, Phone, Globe, Facebook, Instagram, Youtube, Linkedin } from 'lucide-react';
import {
  FACEBOOK_URL,
  INSTAGRAM_URL,
  YOUTUBE_URL,
  LINKEDIN_URL,
  PHONE_DISPLAY,
  PHONE_TEL,
  EMAIL,
  WEBSITE_DISPLAY,
  WEBSITE_URL,
  LOCATION,
} from './constants/contact.js';

export default function App() {
  const location = useLocation();
  const isHome = location.pathname === '/';
  return (
 <>
    <a href="#main-content" className="skip-link">Skip to main content</a>
    <Preloader />
    <div className="min-h-screen text-black">
      <div className={isHome ? 'bg-black/80' : 'bg-white/90 border-b border-black/10'}>
        <TopInfoBar />
      </div>
      <Navbar />
      <main id="main-content" className="py-4 md:py-6 lg:py-8" tabIndex="-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/kids" element={<Category category="kids" />} />
          <Route path="/teens" element={<Category category="teens" />} />
          <Route path="/women" element={<Category category="women" />} />
          <Route path="/:category/:courseSlug" element={<CourseDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/founder" element={<Founder />} />
          <Route path="/kids/qaida-to-quran-journey" element={<KidsQaidaToQuran />} />
          <Route path="/kids/hifz" element={<KidsHifz />} />
          <Route path="/kids/sunday-classes" element={<KidsSundayClasses />} />
        </Routes>
      </main>
      
      <footer className="border-t border-black/10 bg-black/95 mt-16">
        <div className="section py-8 text-sm text-white/70">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-[1fr_auto] lg:items-start lg:gap-12">
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-white/50">Contact</p>
              <ul className="space-y-3 text-white/80">
                <li className="flex items-start gap-3">
                  <Phone size={18} className="mt-0.5 shrink-0 text-yellow" aria-hidden />
                  <a href={`tel:${PHONE_TEL}`} className="hover:text-yellow transition-colors">
                    {PHONE_DISPLAY}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Mail size={18} className="mt-0.5 shrink-0 text-yellow" aria-hidden />
                  <a href={`mailto:${EMAIL}`} className="hover:text-yellow transition-colors break-all">
                    {EMAIL}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Globe size={18} className="mt-0.5 shrink-0 text-yellow" aria-hidden />
                  <a
                    href={WEBSITE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-yellow transition-colors"
                  >
                    {WEBSITE_DISPLAY}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="mt-0.5 shrink-0 text-yellow" aria-hidden />
                  <span>{LOCATION}</span>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-white/50">Follow us</p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={FACEBOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/80 hover:border-yellow/50 hover:text-yellow transition-colors"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/80 hover:border-yellow/50 hover:text-yellow transition-colors"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href={YOUTUBE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/80 hover:border-yellow/50 hover:text-yellow transition-colors"
                >
                  <Youtube size={20} />
                </a>
                <a
                  href={LINKEDIN_URL}
                  aria-label="LinkedIn"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/80 hover:border-yellow/50 hover:text-yellow transition-colors"
                >
                  <Linkedin size={20} />
                </a>
              </div>
              <p className="text-xs text-white/50">@shajarahseekers</p>
            </div>
          </div>
          <p className="mt-10 border-t border-white/10 pt-8 text-center text-white/60">
            © {new Date().getFullYear()} Shajarah Academy. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
    </>
  );

}


