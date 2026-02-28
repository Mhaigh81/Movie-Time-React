import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  
  return (
    <div className="movie__card">
      <figure>
        <img className="movie__img" src={movie.Poster}></img>
      </figure>
      <h2 className="movie__title">{movie.Title}</h2>
      <h4 className="movie__year">{movie.Year}</h4>

      <Link to={`https://www.omdbapi.com/?i=${movie.imdbID}&apikey=900cdde7`}>
        <button className="movie__btn">Learn More</button>{" "}
      </Link>
    </div>
  );
};

export default MovieCard;
