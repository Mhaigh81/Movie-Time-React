import React, { useState } from 'react'
import './FilterBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const FilterBar = ({ term, movies, setMovies }) => {

    
    
    const getYear = (movie) => {
    const parts = movie.Year.split(/[-–]/)
        .map(p => p.trim())
        .filter(p => p !== "")
        .map(Number);
        return parts[parts.length - 1];
    };

    function filterMoives(filter) {
        console.log(filter)
        if (filter === "newest"){
            setMovies(movies.slice().sort((a,b) =>  getYear(b) - getYear(a)))
        }
        else if (filter === "oldest"){
             setMovies(movies.slice().sort((a,b) =>  getYear(a) - getYear(b)))
            
        }
    }
    
  return (
    <div className="filter__container">
            <div className="filter__row">
                <div className="filter__bar">
                    <div className="search">
                    <h1 className="search__info">Search results for <span className="purple">{term}</span></h1>
                    <h1 className="searchName"></h1>
                    </div>
                    <select id="filter" defaultValue="DEFAULT" onChange={(event) =>    
                        filterMoives(event.target.value)}>
                        <option value="DEFAULT" disabled>Sort</option>
                        <option value="newest">Newest to Oldest</option>
                        <option value="oldest">Oldest to Newest</option>
                    </select>
                </div>
                
                {/* <div className="movies movies__loading">
                        <FontAwesomeIcon icon="spinner"className="fa-solid fa-spinner books__loading--spinner" />
                </div> */}
                
                
            </div>
        </div>
  )
}

export default FilterBar