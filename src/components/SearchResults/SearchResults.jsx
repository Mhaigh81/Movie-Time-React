 import React, { useEffect, useState } from 'react'
 import axios from 'axios'
 import './SearchResults.css'
 import MovieCard from '../Ui/MovieCard'

     const SearchResults = ({ movies}) => {
      
        function checkMovies(movies) {
        if (!movies) return
        }
      
       
       return(
        <>
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
       </div>  </> 
      )  
      
         
    }
 export default SearchResults;
