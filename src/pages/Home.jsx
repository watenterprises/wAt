import { useState } from 'react'
import HeroSection from '../components/HeroSection'
import Navbar from '../components/NavBar'
import AboutSection from '../components/AboutSection';
import ProjectSection from '../components/ProjectSection';
import ContactSection from '../components/ContactSection';
import FooterSection from '../components/FooterSection';

function Home() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <HeroSection/>
      <AboutSection/>
      <ProjectSection/>
      <ContactSection/>
      <FooterSection/>
    </>
  )
}

export default Home
