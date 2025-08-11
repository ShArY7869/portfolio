import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaMoon, FaSun } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(() => {
    // preserve preference
    const saved = localStorage.getItem("theme");
    if (saved) return saved === "dark";
    // default: prefer dark
    return true;
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-3 backdrop-blur-md bg-white/5 border-b border-white/10 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link to="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neonBlue to-neonPurple">
            Sharyar
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="hover:text-neonBlue">Home</Link>
          <Link to="/about" className="hover:text-neonBlue">About</Link>
          <Link to="/projects" className="hover:text-neonBlue">Projects</Link>
          <Link to="/contact" className="hover:text-neonBlue">Contact</Link>
          <button
            onClick={() => setDark(!dark)}
            className="p-2 rounded-md border border-white/10 hover:bg-white/5"
            aria-label="Toggle dark mode"
          >
            {dark ? <FaSun /> : <FaMoon />}
          </button>
        </div>

        {/* mobile */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={() => setDark(!dark)}
            className="p-2 rounded-md border border-white/10 hover:bg-white/5"
            aria-label="Toggle dark mode"
          >
            {dark ? <FaSun /> : <FaMoon />}
          </button>

          <button
            onClick={() => setOpen(!open)}
            className="p-2 rounded-md border border-white/10 hover:bg-white/5"
            aria-label="Toggle menu"
          >
            <span className="text-xl">{open ? "✕" : "☰"}</span>
          </button>
        </div>
      </nav>

      {/* slide-down mobile menu */}
      <div className={`md:hidden bg-white/5 border-b border-white/10 ${open ? "block" : "hidden"}`}>
        <div className="px-4 py-4 flex flex-col space-y-3">
          <Link to="/" onClick={() => setOpen(false)} className="hover:text-neonBlue">Home</Link>
          <Link to="/about" onClick={() => setOpen(false)} className="hover:text-neonBlue">About</Link>
          <Link to="/projects" onClick={() => setOpen(false)} className="hover:text-neonBlue">Projects</Link>
          <Link to="/contact" onClick={() => setOpen(false)} className="hover:text-neonBlue">Contact</Link>
        </div>
      </div>
    </header>
  );
}
