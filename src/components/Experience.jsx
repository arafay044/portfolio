import { useState } from "react";
import "../styles/experience.css";
import useInView from "../hooks/useInView";

const Experience = () => {
  const [activeTab, setActiveTab] = useState("academic");
  const [tabKey, setTabKey]     = useState(0);
  const [ref, inView]           = useInView(0.12);

  const handleTab = (tab) => {
    setActiveTab(tab);
    setTabKey((k) => k + 1);
  };

  const academicData = [
    {
      title: "Bachelor of Computer Science",
      subtitle: "PMAS Arid Agriculture University",
      duration: "2023 – 2027",
      desc: "Specializing in Computer Science with focus on full-stack development, UI/UX, and modern web technologies. Current CGPA: 3.87 / 4.00.",
    },
    {
      title: "F.Sc Pre-Engineering",
      subtitle: "Punjab Group of Colleges, Gujar Khan",
      duration: "2020 – 2022",
      desc: "Completed higher secondary education in Pre-Engineering with Grade A+.",
    },
  ];

  const professionalData = [
    {
      title: "Full Stack Engineer",
      subtitle: "AlxTel, Inc.",
      duration: "April 2026 – Present",
      desc: "Developing a US government procurement automation platform using Python, FastAPI, React, and Grails — working asynchronously within a remote US engineering team.",
    },
    {
      title: "Full Stack Engineer",
      subtitle: "AizTek Technologies",
      duration: "April 2026 – Present",
      desc: "Building scalable enterprise software across React/Tailwind frontend and Python/Grails backend, contributing full-stack features in a structured team environment.",
    },
    {
      title: "Full Stack Developer (Freelance)",
      subtitle: "PeoplePerHour",
      duration: "Jan 2025 – Feb 2026",
      desc: "Engineered 5+ full-stack MERN web applications for international clients with secure REST APIs, JWT auth, and responsive UI.",
    },
    {
      title: "Web Developer",
      subtitle: "Softezm",
      duration: "Aug 2025 – Nov 2025",
      desc: "Led full-stack development of a SaaS School Management System with React, Node.js, and Tailwind CSS. Defined Git conventions for a 3-person team.",
    },
    {
      title: "MERN Stack Developer Intern",
      subtitle: "Crypstac",
      duration: "Jul 2025 – Sep 2025",
      desc: "Built React UI components and Node.js/Express REST endpoints for a live production app. Refactored 5+ modules into reusable components.",
    },
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
          onClick={() => handleTab("academic")}
        >
          Academic
        </button>
        <button
          className={`tab-btn ${activeTab === "professional" ? "active" : ""}`}
          onClick={() => handleTab("professional")}
        >
          Professional
        </button>
      </div>

      <div className="timeline" ref={ref} key={tabKey}>
        {timelineData.map((item, index) => (
          <div
            key={`${activeTab}-${index}`}
            className={`timeline-item ${index % 2 === 0 ? "left" : "right"} ${
              inView ? "item-visible" : ""
            }`}
            style={{ animationDelay: `${index * 0.14}s` }}
          >
            <div className="timeline-content">
              <h2>
                {item.title} <span>{item.subtitle}</span>
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
