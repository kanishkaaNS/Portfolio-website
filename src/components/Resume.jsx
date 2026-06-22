import resumePdf from '../assets/Kanishkaa_N_S_Frontend_Developer_Resume.pdf';

function Resume(){
    return(
        <section id="resume" className="resume reveal">
            <div className="resume-container">
                <h2>Resume</h2>
                <p>
                A concise overview of my skills, experience, and education.
                Feel free to download a copy.
                </p>

                <a
                href={resumePdf}
                download="Kanishkaa_N_S_Frontend_Developer_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="resume-btn"
                >
                Download Resume
                </a>
            </div>
        </section>
    );
}

export default Resume