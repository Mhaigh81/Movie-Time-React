import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import noimage from '../../assets/no-image.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const MovieCard = ({ movie }) => {
  
  const [img, setImg] = useState ()  
  
    useEffect(() => {
    const image = new Image()
      image.src = movie.Poster
      image.onload = () =>{
          setTimeout(() => {
            setImg(image)
          }, 2000)
      }
    })

  
  return (
    <div className="movie__card">
      {img ? (
        <>
          
          <Link to={`https://www.omdbapi.com/?i=${movie.imdbID}&apikey=900cdde7`}>
            <figure>
            <img className="movie__img" src={movie.Poster} onError={(e) => e.target.src=noimage}></img>
          </figure>
          </Link>
          <h2 className="movie__title">{movie.Title}</h2>
          <h4 className="movie__year">{movie.Year}</h4>

          <Link to={`https://www.omdbapi.com/?i=${movie.imdbID}&apikey=900cdde7`}>
            <button className="movie__btn">Learn More</button>{" "}
          </Link>
        </>
       ) : (
        <>
         
          <div className="movie__img--skeleton"></div>        
          <div className="skeleton movie__title--skeleton"></div>
         
        </>
      )} 
      
    </div>
  );
};

export default MovieCard;
