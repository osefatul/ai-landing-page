import React from 'react'

import "./main.css"
import Header from '../header/Header'
import SemiCircle from '../semiCircle/SemiCircle'
import Hero from '../hero/Hero'
import Categories from '../categories/Categories'
import Search from '../search/Search'


function Main() {

  return (
    <div className='main'>
      <Header />
      <SemiCircle circleType="topCircle"/>
      <Hero/>
      <SemiCircle circleType="bottomCircle"/>
      <Categories/>
      <Search/>
    </div>
  )
}

export default Main