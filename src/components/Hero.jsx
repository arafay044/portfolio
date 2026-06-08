import { useState, useEffect, useRef } from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-scroll";
import "../styles/hero.css";

const ROLES = [
  "Full Stack Developer",
  "React Specialist",
  "FastAPI Engineer",
  "Problem Solver",
];

// Stable at module level — won't re-randomize on re-render
const PARTICLES = Array.from({ length: 22 }, (_, i) => ({
  id: i,
  size: 3 + ((i * 7) % 5),
  x: (i * 13.7) % 100,
  y: (i * 19.3) % 100,
  delay: (i * 0.43) % 7,
  duration: 10 + ((i * 3.1) % 9),
}));

const Hero = () => {
  /* ---- Typing ---- */
  const [displayed, setDisplayed] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting,  setDeleting]  = useState(false);

  /* ---- Parallax refs ---- */
  const contentLayerRef = useRef(null);
  const imageLayerRef   = useRef(null);

  /* ---- Magnetic button refs ---- */
  const mag1 = useRef(null);
  const mag2 = useRef(null);

  /* ---- Typing effect ---- */
  useEffect(() => {
    const current = ROLES[roleIndex];
    let t;
    if (!deleting && charIndex < current.length)       t = setTimeout(() => setCharIndex(c => c + 1), 80);
    else if (!deleting && charIndex === current.length) t = setTimeout(() => setDeleting(true), 2000);
    else if (deleting && charIndex > 0)                t = setTimeout(() => setCharIndex(c => c - 1), 42);
    else { setDeleting(false); setRoleIndex(r => (r + 1) % ROLES.length); }
    setDisplayed(current.slice(0, charIndex));
    return () => clearTimeout(t);
  }, [charIndex, deleting, roleIndex]);

  /* ---- rAF Mouse Parallax (desktop only, starts after 1.4s) ---- */
  useEffect(() => {
    if (typeof window === "undefined" || window.innerWidth < 900) return;

    let tx = 0, ty = 0, cx = 0, cy = 0, rAF, active = false;
    const activateTimer = setTimeout(() => { active = true; }, 1400);

    const onMove = (e) => {
      if (!active) return;
      tx = (e.clientX / window.innerWidth  - 0.5);
      ty = (e.clientY / window.innerHeight - 0.5);
    };

    const loop = () => {
      if (active) {
        cx += (tx - cx) * 0.052;
        cy += (ty - cy) * 0.052;
        if (contentLayerRef.current)
          contentLayerRef.current.style.transform = `translate(${cx * -16}px, ${cy * -10}px)`;
        if (imageLayerRef.current)
          imageLayerRef.current.style.transform   = `translate(${cx * 22}px, ${cy * 14}px)`;
      }
      rAF = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    rAF = requestAnimationFrame(loop);

    return () => {
      clearTimeout(activateTimer);
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rAF);
    };
  }, []);

  /* ---- Magnetic helpers ---- */
  const magMove = (e, ref) => {
    const r   = ref.current.getBoundingClientRect();
    const x   = (e.clientX - r.left - r.width  / 2) * 0.3;
    const y   = (e.clientY - r.top  - r.height / 2) * 0.3;
    ref.current.style.transform  = `translate(${x}px, ${y}px)`;
    ref.current.style.transition = "transform 0.1s linear";
  };
  const magLeave = (ref) => {
    ref.current.style.transform  = "translate(0,0)";
    ref.current.style.transition = "transform 0.75s cubic-bezier(0.16, 1, 0.3, 1)";
  };

  return (
    <>
      <section className="hero" id="home">
        {/* Particles */}
        <div className="hero-particles" aria-hidden="true">
          {PARTICLES.map(p => (
            <span key={p.id} className="particle" style={{
              width: p.size, height: p.size,
              left: `${p.x}%`, top: `${p.y}%`,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.duration}s`,
            }} />
          ))}
        </div>

        <div className="hero-bg-glow"           aria-hidden="true" />
        <div className="hero-bg-glow hero-bg-glow--2" aria-hidden="true" />

        {/* Socials */}
        <div className="hero-socials">
          <a href="https://github.com/arafay044/"      target="_blank" rel="noreferrer" aria-label="GitHub">   <FaGithub />   </a>
          <a href="http://linkedin.com/in/abdul-rafay044" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
          <a href="https://x.com/arafay044"            target="_blank" rel="noreferrer" aria-label="Twitter">  <FaTwitter />  </a>
          <span className="social-line" aria-hidden="true" />
        </div>

        {/* Content — parallax layer */}
        <div ref={contentLayerRef} className="hero-parallax-layer">
          <div className="hero-content">
            <p className="hero-greeting">Hello, I'm</p>

            <div className="hero-name-clip">
              <h1 className="hero-name">Abdul <span>Rafay</span></h1>
            </div>

            <div className="hero-role-clip">
              <p className="hero-role">
                <span className="typed-text">{displayed}</span>
                <span className="cursor-blink" aria-hidden="true">|</span>
              </p>
            </div>

            <p className="hero-desc">
              Building modern, scalable, and accessible web applications with a
              passion for clean code and great user experiences.
            </p>

            <div className="hero-buttons">
              <div ref={mag1} className="magnetic-wrap"
                onMouseMove={e => magMove(e, mag1)}
                onMouseLeave={() => magLeave(mag1)}>
                <Link to="projects" smooth duration={500} offset={-80} className="btn primary btn-glow">
                  View My Work
                </Link>
              </div>
              <div ref={mag2} className="magnetic-wrap"
                onMouseMove={e => magMove(e, mag2)}
                onMouseLeave={() => magLeave(mag2)}>
                <a href="/cv.pdf" download="Abdul_Rafay_CV.pdf" className="btn secondary">
                  Download CV
                </a>
              </div>
            </div>

            <div className="hero-stats">
              <div className="hero-stat"><strong>2+</strong><span>Years XP</span></div>
              <div className="hero-stat-divider" />
              <div className="hero-stat"><strong>10+</strong><span>Projects</span></div>
              <div className="hero-stat-divider" />
              <div className="hero-stat"><strong>4</strong><span>Companies</span></div>
            </div>
          </div>
        </div>

        {/* Image — separate parallax layer (moves opposite direction) */}
        <div ref={imageLayerRef} className="hero-parallax-layer">
          <div className="hero-image hero-img-enter">
            <div className="image-ring" aria-hidden="true" />
            <div className="image-bg">
              <img src="/images/hero.png" alt="Abdul Rafay" width="480" height="480" fetchpriority="high" decoding="sync" />
            </div>
          </div>
        </div>
      </section>

      <div className="scroll-down">
        <Link to="about" smooth duration={500} offset={-80} aria-label="Scroll to about">
          <span />
        </Link>
      </div>
    </>
  );
};

export default Hero;
