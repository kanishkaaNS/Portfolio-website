function Projects() {
  return (
    <section className="projects" id="projects">
      <header className="projects-header reveal">
        <h2>Projects</h2>
      </header>

      <div className="projects-grid">
        {/* Featured Project */}
        <article className="project-card project-featured reveal">
          <span className="project-badge">Featured</span>

          <h3>Cloud Storage System</h3>

          <p className="project-description">
            CloudStore is a full-stack cloud storage web application inspired by
            platforms like Google Drive and Dropbox. It allows users to securely
            upload, organize, and manage files through a modern responsive interface
            with features like authentication, folder management, storage analytics,
            and AWS S3 cloud integration.
          </p>

          <ul className="project-tech">
            <li>React</li>
            <li>FastAPI</li>
            <li>PostgreSQL</li>
            <li>AWS S3</li>
            <li>JWT Auth</li>
          </ul>

          <div className="project-links">
            <a
              href="https://cloudstoragesystem-cjqn.onrender.com"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo ↗
            </a>
            <a
              href="https://github.com/kanishkaaNS/Cloud-Storage-System"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>
          </div>
        </article>

        {/* Project 2 */}
        <article className="project-card reveal">
          <h3>Coorg Emporium Spices</h3>

          <p className="project-description">
            A full-stack e-commerce website for browsing and ordering organic spices
            from Coorg. I built the entire frontend, focusing on a clean UI,
            responsive layout, and smooth shopping flow.
          </p>

          <ul className="project-tech">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Bootstrap</li>
            <li>Django</li>
          </ul>

          <div className="project-links">
            <a
              href="https://coorgspicesemporium.onrender.com"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo ↗
            </a>
            <a
              href="https://github.com/kanishkaaNS/Coorg-Spices-Emporium.git"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>
          </div>
        </article>

        {/* Project 3 */}
        <article className="project-card reveal">
          <h3>Weather App</h3>

          <p className="project-description">
            A clean and minimal weather application that fetches and displays
            real-time weather data by city using the OpenWeather API.
          </p>

          <ul className="project-tech">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>OpenWeather API</li>
          </ul>

          <div className="project-links">
            <a
              href="https://github.com/kanishkaaNS/Weather-App.git"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>
          </div>
        </article>
      </div>

      <div className="projects-current reveal">
        <h3 className="projects-current-title">Currently Working On</h3>

        <article className="current-card">
          <span className="current-badge">In Progress</span>

          <h4>Formula 1 Race Outcome Predictor</h4>

          <p className="current-description">
            A data-driven web application exploring Formula 1 race outcome
            predictions using historical race data. The focus is on frontend
            data visualization, selection-based prediction logic, and
            interactive UI design.
          </p>

          <p className="current-note">
            Early-stage project — design and data modeling in progress.
          </p>
        </article>
      </div>
    </section>
  );
}

export default Projects;
