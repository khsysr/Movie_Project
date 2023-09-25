import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Autoplay } from "swiper/modules";

function SubMainVisual() {
  return (
    <div className="SubMainVisual">
      <div className="SubMain Subinner01">
        <Swiper
          cssMode={true}
          navigation={true}
          autoplay={{
            delay: 3000,
          }}
          modules={[Navigation, Pagination, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide className="sub_slide">
            <div className="sub_wrap">
              <img src="./img/SubMain01.png" alt="이미지" />
              <div className="sub_box">
                <div className="sub_text">
                  <h1>
                    제목 : <em>메가로돈</em>
                  </h1>
                  <h2>
                    줄거리 :
                    <span>중국 과학자들이 이끄는 국제적인 심해조사..</span>
                  </h2>
                  <h3>
                    출연진 :<span>제이슨 스테이섬, 레인 윌슨</span>
                  </h3>
                </div>
              </div>
              <div className="sub_video">
                <iframe
                  src="https://www.youtube.com/embed/bsLk0NPRFAc?autoplay=1&mute=1&controls=0&loop=1&start=15"
                  title="THE MEG - Official Trailer #1 [HD]"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="sub_slide">
            <div className="sub_wrap">
              <img src="./img/SubMain02.png" alt="이미지" />
              <div className="sub_box">
                <div className="sub_text">
                  <h1>
                    제목 : <em>바비</em>
                  </h1>
                  <h2>
                    줄거리 :
                    <span> '바비랜드'에서 살아가던 '바비'가 현실...</span>
                  </h2>
                  <h3>
                    출연진 :<span>마고 로비 , 라이언 고슬링</span>
                  </h3>
                </div>
              </div>
              <div className="sub_video">
                <iframe
                  src="https://www.youtube.com/embed/fA785mzQlWg?autoplay=1&mute=1&controls=0"
                  title="THE MEG - Official Trailer #1 [HD]"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="sub_slide">
            <div className="sub_wrap">
              <img src="./img/SubMain03.png" alt="이미지" />
              <div className="sub_box">
                <div className="sub_text">
                  <h1>
                    제목 : <em>더 넌</em>
                  </h1>
                  <h2>
                    줄거리 :
                    <span>루마니아의 젊은 수녀가 자살하는 사건을 의뢰..</span>
                  </h2>
                  <h3>
                    출연진 :<span>타이사 파미가 , 데미안 비쉬어</span>
                  </h3>
                </div>
              </div>
              <div className="sub_video">
                <iframe
                  src="https://www.youtube.com/embed/cRdxGfQh16w?autoplay=1&mute=1&controls=0"
                  title="THE MEG - Official Trailer #1 [HD]"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="sub_slide">
            <div className="sub_wrap">
              <img src="./img/SubMain04.png" alt="이미지" />
              <div className="sub_box">
                <div className="sub_text">
                  <h1>
                    제목 : <em>엘리멘탈</em>
                  </h1>
                  <h2>
                    줄거리 :<span>디즈니·픽사의 놀라운 상상력! 올여름...</span>
                  </h2>
                  <h3>
                    출연진 :<span>레아 루이스, 마모두 아티</span>
                  </h3>
                </div>
              </div>
              <div className="sub_video">
                <iframe
                  src="https://www.youtube.com/embed/y9bWhYGvBlk?autoplay=1&mute=1&controls=0"
                  title="THE MEG - Official Trailer #1 [HD]"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default SubMainVisual;
