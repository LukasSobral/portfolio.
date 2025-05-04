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
      
      <section id="thanks" style={{ backgroundColor: '#0e0e10', color: '#ededed', padding: '80px 0', textAlign: 'center' }}>
        <h2 style={{ color: '#8A2BE2' }}>Thank you!</h2>
        <p>Your message has been sent successfully. I’ll get back to you soon.</p>
      </section>
      <Footer />

   

    </>
  );
}


export default App;
