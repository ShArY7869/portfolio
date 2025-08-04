import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="backdrop-blur-lg bg-white/10 border-t border-white/20 text-gray-300 text-center py-6 mt-16">
      <p className="mb-3">© {new Date().getFullYear()} Sharyar. All Rights Reserved.</p>
      <div className="flex justify-center space-x-6 text-xl">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-neonBlue transition"><FaGithub /></a>

        <a href="#" className="hover:text-neonPurple transition"><FaLinkedin /></a>
        <a href="#" className="hover:text-neonBlue transition"><FaTwitter /></a>
      </div>
    </footer>
  );
}
