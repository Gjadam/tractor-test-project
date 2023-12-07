import React from 'react'
import './NavBarLink.css'
import { MdKeyboardArrowDown } from "react-icons/md";
export default function NavBarLink({title}) {
    return (
        <div className="navbar__link__wrapper position-relative">
            <a href="" className='navbar__link text-decoration-none '>{title}<MdKeyboardArrowDown className=' me-1 ' /></a>
            <div className="navbar__link__dropdown shadow">
                <ul className='navbar__link__dropdown__links'>
                    <li className='navbar__link__dropdown__link__wrapper list-unstyled '>
                        <a href="" className='navbar__link__dropdown__link text-decoration-none fs-6'>لینک تستی</a>
                    </li>
                    <li className='navbar__link__dropdown__link__wrapper list-unstyled '>
                        <a href="" className='navbar__link__dropdown__link text-decoration-none fs-6'>لینک تستی</a>
                    </li>
                    <li className='navbar__link__dropdown__link__wrapper list-unstyled '>
                        <a href="" className='navbar__link__dropdown__link text-decoration-none fs-6'>لینک تستی</a>
                    </li>
                    <li className='navbar__link__dropdown__link__wrapper list-unstyled '>
                        <a href="" className='navbar__link__dropdown__link text-decoration-none fs-6'>لینک تستی</a>
                    </li>
                    <li className='navbar__link__dropdown__link__wrapper list-unstyled '>
                        <a href="" className='navbar__link__dropdown__link text-decoration-none fs-6'>لینک تستی</a>
                    </li>
                    <li className='navbar__link__dropdown__link__wrapper list-unstyled '>
                        <a href="" className='navbar__link__dropdown__link text-decoration-none fs-6'>لینک تستی</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
