import React from "react";
const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280/";

function Movie({ title, poster_path, vote_average, overview, release_date }) {
  return (
    <div className="movie-container">
      <h2>{release_date}</h2>
      <img src={IMG_BASE_URL + poster_path} alt="영화 포스터"></img>
      <div className="movie-info">
        <h4>{title}</h4>
        <span>평점 : {vote_average}</span>
        <p>{overview}</p>
      </div>
    </div>
  );
}

export default Movie;
