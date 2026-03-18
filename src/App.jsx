import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react';
import React from "react"
import Home from './pages/Home/Home';
import FindMovies from './pages/FindMovies/FindMovies'
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faMagnifyingGlass, faTimes, faSpinner, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import MoviesInfo from './pages/MoviesInfo/MoviesInfo';
import MoviesCard from './components/Ui/MovieCard'



library.add(faBars,faMagnifyingGlass, faTimes, faSpinner, faArrowLeft )


function App() {
  return (
     <Router>
      <div className="App">
      <Navbar />  
        <Routes>      
          <Route path="/" element={<Home />} />
          <Route path="/FindMovies" element={<FindMovies />} />
          <Route path="/FindMovies/:id" element={<MoviesInfo />} />
        </Routes>   
      <Footer /> 
    </div>
    </Router>
  );
}
export default App;
