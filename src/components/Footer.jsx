import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-scroll";
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="my-footer">
      <div className="footer-container">
        <div>
          <h2 className="footer-logo">Abdul Rafay</h2>
          <p className="footer-tagline">Full Stack Engineer · Building things for the web</p>
        </div>

        <ul className="footer-links">
          {["home","about","experience","skills","projects","certificates","contact"].map((to) => (
            <li key={to}>
              <Link to={to} smooth={true} duration={500} offset={-80}>
                {to.charAt(0).toUpperCase() + to.slice(1)}
              </Link>
            </li>
          ))}
        </ul>

        <div className="footer-socials">
          <a href="https://github.com/arafay044/" target="_blank" rel="noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="http://linkedin.com/in/abdul-rafay044" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="https://x.com/arafay044" target="_blank" rel="noreferrer" aria-label="Twitter">
            <FaTwitter />
          </a>
        </div>

        <div className="footer-divider" />
      </div>

      <p className="footer-copy">
        © {new Date().getFullYear()} Abdul Rafay. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
