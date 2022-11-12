import React from "react";
import { useState } from "react";
import "./qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section">
      <h2 className="section__title">Mi experiencia</h2>
      <span className="section__subtitle">Mi viaje personal</span>
      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Educación
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i class="uil uil-briefcase-alt qualification__icon"> </i>
            Experiencia
          </div>
        </div>
        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Instituto América Latina</h3>
                <span className="qualification__subtitle">
                  Escuela - Instituto
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2014 - Finalizado
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Teclab instituto técnico superior</h3>
                <span className="qualification__subtitle">
                   Técnico en Programación
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2019 - Finalizado
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Soy Henry</h3>
                <span className="qualification__subtitle">
                  Bootcamp intensivo de Programación
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2021 - Finalizado
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Freelancer</h3>
                <span className="qualification__subtitle">
                  aplicaciónes y paginas web
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2021 - Presente
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Wodeva</h3>
                <span className="qualification__subtitle">
                Backend Developer
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2021 - Presente
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
