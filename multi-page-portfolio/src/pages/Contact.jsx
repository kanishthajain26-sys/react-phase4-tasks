import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    setError("");
    setSuccess(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.message
    ) {
      setError("Please fill all the fields.");
      return;
    }

    if (!formData.email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }

    setError("");
    setSuccess(true);

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section className="page">

      {/* Heading */}
      <div className="page-heading">
        <p>Let's connect</p>

        <h1>Contact Me</h1>

        <span>
          Have an idea or want to work together?
        </span>
      </div>

      <div className="contact-container">

        {/* Contact Information */}
        <div className="contact-info">

          <h2>Let's Talk 👋</h2>

          <p>
            I am always interested in learning,
            building new projects and connecting
            with other developers.
          </p>

          <div className="contact-item">
            <strong>📧 Email</strong>
            <p>kanishtha@example.com</p>
          </div>

          <div className="contact-item">
            <strong>📍 Location</strong>
            <p>Pune, India</p>
          </div>

          <div className="contact-item">
            <strong>💻 Focus</strong>
            <p>React • JavaScript • Backend</p>
          </div>

        </div>

        {/* Contact Form */}
        <form
          className="contact-form"
          onSubmit={handleSubmit}
        >

          <label>Your Name</label>

          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
          />

          <label>Your Email</label>

          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
          />

          <label>Your Message</label>

          <textarea
            name="message"
            placeholder="Write your message..."
            rows="6"
            value={formData.message}
            onChange={handleChange}
          />

          {/* Error */}
          {error && (
            <p className="error-message">
              {error}
            </p>
          )}

          {/* Success */}
          {success && (
            <p className="success-message">
              Message sent successfully! 🎉
            </p>
          )}

          <button type="submit">
            Send Message →
          </button>

        </form>

      </div>

    </section>
  );
}

export default Contact;