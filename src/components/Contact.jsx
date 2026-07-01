import { useState } from "react";

const contactEmail = "harinikannan065@gmail.com";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const subject = encodeURIComponent(`Portfolio message from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
    setStatus("Your email app is opening with the message ready to send.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="contact">
      <h1>Contact Me</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          required
        />

        <button type="submit">Send</button>

        {status && <p className="formStatus">{status}</p>}
      </form>
    </section>
  );
}

export default Contact;
