import Tilt from "react-parallax-tilt";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export default function Projects() {
  const projects = [
    { title: "Portfolio Website", desc: "React + Tailwind + Framer Motion", img: "/images/portfolio.png", link: "#" },
    { title: "E-commerce Template", desc: "React + Redux + Stripe", img: "/images/ecommerce.png", link: "#" },
    { title: "Chat App", desc: "Socket.io + Node.js", img: "/images/chat.png", link: "#" }
  ];

  return (
    <section className="pt-24 p-10 min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 dark:from-white dark:to-gray-100 text-white dark:text-black">
      <h2 className="text-4xl font-bold text-center mb-8">Projects</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <Tilt
            key={index}
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            className="p-6 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20 hover:shadow-neon transition"
          >
            <LazyLoadImage src={project.img} alt={project.title} effect="blur" className="rounded-lg mb-4" />
            <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
            <p className="text-sm mb-4">{project.desc}</p>
            <a href={project.link} className="text-neonBlue hover:text-neonPurple">View</a>
          </Tilt>
        ))}
      </div>
    </section>
  );
}
