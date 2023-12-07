import React, { useEffect, useState } from 'react'
import './NavBar.css'
import { TiArrowLeft } from "react-icons/ti";
import NavBarLink from '../../Modules/NavBarLink/NavBarLink';
import NavBarLinkFull from '../../Modules/NavBarLinkFull/NavBarLinkFull';
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoSearchOutline } from "react-icons/io5";
import { LiaTimesSolid } from "react-icons/lia";
import { Accordion, Container } from 'react-bootstrap';
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

    const openNavbarMobile = (event) => {
        event.preventDefault()
        const navBarMobile = document.querySelector('.navbar__mobile')
        navBarMobile.classList.add("navbar__mobile--open")
    }

    const closeNavbarMobile = () => {
        const navBarMobile = document.querySelector('.navbar__mobile')
        navBarMobile.classList.remove("navbar__mobile--open")
    }

    const openSearchBox = (event) => {
        event.preventDefault()
        const searchBox = document.querySelector('.search-box')
        searchBox.classList.add("search-box--open")
    }

    const closeSearchBox = () => {
        const searchBox = document.querySelector('.search-box')
        searchBox.classList.remove("search-box--open")
    }

    useEffect(() => {
        window.addEventListener("keydown", (event) => {
            const searchBox = document.querySelector('.search-box')
            if (event.keyCode === 27) {
                searchBox.classList.remove("search-box--open")
            }
        })
    }, [])
    const exitSearchBoxClick = (event) => {
        const searchBox = document.querySelector('.search-box')
        if (event.keyCode === 27) {
            searchBox.classList.remove("search-box--open")
        }
    }


    return (
        <div className='navbar d-flex justify-content-between align-items-center position-sticky top-0 z-3  p-0 bg-white'>
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
                    <div className="navbar__item navbar__shop position-relative border-end " onClick={(event) => openSearchBox(event)}>
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
                    <div className="navbar__hamburger__wrapper position-relative border-end " onClick={(event) => openNavbarMobile(event)}>
                        <div className="navbar__hamburger"></div>
                    </div>
                </a>
                <a href="" className=' text-decoration-none d-none d-md-flex '>
                    <div className="navbar__btn text-white ">
                        <span>یک نقل قول دریافت کنید<TiArrowLeft className=' fs-4 me-1  ' /></span>
                    </div>
                </a>
            </div>
            <div className="navbar__mobile">
                <div className=" d-flex justify-content-between align-items-center bg-white p-4 ">
                    <img src="/images/png/logo-yellow.png" alt="logo" />
                    <LiaTimesSolid className='navbar__mobile__times-icon fs-3 text-secondary ' onClick={closeNavbarMobile} />
                </div>
                <div className="  p-4 ">
                    <Accordion flush>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header >
                                <span className=' fw-bold '>
                                    تایتل تستی
                                </span>
                            </Accordion.Header>
                            <Accordion.Body>
                                <ul className=' list-unstyled px-2 '>
                                    <li className=' pt-3 '>
                                        <a href="" className='navbar__mobile__link text-white text-decoration-none '>لینک تستی</a>
                                    </li>
                                    <li className=' pt-3 '>
                                        <a href="" className='navbar__mobile__link text-white text-decoration-none '>لینک تستی</a>
                                    </li>
                                    <li className=' pt-3 '>
                                        <a href="" className='navbar__mobile__link text-white text-decoration-none '>لینک تستی</a>
                                    </li>
                                    <li className=' pt-3 '>
                                        <a href="" className='navbar__mobile__link text-white text-decoration-none '>لینک تستی</a>
                                    </li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    <Accordion flush>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header >
                                <span className=' fw-bold '>
                                    تایتل تستی
                                </span>
                            </Accordion.Header>
                            <Accordion.Body>
                                <ul className=' list-unstyled px-2 '>
                                    <li className=' pt-3 '>
                                        <a href="" className='navbar__mobile__link text-white text-decoration-none '>لینک تستی</a>
                                    </li>
                                    <li className=' pt-3 '>
                                        <a href="" className='navbar__mobile__link text-white text-decoration-none '>لینک تستی</a>
                                    </li>
                                    <li className=' pt-3 '>
                                        <a href="" className='navbar__mobile__link text-white text-decoration-none '>لینک تستی</a>
                                    </li>
                                    <li className=' pt-3 '>
                                        <a href="" className='navbar__mobile__link text-white text-decoration-none '>لینک تستی</a>
                                    </li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    <Accordion flush>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header >
                                <span className=' fw-bold '>
                                    تایتل تستی
                                </span>
                            </Accordion.Header>
                            <Accordion.Body>
                                <ul className=' list-unstyled px-2 '>
                                    <li className=' pt-3 '>
                                        <a href="" className='navbar__mobile__link text-white text-decoration-none '>لینک تستی</a>
                                    </li>
                                    <li className=' pt-3 '>
                                        <a href="" className='navbar__mobile__link text-white text-decoration-none '>لینک تستی</a>
                                    </li>
                                    <li className=' pt-3 '>
                                        <a href="" className='navbar__mobile__link text-white text-decoration-none '>لینک تستی</a>
                                    </li>
                                    <li className=' pt-3 '>
                                        <a href="" className='navbar__mobile__link text-white text-decoration-none '>لینک تستی</a>
                                    </li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    <Accordion flush>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header >
                                <span className=' fw-bold '>
                                    تایتل تستی
                                </span>
                            </Accordion.Header>
                            <Accordion.Body>
                                <ul className=' list-unstyled px-2 '>
                                    <li className=' pt-3 '>
                                        <a href="" className='navbar__mobile__link text-white text-decoration-none '>لینک تستی</a>
                                    </li>
                                    <li className=' pt-3 '>
                                        <a href="" className='navbar__mobile__link text-white text-decoration-none '>لینک تستی</a>
                                    </li>
                                    <li className=' pt-3 '>
                                        <a href="" className='navbar__mobile__link text-white text-decoration-none '>لینک تستی</a>
                                    </li>
                                    <li className=' pt-3 '>
                                        <a href="" className='navbar__mobile__link text-white text-decoration-none '>لینک تستی</a>
                                    </li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            </div>
            <form className="search-box" onKeyDown={(event) => exitSearchBoxClick(event)} >
                <div class="search-box__input-wrapper position-relative" >
                    <input class="search-box__input-box" type="text" />
                    <div className="search-box__close-btn ">
                        <LiaTimesSolid className='search-box__close-btn__icon text-white ' onClick={closeSearchBox} />
                    </div>
                    <span className='search-box__text fw-bold '> برای جست و جو Enter و برای خروج ESC را بزنید</span>
                </div>
            </form>
        </div>
    )
}
