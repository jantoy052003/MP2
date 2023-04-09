import DSTitleCard from '../../../assets/DS-titlecard.png'
import Mute from '../../../assets/icons8-mute-100.png'
import Voice from '../../../assets/icons8-voice-100.png'
import { Button } from 'react-bootstrap'
import '../../../style/Home.css'
import Top10List from "../../../components/carouselItem/list/Top10List";
import Action from "../../../components/carouselItem/list/Action"
import Drama from "../../../components/carouselItem/list/Drama";
import Comedy from "../../../components/carouselItem/list/Comedy";
import Fantasy from "../../../components/carouselItem/list/Fantasy";
import Horror from "../../../components/carouselItem/list/Horror";
import Mystery from "../../../components/carouselItem/list/Mystery";
import Romance from "../../../components/carouselItem/list/Romance";
import Thriller from "../../../components/carouselItem/list/Thriller";
import Western from "../../../components/carouselItem/list/Western";
import DS1 from '../../../assets/DS.jpg'
import DS2 from '../../../assets/DS2.jpg'
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import YoutubeEmbed from '../../../components/YoutubeEmbed'


const Home = () => {
  const [lgShow, setLgShow] = useState(false);

  return (
    <div id="home">
      <div id="video-container">
        <div id='tc-container'>
          <img id='DStitlecard' src={DSTitleCard} alt="" />
          <div id='btn-container'>
            <Button id='btn-play' variant="light px-4 fw-bold" size="lg">Watch Now</Button>
            <Button id='btn-mi' variant="light outline-light transparent text-light" size="lg" onClick={() => setLgShow(true)}>More Info</Button>
            <Modal
              size="lg"
              show={lgShow}
              onHide={() => setLgShow(false)}
              aria-labelledby="overview"
            >
              <Modal.Header closeButton>
                <Modal.Title id="overview">
                  Doctor Strange in the Multiverse of Madness
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <YoutubeEmbed embedId={"aWzlQ2N6qqg"} />
                <div className='py-3'>
                  Doctor Strange, with the help of mystical allies both old and new, traverses the mind-bending and dangerous alternate realities of the Multiverse to confront a mysterious new adversary.
                </div>
              </Modal.Body>
            </Modal>
            
            {/*<div id='audio'>
              <img id='mute' src={Mute} alt="" />
              <img id='voice' src={Voice} alt="" />
               </div>*/}
          </div>
        </div>
        <div id="carouselExampleSlidesOnly" className="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-pause="false" data-bs-touch="false">
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="10">
              <img src={DS1} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval="10">
              <img src={DS2} className="d-block w-100" alt="..." />
            </div> 
          </div>
        </div>
        <div>
            {/*<iframe
                id="video-frame" 
                width="100%" 
                height="1000" 
                src="https://www.youtube.com/embed/CZI5V2VRc7s?modestbranding=1&controls=0&autoplay=1&mute=0&rel=0&amp;clip=UgkxGzBsSYsP3XNlqKAf6LmM5pbmyQeXRUMG&amp;clipt=ELgwGN_wAw" title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen>
              </iframe>*/}
        </div>
      </div>
      <div id='movie-carousel'>
        <Top10List />
        <Action />
        <Drama />
        <Comedy />
        <Fantasy />
        <Horror />
        <Mystery />
        <Romance />
        <Thriller />
        <Western />
      </div>
    </div>
  )
}

export default Home
