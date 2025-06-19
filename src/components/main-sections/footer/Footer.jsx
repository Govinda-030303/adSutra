import React from "react";
import {
  SiLinkedin,
  SiInstagram,
  SiX,
  SiFacebook,
  SiBehance,
} from "react-icons/si";

const Footer = () => {
  return (
    <footer className="bg-[#140A1F] text-white py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
        {/* Logo and description */}
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <span className="text-4xl font-black tracking-widest">Ad</span>
            <span>Sutra</span>
          </h1>
          <p className="mt-6 text-gray-300 leading-relaxed">
            Ad Sutra is an award-winning top digital marketing agency providing branding,
            UX/UI, and product design services in Dubai, New York, London,
            Paris, and beyond.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col gap-4 text-gray-300 md:justify-center">
          <a href="#" className="hover:text-white transition">
            How it Works
          </a>
          {/* <a href="#" className="hover:text-white transition">
            Recent Work
          </a>
          <a href="#" className="hover:text-white transition">
            What You Get
          </a> */}
          <a href="#" className="hover:text-white transition">
            Services
          </a>
        </div>

        {/* Contact and Social */}
        <div className="flex flex-col justify-between gap-6">
          <div className="flex gap-4">
            <a
              href="#"
              className="p-2 rounded-full border border-gray-400 hover:bg-white hover:text-black transition"
            >
              <SiLinkedin />
            </a>
            <a
              href="#"
              className="p-2 rounded-full border border-gray-400 hover:bg-white hover:text-black transition"
            >
              <SiInstagram />
            </a>
            <a
              href="#"
              className="p-2 rounded-full border border-gray-400 hover:bg-white hover:text-black transition"
            >
              <SiX />
            </a>
            <a
              href="#"
              className="p-2 rounded-full border border-gray-400 hover:bg-white hover:text-black transition"
            >
              <SiFacebook />
            </a>
            <a
              href="#"
              className="p-2 rounded-full border border-gray-400 hover:bg-white hover:text-black transition"
            >
              <SiBehance />
            </a>
          </div>
          <div>
            <p className="text-xl">STHANU MEDIA SOLUTIONS PRIVATE LIMITED</p>
            <p>
              S-12, Rashi Pride Apts, BTM 6th Stage, 2nd Phase, Bannerghatta
              Road, Bangalore South, Bengaluru, Karnataka 560076
            </p>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-sm text-center text-gray-400 mt-12">
        Copyright © 2025 Wdesigna LLC
      </div>
    </footer>
  );
};

export default Footer;
