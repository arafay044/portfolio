import { useState, useMemo } from "react";
import { FiExternalLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import "../styles/project.css";

const Projects = () => {
  const projects = [
    
    {
      title: "E-Commerce Website",
      category: "Frontend",
      img: "/images/amazon.png",
      desc: " orders, users, and payments.",
      tags: ["HTML", "CSS", "JavaScript"],
      demo: "https://arafay044.github.io/amazone-clone/",
      code: "https://github.com/arafay044/amazone-clone"
    },
    {
      title: "University Site",
      category: "Frontend",
      img: "/images/university.png",
      desc: "University site with hero, timeline, and courses grid.",
      tags: ["Html", "CSS", "Javascript"],
      demo: "https://arafay044.github.io/university-site/",
      code: "https://github.com/arafay044/university-site"

    },
    {
      title: "Blogify",
      category: "Fullstack",
      img: "/images/blog.png",
      desc: "CRUD app with auth and role-based access.",
      tags: ["React", "CSS", "Framer Motion"],
      demo: "https://react-blog-app-lake.vercel.app/",
      code: "https://github.com/arafay044/react-blog-app",
    },
    
  ];

  const [activeFilter, setActiveFilter] = useState("All");

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

     
      <div className="project-grid">
        {filtered.map((proj, i) => (
          <article className="project-card" key={i}>
            <div className="project-thumb">
              <img src={proj.img} alt={proj.title} />
            </div>

            <div className="project-body">
              <div className="project-top">
                <h3>{proj.title}</h3>
                <span className="project-category">{proj.category}</span>
              </div>

              <p className="project-desc">{proj.desc}</p>

              <div className="project-tags">
                {proj.tags.map((t, idx) => (
                  <span className="tag" key={idx}>{t}</span>
                ))}
              </div>

              <div className="project-actions">
                <a
                  href={proj.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="btn primary"
                >
                  <FiExternalLink className="icon" />
                  Live Demo
                </a>
                <a
                  href={proj.code}
                  target="_blank"
                  rel="noreferrer"
                  className="btn secondary"
                >
                  <FaGithub className="icon" />
                  Source
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
