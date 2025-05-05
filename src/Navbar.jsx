//import { useState } from "react";

/*const Nav = ({ active: currentSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home");

  const handleClick = (section) => {
    setActive(section);
  };


  const linkStyle = (name) => ({
    color: active === name ? "#00fff2" : "white",
  });

  return (
    <nav className="navbar" id="home">
      <div className="nav-container">
        <h1 className="logo">Pitso.</h1>

        {/* Hamburger Menu Button }
        <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "✖" : "☰"}
        </button>

        {/* Navbar Links }
        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li><a href="#home" onClick={() => handleClick("home")} style={linkStyle("home")} className={currentSection === 'home' ? 'active' : ''} >Home</a></li>
          <li><a href="#about" onClick={() => handleClick("about")} style={linkStyle("about")} className={currentSection === 'about' ? 'active' : ''} >About</a></li>
          <li><a href="#skills" onClick={() => handleClick("skills")} style={linkStyle("skills")} className={currentSection === 'skills' ? 'active' : ''} >Skills</a></li>
          <li><a href="#projects" onClick={() => handleClick("projects")} style={linkStyle("projects")} className={currentSection === 'projects' ? 'active' : ''} >Projects</a></li>
          <li><a href="#contact" onClick={() => handleClick("contact")} style={linkStyle("contact")} className={currentSection === 'contact' ? 'active' : ''} >Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

const Nav = ({ active: currentSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const linkStyle = (name) => ({
    color: currentSection === name ? "#00fff2" : "white",
  });

  return (
    <nav className="navbar">
      <div className="nav-container">
        <h1 className="logo">Pitso.</h1>

        <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "✖" : "☰"}
        </button>

        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li><a href="#home" style={linkStyle("home")} className={currentSection === 'home' ? 'active' : ''}>Home</a></li>
          <li><a href="#about" style={linkStyle("about")} className={currentSection === 'about' ? 'active' : ''}>About</a></li>
          <li><a href="#skills" style={linkStyle("skills")} className={currentSection === 'skills' ? 'active' : ''}>Skills</a></li>
          <li><a href="#projects" style={linkStyle("projects")} className={currentSection === 'projects' ? 'active' : ''}>Projects</a></li>
          <li><a href="#contact" style={linkStyle("contact")} className={currentSection === 'contact' ? 'active' : ''}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};


export default Nav; */
import { useEffect, useState } from "react";

const Nav = ({ active: currentSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (window.scrollY < lastScrollY) {
      setShowNav(true); // scrolling up
    } else {
      setShowNav(false); // scrolling down
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  const linkStyle = (name) => ({
    color: currentSection === name ? "#00fff2" : "white",
  });

  return (
    <nav className={`navbar ${showNav ? "show" : "hide"}`}>
      <div className="nav-container">
        <h1 className="logo">Pitso.</h1>

        <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "✖" : "☰"}
        </button>

        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li><a href="#home" style={linkStyle("home")} className={currentSection === 'home' ? 'active' : ''}>Home</a></li>
          <li><a href="#about" style={linkStyle("about")} className={currentSection === 'about' ? 'active' : ''}>About</a></li>
          <li><a href="#skills" style={linkStyle("skills")} className={currentSection === 'skills' ? 'active' : ''}>Skills</a></li>
          <li><a href="#projects" style={linkStyle("projects")} className={currentSection === 'projects' ? 'active' : ''}>Projects</a></li>
          <li><a href="#contact" style={linkStyle("contact")} className={currentSection === 'contact' ? 'active' : ''}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;

