import { useState } from "react";
import "../styles/experience.css";

const Experience = () => {
  const [activeTab, setActiveTab] = useState("academic");

  const academicData = [
    {
      title: "Bachelor of Computer Science",
      subtitle: "PMAS Arid Agriculture University",
      duration: "2023 - 2027",
      desc: "Specialized in Computer Scence. Focused on Fullstack development, UI/UX, and modern web technologies.",
    },
    {
      title: "F.sc",
      subtitle: "Punjab Group of colleges",
      duration: "2020 - 2022",
      desc: "Completed higher secondary education with science.",
    },
  ];

  const professionalData = [
    [
      {
        title: "Full Stack Engineer",
        subtitle: "AlxTel, Inc.",
        duration: "April 2026 - Present",
        desc: "Contributing to the development of a government procurement automation platform using Python, FastAPI, and React.",
      },
      {
        title: "Full Stack Engineer",
        subtitle: "AizTek Technologies",
        duration: "April 2026 - Present",
        desc: "Assisting in building scalable enterprise software solutions with React, Tailwind CSS, Python, and Grails.",
      },
      {
        title: "Full Stack Developer (Freelance)",
        subtitle: "PeoplePerHour",
        duration: "Jan 2025 - Feb 2026",
        desc: "Engineered 5+ full-stack MERN web applications for international clients with secure REST APIs.",
      },
      {
        title: "Web Developer",
        subtitle: "Softezm",
        duration: "August 2025 - Nov 2025",
        desc: "Led full-stack development of a SaaS School Management System using React, Node.js, and Tailwind CSS.",
      },
      {
        title: "MERN Stack Developer Intern",
        subtitle: "Crypstac",
        duration: "July 2025 - September 2025",
        desc: "Built React.js UI components and Node.js/Express.js REST API endpoints for a live production application.",
      },
    ],
  ];

  const timelineData =
    activeTab === "academic" ? academicData : professionalData;

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
