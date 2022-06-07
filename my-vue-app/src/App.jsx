import React from 'react';
import './App.css';
import NavBar from './header/Header';
import Main from './main/Main';
import About from './about/About';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Main />
      <About />
    </div>
  )
}

export default App
