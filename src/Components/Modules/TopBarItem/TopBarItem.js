import React from 'react'

export default function TopBarItem({ text, icon, hoverColor }) {
    return (
        <div className=" d-flex ">
            <div className="text-primary  ms-2">
            {icon}
            </div>
            <span className={`top-bar__color ${hoverColor}`}>{text}</span>
        </div>
    )
}
