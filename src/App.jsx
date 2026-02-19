import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import Layout from "./components/Layout.jsx";
import Hero from "./components/Hero.jsx";
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import Resume from './components/Resume.jsx';

function App() {

  gsap.fromTo(
    ".project-reveal",
    { opacity: 0, y: 40 },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out",
      stagger: 0.15,
      scrollTrigger: {
        trigger: ".projects-grid",
        start: "top 80%",
        once: true,
      },
    }
  );

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

  const progressBar = document.getElementById("scroll-progress");

  function updateProgress() {
    const scrollTop = window.scrollY;
    const docHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const progress = (scrollTop / docHeight) * 100;
    progressBar.style.width = `${progress}%`;

    requestAnimationFrame(updateProgress);
  }

    updateProgress();


  
  return (
    <Layout>
      <Hero />
      <About />
      <Projects />
      <Resume />
      <Contact />
    </Layout>
  );
}

export default App;
