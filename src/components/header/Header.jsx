import React, { useState } from "react";
import "./header.css";

const Header = () => {

  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    if (this.scrollY >= 80) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
  });

  const [Toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");

  return (
    <header className="header">
      <nav className="nav container">
        <a href="#home" className="nav__logo">
          Nahuel Cernadas 
        </a>

        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a href="#home"
              onClick={() => setActiveNav("#home")} 
              className={
                activeNav === "#home" ? "nav__link active-link"
                : "nav__link"
              }>
              <i class="uil uil-estate nav__icon"></i>
                Home
              </a>
            </li>

            <li className="nav__item">
              <a 
              href="#about"
              onClick={() => setActiveNav("#about")} 
              className={
                activeNav === "#about" ? "nav__link active-link"
                : "nav__link"
              }
               >
                <i className="uil uil-user nav__icon"></i>
                Sobre mí
              </a>
            </li>

            <li className="nav__item">
              <a 
              href="#skills" 
              onClick={() => setActiveNav("#skills")} 
              className={
                activeNav === "#skills" ? "nav__link active-link"
                : "nav__link"
              }>
                <i className="uil uil-file-alt nav__icon"></i>
                Skills
              </a>
            </li>

            <li className="nav__item">
              <a 
              href="#proyectos" 
              onClick={() => setActiveNav("#proyectos")} 
              className={
                activeNav === "#proyectos" ? "nav__link active-link"
                : "nav__link"
              }>
                <i className="uil uil-scenery nav__icon"></i>
                Proyectos
              </a>
            </li>

            <li className="nav__item">
              <a 
              href="#contacto" 
              onClick={() => setActiveNav("#contacto")} 
              className={
                activeNav === "#contact" ? "nav__link active-link"
                : "nav__link"
              }>
                <i className="uil uil-message nav__icon"></i>
                Contancto
              </a>
            </li>
          </ul>

          <i className="uil uil-times nav__close" onClick={() => showMenu(!Toggle)}></i>
        </div>

        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
