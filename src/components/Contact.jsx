import { useRef, useState } from "react";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import emailjs from "@emailjs/browser";
import "../styles/contact.css";
import useInView from "../hooks/useInView";

const Contact = () => {
  const formRef = useRef();
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [ref, inView] = useInView(0.15);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_ndjhnjn",
        "template_nzk8ie5",
        formRef.current,
        "XdgytYBJtIgYFzHOp"
      )
      .then(
        () => {
          setSent(true);
          setLoading(false);
          formRef.current.reset();
        },
        (error) => {
          console.error("FAILED...", error);
          setLoading(false);
        }
      );
  };

  return (
    <section className="my-contact" id="contact">
      <div className="contact-heading">
        <h1>Contact</h1>
        <p>Get in Touch</p>
      </div>

      <div className="contact-container" ref={ref}>
        <div className={`contact-left ${inView ? "slide-in-left" : "pre-slide-left"}`}>
          <div className="contact-card">
            <div className="icon-wrap">
              <FiMail className="icon" />
            </div>
            <div>
              <h3>Email</h3>
              <p>abdul.rafay9714@gmail.com</p>
            </div>
          </div>

          <div className="contact-card">
            <div className="icon-wrap">
              <FiPhone className="icon" />
            </div>
            <div>
              <h3>Phone</h3>
              <p>+92 326 5605724</p>
            </div>
          </div>

          <div className="contact-card">
            <div className="icon-wrap">
              <FiMapPin className="icon" />
            </div>
            <div>
              <h3>Location</h3>
              <p>Rawalpindi, Pakistan</p>
            </div>
          </div>
        </div>

        <form
          ref={formRef}
          onSubmit={sendEmail}
          className={`contact-form ${inView ? "slide-in-right" : "pre-slide-right"}`}
        >
          <div className="form-group">
            <input
              type="text"
              name="user_name"
              placeholder=" "
              required
            />
            <label>Your Name</label>
          </div>

          <div className="form-group">
            <input
              type="email"
              name="user_email"
              placeholder=" "
              required
            />
            <label>Your Email</label>
          </div>

          <div className="form-group">
            <textarea
              name="message"
              placeholder=" "
              rows="6"
              required
            ></textarea>
            <label>Your Message</label>
          </div>

          <button type="submit" disabled={loading}>
            {loading ? "Sending..." : "Send Message →"}
          </button>

          {sent && (
            <p className="success-msg">✅ Message sent successfully!</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
