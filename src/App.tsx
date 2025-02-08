import './App.css'
import { useState, useEffect } from 'react';

import BackgroundImage from '@assets/pastel-bg.jpg';

import NavBar from './section-features/NavBar';
import Footer from './section-features/Footer';

import AboutPage from './section01-about/AboutPage';
import ProjectsPage from './section02-projects/ProjectsPage';
import ToolsPage from './section03-tools/ToolsPage';
import Overlay from './section-features/Overlay';

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [projectIndex, setProjectIndex] = useState(1);
  const [focusState, setFocusState] = useState(-1);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => { window.removeEventListener('resize', handleResize) };
  }, []);

  return (
    <div className="relative">
      <img className="bg-image" src={BackgroundImage}></img>

      <NavBar />

      <AboutPage width={windowWidth} />
      <ProjectsPage width={windowWidth} projectIndex={projectIndex} setProjectIndex={setProjectIndex} setFocus={setFocusState} />
      <ToolsPage width={windowWidth} />

      {(focusState >= 0) && <Overlay projectIndex={projectIndex} setFocus={setFocusState} focusState={focusState} />}

      <Footer />
    </div>
  );
}

export default App
