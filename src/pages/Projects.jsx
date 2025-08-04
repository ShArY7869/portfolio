import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Import your local images
import logoDesign from "../pages/Assets/ChatGPT Image Aug 1, 2025, 01_02_23 PM.png";


const projects = [
  {
    title: "Cinematic Video Edit",
    description: "A smooth cinematic edit using Adobe Premiere Pro & After Effects.",
    video: "https://www.youtube.com/embed/ScMzIvxBSi4",
  },
  {
    title: "Logo Design",
    description: "Minimalistic logo design made with Adobe Illustrator.",
    image: logoDesign,
  },
  {
    title: "Affiliate Marketing Landing Page",
    description: "High-converting landing page built with React & Tailwind.",
    internalLink: "/affiliate-marketing", // Internal route
  },
];

export default function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="p-8"
    >
      <Helmet>
        <title>Projects | Sharyar Portfolio</title>
        <meta
          name="description"
          content="Explore my projects including cinematic video editing, logo design, and Amazon affiliate marketing."
        />
        <meta property="og:title" content="Sharyar Portfolio - Projects" />
        <meta
          property="og:description"
          content="Browse through professional projects in video editing, logo design, and affiliate marketing."
        />
        <meta property="og:url" content="https://your-vercel-url.vercel.app/projects" />
        <meta property="og:type" content="website" />
      </Helmet>

      <h1 className="text-4xl font-bold mb-8">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 backdrop-blur-lg p-4 rounded-xl shadow-lg"
          >
            {project.video ? (
              <iframe
                className="w-full h-48 rounded-lg"
                src={project.video}
                title={project.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : (
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-lg"
              />
            )}
            <h2 className="text-xl font-bold mt-4">{project.title}</h2>
            <p className="text-gray-300 text-sm">{project.description}</p>
            {project.internalLink && (
              <Link
                to={project.internalLink}
                className="inline-block mt-4 text-blue-400 hover:underline"
              >
                View Details →
              </Link>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
