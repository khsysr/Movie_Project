import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

function MainSection01() {
  return (
    <div className="MainSection01">
      <div className="MainSection01_heading">
        <h1>오직 여기에서만 플레이 해보세요</h1>
      </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        autoplay={{
          delay: 1000,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="swiper1">
          <img src="./img/Main01.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide className="swiper1">
          <img src="./img/Main02.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide className="swiper1">
          <img src="./img/Main03.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide className="swiper1">
          <img src="./img/Main04.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide className="swiper1">
          <img src="./img/Main05.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide className="swiper1">
          <img src="./img/Main06.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide className="swiper1">
          <img src="./img/Main07.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide className="swiper1">
          <img src="./img/Main08.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide className="swiper1">
          <img src="./img/Main09.jpg" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default MainSection01;
