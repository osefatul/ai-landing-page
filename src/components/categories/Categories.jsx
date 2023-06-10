import React from 'react'
import "./categories.css"
import Profiles from '../profiles/Profiles'


function Categories() {
  return (
    <div className='catContainer'>
      <div className='catTitles'>
        <h1 className='catTitle'>
          Featured 
          <span> AI </span>
          Software
        </h1>
        <h1 className='catTitle'>Categories</h1>
      </div>

      <div className='sideProfile'>
        <div className='sidebar'>
          <p>AI Writing</p>
          <p>AI SEO</p>
          <p>AI Video</p>
          <p>AI Chatbots</p>
          <p>AI Code</p>
          <p>AI Voice & Audio</p>
          <p>AI Automation</p>
          <p>AI VR & 3D</p>
          <p>AI Design</p>
        </div>

        <div className='profiles'>
          <Profiles />
          <Profiles/>
          <Profiles/>
          <Profiles/>
          <Profiles/>
          <Profiles/>
          <Profiles/>
          <Profiles/>
          <Profiles/>
        </div>
      </div>
    </div>
  )
}

export default Categories