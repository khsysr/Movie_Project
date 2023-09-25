import React from "react";
import "../../css/SubCss/SubMenu.css";
function SubMenu({ open, setOpen }) {
  const close = () => {
    setOpen(false);
  };
  return (
    <div className={`SubMenu ${open ? "active" : ""}`}>
      <div className="SubMenu_Wrap">
        {/* 닫기 버튼 */}
        <div className="close" onClick={close}>
          <button className="btn_close">x</button>
        </div>
      </div>
      <div className="sub_menu01">
        <ul>
          <li>
            <img src="./img/home.png" alt="" />
            <h2>홈</h2>
          </li>
          <li>
            <img src="./img/star.png" alt="" />
            <h2>인기영상</h2>
          </li>
          <li>
            <img src="./img/view.png" alt="" />
            <h2>시청기록</h2>
          </li>
        </ul>
      </div>
      <div className="sub_menu02">
        <ul>
          <li>
            <img src="./img/movie.png" alt="" />
            <h2>영화</h2>
          </li>
          <li className="menu_bar">한국영화</li>
          <li className="menu_bar">해외영화</li>
          <li className="menu_bar">극장판 애니메이션</li>
        </ul>
      </div>
      <div className="sub_menu03">
        <ul>
          <li>
            <img src="./img/tv.png" alt="" />
            <h2>방송</h2>
          </li>
          <li className="menu_bar">드라마</li>
          <li className="menu_bar">예능</li>
          <li className="menu_bar">다큐/시사</li>
          <li className="menu_bar">애니메이션</li>
          <li className="menu_bar">해외드라마</li>
        </ul>
      </div>
      <div className="sub_menu04">
        <ul>
          <li>
            <img src="./img/person.png" alt="" />
            <h2>커뮤니티</h2>
          </li>
          <li className="menu_bar">공지사항</li>
          <li className="menu_bar">Q & A</li>
        </ul>
      </div>
    </div>
  );
}

export default SubMenu;
