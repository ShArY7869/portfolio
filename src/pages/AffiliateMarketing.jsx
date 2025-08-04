import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function AffiliateMarketing() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="p-8"
    >
      <Helmet>
        <title>Amazon Affiliate Marketing | Sharyar Portfolio</title>
        <meta
          name="description"
          content="Learn about my Amazon affiliate marketing strategies, skills, and success stories."
        />
        <meta property="og:title" content="Amazon Affiliate Marketing - Sharyar Portfolio" />
        <meta
          property="og:description"
          content="Explore how I leverage Amazon affiliate marketing to generate passive income and grow online sales."
        />
        <meta property="og:url" content="https://your-vercel-url.vercel.app/affiliate-marketing" />
        <meta property="og:type" content="website" />
      </Helmet>

      <h1 className="text-4xl font-bold mb-4">Amazon Affiliate Marketing</h1>
      <p className="text-lg text-gray-300 mb-6">
        I specialize in promoting Amazon products through effective content creation, SEO, and paid
        marketing strategies. This includes building high-converting landing pages, keyword
        optimization, and social media campaigns to increase product sales.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Key Skills</h2>
      <ul className="list-disc list-inside text-gray-300 mb-6">
        <li>Amazon Affiliate Program Management</li>
        <li>SEO for Affiliate Sites</li>
        <li>Facebook & Instagram Ad Campaigns</li>
        <li>Email Marketing for Affiliate Products</li>
        <li>Conversion Rate Optimization</li>
      </ul>

      <div className="rounded-lg overflow-hidden shadow-lg mb-6">
        <img
          src="https://images.unsplash.com/photo-1581090700227-4c4b1e1cfd9e"
          alt="Amazon Affiliate Marketing"
          className="w-full object-cover"
        />
      </div>

      <Link
        to="/projects"
        className="text-blue-400 hover:underline text-lg inline-block mt-4"
      >
        ← Back to Projects
      </Link>
    </motion.div>
  );
}
