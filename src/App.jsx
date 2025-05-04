import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AnimatedBackground from './components/AnimatedBackground';
import Thanks from './components/Thanks';


function App() {
    useEffect(() => {
      AOS.init({
        duration: 800,
        once: true,
        easing: 'ease-in-out',
      });
    }, []);

    
  return (
    <>
    <AnimatedBackground />
      <Header />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Contact />
      <Footer />

      <div id="thanks">
        <Thanks />
      </div>
    </>
  );
}


export default App;
