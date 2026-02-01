import DecryptedText from './DecryptedText';

function Hero() {

  return (
    <section className="hero">
      
      {/* Background layer (grid lives here) */}
      <div className="hero-bg" aria-hidden="true"></div>

      {/* Content layer */}
      <header className="hero-content">
          <h3 className='hero-intro'>Hello There, I'm</h3>

          <h1 className="hero-name">
            <DecryptedText
              text="Kanishkaa N S"
              animateOn="view"
              sequential
              revealDirection="start"
              speed={80}
              maxIterations={6}
            />
          </h1>

        <p className="hero-role">
          A Frontend Web Developer
        </p>

        <p className="hero-tagline">
          Building clean, responsive, and interactive web experiences.
        </p>
      </header>

    </section>
    
  );
}

export default Hero;
