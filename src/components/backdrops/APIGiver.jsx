import React from 'react'
import { useEffect, useState } from "react"
import axios from "axios"
import "../../components/carouselItem/listItem/listItem.css"
import MovieItems from "../carouselItem/MovieItems/MovieItems"

import Cards from './Cards'
import NewReleases from '../../pages/navigation/browser/NewReleases'

const APIGiver = () => {
    const [movies, setMovies] =useState([])

    async function getMovies() {
      const res = await axios.get(`https://mp2-api-json-server.onrender.com/movies?_start=9&_limit=10&_sort=release_date&_order=desc`) //change this if we want to display other categories in carousel view
      setMovies(res.data)
    }
  
    useEffect(() =>{
      getMovies()
      return
    },[])
  
    return (
      <div className='images'>
          {movies.map((movie, index) => {
                return (
                    // <MovieItems key={index} movie={movie}></MovieItems> 
                    <Cards key={index} movie={movie}></Cards>
                )
            })}
          {/* {movies.map((movie, index) => {
                return (
                    // <MovieItems key={index} movie={movie}></MovieItems> 
                    <NewReleases key={index} movie={movie}></NewReleases>
                )
            })} */}
      </div>
    )
  }

export default APIGiver
