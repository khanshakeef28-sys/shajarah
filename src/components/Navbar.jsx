import { Link, NavLink, useLocation } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { courses } from '../data/courses';
import ShajarahLogo from './ShajarahLogo.jsx';

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(null); // 'kids' | 'teens' | 'women' | null
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';
  const menuRef = useRef(null);
  const linkCls = ({ isActive }) => `nav-link ${isHome ? 'text-white' : 'text-black'} ${isActive ? 'opacity-100 underline underline-offset-4' : ''}`;

  // Close menus on route change
  useEffect(() => {
    setOpenMenu(null);
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Close dropdown when clicking outside (desktop)
  useEffect(() => {
    function onDocClick(e) {
      if (!menuRef.current) return;
      if (!menuRef.current.contains(e.target)) {
        setOpenMenu(null);
      }
    }
    document.addEventListener('click', onDocClick);
    return () => document.removeEventListener('click', onDocClick);
  }, []);

  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === 'Escape') {
        setOpenMenu(null);
        setIsMobileMenuOpen(false);
      }
    }
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, []);

  return (
    <header className={`sticky top-0 z-40 backdrop-blur border-b ${isHome ? 'bg-black/95 border-cream/10 text-white' : 'bg-white/90 border-black/10 text-black'}`}>
      <div className="section relative flex items-center justify-between py-3 md:py-4">
        <Link to="/" className="flex items-center gap-2 md:gap-4">
          <ShajarahLogo className={`w-10 h-10 ${isHome ? 'text-yellow' : 'text-olive'}`} />
          <div className="font-callig text-lg md:text-xl lg:text-2xl leading-5">Shajarah Academy</div>
        </Link>

        {/* Mobile menu button */}
        <button
          className={`md:hidden p-2 hover:opacity-80 transition ${isHome ? 'text-white' : 'text-black'}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? '✕' : '☰'}
        </button>

        {/* Desktop menu */}
        <nav ref={menuRef} className="hidden md:block ml-2" aria-label="Primary">
          <ul className="flex items-center gap-4 lg:gap-6">
          <li><NavLink to="/" className={linkCls}>Home</NavLink></li>

            {/* Kids dropdown */}
            <li className="relative">
              <button
                type="button"
                className={`nav-link flex items-center gap-1 ${isHome ? 'text-white' : 'text-black'}`}
                aria-haspopup="menu"
                aria-expanded={openMenu === 'kids'}
                aria-controls="kids-menu"
                onClick={() => setOpenMenu(openMenu === 'kids' ? null : 'kids')}
                onMouseEnter={() => setOpenMenu('kids')}
              >
                Kids
                <span aria-hidden>▾</span>
              </button>
              <ul
                id="kids-menu"
                role="menu"
                className={`${openMenu === 'kids' ? 'block' : 'hidden'} absolute left-0 top-full mt-2 min-w-56 rounded-md border border-black/10 bg-white text-black shadow-lg p-2 space-y-1 z-50`}
                onMouseLeave={() => setOpenMenu(null)}
              >
                {courses.kids.map((c) => (
                  <li key={c.slug}>
                    <NavLink role="menuitem" to={`/kids/${c.slug}`} className={({ isActive }) => `block px-3 py-2 rounded-md hover:bg-black/5 ${isActive ? 'underline' : ''}`}>{c.title}</NavLink>
                  </li>
                ))}
                <li className="border-t border-black/10 mt-1 pt-1"><NavLink role="menuitem" to="/kids" className={linkCls}>All Kids</NavLink></li>
              </ul>
            </li>

            {/* Women dropdown */}
            <li className="relative">
              <button
                type="button"
                className={`nav-link flex items-center gap-1 ${isHome ? 'text-white' : 'text-black'}`}
                aria-haspopup="menu"
                aria-expanded={openMenu === 'women'}
                aria-controls="women-menu"
                onClick={() => setOpenMenu(openMenu === 'women' ? null : 'women')}
                onMouseEnter={() => setOpenMenu('women')}
              >
                Women
                <span aria-hidden>▾</span>
              </button>
              <ul
                id="women-menu"
                role="menu"
                className={`${openMenu === 'women' ? 'block' : 'hidden'} absolute left-0 top-full mt-2 min-w-56 rounded-md border border-black/10 bg-white text-black shadow-lg p-2 space-y-1 z-50`}
                onMouseLeave={() => setOpenMenu(null)}
              >
                {courses.women.map((c) => (
                  <li key={c.slug}>
                    <NavLink role="menuitem" to={`/women/${c.slug}`} className={({ isActive }) => `block px-3 py-2 rounded-md hover:bg-black/5 ${isActive ? 'underline' : ''}`}>{c.title}</NavLink>
                  </li>
                ))}
                <li className="border-t border-black/10 mt-1 pt-1"><NavLink role="menuitem" to="/women" className={linkCls}>All Women</NavLink></li>
              </ul>
            </li>

            {/* Static links */}
            <li><NavLink to="/about" className={linkCls}>About us</NavLink></li>
            <li><NavLink to="/contact" className={linkCls}>Contact us</NavLink></li>
          </ul>
        </nav>

        {/* Mobile menu */}
        <nav
          className={`md:hidden absolute top-full left-0 right-0 ${isHome ? 'bg-black/95 border-cream/10' : 'bg-white/95 border-black/10'} border-b ${
            isMobileMenuOpen ? 'block' : 'hidden'
          }`}
          aria-label="Primary"
        >
          <ul className="section flex flex-col gap-4 py-4">
            <li><NavLink to="/" className={linkCls} onClick={() => setIsMobileMenuOpen(false)}>Home</NavLink></li>

            {/* Kids dropdown mobile */}
            <li className="relative">
              <button
                type="button"
                className={`nav-link flex items-center gap-1 w-full text-left ${isHome ? 'text-white' : 'text-black'}`}
                aria-haspopup="menu"
                aria-expanded={openMenu === 'kids'}
                aria-controls="kids-menu-mobile"
                onClick={() => setOpenMenu(openMenu === 'kids' ? null : 'kids')}
              >
                Kids
                <span aria-hidden>▾</span>
              </button>
              <ul
                id="kids-menu-mobile"
                role="menu"
                className={`${openMenu === 'kids' ? 'block' : 'hidden'} mt-2 ml-4 bg-white text-black rounded-md border border-black/10 p-2 space-y-1`}
              >
                {courses.kids.map((c) => (
                  <li key={c.slug}>
                    <NavLink role="menuitem" to={`/kids/${c.slug}`} className={({ isActive }) => `block px-3 py-2 rounded-md hover:bg-black/5 text-black ${isActive ? 'underline' : ''}`} onClick={() => setIsMobileMenuOpen(false)}>{c.title}</NavLink>
                  </li>
                ))}
                <li className="border-t border-cream/10 mt-1 pt-1"><NavLink role="menuitem" to="/kids" className={linkCls} onClick={() => setIsMobileMenuOpen(false)}>All Kids</NavLink></li>
              </ul>
            </li>

            {/* Women dropdown mobile */}
            <li className="relative">
              <button
                type="button"
                className={`nav-link flex items-center gap-1 w-full text-left ${isHome ? 'text-white' : 'text-black'}`}
                aria-haspopup="menu"
                aria-expanded={openMenu === 'women'}
                aria-controls="women-menu-mobile"
                onClick={() => setOpenMenu(openMenu === 'women' ? null : 'women')}
              >
                Women
                <span aria-hidden>▾</span>
              </button>
              <ul
                id="women-menu-mobile"
                role="menu"
                className={`${openMenu === 'women' ? 'block' : 'hidden'} mt-2 ml-4 bg-white text-black rounded-md border border-black/10 p-2 space-y-1`}
              >
                {courses.women.map((c) => (
                  <li key={c.slug}>
                    <NavLink role="menuitem" to={`/women/${c.slug}`} className={({ isActive }) => `block px-3 py-2 rounded-md hover:bg-black/5 text-black ${isActive ? 'underline' : ''}`} onClick={() => setIsMobileMenuOpen(false)}>{c.title}</NavLink>
                  </li>
                ))}
                <li className="border-t border-cream/10 mt-1 pt-1"><NavLink role="menuitem" to="/women" className={linkCls} onClick={() => setIsMobileMenuOpen(false)}>All Women</NavLink></li>
              </ul>
            </li>

            {/* Static links mobile */}
            <li><NavLink to="/about" className={linkCls} onClick={() => setIsMobileMenuOpen(false)}>About us</NavLink></li>
            <li><NavLink to="/contact" className={linkCls} onClick={() => setIsMobileMenuOpen(false)}>Contact us</NavLink></li>
            <li><NavLink to="/founder" className={linkCls} onClick={() => setIsMobileMenuOpen(false)}>About founder</NavLink></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}


