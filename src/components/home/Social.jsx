import React from "react";

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://www.instagram.com/gabrielnahuel_/"
        className="home__social-icon"
        target="_blank" 
        rel="noreferrer"
      >
        <i class="uil uil-instagram"></i>
      </a>
      
      <a
        href="https://github.com/Nahuel-199"
        className="home__social-icon"
        target="_blank" 
        rel="noreferrer"
      >
        <i class="uil uil-github-alt"></i>
      </a>

      <a
        href="https://www.linkedin.com/in/nahuel-cernadas-3b111a1b7/"
        className="home__social-icon"
        target="_blank" 
        rel="noreferrer"
      >
        <i class="uil uil-linkedin-alt"></i>
      </a>
    </div>
  );
};

export default Social;
