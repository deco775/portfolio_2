import { useState } from 'react';
import Navbar from './Navbar.jsx';
import Home from './Home/Home.jsx';
import ProfileImage from './Home/ProfileImage.jsx';
import About from './About/About.jsx';
import TechSkills from './TechSkills/TechSkills.jsx';
import Projects from './Projects/Projects.jsx';
import Contact from './Contact/Contact.jsx';
import Footer from './Footer/Footer.jsx';

function App() {

  return (
    <>
      <Navbar />
      <Home />
      <ProfileImage />
      <About />
      <TechSkills />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App
