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
            {movie.original_title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div id='modal-video'>
            <YoutubeEmbed embedId={movie.key} />
          </div>
          <div className='py-3'>
            {movie.overview}
          </div>
        </Modal.Body>
      </Modal>
        {/*<Card id='card-container' style={{ width: '230px' }} className= " cardsContainer mx-3 my-3">
            <Card.Img id='movie-img' src={`https://image.tmdb.org/t/p/w500/`+ movie.poster_path} /> {/**completes the path to the poster */} 
            {/*<Card.Body>
                <Card.Title>{movie.original_title}</Card.Title>
                <Card.Text>
                    {movie.overview}
                    {/* <YoutubeEmbed embedId={movie.key} /> */}
                {/*</Card.Text>
                {/*<Button>Watch Trailer{/* <Trailer movie={movie}/> */}{/*</Button>*/}
            {/*</Card.Body> */}
        {/*</Card>*/}
    </div>
  )
}

export default MovieCards
