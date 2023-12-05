import React from 'react'
import './ProjectsSlide.css'
import { HiOutlineArrowSmLeft } from 'react-icons/hi'

export default function ProjectsSlide({imgUrl, count, title, text}) {
    return (
        <div className=' d-flex justify-content-start align-items-center flex-row-reverse   my-5'>
            <div className="projects__bg position-relative  d-flex justify-content-start align-items-center " style={{ backgroundImage: `url(${imgUrl})` }}>
                <div className="projects__content d-flex justify-content-around align-items-start text-end flex-column text-white p-4 ">
                    <span className=' fs-3 fw-bold  '>{count}</span>
                    <div className="">
                        <h1 className=' fw-bold mb-4 '>{title}</h1>
                        <h6 className=''>{text}</h6>
                    </div>
                    <a href='' className="projects__content__link text-decoration-none">
                        <div className=''>
                            <span className='projects__content__link__title'>مشاهده پروژه</span>
                            <HiOutlineArrowSmLeft className='projects__content__link__icon ' />
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}
