import React from 'react'

const Info = () => {
  return (
    <div className="about__info grid">
        <div className="about__box">
        <i class='bx bx-award about__icon'></i>
            <h3 className="about__title">Experiencia</h3>
            <span className="about__subtitle">2 años Desarrollando</span>
        </div>

        <div className="about__box">
        <i class='bx bx-briefcase-alt about__icon'></i>
            <h3 className="about__title">Completados</h3>
            <span className="about__subtitle">20 + Projectos</span>
        </div>

        <div className="about__box">
        <i class='bx bx-support about__icon'></i>
            <h3 className="about__title">Apoyo</h3>
            <span className="about__subtitle">En línea 24/7</span>
        </div>
    </div>
  )
}

export default Info