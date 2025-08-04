import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A modern portfolio with animations and SEO.",
      link: "https://your-vercel-url.vercel.app"
    },
    {
      title: "Graphic Design Showcase",
      description: "Collection of creative graphic designs and edits.",
      link: "#"
    },
    {
      title: "Affiliate Marketing Landing Page",
      description: "High-converting product landing page design.",
      link: "#"
    }
  ];

  return (
    <section className="pt-24 px-8 min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <Helmet>
        <title>Projects | Sharyar Portfolio</title>
        <meta name="description" content="Explore Sharyar's portfolio projects including web development, graphic design, and marketing campaigns." />
        <meta property="og:title" content="Projects - Sharyar Portfolio" />
        <meta property="og:description" content="See Sharyar's work in web development, video editing, graphic design, and affiliate marketing." />
        <meta property="og:url" content="https://your-vercel-url.vercel.app/projects" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <h2 className="text-4xl font-bold mb-8 text-center">Projects</h2>
      <motion.div 
        className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.1 } }
        }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="p-6 rounded-xl bg-white/10 border border-white/20 shadow-md hover:shadow-xl transition transform hover:scale-105 backdrop-blur-md"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neonBlue hover:underline"
            >
              View Project →
            </a>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
