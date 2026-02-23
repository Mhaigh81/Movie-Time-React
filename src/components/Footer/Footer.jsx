import React from 'react'
import './Footer.css'
import Logo from '../../assets/MovietimeLogo.png'
import { Link } from 'react-router-dom'
import personalLogo  from  '../../assets/my-logo-white.png'

const Footer = () => {
  return (
    <footer>
        <div className="container">
            <div className="row row__column">
                <Link to="/">
                    <figure className="footer__logo">
                        <img src={Logo} className="footer__logo--img" alt=""/>
                    </figure>
                </Link>
                <div className="footer__list">
                    <Link to="/" className="footer__link ft-link__hover-effect">Home</Link>
                    <span className="footer__link ft-link__hover-effect no-cursor">About</span>
                    <Link to="/findmovies" className="footer__link ft-link__hover-effect">Find Movies</Link>
                    <Link to="/" className="footer__link ft-link__hover-effect no-cursor">Contact</Link>
                </div>
                <div className="footer__copyright">Copyright © 2026 Mike Haigh</div>
                <figure className="personal__logo">
                        <img src={personalLogo} className="personal__logo--img" alt=""/>
                </figure>
            </div>
        </div>
    </footer>
  )
}

export default Footer