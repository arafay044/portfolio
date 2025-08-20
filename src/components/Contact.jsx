import { useRef, useState } from "react";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import emailjs from "@emailjs/browser";
import "../styles/contact.css";

const Contact = () => {
  const formRef = useRef();
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

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
          formRef.current.reset();
        },
        (error) => {
          console.error("FAILED...", error);
        }
      );

  };

  return (
    <section className="my-contact" id="contact">
   
      <div className="contact-heading">
        <h1>Contact</h1>
        <p>Get in Touch</p>
      </div>

      <div className="contact-container">

        <div className="contact-left">
          <div className="contact-card">
            <FiMail className="icon" />
            <div>
              <h3>Email</h3>
              <p>abdul.rafay9714@gmail.com</p>
            </div>
          </div>

          <div className="contact-card">
            <FiPhone className="icon" />
            <div>
              <h3>Phone</h3>
              <p>+92 3265605724</p>
            </div>
          </div>

          <div className="contact-card">
            <FiMapPin className="icon" />
            <div>
              <h3>Location</h3>
              <p>Rawalpindi, Pakistan</p>
            </div>
          </div>
        </div>


        <form ref={formRef} onSubmit={sendEmail} className="contact-form">
          <input type="text" name="user_name" placeholder="Your Name" required />
          <input type="email" name="user_email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
          {sent && <p className="success-msg">✅ Message sent successfully!</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
