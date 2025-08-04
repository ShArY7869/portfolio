import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import AffiliateMarketing from "./pages/AffiliateMarketing";

export default function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      {/* Header */}
      <Navbar />

      {/* Page transitions */}
      <AnimatePresence mode="wait">
        <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/projects" element={<Projects />} />
  <Route path="/affiliate-marketing" element={<AffiliateMarketing />} />
  <Route path="/contact" element={<Contact />} />
</Routes>
      </AnimatePresence>

      {/* Footer */}
      <Footer />
    </div>
  );
}
