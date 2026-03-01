import React from 'react'
import './FilterBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const FilterBar = ({ term }) => {

    function FilterMovies(event){
    const sortOption = event.target.value

    let sortedMovies = [...currentMovies]

    const getYear = (movie) => {
    const parts = movie.Year.split(/[-–]/)
        .map(p => p.trim())
        .filter(p => p !== "")
        .map(Number);
    return parts[parts.length - 1];
    };

    if (sortOption === "newest"){
        sortedMovies.sort((a, b) => getYear(b) - getYear(a))
    }
    else if (sortOption === "oldest"){
        sortedMovies.sort((a, b) => getYear(a) - getYear(b))
    }

    
}


  return (
    <div className="filter-container">
            <div className="filter-row">
                <div className="filter-bar">
                    <div className="search">
                    <h1 className="search-info">Search results for {term}</h1>
                    <h1 className="searchName"></h1>
                    </div>
                    <select id="filter" defaultValue="DEFAULT" onChange={(event) =>    
                        FilterMoives(event.target.value)}>
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