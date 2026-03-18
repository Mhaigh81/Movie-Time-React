import React, { useEffect, useState } from 'react'
 import axios from 'axios'
 import './SearchResults.css'
 import MovieCard from '../Ui/MovieCard'

     const SearchResults = ({ movies}) => {
      console.log(movies)
       
       return(
        <>
        <div className="results__container">
          <div className="results__row">
            <div className='movies'>
            {(movies || []).slice(0,6)
            .map((movie, index) => {
              
                return (
                    <MovieCard movie={movie} key={movie.imdbID + index}/>
                )
            })}    
            </div>  
          </div>
        </div>  
       </> 
      )  
      
    }
 export default SearchResults;