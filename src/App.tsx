import './App.css'
import { useState, useEffect } from 'react';

import NavBar from './section-features/NavBar';
import Footer from './section-features/Footer';

import MainPage from './section00-audio/MainPage';
import AboutPage from './section01-about/AboutPage';
import ProjectsPage from './section02-projects/ProjectsPage';
import ExperiencesPage from './section03-experience/ExperiencesPage';
import ToolsPage from './section04-tools/ToolsPage';
import ContactPage from './section05-contact/ContactPage';

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

      <NavBar />

      <MainPage />
      <AboutPage />
      <ProjectsPage />
      <ExperiencesPage />
      <ToolsPage />
      <ContactPage />

      <Footer />
    </div>
  );
}

export default App
