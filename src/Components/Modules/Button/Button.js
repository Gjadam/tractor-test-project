import React from 'react'
import './Button.css'
export default function Button({text}) {
  return (
    <a href="" className=' text-decoration-none '>
        <div className=" d-flex justify-content-center align-items-center">
        <h6 className='button__style text-white '>{text}</h6>
        </div>
    </a>
  )
}
