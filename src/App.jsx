import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

import Layout from "./components/Layout.jsx";
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
    <Layout>
      <Hero />

      {/* Temporary scroll space */}
      <section style={{ height: "100vh" }} />
      <section style={{ height: "100vh" }} />
    </Layout>
  );
}

export default App;
