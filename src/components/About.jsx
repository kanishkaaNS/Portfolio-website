function About() {
  return (
    <section className="about" id="about">
      <header className="about-header">
        <h2>About Me</h2>
      </header>

      <div className="about-content reveal">
        <p className="about-text">
          I’m a frontend developer who enjoys building clean, modern websites with a strong focus on user experience.
          I mainly work with React and care a lot about structure, spacing, and smooth interactions. 
          I like designs that feel intentional, simple, breathable layouts with subtle animations that enhance the experience without stealing attention.
        </p>

        <p className="about-text">
          I’m constantly tweaking, refining, and improving my work because I believe good websites aren’t just built once, they’re shaped over time. 
          My goal is to create interfaces that look good, feel natural, and actually make sense to use.
        </p>
      </div>

      <div className="skills reveal">
        <h3>Skills</h3>

        <div className="skills-groups">
          <div className="skill-group">
            <h4>Frontend</h4>
            <p>HTML, CSS, JavaScript</p>
            <p>React</p>
          </div>

          <div className="skill-group">
            <h4>Layout & Design</h4>
            <p>Responsive Design</p>
            <p>CSS Flexbox & Grid</p>
          </div>

          <div className="skill-group">
            <h4>Best Practices</h4>
            <p>Accessibility Basics</p>
          </div>

          <div className="skill-group">
            <h4>Tools</h4>
            <p>Git & GitHub</p>
          </div>
        </div>
      </div>

      <div className="about-interests reveal">
        <h3>Interests</h3>
        <p>
          Outside of coding, I enjoy cooking, gaming and keeping up with Formula 1.
        </p>
      </div>

    </section>
  );
}

export default About;
