import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <nav className="flex items-center justify-between px-6 py-4 text-white backdrop-blur-md bg-transparent">
        {/* Logo */}
        <div className="text-2xl font-extrabold tracking-wide">
          <h1 className="text-4xl font-bold text-white">
            Ad <span className="text-purple-400 animate-pulse">Sutra</span>
          </h1>
        </div>

        {/* Hamburger Menu Button (mobile only) */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Menu Items */}
        <ul
          className={`flex flex-col md:flex-row items-center gap-6 text-lg font-medium absolute md:static top-full left-0 w-full md:w-auto bg-[#0d031c] md:bg-transparent z-40 md:z-auto px-6 py-4 md:py-0 transition-all duration-300 ease-in-out ${
            menuOpen
              ? "opacity-100 visible"
              : "opacity-0 invisible md:opacity-100 md:visible"
          }`}
        >
          <li className="hover:text-purple-300 cursor-pointer transition py-2 md:py-0">
            How It Works
          </li>
          <li className="hover:text-purple-300 cursor-pointer transition py-2 md:py-0">
            Services
          </li>
          <li className="py-2 md:py-0">
            <button className="bg-white text-black font-semibold px-6 py-2 rounded-full hover:bg-gray-200 transition w-full md:w-auto">
              Get Started
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
