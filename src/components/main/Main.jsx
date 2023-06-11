import React from 'react'

import "./main.css"
import Header from '../header/Header'
import SemiCircle from '../semiCircle/SemiCircle'
import Hero from '../hero/Hero'
import Categories from '../categories/Categories'
import Search from '../search/Search'
import Providers from '../providers/Providers'


function Main() {

  return (
    <div className='main'>
      <Header />
      <SemiCircle circleType="topCircle"/>
      <Hero/>
      <SemiCircle circleType="bottomCircle"/>
      <Categories/>
      <Search/>
      <Providers/>
    </div>
  )
}

export default Main