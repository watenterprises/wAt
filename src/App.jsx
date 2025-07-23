import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import HeroSection from './components/HeroSection'
import Navbar from './components/NavBar'
import AboutSection from './components/AboutSection';
import AboutPage from './pages/AboutPage'
import ProjectPage from './pages/ProjectPage'
import ProjectSection from './components/ProjectSection';
import Home from './pages/Home';
import CareersPage from './pages/CareersPage';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* Your Routes and Page Components */}
      <Routes>
        {/* Define routes here */}
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<AboutPage />} />
        {/* <Route path="/services" element={<ServicesPage />} /> */}
        <Route path="/projects" element={<ProjectPage/>} />
        <Route path="/careers" element={<CareersPage />} />
        {/* <Route path="/contact" element={<ContactPage />} /> */}
      </Routes>
    </>
  )
}

export default App
