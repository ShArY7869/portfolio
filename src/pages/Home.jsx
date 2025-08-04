import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroImage from "../pages/Assets/Hero.png";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="relative min-h-screen flex flex-col items-center justify-center text-center p-6"
    >
      <Helmet>
        <title>Home | Sharyar Portfolio</title>
        <meta
          name="description"
          content="Welcome to Sharyar's portfolio. I am skilled in video editing, graphic design, affiliate marketing, and coding."
        />
        <meta property="og:title" content="Sharyar Portfolio - Home" />
        <meta
          property="og:description"
          content="A creative professional in video editing, graphic design, affiliate marketing, and development."
        />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <img
          src={heroImage}
          alt="Sharyar"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Introduction */}
      <motion.h1
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-4xl md:text-6xl font-bold text-white mb-4"
      >
        Hi, I'm Sharyar
      </motion.h1>
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-lg text-gray-300 max-w-2xl mb-6"
      >
        A creative professional passionate about{" "}
        <span className="text-blue-400 font-semibold">
          Video Editing, Graphic Design, Affiliate Marketing, and Coding
        </span>
        . I help businesses and individuals tell their stories visually and grow online.
      </motion.p>

      {/* Buttons */}
      <div className="space-x-4">
        <Link
          to="/projects"
          className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          View Projects
        </Link>
        <Link
          to="/contact"
          className="px-6 py-3 bg-transparent border border-white text-white rounded-lg hover:bg-white hover:text-black transition"
        >
          Contact Me
        </Link>
      </div>

      {/* Skills Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-white"
      >
        {["Video Editing", "Graphic Design", "Affiliate Marketing", "Coding"].map((skill, index) => (
          <div
            key={index}
            className="bg-white/10 p-4 rounded-lg backdrop-blur-md hover:scale-105 transition"
          >
            {skill}
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
}
