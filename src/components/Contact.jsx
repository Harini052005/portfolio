import { FaEnvelope, FaGithub, FaLinkedin, FaPhoneAlt } from "react-icons/fa";

const contactPhone = "+91 9245715348";
const contactEmail = "harinikannan065@gmail.com";
const githubUrl = "https://github.com/Harini052005";
const linkedinUrl = "https://www.linkedin.com/in/harinikannan05/";

function Contact() {
  return (
    <section id="contact" className="contact">
      <h1>Contact Me</h1>

      <div className="contactLinks">
        <a href={`tel:${contactPhone.replace(/\s/g, "")}`}>
          <FaPhoneAlt className="contactIcon" aria-hidden="true" />
          <span>Phone</span>
          <strong>{contactPhone}</strong>
        </a>

        <a href={`mailto:${contactEmail}`}>
          <FaEnvelope className="contactIcon" aria-hidden="true" />
          <span>Email</span>
          <strong>{contactEmail}</strong>
        </a>

        <a href={linkedinUrl} target="_blank" rel="noreferrer">
          <FaLinkedin className="contactIcon" aria-hidden="true" />
          <span>LinkedIn</span>
          <strong>linkedin.com/in/harinikannan05</strong>
        </a>

        <a href={githubUrl} target="_blank" rel="noreferrer">
          <FaGithub className="contactIcon" aria-hidden="true" />
          <span>GitHub</span>
          <strong>{githubUrl.replace("https://", "")}</strong>
        </a>
      </div>
    </section>
  );
}

export default Contact;
