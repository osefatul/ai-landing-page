import React, { useEffect, useRef, useState } from 'react'
import "./progressMeter.css"
import SemiCircleProgressBar from "react-progressbar-semicircle";
import {RxDot} from "react-icons/rx";


function ProgressMeter() {

  const [percentage, setPercentage] = useState(72)
  let progress = useRef(0);

  useEffect(()=>{
    progress.current = 100 - percentage
  },[percentage])

  return (
    <div className='progressWrapper'>
      <div className='topDiv'>
        <p>Monthly Sales</p>
        <div className='goDots'>
          <RxDot/>
          <RxDot/>
          <RxDot/>
        </div>
      </div>

      <div className='progressBar'>
        <SemiCircleProgressBar 
        percentage={percentage} 
        stroke ="rgb(197, 90, 108)"
        strokeWidth={20}
        // showPercentValue={true}
        />
      </div>

      <div className='progressPer'>
        <div className='completed'>
          <span style={{color: "gray"}}>
            Completed
          </span> 
          <span className='perNumber'>
            {percentage}%
          </span>
        </div>

        <div className='remaining'>
          <span style={{color: "gray"}}>
            In Progress
          </span> 
          
          <span className='perNumber'>
            {progress.current}%
          </span>
        </div>
      </div>

      <div className='progressMiddleText'>Progress</div>
    </div>
  )
}

export default ProgressMeter