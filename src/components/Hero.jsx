import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-scroll"; 
import "../styles/hero.css";

const Hero = () => {
  return (
    <>
      <section className="hero" id="home">

        <div className="hero-socials">
          <a href="https://github.com/arafay044/" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a href="http://linkedin.com/in/abdul-rafay044" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://x.com/arafay044" target="_blank" rel="noreferrer">
            <FaTwitter />
          </a>
        </div>

        <div className="hero-content">
          <h1>
            Hi, I'm <span>Abdul Rafay</span>
          </h1>
          <p>
            A passionate <span>Full Stack Developer</span> building modern,
            responsive, and accessible web applications.
          </p>
          <div className="hero-buttons">
            <Link
              to="projects"
              smooth={true}
              duration={500}
              offset={-80} 
              className="btn primary"
            >
              View My Work
            </Link>
            <a
              href="/cv.pdf"
              download="Abdul_Rafay_CV.pdf"
              className="btn secondary"
            >
              Download CV
            </a>
          </div>
        </div>

        <div className="hero-image">
          <div className="image-bg">
            <img src="/images/hero.png" alt="profile" />
          </div>
        </div>
      </section>

    
      <div className="scroll-down">
        <Link
          to="about"
          smooth={true}
          duration={500}
          offset={-80}
        >
          <span></span>
        </Link>
      </div>
    </>
  );
};

export default Hero;
