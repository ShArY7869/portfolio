import React from "react";
import { Helmet } from "react-helmet";
import { FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <Helmet>
        <title>Contact — Sharyar</title>
      </Helmet>

      <h2 className="text-3xl font-bold mb-4">Contact</h2>
      <p className="text-gray-300 mb-6">Feel free to reach out via email or social links below.</p>

      <div className="bg-white/5 p-6 rounded-lg grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex items-center gap-3">
          <FaEnvelope />
          <a href="mailto:sharyarhacktawfh@gmail.com" className="text-neonBlue">sharyarhacktawfh@gmail.com</a>
        </div>
        <div className="flex items-center gap-3">
          <FaGithub />
          <a href="https://github.com/ShArY7869" target="_blank" rel="noreferrer" className="text-neonBlue">github.com/ShArY7869</a>
        </div>
        <div className="flex items-center gap-3">
          <FaInstagram />
          <a href="https://instagram.com/shary_abbasiii" target="_blank" rel="noreferrer" className="text-neonBlue">instagram.com/shary_abbasiii</a>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-gray-300">Location:</span>
          <span className="text-gray-300">Karachi, Pakistan</span>
        </div>
      </div>
    </div>
  );
}
