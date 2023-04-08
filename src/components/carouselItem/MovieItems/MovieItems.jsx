import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import "./movieItems.css"
// import Trailer from '../Trailer';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import YoutubeEmbed from "../YouTubeEmbed/YouTubeEmbed";

const MovieItems = ({movie}, props) => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className='cardsContainer'>
      <Card style={{ width: '8rem' }} className= " image mx-1 my-3 p-0 rounded-1 bg-dark" onClick={handleShow}>
            <Card.Img className='' variant="top" src={`https://image.tmdb.org/t/p/w500/`+ movie.poster_path} /> 
      </Card>
      <Modal onClick={handleShow}  show={show} onHide={handleClose} {...props} size="md" centered >
        <Modal.Body className='my-modal'>
            {/* CARD MODAL TEST - pwede mong i-edit eto sir para magkamukha sila nung sa popular */}
            <Card className='bg-dark' style={{ width: '470px', color: 'white' }} >
            <YoutubeEmbed embedId={movie.key} />
              <Card.Body >
                <Card.Title>{movie.original_title}</Card.Title>
                <Card.Text>{movie.overview}</Card.Text>
              </Card.Body>
          </Card>
            {/* --------------- */}
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default MovieItems
