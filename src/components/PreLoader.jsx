import { useEffect, useState } from "react";
import "../styles/preloader.css";

const NAME = "Abdul Rafay";

const PreLoader = ({ onDone }) => {
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const exit  = setTimeout(() => setExiting(true), 2600);
    const done  = setTimeout(onDone, 3300);
    return () => { clearTimeout(exit); clearTimeout(done); };
  }, [onDone]);

  return (
    <div className={`preloader ${exiting ? "preloader--exit" : ""}`}>
      <div className="preloader-inner">
        <h1 className="preloader-name" aria-label={NAME}>
          {NAME.split("").map((ch, i) => (
            <span
              key={i}
              className="preloader-letter"
              style={{ animationDelay: `${i * 0.055}s` }}
            >
              {ch === " " ? " " : ch}
            </span>
          ))}
        </h1>

        <p className="preloader-sub">Full Stack Engineer</p>

        <div className="preloader-bar-track">
          <div className="preloader-bar-fill" />
        </div>
      </div>

      <div className="preloader-curtain" />
    </div>
  );
};

export default PreLoader;
