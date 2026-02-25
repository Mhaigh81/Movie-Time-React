import React from 'react'
import './FilterBar.css'

const FilterBar = () => {

    


  return (
    <div className="filter-container">
            <div className="filter-row">
                <div className="filter-bar">
                    <div className="search">
                    <h1 className="search-info">Search results for </h1>
                    <h1 className="searchName"></h1>
                    </div>
                    <select id="filter" defaultValue="DEFAULT" onChange={(event) => FilterMoives(event.target.value)}>
                        <option value="DEFAULT" disabled>Sort</option>
                        <option value="newest">Newest to Oldest</option>
                        <option value="oldest">Oldest to Newest</option>
                    </select>
                </div>
                
                <div className="movies movies__loading">
                        <i className="fa-solid fa-spinner books__loading--spinner"></i>
                </div>
                
                
            </div>
        </div>
  )
}

export default FilterBar