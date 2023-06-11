import React from 'react'
import "./search.css"
import {BiSearchAlt} from "react-icons/bi"
import Category from '../category/Category'


function Search() {
  return (
    <div className='searchContainer'>
      <div className='topSearchContainer'>
        <h1>
          Search trending
          <span> AI </span>
          products
        </h1>
        <div className='searchBar'>
          <div className='leftSearch'>
            <BiSearchAlt
            size="24px"/>
            <input 
            type="text" 
            placeholder='Search for AI products...' 
            />
          </div>
          <div className='rightSearch'>
            <select name="" id="">
              <option value="Categories">Category</option>
              <option value="Category 1">Category 1</option>
              <option value="Category 2">Category 2</option>
              <option value="Category 3">Category 3</option>
              <option value="Category 4">Category 4</option>
            </select>
            <div className='rightIcon'>
              <BiSearchAlt size="24px" color='white'/>
            </div>
          </div>
        </div>
      </div>
      <div className='componentsSearchContainer'>
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
      </div>
    </div>
  )
}

export default Search