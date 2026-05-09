import React, { useState } from 'react'

import  '../Landing/Landing.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import mainPhoto from '../../assets/movietheater_splash.jpg'
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import { Link, useSearchParams } from 'react-router-dom'

const Landing = () => {

    
    const [searchTerm, setSearchTerm] = useState("") 

  return (
   <section id="landing">
    <header className='header'>
        <div className="landing-container">
            <div className="row">
                <h1 className="main-title">America's Premier Movie DataBase</h1>
                <h2 className="sub-title">FIND YOUR FAVORITES WITH <span className='purple'>MOVIETIME</span></h2>
                <div className="landing-search">
                    <div className="landing-search__wrapper">
                        <input className="landing-search__input" type="text" placeholder='Search for your movie titles here:' 
                        value={searchTerm} 
                        onChange={(event) => setSearchTerm(event.target.value)} />

                        <Link to={`/findmovies?search=${searchTerm}`}>

                            <button className="landing-search__btn">
                                <FontAwesomeIcon icon={faMagnifyingGlass} className='fa-solid' />
                                
                            </button>
                        </Link>
                    </div>
                </div>
                <img src={mainPhoto} alt="" className="main-photo" /> 
            </div>
               
        </div>
    </header>
   </section>
  )
}

export default Landing