import React from 'react'
import './FindMovies.css'
import Navbar from '../../components/Navbar/Navbar.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons' 

import MovieSearch from '../../components/MovieSearch/MovieSearch.jsx'
import SearchResults from '../../components/SearchResults/SearchResults.jsx'

const FindMovies = () => {
  return (
    <div className='findMovies'>
        
        <Navbar />
        <MovieSearch />
        <SearchResults />
        <Footer />
    </div>
  )
}

export default FindMovies