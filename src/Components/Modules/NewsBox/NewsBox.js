import React from 'react'
import './NewsBox.css'
export default function NewsBox({fadeTime, imgUrl, category, title }) {
    return (
        <div className="news__boxes__box "  data-aos="fade-up" data-aos-duration={fadeTime}>
            <div className="news__boxes__box__image__wrapper">
                <img src={imgUrl} className='news__boxes__box__image w-100 h-100 ' alt="image" />
            </div>
            <div className="news__boxes__box__content h-100  d-flex justify-content-end align-items-start flex-column text-end p-3 ">
                <div className=" d-flex ">
                    <span className='news__boxes__box__category py-0 px-2 mx-1 '>{category}</span>
                </div>
                <a href="" className=' text-decoration-none my-4'>
                    <span className='news__boxes__box__title text-white fw-bold  fs-5 '>{title}</span>
                </a>
                <span className='news__boxes__box__date text-white fw-bold '>4 مرداد ، 1396</span>
            </div>
        </div>
    )
}
