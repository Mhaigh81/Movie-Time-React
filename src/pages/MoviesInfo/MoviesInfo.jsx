import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { data, Link, useNavigate, useParams } from 'react-router-dom'
import MovieCard from '../../components/Ui/MovieCard';
import axios from 'axios';
import '../MoviesInfo/MoviesInfo.css'
import Ratings from '../../components/Ui/RatingsList';
import noimage from '../../assets/no-image.png'
 
const MoviesInfo = () => {

    const { id } = useParams ()
    const [movie, setMovie] = useState ()
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate ()

    useEffect(() => {
        const fetchMovie = async () => {
            setLoading(true);
            try {
                await new Promise(resolve => setTimeout(resolve, 2000));
                const {data} = await axios.get(`https://www.omdbapi.com/?i=${id}&apikey=900cdde7`);
                
                setMovie(data); // Store the movie data in state
            } catch (error) {
                console.error('Error fetching movie:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchMovie();
    }, [id]);

    if (loading) {
        return <div className='movie__loading'>
          <FontAwesomeIcon icon="spinner" />
          Loading ...
          </div>; // Show loading message while fetching
        
    }

    if (!movie) {
        return <div className='no--movies'>No movies found.</div>; // Handle case where no movie is returned
    }
   



  return (
    <div id="movies__body">
      <div className="movies__container">
        <div className="movies--row">
          <div className="movie__selected--top">
            <button onClick={() => navigate(-1)} className="movie__link">
              <FontAwesomeIcon icon="arrow-left" /> 
            </button>Back To Search Results
          </div>
          <div className="movie__selected">
            <figure className="movie__selected--figure">
              <img
                src={movie.Poster}
                onError={(e) => (e.target.src = noimage)}
                className="movie__selected--img"
              />
            </figure>
            <div className="movie__selected--description">
              <h2 className="movie__selected--title">{movie.Title}</h2>
              <p className="movie__selected--plot">{movie.Plot}</p>
              <h3 className="movie__selected--actors">
                <span className="bold">Staring:</span> <br />
                {movie.Actors}
              </h3>
              <h3 className="movie__selected--genere">
                <span className="bold">Genere: </span>
                {movie.Genre}
              </h3>
              <h3 className="movie__selected--year">
                <span className="bold">Release Date: </span>
                {movie.Year}
              </h3>
              <h3 className="movie__selected--type">
                <span className="bold">Type: </span>
                {movie.Type}
              </h3>
              <h3 className="movie__selected--rating">
                <span className="bold">Rating: </span>
                {movie.Rated}
              </h3>
              <h3 className="movie__selected--rating">
                <span className="bold">Runtime: </span> {movie.Runtime}
              </h3>

              <div className="movie__reviews">
                <span className="bold">Reviews:</span>
                <Ratings ratings={movie.Ratings} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoviesInfo