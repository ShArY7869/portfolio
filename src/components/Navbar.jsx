import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <nav className="backdrop-blur-lg bg-white/10 border-b border-white/20 text-white px-6 py-4 flex justify-between items-center fixed w-full z-50">
      <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 shadow-neon">
        Sharyar
      </h1>
      <ul className="flex space-x-6">
        <li><Link to="/" className="hover:text-neonBlue transition">Home</Link></li>
        <li><Link to="/about" className="hover:text-neonBlue transition">About</Link></li>
        <li><Link to="/projects" className="hover:text-neonBlue transition">Projects</Link></li>
        <li><Link to="/contact" className="hover:text-neonBlue transition">Contact</Link></li>
      </ul>
      <button 
        onClick={() => setDark(!dark)} 
        className="ml-6 px-3 py-1 rounded-lg border border-white/30 hover:shadow-neon transition"
      >
        {dark ? "Light" : "Dark"}
      </button>
    </nav>
  );
}
