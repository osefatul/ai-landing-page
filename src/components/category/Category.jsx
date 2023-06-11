import React from 'react'
import "./category.css"
import {BsStars} from "react-icons/bs"
import {MdOutlineRocketLaunch} from "react-icons/md";


function Category() {
  return (
    <div className='categoryContainer'>
      <div className='imageContainer'>
        <img src="https://www.bitcatcha.com/wp-content/uploads/2022/05/jasper-poster.png" alt="" />
      </div>

      <div className='textContainer'>
        <div className='titleText'>
          <p>Notion AI</p>
          <span>Write amazing stories</span>
        </div>
        <span className='copywriting'>Copywriting</span>
      </div>
      
      <div className='iconsContainer'>
        <MdOutlineRocketLaunch size="28px" color='#EEBC1D' />
        
        <div className='starContainer'>
        <BsStars size="28px" color='#AA336A'/>
          <div className='badge'> 180 </div>
        </div>
      </div>

    </div>
  )
}

export default Category