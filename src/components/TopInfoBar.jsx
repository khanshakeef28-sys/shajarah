import React from 'react';
import { useLocation } from 'react-router-dom';
import { Phone, Sun, Moon, MapPin, Facebook, Instagram, Youtube, Linkedin } from 'lucide-react';
import {
  FACEBOOK_URL,
  INSTAGRAM_URL,
  YOUTUBE_URL,
  LINKEDIN_URL,
  PHONE_DISPLAY,
  LOCATION,
} from '../constants/contact.js';

const TopInfoBar = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className={`${isHome ? 'text-white' : 'text-black'} container mx-auto px-6 py-3 flex flex-col md:flex-row justify-between items-center gap-3 text-center md:text-left text-sm opacity-90`}>
      <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 md:gap-6">
{/*        
      <span className="flex items-center gap-2"><Moon size={16} className="text-yellow" /> حي على الفلاح</span> */}
        <span className="flex items-center gap-2"><Sun size={16} className="text-yellow" /> اللهم آتنا في الدنيا حسنة وفي الآخرة حسنة</span>
      </div>
      <div className="flex flex-wrap items-center justify-center md:justify-end gap-4 md:gap-6">
        <div className="flex gap-4">
          <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-yellow cursor-pointer transition-colors"><Facebook size={16} /></a>
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-yellow cursor-pointer transition-colors"><Instagram size={16} /></a>
          <a href={YOUTUBE_URL} target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="hover:text-yellow cursor-pointer transition-colors"><Youtube size={16} /></a>
          <a href={LINKEDIN_URL} aria-label="LinkedIn" className="hover:text-yellow cursor-pointer transition-colors"><Linkedin size={16} /></a>
        </div>
        <span className="flex items-center gap-2"><MapPin size={16} className="text-yellow" /> {LOCATION}</span>
        <span className="flex items-center gap-2 font-semibold"><Phone size={16} /> {PHONE_DISPLAY}</span>
      </div>
    </div>
  );
};

export default TopInfoBar;
