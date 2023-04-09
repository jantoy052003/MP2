import React, { useRef, useState } from 'react'
import "../list/list.css"
import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@material-ui/icons';
import NewReleasesItems from '../listItem/NewReleasesItems';

const NewRelease = () => {
  
  //----------CAROUSEL ANIMATION--------
  const [isMoved, setIsMoved] = useState(false)
  const [slideNumber, setSlideNumber] = useState(0)

  const listRef = useRef()

  const handleClick = (direction) => {
    setIsMoved(true)
    let distance = listRef.current.getBoundingClientRect().x - 50
    console.log(distance);
    if (direction === "left" && slideNumber > 0) {
        setSlideNumber(slideNumber - 1)
<<<<<<< HEAD
        listRef.current.style.transform = `translateX(${150 + distance}px)`
    }
    if (direction === "right" && slideNumber < 2) {
      setSlideNumber(slideNumber + 1)
      listRef.current.style.transform = `translateX(${-150 + distance}px)`
=======
        listRef.current.style.transform = `translateX(${228 + distance}px)`
    }
    if (direction === "right" && slideNumber < 2) {
      setSlideNumber(slideNumber + 1)
      listRef.current.style.transform = `translateX(${-228 + distance}px)`
>>>>>>> b52ad43280713e89c258fb13bff25e38cd5b0270
    }
  }
  //____________________________________

  return (
    <div className="list">
      <div className="wrapper">
        <ArrowBackIosOutlined className="sliderArrow left" onClick={()=>handleClick("left")} style={{display: !isMoved && "none"}}/>
            <div className="container" ref={listRef}>             
              <NewReleasesItems />
            </div>
        <ArrowForwardIosOutlined className="sliderArrow right" onClick={()=>handleClick("right")}/>
      </div>
    </div>
  )
}

export default NewRelease