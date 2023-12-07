import React, { useState } from 'react'
import './NavBar.css'
import { TiArrowLeft } from "react-icons/ti";
import NavBarLink from '../../Modules/NavBarLink/NavBarLink';
import NavBarLinkFull from '../../Modules/NavBarLinkFull/NavBarLinkFull';
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoSearchOutline } from "react-icons/io5";

export default function NavBar() {
    const [isOpenShop, setIsOpenShop] = useState(true)
    const openShop = (event) => {
        event.preventDefault()
        const shopDropDown = document.querySelector('.navbar__shop__dropdown')
        if (isOpenShop) {
            shopDropDown.classList.add("navbar__shop__dropdown--open")
            setIsOpenShop(false)
        } else {
            shopDropDown.classList.remove("navbar__shop__dropdown--open")
            setIsOpenShop(true)
        }
    }

    return (
        <div className='navbar d-flex justify-content-between align-items-center p-0 bg-white border-bottom'>
            <div className=" d-flex justify-content-center align-items-center p-3 ">
                <div className="navbar__logo  ">
                    <a href="">
                        <img src="/images/png/logo-dark.png" className=' w-100 ' alt="logo" />
                    </a>
                </div>
                <div className="navbar__links d-none d-xxl-flex justify-content-center align-items-center column-gap-2  ">
                    <NavBarLink title={"صنایع"} />
                    <NavBarLinkFull title={"مطالعات موردی"} />
                    <NavBarLink title={"وبلاگ"} />
                    <NavBarLinkFull title={"فروشگاه"} />
                </div>
            </div>
            <div className=" d-flex justify-content-center align-items-center ">
                <a href="" className=' text-decoration-none '>
                    <div className="navbar__item navbar__shop position-relative border-end ">
                        <IoSearchOutline className=' fs-4 ' />
                    </div>
                </a>
                <a href="" className=' text-decoration-none '>
                    <div className="navbar__item navbar__shop position-relative border-end " onClick={(event) => openShop(event)}>
                        <HiOutlineShoppingBag className=' fs-4 ' />
                        <span className='navbar__shop__badge translate-middle badge rounded-pill '>0</span>
                        <div className="navbar__shop__dropdown p-3 shadow ">
                            <span className='navbar__shop__dropdown__text'>هیچ محصولی در سبد خرید نیست.</span>
                        </div>
                    </div>
                </a>
                <a href="" className=' text-decoration-none d-flex d-xxl-none '>
                    <div className="navbar__hamburger__wrapper position-relative border-end ">
                        <div className="navbar__hamburger"></div>
                    </div>
                </a>
                <a href="" className=' text-decoration-none d-none d-md-flex '>
                    <div className="navbar__btn text-white ">
                        <span>یک نقل قول دریافت کنید<TiArrowLeft className=' fs-4 me-1  ' /></span>
                    </div>
                </a>
            </div>
        </div>
    )
}
