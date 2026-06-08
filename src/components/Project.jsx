import { useState, useMemo } from "react";
import { FiExternalLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import "../styles/project.css";
import useInView from "../hooks/useInView";

const handleTiltMove = (e) => {
  const card = e.currentTarget;
  const rect = card.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  const cx = rect.width / 2;
  const cy = rect.height / 2;
  const rx = ((y - cy) / cy) * 10;
  const ry = ((cx - x) / cx) * 10;
  card.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(16px)`;
  card.style.transition = "transform 0.08s linear";
  card.style.boxShadow = `${-ry * 1.5}px ${rx * 1.5}px 40px rgba(0,194,111,0.2)`;
};

const handleTiltLeave = (e) => {
  const card = e.currentTarget;
  card.style.transform =
    "perspective(900px) rotateX(0deg) rotateY(0deg) translateZ(0px)";
  card.style.transition = "transform 0.5s ease, box-shadow 0.5s ease";
  card.style.boxShadow = "";
};

const PROJECTS = [
  {
    title: "Blogify",
    category: "Fullstack",
    img: "/images/blog.png",
    problem: "How do you publish content without paying for a CMS?",
    desc: "Production-ready blogging platform with secure auth, full CRUD on rich-text posts, dynamic routing, server-side pagination, and fully responsive design.",
    tags: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    demo: "https://react-blog-app-lake.vercel.app/",
    code: "https://github.com/arafay044/react-blog-app",
  },
  {
    title: "Classic Boats",
    category: "Fullstack",
    img: "/images/boats.png",
    problem: "How do you gate a niche marketplace and charge per listing?",
    desc: "Private marketplace for classic & vintage boat enthusiasts with member approval workflows, Stripe $19 listing fees, Cloudinary media uploads, and JWT role-based access.",
    tags: ["React", "Node.js", "MongoDB", "Express", "Stripe", "Cloudinary"],
    demo: "https://classic-boats-frontend.vercel.app/",
    code: "https://github.com/arafay044/classic-boats-backend",
  },
  {
    title: "QuickChat",
    category: "Fullstack",
    img: "/images/chat-app.png",
    problem: "How do you show real-time presence and typing state at scale?",
    desc: "Real-time messaging platform supporting 15+ concurrent users with instant delivery, typing indicators, live presence tracking via Socket.IO, and JWT-secured sessions.",
    tags: ["React", "Node.js", "Socket.IO", "MongoDB", "JWT"],
    demo: "https://chatapp-mu-blue.vercel.app/login",
    code: "https://github.com/arafay044/chatapp",
  },
  {
    title: "AI-Based E-Commerce",
    category: "Fullstack",
    img: "/images/ecommerce-ai.png",
    problem: "How do you serve a customer storefront and admin dashboard from one backend?",
    desc: "Full-stack e-commerce platform with dual interfaces: customer storefront and admin dashboard. Features Stripe payments, Cloudinary CDN, JWT RBAC, and real-time inventory management.",
    tags: ["React", "Node.js", "Express", "MongoDB", "Stripe", "Cloudinary", "JWT"],
    demo: "https://ecommerce-webapp-aibased.netlify.app/",
    code: "https://github.com/arafay044/ecommerce-backend",
    adminDemo: "https://ecommerce-admin-dashboard-ar.netlify.app/",
  },
  {
    title: "E-Commerce Clone",
    category: "Frontend",
    img: "/images/amazon.png",
    problem: "How does Amazon's product grid and cart actually work under the hood?",
    desc: "Amazon-inspired e-commerce frontend with product listings, cart functionality, and fully responsive layout built with vanilla HTML, CSS, and JavaScript.",
    tags: ["HTML", "CSS", "JavaScript"],
    demo: "https://arafay044.github.io/amazone-clone/",
    code: "https://github.com/arafay044/amazone-clone",
  },
  {
    title: "University Site",
    category: "Frontend",
    img: "/images/university.png",
    problem: "Can modern UX be achieved with zero frameworks?",
    desc: "University landing page with hero section, animated timeline, courses grid, and mobile-first responsive design.",
    tags: ["HTML", "CSS", "JavaScript"],
    demo: "https://arafay044.github.io/university-site/",
    code: "https://github.com/arafay044/university-site",
  },
];

const Projects = () => {
  const projects = PROJECTS;

  const [activeFilter, setActiveFilter] = useState("All");
  const [ref, inView] = useInView(0.1);

  const categories = useMemo(() => {
    const set = new Set(projects.map((p) => p.category));
    return ["All", ...Array.from(set)];
  }, [projects]);

  const filtered = useMemo(() => {
    if (activeFilter === "All") return projects;
    return projects.filter((p) => p.category === activeFilter);
  }, [activeFilter, projects]);

  return (
    <section className="my-projects" id="projects">
      <div className="projects-heading">
        <h1>Projects</h1>
        <p>Selected Work</p>
      </div>

      <div className="projects-filters">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`filter-btn ${activeFilter === cat ? "active" : ""}`}
            onClick={() => setActiveFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="project-grid" ref={ref}>
        {filtered.map((proj, i) => (
          <article
            className={`project-card ${inView ? "card-visible" : ""}`}
            key={`${activeFilter}-${i}`}
            style={{ animationDelay: `${i * 0.12}s` }}
            onMouseMove={handleTiltMove}
            onMouseLeave={handleTiltLeave}
          >
            <div className="project-thumb">
              <img src={proj.img} alt={proj.title} width="800" height="500" loading="lazy" decoding="async" />
              <div className="project-overlay">
                <div className="overlay-links">
                  <a
                    href={proj.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="overlay-btn"
                  >
                    <FiExternalLink /> Live Demo
                  </a>
                  <a
                    href={proj.code}
                    target="_blank"
                    rel="noreferrer"
                    className="overlay-btn"
                  >
                    <FaGithub /> Source
                  </a>
                  {proj.adminDemo && (
                    <a
                      href={proj.adminDemo}
                      target="_blank"
                      rel="noreferrer"
                      className="overlay-btn"
                    >
                      <FiExternalLink /> Admin
                    </a>
                  )}
                </div>
              </div>
            </div>

            <div className="project-body">
              <div className="project-top">
                <h3>{proj.title}</h3>
                <span className="project-category">{proj.category}</span>
              </div>

              <p className="project-problem">{proj.problem}</p>
              <p className="project-desc">{proj.desc}</p>

              <div className="project-tags">
                {proj.tags.map((t, idx) => (
                  <span className="tag" key={idx}>
                    {t}
                  </span>
                ))}
              </div>

              {/* minimal text links — visible on mobile only; desktop uses image overlay */}
              <div className="project-links">
                <a href={proj.demo} target="_blank" rel="noreferrer" className="proj-link">
                  <FiExternalLink /> Live Demo
                </a>
                <a href={proj.code} target="_blank" rel="noreferrer" className="proj-link">
                  <FaGithub /> Code
                </a>
                {proj.adminDemo && (
                  <a href={proj.adminDemo} target="_blank" rel="noreferrer" className="proj-link">
                    <FiExternalLink /> Admin
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
