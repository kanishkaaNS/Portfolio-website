import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";

function App() {
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
    <>
      <Header />
      <Hero />

      {/* Temporary scroll space */}
      <section style={{ height: "100vh" }}></section>
      <section style={{ height: "100vh" }}></section>
    </>
  );
}

export default App;
