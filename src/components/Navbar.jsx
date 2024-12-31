import { useState } from "react";
import { Menu, X } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import traditional from '../assets/j5.jpg';
import wedding from '../assets/j4.jpg';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleContactClick = () => {
    // Close the mobile menu
    setIsMenuOpen(false);
    
    // Smooth scroll to footer
    const footer = document.querySelector('footer');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="relative flex justify-between items-center text-black py-4 px-8 md:px-32 bg-white shadow-md z-50">
      <div className="flex flex-col text-center font-bold">
        <span className="text-lg md:text-xl text-blue-600 hover:scale-105 transition-all" style={{ fontFamily: "cursive" }}>
          neelkanth
        </span>
        <span className="text-xs md:text-sm text-red-500 hover:scale-105 transition-all">
          J E W E L L E R S
        </span>
        <span className="text-[10px] md:text-xs hover:scale-105 transition-all">
          A WORLD DESIGNS
        </span>
      </div>

      <ul className="hidden xl:flex items-center font-semibold text-base">
        <li className="hover:bg-sky-300 hover:text-white rounded-md transition-all cursor-pointer">
          <a className="px-5 py-3 block">HOME</a>
        </li>
        <li className="relative group">
          <div className="px-5 py-3 hover:bg-sky-300 hover:text-white rounded-md transition-all cursor-pointer flex items-center gap-0.5">
            COLLECTIONS
            <FontAwesomeIcon icon={faAngleDown} className="text-sm ml-1" />
          </div>
          <div className="absolute right-1 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-[60]">
            <div className="bg-white border border-gray-200 shadow-lg overflow-hidden flex w-[500px]">
              {/* Left side - Menu items */}
              <ul className="w-1/2 border-r border-gray-200">
                <li className="px-5 py-2 hover:bg-sky-300 hover:text-white cursor-pointer transition-colors">
                  WEEDING JEWELLERY
                </li>
                <li className="px-5 py-2 hover:bg-sky-300 hover:text-white cursor-pointer transition-colors">
                  SIGNATURE
                </li>
                <li className="px-5 py-2 hover:bg-sky-300 hover:text-white cursor-pointer transition-colors">
                  EVERYDAY ELEGANCE
                </li>
                <li className="px-5 py-2 hover:bg-sky-300 hover:text-white cursor-pointer transition-colors">
                  CELEBRATIONS
                </li>
              </ul>
              
              {/* Right side - Images */}
              <div className="w-1/2 p-3">
                <div className="grid grid-cols-2 gap-2 h-full">
                  <div className="h-32 overflow-hidden">
                    <img 
                      src={traditional} 
                      alt="Traditional Jewelry" 
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="h-32 overflow-hidden">
                    <img 
                      src={wedding} 
                      alt="Wedding Jewelry" 
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li className="hover:bg-sky-300 hover:text-white rounded-md transition-all cursor-pointer">
          <a className="px-5 py-3 block">About</a>
        </li>
        <li className="hover:bg-sky-300 hover:text-white rounded-md transition-all cursor-pointer">
          <a onClick={handleContactClick} className="px-5 py-3 block cursor-pointer">Contact Us</a>
        </li>
      </ul>

      <button onClick={toggleMenu} className="xl:hidden flex items-center" aria-label="Toggle Menu">
        {isMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
      </button>

      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg xl:hidden z-[60]">
          <ul className="flex flex-col font-semibold text-base">
            <li className="p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer">
              Home
            </li>
            <li className="p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer">
              Collections
            </li>
            <li className="p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer">
              About
            </li>
            <li className="p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer" onClick={handleContactClick}>
              Contact
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;