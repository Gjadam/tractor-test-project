import React from 'react'
import './Button.css'
export default function Button({text}) {
  return (
    <a href="" className=' text-decoration-none '  data-aos="fade-up" data-aos-duration="1000">
        <div className=" d-flex justify-content-center align-items-center">
        <h6 className='button__style text-white fw-bold '>{text}</h6>
        </div>
    </a>
  )
}
