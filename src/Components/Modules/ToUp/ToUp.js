import React, { useEffect } from 'react'
import './ToUp.css'
import { LuArrowUp } from "react-icons/lu";
export default function ToUp() {

    useEffect(() => {
        const toUpBtn = document.querySelector('.to-up__wrapper')
        window.addEventListener("scroll", () => {
            if (window.scrollY > 600) {
                toUpBtn.classList.add('to-up__wrapper--active')
            } else {
                toUpBtn.classList.remove('to-up__wrapper--active')
            }
        })
    }, [])


    const toUpHandler = () => {
        window.scroll(0, 0)
    }

    return (
        <div className='to-up__wrapper p-3' onClick={toUpHandler}>
            <LuArrowUp className='to-up fs-2 text-white ' />
        </div>
    )
}
