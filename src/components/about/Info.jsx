import React, { useContext } from 'react';
import { ThemeContext } from "../../context";

const Info = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="about__info grid">
        <div className="about__box">
        <i class='bx bx-award about__icon'></i>
            <h3 className="about__title">Experiencia</h3>
            <span style={{color: darkMode && "rgb(34, 34, 34)"}} className="about__subtitle">4 años Desarrollando</span>
        </div>

        <div className="about__box">
        <i class='bx bx-briefcase-alt about__icon'></i>
            <h3 className="about__title">Completados</h3>
            <span style={{color: darkMode && "rgb(34, 34, 34)"}} className="about__subtitle">30 + Projectos</span>
        </div>

        <div className="about__box">
        <i class='bx bx-support about__icon'></i>
            <h3 className="about__title">Apoyo</h3>
            <span style={{color: darkMode && "rgb(34, 34, 34)"}} className="about__subtitle">En línea 24/7</span>
        </div>
    </div>
  )
}

export default Info