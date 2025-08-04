import { FaGithub, FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="pt-24 p-10 min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 dark:from-white dark:to-gray-100 text-white dark:text-black">
      <h2 className="text-4xl font-bold text-center mb-8">Contact</h2>
      
      <div className="max-w-xl mx-auto backdrop-blur-lg bg-white/10 p-8 rounded-xl border border-white/20 shadow-neon">
        <p className="text-lg text-center mb-6">
          Feel free to reach out to me via any of the following platforms:
        </p>
        <div className="flex flex-col space-y-5 text-center text-lg">
          <div className="flex justify-center items-center space-x-3">
            <FaEnvelope className="text-neonBlue" size={24} />
            <a href="sharyarhacktawfh@gmail.com" className="hover:text-neonBlue transition">
              your-email@gmail.com
            </a>
          </div>
          <div className="flex justify-center items-center space-x-3">
            <FaGithub className="text-neonBlue" size={24} />
            <a href="https://github.com/ShArY7869" target="_blank" rel="noopener noreferrer" className="hover:text-neonBlue transition">
              github.com/yourgithub
            </a>
          </div>
          <div className="flex justify-center items-center space-x-3">
            <FaInstagram className="text-neonBlue" size={24} />
            <a href="https://instagram.com/shary_abbasiii" target="_blank" rel="noopener noreferrer" className="hover:text-neonBlue transition">
              instagram.com/yourinsta
            </a>
          </div>
          <div className="flex justify-center items-center space-x-3">
            <FaLinkedin className="text-neonBlue" size={24} />
            <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer" className="hover:text-neonBlue transition">
              linkedin.com/in/yourlinkedin
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
