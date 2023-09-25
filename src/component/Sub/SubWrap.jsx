import React, { useState } from "react";
/* 서브 전체 영역 */

import SubHeader from "./SubHeader";
import SubMainVisual from "./SubMainVisual";
import SubMenu from "./SubMenu";
import SubHeading from "./SubHeading";
import Movie from "./Movie";
import { dummy } from "./movieDummy";

/* css 영역 */


function SubWrap() {
  const [open, setOpen] = useState(false);

  return (
    <div className="SubPage" style={{ backgroundColor: "white" }}>
      <SubHeader setOpen={setOpen} />
      <SubMenu open={open} setOpen={setOpen} />
      <SubMainVisual />
      <SubHeading/>
      <div className="app-container">
        {dummy.results.map((item) => {
          return (
            <Movie
              title={item.title}
              poster_path={item.poster_path}
              vote_average={item.vote_average}
              overview={item.overview}
              release_date={item.release_date}
            />
          );
        })}
      </div>
      {/*    <SubPopular />
      <SubView />
      <SubKorea />
      <SubComic /> */}
    </div>
  );
}

export default SubWrap;
