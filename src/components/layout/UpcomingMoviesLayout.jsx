import '../../style/UpcomingMovies.css'
import Modal from 'react-bootstrap/Modal'
import React, { useState } from 'react';
import YoutubeEmbed from '../YoutubeEmbed';

const UpcomingMoviesLayout = ({movie}) => {
  const [lgShow, setLgShow] = useState(false);

  return (
    <div >
      <div id="backdrop">
        <img src={`https://www.themoviedb.org/t/p/original`+ movie.backdrop_path} />
      </div>
      <div id='movie-info'>
        <img src={`https://www.themoviedb.org/t/p/original/`+ movie.poster_path} onClick={() => setLgShow(true)} />
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
            </Modal.Body>
            <Modal.Footer>
            <div className='py-3'>
              {movie.overview}
            </div>
          </Modal.Footer>
        </Modal>
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
