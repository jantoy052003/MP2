import React from 'react'
import '../../style/UpcomingMovies.css'

const UpcomingMoviesLayout = ({movie}) => {
  return (
    <div >
      <div id="backdrop">
        <img src={`https://www.themoviedb.org/t/p/original`+ movie.backdrop_path} alt="" />
      </div>
      <div id='movie-info'>
        <img src={`https://www.themoviedb.org/t/p/original/`+ movie.poster_path} alt="" />
        <div id='info-overview'>
          <h3>{movie.title}</h3>
          <h6>Release Date: {movie.release_date}</h6>
          <br />
          <p>{movie.overview}</p>
        </div>
      </div>
    </div>
  )
}

export default UpcomingMoviesLayout
