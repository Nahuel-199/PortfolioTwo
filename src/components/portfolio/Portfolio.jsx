import React from "react";
import { useState, useContext } from "react";
import { ThemeContext } from "../../context";
import Menu from "./Menu";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "./portfolio.css";

const Portfolio = () => {
  const [items] = useState(Menu);
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <section className="work container section" id="proyectos">
      <h2 style={{ color: darkMode && "#fff" }} className="section__title">
        Mis proyectos
      </h2>
      <span className="section__subtitle">Mi aprendizaje</span>

      <Swiper
        className="work__container"
        loop={true}
        grabCursor={true}
        spaceBetween={24}
        pagination={{
          dynamicBullets: true,
        }}
        breakpoints={{
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 48,
          },
        }}
        modules={[Pagination]}
      >
        {items.map((elem) => {
          const { id, images, title, description, link } = elem;
          return (
            <SwiperSlide className="work__card" key={id}>
              <a href={link} target="_blank" rel="noreferrer">
                <img src={images} alt="" className="work__img" />
              </a>
              <h3 className="work__name">{title}</h3>
              <p
                style={{ color: darkMode && "rgb(34, 34, 34)" }}
                className="work__description"
              >
                {description}
              </p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Portfolio;
