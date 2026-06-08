import { useState } from "react";
import { FiExternalLink, FiX, FiAward } from "react-icons/fi";
import "../styles/certificates.css";
import useInView from "../hooks/useInView";

const certs = [
  {
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    img: "/responsive-web-design.png",
    year: "2024",
    color: "#0a0a23",
    badge: "FCC",
  },
  {
    title: "Introduction to Frontend Development",
    issuer: "Meta · Coursera",
    img: "/frontend.png",
    year: "2025",
    color: "#0668e1",
    badge: "META",
  },
  {
    title: "Programming with JavaScript",
    issuer: "Meta · Coursera",
    img: "/javascript.png",
    year: "2025",
    color: "#0668e1",
    badge: "META",
  },
  {
    title: "Version Control",
    issuer: "Meta · Coursera",
    img: "/version-control.png",
    year: "2025",
    color: "#0668e1",
    badge: "META",
  },
];

const Certificates = () => {
  const [ref, inView] = useInView(0.1);
  const [modal, setModal] = useState(null);

  return (
    <section className="my-certificates" id="certificates">
      <div className="certs-heading">
        <h1>Certificates</h1>
        <p>Credentials & Achievements</p>
      </div>

      <div className="certs-grid" ref={ref}>
        {certs.map((cert, i) => (
          <div
            key={i}
            className={`cert-card ${inView ? "cert-visible" : ""}`}
            style={{ animationDelay: `${i * 0.13}s` }}
            onClick={() => setModal(cert)}
          >
            <div className="cert-preview">
              <img src={cert.img} alt={cert.title} width="800" height="560" loading="lazy" decoding="async" />
              <div className="cert-hover-overlay">
                <span>Click to expand</span>
                <FiExternalLink />
              </div>
            </div>

            <div className="cert-info">
              <div
                className="cert-badge"
                style={{ background: cert.color }}
              >
                <FiAward />
                <span>{cert.badge}</span>
              </div>
              <div className="cert-text">
                <h3>{cert.title}</h3>
                <p>{cert.issuer}</p>
                <span className="cert-year">{cert.year}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {modal && (
        <div className="cert-modal-backdrop" onClick={() => setModal(null)}>
          <div className="cert-modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="cert-modal-close"
              onClick={() => setModal(null)}
            >
              <FiX />
            </button>
            <div className="cert-modal-img">
              <img src={modal.img} alt={modal.title} width="800" height="560" loading="lazy" decoding="async" />
            </div>
            <div className="cert-modal-info">
              <h3>{modal.title}</h3>
              <p>{modal.issuer} · {modal.year}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificates;
