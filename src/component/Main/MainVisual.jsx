import React from "react";
import { Link } from "react-router-dom";
function MainVisual() {
  return (
    <div className="MainVisual">
      <img src="./img/MainVisual.jpg" alt="" />
      {/* 헤더 */}
      <div className="header">
       <div className="header_logo">
       <img src="./img/Logo.png" alt="" />
       </div>
      </div>
      <div className="main_box">
        <div className="main_box_content">
          <h1>에이치 플러스에 오신걸 환영합니다.</h1>
          <h2>지금 당장 플레이 해보세요</h2><br/>
          <p>대작 영화와 인기 시리즈, 그리고 게임까지! 월 5,500원으로 시작하세요</p>
          <Link to="/SubWrap">
            <button className="btn" id="">
              추천 영화 보기
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MainVisual;
