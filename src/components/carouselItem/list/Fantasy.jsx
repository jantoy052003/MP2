import React, { useRef, useState } from 'react'
import "./list.css"
import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@material-ui/icons';
import FantasyItems from "../listItem/FantasyItems"

const Fantasy = () => {

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
        listRef.current.style.transform = `translateX(${1065 + distance}px)`
    }
    if (direction === "right" && slideNumber < 4) {
      setSlideNumber(slideNumber + 1)
      listRef.current.style.transform = `translateX(${-1065 + distance}px)`
    }
  }
  //____________________________________

  return (
    <div className="list">
      <span className="listTitle">Fantasy</span>
      <div className="wrapper">
        <ArrowBackIosOutlined className="sliderArrow left" onClick={()=>handleClick("left")} style={{display: !isMoved && "none"}}/>
            <div className="container" ref={listRef}>
              <FantasyItems/>
            </div>
        <ArrowForwardIosOutlined className="sliderArrow right" onClick={()=>handleClick("right")}/>
      </div>
    </div>
  )
}

export default Fantasy
