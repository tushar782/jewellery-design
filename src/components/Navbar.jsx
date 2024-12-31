import { useState } from "react";
import { Menu, X } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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

      <ul className="hidden xl:flex items-center gap-12 font-semibold text-base">
        <li className="p-3 hover:bg-sky-300 hover:text-white rounded-md transition-all cursor-pointer">
          HOME
        </li>
        <li className="relative group">
          <div className="p-3 hover:bg-sky-300 hover:text-white rounded-md transition-all cursor-pointer flex items-center gap-0.5">
            COLLECTIONS
            <FontAwesomeIcon icon={faAngleDown} className="text-sm" />
          </div>
          <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-[60]">
            <ul className="bg-white border border-gray-200 rounded-md shadow-lg overflow-hidden min-w-[200px]">
              <li className="px-4 py-2 hover:bg-sky-300 hover:text-white cursor-pointer transition-colors">
                WEEDING JEWELLERY
              </li>
              <li className="px-4 py-2 hover:bg-sky-300 hover:text-white cursor-pointer transition-colors">
                SIGNATURE
              </li>
              <li className="px-4 py-2 hover:bg-sky-300 hover:text-white cursor-pointer transition-colors">
                EVERYDAT ELEGANCE
              </li>
              <li className="px-4 py-2 hover:bg-sky-300 hover:text-white cursor-pointer transition-colors">
                CELEBRATIONS
              </li>
            </ul>
          </div>
        </li>
        <li className="p-3 hover:bg-sky-300 hover:text-white rounded-md transition-all cursor-pointer">
          About
        </li>
        <li className="p-3 hover:bg-sky-300 hover:text-white rounded-md transition-all cursor-pointer">
          Contact Us
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
            <li className="p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer">
              Contact
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;