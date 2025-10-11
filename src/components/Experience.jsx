import { useState } from "react";
import "../styles/experience.css";

const Experience = () => {
  const [activeTab, setActiveTab] = useState("academic");

  const academicData = [
    {
      title: "Bachelor of Computer Science",
      subtitle: "PMAS Arid Agriculture University",
      duration: "2023 - 2027",
      desc: "Specialized in Computer Scence. Focused on frontend development, UI/UX, and modern web technologies."
    },
    {
      title: "F.sc",
      subtitle: "Punjab Group of colleges",
      duration: "2020 - 2022",
      desc: "Completed higher secondary education with science."
    }
  ];

  const professionalData = [
    {
      title: "Full Stack Developer",
      subtitle: "People Per Hour",
      duration: "2025 - Present",
      desc: "Building modern, responsive apps using React, Node, and MongoDB."
    },
    {
      title: "Frontend Developer",
      subtitle: "Crypstac",
      duration: "July 2025 - September 2025",
      desc: "Building modern, responsive apps using React, Tailwind, and Javascript."
    },
    {
      title: "Web Developer",
      subtitle: "Softezm",
      duration: "Auguest 2025 - Present",
      desc: "Worked on frontend features, bug fixing, and Agile workflows."
    }
  ];

  const timelineData = activeTab === "academic" ? academicData : professionalData;

  return (
    <section className="my-experience" id="experience">
      <div className="experience-heading">
        <h1>Experience</h1>
        <p>My Work & Academic Journey</p>
      </div>

      <div className="experience-tabs">
        <button
          className={`tab-btn ${activeTab === "academic" ? "active" : ""}`}
          onClick={() => setActiveTab("academic")}
        >
          Academic
        </button>
        <button
          className={`tab-btn ${activeTab === "professional" ? "active" : ""}`}
          onClick={() => setActiveTab("professional")}
        >
          Professional
        </button>
      </div>

      <div className="timeline">
        {timelineData.map((item, index) => (
          <div
            key={index}
            className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
          >
            <div className="timeline-content">
              <h2>
                {item.title} <span> {item.subtitle}</span>
              </h2>
              <p className="exp-duration">{item.duration}</p>
              <p className="exp-desc">{item.desc}</p>
            </div>
            <span className="timeline-dot"></span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
