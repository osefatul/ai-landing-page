import React from 'react'
import "./hero.css"


function Hero() {
  return (
    <div className='heroContainer'>
      <div className='heroLeftContainer'>
        <div className='heroLeftTop'>
          <p className='topTitle'>The AI Consumer</p>
          <h1>Beyond the Horizon</h1>
          <p className='bottomTitle'>AI Insights for limitless Innovation</p>
        </div>

        <div className='heroLeftBottom'>
          <p>Get the seamless AI marketing automation bundle here.</p>
          <button className=''>
            Call to Action
          </button>
        </div>
      </div>
      <div></div>
    </div>
  )
}

export default Hero