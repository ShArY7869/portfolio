import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function AffiliateMarketing() {
  return (
    <motion.div className="max-w-6xl mx-auto px-4 py-16" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Helmet>
        <title>Affiliate Marketing — Sharyar</title>
        <meta name="description" content="Amazon affiliate marketing services: strategy, content, and conversion optimization." />
      </Helmet>

      <h2 className="text-3xl font-bold mb-4">Amazon Affiliate Marketing</h2>
      <p className="text-gray-300 mb-6">
        I create affiliate funnels, optimize product pages, run social campaigns, and design landing pages for higher conversions.
      </p>

      <h3 className="text-2xl font-semibold mb-2">What I do</h3>
      <ul className="list-disc list-inside text-gray-300 mb-6">
        <li>Product research & selection</li>
        <li>SEO-driven review articles & landing pages</li>
        <li>PPC & social advertising</li>
        <li>Email funnels & conversion optimization</li>
      </ul>

      <Link to="/projects" className="inline-block mt-4 text-neonBlue">← Back to Projects</Link>
    </motion.div>
  );
}
