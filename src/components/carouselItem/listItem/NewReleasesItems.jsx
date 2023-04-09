import React from 'react'
import { useEffect, useState } from "react"
import axios from "axios"
import "./listItem.css"
import MovieItems from "../MovieItems/MovieItems"

const NewReleasesItems = () => {
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
                    <MovieItems key={index} movie={movie}></MovieItems> /*passing the movie component as prop, the key is used to get rid of the "Child" error in the console*/
                )
            })}
      </div>
    )
  }

export default NewReleasesItems
