import React from 'react'
import "./latest.css"
import Blog from '../blog/Blog'
function Latest() {
  return (
      <div className='latestWrapper'>
        <div className='topContainer'>
          <h1>The latest on AI...</h1>
          <div className='blogWrapper'>
            <Blog />
            <Blog />
            <Blog />
          </div>
      </div>
    </div>
  )
}

export default Latest