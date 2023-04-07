import DSTitleCard from '../../../assets/DS-titlecard.png'
import Mute from '../../../assets/icons8-mute-100.png'
import Voice from '../../../assets/icons8-voice-100.png'
import { Button } from 'react-bootstrap'
import '../../../style/Home.css'

const Home = () => {
  return (
    <div id="home">
      <div id="video-container">
        <div id='tc-container'>
          <img id='DStitlecard' src={DSTitleCard} alt="" />
          <div id='btn-container'>
            <Button id='btn-play' variant="light px-4 fw-bold" size="lg">Play</Button>
            <Button id='btn-mi' variant="light outline-light transparent text-light" size="lg">More Info</Button>
            <div id='audio'>
              <img id='mute' src={Mute} alt="" />
              <img id='voice' src={Voice} alt="" />
          </div>
          </div>
        </div>
        <iframe id="video-frame" width="100%" height="900" src="https://www.youtube.com/embed/CZI5V2VRc7s?modestbranding=1&controls=0&autoplay=1&mute=0&rel=0&amp;clip=UgkxGzBsSYsP3XNlqKAf6LmM5pbmyQeXRUMG&amp;clipt=ELgwGN_wAw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
        </iframe>
      </div>
      
    </div>
  )
}

export default Home
