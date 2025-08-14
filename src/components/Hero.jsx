import React, { useState } from "react";
import "../style/Home.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import items from "../data.js";

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="hero">
      <div className="first-box" data-aos="fade-up-right">
        <h1>Novo!</h1>
        <h3>{items[activeIndex].subtitle}</h3>
        <p>{items[activeIndex].description}</p>
        <a>
          Proveri! <i className="ri-arrow-right-line"></i>
        </a>
      </div>
      <div className="second-box" data-aos="fade-up-left">
        <Swiper
          modules={[Autoplay]}
          loop={true}
          autoplay={{ delay: 3000 }}
          spaceBetween={1}
          slidesPerView={0.9}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        >
          {items.slice(0, 4).map((slide, index) => (
            <SwiperSlide key={index}>
              <div
                className={`slide-content ${
                  activeIndex === index ? "active" : ""
                }`}
              >
                <img src={slide.image} alt={slide.subtitle} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
