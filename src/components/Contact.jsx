import emailjs from "@emailjs/browser";

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
      <div className="contact-wrapper">
        <header className="contact-header">
          <h2>Let’s talk</h2>
          <p>
            Got a project, idea, or just want to say hi?  
            My inbox is always open.
          </p>
        </header>

        <form className="contact-form" onSubmit={sendEmail}>
            <label>
                Name
                <input
                type="text"
                name="from_name"   // 👈 ADD THIS
                placeholder="Your name"
                required
                />
            </label>

            <label>
                Email
                <input
                type="email"
                name="from_email"  // 👈 ADD THIS
                placeholder="you@example.com"
                required
                />
            </label>

            <label>
                Message
                <textarea
                name="message"     // 👈 ADD THIS
                placeholder="Tell me about your idea..."
                rows="5"
                required
                />
            </label>

            <button type="submit">Send message</button>
            </form>

      </div>
    </section>
  );
}

export default Contact;
