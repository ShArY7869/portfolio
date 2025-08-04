import { useCallback } from "react";
import Particles from "react-tsparticles";

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine) => {
    // no engine.loadFull in older versions, so do nothing
  }, []);

  const particlesOptions = {
    background: { color: "transparent" },
    fpsLimit: 60,
    interactivity: {
      events: { onHover: { enable: true, mode: "repulse" }, resize: true },
      modes: { repulse: { distance: 100, duration: 0.4 } },
    },
    particles: {
      color: { value: "#00f6ff" },
      links: { color: "#00f6ff", distance: 150, enable: true, opacity: 0.5, width: 1 },
      move: { enable: true, speed: 2, outModes: { default: "bounce" } },
      number: { density: { enable: true, area: 800 }, value: 60 },
      opacity: { value: 0.5 },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 5 } },
    },
    detectRetina: true,
  };

  return <Particles className="absolute w-full h-full -z-10" init={particlesInit} options={particlesOptions} />;
}
