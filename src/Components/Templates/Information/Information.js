import React from 'react'
import './Information.css'
import { Container } from 'react-bootstrap'
import InformationBox from '../../Modules/InformationBox/InformationBox'
export default function Information() {
    return (
        <div className='information my-5 '>
            <Container>
                <h2 className="information__title text-center fw-bold ">اعداد برای خودشان صحبت می کنند</h2>
                <div className=" w-100  row ">
                    <div className="col-12 col-md-6 col-lg-3">
                        <InformationBox imgUrl={"/images/png/information-icon-1.png"} count={"2000"} title={"شعب سراسر کشور"} text={"شعب ما در سراسر کشور و خارج از کشور گسترش یافته است."} />
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <InformationBox imgUrl={"/images/png/information-icon-2.png"} count={"3000"} title={"پروژه های انجام شده"} text={"ما به تعداد عظیمی از پروژه های تکمیل شده افتخار می کنیم."} />
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <InformationBox imgUrl={"/images/png/information-icon-3.png"} count={"543"} title={"درختان کاشته شده"} text={"کاشت درختان سبز برای حفظ پایداری"} />
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <InformationBox imgUrl={"/images/png/information-icon-4.png"} count={"4600"} title={"خرده فروشی های تجاری"} text={"شبکه خرده فروشی های ما می تواند به همه جای دنیا دسترسی داشته باشد."} />
                    </div>
                </div>
            </Container>
        </div>
    )
}
