import './App.css'
import { Routes, Route, BrowserRouter } from "react-router-dom";

import HomePage from './HomePage';
import ContactPage from './ContactPage';
import AboutPage from './AboutPage';

function App() {
  return (
    <div className="bg-gradient-to-tr from-yellow-300 to-green-600">
      <BrowserRouter>
        <Routes>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
