import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar.jsx'
import Landing from '../../components/Landing/Landing.jsx'
import Footer from '../../components/Footer/Footer.jsx'

const Home = () => {
  return (
    <div className='home'>
       <Navbar />
       <Landing />
       <Footer />
    </div>
  )
}

export default Home