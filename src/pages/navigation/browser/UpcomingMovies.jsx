import axios from "axios"
import { useEffect, useState } from "react"
import UpcomingMoviesLayout from "../../../components/layout/UpcomingMoviesLayout"


const UpcomingMovies = () => {
    const [movies, setMovies] =useState([])


    async function getMovies(){
        const res = await axios.get(`https://mp2-api-json-server.onrender.com/movies?_start=0&_limit=9&_sort=release_date&_order=desc`)  
        setMovies(res.data)
    }

    useEffect(() =>{
        getMovies()
        return
    },[])

    return (
        <div>
            {movies.map((movie, index) => {
              return (
                  <UpcomingMoviesLayout key={index} movie={movie} /> /*passing the movie component as prop, the key is used to get rid of the "Child" error in the console*/
              )
          })}
        </div>
    )
}

export default UpcomingMovies