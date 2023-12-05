import React from 'react'
import './AboutBox.css'
export default function AboutBox({title, text}) {
  return (
    <div className=' p-3'>
        <h4 className='about-box__title fw-bold '>{title}</h4>
        <h6 className='about-box__text lh-base '>{text}</h6>
    </div>
  )
}
