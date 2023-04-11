import axios from "axios"
import { useEffect, useRef, useState } from "react"
import { Modal, Button, Pagination, Container, Row, Col, Carousel }  from 'react-bootstrap';
import MovieCards from '../../../components/MovieCards'
import '../../../style/Popular.css'
import SpidermanNWH from '../../../assets/Spiderman-NWH.jpg'
import SpidermanNWH2 from '../../../assets/Spiderman-NWH2.jpg'
import SpidermanNWH3 from '../../../assets/SNWH.jpg'
import SNWH from '../../../assets/SNWH-titlecard.png'
import YoutubeEmbed from '../../../components/YoutubeEmbed'
import PopMovies from '../../../assets/pop-movies.png'
import Footer from '../../../components/Footer'

let active = 1;
let pages = [];
for (let number = 1; number <= 5; number++) {
  pages.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>,
  );
}

const Popular = () => {
    const [movies, setMovies] =useState([])
    const [page, setPage] = useState(1)
    const [limit, setLimit] = useState(10) //palitan yung number kung ilang movies per page ang limit
    const [pages, setPages] = useState(0)
    const total = useRef(0)

    async function getMovies(){
        const res = await axios.get(`https://mp2-api-json-server.onrender.com/movies?_page=${page}&_limit=${limit}&_sort=vote_count&_order=desc`) //sorted by popularity
        
        
        setMovies(res.data)
        // console.table(res.data);
    }

    async function getTotalMovies() {
        const res = await axios.get(`https://mp2-api-json-server.onrender.com/movies`)
        setPages(Math.ceil(res.data.length / limit))//to round up if ever the total has remainder when devided by the limit
        // console.log(Math.ceil(res.data.length / limit)); 
    }

    useEffect(() =>{
        getTotalMovies()
        return
    },[])

    useEffect(() =>{
        getMovies()
        return
    },[page])

    const [lgShow, setLgShow] = useState(false);

    return (
        <div id="popular" className="bg-dark">
            <div id="video-container1">
                <div id='tc-container1'>
                    <img id='DStitlecard' src={SNWH} alt="" />
                    <div id='btn-container'>
                        <Button id='btn-play' variant="light px-4 fw-bold" size="lg" 
                            href="https://www.youtube.com/embed/3TYABnOSgCE?controls=0&amp;clip=UgkxjN0j4Wrcm4q-fwi_7F7fxzuo0XsKOcsm&amp;clipt=EOlJGMmeBA&modestbranding=1&controls=1&crel=0&autoplay=1&showinfo=0&fullscreen=1">
                            Watch Now
                        </Button>
                        <Button id='btn-mi' variant="light outline-light transparent text-light" size="lg" onClick={() => setLgShow(true)}>More Info</Button>
                        <Modal
                            size="lg"
                            show={lgShow}
                            onHide={() => setLgShow(false)}
                            aria-labelledby="overview"
                            >
                            <Modal.Header closeButton>
                                <Modal.Title id="overview">
                                    Spider-Man: No Way Home
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <YoutubeEmbed embedId={"rt-2cxAiPJk"} />
                                <div className='py-3'>
                                    Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.
                                </div>
                            </Modal.Body>
                        </Modal>
                    </div>
                </div>
                <Carousel controls={false} fade={true} indicators={false} pause={false}>
                    <Carousel.Item interval={5000}>
                        <img
                        id="carousel-img"
                        className="d-block w-100"
                        src={SpidermanNWH}
                        alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={5000}>
                        <img
                        id="carousel-img"
                        className="d-block w-100"
                        src={SpidermanNWH2}
                        alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={5000}>
                        <img
                        id="carousel-img"
                        className="d-block w-100"
                        src={SpidermanNWH3}
                        alt="Second slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
            <div id="pagination-container">
                <img className="paginationTitle" src={PopMovies} alt="" />
                <Container>
                    <Row className="d-flex flex-row justify-content-center">
                        {movies.map((movie, index) => {
                            return (
                                <MovieCards id="mc-container" key={index} movie={movie}></MovieCards> /*passing the movie component as prop, the key is used to get rid of the "Child" error in the console*/
                            )
                        })} 
                    </Row>
                </Container>
                <Container fluid>
                    <Row>
                        <Col>
                            <Pagination className="d-flex justify-content-center m-5">
                                {/**below is the final pagination form to make it "flexible" in case API total changes */}
                                {Array.from(Array(pages).keys()).map((pageNum) => {
                                    return (
                                        <Pagination.Item key={pageNum + 1} active={page === pageNum + 1} onClick={() => setPage(pageNum + 1)}>{pageNum + 1}</Pagination.Item>
                                    )
                                })}
                            </Pagination>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default Popular