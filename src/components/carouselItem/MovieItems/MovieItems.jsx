import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import "./movieItems.css"

// import Trailer from '../Trailer';
import Modal from 'react-bootstrap/Modal';
import YoutubeEmbed from "../YouTubeEmbed/YouTubeEmbed";

const MovieItems = ({movie}, props) => {
  const [lgShow, setLgShow] = useState(false);

  return (
    <div className='cardsContainer'>
      <Card style={{ width: '8rem' }} className= " image mx-1 my-3 p-0 rounded-5 bg-transparent">
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
            {movie.original_title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <YoutubeEmbed embedId={movie.key} />
          <div className='py-3'>
            {movie.overview}
          </div>
        </Modal.Body>
      </Modal>
  </div>
  )
}

export default MovieItems
