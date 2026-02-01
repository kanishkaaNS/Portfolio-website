import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import Layout from "./components/Layout.jsx";
import Hero from "./components/Hero.jsx";
import About from './components/About.jsx';

function App() {
  useEffect(() => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray(".reveal").forEach((el) => {
    gsap.fromTo(
      el,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          toggleActions: "play reverse play reverse",
        },
      }
    );
  });
}, []);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      smooth: true,
      smoothTouch: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  
  return (
    <Layout>
      <Hero />
      <About/>

      {/* Temporary scroll space */}
      <section style={{ height: "100vh" }} />
      <section style={{ height: "100vh" }} />
    </Layout>
  );
}

export default App;
