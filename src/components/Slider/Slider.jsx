import React, { useState } from 'react';
import "./slider.css"
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import {AiOutlineLeft} from "react-icons/ai"
import {AiOutlineRight} from "react-icons/ai"
import {AiFillDollarCircle} from "react-icons/ai"
import {BsPersonCircle} from "react-icons/bs";
import {HiOutlineChartSquareBar} from "react-icons/hi";
import {BsCodeSlash} from "react-icons/bs"
import {SiJirasoftware} from "react-icons/si";
import {FcBusinessContact} from "react-icons/fc";



const providers = [
  {
    Icon: AiFillDollarCircle,
    iconColor: "rgb(197, 90, 108)",
    bgColor:"rgb(227, 163, 174)",
    title: "Finance",
    jobs:"1237 jobs"

  },
  {
    Icon: BsPersonCircle,
    iconColor: "#7a39a9",
    bgColor:"#bdacc9",
    title: "Education",
    jobs:"3456 jobs"
  },
  {
    Icon: BsCodeSlash,
    iconColor: "#cfad27",
    bgColor:"#e9e5d5",
    title: "IT",
    jobs:"5768 jobs"
  },
  {
    Icon: HiOutlineChartSquareBar,
    iconColor: "#5b8807",
    bgColor:"#e0e9cf",
    title: "Marketing",
    jobs:"2473 jobs"
  },
  {
    Icon: SiJirasoftware,
    iconColor: "#0e62d7",
    bgColor:"#b6c1d1",
    title: "SDE",
    jobs:"2473 jobs"
  },
  {
    Icon: FcBusinessContact,
    iconColor: "#b1350f",
    bgColor:"#c4b1ab",
    title: "Business",
    jobs:"2473 jobs"
  }
]


function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const length = providers.length;
  const column = 4

  const handleLeft = () =>{
    const newIndex = (currentIndex -1 +length) % length;
    console.log(newIndex)
    setCurrentIndex(newIndex)
  }

  const handleRight = () =>{
    // setIndex (index >= length ? 0 : index + 1)
    const newIndex = (currentIndex + 1) % length;
    console.log(newIndex)
    setCurrentIndex(newIndex)
  }

  const renderColumns = () =>{
    const start = currentIndex;
    const end = (currentIndex + column) % length;
    const slicedItems = 
    end >= start ? providers.slice(start, end):
    [...providers.slice(start), ...providers.slice(0, end)];

    return slicedItems.map((item, index)=>{
        return (
          <div style={{backgroundColor: item.bgColor }}
          className={`carousel-item ${index === currentIndex? "active": ""}`}>
          <item.Icon size="50px" color={`${item.iconColor}`}/>
          <p>{item.title}</p>
          <span>{item.jobs}</span>
        </div>
          )
    })
  }

  return (
  <div className='sliderContainer'>
    <div className='carousal'>
      <div className='previous'
        onClick={handleLeft}>
        <AiOutlineLeft size="20px"/>
      </div>
      <div className='carousal-items'>
        {
          renderColumns()
        }
      </div>
      <div className='next'
        onClick={handleRight}>
        <AiOutlineRight size="20px"/>
      </div>
    </div>
  </div>
  )
}

export default Slider