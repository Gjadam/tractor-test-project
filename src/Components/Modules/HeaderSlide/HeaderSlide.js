import React from 'react'
import './HeaderSlide.css'
import { TiMediaPlayReverse } from "react-icons/ti";
import Button from '../Button/Button';
export default function HeaderSlide({ imgUrl, text, title, boxButtonTitle, normalButtonTitle, slide }) {
    return (
        <div className="header-slider d-flex justify-content-center align-items-center ">
            <img src={imgUrl} className='header-slider__image' alt="image" />
            <div className={`header-slider__content-wrapper p-3 d-flex ${slide === 3 ? "align-items-start" : "align-items-center"} justify-content-center flex-column text-white `}>
                <div className={`header-slider__content__texts  ${slide === 3 && " d-flex  flex-column-reverse "}`}>
                    <h5 className={`header-slider__text fw-bold ${slide === 3 && " text-end  align-self-start "}  ${slide === 2 && "text-primary "}`}  data-aos="fade-down" data-aos-duration="1500">{text}</h5>
                    <h1 className={`header-slider__title my-4 fw-bolder `}  data-aos="fade-down" data-aos-duration="1000">{title}</h1>
                </div>
                <div className=" d-flex justify-content-center align-items-center mt-4  column-gap-3">
                    <Button text={boxButtonTitle}  />
                    {
                        normalButtonTitle.length > 0 &&
                        <a href="" className={`${slide === 3 && "d-none"} text-decoration-none text-white` } data-aos="fade-right" data-aos-duration="1000">
                            <TiMediaPlayReverse className='header-slider__icon-color ms-1 ' />
                            <span className='header-slider__btn-hover'>{normalButtonTitle}</span>
                        </a>
                    }
                </div>
            </div>
        </div>
    )
}
