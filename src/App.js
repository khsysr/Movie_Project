/* common CSS */
import "./css/Footer.css";
import "./css/Reset.css";

import React from "react";
import axios from "axios";
/* Main css */
import "./css/MainCss/MainSection01.css";
import "./css/MainCss/MainSection02.css";
import "./css/MainCss/MainSection03.css";
import "./css/MainCss/MainSection04.css";
import "./css/MainCss/MainVisual.css";
/* Sub css */
import "./css/SubCss/SubHeader.css";
import "./css/SubCss/SubMainVisual.css";
import "./css/SubCss/SubMenu.css";
import "./css/SubCss/subheading.css";

/* common 설치 파일 */
import { Routes, Roter, Link, Route } from "react-router-dom"; /* Router */
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination"; /* swiper */

/* Common */
import Footer from "./component/Footer";
import Main from "./component/Main/Main";

/* Sub Component */
import SubWrap from "./component/Sub/SubWrap";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* 메인 페이지 */}
        <Route path="/" element={<Main />}></Route>
        {/* 서브페이지 */}
        <Route path="/SubWrap" element={<SubWrap />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}
/* class App ex tends React.Component {
  state = {
    // 응답에서 가져올 값들
    next_redirect_pc_url: "",
    tid: "",
    // 요청에 넘겨줄 매개변수들
    params: {
      cid: "TC0ONETIME",
      partner_order_id: "partner_order_id",
      partner_user_id: "partner_user_id",
      item_name: "초코파이",
      quantity: 1,
      total_amount: 2200,
      vat_amount: 200,
      tax_free_amount: 0,
      approval_url: "http://localhost:3000/",
      fail_url: "http://localhost:3000/",
      cancel_url: "http://localhost:3000/",
    },
  };

  componentDidMount() {
    const { params } = this.state;
    axios({
      // 프록시에 카카오 도메인을 설정했으므로 결제 준비 url만 주자
      url: "/v1/payment/ready",
      // 결제 준비 API는 POST 메소드라고 한다.
      method: "POST",
      headers: {
        // 카카오 developers에 등록한 admin키를 헤더에 줘야 한다.
        Authorization: "KakaoAK e95b0a5f7c4408dc677a2c313f13c605",
        "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
      },
      // 설정한 매개변수들
      params,
    }).then((response) => {
      // 응답에서 필요한 data만 뽑는다.
      const {
        data: { next_redirect_pc_url, tid },
      } = response;
      // 응답 data로 state 갱신
      this.setState({ next_redirect_pc_url, tid });
    });
  }

  render() {
    const { next_redirect_pc_url } = this.state;

    return (
      <div>
        <h2>Pay page</h2>
        <a href={next_redirect_pc_url}>{next_redirect_pc_url}</a>
      </div>
    );
  }
} */

export default App;
