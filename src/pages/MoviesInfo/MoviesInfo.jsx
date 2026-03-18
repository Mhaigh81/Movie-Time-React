import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { data, Link, useParams } from 'react-router-dom'
import MovieCard from '../../components/Ui/MovieCard';
import axios from 'axios';
import '../MoviesInfo/MoviesInfo.css'
 
const MoviesInfo = () => {

    const { id } = useParams ()
    const [movie, setMovie] = useState ()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchMovie = async () => {
            setLoading(true);
            try {
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
        return <div>Loading...</div>; // Show loading message while fetching
    }

    if (!movie) {
        return <div>No movie found.</div>; // Handle case where no movie is returned
    }
    console.log(movie)

// return (
//         <div>
//             <h1>{movie.Title}</h1>
//             <p>Year: {movie.Year}</p>
//             <p>Genre: {movie.Genre}</p>
//             <p>Plot: {movie.Plot}</p>
//             <img src={movie.Poster} alt={movie.Title} />
//             <Link to={`https://www.omdbapi.com/?i=${movie.imdbID}&apikey=900cdde7`} target="_blank" rel="noopener noreferrer">
//                 <button className="movie__btn">Learn More</button>
//             </Link>
//         </div>
//     );

  return (
    <div id="movies__body">
      <main className="movies__main">
        <div className="movies__container">
          <div className="row">
            <div className="movie__selected--top">
              <Link to="/findmovies" className='movie__link'>
                <FontAwesomeIcon icon="arrow-left" />
              </Link>
            </div>
            <div className="movie__selected">
              <figure className="movie__selected--figure">
                  <img src={movie.Poster} alt="" className='movie__selected--img' />
              </figure>
              <div className="movie__selected__description">
                <h2 className="movie__selected__title">
                  {movie.title}
                </h2>
                {movie.year}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default MoviesInfo