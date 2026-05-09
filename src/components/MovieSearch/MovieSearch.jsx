import React from 'react'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import overlayBackground from '../../assets/unsplash3.jpg' 
import axios from 'axios'
import './MovieSearch.css'


import { useSearchParams } from 'react-router-dom'
import SearchResults from '../SearchResults/SearchResults.jsx'
import FilterBar from '../../components/FilterMovies/FilterBar.jsx'


const MovieSearch = () => {

  const [movies, setMovies] = useState([]) 
  const [searchTerm, setSearchTerm] = useState("") 
  const [inputValue, setInputValue] = useState("")
  const [searchParams, setSearchParams] = useSearchParams() 
 

  const searchValue = searchParams.get("search")
      
      async function getMovies(term) {
        if (!term) return
        setInputValue(term)
        try{
          const {data} = await axios.get(`https://www.omdbapi.com/?s=${term}&apikey=900cdde7`)
        setMovies(data.Search || [])
        } catch(error) {
          console.error("Error fetching movies:", error);
          setMovies([]);
        } 
      
      }

      useEffect(() => {
        if (searchValue) {
          setSearchTerm(searchValue);
          getMovies(searchValue);
        }
      }, [searchValue]);


  
  return (
    <>
    <div className="search__container">
            <div className="row">
              <h1 className="find__title">Find Your Movie</h1>
              <div className="search">
                <div className="search__wrapper">
                  <input className='search__input' type="text" placeholder='Search for your movie titles here:' 
                  value={searchTerm}
                  onChange={(event) => setSearchTerm(event.target.value)} 
                  onKeyDown={(event) => {
                    if (event.key === "Enter") {
                      setSearchParams({ search: searchTerm})
                    }
                  }}
                  />
                  <button className="search__btn">
                    <FontAwesomeIcon icon={faMagnifyingGlass} className='search-fa-solid' onClick={() => setSearchParams({ search: searchTerm})} />
                  </button>
                </div>
              </div>
            </div>
          
          <div className="overlay"></div>
        </div>
        <FilterBar term={inputValue} movies={movies} setMovies={setMovies}/>
        <SearchResults movies={movies} />
        
        
  </>      
        
    
  )
}

export default MovieSearch