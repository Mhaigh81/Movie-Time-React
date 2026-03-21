import React from 'react'

const RatingsList = ({ ratings }) => {
  
  return (
   
    <div className='movie__ratings'>
          {ratings.map((rating, index) => (
            <div className='movie__rating' key={index}>
                <div className='movie__rating--source'>{rating.Source} </div>
                 <div className="movie__rating--value">{rating.Value}</div>
            </div>
            ))}
        </div>
        
   
  )
}

export default RatingsList