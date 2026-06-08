import { useState, useEffect } from "react";
import { FaBars, FaTimes, FaCode } from "react-icons/fa";
import { TiWeatherSunny } from "react-icons/ti";
import { IoMoonOutline } from "react-icons/io5";
import { useTheme } from "../context/themeContext";
import { Link } from "react-scroll";
import "../styles/navbar.css";

const NAV_LINKS = [
  { to: "home",         label: "Home" },
  { to: "about",        label: "About" },
  { to: "experience",   label: "Experience" },
  { to: "skills",       label: "Skills" },
  { to: "projects",     label: "Projects" },
  { to: "certificates", label: "Certificates" },
  { to: "contact",      label: "Contact" },
];

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="logo">
        <FaCode className="logo-icon" />
        <span>Abdul <strong>Rafay</strong></span>
      </div>

      <ul className={`navLinks ${menuOpen ? "active" : ""}`}>
        {NAV_LINKS.map(({ to, label }) => (
          <li key={to}>
            <Link
              to={to}
              smooth={true}
              duration={500}
              offset={-80}
              spy={true}
              activeClass="nav-active"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          </li>
        ))}
        <li>
          <button onClick={toggleTheme} className="themeToggle" aria-label="Toggle theme">
            {theme === "dark" ? <TiWeatherSunny /> : <IoMoonOutline />}
          </button>
        </li>
      </ul>

      <div className="menuIcon" onClick={() => setMenuOpen((o) => !o)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
};

export default Navbar;
