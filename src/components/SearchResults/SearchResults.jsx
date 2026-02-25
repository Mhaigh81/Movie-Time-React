import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import overlayBackground from '../../assets/unsplash3.jpg' 
import './SearchResults.css'
import { Link } from 'react-router-dom'

    const SearchResults = () => {

      const [movies, setMovies] = useState([])    
      
      async function getMovies() {
        const {data} = await axios.get("https://www.omdbapi.com/?s=$batman&apikey=900cdde7")
        setMovies(data.Search)
        
      }
      useEffect(() => { 
        setTimeout(() => {
          getMovies();
        }, 500)
      }, [])

    
      
      
      return(
        
      <div className="results-container">
        <div className="results-row">
          <div className='movies'>
          {movies
          .slice(0,6)
          .map((movie) => {
              return (
                  <div className="movie__card">
                      <figure>
                          <img className="movie__img" src={movie.Poster} ></img>
                      </figure>
                      <h2 className="movie__title">{movie.Title}</h2>
                      <h4 className="movie__year">{movie.Year}</h4>
                  
                      <Link to={`https://www.omdbapi.com/?i=${movie.imdbID}&apikey=900cdde7`}>
                        <button className="movie__btn">Learn More</button> </Link>
                  </div>
              )
          })}    
          </div>  
        </div>
      </div>   
      )  
      
         
    }
export default SearchResults;