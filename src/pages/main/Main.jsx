import React from 'react'

import "./main.css"
import Header from '../header/Header'
import SemiCircle from '../semiCircle/SemiCircle'
import Hero from '../hero/Hero'
import Categories from '../../pages/categories/Categories'
import Search from '../search/Search'
import Providers from '../providers/Providers'
import Latest from '../latest/Latest'
import Footer from '../footer/Footer'
import BottomFooter from '../bottomFooter/BottomFooter'


function Main() {

  return (
    <div className='topMain'>
      <div className='main'>
        <Header />
        <SemiCircle circleType="topCircle"/>
        <Hero/>
        <SemiCircle circleType="bottomCircle"/>
        <Categories/>
        <Search/>
        <Providers/>
      </div>
      <div className='footer'>
        <Latest />
        <Footer/>
        <BottomFooter/>
      </div>
    </div>
  )
}

export default Main