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
      title: "BS Computer Science",
      subtitle: "PMAS-Arid Agriculture University (UIIT)",
      duration: "2023 – May 2027 (Expected)",
      desc: "CGPA 3.84 / 4.00. Final Year Project: PATRON, an AI-assisted referral hiring platform (in development). Coursework: Artificial Intelligence, Data Structures, OOP, Software Engineering, Databases.",
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
      subtitle: "AlxTel, Inc. · Remote (US-based team)",
      duration: "April 2026 – Present",
      desc: "GovOps360, a multi-tenant government-contracting SaaS (React 18, Redux Toolkit, Grails 7, PostgreSQL, Meilisearch, Stripe): built modules across leads, quotations, proposals, purchase orders and subcontractors, Opportunities Intel reports (FEMA, NIH, awards) with cron refresh jobs, and RFP upload with requirement extraction. ConsoleLLM (FastAPI, Groq, ChromaDB): contributed to a text-to-SQL service that validates LLM query plans against an allowlisted schema and compiles them into parameterized SQL, adding multi-hop joins and hybrid semantic retrieval.",
    },
    {
      title: "Full Stack Engineer",
      subtitle: "AizTek Technologies · On-site, Rawalpindi",
      duration: "April 2026 – Present",
      desc: "Lead developer on Plan With Grace, a funeral-plan management platform for a UK client: rebuilding the legacy Grails 3 app on Grails 7.2.1 and React 19 with backend-driven pages for plans, payments, documents and reseller views. Integrated GoCardless direct debit, Xero invoices, HubSpot and Memoria sync, and RabbitMQ email/SMS; fixed payment-processing and uplift-report bugs and added CSV export.",
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
      desc: "Led development of a SaaS school management system (React, Node.js, Express) and set up Git branching and PR conventions for a three-person team.",
    },
    {
      title: "MERN Stack Developer Intern",
      subtitle: "Crypstac",
      duration: "Jul 2025 – Sep 2025",
      desc: "Built React components and Express/MongoDB REST endpoints for a live product; refactored 5+ UI modules into reusable components.",
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
