import React from 'react'
import '../movie.css'

function Movie({title,overview,poster,vote_count,release_date}) {
    
  return (
    <div className="movie-item">
      <img className='poster_img' src={poster} alt="poster_img" /> 
      <div className="movie-item__overlay">
        <div className="movie-item__description">
        <h3 className='movie-item__description--title'>{title}</h3>
        <div className="movie-item__description--summary">
          <p>{overview}</p>  
        </div>
        <div className="movie-item__description--statistics">
            <span>{vote_count}</span>
            <span>{release_date}</span>
        </div>
      </div> 
      </div>
      
    </div>
  )
}

export default Movie