import React from 'react'
import '../Navbar/Navbar.css'
import logo from '../../assets/MovietimeLogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

const Navbar = () => {

   function openMenu () {
      document.body.classList.add("menu--open")
    }
    function closeMenu () {
      document.body.classList.remove("menu--open")
    }

  return (
    
      <div className="nav__container">
        <nav>
        <Link to="/" >
          <img className='logo' src={logo} alt="" />
        </Link>
        <ul className="nav__link--list">
          <li>
            <Link to="/" className="nav__link link__hover--effect">
              Home
           </Link>
          </li>
          <li>
            <Link to="/findmovies" className="nav__link link__hover--effect">
              Find Your Movie
            </Link>
          </li>
          <li>
            <Link to="/" className="nav__link nav__link--primary no-cursor">
              Contact
            </Link>
          </li>
          {/* bars menu */}
        </ul>
        </nav>
      </div>
    
  )
}

export default Navbar