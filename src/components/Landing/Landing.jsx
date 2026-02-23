import React from 'react'
import  '../Landing/Landing.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import mainPhoto from '../../assets/movietheater_splash.jpg'
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
   <section id="landing">
    <header className='header'>
        <div className="container">
            <div className="row">
                <h1 className="title">America's Premier Movie DataBase</h1>
                <h2 className="sub-title">FIND YOUR FAVORITES WITH <span className='purple'>MOVIETIME</span></h2>
                <div className="search">
                    <div className="search__wrapper">
                        <input className="search__input" type="none" placeholder='Click the magnifying glass to begin'/>
                        <Link to="/findmovies">
                            <button className="search__btn">
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