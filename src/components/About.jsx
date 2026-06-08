import { useState, useEffect } from "react";
import { LuMessageCircleMore } from "react-icons/lu";
import "../styles/about.css";
import { Link } from "react-scroll";
import useInView from "../hooks/useInView";

const useCounter = (target, inView, duration = 1400) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else                  { setCount(Math.floor(start)); }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target, duration]);
  return count;
};

/* 3D tilt on about image — same approach as project cards */
const imgTiltMove = (e) => {
  const el   = e.currentTarget;
  const rect = el.getBoundingClientRect();
  const rx   = ((e.clientY - rect.top  - rect.height / 2) / rect.height) * 14;
  const ry   = ((rect.width  / 2 - (e.clientX - rect.left)) / rect.width) * 14;
  el.style.transform  = `perspective(700px) rotateX(${rx}deg) rotateY(${ry}deg) scale(1.04)`;
  el.style.transition = "transform 0.08s linear";
  el.style.boxShadow  = `${-ry * 2}px ${rx * 2}px 40px rgba(0,194,111,0.25)`;
};

const imgTiltLeave = (e) => {
  const el = e.currentTarget;
  el.style.transform  = "perspective(700px) rotateX(0deg) rotateY(0deg) scale(1)";
  el.style.transition = "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.6s ease";
  el.style.boxShadow  = "";
};

const About = () => {
  const [ref, inView] = useInView(0.3);
  const yearsXP    = useCounter(2,  inView);
  const projects   = useCounter(10, inView);
  const companies  = useCounter(4,  inView);

  return (
    <section className="my-about" id="about">
      <div className="about-heading">
        <h1>About Me</h1>
        <p>My Introduction</p>
      </div>

      <div className="about-container" ref={ref}>
        <div className={`about-left ${inView ? "slide-in-left" : "pre-slide-left"}`}>
          <div
            className="about-image"
            onMouseMove={imgTiltMove}
            onMouseLeave={imgTiltLeave}
          >
            <img src="/images/about.jpg" alt="Abdul Rafay" width="320" height="320" loading="lazy" decoding="async" />
          </div>
        </div>

        <div className={`about-right ${inView ? "slide-in-right" : "pre-slide-right"}`}>
          <p className="about-desc">
            I am a passionate <span>Fullstack Developer</span> with 2+ years of
            experience building modern, responsive, and accessible web
            applications. I love solving problems with clean code and bringing
            ideas to life through design & development.
          </p>

          <div className="about-experience">
            <div className="experience-card">
              <h1>{String(yearsXP).padStart(2, "0")}+</h1>
              <p>Years XP</p>
            </div>
            <div className="experience-card">
              <h1>{String(projects).padStart(2, "0")}+</h1>
              <p>Projects</p>
            </div>
            <div className="experience-card">
              <h1>{String(companies).padStart(2, "0")}+</h1>
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
