import React from 'react'
import './InformationSlide.css'
export default function InformationSlide({ imgUrl, imgHoverUrl }) {
    return (
        <div className="information__logo__wrapper">
            <div className="information__logo__regular">
                <img src={imgUrl} className='information__logo' alt="logo" />
            </div>
            <div className="information__logo__hover">
                <img src={imgHoverUrl} className='information__logo' alt="logo" />
            </div>
        </div>
    )
}
