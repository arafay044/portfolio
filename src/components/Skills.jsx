import { useState } from "react";
import "../styles/skills.css";
import useInView from "../hooks/useInView";

const Skills = () => {
  const [activeTab, setActiveTab] = useState("frontend");
  const [tabKey, setTabKey]       = useState(0);
  const [ref, inView]             = useInView(0.2);

  const handleTab = (tab) => {
    setActiveTab(tab);
    setTabKey((k) => k + 1);
  };

  const tabLabels = {
    frontend:  "Frontend",
    backend:   "Backend",
    ai:        "AI & LLM",
    languages: "Languages",
    devops:    "DevOps",
    tools:     "Tools",
    integrations: "Integrations",
  };

  const skillsData = {
    frontend: [
      { name: "HTML",         level: 95 },
      { name: "CSS",          level: 90 },
      { name: "JavaScript",   level: 85 },
      { name: "TypeScript",   level: 75 },
      { name: "React",        level: 90 },
      { name: "Redux Toolkit", level: 80 },
      { name: "Vite",         level: 85 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Next.js",      level: 80 },
      { name: "Bootstrap",    level: 75 },
    ],
    backend: [
      { name: "Node.js",       level: 80 },
      { name: "Express.js",    level: 80 },
      { name: "FastAPI",       level: 75 },
      { name: "Grails/Spring Boot", level: 70 },
      { name: "REST APIs",     level: 85 },
      { name: "JWT Auth",      level: 80 },
      { name: "Socket.IO",     level: 75 },
      { name: "MongoDB",       level: 75 },
      { name: "PostgreSQL",    level: 65 },
      { name: "MySQL",         level: 65 },
      { name: "Meilisearch",   level: 60 },
    ],
    ai: [
      { name: "LLM Integration (Groq, Gemini, OpenAI)", level: 75 },
      { name: "Text-to-SQL",           level: 70 },
      { name: "RAG",                   level: 70 },
      { name: "ChromaDB",              level: 65 },
      { name: "sentence-transformers", level: 60 },
      { name: "Structured Outputs",    level: 75 },
    ],
    languages: [
      { name: "JavaScript (ES6+)", level: 85 },
      { name: "TypeScript",        level: 75 },
      { name: "Python",            level: 75 },
      { name: "C++",               level: 80 },
      { name: "Groovy",            level: 65 },
      { name: "Java",              level: 65 },
      { name: "SQL",               level: 75 },
    ],
    devops: [
      { name: "Docker",          level: 70 },
      { name: "Docker Compose",  level: 70 },
      { name: "GitHub Actions",  level: 70 },
      { name: "Bitbucket CI/CD", level: 65 },
      { name: "Nginx",           level: 65 },
      { name: "AWS (EC2)",       level: 65 },
    ],
    tools: [
      { name: "Git & GitHub", level: 85 },
      { name: "Postman",      level: 80 },
      { name: "Linux",        level: 70 },
      { name: "npm",          level: 80 },
      { name: "Playwright",   level: 60 },
    ],
    integrations: [
      { name: "Stripe",     level: 80 },
      { name: "GoCardless", level: 70 },
      { name: "Xero",       level: 65 },
      { name: "HubSpot",    level: 65 },
      { name: "RabbitMQ",   level: 65 },
      { name: "Twilio",     level: 60 },
      { name: "SendGrid",   level: 65 },
      { name: "Cloudinary", level: 80 },
    ],
  };

  return (
    <section className="my-skills" id="skills">
      <div className="skills-heading">
        <h1>Skills</h1>
        <p>My Technical Expertise</p>
      </div>

      <div className="skills-tabs">
        {Object.keys(skillsData).map((tab) => (
          <button
            key={tab}
            className={`tab-btn ${activeTab === tab ? "active" : ""}`}
            onClick={() => handleTab(tab)}
          >
            {tabLabels[tab] || tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      <div className="skills-container" ref={ref} key={tabKey}>
        {skillsData[activeTab].map((skill, index) => (
          <div
            className={`skill-bar ${inView ? "skill-bar--visible" : ""}`}
            key={`${activeTab}-${index}-${tabKey}`}
            style={{ animationDelay: `${index * 0.08}s` }}
          >
            <div className="skill-info">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>
            <div className="progress">
              <div
                className="progress-fill"
                style={{
                  "--target": `${skill.level}%`,
                  animationDelay: `${index * 0.1}s`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
