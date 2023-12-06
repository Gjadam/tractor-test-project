import React from 'react'
import './ContactUsBox.css'
export default function ContactUsBox({title, icon, text}) {
    return (
        <div className="contact-us-box d-flex justify-content-start align-items-start flex-column  text-end ">
            <span className='contact-us-box__title fw-bold mb-2 '>{icon}{title}</span>
            <span className='contact-us-box__text'>{text}</span>
        </div>
    )
}
