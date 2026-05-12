import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import Menu from "./components/Menu/Menu";
import Background from "./components/Background/Background";

import Home from "./pages/Home/Home";
import Work from "./pages/Work/Work";
import Project from "./pages/Project/Project";
import About from "./pages/About/About";
import Gallery from "./pages/Gallery/Gallery";
import Contact from "./pages/Contact/Contact";
import Events from "./pages/Events/Events";
import Event from "./pages/Event/Event";

import { AnimatePresence } from "framer-motion";
import Preloader from "./components/Preloader/Preloader";
import gsap from "gsap";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 1400);
  }, [pathname]);

  return null;
}

function App() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Pause all GSAP animations initially
    gsap.globalTimeline.pause();

    const handleLoad = () => {
      // Small delay to ensure smooth transition after everything is parsed
      setTimeout(() => {
        setIsLoading(false);
        // Play animations slightly after the preloader starts to fade out
        setTimeout(() => {
          gsap.globalTimeline.play();
        }, 500);
      }, 800);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      // Fallback timeout
      const fallbackTimer = setTimeout(handleLoad, 3000);
      return () => {
        window.removeEventListener("load", handleLoad);
        clearTimeout(fallbackTimer);
      };
    }
  }, []);

  return (
    <>
      <Preloader isLoading={isLoading} />
      <ScrollToTop />
      <Background />
      <Menu />
      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/work" element={<Work />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/:id" element={<Event />} />
          <Route path="/sample-project" element={<Project />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
