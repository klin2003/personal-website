import './App.css'
import { useState, useEffect } from 'react';

import NavBar from './section-features/NavBar';
import Footer from './section-features/Footer';

import AboutPage from './section01-about/AboutPage';
import ProjectsPage from './section02-projects/ProjectsPage';
import ToolsPage from './section03-tools/ToolsPage';
import ContactPage from './section04-contact/ContactPage';

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
      setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
      window.addEventListener('resize', handleResize);
      return () => { window.removeEventListener('resize', handleResize) };
  }, []);

  return (
    <div>
      <img className="bg-image" src="/pastel-bg.jpg"></img>

      <NavBar width={windowWidth} />

      <AboutPage />
      <ProjectsPage />
      <ToolsPage />
      <ContactPage width={windowWidth} />

      <Footer />
    </div>
  );
}

export default App
