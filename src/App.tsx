import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Journey from './components/Journey';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import WhatIOffer from './components/WhatIOffer';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Journey />
        <Skills />
        <Experience />
        <Projects />
        <WhatIOffer />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
