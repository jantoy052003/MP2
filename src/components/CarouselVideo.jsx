import Carousel from 'react-bootstrap/Carousel';
import DS1 from '../assets/Doctor-Strange-1.jpg'
import DS2 from '../assets/Doctor-Strange-2.jpg'

function CarouselVideo() {
  return (
    <Carousel fade className='w-100 vh-80'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={DS1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={DS2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <iframe width="100%" height="900" src="https://www.youtube.com/embed/aWzlQ2N6qqg?modestbranding=1&controls=0&autoplay=1&mute=0&playsinline=1&loop=1&rel=0&enablejsapi=1playlist=aWzlQ2N6qqg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
        </iframe>

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselVideo;