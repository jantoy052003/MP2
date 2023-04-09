import React, { useRef, useState } from 'react'
import "./list.css"
import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@material-ui/icons';
import RomanceItems from "../listItem/RomanceItems"
import RomanceCat from '../../../assets/romance.png'

const Romance = () => {

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
        listRef.current.style.transform = `translateX(${1380 + distance}px)`
    }
    if (direction === "right" && slideNumber < 1) {
      setSlideNumber(slideNumber + 1)
      listRef.current.style.transform = `translateX(${-1380 + distance}px)`
    }
  }
  //____________________________________

  return (
    <div className="list">
      <span className="listTitle"><img src={RomanceCat} alt="" /></span>
      <div className="wrapper">
        <ArrowBackIosOutlined className="sliderArrow left" onClick={()=>handleClick("left")} style={{display: !isMoved && "none"}}/>
            <div className="container" ref={listRef}>
              <RomanceItems/>
            </div>
        <ArrowForwardIosOutlined className="sliderArrow right" onClick={()=>handleClick("right")}/>
      </div>
    </div>
  )
}

export default Romance
