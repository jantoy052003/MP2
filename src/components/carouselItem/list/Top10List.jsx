import React, { useRef, useState } from 'react'
import "../list/list.css"
import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@material-ui/icons';
import Top10Items from "../listItem/Top10Items"

const Top10List = () => {

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
        listRef.current.style.transform = `translateX(${110 + distance}px)`
    }
    if (direction === "right" && slideNumber < 2) {
      setSlideNumber(slideNumber + 1)
      listRef.current.style.transform = `translateX(${-110 + distance}px)`
    }
  }
  //____________________________________

  return (
    <div className="list">
      <span className="listTitle">Top 10</span>
      <div className="wrapper">
        <ArrowBackIosOutlined className="sliderArrow left" onClick={()=>handleClick("left")} style={{display: !isMoved && "none"}}/>
            <div className="container" ref={listRef}>
              <Top10Items/>
            </div>
        <ArrowForwardIosOutlined className="sliderArrow right" onClick={()=>handleClick("right")}/>
      </div>
    </div>
  )
}

export default Top10List
