import React, {useState} from 'react'

import "./main.css"
import Header from '../header/Header'
import SemiCircle from '../semiCircle/SemiCircle'
import Hero from '../hero/Hero'
import Categories from '../categories/Categories'



function Main() {
  const top = true;

  return (
    <div className='main'>
      <Header />
      <SemiCircle circleType="topCircle"/>
      <Hero/>
      <SemiCircle circleType="bottomCircle"/>
      <Categories/>
    </div>
  )
}

export default Main