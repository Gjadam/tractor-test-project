import React, { useEffect } from 'react'
import './ToUp.css'
import { TiArrowSortedUp } from "react-icons/ti";
export default function ToUp() {

    useEffect(() => {
        const toUpBtn = document.querySelector('.to-up')
        window.addEventListener("scroll", () => {
            if (window.scrollY > 500) {
                toUpBtn.classList.add('to-up--active')
            } else {
                toUpBtn.classList.remove('to-up--active')
            }
        })
    }, [])


    const toUpHandler = () => {
        window.scroll(0, 0)
    }

    return (
        <>
            <TiArrowSortedUp className='to-up fs-1 shadow rounded-5 text-light p-1 ' onClick={toUpHandler}/>
        </>
    )
}
