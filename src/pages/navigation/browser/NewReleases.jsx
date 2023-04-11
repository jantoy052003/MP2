import { Carousel } from 'react-bootstrap'
import '../../../style/NewReleases.css'
import JW1 from '../../../assets/JW1.jpg'
import NewRelease from '../../../components/carouselItem/list/NewRelease'
import SC from '../../../assets/SC.jpg'
import Noise from '../../../assets/Noise.jpg'
import INS from '../../../assets/IHS.jpg'
import BS from '../../../assets/BS.jpg'
import EO from '../../../assets/EO.jpg'
import MS from '../../../assets/MS.jpg'
import Shazam from '../../../assets/Shazam.jpg'
import BM from '../../../assets/BM.jpg'
import TME from '../../../assets/TME.jpg'
import NR from '../../../assets/New Releases.png'
import JW1poster from '../../../assets/JWposter.jpg'
import SCposter from '../../../assets/SCposter.jpg'
import Noiseposter from '../../../assets/Noiseposter.jpg'
import INSposter from '../../../assets/IHSposter.jpg'
import BSposter from '../../../assets/BSposter.jpg'
import EOposter from '../../../assets/EOposter.jpg'
import MSposter from '../../../assets/MSposter.jpg'
import Shazamposter from '../../../assets/Shazamposter.jpg'
import BMposter from '../../../assets/BMposter.jpg'
import TMEposter from '../../../assets/TMEposter.jpg'
import Footer from '../../../components/Footer'


const NewReleases = ({movie}) => {
  
  return (
    <div id='newreleases'>
      <div id='carousel-lg'>
        <Carousel controls={false} fade={true} indicators={false} pause={false}>
          <Carousel.Item interval={5000}>
            <img
            id='carousel-img'
              className="d-block w-100"
              src={JW1}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <img
              id='carousel-img'
              className="d-block w-100"
              src={SC}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <img
            id='carousel-img'
              className="d-block w-100"
              src={Noise}
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <img
            id='carousel-img'
              className="d-block w-100"
              src={INS}
              alt="Fourth slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <img
            id='carousel-img'
              className="d-block w-100"
              src={BS}
              alt="Fifth slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <img
            id='carousel-img'
              className="d-block w-100"
              src={EO}
              alt="Six slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <img
            id='carousel-img'
              className="d-block w-100"
              src={MS}
              alt="Seven slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <img
            id='carousel-img'
              className="d-block w-100"
              src={Shazam}
              alt="Eight slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <img
            id='carousel-img'
              className="d-block w-100"
              src={BM}
              alt="Ninth slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <img
            id='carousel-img'
              className="d-block w-100"
              src={TME}
              alt="Tenth slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
      <div id='movie-carousel2'>
      <Carousel id='carousel-poster ' controls={false} fade={true} indicators={false} pause={false}>
          <Carousel.Item interval={5000}>
            <img
            id='carousel-imgp1'
              className="w-25"
              src={JW1poster}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <img
              id='carousel-imgp2'
              className="w-25"
              src={SCposter}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <img
            id='carousel-imgp3'
              className="w-25"
              src={Noiseposter}
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <img
            id='carousel-imgp4'
              className="w-25"
              src={INSposter}
              alt="Fourth slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <img
            id='carousel-imgp5'
              className="w-25"
              src={BSposter}
              alt="Fifth slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <img
            id='carousel-imgp6'
              className="w-25"
              src={EOposter}
              alt="Six slidep"
            />
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <img
            id='carousel-imgp7'
              className="w-25"
              src={MSposter}
              alt="Seven slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <img
            id='carousel-imgp8'
              className="w-25"
              src={Shazamposter}
              alt="Eight slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <img
            id='carousel-imgp9'
              className="w-25"
              src={BMposter}
              alt="Ninth slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <img
            id='carousel-imgp10'
              className="w-25"
              src={TMEposter}
              alt="Tenth slide"
            />
          </Carousel.Item>
        </Carousel>
        <img className="NRTitle" src={NR} alt="" />
        <NewRelease />
      </div>
    </div>
  )
}

export default NewReleases
