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
import WomenQaidaToRecitation from './pages/WomenQaidaToRecitation.jsx';
import WomenKhatmah from './pages/WomenKhatmah.jsx';
import WomenParentingSeries from './pages/WomenParentingSeries.jsx';
import WomenAlHudaOutreach from './pages/WomenAlHudaOutreach.jsx';
// src/App.jsx
import Preloader from './components/Preloader.jsx';

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
          <Route path="/women/qaidah-to-recitation" element={<WomenQaidaToRecitation />} />
          <Route path="/women/khatmah" element={<WomenKhatmah />} />
          <Route path="/women/parenting-series" element={<WomenParentingSeries />} />
          <Route path="/women/alhuda-outreach" element={<WomenAlHudaOutreach />} />
        </Routes>
      </main>
      
      <footer className="border-t border-black/10 bg-black/95 mt-16">
        <div className="section py-8 text-sm text-white/70">
          © {new Date().getFullYear()} Shajarah Academy. All rights reserved.
        </div>
      </footer>
    </div>
    </>
  );

}


