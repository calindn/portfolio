import React, { Fragment } from 'react';
import './App.css';
import Intro from './components/intro/Intro';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Portfolio from './components/portfolio/Portfolio';
import Experience from './components/experience/Experience';
import Contact from './components/contact/Contact';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  AOS.init({
    easing: 'ease',
    duration: 1800,
    once: true
});

  return (
    <Fragment>
      <Intro />
      <About />
      <Skills />
      <Portfolio />
      {/* <Experience /> */}
      <Contact />
    </Fragment>
  );
}

export default App;
