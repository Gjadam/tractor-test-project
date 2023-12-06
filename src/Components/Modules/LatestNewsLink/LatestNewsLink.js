import React from 'react'
import './LatestNewsLink.css'
export default function LatestNewsLink({title}) {
    return (
        <div className="news__latest-news__box border-bottom py-3 ">
            <a href="" className='news__latest-news__box__title__link link-offset-2'>
                <h4 className='news__latest-news__box__title fw-bold lh-base '>{title}</h4>
            </a>
            <h6 className='news__latest-news__box__date fw-bold mt-3 '>18 مرداد ، 1396</h6>
        </div>
    )
}
