import React, { useState } from 'react';
import { 
  Settings, 
  Menu, 
  X, 
  ShoppingCart, 
  Bell, 
  User, 
  Search 
} from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    // Increased z-index to 50 to ensure it floats over everything
    <header className="sticky top-0 z-50 bg-white shadow-md font-sans">
      
      {/* --- DESKTOP & TABLET MAIN ROW --- */}
      <div className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3 md:py-0 md:h-24"> 
            {/* Note: Increased height (h-24) on desktop to fit both rows */}

            {/* 1. LEFT: Logo & Company Name */}
            <div className="flex-shrink-0 flex items-center cursor-pointer self-center">
              <div className="bg-blue-600 p-1.5 rounded-lg mr-2 hover:bg-blue-700 transition-colors">
                <Settings className="h-6 w-6 text-white animate-spin-slow" />
              </div>
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-blue-500">
                Kampakan
              </span>
            </div>

            {/* 2. CENTER: Nav Links + Search Bar (Hidden on Mobile) */}
            {/* We use flex-col to stack them vertically */}
            <div className="hidden md:flex flex-col items-center justify-center w-full max-w-lg mx-4 gap-2">
              
              {/* Row 1: Navigation Links */}
              <nav className="flex space-x-8">
                <a href="#home" className="text-gray-600 hover:text-blue-600 text-xs uppercase tracking-wide font-semibold transition-colors">
                  Home
                </a>
                <a href="#about" className="text-gray-600 hover:text-blue-600 text-xs uppercase tracking-wide font-semibold transition-colors">
                  About
                </a>
                <a href="#contact" className="text-gray-600 hover:text-blue-600 text-xs uppercase tracking-wide font-semibold transition-colors">
                  Contact
                </a>
              </nav>

              {/* Row 2: Search Input Box */}
              <div className="relative w-full">
                <input 
                  type="text" 
                  placeholder="Search for parts (e.g. 'Alternator 2015 Vios')..." 
                  className="w-full pl-10 pr-4 py-1.5 bg-gray-100 border-transparent focus:bg-white focus:ring-2 focus:ring-blue-500 rounded-full text-sm transition-all outline-none"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              </div>
            </div>

            {/* 3. RIGHT: Action Icons (Desktop) */}
            <div className="hidden md:flex items-center space-x-5 self-center">
              <button className="text-gray-500 hover:text-blue-600 transition-colors relative">
                <Bell className="h-6 w-6" />
                <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white"></span>
              </button>
              
              <button className="text-gray-500 hover:text-blue-600 transition-colors relative">
                <ShoppingCart className="h-6 w-6" />
                <span className="absolute -top-1 -right-2 bg-blue-600 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
                  3
                </span>
              </button>

              <button className="text-gray-500 hover:text-blue-600 transition-colors flex flex-col items-center">
                <User className="h-6 w-6" />
              </button>
            </div>

            {/* 4. MOBILE MENU BUTTONS */}
            <div className="flex md:hidden items-center gap-4">
              <button className="text-gray-500 hover:text-blue-600 relative">
                <ShoppingCart className="h-6 w-6" />
                <span className="absolute -top-1 -right-2 bg-blue-600 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">3</span>
              </button>

              <button
                onClick={toggleMenu}
                className="text-gray-500 hover:text-blue-600 focus:outline-none"
              >
                {isMenuOpen ? (
                  <X className="h-7 w-7 transition-transform duration-300 rotate-90" />
                ) : (
                  <Menu className="h-7 w-7 transition-transform duration-300" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* --- MOBILE SEARCH BAR (Visible below header on mobile) --- */}
      <div className="md:hidden bg-white border-b border-gray-100 px-4 py-3">
        <div className="relative w-full">
          <input 
            type="text" 
            placeholder="Search car parts..." 
            className="w-full pl-10 pr-4 py-2 bg-gray-100 focus:bg-white border border-transparent focus:border-blue-300 focus:ring-0 rounded-lg text-sm transition-all outline-none"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
        </div>
      </div>

      {/* --- MOBILE DROPDOWN MENU --- */}
      <div 
        className={`md:hidden bg-white border-b border-gray-100 overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-96 opacity-100 shadow-lg" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 py-2 space-y-1">
          <a href="#home" className="block text-gray-700 hover:bg-blue-50 hover:text-blue-700 px-3 py-2 rounded-md text-base font-medium">
            Home
          </a>
          <a href="#about" className="block text-gray-700 hover:bg-blue-50 hover:text-blue-700 px-3 py-2 rounded-md text-base font-medium">
            About
          </a>
          <a href="#contact" className="block text-gray-700 hover:bg-blue-50 hover:text-blue-700 px-3 py-2 rounded-md text-base font-medium">
            Contact
          </a>
          
          <div className="border-t border-gray-200 my-2"></div>
          
          <div className="grid grid-cols-2 gap-2 py-2">
             <button className="flex items-center gap-2 text-gray-600 hover:text-blue-600 py-2 justify-center border border-gray-100 rounded-lg">
                <User className="h-5 w-5" /> Profile
             </button>
             <button className="flex items-center gap-2 text-gray-600 hover:text-blue-600 py-2 justify-center border border-gray-100 rounded-lg">
                <Bell className="h-5 w-5" /> Alerts
             </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;