import emailjs from "@emailjs/browser";
import githubAnim from "../assets/githubIcon.svg";
import linkedinAnim from "../assets/linkedinIcon.svg";
import emailAnim from "../assets/emailIcon.svg";



function Contact() {
    function sendEmail(e) {
  e.preventDefault();

  emailjs.sendForm(
    "service_fsxnj4u",      // your Service ID
    "template_sf6vpkn",     // your Template ID
    e.target,
    "svjoPap8Qh3RfOB5Z"         // your Public Key
  )
  .then(() => {
    alert("Message sent successfully ✅");
    e.target.reset();
  })
  .catch(() => {
    alert("Something went wrong ❌");
  });
}

  return (
    <section id="contact" className="contact">
      <div className="contact-container">

        {/* LEFT SIDE */}
        <div className="contact-left">
          <header className="contact-header">
            <h2>Let’s talk</h2>
            <p>
              Got a project, idea, or just want to say hi?
              I’m always open to connecting.
            </p>
          </header>

          <div className="contact-social-icons">
            <a
              href="https://github.com/kanishkaaNS"
              target="_blank"
              rel="Github Profile"
            >
              <img src={githubAnim} alt="GitHub" />
              <span>GitHub</span>
            </a>

            <a
              href="https://linkedin.com/in/Kanishkaa-N-S"
              target="_blank"
              rel="LinkedIn Profile"
            >
              <img src={linkedinAnim} alt="LinkedIn" />
              <span>LinkedIn</span>
            </a>

            <a
              href="mailto:kanishkaans07@gmail.com"
              aria-label="Email"
            >
              <img src={emailAnim} alt="Email" />
              <span>Email</span>
            </a>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="contact-right">
          <form className="contact-form" onSubmit={sendEmail}>
            <label>
              Name
              <input
                type="text"
                name="from_name"
                placeholder="Your name"
                required
              />
            </label>

            <label>
              Email
              <input
                type="email"
                name="from_email"
                placeholder="you@example.com"
                required
              />
            </label>

            <label>
              Message
              <textarea
                name="message"
                placeholder="Tell me about your idea..."
                rows="5"
                required
              />
            </label>

            <button type="submit">Send message</button>
          </form>
        </div>

      </div>
    </section>
  );
}

export default Contact;