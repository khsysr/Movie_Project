import React from "react";

function Footer() {
  return (
    <div className="Footer">
      <div className="Footer_wrap">
        <div className="footer_heading">
          <ul>
            <li>고객센터</li>
            <li>이용약관</li>
            <li>개인정보처리방침</li>
            <li>청소년 보호정책</li>
            <li>법적 고지</li>
            <li>인재채용</li>
          </ul>
        </div>
        <div className="footer_content">
          <p className="P_first">
            월트디즈니컴퍼니코리아 유한책임회사 | 대표자: 김소연 | 서울특별시
            <br />
            강남구 테헤란로 152, 7층 (우편번호: 06236) | Email:
            help@disneyplus.kr | 연락처: 080 822 1416 | <br />
            사업자등록번호: 220-81-03347 | 통신판매업 신고번호:
            <br />
            비디오물배급업 신고번호: 제2016-16호 | 호스팅서비스 사업자: NSOne
          </p>
          <p className="P_second">
            디즈니+의 콘텐츠는 서비스 여부에 따라 달라질 수 있습니다. © 2023
            Disney and its related entities. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
