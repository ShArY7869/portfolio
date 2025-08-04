import { Helmet } from "react-helmet";
import { FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="pt-24 px-8 min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <Helmet>
        <title>Contact | Sharyar Portfolio</title>
        <meta name="description" content="Get in touch with Sharyar via email, GitHub, or Instagram." />
        <meta property="og:title" content="Contact - Sharyar Portfolio" />
        <meta property="og:description" content="Reach out to Sharyar through email and social links." />
        <meta property="og:url" content="https://your-vercel-url.vercel.app/contact" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
      </Helmet>

      <h2 className="text-4xl font-bold mb-8 text-center">Contact</h2>
      <div className="max-w-xl mx-auto backdrop-blur-lg bg-white/10 p-8 rounded-xl border border-white/20">
        <p className="text-lg text-center mb-6">
          Feel free to reach out via any of the following:
        </p>
        <div className="flex flex-col space-y-5 text-center text-lg">
          <div className="flex justify-center items-center space-x-3">
            <FaEnvelope className="text-neonBlue" size={24} />
            <a href="mailto:sharyarhacktawfh@gmail.com" className="hover:text-neonBlue transition">
              sharyarhacktawfh@gmail.com
            </a>
          </div>
          <div className="flex justify-center items-center space-x-3">
            <FaGithub className="text-neonBlue" size={24} />
            <a href="https://github.com/ShArY7869" target="_blank" rel="noopener noreferrer" className="hover:text-neonBlue transition">
              github.com/ShArY7869
            </a>
          </div>
          <div className="flex justify-center items-center space-x-3">
            <FaInstagram className="text-neonBlue" size={24} />
            <a href="https://instagram.com/shary_abbasiii" target="_blank" rel="noopener noreferrer" className="hover:text-neonBlue transition">
              instagram.com/shary_abbasiii
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
