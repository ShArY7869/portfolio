import { Helmet } from "react-helmet";

export default function Home() {
  return (
    <section className="pt-24 min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <Helmet>
        <title>Sharyar | Portfolio</title>
        <meta name="description" content="Sharyar - Full-Stack Developer and Designer portfolio showcasing web apps and creative projects." />
      </Helmet>

      <h1 className="text-5xl font-bold mb-4">Hi, I’m Sharyar 👋</h1>
      <p className="text-xl max-w-2xl text-center mb-6">
        I’m a passionate Full‑Stack Developer and Creative Designer who loves building 
        interactive and visually stunning web applications.
      </p>
      <a href="/projects" className="px-6 py-3 rounded-lg bg-neonBlue text-white font-semibold shadow-lg hover:scale-105 transition">
        View My Work
      </a>
    </section>
  );
}
