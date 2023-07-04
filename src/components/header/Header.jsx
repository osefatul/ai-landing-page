import React from 'react'
import "./header.css"
import {NavLink}  from "react-router-dom"

function Header() {
  return (
    <div className='header'>
    <div className="container">
      <div className='logo'>
        Logo
      </div>

      <div className='contents'>
        <p>Home</p>
        <NavLink style={{textDecoration: "none", listStyle: "none"}} to="/categories">
          <p>Interactive AI</p>
        </NavLink>
        <p>Software</p>
        <p>Services</p>
        <p>Learning</p>
        <p>Blog</p>
      </div>

      <div className='subscribeButton'>
        <button>Subscribe</button>
      </div>
    </div>
  </div>
  )
}

export default Header