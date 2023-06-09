import React from 'react'
import "./main.css"
import Header from '../header/Header'
import SemiCircle from '../semiCircle/SemiCircle'
import Hero from '../hero/Hero'
function Main() {
  return (
    <div className='main'>
      <Header />
      <SemiCircle/>
      <Hero/>
    </div>
  )
}

export default Main