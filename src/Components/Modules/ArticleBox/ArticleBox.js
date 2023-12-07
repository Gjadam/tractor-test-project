import React from 'react'
import './ArticleBox.css'
import { HiOutlineArrowSmLeft } from "react-icons/hi";
export default function ArticleBox({ imgUrl, title, text }) {
    return (
        <>
            <a href="" className='article-box text-decoration-none ' >
                <div className=' d-flex justify-content-between  align-items-center flex-column row-gap-2 p-3 border-0 ' data-aos="fade-up" data-aos-duration="1000">
                    <div className="article-box__icon__wrapper mb-3 ">
                        <img src={imgUrl} className='article-box__icon' alt="icon" />
                    </div>
                    <div className="article-box__content d-flex justify-content-between align-items-center flex-column">
                        <span className='article-box__title  fw-bold fs-4  text-center '>{title}</span>
                        <span className='article-box__text text-center  fs-6 mt-3 '>{text}</span>
                    </div>
                    <div className='article-box__link'>
                        <span className=' fw-bold '>بیشتر بخوانید</span>
                        <HiOutlineArrowSmLeft className='article-box__link__icon ' />
                    </div>
                </div>
            </a>

        </>
    )
}
