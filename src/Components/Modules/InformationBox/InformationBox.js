import React from 'react'
import './InformationBox.css'
export default function InformationBox({ imgUrl, count, title, text }) {
    return (
        <div className='d-flex justify-content-between align-items-start flex-column my-5 w-100 '>
            <div className=" d-flex justify-content-center align-items-start flex-column text-end w-100 ">
                <div className="information-box__icon">
                    <img src={imgUrl} alt="icon" />
                </div>
                <div className=" d-flex justify-content-center align-items-center ">
                    <span className='information-box__count fw-bold'>{count}</span>
                </div>
                <div className=" d-flex justify-content-center align-items-start flex-column w-100  ">
                    <span className='information-box__title fw-bold mb-3'>{title}</span>
                    <span className='information-box__text'>{text}</span>
                </div>
            </div>
        </div>
    )
}
