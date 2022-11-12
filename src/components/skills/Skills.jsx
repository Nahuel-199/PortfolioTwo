import React, { useContext } from 'react';
import { ThemeContext } from "../../context";
import "./skills.css";
import Frontend from './Frontend';
import Backend from './Backend';

const Skills = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <section className="skills section" id="skills">
      <h2 style={{color: darkMode && "#fff"}} className="section__title">Skills</h2>
      <span className="section__subtitle">Mi nivel tecnico</span>
      <div className="skills__container container grid">
        <Frontend />
        <Backend />
      </div>
    </section>
  )
}

export default Skills