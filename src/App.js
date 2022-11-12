import React, { useContext } from 'react';
import "./App.css";
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Portfolio from './components/portfolio/Portfolio';
import Qualification from './components/qualification/Qualification';
import ScrollUp from './components/scrollup/ScrollUp';
import Skills from './components/skills/Skills';
import Toggle from './components/toggle/Toggle';
import { ThemeContext } from "./context";

function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
    style={{
      backgroundColor: darkMode ? "#222" : "white",
      color: darkMode && "white",
    }}
    >
    <Toggle />
    <Header />
    <main className='main'>
    <Home />
    <About />
    <Skills />
    <Qualification />
    <Portfolio />
    <Contact />
    </main>

    <Footer />
    <ScrollUp />
    </div>
  );
}

export default App;
