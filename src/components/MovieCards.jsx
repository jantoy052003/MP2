import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import YoutubeEmbed from '../components/YoutubeEmbed';
import '../style/MovieCards.css'


const MovieCards = ({movie}) => {
  const [lgShow, setLgShow] = useState(false);

  return (
    <div id='img-container'>
      <img id='movie-img' src={`https://image.tmdb.org/t/p/w500/`+ movie.poster_path} onClick={() => setLgShow(true)} />
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
          <YoutubeEmbed embedId={movie.key} />
          <div className='py-3'>
            {movie.overview}
          </div>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default MovieCards
