import React from 'react';
import { useLocation } from 'react-router-dom';
import { Phone, Sun, Moon, MapPin, Facebook, Twitter, Linkedin } from 'lucide-react';

const TopInfoBar = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className={`${isHome ? 'text-white' : 'text-black'} container mx-auto px-6 py-3 flex flex-col md:flex-row justify-between items-center gap-3 text-center md:text-left text-sm opacity-90`}>
      <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 md:gap-6">
        <span className="flex items-center gap-2"><Sun size={16} className="text-yellow" /> Sunrise: 4:44 AM</span>
        <span className="flex items-center gap-2"><Moon size={16} className="text-yellow" /> Sunset: 7:35 PM</span>
      </div>
      <div className="flex flex-wrap items-center justify-center md:justify-end gap-4 md:gap-6">
        <div className="flex gap-4">
          <Facebook size={16} className="hover:text-yellow cursor-pointer"/>
          <Twitter size={16} className="hover:text-yellow cursor-pointer"/>
          <Linkedin size={16} className="hover:text-yellow cursor-pointer"/>
        </div>
        <span className="flex items-center gap-2"><MapPin size={16} className="text-yellow" /> Jafar Nagar · Nagpur</span>
        <span className="flex items-center gap-2 font-semibold"><Phone size={16} /> +(91) 885-0999-818</span>
      </div>
    </div>
  );
};

export default TopInfoBar;
