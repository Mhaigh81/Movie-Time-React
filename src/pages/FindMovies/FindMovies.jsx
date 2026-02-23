import React from 'react'
import '../FindMovies/FindMovies.css'
import Navbar from '../../components/Navbar/Navbar.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons' 
import overlayBackground from '../../assets/unsplash3.jpg'

const FindMovies = () => {
  return (
    <div className='findMovies'>
        
        <Navbar />
          <div className="container">
            <div className="row">
              <h1 className="title">Find Your Movie</h1>
              <div className="search">
                <div className="search__wrapper">
                  <input className='search__input' type="text" placeholder='Search for your movie titles here:'  />
                  <button className="search__btn">
                    <FontAwesomeIcon icon={faMagnifyingGlass} className='fa-solid' />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="overlay"></div>
        <Footer />
    </div>
  )
}

export default FindMovies