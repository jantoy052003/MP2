import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import "../carouselItem/MovieItems/movieItems.css"
import JW1 from '../../assets/JW1.jpg'
// import Trailer from '../Trailer';
import Modal from 'react-bootstrap/Modal';
// import YoutubeEmbed from "../YouTubeEmbed/YouTubeEmbed";

const Cards = ({movie}) => {
  const [lgShow, setLgShow] = useState(false);
    //---onclick to change banner image based on the card selected----
    // const [active, setActive] = useState(false);
    // const handleClick = () => {
    //     setActive(!active);
    // };
    //________________________________________________

  return (
    <div className='cardsContainer'>
      <Card style={{ width: '10rem' }} className= " image mx-1 p-0 rounded-5 bg-transparent" >
         <Card.Img className='rounded-3' variant="top" src={`https://image.tmdb.org/t/p/w500/`+ movie.poster_path} onClick={() => setLgShow(true)} /> 
      </Card>

      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="overview"
      >
        <Modal.Header closeButton>
          <Modal.Title id="overview">
            {movie.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* <YoutubeEmbed embedId={movie.key} /> */}
          <div className='w-100 d-flex justify-content-center'>
            <img src={`https://image.tmdb.org/t/p/w500/`+ movie.backdrop_path}></img>
          </div>
          <div className='py-3'>
            {movie.overview}
          </div>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default Cards
