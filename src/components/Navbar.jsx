import { FaRegCircle, FaBars, FaTimes } from "react-icons/fa";
import { TiWeatherSunny } from "react-icons/ti";
import { IoMoonOutline } from "react-icons/io5";
import { useTheme } from "../context/themeContext";
import { useState } from "react";
import { Link } from "react-scroll"; // ✅ Import Link
import "../styles/navbar.css";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => setMenuOpen(!menuOpen);

  return (
    <nav className={`navbar ${theme === "dark" ? "dark" : ""}`}>
      <div className="logo">
        <FaRegCircle />
        Abdul Rafay
      </div>
      <ul className={`navLinks ${menuOpen ? "active" : ""}`}>
        <li>
          <Link
            to="home"
            smooth={true}
            duration={500}
            offset={-80} // adjust for fixed navbar
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="about"
            smooth={true}
            duration={500}
            offset={-80}
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="experience"
            smooth={true}
            duration={500}
            offset={-80}
            onClick={() => setMenuOpen(false)}
          >
            Experience
          </Link>
        </li>
        <li>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            offset={-80}
            onClick={() => setMenuOpen(false)}
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            offset={-80}
            onClick={() => setMenuOpen(false)}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            offset={-80}
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
        </li>
        <li>
          <button onClick={toggleTheme} className="themeToggle">
            {theme === "dark" ? <TiWeatherSunny /> : <IoMoonOutline />}
          </button>
        </li>
      </ul>
      <div className="menuIcon" onClick={handleMenuToggle}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
};

export default Navbar;
