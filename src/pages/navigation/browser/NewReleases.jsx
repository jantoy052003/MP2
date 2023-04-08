import axios from "axios"
import { useEffect, useRef, useState } from "react"
import { Pagination, Container, Row, Col }  from 'react-bootstrap';
import MovieCards from '../../../components/MovieCards'
// import '../../../style/NewReleases.css' //in case you will be using its own css file for styling

//we can comment out/ delete the pagination since we only display 10 new releases

// let active = 1;
// let pages = [];
// for (let number = 1; number <= 5; number++) {
//   pages.push(
//     <Pagination.Item key={number} active={number === active}>
//       {number}
//     </Pagination.Item>,
//   );
// }

const NewReleases = () => {
    const [movies, setMovies] =useState([])
    const [page, setPage] = useState(1)
    const [limit, setLimit] = useState(10) //palitan yung number kung ilang movies per page ang limit
    const [pages, setPages] = useState(0)
    const total = useRef(0)

    async function getMovies(){
        const res = await axios.get(`https://mp2-api-json-server.onrender.com/movies?_start=9&_limit=10&_sort=release_date&_order=desc`) //sorted by release date
        
        
        setMovies(res.data)
        // console.table(res.data);
    }

    // async function getTotalMovies() {
    //     const res = await axios.get(`https://mp2-api-json-server.onrender.com/movies`)
    //     setPages(Math.ceil(res.data.length / limit))//to round up if ever the total has remainder when devided by the limit
    //     // console.log(Math.ceil(res.data.length / limit)); 
    // }

    // useEffect(() =>{
    //     getTotalMovies()
    //     return
    // },[])

    useEffect(() =>{
        getMovies()
        return
    },[page])

    return (
        <div className="pt-5 bg-dark">
            <Container className="mx-auto">
                <Row className="d-flex flex-row">
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
    )
}

export default NewReleases