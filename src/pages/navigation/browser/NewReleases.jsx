import React , { useState } from 'react'
import { Button, Carousel } from 'react-bootstrap'
import NewRelease from '../../../components/carouselItem/list/NewRelease'
import '../../../style/NewReleases.css'
import JW1 from '../../../assets/JW1.jpg'
import netflix from '../../../assets/netflix-collage.jpg'

import Cards from '../../../components/backdrops/Cards'
import CarouselMovies from '../../../components/backdrops/CarouselMovies'


const NewReleases = () => {

  //-----handleClick test----
  // const [active, setActive] = useState(false);
  // const [reset, setReset] = useState(true)
  // const handleClick = () => {
  //   setActive(!active);
  //   setReset(reset)
  // };
  //_________________________

  return (
    <div id='newreleases'>

      <div id="video-container">
        <div id="carouselExampleSlidesOnly" className="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-pause="false" data-bs-touch="false">
          <div className="carousel-inner">
            {/* <div className="carousel-item active" data-bs-interval="10">
              <img src= {active ? `https://image.tmdb.org/t/p/w500`+ movie2.backdrop_path : JW1} className="d-block w-100" alt="" />
            </div> */}
            <div className="carousel-item active" data-bs-interval="5">
              <img src={JW1} className="d-block w-100" alt="..." />
            </div> 
          </div>
        </div>
      </div>
        
      <div id='movie-carousel2'>
        {/* <NewRelease/> */}
        <CarouselMovies/>
      </div>
    </div>
  )
}

export default NewReleases
