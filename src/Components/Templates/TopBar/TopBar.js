import React from 'react'
import './TopBar.css'
import TopBarItem from '../../Modules/TopBarItem/TopBarItem';
import { TiSocialFacebook } from "react-icons/ti";
import { MdPhoneEnabled } from "react-icons/md";
import { MdMap } from "react-icons/md";
import { LuClock3 } from "react-icons/lu";
import { TiSocialTwitter } from "react-icons/ti";
import { AiFillLinkedin } from "react-icons/ai";
import { IoLogoSkype } from "react-icons/io";
import { LiaVimeo } from "react-icons/lia";
import { Container } from 'react-bootstrap';
export default function TopBar() {
    return (
        <Container fluid className=' d-flex justify-content-between align-items-center pt-3 px-5 mb-3   d-none d-xl-flex top-bar__font-size'>
            <div className=" d-flex align-items-center column-gap-3 ">
                <a href="" className=' text-decoration-none top-bar__hover'>
                    <TopBarItem text={"1 800 977 78 80"} icon={<MdPhoneEnabled />} hoverColor={"top-bar__hover"}/>
                </a>
                <TopBarItem text={"خیابان سوم، سانفرانسیسکو"} icon={<MdMap />} hoverColor={""}/>
                <TopBarItem text={"دوشنبه تا جمعه: 8 صبح تا 7 بعد از ظهر"} icon={<LuClock3 />} hoverColor={""}/>
            </div>
            <div className=" d-flex justify-content-center align-items-center  ">
                <div className=" column-gap-3 d-flex ms-3 ">
                    <div className="">
                        <a href="" className=' text-decoration-none top-bar__color top-bar__hover'>رسانه های جدید</a>
                    </div>
                    <div className="">
                        <a href="" className=' text-decoration-none top-bar__color top-bar__hover'>مشاغل</a>
                    </div>
                    <div className="">
                        <a href="" className=' text-decoration-none top-bar__color top-bar__hover'>مخاطب</a>
                    </div>
                </div>
                <div className=" d-flex justify-content-center align-items-center column-gap-3 fs-5 ">
                    <a href='' className=" top-bar__color top-bar__hover">
                        <TiSocialFacebook />
                    </a>
                    <a href='' className=" top-bar__color top-bar__hover">
                        <TiSocialTwitter />
                    </a>
                    <a href='' className=" top-bar__color top-bar__hover">
                        <LiaVimeo />
                    </a>
                    <a href='' className=" top-bar__color top-bar__hover">
                        <AiFillLinkedin />
                    </a>
                    <a href='' className=" top-bar__color top-bar__hover ">
                        <IoLogoSkype />
                    </a>
                </div>
            </div>
        </Container>
    )
}
