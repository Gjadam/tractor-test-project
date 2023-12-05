import React from 'react'
import './CustomersBox.css'
import { MdFormatQuote } from "react-icons/md";
import { IoIosStar } from "react-icons/io";
import { IoIosStarOutline } from "react-icons/io";
export default function CustomersBox({imgUrl, title, text}) {
    return (
        <div className=' d-flex justify-content-center align-items-start flex-wrap flex-sm-nowrap w-100 align-items-sm-end mt-5  '>
            <div className="customers-box__image__wrapper">
                <img src={imgUrl} className='customers-box__image w-100 h-100 ' alt="image" />
                <div className="customers-box__icon__wrapper">
                    <MdFormatQuote className='customers-box__icon text-white ' />
                </div>
            </div>
            <div className="customers-box__content d-flex justify-content-between align-items-start text-end flex-column p-3 ">
                <div className=" mb-3 ">
                    <span className='customers-box__title fs-5 fw-bold '>{title}</span>
                    <span className='customers-box__title__role fst-italic  fs-6 me-3 '>موسس زامارین</span>
                </div>
                <div className=" fs-6 ">
                    <p className='customers-box__text'>{text}</p>
                </div>
                <div className="customers-box__rate fs-5  ">
                    <IoIosStar />
                    <IoIosStar />
                    <IoIosStar />
                    <IoIosStar />
                    <IoIosStarOutline />
                </div>

            </div>
        </div>
    )
}
