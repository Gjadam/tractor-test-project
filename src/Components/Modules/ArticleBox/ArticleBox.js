import React from 'react'
import './ArticleBox.css'
import { FaRegCircle } from "react-icons/fa6";
import { HiOutlineArrowSmLeft } from "react-icons/hi";
export default function ArticleBox({ imgUrl, title, text }) {
    return (
        <>
            <a href="" className='article-box text-decoration-none '>
                <div className=' d-flex justify-content-between  align-items-center flex-column row-gap-2 '>
                    <div className="article-box__icon mb-3 ">
                        <img src={imgUrl} className='' alt="icon" />
                    </div>
                    <div className="article-box__content d-flex justify-content-between align-items-center flex-column">
                        <span className='article-box__title  fw-bold fs-4  '>{title}</span>
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
