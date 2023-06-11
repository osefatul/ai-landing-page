import React from 'react'
import "./bottomFooter.css"
import {BsTwitter, BsFacebook} from "react-icons/bs"
import {AiFillLinkedin, AiFillYoutube} from "react-icons/ai"

function BottomFooter() {
  return (
    <div className='bottomFooterWrapper'>
      <div className='nav'>
        <div className='navLogo'>
          <span>Logo</span>
        </div>
        <div className='navContact'>
          <span>Pricing</span>
          <span>About us</span>
          <span>Features</span>
          <span>Help Center</span>
          <span>Contact us</span>
          <span>FAQs</span>
          <span>Careers</span>
        </div>
      </div>
      <hr className='footerHR'/>
      <div className='langContainer'>
        <div className='selectContainer'>
          <select name="" id="">
            <option value="English">English</option>
            <option value="French">French</option>
            <option value="Chinese">Chinese</option>
          </select>
        </div>

        <div className='copyright'>
            &copy; 2023 The AI Consumer.Privacy.Terms.Sitemap
        </div>

        <div className='contactIcons'>
          <BsTwitter color='#00acee'/>
          <BsFacebook color='#4267B2'/>
          <AiFillLinkedin color='#0072b1'/>
          <AiFillYoutube color='#c4302b'/>
        </div>
      </div>

      <div className='halfDotsContainer'>
        {
          [1,2,3,4].map(row => (
            <div className='dotsRow'>
              . . . . .
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default BottomFooter