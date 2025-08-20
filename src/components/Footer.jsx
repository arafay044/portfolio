import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-scroll"; // ✅ import Link
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="my-footer">
      <div className="footer-container">
        {/* Logo / Name */}
        <h2 className="footer-logo">Abdul Rafay</h2>

        {/* Navigation */}
        <ul className="footer-links">
          <li>
            <Link to="home" smooth={true} duration={500} offset={-80}>
              Home
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500} offset={-80}>
              About
            </Link>
          </li>
          <li>
            <Link to="experience" smooth={true} duration={500} offset={-80}>
              Experience
            </Link>
          </li>
          <li>
            <Link to="skills" smooth={true} duration={500} offset={-80}>
              Skills
            </Link>
          </li>
          <li>
            <Link to="projects" smooth={true} duration={500} offset={-80}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500} offset={-80}>
              Contact
            </Link>
          </li>
        </ul>

        {/* Socials */}
        <div className="footer-socials">
          <a
            href="https://github.com/arafay044/"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="http://linkedin.com/in/abdul-rafay044"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://x.com/arafay044"
            target="_blank"
            rel="noreferrer"
          >
            <FaTwitter />
          </a>
        </div>
      </div>

      <p className="footer-copy">
        © {new Date().getFullYear()} Abdul Rafay. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
