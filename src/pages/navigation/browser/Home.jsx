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
      <div id='movie-carousel'>
        <div className='mb-5'>
          <Top10List />
        </div>
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
