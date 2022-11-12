import React from "react";
import { useState } from "react";
import Menu from "./Menu";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "./portfolio.css";

const Portfolio = () => {
  const [items,] = useState(Menu);
  return (
    <section className="work container section" id="proyectos">
      <h2 className="section__title">Mis proyectos</h2>
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
          const { id, images, title, description } = elem;
          return (
            <SwiperSlide className="work__card" key={id}>
              <img src={images} alt="" className="work__img" />
              <h3 className="work__name">{title}</h3>
                       <p className="work__description">{description}</p>
              {/*  <a href="#" className="work__button">
                    <i class='bx bx-link work__button-icon'></i>
                    </a> */}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Portfolio;
