import { LuMessageCircleMore } from "react-icons/lu";
import "../styles/about.css";
import { Link } from "react-scroll";

const About = () => {
  return (
    <section className="my-about" id="about">
      <div className="about-heading">
        <h1>About Me</h1>
        <p>My Introduction</p>
      </div>

      <div className="about-container">
        <div className="about-left">
          <div className="about-image">
            <img src="/images/about.jpg" alt="profile" />
          </div>
        </div>

        <div className="about-right">
          <p className="about-desc">
            I am a passionate <span>Frontend Developer</span> with 2+ years of
            experience building modern, responsive, and accessible web
            applications. I love solving problems with clean code and bringing
            ideas to life through design & development.
          </p>

          <div className="about-experience">
            <div className="experience-card">
              <h1>02+</h1>
              <p>Years XP</p>
            </div>
            <div className="experience-card">
              <h1>10+</h1>
              <p>Projects</p>
            </div>
            <div className="experience-card">
              <h1>02+</h1>
              <p>Companies</p>
            </div>
          </div>

          <Link to="contact" smooth={true} duration={500} offset={-80}>
            <button className="about-btn">
              Leave a message <LuMessageCircleMore className="btn-icon" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
