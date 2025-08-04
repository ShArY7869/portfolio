import { motion } from "framer-motion";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white text-center">
      <motion.h1 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
        className="text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500"
      >
        Hi, I'm Sharyar
      </motion.h1>
      
      <motion.p 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 0.5, duration: 1 }}
        className="text-lg max-w-xl text-gray-300"
      >
        A passionate developer and creative designer who loves building clean, modern, and user-friendly applications.
      </motion.p>
      
      <motion.a 
        href="/projects"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="mt-8 px-6 py-3 rounded-lg text-white font-medium shadow-lg 
                   bg-gradient-to-r from-blue-500 to-purple-600 hover:opacity-90 transition"
      >
        View My Work
      </motion.a>
    </section>
  );
}
