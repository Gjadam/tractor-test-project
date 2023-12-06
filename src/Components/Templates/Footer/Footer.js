import React from 'react'
import './Footer.css'
import { Container } from 'react-bootstrap'
import { TiSocialFacebook, TiSocialTwitter } from 'react-icons/ti'
import { LiaVimeo } from 'react-icons/lia'
import { AiFillLinkedin } from 'react-icons/ai'
import { IoLogoSkype } from 'react-icons/io'
import FooterList from '../../Modules/FooterList/FooterList'
export default function Footer() {
  return (
    <div className=" w-100  ">
      <div className=" d-flex justify-content-center align-items-center ">
        <div className="footer__top row d-flex justify-content-between align-items-center w-100 ">
          <div className="footer__top__email col-12 col-lg-6  d-flex justify-content-center align-items-center ">
            <span className='text-white fw-bold fs-4 '>ایمیل: tractor@thememove.com</span>
          </div>
          <div className="footer__top__phone col-12 col-lg-6  d-flex justify-content-center align-items-center ">
            <span className='text-white fw-bold fs-4 '>پشتیبانی: 88.666.888(+00)</span>
          </div>
        </div>
      </div>
      <div className="footer ">
        <Container className='d-flex justify-content-center align-content-center flex-column '>
          <div className=" d-flex justify-content-between align-content-start flex-wrap row-gap-5  ">
            <div className="">
              <img src="/images/png/logo-light.png" alt="logo" />
              <div className=" my-5 ">
                <p className='footer__text'>Tractor یک تم ممتاز وردپرس است که ویژگی‌های غالب، دموهای از پیش طراحی شده برجسته، طرح‌بندی صفحه سفارشی و پلاگین‌های صفحه‌سازی واکنش‌گرا را در بر می‌گیرد</p>
              </div>
              <div className="">
                <div className=" d-flex justify-content-start align-items-start column-gap-4 fs-5 ">
                  <a href='' className=" top-bar__color top-bar__hover">
                    <TiSocialTwitter />
                  </a>
                  <a href='' className=" top-bar__color top-bar__hover">
                    <TiSocialFacebook />
                  </a>
                  <a href='' className=" top-bar__color top-bar__hover">
                    <LiaVimeo />
                  </a>
                  <a href='' className=" top-bar__color top-bar__hover">
                    <AiFillLinkedin />
                  </a>
                </div>
              </div>
            </div>
            <div className="footer__lists d-flex justify-content-center align-items-start flex-wrap ">
              <FooterList title={"لینک های مفید"} link1={"مسیر"} link2={"لجستیک"} link3={"عوامل جهانی"} link4={"شبکه"} link5={"سوالات متداول"} link6={""} />
              <FooterList title={"شرکت"} link1={"در باره"} link2={"تجربه و تخصص"} link3={"پایداری"} link4={"اخبار و رسانه ها"} link5={"مطالعات موردی"} link6={"مخاطب"} />
              <FooterList title={"صنایع"} link1={"مواد الکترونیکی"} link2={"هدایا و پوشاک"} link3={"قطعات خودرو"} link4={"سیستم های قدرت"} link5={"مدیریت ساختمان"} link6={""} />
            </div>
          </div>
          <div className="footer-bottom d-flex justify-content-between align-items-center flex-wrap gap-3">
            <span>&copy; 2023 Created By TheGjad</span>
            <div className=" d-flex column-gap-4 ">
              <div className="">
                <a href="" className='footer__list__link link-offset-2'>حریم خصوصی</a>
              </div>
              <div className="">
                <a href="" className='footer__list__link footer__list__link__center link-offset-2'>شرایط استفاده</a>
              </div>
              <div className="">
                <a href="" className='footer__list__link link-offset-2'>نقشه سایت</a>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  )
}
