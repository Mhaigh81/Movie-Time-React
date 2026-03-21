import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import noimage from '../../assets/no-image.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const MovieCard = ({ movie }) => {
  
  const [img, setImg] = useState (null) 
  const [loading, setLoading] = useState(true) 
  const noImg = noimage
  
    useEffect(() => {
    const image = new Image()
      image.src = movie.Poster

      image.onload = () =>{
          setTimeout(() => {
            setImg(image.src)
            setLoading(false)
          }, 2000)
      }

      image.onerror = () => {
          setImg(noImg)
          setLoading(false)
      }

      return () => {
        setImg(null)
        
      }
    }, [movie])

  
  return (
    <div className="movie__card">
      {loading ? (
        <>
          <div className="movie__img--skeleton"></div>        
          <div className="skeleton movie__title--skeleton"></div>
        </>
      ) : img ? (  
        <>
          <Link to={`/FindMovies/${movie.imdbID}`} target="_blank">
            <figure>
            <img className="movie__img" src={img} ></img>
          </figure>
          </Link>
          <h2 className="movie__title">{movie.Title}</h2>
          <h4 className="movie__year">{movie.Year}</h4>

         <Link to={`/FindMovies/${movie.imdbID}`} target="_blank">
            <button className="movie__btn">Learn More</button>{" "}
          </Link>
        </>
       ) : (
        <>
         <img className="movie__img" src={noImg} />         
        </>
      )} 
      
    </div>
  );
};

export default MovieCard;
