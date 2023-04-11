import React , { useState } from 'react'
import { Button, Carousel } from 'react-bootstrap'
import NewRelease from '../../../components/carouselItem/list/NewRelease'
import '../../../style/NewReleases.css'
import JW1 from '../../../assets/JW1.jpg'
import Footer from '../../../components/Footer'
import Cards from '../../../components/backdrops/Cards'
import CarouselMovies from '../../../components/backdrops/CarouselMovies'


const NewReleases = () => {
  return (
    <div id='newreleases'>

      <div id="video-container">
        <div id="carouselExampleSlidesOnly" className="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-pause="false" data-bs-touch="false">
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="5">
              <img src={JW1} className="d-block w-100" alt="..." />
            </div> 
          </div>
        </div>
      </div>
      <div id='movie-carousel2'>
        <CarouselMovies/>
      </div>
      <Footer/>
    </div>
  )
}

export default NewReleases
