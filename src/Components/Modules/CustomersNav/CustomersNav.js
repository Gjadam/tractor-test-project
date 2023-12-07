import React from 'react'
import './CustomersNav.css'
import { IoIosArrowBack } from 'react-icons/io'
import { PiChatsFill } from 'react-icons/pi'
import { TfiLayoutLineSolid } from 'react-icons/tfi'
import { useSwiper } from 'swiper/react'

export default function CustomersNav() {
    const swiper = useSwiper()
    return (
        <div className=" d-flex justify-content-between align-items-center border-bottom pb-4 "  data-aos="fade-up" data-aos-duration="800">
            <div className=" d-flex justify-content-center align-items-center ">
                <PiChatsFill className='customers__icon ms-2' />
                <span className=' fs-2  fw-bold '>مشتریان خوشحال گفتند</span>
            </div>
            <div className="">
                <IoIosArrowBack className='customers__next-btn' onClick={() => swiper.slidePrev()} />
                <TfiLayoutLineSolid className='customers__between-btn' />
                <IoIosArrowBack className='customers__prev-btn ' onClick={() => swiper.slideNext()} />
            </div>
        </div>
    )
}
