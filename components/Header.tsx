import React from 'react';
import { Heart, DollarSign } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-green-100">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="bg-charity-green p-2 rounded-full text-white">
            <DollarSign size={24} strokeWidth={3} />
          </div>
          <span className="text-xl font-extrabold text-green-800 tracking-tight">
            Nuôi Hào
          </span>
        </div>
        
        <nav className="hidden md:flex space-x-8 text-sm font-bold text-gray-600">
          <a href="#" className="hover:text-charity-green transition-colors">Về Dự Án</a>
          <a href="#donate-section" className="hover:text-charity-green transition-colors">Donate</a>
          <a href="#" className="hover:text-charity-green transition-colors">Sao Kê (404)</a>
        </nav>

        <a 
          href="#donate-section"
          className="bg-money-gold hover:bg-yellow-400 text-yellow-900 font-bold py-2 px-4 rounded-full text-sm flex items-center transition-transform hover:scale-105 shadow-lg"
        >
          <Heart size={16} className="mr-2 fill-red-500 text-red-500" />
          Ủng hộ Hào
        </a>
      </div>
    </header>
  );
};