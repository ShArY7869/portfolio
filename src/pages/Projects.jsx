import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import logoDesign from "../pages/Assets/ChatGPT Image Aug 1, 2025, 01_02_23 PM.png";
import sharyVideo1 from "../pages/Assets/Shary.mp4";
import sharyVideo2 from "../pages/Assets/Shary2.mp4";
import videoThumb from "../pages/Assets/Hero.png";
import landingPage from "../pages/Assets/ChatGPT Image Aug 1, 2025, 01_02_23 PM.png";

const projects = [
  {
    title: "Cinematic Video Edit (Shary1)",
    description: "A cinematic edit using Premiere Pro & After Effects.",
    type: "video",
    src: sharyVideo1,
    thumb: videoThumb
  },
  {
    title: "Cinematic Video Edit (Shary2)",
    description: "Another cinematic edit using Premiere Pro & After Effects.",
    type: "video",
    src: sharyVideo2,
    thumb: videoThumb
  },
  {
    title: "Logo Design Pack",
    description: "Minimal and bold logo designs.",
    type: "image",
    src: logoDesign
  },
  {
    title: "Affiliate Marketing Landing Page",
    description: "High-converting landing page for Amazon affiliate offers.",
    type: "image",
    src: landingPage,
    internal: "/affiliate-marketing"
  }
];

export default function Projects() {
  return (
    <motion.div className="max-w-6xl mx-auto px-4 py-16" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Helmet>
        <title>Projects — Sharyar</title>
      </Helmet>

      <h2 className="text-3xl font-bold mb-8">Projects</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, idx) => (
          <motion.div key={idx} whileHover={{ scale: 1.02 }} className="bg-white/5 rounded-lg overflow-hidden shadow-neon">
            {p.type === "video" ? (
             <video 
  controls 
  className="w-full h-auto aspect-video object-cover"
>
  <source src={p.src} type="video/mp4" />
  Your browser does not support the video tag.
</video>
            ) : (
              <img src={p.src} alt={p.title} className="w-full h-48 object-cover" />
            )}

            <div className="p-4">
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="text-gray-300 text-sm mt-2">{p.description}</p>

              <div className="mt-4 flex items-center justify-between">
                {p.internal ? (
                  <Link to={p.internal} className="text-neonBlue font-semibold">View Details →</Link>
                ) : (
                  <a href={p.src} target="_blank" rel="noreferrer" className="text-neonBlue font-semibold">Open →</a>
                )}
                <span className="text-xs text-gray-400">{p.type.toUpperCase()}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
