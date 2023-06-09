import React from 'react'
import "./categories.css"


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

      <div>
        <div className='sidebar'>
        </div>


        <div className='profiles'></div>
      </div>
    </div>
  )
}

export default Categories