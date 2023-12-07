import React from 'react'
import './NavBarLinkFull.css'
import { MdKeyboardArrowDown } from "react-icons/md";
export default function NavBarLinkFull({ title }) {
    return (
        <div className="navbar__link__wrapper ">
            <a href="" className='navbar__link text-decoration-none '>{title}<MdKeyboardArrowDown className=' me-1 ' /></a>
            <div className="navbar__link-full__dropdown d-flex justify-content-between align-items-start shadow">
                <ul className='navbar__link-full__dropdown__links'>
                    <h3 className='navbar__link-full__dropdown__links__title fw-bold fs-5 py-2   border-bottom '>تایتل تستی</h3>
                    <li className='navbar__link-full__dropdown__link__wrapper me-3  '>
                        <a href="" className='navbar__link-full__dropdown__link text-decoration-none fs-6'>لینک تستی</a>
                    </li>
                    <li className='navbar__link-full__dropdown__link__wrapper me-3  '>
                        <a href="" className='navbar__link-full__dropdown__link text-decoration-none fs-6'>لینک تستی</a>
                    </li>
                </ul>
                <ul className='navbar__link-full__dropdown__links'>
                    <h3 className='navbar__link-full__dropdown__links__title fw-bold fs-5 py-2   border-bottom '>تایتل تستی</h3>
                    <li className='navbar__link-full__dropdown__link__wrapper me-3  '>
                        <a href="" className='navbar__link-full__dropdown__link text-decoration-none fs-6'>لینک تستی</a>
                    </li>
                    <li className='navbar__link-full__dropdown__link__wrapper me-3  '>
                        <a href="" className='navbar__link-full__dropdown__link text-decoration-none fs-6'>لینک تستی</a>
                    </li>
                    <li className='navbar__link-full__dropdown__link__wrapper me-3  '>
                        <a href="" className='navbar__link-full__dropdown__link text-decoration-none fs-6'>لینک تستی</a>
                    </li>
                    <li className='navbar__link-full__dropdown__link__wrapper me-3  '>
                        <a href="" className='navbar__link-full__dropdown__link text-decoration-none fs-6'>لینک تستی</a>
                    </li>
                    <li className='navbar__link-full__dropdown__link__wrapper me-3  '>
                        <a href="" className='navbar__link-full__dropdown__link text-decoration-none fs-6'>لینک تستی</a>
                    </li>
                    <li className='navbar__link-full__dropdown__link__wrapper me-3  '>
                        <a href="" className='navbar__link-full__dropdown__link text-decoration-none fs-6'>لینک تستی</a>
                    </li>
                </ul>
                <ul className='navbar__link-full__dropdown__links'>
                    <h3 className='navbar__link-full__dropdown__links__title fw-bold fs-5 py-2   border-bottom '>تایتل تستی</h3>
                    <li className='navbar__link-full__dropdown__link__wrapper me-3  '>
                        <a href="" className='navbar__link-full__dropdown__link text-decoration-none fs-6'>لینک تستی</a>
                    </li>
                    <li className='navbar__link-full__dropdown__link__wrapper me-3  '>
                        <a href="" className='navbar__link-full__dropdown__link text-decoration-none fs-6'>لینک تستی</a>
                    </li>
                    <li className='navbar__link-full__dropdown__link__wrapper me-3  '>
                        <a href="" className='navbar__link-full__dropdown__link text-decoration-none fs-6'>لینک تستی</a>
                    </li>
                    <li className='navbar__link-full__dropdown__link__wrapper me-3  '>
                        <a href="" className='navbar__link-full__dropdown__link text-decoration-none fs-6'>لینک تستی</a>
                    </li>
                    <li className='navbar__link-full__dropdown__link__wrapper me-3  '>
                        <a href="" className='navbar__link-full__dropdown__link text-decoration-none fs-6'>لینک تستی</a>
                    </li>
                </ul>
                <ul className='navbar__link-full__dropdown__links'>
                    <h3 className='navbar__link-full__dropdown__links__title fw-bold fs-5 py-2   border-bottom '>تایتل تستی</h3>
                    <li className='navbar__link-full__dropdown__link__wrapper me-3  '>
                        <a href="" className='navbar__link-full__dropdown__link text-decoration-none fs-6'>لینک تستی</a>
                    </li>
                    <li className='navbar__link-full__dropdown__link__wrapper me-3  '>
                        <a href="" className='navbar__link-full__dropdown__link text-decoration-none fs-6'>لینک تستی</a>
                    </li>
                    <li className='navbar__link-full__dropdown__link__wrapper me-3  '>
                        <a href="" className='navbar__link-full__dropdown__link text-decoration-none fs-6'>لینک تستی</a>
                    </li>
                    <li className='navbar__link-full__dropdown__link__wrapper me-3  '>
                        <a href="" className='navbar__link-full__dropdown__link text-decoration-none fs-6'>لینک تستی</a>
                    </li>
                    <li className='navbar__link-full__dropdown__link__wrapper me-3  '>
                        <a href="" className='navbar__link-full__dropdown__link text-decoration-none fs-6'>لینک تستی</a>
                    </li>
                    <li className='navbar__link-full__dropdown__link__wrapper me-3  '>
                        <a href="" className='navbar__link-full__dropdown__link text-decoration-none fs-6'>لینک تستی</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
