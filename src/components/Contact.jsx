import "../styles/contact.css";
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="contact section">

      <div className="section-header">
        <span>GET IN TOUCH</span>
        <h2>Contact</h2>
      </div>

      <p className="contact-text">
        I'm always open to discussing VR/XR development opportunities,
        collaborations, or innovative immersive projects.
        Feel free to get in touch through any of the channels below.
      </p>

      <div className="contact-grid">

        <div className="contact-card">
          <FaEnvelope />
          <h3>Email</h3>
          <a href="mailto:premprabhu26@gmail.com">
            premprabhu26@gmail.com
          </a>
        </div>

        <div className="contact-card">
          <FaPhoneAlt />
          <h3>Phone</h3>
          <a href="tel:+919786093061">
            +91 97860 93061
          </a>
        </div>

        <div className="contact-card">
          <FaLinkedin />
          <h3>LinkedIn</h3>
          <a
            href="https://www.linkedin.com/in/prabhu-r-b5bb2483/"
            target="_blank"
            rel="noreferrer"
          >
            Connect on LinkedIn →
          </a>
        </div>

        <div className="contact-card">
          <FaMapMarkerAlt />
          <h3>Location</h3>
          <p>Coimbatore, Tamil Nadu</p>
        </div>

      </div>

    </section>
  );
}

export default Contact;