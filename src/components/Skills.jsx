import { useState } from "react";
import "../styles/skills.css";

const Skills = () => {
  const [activeTab, setActiveTab] = useState("frontend");

  const skillsData = {
    frontend: [
      { name: "HTML", level: 95 },
      { name: "CSS", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "React", level: 80 },
      { name: "Tailwind", level: 80 },

    ],
    backend: [
      { name: ".NET", level: 75 },
      {name: "PHP" , level: 70},
      { name: "SQL", level: 65 },
      { name: "Firebase", level: 70}
    ],
    programming: [
      { name: "C++", level: 80 },
      { name: "C#", level: 75 },
    ],
    misc: [
      { name: "Git & GitHub", level: 85 },
      { name: "Linux", level: 70 },
    ],
  };

  return (
    <section className="my-skills" id="skills">
      {/* Heading */}
      <div className="skills-heading">
        <h1>Skills</h1>
        <p>My Technical Expertise</p>
      </div>

      {/* Tabs */}
      <div className="skills-tabs">
        {Object.keys(skillsData).map((tab) => (
          <button
            key={tab}
            className={`tab-btn ${activeTab === tab ? "active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Skill Bars */}
      <div className="skills-container">
        {skillsData[activeTab].map((skill, index) => (
          <div className="skill-bar" key={index}>
            <div className="skill-info">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>
            <div className="progress">
              <div
                className="progress-fill"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
