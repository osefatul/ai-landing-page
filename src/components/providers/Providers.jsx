import React, { useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import "./providers.css"
import Slider from '../Slider/Slider';

const responsive = {
  desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
  },
  tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
  },
  mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
  }
};



function Providers() {

  return (
    <div className='providerContainer'>
      <div className='textContainer'>
        <h1 className='aiText'>AI{" "}</h1>
        <h1 className=''> Service Providers</h1>
      </div>

      <div className='sliderContainer'>
        <Slider/>
      </div>
    </div>
  )
}

export default Providers