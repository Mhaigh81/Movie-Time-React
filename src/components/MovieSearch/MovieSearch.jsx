import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import overlayBackground from '../../assets/unsplash3.jpg' 
import './MovieSearch.css'

const MovieSearch = () => {
  
  return (
    <div className="search-container">
            <div className="row">
              <h1 className="find-title">Find Your Movie</h1>
              <div className="search">
                <div className="search__wrapper">
                  <input className='search__input' type="text" placeholder='Search for your movie titles here:'  />
                  <button className="search__btn">
                    <FontAwesomeIcon icon={faMagnifyingGlass} className='search-fa-solid' />
                  </button>
                </div>
              </div>
            </div>
          
          <div className="overlay"></div>
        
        
        
        </div>
    
  )
}

export default MovieSearch