import { useState } from "react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home");

  const handleClick = (section) => {
    setActive(section);
  };


  const linkStyle = (name) => ({
    color: active === name ? "#00fff2" : "white",
  });

  return (
    <nav className="navbar">
      <div className="nav-container">
        <h1 className="logo">Pitso.</h1>

        {/* Hamburger Menu Button */}
        <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "✖" : "☰"}
        </button>

        {/* Navbar Links */}
        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li><a href="#" onClick={() => handleClick("home")} style={linkStyle("home")} >Home</a></li>
          <li><a href="#about" onClick={() => handleClick("about")} style={linkStyle("about")} >About</a></li>
          <li><a href="#skills" onClick={() => handleClick("skills")} style={linkStyle("skills")}>Skills</a></li>
          <li><a href="#projects" onClick={() => handleClick("projects")} style={linkStyle("projects")}>Projects</a></li>
          <li><a href="#contact" onClick={() => handleClick("contact")} style={linkStyle("contact")}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
