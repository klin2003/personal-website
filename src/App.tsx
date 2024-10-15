import './App.css'
import NavBar from './section-features/NavBar';

import MainPage from './section00-audio/MainPage';
import AboutPage from './section01-about/AboutPage';
import ProjectsPage from './section02-projects/ProjectsPage';
import ExperiencesPage from './section03-experience/ExperiencesPage';
import ToolsPage from './section04-tools/ToolsPage';
import ContactPage from './section05-contact/ContactPage';

function App() {
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
    </div>
  );
}

export default App
