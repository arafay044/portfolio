import { Link } from "react-router-dom";
import "../styles/notfound.css";

const NotFound = () => (
  <div className="not-found">
    <div className="nf-content">
      <p className="nf-label">404 — Page Not Found</p>
      <h1 className="nf-code">
        <span>4</span><span className="nf-zero">0</span><span>4</span>
      </h1>
      <p className="nf-message">
        Looks like this page took a wrong turn.<br />
        Let's get you back on track.
      </p>
      <Link to="/" className="nf-btn">← Back to Home</Link>
    </div>

    {/* decorative particles */}
    <div className="nf-particles" aria-hidden="true">
      {Array.from({ length: 12 }, (_, i) => (
        <span key={i} className="nf-particle" style={{
          width:  4 + (i * 3) % 6,
          height: 4 + (i * 3) % 6,
          left:   `${(i * 13.7) % 100}%`,
          top:    `${(i * 19.3) % 100}%`,
          animationDelay:    `${(i * 0.4) % 4}s`,
          animationDuration: `${8 + (i * 2.1) % 6}s`,
        }} />
      ))}
    </div>
  </div>
);

export default NotFound;
