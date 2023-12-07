import React from 'react'
import './About.css'
import AboutBox from '../../Modules/AboutBox/AboutBox'
import Button from '../../Modules/Button/Button'
export default function About() {
    return (
        <div className='about d-flex justify-content-between align-items-center w-100 '>
            <div className=" about__right-bg h-100 w-100 d-lg-flex d-none  "></div>
            <div className="about__left-bg d-flex justify-content-around align-items-start flex-column h-100 w-100 p-5">
                <h2 className='about__title fw-bold lh-base '>شرکتی که در زمینه خدمات و نگهداری فعالیت دارد.</h2>
                <div className=" d-flex ">
                    <AboutBox title={"مزایا برای شرکا"} text={"استراتژی های بقا برد-برد را برای اطمینان از تسلط فعالانه به میز بیاورید. در پایان روز، استراتژی‌های بقا برد-برد را به جدول منتقل کنید"} />
                    <AboutBox title={"مشاوره حرفه ای"} text={"مهندسی صنایع شاخه‌ای از مهندسی است که به بهینه‌سازی فرآیندها، سیستم‌ها یا سازمان‌های پیچیده می‌پردازد."} />
                </div>
                <Button text={"دریافت قیمت"} />
            </div>
        </div>
    )
}
