import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

export default function About() {
  const skills = [
    "React", "Tailwind CSS", "Framer Motion",
    "Node.js", "Express", "MySQL",
    "Video Editing", "Graphic Design", "Affiliate Marketing"
  ];

  return (
    <motion.div className="max-w-6xl mx-auto px-4 py-16" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Helmet>
        <title>About — Sharyar</title>
      </Helmet>

      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <p className="text-gray-300 mb-6 max-w-3xl">
        I’m Sharyar — a creative technologist combining design and development to craft digital experiences.
        I specialize in video editing, graphic design, building web apps, and affiliate marketing strategies.
      </p>

      <h3 className="text-2xl font-semibold mb-3">Skills</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {skills.map((s) => (
          <div key={s} className="p-3 bg-white/5 rounded-lg text-center text-sm">
            {s}
          </div>
        ))}
      </div>
    </motion.div>
  );
}
