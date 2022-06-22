import React from 'react';
import './App.css';
import NavBar from './header/Header';
import Main from './main/Main';
import About from './about/About';
import Projetos from './projetos/Projects';
import Hard from './hards skills/HardSkills';
import Footer from './footer/Footer';
import Certific from './certificat/Cetific';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Main />
      <About />
      <Hard />
      <Projetos />
      <Certific />
      <Footer />
    </div>
  )
}

export default App
