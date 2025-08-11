import React from "react";
import { FaGithub, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10 bg-white/3">
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-300">© {new Date().getFullYear()} Sharyar. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="https://github.com/ShArY7869" target="_blank" rel="noreferrer" className="hover:text-neonBlue"><FaGithub /></a>
          <a href="https://instagram.com/shary_abbasiii" target="_blank" rel="noreferrer" className="hover:text-neonBlue"><FaInstagram /></a>
        </div>
      </div>
    </footer>
  );
}
