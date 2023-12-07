import React from 'react'
import './FooterList.css'
export default function FooterList({ title, link1, link2, link3, link4, link5, link6 }) {
    return (
        <ul className='footer__list__items'>
            <h2 className='footer__list__title text-white fs-6 fw-bold '>{title}</h2>
            <li className='footer__list'>
                <a href="" className='footer__list__link link-offset-2'>{link1}</a>
            </li>
            <li className='footer__list'>
                <a href="" className='footer__list__link link-offset-2'>{link2}</a>
            </li>
            <li className='footer__list'>
                <a href="" className='footer__list__link link-offset-2'>{link3}</a>
            </li>
            <li className='footer__list'>
                <a href="" className='footer__list__link link-offset-2'>{link4}</a>
            </li>
            <li className='footer__list'>
                <a href="" className='footer__list__link link-offset-2'>{link5}</a>
            </li>
            <li className='footer__list'>
                <a href="" className='footer__list__link link-offset-2'>{link6}</a>
            </li>
        </ul>
    )
}
