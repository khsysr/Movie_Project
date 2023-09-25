import React from "react";
import { Link } from "react-router-dom";

function SubHeader({ setOpen }) {
  const click = () => {
    setOpen(true);
  };
  return (
    <div className="SubHeader">
      <div className="Header">
        <ul>
          <li onClick={click}>
            <span></span>
            <span></span>
            <span></span>
          </li>
          <li>
            <Link to="/">
              <img src="./img/Logo.png" alt="" />
            </Link>
          </li>
          <li>
            <div className="search">
              <input type="text" placeholder="입력하세요" />
              <button>검색</button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SubHeader;
