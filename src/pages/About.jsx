import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

export default function About() {
  const skills = [
    "React", "Tailwind CSS", "Framer Motion",
    "Node.js", "Express", "MySQL",
    "Video Editing", "Graphic Design", "Affiliate Marketing"
  ];

  return (
    <section className="pt-24 px-8 min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <Helmet>
        <title>About | Sharyar Portfolio</title>
        <meta name="description" content="Learn about Sharyar - developer & designer skilled in React, video editing, graphic design, and affiliate marketing." />
        <meta property="og:title" content="About - Sharyar Portfolio" />
        <meta property="og:description" content="Discover Sharyar's skills and experience in development and creative fields." />
        <meta property="og:image" content="https://your-vercel-url.vercel.app/og-image.png" />
        <meta property="og:url" content="https://your-vercel-url.vercel.app/about" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About - Sharyar Portfolio" />
        <meta name="twitter:description" content="Discover Sharyar's skills and experience in development and creative fields." />
        <meta name="twitter:image" content="https://your-vercel-url.vercel.app/og-image.png" />
      </Helmet>

      <h2 className="text-4xl font-bold mb-6">About Me</h2>
      <p className="text-lg leading-7 mb-6">
        I’m Sharyar, a passionate developer and designer with a focus on
        building beautiful, functional, and user-friendly experiences. My
        skillset combines coding expertise with creativity, including
        video editing, graphic design, and affiliate marketing.
      </p>

      <h3 className="text-2xl font-semibold mt-8 mb-4">Skills</h3>
      <motion.div 
        className="grid grid-cols-2 md:grid-cols-3 gap-4"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.1 }
          }
        }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-center shadow-md"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            {skill}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
