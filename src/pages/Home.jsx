import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
// Update this path to your actual image path if different
import heroImage from  "../pages/Assets/Hero1.jpg";

export default function Home() {
  return (
    <motion.div
      className="max-w-6xl mx-auto px-4 py-16"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Helmet>
        <title>Sharyar — Full-Stack Developer & Creative</title>
        <meta name="description" content="Sharyar - Video Editor, Graphic Designer, Affiliate Marketer, and Developer." />
        <meta property="og:title" content="Sharyar — Portfolio" />
        <meta property="og:description" content="Portfolio of Sharyar — video editing, design, affiliate marketing & development." />
      </Helmet>

      <div className="flex flex-col-reverse md:flex-row items-center gap-8">
        {/* text */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Hi, I’m <span className="text-neonBlue">Sharyar</span>
          </h1>
          <p className="text-lg text-gray-300 mb-6 max-w-xl">
            I build visual stories and digital products — <strong>video editing</strong>, <strong>graphic design</strong>, <strong>affiliate marketing</strong>, and <strong>web apps</strong>.
          </p>

          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3">
            <Link to="/projects" className="px-6 py-3 bg-gradient-to-r from-neonBlue to-neonPurple text-black font-semibold rounded-lg shadow-neon">
              View Projects
            </Link>
            <Link to="/contact" className="px-6 py-3 border border-white/10 rounded-lg hover:bg-white/5">
              Contact Me
            </Link>
          </div>

          {/* Skills */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
            {["Video Editing","Graphic Design","Affiliate Marketing","React"].map((s) => (
              <div key={s} className="p-3 bg-white/5 rounded-lg text-sm text-gray-200">
                {s}
              </div>
            ))}
          </div>
        </div>

        {/* image */}
        <div className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden mx-auto shadow-lg border-4 border-white/10">
          <img src={heroImage} alt="Sharyar" className="w-full h-full object-cover" />
        </div>
      </div>
    </motion.div>
  );
}
