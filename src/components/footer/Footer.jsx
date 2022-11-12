import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Nahuel</h1>
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              Sobre mí
            </a>
          </li>

          <li>
            <a href="#Portfolio" className="footer__link">
             Skills
            </a>
          </li>

          <li>
            <a href="#Skills" className="footer__link">
              Proyectos
            </a>
          </li>

          <li>
            <a href="#Skills" className="footer__link">
              Contacto
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.instagram.com/gabrielnahuel_/"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i class="bx bxl-instagram"></i>
          </a>

          <a
            href="https://github.com/Nahuel-199"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i class="bx bxl-github"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/nahuel-cernadas-3b111a1b7/"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i class="bx bxl-linkedin"></i>
          </a>
        </div>

        <span className="footer__copy">
            &#169; Nahuel Cernadas. Todos los derechos reservados
        </span>
      </div>
    </footer>
  );
};

export default Footer;
