import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="pt-24 p-10 min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <motion.h2 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.7 }}
        className="text-4xl font-bold text-center mb-8"
      >
        About Me
      </motion.h2>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 0.8 }}
        className="backdrop-blur-lg bg-white/10 border border-white/20 max-w-3xl mx-auto p-8 rounded-xl shadow-lg"
      >
        <p className="text-lg text-gray-300 leading-7">
          Hello! I’m Sharyar, a passionate web developer focused on creating modern, 
          interactive, and visually appealing applications. I love learning 
          cutting-edge technologies and crafting seamless user experiences.
        </p>
        <p className="mt-6 text-lg text-gray-300 leading-7">
          My skills include <span className="text-blue-400">React.js</span>, 
          <span className="text-purple-400"> Tailwind CSS</span>, 
          and backend experience with <span className="text-blue-400">Node.js</span> & 
          <span className="text-purple-400"> MySQL</span>.
        </p>
        <p className="mt-6 text-lg text-gray-300 leading-7">
          Outside of coding, I enjoy exploring creative design, contributing to open-source 
          projects, and experimenting with new UI trends.
        </p>
      </motion.div>
    </section>
  );
}
