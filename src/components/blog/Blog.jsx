import React from 'react'
import "./blog.css"

function Blog() {
  return (
    <div className='blogContainer'>
      <img src="https://www.mercer.com/assets/migrated-assets/blogs/us-health-news/2019/10/863497498-social-media-cropped-1200x630.jpg" alt="" />
      <div className='blogText'>
        <span className='subtitle'>Subtitle</span>
        <p className='title'>Blog title</p>
        <span
          className='description'>
            lpsemcdsakfljasdlfjalkadfadsfasdfsdjflasdjflafjlaskfas
        </span>
        <div className='labels'>
          <span className='label1'>label1</span>
          <span className='label2'>label2</span>
        </div>
      </div>
    </div>
  )
}

export default Blog