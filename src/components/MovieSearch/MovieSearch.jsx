import React from 'react'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import overlayBackground from '../../assets/unsplash3.jpg' 
import axios from 'axios'
import './MovieSearch.css'
import '../SearchResults/SearchResults.css'
import MovieCard from '../Ui/MovieCard'
import FilterMovies from '../../components/FilterMovies/FilterBar.jsx'


const MovieSearch = () => {

  const [movies, setMovies] = useState([]) 
  const [searchTerm, setSearchTerm] = useState("batman")   
      
      async function getMovies(searchTerm) {
        console.log(searchTerm)
        const {data} = await axios.get(`https://www.omdbapi.com/?s=$fast&apikey=900cdde7`)
        setMovies(data.Search)
       
        
      }
      useEffect(() => { 
        setTimeout(() => {
          getMovies();
          
        }, 2000)
      }, [])

  
  return (
    <>
    <div className="search-container">
            <div className="row">
              <h1 className="find-title">Find Your Movie</h1>
              <div className="search">
                <div className="search__wrapper">
                  <input className='search__input' type="text" placeholder='Search for your movie titles here:' 
                  onChange={(event) => getMovies(event.target.value)} 
                  />
                  <button className="search__btn">
                    <FontAwesomeIcon icon={faMagnifyingGlass} className='search-fa-solid' />
                  </button>
                </div>
              </div>
            </div>
          
          <div className="overlay"></div>
        </div>
        <FilterMovies />
        <div className="results-container">
          <div className="results-row">
            <div className='movies'>
            {movies
            .slice(0,6)
            .map((movie) => {
              
                return (
                    <MovieCard movie={movie} key={movie.imdbID}/>
                )
            })}    
            </div>  
          </div>
        </div>   
      )  
  </>      
        
    
  )
}

export default MovieSearch